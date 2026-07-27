# Reposicionamiento Microsoft — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Reescribir el contenido de la landing para posicionar a MendoData como digitalizadora de procesos sobre el entorno Microsoft, conservando identidad visual, layout y formulario.

**Architecture:** Todo el sitio es un único archivo `index.html` con el CSS embebido en un `<style>` y el JS en un `<script>` al final. Los tests son aserciones de texto y regex sobre ese HTML leído como string. El trabajo es reemplazar bloques de markup y actualizar las aserciones correspondientes; el CSS no se toca salvo una excepción declarada en la Task 2.

**Tech Stack:** HTML estático, CSS embebido, `node:test` + `node:assert/strict`.

Spec: `docs/superpowers/specs/2026-07-27-reposicionamiento-microsoft-design.md`

## Global Constraints

- Comando de test único: `node --test tests/landing.test.mjs`. Debe quedar en verde al final de cada task.
- Español rioplatense con voseo (`necesitás`, `contanos`, `tenés`), consistente con el copy existente.
- **Prohibido** escribir "partner", "socio de Microsoft", "certificados" o cualquier variante que implique respaldo oficial de Microsoft. Prohibido agregar logos o insignias de Microsoft.
- **Prohibido** afirmar que el cliente no paga licencias adicionales. Se dice "tu empresa ya tiene Microsoft", nunca "no vas a gastar más".
- **Prohibido** en texto visible: las palabras `portal`, `dashboard` e `inteligencia artificial`. Hay un test que lo verifica (`keeps unsupported product claims out of visible copy`). Usar "tablero" en lugar de "dashboard".
- No se tocan: paleta de colores, tipografías, reglas de `.reveal`, CTA móvil, IntersectionObservers, fotos del equipo ni la configuración de FormSubmit. Hay tests que los cubren y sirven de red de seguridad.
- No se agregan clases CSS nuevas. Todo el markup nuevo reutiliza clases existentes.
- Los textos son los del spec, literales. No reescribirlos "mejorándolos".

---

### Task 1: Meta, nav y hero

**Files:**
- Modify: `index.html:7-11` (title y description), `index.html:1224-1229` (nav), `index.html:1235-1271` (hero)
- Test: `tests/landing.test.mjs:16-29`, `tests/landing.test.mjs:70-87`

**Interfaces:**
- Consumes: nada.
- Produces: el ancla `#servicios` queda referenciada en el nav pero la sección recién existe en la Task 3. Entre medio el link apunta a un ancla inexistente; es intencional y se resuelve en la Task 3.

- [ ] **Step 1: Actualizar las aserciones del hero**

En `tests/landing.test.mjs`, dentro de `test('renders the current landing sections')`, reemplazar los dos primeros elementos de `requiredSnippets`:

```js
  const requiredSnippets = [
    'Digitalización de procesos con Microsoft',
    'Tu empresa ya tiene Microsoft. Nosotros lo convertimos en tu sistema de trabajo.',
    'El fin de semana, ordenado para arrancar el lunes',
    'Un proceso simple, de principio a fin',
    'Un equipo especializado en datos y automatización',
    'Contanos sobre tu negocio',
  ];
```

Los otros cuatro snippets siguen apuntando al copy viejo a propósito: esas secciones todavía no se tocaron y deben seguir pasando.

En el mismo archivo, en `test('guides Instagram visitors from the hero and example to contact')`, reemplazar las tres primeras aserciones (dejar intacta la cuarta, la de `conversion-cta`):

```js
  assert.match(
    html,
    /Tu empresa ya tiene Microsoft\. Nosotros lo convertimos en tu sistema de trabajo\./i,
  );
  assert.match(
    html,
    /Relevamos los procesos que hoy funcionan a fuerza de planillas y mails, y los pasamos a Power Apps, Power Automate y Power BI\./i,
  );
  assert.match(
    html,
    /<a[^>]+href="#contacto"[^>]*>\s*Contanos tu proceso\s*<\/a>/i,
  );
```

- [ ] **Step 2: Correr los tests y verificar que fallan**

Run: `node --test tests/landing.test.mjs`
Expected: FAIL. Dos tests rojos (`renders the current landing sections` y `guides Instagram visitors...`), con mensajes del tipo `The input did not match the regular expression`.

