import test from 'node:test';
import assert from 'node:assert/strict';
import { readPage } from './helpers.mjs';
import { legal } from '../src/data/legal.ts';

const page = readPage('legal/index.html');
const main = page.match(/<main[\s\S]*?<\/main>/)?.[0] ?? '';
const text = (fragment) => fragment
  .replace(/<script[\s\S]*?<\/script>/gi, '')
  .replace(/<[^>]+>/g, ' ')
  .replace(/\s+/g, ' ')
  .trim();
const section = (id) => main.match(new RegExp(`<section[^>]+id="${id}"[\\s\\S]*?</section>`))?.[0] ?? '';

test('legal page keeps the blueprint header and internal navigation', () => {
  assert.match(text(main), /^LEGAL Privacidad y cookies Información sobre el tratamiento de datos y el uso de cookies en el sitio de MendoData\./);
  const nav = main.match(/<nav[^>]+aria-label="En esta página"[\s\S]*?<\/nav>/)?.[0] ?? '';
  const links = [...nav.matchAll(/href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/g)].map((m) => [m[1], text(m[2])]);
  assert.deepEqual(links, [['#privacidad', 'Privacidad'], ['#cookies', 'Cookies']]);
  assert.doesNotMatch(main, /Configurar cookies|Términos y condiciones|Aviso legal/);
});

test('privacy section covers the blueprint subtopics with verified content', () => {
  const privacy = section('privacidad');
  const headings = [...privacy.matchAll(/<h3[^>]*>([\s\S]*?)<\/h3>/g)].map((m) => text(m[1]));
  assert.deepEqual(headings, [
    'Quién es responsable de los datos',
    'Qué información recopilamos',
    'Para qué utilizamos la información',
    'Servicios y proveedores',
    'Durante cuánto tiempo conservamos la información',
    'Consultas sobre tus datos',
  ]);
  const copy = text(privacy);
  assert.doesNotMatch(copy, /Solo recopilamos|únicamente recopilamos/, 'no afirmar que solo se recopilan los campos visibles');
  for (const fact of ['mendodata@gmail.com', 'Nombre', 'Email', 'Empresa o rubro (opcional)', 'Mensaje', 'FormSubmit', 'Render', 'Google Fonts', 'utm_source', 'dirección IP']) {
    assert.ok(copy.includes(fact), `falta: ${fact}`);
  }
});

test('cookies section states what the audit found and nothing else', () => {
  const cookies = section('cookies');
  const copy = text(cookies);
  assert.match(copy, /no crea cookies propias/);
  assert.match(copy, /sessionStorage/);
  assert.doesNotMatch(copy, /Google Analytics|Meta Pixel|publicidad personalizada/);
  assert.doesNotMatch(cookies, /<table/, 'sin tabla de cookies inventada');
});

test('legal content never invents company data or absolute claims', () => {
  const copy = text(main);
  assert.doesNotMatch(copy, /CUIT\s*[:\d]|\d{2}-\d{8}-\d/);
  assert.doesNotMatch(copy, /privacidad@|100\s?% segur|imposible acceder/i);
  assert.doesNotMatch(copy, /\b\d+\s+(años|meses)\b/, 'sin plazos de conservación inventados');
});

test('pending legal items are only visible in development builds', () => {
  assert.ok(legal.pending.length > 0, 'los pendientes quedan documentados en el código');
  assert.doesNotMatch(page, /Pendiente|data-pending/);
});

test('legal page shows the real update date and no commercial CTA', () => {
  assert.equal(legal.updatedAt, '2026-09-30');
  assert.match(text(main), /Última actualización: 30 de septiembre de 2026/);
  assert.doesNotMatch(main, /href="\/#contacto"|wa\.me|<form\b/);
});
