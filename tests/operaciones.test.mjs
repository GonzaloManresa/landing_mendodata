import test from 'node:test';
import assert from 'node:assert/strict';
import { readPage } from './helpers.mjs';

const home = readPage('index.html');
const section = home.match(/<section[^>]+id="operaciones-logistica"[\s\S]*?<\/section>/i)?.[0] ?? '';
const text = (fragment) => fragment
  .replace(/<[^>]+>/g, ' ')
  .replace(/\s+/g, ' ')
  .trim();

test('operations section comes right after the featured project', () => {
  assert.ok(section, 'la sección #operaciones-logistica debe existir');
  const ids = [...home.matchAll(/<section[^>]+id="([^"]+)"/g)].map((m) => m[1]);
  assert.deepEqual(ids.slice(0, 6), ['inicio', 'problemas-operativos', 'soluciones', 'proyecto-destacado', 'operaciones-logistica', 'como-trabajamos']);
  assert.doesNotMatch(home, /conversion-cta/);
});

test('operations section uses the blueprint label, heading and copy', () => {
  assert.match(text(section), /^Foco de especialización/);
  const h2 = section.match(/<h2[\s\S]*?<\/h2>/)?.[0] ?? '';
  assert.equal(h2.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim(), 'Operaciones y logística');
  assert.match(text(section), /Estamos profundizando nuestro trabajo en procesos de inventario, movimientos, trazabilidad, distribución y control operativo\./);
  assert.match(text(section), /Trabajamos con empresas de distintos sectores, y este foco crece a partir de necesidades y proyectos reales que requieren más visibilidad, seguimiento y control\./);
  assert.doesNotMatch(section, /[Ee]specialistas en logística/);
});

test('operations section lists exactly the five focus processes', () => {
  const items = [...section.matchAll(/<li class="focus-item"[^>]*>([\s\S]*?)<\/li>/g)].map((m) => text(m[1]));
  assert.deepEqual(items, [
    'Inventarios y stock',
    'Movimientos entre sucursales',
    'Trazabilidad',
    'Distribución y seguimiento',
    'Control operativo',
  ]);
});

test('operations visual is accessible, illustrative and free of fake data', () => {
  assert.match(
    section,
    /id="operations-logistics-visual"[^>]*role="img"[^>]*aria-label="Representación de procesos de inventario, movimientos, trazabilidad, distribución y control operativo\."/,
  );
  assert.match(text(section), /Demostración ilustrativa/);
  assert.doesNotMatch(text(section), /\d+\s?%/);
  assert.doesNotMatch(section, /AgroGlobal|Bodegas del Sur|Mendoza Log|Fratelli|Andina/);
});

test('operations section has no CTA and no technology focus', () => {
  assert.doesNotMatch(section, /<a\b|<button\b/);
  assert.doesNotMatch(section, /Microsoft|Power (Apps|Automate|BI)/);
});
