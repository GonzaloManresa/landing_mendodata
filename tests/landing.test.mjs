import { existsSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import test from 'node:test';
import assert from 'node:assert/strict';
import { runInNewContext } from 'node:vm';

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
    'Análisis de datos y automatización',
    'Más control de tu negocio, menos tiempo reuniendo información',
    'El fin de semana, ordenado para arrancar el lunes',
    'Un proceso simple, de principio a fin',
    'Un equipo especializado en datos y automatización',
    'Contanos sobre tu negocio',
  ];

  for (const snippet of requiredSnippets) {
    assert.match(html, new RegExp(snippet, 'i'));
  }
});

test('presents the approved MendoData team profiles', () => {
  const teamMembers = [...html.matchAll(/<article class="team-member">([\s\S]*?)<\/article>/gi)]
    .map((match) => match[1]);
  const escapeRegExp = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const profilesByCard = [
    [
      'Juan Diego Caballero',
      'Ingeniero en Sistemas',
      'Construye las automatizaciones y sistemas para que la informaci\u00f3n llegue sola, sin que cambies tu forma de trabajar.',
    ],
    [
      'Gonzalo Manresa',
      'Analista de Negocios',
      'Transforma los datos de tu negocio en informaci\u00f3n clara para saber qu\u00e9 revisar primero y tomar mejores decisiones.',
    ],
  ];

  assert.equal(teamMembers.length, 2);
  for (const [index, profile] of profilesByCard.entries()) {
    for (const profileText of profile) {
      assert.match(teamMembers[index], new RegExp(escapeRegExp(profileText), 'i'));
    }
  }

  assert.doesNotMatch(html, /<span class="team-name">Nombre Apellido<\/span>/i);
});
test('uses the approved accessible team photos and face-prioritized crops', () => {
  const projectRoot = fileURLToPath(new URL('..', import.meta.url));
  assert.equal(existsSync(`${projectRoot}/assets/team-gonzalo.jpeg`), true);
  assert.equal(existsSync(`${projectRoot}/assets/team-juan-diego.png`), true);
  assert.match(html, /<img class="team-photo team-photo-juan" src="assets\/team-juan-diego\.png" alt="Juan Diego Caballero">/i);
  assert.match(html, /<img class="team-photo team-photo-gonzalo" src="assets\/team-gonzalo\.jpeg" alt="Gonzalo Manresa">/i);
  assert.match(html, /\.team-photo-gonzalo\s*\{[^}]*object-position:\s*50%\s+24%;/i);
  assert.match(html, /\.team-photo-juan\s*\{[^}]*object-position:\s*50%\s+38%;/i);
  assert.doesNotMatch(html, /<span class="team-photo" aria-hidden="true">(?:JD|GM)<\/span>/i);
  assert.match(html, /\.team-photo\s*\{[^}]*width:\s*76px;[^}]*height:\s*76px;[^}]*object-fit:\s*cover;/i);
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

test('keeps a progressively enhanced contact CTA available on mobile', () => {
  assert.match(
    html,
    /<a[^>]+class="[^"]*mobile-contact-cta[^"]*"[^>]+href="#contacto"[^>]*>\s*Contanos tu caso\s*<\/a>/i,
  );
  assert.match(
    html,
    /\.mobile-contact-cta\s*\{[^}]*display:\s*none;/i,
  );
  assert.match(
    html,
    /@media\s*\(max-width:\s*640px\)[\s\S]*\.mobile-contact-cta\s*\{[^}]*display:\s*inline-flex;/i,
  );
  assert.match(
    html,
    /\.mobile-contact-cta\.is-hidden\s*\{[^}]*pointer-events:\s*none;/i,
  );
  assert.match(html, /const contactSection = document\.querySelector\('#contacto'\)/i);
  assert.match(html, /const contactObserver = new IntersectionObserver/i);
  assert.match(html, /contactObserver\.observe\(contactSection\)/i);
  assert.match(
    html,
    /mobileContactCta\.classList\.toggle\('is-hidden',\s*entry\.isIntersecting\)/i,
  );
  assert.doesNotMatch(html, /addEventListener\(['"]submit/i);
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

test('toggles the mobile contact CTA as the contact section enters and leaves view', () => {
  const scripts = [...html.matchAll(/<script>([\s\S]*?)<\/script>/gi)];
  const behaviorScript = scripts.at(-1)[1];
  const hiddenClasses = new Set();
  const mobileContactCta = {
    classList: {
      toggle(name, force) {
        if (force) hiddenClasses.add(name);
        else hiddenClasses.delete(name);
      },
    },
  };
  const contactSection = {};
  const observers = [];

  class IntersectionObserver {
    constructor(callback) {
      this.callback = callback;
      this.observed = [];
      observers.push(this);
    }

    observe(target) {
      this.observed.push(target);
    }

    unobserve() {}
  }

  runInNewContext(behaviorScript, {
    document: {
      querySelectorAll: () => [],
      querySelector: (selector) => selector === '#contacto' ? contactSection : mobileContactCta,
    },
    window: { IntersectionObserver },
    IntersectionObserver,
  });

  const contactObserver = observers.at(-1);
  assert.deepEqual(contactObserver.observed, [contactSection]);

  contactObserver.callback([{ isIntersecting: true }]);
  assert.equal(hiddenClasses.has('is-hidden'), true);

  contactObserver.callback([{ isIntersecting: false }]);
  assert.equal(hiddenClasses.has('is-hidden'), false);
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
  assert.match(html, /#contacto\s*\{[^}]*scroll-margin-top:/i);
  assert.match(
    html,
    /\.mobile-contact-cta[\s\S]*min-height:\s*50px/i,
  );
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
  const visibleContactFields = [
    ...html.matchAll(/<(?:input|textarea)[^>]+name="(nombre|email|negocio|mensaje)"[^>]*>/gi),
  ].map((match) => match[1].toLowerCase());
  assert.deepEqual(
    visibleContactFields,
    ['nombre', 'email', 'negocio', 'mensaje'],
  );
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
