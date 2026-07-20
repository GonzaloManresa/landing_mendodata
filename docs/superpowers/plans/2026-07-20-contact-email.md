# Contact Email Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Route contact-form submissions to `mendodata@gmail.com` and restore FormSubmit's default reCAPTCHA protection.

**Architecture:** Keep the existing static FormSubmit integration. Strengthen the current HTML-contract test first, then change only the form destination, remove the explicit CAPTCHA opt-out, and update the explanatory comment.

**Tech Stack:** Static HTML5, FormSubmit, Node.js built-in test runner.

## Global Constraints

- Use the exact form action `https://formsubmit.co/mendodata@gmail.com`.
- Remove the hidden `_captcha=false` field so FormSubmit uses its default CAPTCHA behavior.
- Preserve POST, `_subject="Nueva consulta desde la web"`, `_template="table"`, and `_honey`.
- Preserve all visible fields, copy, styling, layout, and JavaScript.
- Do not submit the form, send an activation email, or activate FormSubmit automatically.
- Do not add AJAX, `_next`, `_cc`, `_autoresponse`, or a private endpoint token.

---

### Task 1: Configure and protect the contact destination

**Files:**
- Modify: `tests/landing.test.mjs:78-88`
- Modify: `index.html:1374-1385`

**Interfaces:**
- Consumes: the existing FormSubmit POST form and the `html` string loaded by the Node test.
- Produces: submissions addressed to `mendodata@gmail.com` and a regression contract that requires the destination and anti-spam configuration.

- [ ] **Step 1: Strengthen the contact-form test**

Replace the current contact-form test with:

```js
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
});
```

- [ ] **Step 2: Run the focused test and verify RED**

```powershell
node --test --test-name-pattern="configured FormSubmit" tests/landing.test.mjs
```

Expected: 1 test fails because the form still targets `contacto@mendodata.com` and still contains `_captcha=false`.

- [ ] **Step 3: Apply the minimal HTML configuration**

Replace the placeholder comment and form opening with:

```html
<!-- FormSubmit envia las consultas a mendodata@gmail.com -->
<!-- El primer envio requiere confirmar la direccion desde el correo de activacion -->
<form
  class="contact-form reveal"
  action="https://formsubmit.co/mendodata@gmail.com"
  method="POST"
>
  <input type="hidden" name="_subject" value="Nueva consulta desde la web">
  <input type="hidden" name="_template" value="table">
```

Delete this line completely:

```html
<input type="hidden" name="_captcha" value="false">
```

- [ ] **Step 4: Run the focused test and verify GREEN**

```powershell
node --test --test-name-pattern="configured FormSubmit" tests/landing.test.mjs
```

Expected: 1 test passes, 0 fail, exit code `0`.

- [ ] **Step 5: Run complete verification**

```powershell
node --test tests/landing.test.mjs
git diff --check
```

Expected: 9 tests pass, 0 fail; no whitespace errors.

Verify local availability without submitting the form:

```powershell
$response = Invoke-WebRequest -Uri 'http://127.0.0.1:8000/' -UseBasicParsing
$response.StatusCode
$response.Content -match 'action="https://formsubmit\.co/mendodata@gmail\.com"'
```

Expected: `200` and `True`.

- [ ] **Step 6: Commit**

```powershell
git add -- index.html tests/landing.test.mjs
git commit -m "Configure contact form email"
```
