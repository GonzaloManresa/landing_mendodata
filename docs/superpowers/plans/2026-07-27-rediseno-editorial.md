# Rediseño Editorial — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Reemplazar la piel visual completa de la landing por un sistema editorial sobrio: papel, serif display, hairlines en vez de tarjetas con sombra, un solo acento azul tinta.

**Architecture:** Todo el sitio es un único `index.html` con CSS embebido en un `<style>`. El rediseño es (a) reescribir 4 tests de diseño, (b) reemplazar el `<link>` de Google Fonts y el bloque `<style>` completo, sin tocar el markup ni el JS, y (c) verificar en navegador. Los numerales `01/02/03` de Servicios y "Cómo queda" se generan con CSS counters para no tocar el HTML.

**Tech Stack:** HTML estático, CSS embebido, `node:test` + `node:assert/strict`.

Spec: `docs/superpowers/specs/2026-07-27-rediseno-editorial-design.md`

## Global Constraints

- Comando de test único: `node --test tests/landing.test.mjs`. Verde al final de la Task 2 y de la Task 3.
- **El markup del `<body>` no se toca.** Tampoco el `<script>` del final. Solo cambian el `<link>` de fuentes y el `<style>`.
- El copy no se reescribe. Prohibido en texto visible: `portal`, `dashboard`, `inteligencia artificial`, "partner", "socio de Microsoft", "certificados".
- Deben sobrevivir palabra por palabra estos bloques CSS (hay tests que los verifican con regex exactas):
  - `.reveal { opacity: 1; transform: none; }`, `.js .reveal { opacity: 0; transform: translateY(18px); ... }`, `.reveal.is-visible { opacity: 1; transform: translateY(0); }`
  - `.mobile-contact-cta { display: none; }` en base, y dentro de `@media (max-width: 640px)` el bloque con `display: inline-flex` y `min-height: 50px`, más `.mobile-contact-cta.is-hidden { ... pointer-events: none; }`
  - `@media (max-width: 820px)` cuya primera regla es `.nav-link { display: none; }` — y NO debe existir `.nav-link` como primera regla de un `@media (max-width: 640px)`
  - `#contacto { scroll-margin-top: ... }`
  - `prefers-reduced-motion`
- La clase `.phone-modern` debe seguir existiendo en el HTML (no se toca el markup, así que se cumple sola).
- Ningún hex de la paleta vieja puede quedar en el archivo: `#2563EB`, `#1B4DB1`, `#1FA971`, `#16855A`, `#12212E`, `#F5F8FC`, `#E9F1FC`, `#E9F6EF`, `#26C083`, ni los grises azulados del celular (`#1e3346`, `#0d1a26`, `#100d0a`, `#1c3040`, `#0e1a26`, `#7FB0FF`, `#4c8dff`).

---

### Task 1: Reescribir los 4 tests de diseño

**Files:**
- Modify: `tests/landing.test.mjs` (tests `uses the approved blue trust palette`, `drops the retired lime, orange and terracotta palettes`, `uses Manrope for display typography and keeps Inter for body copy`, `positions the hero content closer to the header`)

**Interfaces:**
- Consumes: nada.
- Produces: las aserciones que la Task 2 debe hacer pasar. Los valores exactos (hexes, URL de fuentes, padding del hero) son contrato: la Task 2 los copia literales.

- [ ] **Step 1: Reemplazar el test de paleta aprobada**

Reemplazar el test `uses the approved blue trust palette` completo por:

```js
test('uses the editorial ink and paper palette', () => {
  const colors = ['#1B3FA8', '#0E1116', '#6B7280', '#2F7D5C', '#FBFAF8', '#E2DFD9'];

  for (const color of colors) {
    assert.match(html, new RegExp(color, 'i'));
  }
});
```

- [ ] **Step 2: Ampliar el test de paletas retiradas**

Reemplazar el test `drops the retired lime, orange and terracotta palettes` completo por:

```js
test('drops the retired palettes, including the previous blue system', () => {
  const retired = [
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
```

- [ ] **Step 3: Reemplazar el test de tipografía**

