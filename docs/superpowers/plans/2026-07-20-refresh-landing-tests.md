# Refresh Landing Tests Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Restore a green test suite by updating five historical assertions to describe the landing approved and implemented on July 17, without changing production HTML.

**Architecture:** Keep the existing Node test file and its real-HTML assertions. Replace only expectations invalidated by the blue-trust redesign, professional copy, process section, and FormSubmit contact form; retain the current removal, typography, and hero-spacing contracts.

**Tech Stack:** Node.js built-in test runner, static HTML assertions.

## Global Constraints

- Modify only `tests/landing.test.mjs`; do not modify `index.html` or production assets.
- Preserve the tests for removed sections, retired colors, Manrope typography, and hero spacing.
- Assert the current sections: hero, example, process, team, and contact form.
- Assert the approved palette values `#2563EB`, `#12212E`, `#5A6B7B`, and `#1FA971`.
- Continue prohibiting unsupported product claims: `portal`, `dashboard`, and `inteligencia artificial`.
- Treat `datos`, `automatizacion`, and `sistema` as intentional current positioning, not prohibited copy.
- Assert navigation links for `#contacto`, `#ejemplo`, `#proceso`, and `#nosotros`.
- Assert the FormSubmit POST form and its required `nombre`, `email`, and `mensaje` controls; assert that `wa.me` is absent.

---

### Task 1: Align historical assertions with the current landing

**Files:**
- Modify: `tests/landing.test.mjs:14-81`

**Interfaces:**
- Consumes: the existing `html` and `visibleText` strings derived from `index.html`.
- Produces: nine passing tests that protect the current landing behavior and visual contracts.

- [ ] **Step 1: Capture the existing RED baseline**

```powershell
node --test tests/landing.test.mjs
```

Expected: 9 tests total, 4 pass and 5 fail. The failures are the old section copy, old indigo palette, old prohibited-word list, removed `#clientes` link, and removed WhatsApp-only contact.

- [ ] **Step 2: Replace the stale section expectations**

Replace the first test with:

```js
test('renders the current landing sections', () => {
  const requiredSnippets = [
    'Analisis de datos y automatizacion',
    'Si buscas alguno de estos objetivos, podemos ayudarte a lograrlo',
    'El fin de semana, ordenado para arrancar el lunes',
    'Un proceso simple, de principio a fin',
    'Un equipo especializado en datos y automatizacion',
    'Contanos sobre tu negocio',
  ];

  for (const snippet of requiredSnippets) {
    assert.match(html, new RegExp(snippet, 'i'));
  }
});
```

- [ ] **Step 3: Replace the stale palette expectations**

Replace the old indigo-palette test with:

```js
test('uses the approved blue trust palette', () => {
  const colors = ['#2563EB', '#12212E', '#5A6B7B', '#1FA971'];

  for (const color of colors) {
    assert.match(html, new RegExp(color, 'i'));
  }
});
```

- [ ] **Step 4: Align the copy guard with the current positioning**

Replace the old prohibited-language test with:

```js
test('keeps unsupported product claims out of visible copy', () => {
  const prohibitedPhrases = ['portal', 'dashboard', 'inteligencia artificial'];

  for (const phrase of prohibitedPhrases) {
    assert.doesNotMatch(visibleText, new RegExp(`\\b${phrase}\\b`, 'i'));
  }
});
```

- [ ] **Step 5: Update navigation and contact contracts**

Replace the accessibility/usability test with:

```js
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
```

Replace the WhatsApp-only test with:

```js
test('closes with an accessible FormSubmit contact form', () => {
  assert.match(html, /<form\b/i);
  assert.match(html, /action="https:\/\/formsubmit\.co\//i);
  assert.match(html, /method="POST"/i);
  assert.match(html, /<input[^>]+name="nombre"[^>]+required/i);
  assert.match(html, /<input[^>]+name="email"[^>]+required/i);
  assert.match(html, /<textarea[^>]+name="mensaje"[^>]+required/i);
  assert.match(html, /<button[^>]+type="submit"/i);
  assert.doesNotMatch(html, /wa\.me\//i);
});
```

- [ ] **Step 6: Run the full suite and verify GREEN**

```powershell
node --test tests/landing.test.mjs
```

Expected: 9 tests total, 9 pass, 0 fail, exit code `0`.

- [ ] **Step 7: Verify scope and commit**

```powershell
git diff --check
git diff --name-only HEAD
```

Expected: no whitespace errors; only `tests/landing.test.mjs` is listed.

```powershell
git add -- tests/landing.test.mjs
git commit -m "Refresh landing tests for current design"
```