- [ ] **Step 3: Reemplazar title y description**

En `index.html`, líneas 7 a 11:

```html
    <title>MendoData | Digitalización de procesos con Microsoft para empresas</title>
    <meta
      name="description"
      content="Digitalizamos los procesos de tu empresa con Power Apps, Power Automate y Power BI. Menos planillas y mails, procesos que se resuelven solos e información siempre al día."
    >
```

- [ ] **Step 4: Agregar el link de Servicios al nav**

En `index.html`, reemplazar el bloque `<div class="nav-actions">`:

```html
        <div class="nav-actions">
          <a class="nav-link" href="#servicios">Qué hacemos</a>
          <a class="nav-link" href="#ejemplo">El ejemplo</a>
          <a class="nav-link" href="#proceso">Proceso</a>
          <a class="nav-link" href="#nosotros">Nosotros</a>
          <a class="button accent" href="#contacto">Contáctanos</a>
        </div>
```

- [ ] **Step 5: Reescribir el hero**

En `index.html`, reemplazar el contenido de `<div class="hero-grid">` (la columna de texto y el `<aside class="help-card">`), conservando la estructura de tags tal cual:

```html
          <div>
            <p class="eyebrow greet">Digitalización de procesos con Microsoft</p>
            <ul class="hooks" aria-label="Objetivos con los que podés identificarte">
              <li>Menos planillas y mails sueltos</li>
              <li>Procesos que no dependen de una persona</li>
              <li>Información al día sin cargarla a mano</li>
            </ul>
            <h1 id="hero-title">Tu empresa ya tiene Microsoft. Nosotros lo convertimos en tu sistema de trabajo.</h1>
            <p class="hero-lead">Relevamos los procesos que hoy funcionan a fuerza de planillas y mails, y los pasamos a Power Apps, Power Automate y Power BI.</p>
            <div class="hero-actions">
              <a class="button accent" href="#contacto">Contanos tu proceso</a>
              <a class="button ghost" href="#ejemplo">Ver un ejemplo</a>
            </div>
          </div>

          <aside class="help-card" aria-label="Así te ayudamos">
            <p class="help-kicker">Así te ayudamos</p>
            <ul class="help-list">
              <li>
                <strong>Menos trabajo manual</strong>
                <span>El equipo deja de copiar datos entre planillas, mails y formularios en papel.</span>
              </li>
              <li>
                <strong>Procesos que no se frenan</strong>
                <span>Cada solicitud sigue su curso aunque la persona que aprueba esté de viaje.</span>
              </li>
              <li>
                <strong>Todo queda registrado</strong>
                <span>Quién pidió qué, quién aprobó y cuándo. Sin buscar en la casilla de mail.</span>
              </li>
            </ul>
            <p class="help-foot">Y los datos para decidir salen del proceso, no de armarlos a mano.</p>
          </aside>
```

Notar que `Asi te ayudamos` pasa a `Así te ayudamos`, con tilde, tanto en el
texto visible como en el `aria-label`. Es un typo que quedó suelto y se corrige
acá. Corregir también el comentario del CSS en `index.html:467`, que dice
`/* "Asi te ayudamos" card */`, para que siga coincidiendo con el markup.

- [ ] **Step 6: Correr los tests y verificar que pasan**

Run: `node --test tests/landing.test.mjs`
Expected: PASS, todos los tests en verde.

- [ ] **Step 7: Commit**

```bash
git add index.html tests/landing.test.mjs
git commit -m "Reposition hero, nav and meta around Microsoft"
```

---

### Task 2: Sección El ejemplo (antes / después)

**Files:**
- Modify: `index.html:1273-1348` (sección completa `#ejemplo`)
- Test: `tests/landing.test.mjs:16-29` (tercer snippet) y aserciones nuevas

**Interfaces:**
- Consumes: nada de la Task 1.
- Produces: nada que otras tasks usen.

**Nota de layout:** hoy `<div class="wrap example-grid">` es un solo elemento que combina el contenedor y la grilla de dos columnas. Para poder colgar el bloque "Cómo queda" a ancho completo debajo, se separan en dos elementos anidados: `<div class="wrap">` por fuera y `<div class="example-grid">` adentro. `.example-grid` no define ancho propio, así que hereda el del `.wrap` y el resultado visual de la grilla no cambia.

