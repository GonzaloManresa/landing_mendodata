import test from 'node:test';
import assert from 'node:assert/strict';
import { readPage } from './helpers.mjs';

const header = (html) => html.match(/<header[\s\S]*?<\/header>/i)?.[0] ?? '';
const hrefs = (fragment) => [...fragment.matchAll(/href="([^"]*)"/g)].map((m) => m[1]);

test('header links to the blueprint destinations with full routes', () => {
  const h = header(readPage('index.html'));
  assert.ok(h, 'la página debe tener <header>');
  assert.deepEqual(hrefs(h), [
    '/',
    '/#soluciones',
    '/proyectos',
    '/#como-trabajamos',
    '/#equipo',
    '/#contacto',
    '/#contacto',
  ]);
  assert.match(h, />\s*Contanos tu caso\s*</);
  assert.match(h, /aria-label="MendoData, inicio"/);
  assert.doesNotMatch(h, /wa\.me/);
});

test('header has an accessible mobile menu toggle', () => {
  const h = header(readPage('index.html'));
  assert.match(h, /<button[^>]+class="menu-toggle"[^>]*>/);
  assert.match(h, /aria-controls="site-menu"/);
  assert.match(h, /aria-expanded="false"/);
  assert.match(h, /id="site-menu"/);
});

test('home exposes the anchors the global navigation targets', () => {
  const html = readPage('index.html');
  for (const id of ['soluciones', 'como-trabajamos', 'equipo', 'contacto']) {
    assert.match(html, new RegExp(`id="${id}"`), `falta id="${id}"`);
  }
  for (const id of ['servicios', 'proceso', 'nosotros']) {
    assert.doesNotMatch(html, new RegExp(`id="${id}"`), `quedó id="${id}"`);
  }
});

test('home no longer has the fixed mobile contact bar', () => {
  assert.doesNotMatch(readPage('index.html'), /mobile-contact-cta/);
});
