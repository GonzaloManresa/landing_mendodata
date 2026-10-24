import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { readPage, projectRoot, readCss } from './helpers.mjs';
import { seo } from '../src/config/site.ts';

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
  const css = readCss();
  assert.match(css, /\.whatsapp-float[^{]*\{\s*[^}]*width:\s*56px/);
  const whatsappRules = [...css.matchAll(/\.whatsapp-float[^{]*\{[^}]*\}/g)].map((m) => m[0]).join('\n');
  assert.doesNotMatch(whatsappRules, /width:\s*52px/);
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
    .map((file) => file.slice(projectRoot.length).replaceAll('\\', '/'));
  assert.deepEqual(withNumber, ['src/config/site.ts']);
});

const pages = {
  'index.html': seo.home,
  'proyectos/index.html': seo.proyectos,
  'legal/index.html': seo.legal,
};

test('every public page has one h1, exact SEO and canonical', () => {
  for (const [file, meta] of Object.entries(pages)) {
    const html = readPage(file);
    assert.equal((html.match(/<h1\b/g) ?? []).length, 1, `${file}: un solo h1`);
    assert.match(html, new RegExp(`<title>${meta.title.replace(/[|]/g, '\\|')}</title>`), `${file}: title`);
    assert.ok(html.includes(`<meta name="description" content="${meta.description}">`), `${file}: description`);
    assert.ok(html.includes(`<link rel="canonical" href="https://mendodata.online${meta.path}">`), `${file}: canonical`);
    assert.ok(html.includes(`<meta property="og:title" content="${meta.title}">`), `${file}: og:title`);
  }
});

test('no page repeats an id or links to /contacto or #', () => {
  for (const file of [...Object.keys(pages), '404.html']) {
    const html = readPage(file);
    const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]);
    assert.deepEqual(ids.filter((id, i) => ids.indexOf(id) !== i), [], `${file}: ids duplicados`);
    assert.doesNotMatch(html, /href="\/contacto"/, `${file}: /contacto`);
    assert.doesNotMatch(html, /href="#"/, `${file}: href="#"`);
    assert.doesNotMatch(html, /Fierro/i, `${file}: Fierro`);
  }
});

test('proyectos shows only the blueprint intro and marks its nav link', () => {
  const html = readPage('proyectos/index.html');
  assert.match(html, />\s*PROYECTOS\s*</);
  assert.match(html, /<h1[^>]*>\s*Soluciones construidas alrededor de problemas reales\.\s*<\/h1>/);
  assert.match(html, /Mostramos cómo convertimos necesidades operativas en sistemas, automatizaciones y soluciones de datos adaptadas a cada empresa\./);
  assert.match(header(html), /href="\/proyectos"[^>]*aria-current="page"/);
});

test('legal has the intro and the privacy and cookies anchors', () => {
  const html = readPage('legal/index.html');
  assert.match(html, />\s*LEGAL\s*</);
  assert.match(html, /<h1[^>]*>\s*Privacidad y cookies\s*<\/h1>/);
  assert.match(html, /Información sobre el tratamiento de datos y el uso de cookies en el sitio de MendoData\./);
  assert.match(html, /id="privacidad"/);
  assert.match(html, /id="cookies"/);
});

test('404 page exists, is not indexed and links home', () => {
  const html = readPage('404.html');
  assert.match(html, /<h1[^>]*>\s*Página no encontrada\s*<\/h1>/);
  assert.match(html, /<meta name="robots" content="noindex">/);
  assert.match(html, /<main[\s\S]*href="\/"[\s\S]*<\/main>/);
});

test('global components appear on every page', () => {
  for (const file of [...Object.keys(pages), '404.html']) {
    const html = readPage(file);
    assert.match(html, /<header class="site-header/, `${file}: header`);
    assert.match(html, /<footer class="site-footer/, `${file}: footer`);
    assert.match(html, /class="whatsapp-float/, `${file}: whatsapp`);
  }
});

test('sitemap lists only the public pages and robots points to it', () => {
  const sitemap = readPage('sitemap-0.xml');
  const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]).sort();
  assert.deepEqual(locs, [
    'https://mendodata.online/',
    'https://mendodata.online/legal',
    'https://mendodata.online/proyectos',
  ]);
  assert.match(readPage('robots.txt'), /Sitemap: https:\/\/mendodata\.online\/sitemap-index\.xml/);
  assert.ok(existsSync(new URL('../dist/sitemap-index.xml', import.meta.url)));
});