- [ ] **Step 1: Escribir las aserciones de la sección nueva**

En `tests/landing.test.mjs`, en `requiredSnippets`, reemplazar `'El fin de semana, ordenado para arrancar el lunes'` por:

```js
    'Aprobaciones internas: de la cadena de mails a un flujo que se resuelve solo',
```

Y agregar este test nuevo inmediatamente después de `test('renders the current landing sections')`:

```js
test('contrasts the manual approval process against the digitized one', () => {
  const example = html.match(
    /<section[^>]+id="ejemplo"[\s\S]*?<\/section>/i,
  )?.[0];
  assert.ok(example, 'la sección #ejemplo debe existir');

  const beforeSteps = [
    'La solicitud arranca en un mail',
    'La aprobación depende de encontrar a la persona',
    'El registro se arma después',
  ];
  const afterSteps = [
    'Se pide desde una app',
    'La aprobación llega sola',
    'El tablero se actualiza solo',
  ];

  for (const step of [...beforeSteps, ...afterSteps]) {
    assert.match(example, new RegExp(step, 'i'));
  }

  assert.match(example, /Cómo funciona hoy/i);
  assert.match(example, /Cómo queda/i);
  assert.match(example, /aria-label="Ejemplo de solicitudes de aprobación"/i);
  assert.match(example, /Compra de insumos/i);
  assert.doesNotMatch(example, /resumen del fin de semana/i);
  assert.doesNotMatch(example, /caja floja/i);
});
```

- [ ] **Step 2: Correr los tests y verificar que fallan**

Run: `node --test tests/landing.test.mjs`
Expected: FAIL. `contrasts the manual approval process against the digitized one` falla en la primera aserción de `beforeSteps`, y `renders the current landing sections` falla por el snippet nuevo.

- [ ] **Step 3: Reemplazar la sección completa**

En `index.html`, reemplazar todo el bloque `<section class="section example" id="ejemplo" ...>...</section>` por:

```html
      <!-- EJEMPLO CONCRETO: un proceso antes y despues -->
      <section class="section example" id="ejemplo" aria-labelledby="example-title">
        <div class="wrap">
          <div class="example-grid">
            <div class="reveal">
              <p class="kicker">Un caso concreto</p>
              <h2 id="example-title">Aprobaciones internas: de la cadena de mails a un flujo que se resuelve solo</h2>
              <p class="lead">
                Gastos, vacaciones, permisos, compras. Todos los meses la misma
                escena: alguien pregunta por dónde va la solicitud y nadie sabe.
              </p>
              <p class="kicker">Cómo funciona hoy</p>
              <div class="timeline">
                <article class="timeline-item">
                  <h3>La solicitud arranca en un mail</h3>
                  <p>O en un WhatsApp, o en un formulario impreso. Cada uno lo pide como puede.</p>
                </article>
                <article class="timeline-item">
                  <h3>La aprobación depende de encontrar a la persona</h3>
                  <p>Si quien firma está de viaje, la solicitud queda frenada sin que nadie se entere.</p>
                </article>
                <article class="timeline-item">
                  <h3>El registro se arma después</h3>
                  <p>Alguien carga todo a una planilla a fin de mes, cuando ya nadie recuerda los detalles.</p>
                </article>
              </div>
            </div>

            <div class="phone phone-modern reveal" aria-label="Ejemplo de solicitudes de aprobación">
              <div class="phone-notch" aria-hidden="true"></div>
              <div class="phone-screen">
                <div class="phone-status" aria-hidden="true">
                  <span>8:41</span>
                  <svg width="52" height="14" viewBox="0 0 52 14" fill="currentColor">
                    <rect x="0" y="8" width="3" height="6" rx="1"></rect>
                    <rect x="5" y="5" width="3" height="9" rx="1"></rect>
                    <rect x="10" y="2" width="3" height="12" rx="1"></rect>
                    <rect x="15" y="0" width="3" height="14" rx="1" opacity="0.35"></rect>
                    <path d="M27 4c3 0 5.5 1.2 7 3-1.5 1.8-4 3-7 3s-5.5-1.2-7-3c1.5-1.8 4-3 7-3z" opacity="0"></path>
                    <path d="M22.5 3.3a7 7 0 0 1 9 0l-1.3 1.5a5 5 0 0 0-6.4 0zM24.6 5.6a4 4 0 0 1 4.8 0L27 8z"></path>
                    <rect x="36" y="2" width="13" height="9" rx="2.5" fill="none" stroke="currentColor" stroke-width="1.4"></rect>
                    <rect x="37.5" y="3.6" width="8.5" height="5.8" rx="1" ></rect>
                    <rect x="50" y="4.5" width="1.6" height="4" rx="0.8"></rect>
                  </svg>
                </div>
                <div class="chat-header">
                  <span class="chat-avatar" aria-hidden="true">M</span>
                  <div class="chat-title">
                    <strong>Solicitudes</strong>
                    <span class="chat-sub"><i class="online-dot"></i>pendientes de tu aprobación</span>
                  </div>
                </div>
                <div class="chat-body">
                  <div class="bubble">
                    <span class="bubble-day">Nuevo</span>
                    Compra de insumos · $180.000. Aprobar o rechazar.
                    <span class="bubble-time">09:12</span>
                  </div>
                  <div class="bubble ok">
                    <span class="bubble-day">Aprobado</span>
                    Vacaciones · Laura Giménez, 12 al 23 de agosto.
                    <span class="bubble-time">11:40</span>
                  </div>
                  <div class="bubble">
                    <span class="bubble-day">Demorado</span>
                    Anticipo a proveedor · $95.000. Recordatorio enviado.
                    <span class="bubble-time">16:05</span>
                  </div>
                  <div class="bubble summary">
                    <span class="bubble-day">Este mes</span>
                    34 solicitudes, 31 resueltas en menos de 24 horas.
                  </div>
                </div>
                <div class="phone-home" aria-hidden="true"></div>
              </div>
            </div>
          </div>

          <div class="reveal">
            <p class="kicker">Cómo queda</p>
            <div class="process-grid">
              <article class="timeline-item">
                <h3>Se pide desde una app</h3>
                <p>Un formulario único en Power Apps, desde la computadora o el celular. Siempre los mismos datos.</p>
              </article>
              <article class="timeline-item">
                <h3>La aprobación llega sola</h3>
                <p>Power Automate la deriva a quien corresponde según el monto y avisa por Teams si se demora.</p>
              </article>
              <article class="timeline-item">
                <h3>El tablero se actualiza solo</h3>
                <p>En Power BI ves qué se aprobó, cuánto se gastó y dónde se traba el proceso.</p>
              </article>
            </div>
          </div>
        </div>
      </section>
```

Dos decisiones de reutilización, para que no sorprendan:

1. Las tarjetas de "Cómo queda" usan `.timeline-item`, no `.process-step`. `.process-step` tiene `background: var(--surface)`, que es exactamente el fondo de la sección `.example`; quedarían blancas sobre blanco. `.timeline-item` usa `var(--bg)` y contrasta.
2. El contenedor de esas tarjetas sí es `.process-grid`, que aporta las tres columnas, el `margin-top` y el colapso a una columna en móvil.

- [ ] **Step 4: Correr los tests y verificar que pasan**

Run: `node --test tests/landing.test.mjs`
Expected: PASS, todos en verde.

- [ ] **Step 5: Mirar la sección en el navegador**

Levantar el sitio (`python3 -m http.server 8765` desde la raíz) y abrir `http://localhost:8765/#ejemplo` en un ancho de escritorio.

Verificar: la grilla de dos columnas se ve igual que antes (texto a la izquierda, celular a la derecha) y el bloque "Cómo queda" aparece abajo a ancho completo en tres columnas.

El punto a juzgar: entre el rótulo "Cómo queda" y las tarjetas hay ~40px de separación, que vienen del `margin-top` de `.process-grid`. Si el rótulo queda visualmente desprendido de sus tarjetas, mover el `<p class="kicker">Cómo queda</p>` a después de la etiqueta de apertura de `.process-grid` no sirve (rompe la grilla): en ese caso agregar al `<style>`, junto al resto de las reglas de `.example`, la única regla CSS nueva permitida en este plan:

