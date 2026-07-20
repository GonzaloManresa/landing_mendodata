# Hero Top Spacing Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Move the existing hero content closer to the header so the complete title is visible sooner, without changing content or component order.

**Architecture:** Keep the current static HTML and inline CSS structure. Protect the approved padding value with a focused Node test, then change only the top component of the existing `.hero` padding shorthand.

**Tech Stack:** Static HTML5, inline CSS, Node.js built-in test runner.

## Global Constraints

- Keep the header unchanged.
- Keep the current hero order: eyebrow, objectives, title, and buttons.
- Replace only `clamp(40px, 6vw, 76px)` with `clamp(24px, 3vw, 40px)` in `.hero`.
- Keep the horizontal padding `22px` and bottom padding `clamp(56px, 8vw, 92px)` unchanged.
- Do not change typography, font sizes, copy, colors, buttons, components, margins, transforms, or negative spacing.
- Do not repair the five unrelated historical test failures as part of this task.

## Baseline Test State

Before this task, `node --test tests/landing.test.mjs` reports 8 tests: 3 pass and the same 5 historical tests fail. Completion requires the new hero-spacing test to pass without adding any failure.

---

### Task 1: Reduce only the hero top padding

**Files:**
- Modify: `tests/landing.test.mjs`
- Modify: `index.html:304-311`

**Interfaces:**
- Consumes: the existing `html` string loaded by `tests/landing.test.mjs` and the `.hero` padding shorthand in `index.html`.
- Produces: a regression test named `positions the hero content closer to the header` and the approved top-padding value `clamp(24px, 3vw, 40px)`.

- [ ] **Step 1: Write the failing spacing test**

Append this test to `tests/landing.test.mjs`:

```js
test('positions the hero content closer to the header', () => {
  assert.match(
    html,
    /\.hero\s*\{[^}]*padding:\s*clamp\(24px, 3vw, 40px\) 22px clamp\(56px, 8vw, 92px\);/i,
  );
  assert.doesNotMatch(html, /clamp\(40px, 6vw, 76px\)/i);
});
```

- [ ] **Step 2: Run the focused test and verify RED**

```powershell
node --test --test-name-pattern="positions the hero" tests/landing.test.mjs
```

Expected: the spacing test fails because `.hero` still uses `clamp(40px, 6vw, 76px)`.

- [ ] **Step 3: Apply the single CSS change**

In `index.html`, change the `.hero` padding declaration to exactly:

```css
padding: clamp(24px, 3vw, 40px) 22px clamp(56px, 8vw, 92px);
```

Do not modify any other `.hero` declaration or HTML markup.

- [ ] **Step 4: Run the focused test and verify GREEN**

```powershell
node --test --test-name-pattern="positions the hero" tests/landing.test.mjs
```

Expected: 1 test passes and 0 fail.

- [ ] **Step 5: Verify the baseline and page availability**

```powershell
node --test tests/landing.test.mjs
```

Expected: 9 tests total, 4 pass and the same 5 historical tests fail. The Manrope and hero-spacing tests both pass.

```powershell
(Invoke-WebRequest -Uri 'http://127.0.0.1:8001/' -UseBasicParsing).StatusCode
```

Expected: `200`. The user will perform the final visual acceptance at `http://localhost:8001/` before integration.

- [ ] **Step 6: Commit the task**

```powershell
git add -- index.html tests/landing.test.mjs
git commit -m "Reduce hero top spacing"
```