Reemplazar el test `uses Manrope for display typography and keeps Inter for body copy` completo por:

```js
test('uses Instrument Serif for display typography and Inter for body copy', () => {
  assert.match(
    html,
    /family=Instrument\+Serif:ital@0;1&family=Inter:wght@400;500;600&display=swap/i,
  );
  assert.match(
    html,
    /--font-display:\s*"Instrument Serif", "Iowan Old Style", "Palatino Linotype", Georgia, serif;/i,
  );
  assert.match(
    html,
    /--font-body:\s*"Inter", ui-sans-serif, system-ui, -apple-system, sans-serif;/i,
  );
  assert.match(html, /h1\s*\{[^}]*font-weight:\s*400;/i);
  assert.match(html, /h2\s*\{[^}]*font-weight:\s*400;/i);
  assert.match(html, /h3\s*\{[^}]*font-weight:\s*600;/i);
  assert.match(html, /\.team-name\s*\{[^}]*font-family:\s*var\(--font-display\);/i);
  assert.match(html, /\.process-num\s*\{[^}]*font-family:\s*var\(--font-display\);/i);
  assert.doesNotMatch(html, /Manrope/i);
});
```

- [ ] **Step 4: Reemplazar el test del padding del hero**

Reemplazar el test `positions the hero content closer to the header` completo por:

```js
test('gives the hero editorial breathing room', () => {
  assert.match(
    html,
    /\.hero\s*\{[^}]*padding:\s*clamp\(28px, 4vw, 56px\) 22px clamp\(64px, 9vw, 110px\);/i,
  );
  assert.doesNotMatch(html, /clamp\(24px, 3vw, 40px\)/i);
});
```

- [ ] **Step 5: Correr los tests y verificar que fallan**

Run: `node --test tests/landing.test.mjs`
Expected: FAIL. Exactamente 4 tests rojos: `uses the editorial ink and paper palette` (los hexes nuevos no existen), `drops the retired palettes...` (`#2563EB` etc. siguen presentes), `uses Instrument Serif...` (el link de fuentes actual es Inter+Manrope) y `gives the hero editorial breathing room` (el padding viejo sigue). Los otros 14 en verde.

No commitear todavía: el commit va junto con el CSS en la Task 2 (rojo no se commitea).

---

### Task 2: Reemplazar fuentes y el bloque `<style>` completo

**Files:**
- Modify: `index.html:17-20` (el `<link>` de Google Fonts)
- Modify: `index.html:21-1219` (todo el contenido del `<style>`)

**Interfaces:**
- Consumes: las aserciones exactas de la Task 1.
- Produces: nada que otra task use.

- [ ] **Step 1: Reemplazar el `<link>` de Google Fonts**

En el `<head>`, reemplazar el `<link>` de `fonts.googleapis.com/css2?family=Inter...Manrope...` por:

```html
    <link
      href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;600&display=swap"
      rel="stylesheet"
    >
```

- [ ] **Step 2: Reemplazar el contenido completo del `<style>`**

Reemplazar TODO lo que hay entre `<style>` y `</style>` por el bloque siguiente. Es la hoja completa; no mezclar con reglas viejas.

