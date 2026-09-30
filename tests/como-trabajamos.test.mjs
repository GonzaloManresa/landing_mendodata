import test from 'node:test';
import assert from 'node:assert/strict';
import { readPage } from './helpers.mjs';

const home = readPage('index.html');
const section = home.match(/<section[^>]+id="como-trabajamos"[\s\S]*?<\/section>/i)?.[0] ?? '';
const text = (fragment) => fragment
  .replace(/<[^>]+>/g, ' ')
  .replace(/\s+/g, ' ')
  .trim();

test('how-we-work section comes right after operations and before the team', () => {
  assert.ok(section, 'la sección #como-trabajamos debe existir');
  const ids = [...home.matchAll(/<section[^>]+id="([^"]+)"/g)].map((m) => m[1]);
  const at = ids.indexOf('como-trabajamos');
  assert.equal(ids[at - 1], 'operaciones-logistica');
  assert.equal(ids[at + 1], 'equipo');
});

test('how-we-work uses the blueprint heading and intro', () => {
  const h2 = section.match(/<h2[\s\S]*?<\/h2>/)?.[0] ?? '';
  assert.equal(h2.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim(), 'Cómo trabajamos');
  assert.match(text(section), /No empezamos por una herramienta\. Primero entendemos cómo funciona tu operación y después definimos la solución adecuada\./);
});

test('how-we-work shows exactly the four blueprint steps in order', () => {
  const steps = [...section.matchAll(/<li class="step" id="([^"]+)"[^>]*>([\s\S]*?)<\/li>/g)].map((m) => ({
    id: m[1],
    number: text(m[2].match(/<span class="step-number"[^>]*>[\s\S]*?<\/span>/)?.[0] ?? ''),
    title: text(m[2].match(/<h3[\s\S]*?<\/h3>/)?.[0] ?? ''),
    text: text(m[2].match(/<p(?:\s[^>]*)?>[\s\S]*?<\/p>/)?.[0] ?? ''),
  }));
  assert.deepEqual(steps, [
    { id: 'process-step-consulta', number: '1', title: 'Consulta inicial', text: 'Nos contás qué proceso, problema o necesidad querés mejorar.' },
    { id: 'process-step-contexto', number: '2', title: 'Entendimiento del contexto', text: 'Conocemos cómo funciona actualmente la operación, quiénes participan y qué limitaciones existen.' },
    { id: 'process-step-propuesta', number: '3', title: 'Recomendación y propuesta', text: 'Definimos qué solución conviene y presentamos su alcance, tiempos estimados e inversión.' },
    { id: 'process-step-implementacion', number: '4', title: 'Desarrollo e implementación', text: 'Construimos, validamos e implementamos la solución, acompañando su puesta en funcionamiento.' },
  ]);
  assert.match(section, /<ol class="steps"/, 'la secuencia es una lista ordenada');
});

test('how-we-work closes with the commercial note and has no CTA', () => {
  assert.match(
    text(section),
    /Después de recibir tu consulta, nos ponemos en contacto para entender mejor la necesidad\. Si tiene sentido avanzar, coordinamos una primera conversación\./,
  );
  assert.doesNotMatch(section, /<a\b|<button\b/);
  assert.doesNotMatch(text(section), /[Cc]alendly|[Dd]iagnóstico gratuito|\$/);
});
