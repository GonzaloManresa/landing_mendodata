# Instagram Form Conversion Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Convert more mobile visits from Instagram into submissions of the existing MendoData contact form.

**Architecture:** Keep the single-file landing architecture and extend `index.html` with conversion-focused copy, an inline CTA section, and a progressively enhanced fixed mobile CTA. Reuse the existing design tokens, anchor navigation, responsive breakpoint, and `IntersectionObserver` pattern; preserve FormSubmit without intercepting submission.

**Tech Stack:** Semantic HTML5, embedded CSS, vanilla JavaScript, Node.js built-in test runner.

## Global Constraints

- Preserve the current composition, Manrope/Inter typography, approved colors, and spacing system.
- Use the exact approved Spanish copy from the design spec.
- Every conversion CTA must be a normal link to `#contacto`; none may submit the form.
- Show the persistent CTA only at viewport widths up to `640px`.
- Preserve the four visible form fields, `POST`, `https://formsubmit.co/mendodata@gmail.com`, `_subject="Nueva consulta desde la web"`, `_template="table"`, `_honey`, and FormSubmit's default CAPTCHA.
- Do not add WhatsApp, pop-ups, a second landing page, analytics, tracking pixels, AJAX, response-time promises, free-diagnosis claims, or new dependencies.
- Respect `prefers-reduced-motion`, keyboard focus, a minimum 44 px touch target, and the existing fixed header.

---

## File Structure

- Modify `index.html`: owns all landing markup, embedded styles, and progressive enhancement behavior.
- Modify `tests/landing.test.mjs`: owns static regression checks for approved copy, CTA destinations, responsive behavior, and preserved FormSubmit configuration.

No new runtime files or dependencies are required.

### Task 1: Conversion copy and inline CTA

**Files:**
- Modify: `tests/landing.test.mjs:10-24`
- Modify: `index.html:379-430`
- Modify: `index.html:1151-1164`
- Modify: `index.html:1188-1264`

**Interfaces:**
- Consumes: existing `.button`, `.button.accent`, `.wrap`, `.reveal`, `#contacto`, and `#ejemplo` conventions.
- Produces: `.hero-lead` supporting copy and a `.conversion-cta` section whose button is a normal `href="#contacto"` link.

- [ ] **Step 1: Write failing copy and CTA tests**

In `tests/landing.test.mjs`, replace the retired hero sentence in `requiredSnippets` with the new title and add this test after `renders the current landing sections`:

```js
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
```

- [ ] **Step 2: Run the focused test and verify RED**

Run:

```powershell
node --test --test-name-pattern="renders the current landing sections|guides Instagram visitors" tests/landing.test.mjs
```

Expected: the current-sections test fails because the new hero title is absent, and the new conversion test fails because the approved copy and `.conversion-cta` section are absent.

- [ ] **Step 3: Implement the hero copy and inline CTA markup**

In the hero, replace the current `h1` and primary action with:

```html
<h1 id="hero-title">Más control de tu negocio, menos tiempo reuniendo información</h1>
<p class="hero-lead">
  Organizamos tus datos y automatizamos tareas para que puedas decidir con
  claridad y trabajar con más tranquilidad.
</p>
<div class="hero-actions">
  <a class="button accent" href="#contacto">Contanos qué necesitás</a>
  <a class="button ghost" href="#ejemplo">Ver un ejemplo</a>
</div>
```

Immediately after the closing tag of `#ejemplo`, insert:

```html
<section class="conversion-cta" aria-labelledby="conversion-title">
  <div class="wrap reveal">
    <div>
      <p class="kicker">Hablemos de tu negocio</p>
      <h2 id="conversion-title">¿Te gustaría tener esta claridad en tu negocio?</h2>
      <p>Contanos cómo trabajás hoy y evaluamos dónde podemos ayudarte.</p>
    </div>
    <a class="button accent" href="#contacto">Contanos tu caso</a>
  </div>
</section>
```

Add these styles near the existing hero and example rules:

```css
.hero-lead {
  max-width: 58ch;
  margin: 0 0 28px;
  color: var(--ink-soft);
  font-size: 1.12rem;
}

.conversion-cta {
  padding: 40px 22px;
  border-bottom: 1px solid var(--line);
  background: var(--tint-blue);
}

.conversion-cta .wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 28px;
}

.conversion-cta h2 {
  margin-bottom: 8px;
  font-size: clamp(1.55rem, 3vw, 2.25rem);
}

.conversion-cta p:last-child {
  margin: 0;
  color: var(--ink-soft);
}

.conversion-cta .button {
  flex: 0 0 auto;
}
```

Inside the existing `@media (max-width: 640px)` block, add:

```css
.conversion-cta {
  padding: 34px 16px;
}

.conversion-cta .wrap {
  align-items: stretch;
  flex-direction: column;
}

.conversion-cta .button {
  width: 100%;
}
```

- [ ] **Step 4: Run focused and full tests and verify GREEN**

Run:

