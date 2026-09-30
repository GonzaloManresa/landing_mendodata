import { readFileSync, readdirSync } from 'node:fs';
import test from 'node:test';
import assert from 'node:assert/strict';
import { pageSource } from './helpers.mjs';

const distCssDir = new URL('../dist/_astro/', import.meta.url);

const html = pageSource('index.html');

const visibleText = html
  .replace(/<script[\s\S]*?<\/script>/gi, '')
  .replace(/<style[\s\S]*?<\/style>/gi, '')
  .replace(/<[^>]+>/g, ' ')
  .replace(/\s+/g, ' ')
  .trim()
  .toLowerCase();

test('never claims a Microsoft partnership', () => {
  assert.doesNotMatch(visibleText, /\bpartner\b/i);
  assert.doesNotMatch(visibleText, /socio de microsoft/i);
  assert.doesNotMatch(visibleText, /sin pagar licencias/i);
});

test('keeps reveal content visible until JavaScript opts into animation', () => {
  assert.match(
    html,
    /<head>[\s\S]*?<script>\s*document\.documentElement\.classList\.add\(['"]js['"]\);\s*<\/script>/i,
  );
  assert.match(html, /\.reveal\s*\{[^}]*opacity:\s*1;[^}]*transform:\s*none;/i);
  assert.match(
    html,
    /\.js\s+\.reveal\s*\{[^}]*opacity:\s*0;[^}]*transform:\s*translateY\(18px\);/i,
  );
  assert.doesNotMatch(html, /(?<!\.js\s)\.reveal\s*\{[^}]*opacity:\s*0;/i);
  assert.match(
    html,
    /\.reveal\.is-visible\s*\{[^}]*opacity:\s*1;[^}]*transform:\s*translateY\(0\);/i,
  );
});

test('drops the removed sections', () => {
  const removed = [
    'id="antes-despues"',
    'id="dolores"',
    'id="quienes-somos"',
    'id="proyectos"',
    'class="section promise"',
  ];

  for (const marker of removed) {
    assert.doesNotMatch(html, new RegExp(marker, 'i'));
  }
});

test('uses the MendoData blue palette from the approved mockups', () => {
  const colors = ['#0A6CF5', '#0B1B3F', '#66748A', '#2F7D5C', '#FBFCFE', '#E2E8F2'];

  for (const color of colors) {
    assert.match(html, new RegExp(color, 'i'));
  }
});

test('drops the retired palettes, including the previous blue system', () => {
  const retired = [
    '#F7F3EC',
    '#E4DCD0',
    '#EDE6DA',
    '#A3E635',
    '#F2994A',
    '#C1502E',
    '#6B7548',
    '#A9B481',
    '#2563EB',
    '#1B4DB1',
    '#1FA971',
    '#16855A',
    '#12212E',
    '#F5F8FC',
    '#E9F1FC',
    '#E9F6EF',
    '#26C083',
    '#7FB0FF',
    '#4C8DFF',
  ];

  for (const color of retired) {
    assert.doesNotMatch(html, new RegExp(color, 'i'));
  }
});

test('keeps unsupported product claims out of visible copy', () => {
  const prohibitedPhrases = ['portal', 'dashboard', 'inteligencia artificial'];

  for (const phrase of prohibitedPhrases) {
    assert.doesNotMatch(visibleText, new RegExp(`\\b${phrase}\\b`, 'i'));
  }
});

test('includes baseline accessibility and usability hooks', () => {
  assert.match(html, /<main\b/i);
  assert.match(html, /aria-label="Principal"/i);
  assert.match(html, /href="#contacto"/i);
  assert.match(html, /href="\/#como-trabajamos"/i);
  assert.match(html, /href="\/#equipo"/i);
  assert.match(html, /href="\/#soluciones"/i);
  assert.match(html, /prefers-reduced-motion/i);
  assert.match(html, /section\[id\]\s*\{[^}]*scroll-margin-top:\s*96px/i);
});

test('only animates scroll on in-page interaction, not on anchor page loads', () => {
  assert.match(html, /html:focus-within\s*\{[^}]*scroll-behavior:\s*smooth/i);
  const bare = html.match(/(?:^|[}\s])html\s*\{[^}]*scroll-behavior:\s*smooth[^}]*\}/gi);
  assert.equal(bare, null);
});

test('closes with the configured FormSubmit contact form', () => {
  assert.match(html, /<form\b/i);
  assert.match(
    html,
    /action="https:\/\/formsubmit\.co\/mendodata@gmail\.com"/i,
  );
  assert.match(html, /method="POST"/i);
  assert.match(html, /name="_subject" value="Nueva consulta desde la web"/i);
  assert.match(html, /name="_template" value="table"/i);
  assert.match(html, /name="_honey"/i);
  assert.doesNotMatch(html, /name="_captcha"\s+value="false"/i);
  assert.match(html, /<input[^>]+name="nombre"[^>]+required/i);
  assert.match(html, /<input[^>]+name="email"[^>]+required/i);
  assert.match(html, /<textarea[^>]+name="mensaje"[^>]+required/i);
  assert.match(html, /<button[^>]+type="submit"/i);
  const visibleContactFields = [
    ...html.matchAll(/<(?:input|textarea)[^>]+name="(nombre|email|negocio|mensaje)"[^>]*>/gi),
  ].map((match) => match[1].toLowerCase());
  assert.deepEqual(
    visibleContactFields,
    ['nombre', 'email', 'negocio', 'mensaje'],
  );
});

test('uses Inter throughout with a heavy tight display weight', () => {
  assert.match(
    html,
    /family=Inter:wght@400;500;600;700;800&family=Newsreader:ital,opsz,wght@1,6\.\.72,400&display=swap/i,
  );
  assert.match(
    html,
    /--font-display:\s*"Inter", ui-sans-serif, system-ui, -apple-system, sans-serif;/i,
  );
  assert.match(
    html,
    /--font-body:\s*"Inter", ui-sans-serif, system-ui, -apple-system, sans-serif;/i,
  );
  assert.match(html, /h1\s*\{[^}]*font-weight:\s*800;[^}]*letter-spacing:\s*-0\.038em;/i);
  assert.match(html, /h2\s*\{[^}]*font-weight:\s*800;/i);
  assert.match(
    html,
    /--font-accent:\s*"Newsreader", "Iowan Old Style", Georgia, serif;/i,
  );
  assert.match(html, /h3\s*\{[^}]*font-weight:\s*600;/i);
  assert.doesNotMatch(html, /Manrope/i);
});

test('emits balanced braces in every generated stylesheet', () => {
  const files = readdirSync(distCssDir).filter((name) => name.endsWith('.css'));
  assert.ok(files.length > 0);

  for (const name of files) {
    const css = readFileSync(new URL(name, distCssDir), 'utf8').replace(/\/\*[\s\S]*?\*\//g, '');
    const open = (css.match(/\{/g) ?? []).length;
    const close = (css.match(/\}/g) ?? []).length;
    assert.equal(open, close, `${name}: ${open} "{" vs ${close} "}"`);
  }
});
