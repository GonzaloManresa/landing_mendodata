import test from 'node:test';
import assert from 'node:assert/strict';
import { readPage } from './helpers.mjs';

const home = readPage('index.html');
const hero = home.match(/<section[^>]+id="inicio"[\s\S]*?<\/section>/i)?.[0] ?? '';
const text = (fragment) => fragment
  .replace(/<script[\s\S]*?<\/script>/gi, '')
  .replace(/<style[\s\S]*?<\/style>/gi, '')
  .replace(/<[^>]+>/g, ' ')
  .replace(/\s+/g, ' ')
  .trim();

test('hero uses the approved blueprint copy', () => {
  assert.ok(hero, 'la sección #inicio debe existir');
  const copy = text(hero);
  assert.match(copy, /Sistemas, automatización y datos para ordenar y mejorar procesos operativos\./);
  const h1Text = (hero.match(/<h1[\s\S]*?<\/h1>/)?.[0] ?? '').replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
  assert.match(
    h1Text,
    /^Ordenamos y digitalizamos procesos para que tu empresa gane tiempo, reduzca errores y tenga más control\.$/,
  );
  assert.match(copy, /Cuando la información está dispersa, las tareas son demasiado manuales o los procesos dependen de demasiadas personas, entendemos cómo funciona la operación y construimos e implementamos la solución adecuada\./);
  assert.match(copy, /Primero entendemos el problema\. Después definimos la tecnología adecuada\./);
});

test('hero highlights the three benefits in the headline', () => {
  const h1 = hero.match(/<h1[\s\S]*?<\/h1>/)?.[0] ?? '';
  assert.match(h1, /<span class="hl"[^>]*>gane tiempo, reduzca errores<\/span>/);
  assert.match(h1, /<span class="hl"[^>]*>más control<\/span>/);
});

test('hero has a single primary CTA to the contact section', () => {
  const links = [...hero.matchAll(/<a\b[^>]*>[\s\S]*?<\/a>/g)].map((m) => m[0]);
  assert.equal(links.length, 1, 'un único CTA en el Hero');
  assert.match(links[0], /href="#contacto"/);
  assert.match(text(links[0]), /^Contanos qué necesitás resolver$/);
  assert.doesNotMatch(hero, /wa\.me|calendly/i);
});

test('hero trust strip has exactly the three blueprint messages', () => {
  const items = [...hero.matchAll(/<li class="trust-item"[^>]*>([\s\S]*?)<\/li>/g)].map((m) => text(m[1]));
  assert.deepEqual(items, [
    'Entendemos el proceso antes de desarrollar.',
    'Elegimos la tecnología según tu problema.',
    'Acompañamos la implementación.',
  ]);
});

test('hero visual is accessible and marked as illustrative', () => {
  assert.match(hero, /id="hero-visual"/);
  assert.match(
    hero,
    /role="img"[^>]*aria-label="Interfaz digital para organizar procesos operativos, información y datos empresariales\."/,
  );
  assert.match(text(hero), /Demostración ilustrativa/);
});

test('hero drops the previous Microsoft-centered content', () => {
  assert.doesNotMatch(hero, /Microsoft|Power (Apps|Automate|BI)/);
  assert.doesNotMatch(hero, /showcase|tab-input|Ver un ejemplo/);
  assert.equal((home.match(/<h1\b/g) ?? []).length, 1);
});
