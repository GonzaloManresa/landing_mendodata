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

test('hero uses the approved copy without eyebrow', () => {
  assert.ok(hero, 'la sección #inicio debe existir');
  const copy = text(hero);
  assert.doesNotMatch(hero, /hero-eyebrow|Sistemas · Automatización · Datos/);
  const h1Text = (hero.match(/<h1[\s\S]*?<\/h1>/)?.[0] ?? '').replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
  assert.match(h1Text, /^Sistemas a medida para pymes$/);
  assert.match(copy, /Ordenamos la información y automatizamos las tareas manuales de tu operación\./);
  assert.doesNotMatch(copy, /Primero entendemos el problema\. Después definimos la tecnología adecuada\./);
});

test('hero highlights "a medida" in the headline', () => {
  const h1 = hero.match(/<h1[\s\S]*?<\/h1>/)?.[0] ?? '';
  assert.match(h1, /<span class="[^"]*\bhl\b[^"]*"[^>]*>a medida<\/span>/);
});

test('hero has a primary CTA to contact and a link to the featured project', () => {
  const links = [...hero.matchAll(/<a\b[^>]*>[\s\S]*?<\/a>/g)].map((m) => m[0]);
  assert.equal(links.length, 2, 'CTA principal + link de texto');
  assert.match(links[0], /href="#contacto"/);
  assert.match(text(links[0]), /^Contanos qué necesitás$/);
  assert.match(links[1], /href="#proyecto-destacado"/);
  assert.match(text(links[1]), /^Ver proyectos$/);
  assert.match(home, /id="proyecto-destacado"/, 'el ancla de "Ver proyectos" debe existir');
  assert.doesNotMatch(hero, /wa\.me|calendly/i);
});

test('hero shows the photo placeholder and the floating card', () => {
  assert.match(hero, /class="hero-media"/);
  assert.match(text(hero), /\[FOTO DEL EQUIPO\]/);
  assert.equal((hero.match(/class="hero-avatar"/g) ?? []).length, 3);
  assert.match(text(hero), /Primero entendemos tu operación\. Después elegimos la tecnología\./);
});

test('hero no longer includes the dashboard mockup or the trust strip', () => {
  assert.doesNotMatch(hero, /id="hero-visual"|Demostración ilustrativa|class="trust"/);
});

test('home header overlays the hero and other pages keep the normal header', () => {
  assert.match(home, /<header class="site-header is-overlay"/);
  assert.match(readPage('proyectos/index.html'), /<header class="site-header"[^>]*>/);
  assert.doesNotMatch(readPage('proyectos/index.html').match(/<header[^>]*>/)?.[0] ?? '', /is-overlay/);
});

test('hero drops the previous Microsoft-centered content', () => {
  assert.doesNotMatch(hero, /Microsoft|Power (Apps|Automate|BI)/);
  assert.doesNotMatch(hero, /showcase|tab-input|Ver un ejemplo/);
  assert.equal((home.match(/<h1\b/g) ?? []).length, 1);
});
