import test from 'node:test';
import assert from 'node:assert/strict';
import { readPage } from './helpers.mjs';

const home = readPage('index.html');
const section = home.match(/<section[^>]+id="contacto"[\s\S]*?<\/section>/i)?.[0] ?? '';
const text = (fragment) => fragment
  .replace(/<script[\s\S]*?<\/script>/gi, '')
  .replace(/<[^>]+>/g, ' ')
  .replace(/\s+/g, ' ')
  .trim();

test('contact is the last Home section, right after the team', () => {
  assert.ok(section, 'la sección #contacto debe existir');
  const ids = [...home.matchAll(/<section[^>]+id="([^"]+)"/g)].map((m) => m[1]);
  assert.equal(ids.at(-1), 'contacto');
  assert.equal(ids.at(-2), 'equipo');
});

test('contact uses the blueprint label, heading, intro and next-step note', () => {
  assert.match(text(section), /^Contacto/);
  const h2 = section.match(/<h2[\s\S]*?<\/h2>/)?.[0] ?? '';
  assert.equal(h2.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim(), 'Contanos qué necesitás resolver');
  assert.match(text(section), /Contanos brevemente qué proceso querés mejorar o qué situación está dificultando la operación de tu empresa\./);
  assert.match(text(section), /Qué pasa después Después de recibir tu consulta, nos ponemos en contacto para entender mejor la necesidad\. Si tiene sentido avanzar, coordinamos una primera conversación\./);
});

test('contact drops the retired copy', () => {
  for (const retired of [
    /Contanos qué proceso querés digitalizar/,
    /Trabajamos con empresas que quieren más orden/,
    /Respondemos todas las consultas a la brevedad/,
    /24 horas|[Rr]espuesta inmediata|[Cc]alendly/,
  ]) {
    assert.doesNotMatch(section, retired);
  }
});

test('contact form keeps exactly four labelled fields with the blueprint placeholders', () => {
  const fields = [...section.matchAll(/<label for="([^"]+)"[^>]*>([\s\S]*?)<\/label>/g)].map((m) => [m[1], text(m[2])]);
  assert.deepEqual(fields, [
    ['cf-nombre', 'Nombre'],
    ['cf-email', 'Email'],
    ['cf-negocio', 'Empresa o rubro (opcional)'],
    ['cf-mensaje', 'Mensaje'],
  ]);
  assert.match(section, /<input[^>]+id="cf-nombre"[^>]+autocomplete="name"[^>]+required[^>]+placeholder="Tu nombre"/);
  assert.match(section, /<input[^>]+id="cf-email"[^>]+type="email"[^>]+autocomplete="email"[^>]+required[^>]+placeholder="tucorreo@ejemplo\.com"/);
  assert.match(section, /<input[^>]+id="cf-negocio"[^>]+autocomplete="organization"[^>]+placeholder="Empresa o rubro"/);
  assert.doesNotMatch(section.match(/<input[^>]+id="cf-negocio"[^>]*>/)?.[0] ?? '', /required/);
  assert.match(section, /<textarea[^>]+id="cf-mensaje"[^>]+required[^>]+placeholder="Contanos brevemente qué proceso te gustaría ordenar\."/);
});

test('contact form has the primary button, a live status and the WhatsApp alternative', () => {
  const button = section.match(/<button[^>]+type="submit"[^>]*>([\s\S]*?)<\/button>/);
  assert.ok(button, 'botón de envío');
  assert.equal(text(button[1]), 'Enviar consulta');
  assert.match(section, /role="status"[^>]*aria-live="polite"/);
  assert.match(text(section), /¿Preferís hablar directamente\? Escribinos por WhatsApp\./);
  const whatsapp = [...section.matchAll(/<a\b([^>]*)>([\s\S]*?)<\/a>/g)];
  assert.equal(whatsapp.length, 1, 'un único enlace: WhatsApp');
  assert.match(whatsapp[0][1], /href="https:\/\/wa\.me\/5492615974103"/);
  assert.equal(text(whatsapp[0][2]), 'Hablar por WhatsApp');
});
