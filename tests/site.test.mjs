import test from 'node:test';
import assert from 'node:assert/strict';
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { readPage, projectRoot } from './helpers.mjs';

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

const footer = (html) => html.match(/<footer[\s\S]*?<\/footer>/i)?.[0] ?? '';

test('footer follows the blueprint structure', () => {
  const f = footer(readPage('index.html'));
  assert.ok(f, 'la página debe tener <footer>');
  assert.match(f, /Sistemas, automatización y datos para ordenar y mejorar procesos operativos\./);
  assert.match(f, />\s*Explorá\s*</);
  assert.match(f, />\s*Contacto\s*</);
  for (const [label, href] of [
    ['Inicio', '/'],
    ['Soluciones', '/#soluciones'],
    ['Proyectos', '/proyectos'],
    ['Cómo trabajamos', '/#como-trabajamos'],
    ['Equipo', '/#equipo'],
    ['Formulario de contacto', '/#contacto'],
    ['Privacidad', '/legal#privacidad'],
    ['Cookies', '/legal#cookies'],
  ]) {
    assert.match(f, new RegExp(`href="${href.replace(/[/#]/g, '\\$&')}"[^>]*>\\s*${label}\\s*<`), `${label} → ${href}`);
  }
  assert.match(f, /href="https:\/\/wa\.me\/5492615974103"[^>]*>\s*Escribinos por WhatsApp\s*</);
  assert.match(f, /© <span data-year[^>]*>\d{4}<\/span> MendoData\. Todos los derechos reservados\./);
});

test('footer shows only confirmed social accounts', () => {
  const f = footer(readPage('index.html'));
  assert.match(f, /href="https:\/\/www\.instagram\.com\/mendo\.data\/"[^>]*aria-label="MendoData en Instagram"/);
  assert.match(f, /href="https:\/\/www\.tiktok\.com\/@mendo\.data"[^>]*aria-label="MendoData en TikTok"/);
  assert.doesNotMatch(f, /linkedin/i);
});

test('footer has no placeholder or out-of-scope links', () => {
  const f = footer(readPage('index.html'));
  assert.doesNotMatch(f, /href="#"/);
  assert.doesNotMatch(f, /href="\/contacto"/);
  assert.doesNotMatch(f, /Configurar cookies|Términos/i);
  assert.doesNotMatch(f, /<form\b/i);
});

test('floating WhatsApp button uses the global config', () => {
  const html = readPage('index.html');
  assert.match(
    html,
    /<a[^>]+class="whatsapp-float"[^>]+href="https:\/\/wa\.me\/5492615974103"[^>]+aria-label="Contactar a MendoData por WhatsApp"/,
  );
});

test('the WhatsApp number lives only in site.ts', () => {
  const files = [];
  const walk = (dir) => {
    for (const name of readdirSync(dir)) {
      const path = join(dir, name);
      if (statSync(path).isDirectory()) walk(path);
      else files.push(path);
    }
  };
  walk(join(projectRoot, 'src'));
  const withNumber = files
    .filter((file) => readFileSync(file, 'utf8').includes('5492615974103'))
    .map((file) => file.slice(projectRoot.length));
  assert.deepEqual(withNumber, ['src/config/site.ts']);
});