```css
      :root {
        --bg: #FBFAF8;
        --surface: #FFFFFF;
        --ink: #0E1116;
        --ink-soft: #39404A;
        --ink-mute: #6B7280;
        --accent: #1B3FA8;
        --accent-strong: #142F80;
        --accent-soft: rgba(27, 63, 168, 0.08);
        --ok: #2F7D5C;
        --ok-soft: rgba(47, 125, 92, 0.1);
        --line: #E2DFD9;
        --radius: 4px;
        --max: 1120px;
        --font-display: "Instrument Serif", "Iowan Old Style", "Palatino Linotype", Georgia, serif;
        --font-body: "Inter", ui-sans-serif, system-ui, -apple-system, sans-serif;
      }

      * {
        box-sizing: border-box;
      }

      html {
        scroll-behavior: smooth;
      }

      body {
        margin: 0;
        background: var(--bg);
        color: var(--ink);
        font-family: var(--font-body);
        line-height: 1.6;
        -webkit-font-smoothing: antialiased;
      }

      a {
        color: inherit;
        text-decoration: none;
      }

      img {
        max-width: 100%;
        display: block;
      }

      ::selection {
        background: var(--accent-soft);
        color: var(--ink);
      }

      .skip-link {
        position: fixed;
        left: 16px;
        top: 12px;
        z-index: 30;
        transform: translateY(-160%);
        background: var(--ink);
        color: var(--bg);
        padding: 10px 14px;
        border-radius: var(--radius);
        transition: transform 180ms ease;
      }

      .skip-link:focus {
        transform: translateY(0);
      }

      /* Header ---------------------------------------------------------- */
      .site-header {
        position: sticky;
        top: 0;
        z-index: 20;
        backdrop-filter: blur(8px);
        background: rgba(251, 250, 248, 0.92);
        border-bottom: 1px solid var(--line);
      }

      .nav {
        max-width: var(--max);
        margin: 0 auto;
        min-height: 74px;
        padding: 12px 22px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 18px;
      }

      .brand {
        display: inline-flex;
        align-items: center;
        gap: 10px;
      }

      .brand-mark {
        height: 30px;
        width: auto;
        flex: 0 0 auto;
      }

      .brand-word {
        font-family: var(--font-display);
        font-size: 1.35rem;
        letter-spacing: 0;
      }

      .nav-actions {
        display: flex;
        align-items: center;
        gap: 26px;
      }

      .nav-link {
        color: var(--ink-soft);
        font-weight: 500;
        font-size: 0.94rem;
      }

      .nav-link:hover {
        color: var(--ink);
        text-decoration: underline;
        text-underline-offset: 5px;
        text-decoration-thickness: 1px;
      }

      /* Buttons --------------------------------------------------------- */
      .button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 9px;
        min-height: 50px;
        padding: 0 24px;
        border: 1px solid var(--ink);
        border-radius: var(--radius);
        background: var(--ink);
        color: var(--bg);
        font-family: var(--font-body);
        font-weight: 600;
        font-size: 0.98rem;
        line-height: 1;
        cursor: pointer;
        transition:
          background 160ms ease,
          color 160ms ease,
          border-color 160ms ease;
      }

      .button.accent {
        background: var(--accent);
        border-color: var(--accent);
        color: #ffffff;
      }

      .button.accent:hover {
        background: var(--accent-strong);
        border-color: var(--accent-strong);
      }

      .button.ghost {
        background: transparent;
        color: var(--ink);
        border-color: var(--ink);
      }

      .button.ghost:hover {
        background: var(--ink);
        color: var(--bg);
      }

      .button.big {
        min-height: 60px;
        padding: 0 34px;
        font-size: 1.08rem;
      }

      :focus-visible {
        outline: 3px solid var(--accent);
        outline-offset: 3px;
      }

      main {
        overflow: clip;
      }

      /* Typography ------------------------------------------------------ */
      h1,
      h2 {
        font-family: var(--font-display);
        margin-top: 0;
      }

      h1 {
        margin: 0 0 22px;
        font-size: clamp(2.75rem, 6.4vw, 4.5rem);
        font-weight: 400;
        line-height: 1.02;
        letter-spacing: -0.02em;
      }

      h2 {
        margin: 0 0 18px;
        max-width: 22ch;
        font-size: clamp(2rem, 4.4vw, 3rem);
        font-weight: 400;
        line-height: 1.08;
        letter-spacing: -0.01em;
      }

      h3 {
        margin-top: 0;
        font-family: var(--font-body);
        font-weight: 600;
      }

      p {
        margin-top: 0;
      }

      .section {
        padding: clamp(64px, 9vw, 116px) 22px;
      }

      .wrap {
        max-width: var(--max);
        margin: 0 auto;
      }

      .eyebrow,
      .kicker,
      .help-kicker {
        margin: 0 0 18px;
        color: var(--ink-mute);
        font-family: var(--font-body);
        font-weight: 600;
        font-size: 0.72rem;
        letter-spacing: 0.14em;
        text-transform: uppercase;
      }

      .lead {
        max-width: 58ch;
        color: var(--ink-soft);
        font-size: 1.15rem;
      }

      /* Hero ------------------------------------------------------------ */
      .hero {
        padding: clamp(28px, 4vw, 56px) 22px clamp(64px, 9vw, 110px);
        border-bottom: 1px solid var(--line);
      }

      .hero-grid {
        max-width: var(--max);
        margin: 0 auto;
        display: grid;
        grid-template-columns: minmax(0, 7fr) minmax(280px, 5fr);
        gap: clamp(40px, 6vw, 88px);
        align-items: start;
      }

      .hero h1 {
        max-width: 16ch;
        margin-top: 8px;
        color: var(--ink);
      }

      .hero-lead {
        max-width: 56ch;
        margin: 0 0 32px;
        color: var(--ink-soft);
        font-size: 1.14rem;
      }

      .hooks {
        display: flex;
        flex-wrap: wrap;
        margin: 26px 0 30px;
        padding: 0;
        list-style: none;
      }

      .hooks li {
        padding: 4px 20px 4px 0;
        margin: 4px 20px 4px 0;
        border-right: 1px solid var(--line);
        color: var(--ink-soft);
        font-size: 0.94rem;
        font-weight: 500;
      }

      .hooks li:last-child {
        border-right: 0;
        margin-right: 0;
        padding-right: 0;
      }

      .hero-actions {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
        align-items: center;
      }

      /* Conversion CTA (bloque oscuro) ---------------------------------- */
      .conversion-cta {
        padding: clamp(56px, 7vw, 88px) 22px;
        background: var(--ink);
        color: var(--bg);
      }

      .conversion-cta .wrap {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 28px;
      }

      .conversion-cta .kicker {
        color: rgba(251, 250, 248, 0.55);
      }

      .conversion-cta h2 {
        margin-bottom: 8px;
        color: var(--bg);
        font-size: clamp(1.8rem, 3.4vw, 2.6rem);
      }

      .conversion-cta p:last-child {
        margin: 0;
        color: rgba(251, 250, 248, 0.72);
      }

      .conversion-cta .button {
        flex: 0 0 auto;
      }

      .conversion-cta .button.accent {
        background: var(--bg);
        border-color: var(--bg);
        color: var(--ink);
      }

      .conversion-cta .button.accent:hover {
        background: #ffffff;
        border-color: #ffffff;
      }

      /* "Así te ayudamos" card ----------------------------------------- */
      .help-card {
        border-top: 1px solid var(--ink);
        padding-top: 18px;
      }

      .help-list {
        display: grid;
        gap: 0;
        margin: 0;
        padding: 0;
        list-style: none;
      }

      .help-list li {
        padding: 15px 0;
      }

      .help-list li + li {
        border-top: 1px solid var(--line);
      }

      .help-list strong {
        display: block;
        margin-bottom: 3px;
        font-weight: 600;
        font-size: 1.02rem;
      }

      .help-list span {
        color: var(--ink-soft);
        font-size: 0.97rem;
      }

      .help-foot {
        margin: 0;
        padding-top: 16px;
        border-top: 1px solid var(--line);
        color: var(--ink-mute);
        font-size: 0.95rem;
      }

      /* Ejemplo (antes / después) --------------------------------------- */
      .example {
        border-bottom: 1px solid var(--line);
      }

      .example-grid {
        display: grid;
        grid-template-columns: minmax(0, 1fr) minmax(280px, 360px);
        gap: clamp(32px, 6vw, 72px);
        align-items: center;
      }

      .timeline {
        display: grid;
        gap: 0;
        margin-top: 24px;
        border-top: 1px solid var(--line);
      }

      .timeline-item {
        padding: 18px 0;
        border-bottom: 1px solid var(--line);
      }

      .timeline-item h3 {
        margin: 0 0 4px;
        font-size: 1.02rem;
      }

      .timeline-item p {
        margin: 0;
        color: var(--ink-soft);
      }

      /* "Cómo queda": filas numeradas via counters */
      .example .process-grid {
        counter-reset: paso;
        margin-top: 20px;
        gap: clamp(24px, 4vw, 48px);
        border-top: 1px solid var(--ink);
      }

      .example .process-grid .timeline-item {
        counter-increment: paso;
        padding: 22px 0 0;
        border-bottom: 0;
      }

      .example .process-grid .timeline-item::before {
        content: "0" counter(paso);
        display: block;
        margin-bottom: 12px;
        font-family: var(--font-display);
        font-size: 2.2rem;
        line-height: 1;
        color: var(--accent);
      }

      /* Phone ----------------------------------------------------------- */
      .phone {
        justify-self: center;
        position: relative;
        width: min(100%, 320px);
        padding: 10px;
        border-radius: 36px;
        background: var(--ink);
      }

      .phone-modern {
        aspect-ratio: 9 / 19;
      }

      .phone-screen {
        position: relative;
        display: flex;
        flex-direction: column;
        height: 100%;
        border-radius: 28px;
        overflow: hidden;
        background: var(--bg);
      }

      .phone-notch {
        position: absolute;
        top: 11px;
        left: 50%;
        transform: translateX(-50%);
        width: 90px;
        height: 24px;
        border-radius: 999px;
        background: var(--ink);
        z-index: 6;
      }

      .phone-status {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 14px 24px 8px;
        color: var(--ink);
        font-size: 0.8rem;
        font-weight: 600;
        font-variant-numeric: tabular-nums;
      }

      .phone-status svg {
        display: block;
        opacity: 0.75;
      }

      .chat-header {
        display: flex;
        align-items: center;
        gap: 11px;
        padding: 6px 18px 12px;
        border-bottom: 1px solid var(--line);
      }

      .chat-avatar {
        width: 40px;
        height: 40px;
        flex: 0 0 auto;
        display: grid;
        place-items: center;
        border-radius: 50%;
        background: var(--accent);
        color: #ffffff;
        font-family: var(--font-display);
        font-size: 1.2rem;
      }

      .chat-title strong {
        display: block;
        font-weight: 600;
        font-size: 0.98rem;
        color: var(--ink);
      }

      .chat-sub {
        display: flex;
        align-items: center;
        gap: 6px;
        color: var(--ink-mute);
        font-size: 0.76rem;
      }

      .online-dot {
        width: 7px;
        height: 7px;
        border-radius: 50%;
        background: var(--ok);
      }

      .chat-body {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding: 16px 15px 6px;
        overflow: hidden;
      }

      .bubble {
        position: relative;
        align-self: flex-start;
        max-width: 90%;
        padding: 10px 13px;
        border: 1px solid var(--line);
        border-radius: 10px 10px 10px 3px;
        background: var(--surface);
        color: var(--ink-soft);
        font-size: 0.88rem;
        line-height: 1.4;
        animation: bubble-in 0.5s ease both;
      }

      .bubble:nth-child(2) {
        animation-delay: 0.12s;
      }
      .bubble:nth-child(3) {
        animation-delay: 0.24s;
      }
      .bubble:nth-child(4) {
        animation-delay: 0.36s;
      }

      @keyframes bubble-in {
        from {
          opacity: 0;
          transform: translateY(8px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      .bubble-day {
        display: block;
        margin-bottom: 3px;
        color: var(--ink);
        font-weight: 600;
        font-size: 0.8rem;
      }

      .bubble-time {
        display: block;
        margin-top: 4px;
        text-align: right;
        color: var(--ink-mute);
        font-size: 0.64rem;
      }

      .bubble.ok {
        background: var(--ok-soft);
        border-color: rgba(47, 125, 92, 0.28);
      }

      .bubble.ok .bubble-day {
        color: var(--ok);
      }

      .bubble.summary {
        align-self: stretch;
        max-width: 100%;
        margin-top: 2px;
        border-radius: 10px;
        border-color: var(--ink);
        background: var(--ink);
        color: rgba(251, 250, 248, 0.85);
      }

      .bubble.summary .bubble-day {
        color: #A8BFF5;
      }

      .phone-home {
        flex: 0 0 auto;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 24px;
      }

      .phone-home::after {
        content: "";
        width: 120px;
        height: 5px;
        border-radius: 999px;
        background: var(--ink);
        opacity: 0.8;
      }

      /* Servicios: filas numeradas -------------------------------------- */
      #servicios .process-grid {
        counter-reset: svc;
        grid-template-columns: 1fr;
        gap: 0;
        border-top: 1px solid var(--ink);
      }

      #servicios .process-step {
        counter-increment: svc;
        display: grid;
        grid-template-columns: 64px minmax(0, 1fr) minmax(0, 1.4fr);
        gap: clamp(16px, 3vw, 40px);
        align-items: baseline;
        padding: clamp(22px, 3vw, 32px) 0;
        border-top: 0;
        border-bottom: 1px solid var(--line);
      }

      #servicios .process-step::before {
        content: "0" counter(svc);
        font-family: var(--font-display);
        font-size: clamp(1.8rem, 3vw, 2.4rem);
        line-height: 1;
        color: var(--accent);
      }

      #servicios .process-step h3 {
        margin: 0;
        font-size: 1.12rem;
      }

      #servicios .process-step p {
        margin: 0;
      }

      /* Process (Cómo trabajamos) --------------------------------------- */
      .process-head {
        max-width: 48ch;
      }

      .process-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: clamp(24px, 4vw, 48px);
        margin-top: clamp(36px, 5vw, 52px);
      }

      .process-step {
        padding: 20px 0 0;
        border-top: 1px solid var(--ink);
      }

      .process-num {
        display: block;
        margin-bottom: 14px;
        font-family: var(--font-display);
        font-size: 2.2rem;
        line-height: 1;
        color: var(--accent);
      }

      .process-step h3 {
        margin: 0 0 8px;
        font-size: 1.15rem;
      }

      .process-step p {
        margin: 0;
        color: var(--ink-soft);
      }

      #contacto {
        scroll-margin-top: 82px;
      }

      .mobile-contact-cta {
        display: none;
      }

      /* Quiénes somos (equipo) ------------------------------------------ */
      #nosotros {
        border-top: 1px solid var(--line);
      }

      .about-head {
        max-width: 62ch;
      }

      .team {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: clamp(32px, 5vw, 64px);
        margin-top: clamp(36px, 5vw, 52px);
      }

      .team-member {
        display: flex;
        flex-direction: column;
        gap: 16px;
        padding-top: 24px;
        border-top: 1px solid var(--ink);
      }

      .team-head {
        display: flex;
        align-items: center;
        gap: 20px;
      }

      .team-photo {
        flex: 0 0 auto;
        width: 96px;
        height: 96px;
        display: grid;
        place-items: center;
        border-radius: var(--radius);
        object-fit: cover;
        background: var(--accent-soft);
        color: var(--accent);
        font-family: var(--font-display);
        font-size: 1.6rem;
      }

      .team-photo-gonzalo { object-position: 50% 24%; }
      .team-photo-juan { object-position: 50% 38%; }

      .team-name {
        display: block;
        font-family: var(--font-display);
        font-size: 1.5rem;
        letter-spacing: -0.01em;
      }

      .team-role {
        display: block;
        margin-top: 5px;
        color: var(--ink-mute);
        font-weight: 600;
        font-size: 0.74rem;
        letter-spacing: 0.12em;
        text-transform: uppercase;
      }

      .team-do {
        margin: 0;
        color: var(--ink-soft);
        font-size: 1.02rem;
      }

      .team-note {
        margin: clamp(28px, 4vw, 40px) 0 0;
        padding-top: 18px;
        border-top: 1px solid var(--line);
        max-width: 58ch;
        color: var(--ink-mute);
        font-size: 0.98rem;
      }

      /* Contact / mail -------------------------------------------------- */
      .contact {
        border-top: 1px solid var(--line);
      }

      .contact .wrap {
        max-width: 720px;
      }

      .contact h2 {
        max-width: 22ch;
      }

      .contact .lead {
        margin: 0 0 14px;
      }

      .contact-note {
        max-width: 52ch;
        margin: 0 0 38px;
        color: var(--ink-mute);
        font-size: 0.98rem;
      }

      .contact-form {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 26px 28px;
        margin: 8px 0 0;
        text-align: left;
      }

      .field {
        display: grid;
        gap: 8px;
        grid-column: 1 / -1;
      }

      /* nombre y email a media columna en escritorio */
      .contact-form div.field:nth-of-type(1),
      .contact-form div.field:nth-of-type(2) {
        grid-column: auto;
      }

      .field label {
        color: var(--ink-mute);
        font-weight: 600;
        font-size: 0.72rem;
        letter-spacing: 0.12em;
        text-transform: uppercase;
      }

      .field-opt {
        color: var(--ink-mute);
        font-weight: 500;
        text-transform: none;
        letter-spacing: 0;
      }

      .field input,
      .field textarea {
        width: 100%;
        padding: 10px 2px;
        border: 0;
        border-bottom: 1px solid var(--line);
        border-radius: 0;
        background: transparent;
        color: var(--ink);
        font-family: var(--font-body);
        font-size: 1.02rem;
        line-height: 1.4;
        transition: border-color 160ms ease, box-shadow 160ms ease;
      }

      .field textarea {
        min-height: 120px;
        resize: vertical;
      }

      .field input::placeholder,
      .field textarea::placeholder {
        color: var(--ink-mute);
      }

      .field input:focus,
      .field textarea:focus {
        outline: none;
        border-bottom-color: var(--accent);
        box-shadow: 0 1px 0 0 var(--accent);
      }

      .contact-form .button {
        width: 100%;
        margin-top: 4px;
        grid-column: 1 / -1;
      }

      .form-hint {
        margin: 0;
        grid-column: 1 / -1;
        color: var(--ink-mute);
        font-size: 0.9rem;
      }

      /* Footer ---------------------------------------------------------- */
      .site-footer {
        border-top: 1px solid var(--line);
        padding: 26px 22px 40px;
        color: var(--ink-mute);
      }

      .footer-inner {
        max-width: var(--max);
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 18px;
        flex-wrap: wrap;
      }

      .footer-inner .brand-word {
        color: var(--ink);
      }

      /* Reveal (below the fold only) ------------------------------------ */
      .reveal {
        opacity: 1;
        transform: none;
      }

      .js .reveal {
        opacity: 0;
        transform: translateY(18px);
        transition:
          opacity 500ms ease,
          transform 500ms ease;
      }

      .reveal.is-visible {
        opacity: 1;
        transform: translateY(0);
      }

      /* Responsive ------------------------------------------------------ */
      @media (max-width: 940px) {
        .hero-grid,
        .example-grid {
          grid-template-columns: 1fr;
        }

        .help-card {
          max-width: 520px;
        }

        .example-grid .phone {
          order: -1;
        }

        #servicios .process-step {
          grid-template-columns: 48px minmax(0, 1fr);
        }

        #servicios .process-step p {
          grid-column: 2;
        }
      }

      @media (max-width: 820px) {
        .nav-link {
          display: none;
        }
      }

      @media (max-width: 640px) {
        .nav {
          min-height: 66px;
          padding: 12px 16px;
        }

        .brand-mark {
          height: 26px;
        }

        .brand-word {
          font-size: 1.12rem;
        }

        .hero,
        .section {
          padding-left: 16px;
          padding-right: 16px;
        }

        .hooks {
          flex-direction: column;
        }

        .hooks li {
          padding: 10px 0;
          margin: 0;
          border-right: 0;
          border-bottom: 1px solid var(--line);
        }

        .hooks li:last-child {
          border-bottom: 0;
        }

        .hero-actions {
          flex-direction: column;
          align-items: stretch;
        }

        .hero-actions .button {
          width: 100%;
        }

        .conversion-cta {
          padding: 48px 16px;
        }

        .conversion-cta .wrap {
          align-items: stretch;
          flex-direction: column;
        }

        .conversion-cta .button {
          width: 100%;
        }

        .team,
        .process-grid {
          grid-template-columns: 1fr;
        }

        .contact-form {
          grid-template-columns: 1fr;
        }

        .lead {
          font-size: 1.06rem;
        }

        .mobile-contact-cta {
          position: fixed;
          right: 16px;
          bottom: max(16px, env(safe-area-inset-bottom));
          left: 16px;
          z-index: 20;
          display: inline-flex;
          min-height: 50px;
          opacity: 1;
          visibility: visible;
          transition:
            opacity 160ms ease,
            transform 160ms ease,
            visibility 160ms ease;
        }

        .mobile-contact-cta.is-hidden {
          opacity: 0;
          visibility: hidden;
          transform: translateY(12px);
          pointer-events: none;
        }
      }

      @media (prefers-reduced-motion: reduce) {
        html {
          scroll-behavior: auto;
        }

        *,
        *::before,
        *::after {
          animation-duration: 0.001ms !important;
          transition-duration: 0.001ms !important;
        }

        .js .reveal {
          opacity: 1;
          transform: none;
        }
      }
```