```powershell
node --test --test-name-pattern="renders the current landing sections|guides Instagram visitors" tests/landing.test.mjs
node --test tests/landing.test.mjs
git diff --check
```

Expected: focused tests pass, all landing tests pass, and `git diff --check` emits no output.

- [ ] **Step 5: Commit the independently working copy and inline CTA**

```powershell
git add index.html tests/landing.test.mjs
git commit -m "Improve Instagram conversion messaging"
```

### Task 2: Persistent mobile contact CTA

**Files:**
- Modify: `tests/landing.test.mjs`
- Modify: `index.html:883-951`
- Modify: `index.html:1049-1120`
- Modify: `index.html:1418-1449`

**Interfaces:**
- Consumes: the existing `#contacto` section, `.button.accent`, `@media (max-width: 640px)`, global focus styles, and browser `IntersectionObserver` when available.
- Produces: one `.mobile-contact-cta` anchor and one `contactObserver` that toggles `.is-hidden` based only on `#contacto` visibility.

- [ ] **Step 1: Write failing mobile CTA tests**

Add this test after the Task 1 conversion test:

```js
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
  assert.match(
    html,
    /mobileContactCta\.classList\.toggle\('is-hidden',\s*entry\.isIntersecting\)/i,
  );
  assert.doesNotMatch(html, /addEventListener\(['"]submit/i);
});
```

Extend `closes with the configured FormSubmit contact form` with:

```js
const visibleContactFields = [
  ...html.matchAll(/<(?:input|textarea)[^>]+name="(nombre|email|negocio|mensaje)"[^>]*>/gi),
].map((match) => match[1].toLowerCase());
assert.deepEqual(
  visibleContactFields,
  ['nombre', 'email', 'negocio', 'mensaje'],
);
```


Extend `includes baseline accessibility and usability hooks` with:

```js
assert.match(html, /#contacto\s*\{[^}]*scroll-margin-top:/i);
assert.match(
  html,
  /\.mobile-contact-cta[\s\S]*min-height:\s*50px/i,
);
```

- [ ] **Step 2: Run the focused test and verify RED**

Run:

```powershell
node --test --test-name-pattern="progressively enhanced contact CTA|baseline accessibility" tests/landing.test.mjs
```

Expected: both tests fail because the mobile CTA, contact scroll offset, and observer do not exist.

- [ ] **Step 3: Implement the mobile CTA styles and markup**

Add near the contact styles:

```css
#contacto {
  scroll-margin-top: 82px;
}

.mobile-contact-cta {
  display: none;
}
```

Inside `@media (max-width: 640px)`, add:

```css
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
```

Immediately after `</main>` and before the footer, add:

```html
<a class="mobile-contact-cta button accent" href="#contacto">Contanos tu caso</a>
```

- [ ] **Step 4: Implement progressive hiding near the form**

After the existing reveal-observer fallback and before `</script>`, add:

```js
const mobileContactCta = document.querySelector('.mobile-contact-cta');
const contactSection = document.querySelector('#contacto');

if (mobileContactCta && contactSection && 'IntersectionObserver' in window) {
  const contactObserver = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      mobileContactCta.classList.toggle('is-hidden', entry.isIntersecting);
    }
  }, { threshold: 0.05 });

  contactObserver.observe(contactSection);
}
```

Do not add a click listener or a submit listener. The anchor remains the no-JavaScript fallback and the existing FormSubmit flow remains native.

- [ ] **Step 5: Run automated verification and verify GREEN**

Run:

```powershell
node --test --test-name-pattern="progressively enhanced contact CTA|baseline accessibility|configured FormSubmit" tests/landing.test.mjs
node --test tests/landing.test.mjs
git diff --check
```

Expected: focused tests pass, the full suite passes with zero failures, and `git diff --check` emits no output.

- [ ] **Step 6: Perform responsive and interaction QA without submitting the form**

Start the static server from the feature worktree:

```powershell
python -m http.server 8765 --bind 127.0.0.1
```

Open `http://127.0.0.1:8765/` and verify:

1. At `390x844`, the fixed CTA is visible, remains above the safe-area inset, has a visible keyboard focus, and scrolls to a fully visible contact heading.
2. At `390x844`, the fixed CTA becomes hidden while `#contacto` is visible and returns after scrolling away.
3. At `1440x900`, the fixed CTA is absent and the inline CTA aligns with the existing design.
4. The hero and inline CTA both navigate to `#contacto`; “Ver un ejemplo” still navigates to `#ejemplo`.
5. The form still shows Nombre, Email, Negocio, and Mensaje. Do not press “Enviar consulta”.

Stop the local server after the checks.

- [ ] **Step 7: Commit the persistent mobile CTA**

```powershell
git add index.html tests/landing.test.mjs
git commit -m "Add persistent mobile contact CTA"
```

- [ ] **Step 8: Run final branch verification**

Run:

```powershell
node --test tests/landing.test.mjs
git diff --check
git status --short
```

Expected: every test passes, `git diff --check` emits no output, and `git status --short` emits no output.
