# Rediseño editorial — Design Spec

**Fecha:** 2026-07-27
**Rama:** `feature/reposicionamiento-microsoft` (o rama nueva desde ahí)

## Objetivo

Reemplazar la piel visual completa de la landing —todas las secciones, incluidas
Nosotros y Contacto— por un sistema editorial sobrio de alto contraste: fondo
papel, serif display, hairlines de 1px en lugar de tarjetas con sombra, un solo
acento azul tinta. El copy, el formulario, las fotos y el comportamiento JS no
cambian.

## Qué NO cambia

- El copy, palabra por palabra. Ningún texto visible se reescribe.
- Los `name` de los campos del formulario (`nombre`, `email`, `negocio`,
  `mensaje`), su orden, y la configuración de FormSubmit (`_subject`,
  `_template`, `_honey`, action a `mendodata@gmail.com`).
- Los `src`, `alt` y recortes (`object-position`) de las fotos del equipo.
- Los dos IntersectionObserver, la lógica `.reveal`/`.is-visible`, el CTA móvil
  (`.mobile-contact-cta`, texto "Contanos tu caso", `min-height: 50px`) y
  `prefers-reduced-motion`.
- La clase `.phone-modern` en el mockup del celular (hay test).
- El breakpoint de 820px que oculta los `.nav-link` (hay test).
- Los IDs de sección y las anclas del nav.
- `scroll-margin-top` en `#contacto`.

## Sistema de tokens

Reemplazo completo del bloque `:root`:

```css
:root {
  --bg: #FBFAF8;            /* papel cálido */
  --surface: #FFFFFF;       /* solo donde hace falta separar */
  --ink: #0E1116;           /* títulos y texto principal */
  --ink-soft: #39404A;      /* cuerpo */
  --ink-mute: #6B7280;      /* etiquetas, metadatos */
  --accent: #1B3FA8;        /* azul tinta */
  --accent-strong: #142F80; /* hover del acento */
  --accent-soft: rgba(27, 63, 168, 0.08);
  --ok: #2F7D5C;            /* verde apagado, solo estados "aprobado" */
  --ok-soft: rgba(47, 125, 92, 0.1);
  --line: #E2DFD9;          /* hairline */
  --radius: 4px;
  --max: 1120px;
  --font-display: "Instrument Serif", "Iowan Old Style", "Palatino Linotype", Georgia, serif;
  --font-body: "Inter", ui-sans-serif, system-ui, -apple-system, sans-serif;
}
```

Se eliminan: `--shadow` (y todo uso de `box-shadow` decorativo), `--green`,
`--green-strong`, `--green-soft`, `--blue`, `--blue-strong`, `--blue-soft`,
`--tint-blue`, `--tint-mint`. El foco de inputs puede usar un `box-shadow` de
anillo de foco (accesibilidad), pero ninguna superficie lleva sombra decorativa.

### Tipografía

- Google Fonts: `Instrument+Serif` (400, normal + italic) + `Inter`
  (400;500;600). Manrope se elimina del `<link>`.
- `h1`: serif 400, `clamp(44px, 6.4vw, 72px)`, `line-height: 1.02`,
  `letter-spacing: -0.02em`.
- `h2`: serif 400, `clamp(32px, 4.4vw, 48px)`, `line-height: 1.08`.
- `h3`: Inter 600, 17–18px.
- `kicker`/`eyebrow`: Inter 600, 11px, `text-transform: uppercase`,
  `letter-spacing: 0.14em`, color `--ink-mute`.
- Cuerpo: Inter 400, 16–17px, `line-height: 1.6`, color `--ink-soft`.
- Numerales de sección (`01`, `02`, `03`): serif, grandes (~40–56px), color
  `--line` o `--accent` según sección.

### Botones

Rectangulares (`--radius`), sin sombra:
- `.button.accent`: fondo `--accent`, texto blanco, hover `--accent-strong`.
- `.button.ghost`: transparente con borde 1px `--ink`, hover fondo `--ink` y
  texto papel.

## Layout, sección por sección

### Header
Fondo `--bg` (con blur opcional al scrollear no hace falta), borde inferior
`1px solid var(--line)`, sin sombra. La marca conserva el símbolo PNG; el
wordmark "MendoData" pasa a serif. Nav links en Inter, botón Contáctanos
rectangular.

### Hero
Una sola columna dominante:
- Eyebrow arriba.
- `h1` a ancho ~9/12 columnas, serif enorme.
- `hero-lead` debajo, máx ~56ch.
- Los 3 `hooks` pasan de lista con bullets a **fila horizontal con divisores
  verticales de 1px** (en móvil vuelven a apilarse con hairlines horizontales).
- La `help-card` pierde fondo, sombra y radio: queda como bloque de lista con
  hairlines entre ítems. En escritorio queda a la derecha (grid 7/5, alineada
  arriba); en móvil debajo del hero. El aria-label y el contenido no cambian.