```css
      .example .process-grid {
        margin-top: 16px;
      }
```

Si se ve bien, no agregar nada.

- [ ] **Step 6: Commit**

```bash
git add index.html tests/landing.test.mjs
git commit -m "Replace weekend summary example with approval workflow"
```

---

### Task 3: Sección Servicios

**Files:**
- Modify: `index.html` (insertar sección nueva entre `</section>` de `#ejemplo` y `<section class="conversion-cta">`)
- Test: `tests/landing.test.mjs:219-233` y un test nuevo

**Interfaces:**
- Consumes: el link `href="#servicios"` que la Task 1 dejó en el nav. Esta task crea el destino.
- Produces: la sección `#servicios`.

- [ ] **Step 1: Escribir las aserciones de Servicios**

En `tests/landing.test.mjs`, agregar este test después del test de la sección `#ejemplo`:

```js
test('names the Microsoft tools without claiming a partnership', () => {
  const services = html.match(
    /<section[^>]+id="servicios"[\s\S]*?<\/section>/i,
  )?.[0];
  assert.ok(services, 'la sección #servicios debe existir');

  assert.match(services, /Tres herramientas, un proceso que funciona solo/i);
  assert.match(services, /Power Apps · Aplicaciones internas a medida/i);
  assert.match(services, /Power Automate · Flujos y aprobaciones automáticas/i);
  assert.match(services, /Power BI · Tableros para decidir/i);
  assert.match(services, /SharePoint, Teams y Listas de Microsoft 365/i);

  assert.doesNotMatch(visibleText, /\bpartner\b/i);
  assert.doesNotMatch(visibleText, /socio de microsoft/i);
  assert.doesNotMatch(visibleText, /sin pagar licencias/i);
});
```

En `test('includes baseline accessibility and usability hooks')`, agregar el ancla nueva junto a las que ya se verifican:

```js
  assert.match(html, /href="#servicios"/i);
```

- [ ] **Step 2: Correr los tests y verificar que fallan**

Run: `node --test tests/landing.test.mjs`
Expected: FAIL. `names the Microsoft tools without claiming a partnership` falla en `assert.ok(services, ...)` con el mensaje `la sección #servicios debe existir`.

- [ ] **Step 3: Insertar la sección**

En `index.html`, entre el `</section>` que cierra `#ejemplo` y la línea `<section class="conversion-cta" ...>`, insertar:

```html
      <!-- SERVICIOS: las tres herramientas -->
      <section class="section" id="servicios" aria-labelledby="services-title">
        <div class="wrap">
          <div class="reveal process-head">
            <p class="kicker">Qué hacemos</p>
            <h2 id="services-title">Tres herramientas, un proceso que funciona solo</h2>
            <p class="lead">
              No vendemos licencias ni un producto cerrado. Construimos sobre la
              plataforma que tu empresa ya tiene.
            </p>
          </div>

          <div class="process-grid reveal">
            <article class="process-step">
              <h3>Power Apps · Aplicaciones internas a medida</h3>
              <p>
                Reemplazamos las planillas compartidas y los formularios en papel
                por una app simple, con los datos validados desde el momento de la
                carga.
              </p>
            </article>

            <article class="process-step">
              <h3>Power Automate · Flujos y aprobaciones automáticas</h3>
              <p>
                Cada solicitud sigue su recorrido sola: notifica, escala cuando se
                demora y deja registro de cada paso.
              </p>
            </article>

            <article class="process-step">
              <h3>Power BI · Tableros para decidir</h3>
              <p>
                Los datos del proceso se convierten en indicadores actualizados, sin
                que nadie arme el informe a mano.
              </p>
            </article>
          </div>

          <p class="team-note reveal">
            También trabajamos con SharePoint, Teams y Listas de Microsoft 365,
            integraciones sobre Azure y automatizaciones con Dynamics 365 y Copilot.
          </p>
        </div>
      </section>
```

La sección usa `class="section"` sin modificador de fondo, así que queda sobre el fondo base de la página. Eso la separa de `#ejemplo` (que tiene fondo `--surface`) y hace que las tarjetas `.process-step`, que son `--surface`, contrasten. Las tarjetas no llevan `.process-num`: acá no hay una secuencia numerada, son tres capacidades en paralelo.