Notas de intención, por si algo tienta a "mejorarlo":

1. `.eyebrow`, `.kicker` y `.help-kicker` comparten una sola regla: etiqueta editorial única. El `.eyebrow.greet` del hero hereda esto; no recrear la variante vieja en minúscula.
2. Los checkmarks (`.hooks li::before`, `.help-list li::before`) desaparecen a propósito: el sistema es tipográfico, no de iconos.
3. `#servicios .process-step` y `.example .process-grid .timeline-item` generan sus numerales con counters para no tocar el markup. `#proceso` usa los `<span class="process-num">` que ya existen en el HTML.
4. El bloque `@media (max-width: 820px)` debe quedar exactamente así (primera y única regla `.nav-link`): hay un test con esa regex.
5. Los bloques `.reveal`/`.js .reveal`/`.reveal.is-visible`, `.mobile-contact-cta` (base y 640px) y `prefers-reduced-motion` están copiados del original y no se tocan.

- [ ] **Step 3: Correr los tests y verificar que pasan**

Run: `node --test tests/landing.test.mjs`
Expected: PASS, 18/18 en verde.

- [ ] **Step 4: Commit**

```bash
git add index.html tests/landing.test.mjs
git commit -m "Reskin landing with editorial serif and hairline system"
```

---

### Task 3: Verificación final en navegador

