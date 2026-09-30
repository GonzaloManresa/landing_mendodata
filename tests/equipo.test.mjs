import test from 'node:test';
import assert from 'node:assert/strict';
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { readPage, projectRoot } from './helpers.mjs';

const home = readPage('index.html');
const section = home.match(/<section[^>]+id="equipo"[\s\S]*?<\/section>/i)?.[0] ?? '';
const text = (fragment) => fragment
  .replace(/<[^>]+>/g, ' ')
  .replace(/\s+/g, ' ')
  .trim();

test('team section comes after how-we-work and before contact', () => {
  assert.ok(section, 'la sección #equipo debe existir');
  const ids = [...home.matchAll(/<section[^>]+id="([^"]+)"/g)].map((m) => m[1]);
  const at = ids.indexOf('equipo');
  assert.equal(ids[at - 1], 'como-trabajamos');
  assert.equal(ids[at + 1], 'contacto');
});

test('team section uses the blueprint heading and intro', () => {
  const h2 = section.match(/<h2[\s\S]*?<\/h2>/)?.[0] ?? '';
  assert.equal(h2.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim(), 'El equipo detrás de MendoData');
  assert.match(text(section), /Somos un equipo de tres personas que combina tecnología, análisis de negocios, marketing y desarrollo comercial para construir soluciones adaptadas a cada empresa\./);
});

test('team section shows exactly the three current members', () => {
  const members = [...section.matchAll(/<article class="member" id="([^"]+)"[^>]*>([\s\S]*?)<\/article>/g)].map((m) => ({
    id: m[1],
    name: text(m[2].match(/<h3[\s\S]*?<\/h3>/)?.[0] ?? ''),
    role: text(m[2].match(/<p class="member-role"[^>]*>[\s\S]*?<\/p>/)?.[0] ?? ''),
    text: text(m[2].match(/<p class="member-text"[^>]*>[\s\S]*?<\/p>/)?.[0] ?? ''),
  }));
  assert.deepEqual(members, [
    { id: 'team-member-juan-diego', name: 'Juan Diego Caballero', role: 'Ingeniero en Software', text: 'Desarrolla sistemas y soluciones digitales para MendoData.' },
    { id: 'team-member-gonzalo', name: 'Gonzalo Manresa', role: 'Analista de Negocios', text: 'Entiende los procesos y ayuda a definir cada solución.' },
    { id: 'team-member-leandro', name: 'Leandro Hirschegger', role: 'Marketing y Desarrollo Comercial', text: 'Trabaja en marketing, comunicación y desarrollo comercial.' },
  ]);
});

test('team photos use the real images with blueprint alt texts', () => {
  assert.match(section, /<img[^>]+id="team-photo-juan-diego"[^>]+src="\/assets\/team-juan-diego\.jpg"[^>]+alt="Juan Diego Caballero, Ingeniero en Software de MendoData\."/);
  assert.match(section, /<img[^>]+id="team-photo-gonzalo"[^>]+src="\/assets\/team-gonzalo\.jpeg"[^>]+alt="Gonzalo Manresa, Analista de Negocios de MendoData\."/);
  // Sin foto real todavía: iniciales neutras, nunca una imagen presentada como foto
  assert.match(section, /<span[^>]+id="team-photo-leandro"[^>]*aria-hidden="true"[^>]*>\s*LH\s*<\/span>/);
});

test('team section has no CTA or personal links', () => {
  assert.doesNotMatch(section, /<a\b|<button\b/);
});

test('former member is gone from every page and source file', () => {
  const files = [];
  const walk = (dir) => {
    for (const name of readdirSync(dir)) {
      const path = join(dir, name);
      if (statSync(path).isDirectory()) walk(path);
      else if (/\.(astro|ts|mjs|css|html)$/.test(name)) files.push(path);
    }
  };
  walk(join(projectRoot, 'src'));
  walk(join(projectRoot, 'dist'));
  for (const file of files) {
    const content = readFileSync(file, 'utf8');
    assert.doesNotMatch(content, /Juli[aá]n|Fierro|Contenido Audiovisual|team-photo-julian|team-member-julian/, file);
  }
});
