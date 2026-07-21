# Team Profiles Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the placeholder team profiles with the approved names, roles, and complementary descriptions.

**Architecture:** Update only the text inside the existing two team cards in `index.html` and protect the values with static Node tests. The card markup, initials, styles, responsiveness, and scripts remain unchanged.

**Tech Stack:** HTML5 and Node.js built-in test runner.

## Global Constraints

- Preserve the two-card structure, decorative `JD` and `GM` initials, styles, colors, typography, spacing, responsive behavior, introductory copy, and team note.
- First profile: `Juan Diego Caballero`, `Ingeniero en Sistemas`, and `Construye las automatizaciones y sistemas para que la información llegue sola, sin que cambies tu forma de trabajar.`
- Second profile: `Gonzalo Manresa`, `Analista de Negocios`, and `Transforma los datos de tu negocio en información clara para saber qué revisar primero y tomar mejores decisiones.`
- Do not add photos, assets, JavaScript, interactions, controls, layout changes, contact changes, or edits outside the team cards and their tests.
- Keep initials decorative with `aria-hidden="true"`.
- The landing test suite and `git diff --check` must complete without errors.

---

## File Structure

- Modify `index.html`: existing team-card copy at lines 1416-1444.
- Modify `tests/landing.test.mjs`: regression test for profile copy and decorative initials.

### Task 1: Replace placeholder team profiles

**Files:**

- Modify: `index.html:1416-1444`
- Modify: `tests/landing.test.mjs`

**Interfaces:**

- Consumes: `.team`, `.team-member`, `.team-photo`, `.team-name`, `.team-role`, and `.team-do`.
- Produces: the same two cards with approved identity and role text; no new classes, scripts, or assets.

- [ ] **Step 1: Write the failing profile test**

Add this test after `renders the current landing sections`:

```js
test('presents the approved MendoData team profiles', () => {
  const approvedProfiles = [
    'Juan Diego Caballero',
    'Ingeniero en Sistemas',
    'Construye las automatizaciones y sistemas para que la información llegue sola, sin que cambies tu forma de trabajar.',
    'Gonzalo Manresa',
    'Analista de Negocios',
    'Transforma los datos de tu negocio en información clara para saber qué revisar primero y tomar mejores decisiones.',
  ];

  for (const profileText of approvedProfiles) {
    assert.match(html, new RegExp(profileText, 'i'));
  }

  assert.doesNotMatch(html, /<span class="team-name">Nombre Apellido<\/span>/i);
  assert.match(html, /<span class="team-photo" aria-hidden="true">JD<\/span>/i);
  assert.match(html, /<span class="team-photo" aria-hidden="true">GM<\/span>/i);
});
```

- [ ] **Step 2: Run the test and verify RED**

Run `node --test --test-name-pattern="approved MendoData team profiles" tests/landing.test.mjs`.

Expected: FAIL because the approved profile strings are absent and `Nombre Apellido` is still present.

- [ ] **Step 3: Replace the two card text blocks**

Keep both `team-photo` spans and every class/attribute. Replace the first card's name, role, and paragraph with:

```html
<span class="team-name">Juan Diego Caballero</span>
<span class="team-role">Ingeniero en Sistemas</span>
<p class="team-do">Construye las automatizaciones y sistemas para que la información llegue sola, sin que cambies tu forma de trabajar.</p>
```

Replace the second card's name, role, and paragraph with:

```html
<span class="team-name">Gonzalo Manresa</span>
<span class="team-role">Analista de Negocios</span>
<p class="team-do">Transforma los datos de tu negocio en información clara para saber qué revisar primero y tomar mejores decisiones.</p>
```

- [ ] **Step 4: Run GREEN and the full suite**

Run:

```powershell
node --test --test-name-pattern="approved MendoData team profiles" tests/landing.test.mjs
node --test tests/landing.test.mjs
git diff --check
```

Expected: focused test and full suite pass with zero failures; diff check emits no output.

- [ ] **Step 5: Inspect scope and commit**

Run:

```powershell
git diff --check
git diff --stat
git diff -- index.html tests/landing.test.mjs
git add index.html tests/landing.test.mjs
git commit -m "Update team profiles"
```

Expected: the feature commit contains only `index.html` and `tests/landing.test.mjs`.

- [ ] **Step 6: Perform a non-submitting manual visual check**

Run `python -m http.server 8765 --bind 127.0.0.1` from the feature worktree. At desktop and mobile widths, check that both cards remain aligned, retain `JD` and `GM`, show the approved profiles, and no longer show `Nombre Apellido`. Do not submit the contact form; stop the server afterward.