**Files:**
- Modify: `index.html` solo si aparecen defectos.

**Interfaces:**
- Consumes: el resultado de las Tasks 1 y 2.
- Produces: nada.

- [ ] **Step 1: Verificar que no quedaron restos del sistema viejo**

Run:

```bash
grep -nEi 'box-shadow|linear-gradient|radial-gradient|drift-|Manrope|#2563EB|#1FA971|#12212E' index.html
```

Expected: las únicas apariciones aceptables de `box-shadow` son la `transition` del focus de inputs y el `box-shadow: 0 1px 0 0 var(--accent)` del focus. Nada de gradientes, drift ni hexes viejos.

- [ ] **Step 2: Recorrer la página en el navegador**

```bash
python3 -m http.server 8765
```

Abrir `http://localhost:8765/` y verificar, en este orden:

1. **Escritorio (~1280px):** hero con serif grande y la lista "Así te ayudamos" a la derecha sin caja; hooks en fila con divisores; ejemplo con celular de marco oscuro plano y "Cómo queda" con numerales `01/02/03`; Servicios como filas horizontales numeradas; CTA oscuro a sangre completa; Proceso en 3 columnas con borde superior; Nosotros con fotos cuadradas y nombres en serif; Contacto con inputs subrayados y nombre/email en 2 columnas.
2. **~880px:** nav sin links (se ocultan a 820px… a 880 todavía se ven: verificar que no desborden); filas de Servicios colapsan a `numeral | contenido`.
3. **Móvil (~390px):** hooks apilados con hairlines; formulario a una columna; CTA móvil fijo aparece y desaparece al llegar a contacto; grillas a una columna.

Criterio de ajuste: si algo desborda o queda ilegible, ajustar el CSS respetando los bloques protegidos de las Global Constraints y volver a correr los tests.

- [ ] **Step 3: Commit de los ajustes, si hubo**

Si no hubo cambios, la task termina acá. Si hubo:

```bash
git add index.html
git commit -m "Fix editorial reskin details found in review"
```
