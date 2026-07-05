# MendoData Landing Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a polished static landing page for MendoData with strong usability, responsive layout, and refined transitions.

**Architecture:** Use one static HTML file for the landing and one Node-based verification script. The landing keeps copy, markup, styles, and minimal interaction together because the project has no framework or asset pipeline yet.

**Tech Stack:** HTML, CSS, vanilla JavaScript, Node.js built-in test runner.

---

### Task 1: Landing Structure Test

**Files:**
- Create: `tests/landing.test.mjs`
- Create: `landing-mendodata.html`

- [ ] **Step 1: Write the failing test**

Create `tests/landing.test.mjs` with checks for required sections, approved colors, prohibited public copy, and baseline accessibility attributes.

- [ ] **Step 2: Run test to verify it fails**

Run: `node --test tests/landing.test.mjs`
Expected: FAIL because `landing-mendodata.html` does not exist yet.

- [ ] **Step 3: Build the landing**

Create `landing-mendodata.html` with semantic sections, responsive styles, animated reveal behavior, smooth scrolling, a phone mockup, pain blocks, close promise, and a simple contact form.

- [ ] **Step 4: Run test to verify it passes**

Run: `node --test tests/landing.test.mjs`
Expected: PASS.

### Task 2: Browser Verification

**Files:**
- Modify: `landing-mendodata.html`

- [ ] **Step 1: Start a local server**

Run: `python3 -m http.server 4173`
Expected: local server available at `http://localhost:4173/landing-mendodata.html`.

- [ ] **Step 2: Inspect the page**

Open the page or capture it with available browser tooling. Verify desktop and mobile layout do not overlap, transitions do not block content, CTA anchors work, and the form is usable.

- [ ] **Step 3: Fix issues found during inspection**

Patch `landing-mendodata.html` only where the browser inspection reveals layout, accessibility, or interaction problems.

- [ ] **Step 4: Re-run tests**

Run: `node --test tests/landing.test.mjs`
Expected: PASS.

### Task 3: Approved V2 Expansion

**Files:**
- Modify: `tests/landing.test.mjs`
- Modify: `landing-mendodata.html`
- Modify: `docs/superpowers/specs/2026-07-05-mendodata-landing-design.md`

- [ ] **Step 1: Extend the test first**

Update `tests/landing.test.mjs` so it requires:
- `Antes`
- `Despues`
- `Quienes somos`
- `Nuestra mision`
- `Nuestra vision`
- `Proyectos`
- `Mensajes de clientes`
- `Testimonios`
- `class="phone-modern"`
- `aria-labelledby="before-after-title"`

- [ ] **Step 2: Run test to verify it fails**

Run: `node --test tests/landing.test.mjs`
Expected: FAIL because the approved V2 sections are not in the landing yet.

- [ ] **Step 3: Implement V2 content and layout**

Update `landing-mendodata.html` with:
- A more modern phone mockup.
- A clear before/after section near the top.
- A compact `Quienes somos` section.
- Mission and vision cards.
- Projects by problem type.
- Client-message and testimonial examples using generic rubro/cargo labels unless real names are approved.

- [ ] **Step 4: Re-run tests**

Run: `node --test tests/landing.test.mjs`
Expected: PASS.
