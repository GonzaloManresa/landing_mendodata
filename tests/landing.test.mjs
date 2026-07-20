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

test('renders the current landing sections', () => {
  const requiredSnippets = [
    'Analisis de datos y automatizacion',
    'Más control de tu negocio, menos tiempo reuniendo información',
    'El fin de semana, ordenado para arrancar el lunes',
    'Un proceso simple, de principio a fin',
    'Un equipo especializado en datos y automatizacion',
    'Contanos sobre tu negocio',
  ];

  for (const snippet of requiredSnippets) {
    assert.match(html, new RegExp(snippet, 'i'));
  }
});

test('guides Instagram visitors from the hero and example to contact', () => {
  assert.match(
    html,
    /Más control de tu negocio, menos tiempo reuniendo información/i,
  );
  assert.match(
    html,
    /Organizamos tus datos y automatizamos tareas para que puedas decidir con claridad y trabajar con más tranquilidad\./i,
  );
  assert.match(
    html,
    /<a[^>]+href="#contacto"[^>]*>\s*Contanos qué necesitás\s*<\/a>/i,
  );
  assert.match(
    html,
    /<section[^>]+class="[^"]*conversion-cta[^"]*"[\s\S]*¿Te gustaría tener esta claridad en tu negocio\?[\s\S]*Contanos cómo trabajás hoy y evaluamos dónde podemos ayudarte\.[\s\S]*<a[^>]+href="#contacto"[^>]*>\s*Contanos tu caso\s*<\/a>[\s\S]*<\/section>/i,
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

test('uses the approved blue trust palette', () => {
  const colors = ['#2563EB', '#12212E', '#5A6B7B', '#1FA971'];

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

test('keeps unsupported product claims out of visible copy', () => {
  const prohibitedPhrases = ['portal', 'dashboard', 'inteligencia artificial'];

  for (const phrase of prohibitedPhrases) {
    assert.doesNotMatch(visibleText, new RegExp(`\\b${phrase}\\b`, 'i'));
  }
});

test('includes baseline accessibility and usability hooks', () => {
  assert.match(html, /<main\b/i);
  assert.match(html, /aria-label="MendoData"/i);
  assert.match(html, /href="#contacto"/i);
  assert.match(html, /href="#ejemplo"/i);
  assert.match(html, /href="#proceso"/i);
  assert.match(html, /href="#nosotros"/i);
  assert.match(html, /prefers-reduced-motion/i);
  assert.match(html, /class="[^"]*phone-modern/i);
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
  assert.doesNotMatch(html, /wa\.me\//i);
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
  const secondaryDisplaySelectors = [
    /\.help-list strong\s*\{[^}]*font-weight:\s*600;/i,
    /\.chat-avatar\s*\{[^}]*font-weight:\s*600;/i,
    /\.team-photo\s*\{[^}]*font-weight:\s*600;/i,
    /\.team-name\s*\{[^}]*font-weight:\s*600;/i,
    /\.process-num\s*\{[^}]*font-weight:\s*600;/i,
    /\.timeline-item h3\s*\{[^}]*font-weight:\s*600;/i,
  ];

  for (const selector of secondaryDisplaySelectors) {
    assert.match(html, selector);
  }
  assert.doesNotMatch(html, /Fraunces|Iowan Old Style|Palatino Linotype/i);
});

test('positions the hero content closer to the header', () => {
  assert.match(
    html,
    /\.hero\s*\{[^}]*padding:\s*clamp\(24px, 3vw, 40px\) 22px clamp\(56px, 8vw, 92px\);/i,
  );
  assert.doesNotMatch(html, /clamp\(40px, 6vw, 76px\)/i);
});