- [ ] **Step 4: Correr los tests y verificar que pasan**

Run: `node --test tests/landing.test.mjs`
Expected: PASS, todos en verde.

- [ ] **Step 5: Commit**

```bash
git add index.html tests/landing.test.mjs
git commit -m "Add services section for Power Platform tools"
```

---

### Task 4: CTA de conversión y Proceso

**Files:**
- Modify: `index.html` (bloque `<section class="conversion-cta">` y sección `#proceso`)
- Test: `tests/landing.test.mjs:16-29` (cuarto snippet), `tests/landing.test.mjs:70-87` (última aserción)

**Interfaces:**
- Consumes: nada.
- Produces: nada.

- [ ] **Step 1: Actualizar las aserciones**

En `requiredSnippets`, reemplazar `'Un proceso simple, de principio a fin'` por:

```js
    'De la primera charla al proceso funcionando',
```

En `test('guides Instagram visitors from the hero and example to contact')`, reemplazar la última aserción (la del bloque `conversion-cta`):

```js
  assert.match(
    html,
    /<section[^>]+class="[^"]*conversion-cta[^"]*"[\s\S]*¿Qué proceso te está consumiendo más tiempo\?[\s\S]*Contanos cómo funciona hoy y te decimos si conviene digitalizarlo\.[\s\S]*<a[^>]+href="#contacto"[^>]*>\s*Contanos tu caso\s*<\/a>[\s\S]*<\/section>/i,
  );
```

- [ ] **Step 2: Correr los tests y verificar que fallan**

Run: `node --test tests/landing.test.mjs`
Expected: FAIL en `renders the current landing sections` y en `guides Instagram visitors...`.

- [ ] **Step 3: Reescribir el CTA de conversión**

En `index.html`, reemplazar el contenido de `<section class="conversion-cta" ...>`:

```html
      <section class="conversion-cta" aria-labelledby="conversion-title">
        <div class="wrap reveal">
          <div>
            <p class="kicker">Hablemos de tu empresa</p>
            <h2 id="conversion-title">¿Qué proceso te está consumiendo más tiempo?</h2>
            <p>Contanos cómo funciona hoy y te decimos si conviene digitalizarlo.</p>
          </div>
          <a class="button accent" href="#contacto">Contanos tu caso</a>
        </div>
      </section>
```

El texto del botón (`Contanos tu caso`) no cambia: hay otro test que verifica ese mismo texto en el CTA móvil y ambos deben seguir coincidiendo.

- [ ] **Step 4: Reescribir los tres pasos del proceso**

En `index.html`, reemplazar el contenido de `<div class="wrap">` dentro de la sección `#proceso`:

```html
          <div class="reveal process-head">
            <p class="kicker">Cómo trabajamos</p>
            <h2 id="process-title">De la primera charla al proceso funcionando</h2>
            <p class="lead">
              Empezamos por un proceso concreto, el que más duele. Cuando funciona,
              seguimos con el siguiente.
            </p>
          </div>

          <div class="process-grid reveal">
            <article class="process-step">
              <span class="process-num" aria-hidden="true">1</span>
              <h3>Relevamos el proceso</h3>
              <p>
                Nos sentamos con quienes lo ejecutan todos los días y mapeamos cómo
                funciona hoy, con sus excepciones y sus atajos. Primera reunión sin
                compromiso.
              </p>
            </article>

            <article class="process-step">
              <span class="process-num" aria-hidden="true">2</span>
              <h3>Lo construimos sobre Microsoft</h3>
              <p>
                Armamos la app, los flujos y el tablero sobre las herramientas que tu
                empresa ya tiene. Te mostramos avances mientras lo hacemos, no al
                final.
              </p>
            </article>

            <article class="process-step">
              <span class="process-num" aria-hidden="true">3</span>
              <h3>Implementamos y acompañamos</h3>
              <p>
                Capacitamos al equipo, ajustamos lo que aparece en el uso real y
                quedamos disponibles para lo que siga.
              </p>
            </article>
          </div>
```

Los `<span class="process-num">` se conservan: acá sí hay una secuencia numerada.

- [ ] **Step 5: Correr los tests y verificar que pasan**

