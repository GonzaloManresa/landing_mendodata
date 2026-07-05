import { readFileSync } from 'node:fs';
import test from 'node:test';
import assert from 'node:assert/strict';

const html = readFileSync(new URL('../landing-mendodata.html', import.meta.url), 'utf8');
const visibleText = html
  .replace(/<script[\s\S]*?<\/script>/gi, '')
  .replace(/<style[\s\S]*?<\/style>/gi, '')
  .replace(/<[^>]+>/g, ' ')
  .replace(/\s+/g, ' ')
  .trim()
  .toLowerCase();

test('renders the approved landing sections and core promise', () => {
  const requiredSnippets = [
    'Tu negocio funciona, vos tambien podes desconectar',
    'Antes',
    'Despues',
    'El finde, ordenado para arrancar el lunes',
    'Lo que te saca tiempo y cabeza',
    'Quienes somos',
    'Nuestra mision',
    'Nuestra vision',
    'Proyectos',
    'Mensajes de clientes',
    'Testimonios',
    'Que puedas irte sin quedarte pensando',
    'Contame de tu negocio',
  ];

  for (const snippet of requiredSnippets) {
    assert.match(html, new RegExp(snippet, 'i'));
  }
});

test('uses the approved color palette', () => {
  const colors = ['#C1502E', '#6B7548', '#A9B481', '#3A362E', '#F5F1E8'];

  for (const color of colors) {
    assert.match(html, new RegExp(color, 'i'));
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
  assert.match(html, /href="#antes-despues"/i);
  assert.match(html, /href="#quienes-somos"/i);
  assert.match(html, /prefers-reduced-motion/i);
  assert.match(html, /class="[^"]*phone-modern/i);
  assert.match(html, /aria-labelledby="before-after-title"/i);
  assert.match(html, /name="nombre"/i);
  assert.match(html, /name="negocio"/i);
  assert.match(html, /name="contacto"/i);
  assert.match(html, /name="mensaje"/i);
});
