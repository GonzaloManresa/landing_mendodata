import test from 'node:test';
import assert from 'node:assert/strict';
import { readPage } from './helpers.mjs';

const home = readPage('index.html');
const section = home.match(/<section[^>]+id="problemas-operativos"[\s\S]*?<\/section>/i)?.[0] ?? '';
const text = (fragment) => fragment
  .replace(/<[^>]+>/g, ' ')
  .replace(/\s+/g, ' ')
  .trim();

test('problems section comes right after the hero', () => {
  assert.ok(section, 'la sección #problemas-operativos debe existir');
  const ids = [...home.matchAll(/<section[^>]+id="([^"]+)"/g)].map((m) => m[1]);
  assert.equal(ids[0], 'inicio');
  assert.equal(ids[1], 'problemas-operativos');
  assert.doesNotMatch(home, /Así te ayudamos|class="section helps"/);
});

test('problems section uses the blueprint heading and intro', () => {
  const h2 = section.match(/<h2[\s\S]*?<\/h2>/)?.[0] ?? '';
  assert.equal(
    h2.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim(),
    'Problemas operativos que podemos ayudar a ordenar',
  );
  assert.match(
    text(section),
    /Cada empresa tiene una realidad distinta\. Pero cuando los procesos crecen sin las herramientas adecuadas, aparecen situaciones que consumen tiempo, generan errores y dificultan el control de la operación\./,
  );
});

test('problems section shows exactly the five blueprint cards in order', () => {
  const cards = [...section.matchAll(/<li class="problem-card"[^>]*>([\s\S]*?)<\/li>/g)].map((m) => m[1]);
  const read = (card) => [
    text(card.match(/<h3[\s\S]*?<\/h3>/)?.[0] ?? ''),
    text(card.match(/<p(?:\s[^>]*)?>[\s\S]*?<\/p>/)?.[0] ?? ''),
  ];
  assert.deepEqual(cards.map(read), [
    ['Procesos manuales y repetitivos', 'Tareas que consumen tiempo y podrían resolverse de una forma más simple y ordenada.'],
    ['Información dispersa', 'Datos repartidos entre planillas, mails y sistemas que no se conectan entre sí.'],
    ['Falta de visibilidad y control', 'Dificultad para saber qué está ocurriendo, qué está pendiente y dónde intervenir.'],
    ['Errores y retrabajo', 'Cargas duplicadas, información desactualizada o tareas que deben hacerse nuevamente.'],
    ['Dependencia de personas específicas', 'Procesos que dependen demasiado del conocimiento o la disponibilidad de alguien específico.'],
  ]);
  for (const card of cards) {
    assert.match(card, /<svg[^>]*aria-hidden="true"/, 'íconos decorativos ocultos');
  }
});

test('problems section closes with the transition line and has no CTA', () => {
  assert.match(text(section), /Entender el problema es el primer paso para definir qué solución conviene\./);
  assert.doesNotMatch(section, /<a\b|<button\b/);
  assert.doesNotMatch(section, /Microsoft|Power (Apps|Automate|BI)/);
});
