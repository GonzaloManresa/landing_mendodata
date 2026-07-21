# Team Photos Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the team-card initials with the supplied, accessible photos using the approved face-prioritized crop.

**Architecture:** Copy supplied images into stable asset paths, replace only the two avatar spans with semantic images, and add crop modifier classes that reuse the existing circular `.team-photo` styling. Static Node tests cover assets, exact markup, crop rules, and the absence of decorative initials.

**Tech Stack:** HTML5, embedded CSS, local raster assets, Node.js built-in test runner.

## Global Constraints

- Copy `C:\Users\Juan Diego\Downloads\fotoGonza.jpeg` to `assets/team-gonzalo.jpeg` and `C:\Users\Juan Diego\Downloads\ChatGPT Image 12 jul 2026, 08_17_08 p.m..png` to `assets/team-juan-diego.png`; never move or edit the originals.
- Gonzalo requires `class="team-photo team-photo-gonzalo"`, `src="assets/team-gonzalo.jpeg"`, `alt="Gonzalo Manresa"`, and `object-position: 50% 24%`.
- Juan Diego requires `class="team-photo team-photo-juan"`, `src="assets/team-juan-diego.png"`, `alt="Juan Diego Caballero"`, and `object-position: 50% 38%`.
- Preserve existing 76 px circular `object-fit: cover` treatment, text profiles, cards, styles, responsive layout, CTA, form, JavaScript, and all other sections.
- Remove only the decorative JD/GM spans; do not use `aria-hidden` on informative images.
- Add no image generation, filters, dependencies, JavaScript, interactions, or analytics.
- Tests and `git diff --check` must complete cleanly.

---

## File Structure

- Create: `assets/team-gonzalo.jpeg` and `assets/team-juan-diego.png`.
- Modify: `index.html` for two image elements and crop modifier CSS.
- Modify: `tests/landing.test.mjs` for assets, markup, alt text, crop CSS, and initials regression checks.

### Task 1: Add accessible face-prioritized team photos

**Files:**

- Create: `assets/team-gonzalo.jpeg`
- Create: `assets/team-juan-diego.png`
- Modify: `index.html:803-821,1416-1444`
- Modify: `tests/landing.test.mjs`

**Interfaces:**

- Consumes: existing `.team-photo` size, circular mask, `object-fit: cover`, and the two `.team-member` cards.
- Produces: `.team-photo-gonzalo` and `.team-photo-juan` image modifiers with accessible `<img>` elements.

- [ ] **Step 1: Write the failing photo test**

Change the fs import to `import { existsSync, readFileSync } from 'node:fs';` and add `import { fileURLToPath } from 'node:url';`. Add this test after the profile test:

```js
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
```

- [ ] **Step 2: Run RED**

Run `node --test --test-name-pattern="approved accessible team photos" tests/landing.test.mjs`.

Expected: FAIL because assets, image markup, and crop styles are absent.

- [ ] **Step 3: Copy assets and implement images**

Run:

```powershell
Copy-Item -LiteralPath 'C:\Users\Juan Diego\Downloads\fotoGonza.jpeg' -Destination 'assets\team-gonzalo.jpeg'
Copy-Item -LiteralPath 'C:\Users\Juan Diego\Downloads\ChatGPT Image 12 jul 2026, 08_17_08 p.m..png' -Destination 'assets\team-juan-diego.png'
```

After `.team-photo`, add:

```css
.team-photo-gonzalo { object-position: 50% 24%; }
.team-photo-juan { object-position: 50% 38%; }
```

Replace only the first card avatar with:

```html
<img class="team-photo team-photo-juan" src="assets/team-juan-diego.png" alt="Juan Diego Caballero">
```

Replace only the second card avatar with:

```html
<img class="team-photo team-photo-gonzalo" src="assets/team-gonzalo.jpeg" alt="Gonzalo Manresa">
```

- [ ] **Step 4: Run GREEN and full verification**

Run:

```powershell
node --test --test-name-pattern="approved accessible team photos" tests/landing.test.mjs
node --test tests/landing.test.mjs
git diff --check
```

Expected: focused test and complete suite pass with zero failures; diff check has no output.

- [ ] **Step 5: Inspect scope and commit**

Run:

```powershell
git diff --check
git diff --stat
git diff -- index.html tests/landing.test.mjs
git status --short
git add assets/team-gonzalo.jpeg assets/team-juan-diego.png index.html tests/landing.test.mjs
git commit -m "Add team photos"
```

Expected: only the two new assets, `index.html`, and `tests/landing.test.mjs` are included.

- [ ] **Step 6: Perform non-submitting visual QA**

Run `python -m http.server 8765 --bind 127.0.0.1` from the feature worktree. At desktop and mobile widths, verify circular avatars, face-prioritized framing, aligned names/roles, and no image distortion. Do not submit the contact form; stop the server afterward.