Run: `node --test tests/landing.test.mjs`
Expected: PASS, todos en verde.

- [ ] **Step 6: Commit**

```bash
git add index.html tests/landing.test.mjs
git commit -m "Reframe process steps around Microsoft delivery"
```

---

### Task 5: Nosotros y Contacto

**Files:**
- Modify: `index.html` (sección `#nosotros`, incluidos los dos `.team-do` y el `.team-note`; sección `#contacto`)
- Test: `tests/landing.test.mjs:16-29` (snippets 5 y 6), `tests/landing.test.mjs:31-56` (perfiles del equipo)

**Interfaces:**
- Consumes: nada.
- Produces: nada.

- [ ] **Step 1: Actualizar las aserciones**

En `requiredSnippets`, reemplazar los dos últimos elementos, de modo que la lista completa quede así:

```js
  const requiredSnippets = [
    'Digitalización de procesos con Microsoft',
    'Tu empresa ya tiene Microsoft. Nosotros lo convertimos en tu sistema de trabajo.',
    'Aprobaciones internas: de la cadena de mails a un flujo que se resuelve solo',
    'De la primera charla al proceso funcionando',
    'Un equipo que entiende el proceso antes de escribir código',
    'Contanos qué proceso querés digitalizar',
  ];
```

En `test('presents the approved MendoData team profiles')`, reemplazar el tercer elemento de cada perfil dentro de `profilesByCard`, dejando nombres y roles intactos:

```js
  const profilesByCard = [
    [
      'Juan Diego Caballero',
      'Ingeniero en Sistemas',
      'Construye las apps, los flujos y las integraciones sobre Power Platform para que el proceso corra solo.',
    ],
    [
      'Gonzalo Manresa',
      'Analista de Negocios',
      'Releva cómo trabaja tu empresa hoy y define qué conviene digitalizar primero para que el cambio se note rápido.',
    ],
  ];
```

- [ ] **Step 2: Correr los tests y verificar que fallan**

Run: `node --test tests/landing.test.mjs`
Expected: FAIL en `renders the current landing sections` y en `presents the approved MendoData team profiles`.

- [ ] **Step 3: Reescribir el encabezado de Nosotros**

En `index.html`, reemplazar el bloque `<div class="reveal about-head">`:

```html
          <div class="reveal about-head">
            <p class="kicker">Quiénes somos</p>
            <h2 id="about-title">Un equipo que entiende el proceso antes de escribir código</h2>
            <p class="lead">
              Somos un equipo de Mendoza especializado en digitalización de procesos
              sobre el entorno Microsoft. Nos complementamos para que no tengas que
              traducir entre lo operativo y lo técnico: uno entiende cómo trabaja tu
              empresa, el otro lo construye.
            </p>
          </div>
```

- [ ] **Step 4: Reescribir los dos `.team-do` y el `.team-note`**

Reemplazar únicamente el `<p class="team-do">` de cada tarjeta. Las `<img>`, los nombres y los roles quedan exactamente como están: hay un test que verifica los `src`, los `alt` y los recortes.

Tarjeta de Juan Diego Caballero:

```html
              <p class="team-do">Construye las apps, los flujos y las integraciones sobre Power Platform para que el proceso corra solo.</p>
```

Tarjeta de Gonzalo Manresa:

```html
              <p class="team-do">Releva cómo trabaja tu empresa hoy y define qué conviene digitalizar primero para que el cambio se note rápido.</p>
```

Y el `.team-note` que cierra la sección, que hoy habla de comercios:

```html
          <p class="team-note reveal">
            Trabajamos con empresas que ya usan Microsoft 365 y quieren dejar atrás
            las planillas compartidas. Sabemos qué conviene digitalizar primero y qué
            puede esperar.
          </p>
```

- [ ] **Step 5: Reescribir los textos de Contacto**

En `index.html`, dentro de `<section class="section contact" id="contacto" ...>`, reemplazar los tres párrafos de encabezado:

```html
          <p class="kicker">Contacto</p>
          <h2 id="contact-title">Contanos qué proceso querés digitalizar</h2>
          <p class="lead">
            Escribinos y coordinamos una conversación para ver cómo funciona tu
            proceso hoy y qué conviene automatizar primero.
          </p>
          <p class="contact-note">
            Trabajamos con empresas que quieren más orden y control en su operación
            diaria.
          </p>
```

