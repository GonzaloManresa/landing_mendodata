import test from 'node:test';
import assert from 'node:assert/strict';
import { readPage } from './helpers.mjs';
import { featuredProject } from '../src/data/projects.ts';

const page = readPage('proyectos/index.html');
const main = page.match(/<main[\s\S]*?<\/main>/)?.[0] ?? '';
const text = (fragment) => fragment
  .replace(/<script[\s\S]*?<\/script>/gi, '')
  .replace(/<[^>]+>/g, ' ')
  .replace(/\s+/g, ' ')
  .trim();
const sectionById = (id) => main.match(new RegExp(`<section[^>]+id="${id}"[\\s\\S]*?</section>`))?.[0] ?? '';

test('projects page follows hero → project → final CTA', () => {
  const ids = [...main.matchAll(/<section[^>]+id="([^"]+)"/g)].map((m) => m[1]);
  assert.deepEqual(ids, ['proyectos-hero', 'control-inventario-sucursales', 'contacto-proyectos']);
});

test('projects hero is compact, centered copy with a link to the project', () => {
  const hero = sectionById('proyectos-hero');
  assert.match(text(hero), /^PROYECTOS Soluciones construidas alrededor de problemas reales\./);
  assert.match(text(hero), /Mostramos cómo convertimos necesidades operativas en sistemas, automatizaciones y soluciones de datos adaptadas a cada empresa\./);
  assert.match(text(hero), /Problema → solución → implementación → resultado\./);
  assert.match(hero, /<a[^>]+href="#control-inventario-sucursales"[^>]*>[\s\S]*?Ver proyecto/);
  assert.doesNotMatch(hero, /<img|role="img"/, 'sin visual propio');
});

test('project case uses the /proyectos copy from the shared data', () => {
  const detail = featuredProject.detail;
  assert.deepEqual(detail, {
    context: 'Proyecto desarrollado para una empresa chilena vinculada al mantenimiento y reparación de vehículos utilizados en minería.',
    summary: 'Una solución desarrollada para mejorar el control de inventarios, movimientos entre sucursales y aprobaciones operativas.',
    problem: 'La empresa tenía dificultades para controlar inventarios, movimientos entre sucursales, diferencias de stock y aprobaciones.',
    features: [
      'Gestión de inventario con códigos de barras.',
      'Movimientos entre sucursales.',
      'Control de diferencias de stock.',
      'Aprobaciones digitales.',
    ],
    result: 'Mayor control, trazabilidad y capacidad para detectar inconsistencias.',
    resultPoints: ['Mayor control', 'Trazabilidad', 'Detección de inconsistencias'],
    visualId: 'inventory-project-main-visual',
  });

  const project = sectionById('control-inventario-sucursales');
  const copy = text(project);
  for (const piece of [
    'Proyecto real anonimizado',
    'Control de inventario y sucursales',
    'Operaciones · Inventarios · Gestión entre sucursales',
    detail.context,
    detail.summary,
    detail.problem,
    featuredProject.solution,
    ...detail.features,
    detail.result,
    ...detail.resultPoints,
    'Representación ilustrativa basada en un proyecto real',
    'Información anonimizada para preservar la confidencialidad del cliente.',
  ]) {
    assert.ok(copy.includes(piece), `falta: ${piece}`);
  }
  assert.equal((project.match(/<h2\b/g) ?? []).length, 1, 'el nombre del proyecto es el único H2 del caso');
  const blocks = [...project.matchAll(/<h3[^>]*>([\s\S]*?)<\/h3>/g)].map((m) => text(m[1]));
  assert.deepEqual(blocks, ['Contexto', 'Problema', 'Solución', 'Funcionalidades principales', 'Resultado']);
});

test('project case shows one main visual and no invented data', () => {
  const project = sectionById('control-inventario-sucursales');
  assert.equal((project.match(/role="img"/g) ?? []).length, 1, 'un único visual principal');
  assert.match(project, /id="inventory-project-main-visual"/);
  assert.doesNotMatch(text(project), /\d+\s?%|Caso de éxito/i);
  assert.doesNotMatch(project, /Power (Apps|Automate|BI)|Microsoft|React|Azure/);
  assert.doesNotMatch(project, /<a\b|<button\b/, 'sin CTA dentro del caso');
});

test('projects final CTA sends to the Home form with WhatsApp as alternative', () => {
  const cta = sectionById('contacto-proyectos');
  assert.match(text(cta), /^HABLEMOS ¿Tenés un problema parecido o un proceso que necesitás ordenar\?/);
  assert.match(text(cta), /Contanos brevemente qué está pasando en tu empresa\. Primero entendemos la necesidad y después vemos qué solución tiene sentido\./);
  const links = [...cta.matchAll(/<a\b([^>]*)>([\s\S]*?)<\/a>/g)].map((m) => ({ attrs: m[1], label: text(m[2]) }));
  assert.equal(links.length, 2);
  assert.match(links[0].attrs, /href="\/#contacto"/);
  assert.equal(links[0].label, 'Contanos qué necesitás resolver');
  assert.match(links[1].attrs, /href="https:\/\/wa\.me\/5492615974103"/);
  assert.equal(links[1].label, 'Hablar por WhatsApp');
  assert.doesNotMatch(cta, /<form\b/);
});
