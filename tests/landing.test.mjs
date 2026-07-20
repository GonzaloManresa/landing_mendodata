import { readFileSync } from 'node:fs';
import test from 'node:test';
import assert from 'node:assert/strict';

const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');
const visibleText = html
  .replace(/<script[\s\S]*?<\/script>/gi, '')
  .replace(/<style[\s\S]*?<\/style>/gi, '')
  .replace(/<[^>]+>/g, ' ')
  .replace(/\s+/g, ' ')
  .trim()
  .toLowerCase();

test('renders the four simplified landing sections', () => {
  const requiredSnippets = [
    'Hola, dueño de negocio',
    'Ayudamos a dueños de negocios a tener',
    'El finde, ordenado para arrancar el lunes',
    'Lo que nos dicen',
    'Contame de tu negocio',
    'Escribime por WhatsApp',
  ];

  for (const snippet of requiredSnippets) {
    assert.match(html, new RegExp(snippet, 'i'));
  }
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

test('uses the indigo Stitch accent palette', () => {
  const colors = ['#6366F1', '#0D0B33', '#64748B'];

  for (const color of colors) {
    assert.match(html, new RegExp(color, 'i'));
  }
});

test('drops the retired lime, orange and terracotta palettes', () => {
  const retired = ['#A3E635', '#F2994A', '#C1502E', '#6B7548', '#A9B481'];

  for (const color of retired) {
    assert.doesNotMatch(html, new RegExp(color, 'i'));
  }
});

test('keeps prohibited mechanism language out of visible copy', () => {
  const prohibitedWords = ['portal', 'ia', 'sistema', 'dashboard', 'datos'];

  for (const word of prohibitedWords) {
    assert.doesNotMatch(visibleText, new RegExp(`\\b${word}\\b`, 'i'));
  }
});

test('includes baseline accessibility and usability hooks', () => {
  assert.match(html, /<main\b/i);
  assert.match(html, /aria-label="MendoData"/i);
  assert.match(html, /href="#contacto"/i);
  assert.match(html, /href="#ejemplo"/i);
  assert.match(html, /href="#clientes"/i);
  assert.match(html, /prefers-reduced-motion/i);
  assert.match(html, /class="[^"]*phone-modern/i);
});

test('closes with a WhatsApp contact instead of a cold form', () => {
  assert.match(html, /wa\.me\//i);
  assert.doesNotMatch(html, /<form\b/i);
  assert.doesNotMatch(html, /<input\b/i);
  assert.doesNotMatch(html, /<textarea\b/i);
});

test('uses Manrope for display typography and keeps Inter for body copy', () => {
  assert.match(
    html,
    /family=Inter:wght@400;500;600;700&family=Manrope:wght@600;700&display=swap/i,
  );
  assert.match(
    html,
    /--font-display:\s*"Manrope", ui-sans-serif, system-ui, -apple-system, sans-serif;/i,
  );
  assert.match(
    html,
    /--font-body:\s*"Inter", ui-sans-serif, system-ui, -apple-system, sans-serif;/i,
  );
  assert.match(html, /h1\s*\{[^}]*font-weight:\s*700;/i);
  assert.match(html, /h2\s*\{[^}]*font-weight:\s*700;/i);
  assert.match(html, /h3\s*\{[^}]*font-weight:\s*600;/i);
  assert.doesNotMatch(html, /Fraunces|Iowan Old Style|Palatino Linotype/i);
});

test('positions the hero content closer to the header', () => {
  assert.match(
    html,
    /\.hero\s*\{[^}]*padding:\s*clamp\(24px, 3vw, 40px\) 22px clamp\(56px, 8vw, 92px\);/i,
  );
  assert.doesNotMatch(html, /clamp\(40px, 6vw, 76px\)/i);
});