Y dentro del formulario, el campo `negocio` y el placeholder del `textarea`:

```html
            <div class="field">
              <label for="cf-negocio">Empresa y rubro <span class="field-opt">(opcional)</span></label>
              <input id="cf-negocio" name="negocio" type="text" placeholder="Empresa y rubro">
            </div>
```

```html
              <textarea id="cf-mensaje" name="mensaje" required placeholder="Contanos brevemente qué proceso te gustaría ordenar."></textarea>
```

El `name="negocio"` **no** cambia. Hay un test que verifica el orden exacto de los campos (`nombre, email, negocio, mensaje`) y FormSubmit usa esos nombres en el mail que llega.

- [ ] **Step 6: Correr los tests y verificar que pasan**

Run: `node --test tests/landing.test.mjs`
Expected: PASS, todos en verde.

- [ ] **Step 7: Commit**

```bash
git add index.html tests/landing.test.mjs
git commit -m "Reframe team and contact copy around process digitization"
```

---

### Task 6: Verificación final

**Files:**
- Modify: ninguno, salvo que aparezcan defectos.
- Test: la suite completa.

**Interfaces:**
- Consumes: el resultado de las Tasks 1 a 5.
- Produces: nada.

- [ ] **Step 1: Correr la suite completa**

Run: `node --test tests/landing.test.mjs`
Expected: PASS, todos los tests en verde. Copiar la salida al reporte; no afirmar que pasa sin haberla visto.

- [ ] **Step 2: Buscar restos del posicionamiento viejo**

Run:

```bash
grep -nEi 'fin de semana|comercio|local\b|resumen|caja floja|WhatsApp' index.html
```

Expected: los únicos resultados aceptables son la mención a WhatsApp en la tarjeta "La solicitud arranca en un mail" de la sección `#ejemplo`. Cualquier otra aparición de "comercio", "local" o "fin de semana" es copy viejo que quedó sin migrar; corregirlo y volver al Step 1.

- [ ] **Step 3: Verificar que no se colaron afirmaciones prohibidas**

Run:

```bash
grep -nEi 'partner|certificad|sin pagar|no vas a gastar|licencias nuevas|dashboard|portal' index.html
```

Expected: sin resultados en texto visible. Si aparece alguno, reescribir esa frase según las Global Constraints.

- [ ] **Step 4: Revisar la página en el navegador**

Levantar el sitio y recorrerlo entero:

```bash
python3 -m http.server 8765
```

Abrir `http://localhost:8765/` y verificar, en este orden:

1. **Escritorio (~1280px):** hero, ejemplo con el antes/después, Servicios, CTA, Proceso, Nosotros y Contacto se ven completos y sin solapamientos.
2. **Franja 641–940px:** este es el rango donde el nav muestra los 4 links. Verificar que "Qué hacemos · El ejemplo · Proceso · Nosotros" más el botón entren sin desbordarse ni pisar la marca. Si quedan apretados, quitar `<a class="nav-link" href="#proceso">Proceso</a>` del nav; la sección `#proceso` se mantiene y sigue siendo alcanzable por scroll.
3. **Móvil (~390px):** por debajo de 640px los `.nav-link` están ocultos por CSS y solo se ven la marca y el botón Contáctanos. Verificar que las grillas de `#servicios` y de "Cómo queda" colapsen a una columna.

- [ ] **Step 5: Commit de los ajustes, si hubo**

Si los steps 2 a 4 no requirieron cambios, no hay nada que commitear y la task termina acá. Si hubo ajustes:

```bash
git add index.html
git commit -m "Fix repositioning details found in review"
```

---

## Decisiones que este plan agrega al spec

Tres textos que el spec no cubría y que hay que cambiar igual, porque contradicen el posicionamiento nuevo:

1. El `.team-note` al cierre de Nosotros hablaba de "comercios y negocios" (Task 5, Step 4).
2. La bajada y la nota de la sección Contacto hablaban de "negocios que buscan más orden" (Task 5, Step 5).
3. El label del campo `negocio` pasa a "Empresa y rubro" en la etiqueta visible, conservando el `name` del campo (Task 5, Step 5).
