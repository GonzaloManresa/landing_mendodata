# Manrope Typography Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace Fraunces with Manrope for display typography while preserving Inter, the existing layout, and all page content.

**Architecture:** Keep the landing as a single static `index.html`. Update the Google Fonts request and the existing CSS typography tokens instead of adding a new stylesheet or dependency; protect the decision with a focused Node test in the current landing test file.

**Tech Stack:** Static HTML5, inline CSS, Google Fonts, Node.js built-in test runner.

## Global Constraints

- Replace Fraunces with Manrope for every element that consumes `var(--font-display)`.
- Keep Inter as the body and interface font.
- Use weight `700` for `h1` and `h2`; retain weight `600` for `h3` and secondary display text.
- Do not change copy, colors, spacing, layout, components, interactions, or logo assets.
- Do not add JavaScript, packages, build tooling, or new runtime dependencies.
- Do not repair unrelated historical assertions in `tests/landing.test.mjs` as part of this change.

## Baseline Test State

Before this work, `node --test tests/landing.test.mjs` reports 7 tests: 2 pass and 5 fail. The failures are pre-existing content, palette, accessibility, and contact assertions. Completion requires the new typography test to pass and the full suite to retain exactly those five pre-existing failures, with no additional regression.

---

### Task 1: Replace the display font and lock the typography contract

**Files:**
- Modify: `tests/landing.test.mjs:1-78`
- Modify: `index.html:14-18`
- Modify: `index.html:42-43`
- Modify: `index.html:227-245`

**Interfaces:**
- Consumes: the existing `html` string loaded from `index.html` and the CSS tokens `--font-display` and `--font-body`.
- Produces: a Google Fonts request containing Manrope weights `600;700`, a `--font-display` token backed by Manrope, and a regression test named `uses Manrope for display typography and keeps Inter for body copy`.

- [ ] **Step 1: Write the failing typography test**

Append this test to `tests/landing.test.mjs`:

```js
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
```

- [ ] **Step 2: Run the focused test and verify that it fails for the old font**

Run:

```powershell
node --test --test-name-pattern="uses Manrope" tests/landing.test.mjs
```

Expected: the matching typography test fails because `index.html` still contains Fraunces; the seven non-matching tests are reported as skipped.

- [ ] **Step 3: Replace the Google Fonts request and display token**

In `index.html`, replace the current Google Fonts `href` with:

```html
href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Manrope:wght@600;700&display=swap"
```

Replace the two font tokens with exactly:

```css
--font-display: "Manrope", ui-sans-serif, system-ui, -apple-system, sans-serif;
--font-body: "Inter", ui-sans-serif, system-ui, -apple-system, sans-serif;
```

- [ ] **Step 4: Apply the approved title hierarchy**

Keep all existing title sizes, line heights, letter spacing, and margins. Change only the title weights so the three rules contain:

```css
h1 {
  margin: 0 0 22px;
  font-size: clamp(2.6rem, 6vw, 4.6rem);
  font-weight: 700;
  line-height: 1.03;
  letter-spacing: -0.02em;
}

h2 {
  margin: 0 0 18px;
  max-width: 20ch;
  font-size: clamp(2rem, 4.4vw, 3.3rem);
  font-weight: 700;
  line-height: 1.08;
  letter-spacing: -0.015em;
}

h3 {
  font-weight: 600;
}
```

- [ ] **Step 5: Run the focused typography test**

Run:

```powershell
node --test --test-name-pattern="uses Manrope" tests/landing.test.mjs
```

Expected: the Manrope test passes and the seven non-matching tests are skipped.

- [ ] **Step 6: Confirm references and page availability**

Run:

```powershell
rg -n "Manrope|Inter|Fraunces|font-display" index.html
```

Expected: the Google Fonts URL includes Inter and Manrope, every display consumer still uses `var(--font-display)`, and there is no Fraunces match.

With the existing local server running, run:

```powershell
(Invoke-WebRequest -Uri 'http://127.0.0.1:8000/' -UseBasicParsing).StatusCode
```

Expected: `200`. Open `http://localhost:8000/` and confirm at desktop and mobile widths that headings use Manrope, body text remains Inter, text does not clip, and the layout and content are unchanged.

- [ ] **Step 7: Check that the full suite adds no regression**

Run:

```powershell
node --test tests/landing.test.mjs
```

Expected: 8 tests total, 3 pass and the same 5 baseline tests fail. The new Manrope test must pass.

- [ ] **Step 8: Commit the implementation**

```powershell
git add -- index.html tests/landing.test.mjs
git commit -m "Update display typography to Manrope"
```
