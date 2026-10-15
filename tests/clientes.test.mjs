import test from 'node:test';
import assert from 'node:assert/strict';
import { readPage } from './helpers.mjs';
import { clients } from '../src/data/clients.ts';

const home = readPage('index.html');
const section = home.match(/<section[^>]+id="clientes"[\s\S]*?<\/section>/i)?.[0] ?? '';
const text = (fragment) => fragment.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();

test('clients section sits between the featured project and operations', () => {
  const ids = [...home.matchAll(/<section[^>]+id="([^"]+)"/g)].map((m) => m[1]);
  const i = ids.indexOf('clientes');
  assert.ok(i > 0, 'la sección #clientes debe existir');
  assert.equal(ids[i - 1], 'proyecto-destacado');
  assert.equal(ids[i + 1], 'operaciones-logistica');
});

test('clients section uses the approved heading and nothing else', () => {
  assert.match(section, /<p class="clients-kicker"[^>]*>Clientes<\/p>/);
  const h2 = section.match(/<h2[\s\S]*?<\/h2>/)?.[0] ?? '';
  assert.equal(text(h2), 'Empresas que ya confiaron en MendoData');
  assert.match(h2, /<span class="hl"[^>]*>MendoData<\/span>/);
  assert.doesNotMatch(section, /<a\b|<button\b/, 'sin links ni botones');
});

test('the first set of cards is readable and every copy is hidden from assistive tech', () => {
  const cards = [...section.matchAll(/<li class="client-card"([^>]*)>([\s\S]*?)<\/li>/g)];
  const visible = cards.filter((c) => !/aria-hidden="true"/.test(c[1]));
  assert.equal(visible.length, clients.length, 'un solo set visible para lectores de pantalla');
  assert.ok(cards.length >= clients.length * 2, 'el track repite el set para el loop');
  assert.equal(cards.length % clients.length, 0);
  for (const client of clients) {
    const card = visible.find((c) => c[2].includes(client.sector));
    assert.ok(card, `tarjeta de ${client.name}`);
    // Con logo: alt descriptivo. Sin logo: el nombre en texto.
    assert.ok(card[2].includes(`alt="${client.alt}"`) || text(card[2]).includes(client.name));
  }
});

test('logos are lazy loaded with fixed dimensions', () => {
  for (const img of section.match(/<img\b[^>]*>/g) ?? []) {
    assert.match(img, /loading="lazy"/);
    assert.match(img, /width="\d+"/);
    assert.match(img, /height="\d+"/);
  }
});