- Separador `1px solid var(--line)` al cierre de la sección.

### Ejemplo (#ejemplo)
- Fondo `--bg` (ya no `--surface`); la sección se separa por hairlines, no por
  cambio de fondo.
- Grilla de 2 columnas se mantiene (texto izquierda, celular derecha).
- La `timeline` ("Cómo funciona hoy"): ítems separados por hairline, sin caja.
- El celular: conserva `.phone-modern` y toda su estructura interna; el marco
  pasa a borde 1px `--ink` con radio moderado, sin sombra ni glow. Burbujas
  planas: fondo `--surface` con borde `--line`; la de "Aprobado" usa `--ok-soft`
  y texto `--ok`; la summary usa `--accent-soft`.
- "Cómo queda": las 3 tarjetas `.timeline-item` dentro de `.process-grid` pasan
  a **filas/columnas numeradas** — numeral serif `01/02/03` + título + texto,
  con borde superior 1px, sin fondo de tarjeta.

### Servicios (#servicios)
Patrón de **filas horizontales a ancho completo** (el del mockup elegido):
cada herramienta es una fila con grid `numeral | título | descripción`,
separadas por hairlines. Numeral serif grande. Sin tarjetas. En móvil cada fila
colapsa a columna. El markup puede reestructurarse (los tests solo exigen los
textos dentro de `#servicios`).

### CTA de conversión
El único momento oscuro de la página: bloque a sangre completa con fondo
`--ink` (#0E1116), título serif en blanco papel, botón con fondo papel y texto
oscuro (o acento). Texto y href no cambian.

### Proceso (#proceso)
3 columnas sin caja: borde superior `1px solid var(--ink)` (más fuerte que el
hairline), numeral serif, título Inter 600, texto. `.process-num` deja de ser
círculo con fondo; pasa a numeral tipográfico. En móvil colapsa a una columna.

### Nosotros (#nosotros)
- Encabezado igual jerarquía nueva (kicker + h2 serif + lead).
- Los dos `team-member` pierden la tarjeta: foto más grande (radio `--radius`),
  nombre en serif ~24px, rol en kicker-style, texto debajo. Dos columnas
  separadas por gap generoso, hairline superior en cada uno.
- `team-note` como nota al pie con hairline superior.

### Contacto (#contacto)
- Encabezado centrado o alineado a la izquierda con la misma jerarquía.
- Formulario: inputs **solo con borde inferior** `1px solid var(--line)`, fondo
  transparente, sin caja; foco con borde inferior `--accent` + anillo sutil.
- `nombre` y `email` en 2 columnas en escritorio (grid en `.contact-form`),
  resto a ancho completo. En móvil todo apilado.
- Botón submit rectangular acento. `form-hint` en `--ink-mute`.
- Fondo de la sección: `--surface` o `--bg` con hairline superior; sin tarjeta
  contenedora con sombra.

### Footer
Hairline superior, marca chica en serif, link "Volver arriba" en Inter mute.

## Tests

Se reescriben 4 tests en `tests/landing.test.mjs`:

1. **`uses the approved blue trust palette`** → pasa a verificar la paleta
   nueva: `#1B3FA8`, `#0E1116`, `#6B7280`, `#2F7D5C`, `#FBFAF8`, `#E2DFD9`.
2. **`drops the retired lime, orange and terracotta palettes`** → se agregan a
   la lista de retirados los tokens viejos: `#2563EB`, `#1B4DB1`, `#1FA971`,
   `#16855A`, `#12212E`, `#F5F8FC`, `#E9F1FC`, `#E9F6EF`.
3. **`uses Manrope for display typography...`** → pasa a verificar Instrument
   Serif como `--font-display`, Inter como `--font-body`, el `<link>` de Google
   Fonts nuevo, y que Manrope ya no aparece. Los checks de `font-weight` por
   selector se reemplazan por los pesos del sistema nuevo (h1/h2 en 400 serif,
   h3 600). El `doesNotMatch` de Fraunces se elimina (o se ajusta para no
   prohibir la fuente elegida).
4. **`positions the hero content closer to the header`** → se actualiza al
   padding real del hero nuevo, o se reemplaza por una aserción equivalente
   sobre el espaciado del hero.

Se mantienen intactos los 14 restantes: secciones/copy, ejemplo antes/después,
servicios sin partnership, perfiles del equipo, fotos, guía de Instagram, CTA
móvil progresivo, reveal sin JS, secciones eliminadas, claims prohibidos,
accesibilidad (`.phone-modern`, anclas, `scroll-margin-top`, `min-height: 50px`),
nav a 820px, FormSubmit.

Comando: `node --test tests/landing.test.mjs` — verde al final de cada task.

## Restricciones heredadas (siguen vigentes)

- Prohibido "partner", "socio de Microsoft", "certificados", logos de Microsoft.
- Prohibido en texto visible: `portal`, `dashboard`, `inteligencia artificial`.
- Español rioplatense con voseo. No reescribir copy.
