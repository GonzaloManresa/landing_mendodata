import test from 'node:test';
import assert from 'node:assert/strict';
import { readPage } from './helpers.mjs';
import { featuredProject } from '../src/data/projects.ts';

const home = readPage('index.html');
const section = home.match(/<section[^>]+id="proyecto-destacado"[\s\S]*?<\/section>/i)?.[0] ?? '';
const text = (fragment) => fragment
  .replace(/<[^>]+>/g, ' ')
  .replace(/\s+/g, ' ')
  .trim();
const heading = (fragment) => fragment.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();

test('project data keeps the blueprint copy in one reusable place', () => {
  // `detail` (versión ampliada para /proyectos) se verifica en proyectos-page.test.mjs
  const { detail, ...homeFields } = featuredProject;
  assert.ok(detail);
  assert.deepEqual(homeFields, {
    slug: 'control-inventario-sucursales',
    status: 'Proyecto real anonimizado',
    name: 'Control de inventario y sucursales',
    tags: ['Operaciones', 'Inventarios', 'Gestión entre sucursales'],
    problem: 'Había dificultades para controlar inventarios, registrar movimientos entre sucursales, gestionar diferencias de stock y seguir aprobaciones.',
    solution: 'Desarrollamos un sistema para gestionar inventarios con códigos de barras, registrar movimientos, controlar diferencias y digitalizar aprobaciones.',
    features: [
      'Gestión de inventario con códigos de barras.',
      'Registro de movimientos entre sucursales.',
      'Control de diferencias de stock.',
      'Aprobaciones digitales.',
    ],
    result: 'Mayor control y trazabilidad de la operación, con mejor capacidad para detectar inconsistencias.',
    visualAlt: 'Interfaz de un sistema de gestión de inventarios y movimientos entre sucursales.',
    visualNote: 'Representación ilustrativa basada en un proyecto real',
    privacyNote: 'Información anonimizada para preservar la confidencialidad del cliente.',
  });
});

test('featured project comes right after the solutions section', () => {
  assert.ok(section, 'la sección #proyecto-destacado debe existir');
  const ids = [...home.matchAll(/<section[^>]+id="([^"]+)"/g)].map((m) => m[1]);
  assert.deepEqual(ids.slice(0, 4), ['inicio', 'problemas-operativos', 'soluciones', 'proyecto-destacado']);
  assert.doesNotMatch(home, /id="ejemplo"/);
});

test('featured project uses the blueprint headings and project header', () => {
  assert.equal(heading(section.match(/<h2[\s\S]*?<\/h2>/)?.[0] ?? ''), 'Proyecto destacado');
  assert.match(text(section), /Una solución construida alrededor de una necesidad operativa real\./);
  assert.equal(heading(section.match(/<h3[\s\S]*?<\/h3>/)?.[0] ?? ''), 'Control de inventario y sucursales');
  assert.match(text(section), /Proyecto real anonimizado/);
  assert.match(text(section), /Operaciones · Inventarios · Gestión entre sucursales/);
  assert.doesNotMatch(section, /Caso de éxito/i);
});

test('featured project shows problem, solution, four features and result', () => {
  const blocks = [...section.matchAll(/<h4[^>]*>([\s\S]*?)<\/h4>/g)].map((m) => heading(m[1]));
  assert.deepEqual(blocks, ['Problema', 'Solución', 'Funcionalidades', 'Resultado']);
  for (const copy of [featuredProject.problem, featuredProject.solution, featuredProject.result, ...featuredProject.features]) {
    assert.ok(text(section).includes(copy), `falta: ${copy}`);
  }
  const features = [...section.matchAll(/<li class="feature"[^>]*>([\s\S]*?)<\/li>/g)];
  assert.equal(features.length, 4);
});

test('featured project visual is marked as illustrative and anonymized', () => {
  assert.match(section, /id="project-featured-visual"[^>]*role="img"[^>]*aria-label="Interfaz de un sistema de gestión de inventarios y movimientos entre sucursales\."/);
  assert.match(text(section), /Representación ilustrativa basada en un proyecto real/);
  assert.match(text(section), /Información anonimizada para preservar la confidencialidad del cliente\./);
  assert.doesNotMatch(text(section), /\d+\s?%/, 'sin porcentajes');
  assert.doesNotMatch(section, /Power (Apps|Automate|BI)|Microsoft/);
});

test('featured project has the contact CTA and a secondary projects link', () => {
  const links = [...section.matchAll(/<a\b([^>]*)>([\s\S]*?)<\/a>/g)].map((m) => ({ attrs: m[1], label: text(m[2]) }));
  assert.equal(links.length, 2);
  assert.match(links[0].attrs, /href="#contacto"/);
  assert.equal(links[0].label, '¿Tenés un desafío parecido? Contanos tu caso');
  assert.match(links[1].attrs, /href="\/proyectos"/);
  assert.equal(links[1].label, 'Ver proyectos');
  assert.doesNotMatch(section, /wa\.me|calendly|target="_blank"/i);
});
