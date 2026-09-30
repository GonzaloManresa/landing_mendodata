import test from 'node:test';
import assert from 'node:assert/strict';
import { readPage } from './helpers.mjs';

const home = readPage('index.html');
const section = home.match(/<section[^>]+id="soluciones"[\s\S]*?<\/section>/i)?.[0] ?? '';
const text = (fragment) => fragment
  .replace(/<[^>]+>/g, ' ')
  .replace(/\s+/g, ' ')
  .trim();
const cards = [...section.matchAll(/<article class="solution-card"[^>]*>([\s\S]*?)<\/article>/g)].map((m) => m[1]);

test('solutions section comes right after the problems section', () => {
  assert.ok(section, 'la sección #soluciones debe existir');
  const ids = [...home.matchAll(/<section[^>]+id="([^"]+)"/g)].map((m) => m[1]);
  assert.deepEqual(ids.slice(0, 3), ['inicio', 'problemas-operativos', 'soluciones']);
});

test('solutions section uses the blueprint heading and intro', () => {
  const h2 = section.match(/<h2[\s\S]*?<\/h2>/)?.[0] ?? '';
  assert.equal(h2.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim(), 'Soluciones que podemos construir');
  assert.match(
    text(section),
    /A partir de cada problema, definimos qué solución puede ayudar mejor: un sistema a medida, un proceso automatizado, una mejor forma de trabajar con los datos o una combinación de varias herramientas\./,
  );
});

test('solutions section shows the three blueprint families with examples', () => {
  const read = (card) => ({
    title: text(card.match(/<h3[\s\S]*?<\/h3>/)?.[0] ?? ''),
    description: text(card.match(/<p class="solution-desc"[^>]*>[\s\S]*?<\/p>/)?.[0] ?? ''),
    examples: [...card.matchAll(/<li class="solution-example"[^>]*>([\s\S]*?)<\/li>/g)].map((m) => text(m[1])),
  });
  assert.deepEqual(cards.map(read), [
    {
      title: 'Sistemas y aplicaciones a medida',
      description: 'Desarrollamos herramientas adaptadas a la forma en que trabaja cada empresa, sus procesos y sus necesidades específicas.',
      examples: ['Sistemas internos', 'Aplicaciones de gestión', 'Inventarios', 'Circuitos operativos'],
    },
    {
      title: 'Digitalización y automatización',
      description: 'Convertimos procesos manuales en flujos digitales más simples, ordenados y fáciles de seguir.',
      examples: ['Formularios digitales', 'Aprobaciones', 'Avisos automáticos', 'Flujos internos'],
    },
    {
      title: 'Datos e integraciones',
      description: 'Conectamos fuentes, organizamos información y desarrollamos indicadores para mejorar la visibilidad de la operación.',
      examples: ['Tableros e indicadores', 'Centralización de información', 'Conexión entre sistemas', 'Reportes operativos'],
    },
  ]);
});

test('each solution has an accessible, replaceable visual', () => {
  const visuals = [
    ['solution-custom-systems-visual', 'Interfaz de una aplicación empresarial adaptada a un proceso operativo.'],
    ['solution-automation-visual', 'Flujo digital de tareas y automatizaciones para un proceso empresarial.'],
    ['solution-data-integrations-visual', 'Panel de datos que conecta información operativa de distintas fuentes.'],
  ];
  for (const [index, [id, alt]] of visuals.entries()) {
    assert.match(cards[index], new RegExp(`id="${id}"[^>]*role="img"[^>]*aria-label="${alt.replace(/\./g, '\\.')}"`));
  }
});

test('technologies stay secondary and the section has no CTA', () => {
  const titles = [...section.matchAll(/<h[23][\s\S]*?<\/h[23]>/g)].map((m) => text(m[0])).join(' ');
  assert.doesNotMatch(titles, /Power|Microsoft/);
  for (const card of cards) {
    assert.match(card, /<p class="solution-tech"/, 'línea de herramientas secundaria');
  }
  assert.doesNotMatch(section, /<a\b|<button\b/);
});

test('solutions section closes with the blueprint line', () => {
  assert.match(text(section), /No partimos de una herramienta\. Partimos del problema\./);
});

test('solution visuals avoid client names and currency figures', () => {
  assert.doesNotMatch(section, /Acme|Bodegas del Sur|Mendoza Log|Fintech|Andina|Agro Global/);
  assert.doesNotMatch(text(section), /\$\s?\d/);
});
