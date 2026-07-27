# Reposicionamiento: digitalización de procesos con Microsoft

Fecha: 2026-07-27

## Problema

La landing posiciona a MendoData como servicio de análisis de datos y
automatización para comercios locales. El caso central es un resumen de fin de
semana que llega por WhatsApp al dueño de un local.

El negocio cambió: hoy MendoData ayuda a empresas a digitalizar sus procesos
sobre el entorno Microsoft. El discurso actual no le habla a ese cliente.

## Decisiones tomadas

| Tema | Decisión |
|---|---|
| Alcance del cambio | Microsoft primero; el análisis de datos queda como capacidad complementaria, no como propuesta principal |
| Stack destacado | Power Apps, Power Automate y Power BI |
| Stack secundario | Microsoft 365 (SharePoint, Teams, Listas), Azure, Dynamics 365 y Copilot: una línea al pie de Servicios, sin protagonismo |
| Público | PyME mediana en crecimiento, ya con Microsoft 365, procesos en Excel y papel. Interlocutor: dueño o gerente de administración |
| Caso de ejemplo | Aprobaciones internas (gastos, vacaciones, permisos), en formato antes/después |
| Relación con Microsoft | **No son partner.** Prohibido escribir "partner", "certificados" o "socio de Microsoft", y prohibido usar logos de Microsoft. Solo se nombran los productos como herramientas sobre las que se construye |
| Alcance visual | Solo contenido. Se conservan paleta, tipografía, layout, fotos del equipo y formulario |

### Restricción sobre licencias

No afirmar que el cliente no va a pagar licencias adicionales. Power Apps y
Power Automate con conectores premium requieren licencia extra. El hero dice
"tu empresa ya tiene Microsoft", nunca "no vas a gastar más".

## Posicionamiento

La PyME mediana ya paga Microsoft 365 y lo usa solo para mail y Excel. El gancho
no es "comprá un sistema", es **"ya tenés las herramientas, nosotros las
convertimos en tu sistema"**. Baja la barrera de entrada y diferencia la oferta
de un ERP.

El análisis de datos no desaparece: se reencuadra como el resultado del proceso
digitalizado. Los datos ordenados salen del proceso, no de cargarlos a mano.

## Estructura de la página

Todas las secciones existen hoy salvo Servicios. El orden en el DOM queda:

1. Header / nav
2. Hero (`#inicio`)
3. El ejemplo (`#ejemplo`)
4. **Servicios (`#servicios`) — nueva**
5. CTA de conversión (`.conversion-cta`)
6. Proceso (`#proceso`)
7. Nosotros (`#nosotros`)
8. Contacto (`#contacto`)

Servicios va después de El ejemplo: primero se muestra el problema resuelto,
después se nombran las herramientas.

### Nav

Se agrega `Qué hacemos` → `#servicios`. Queda: Qué hacemos · El ejemplo ·
Proceso · Nosotros + botón Contáctanos.

Riesgo acotado: por debajo de 640px la hoja de estilos ya oculta todos los
`.nav-link` y deja solo la marca y el botón, así que en móvil no cambia nada.
El único rango a verificar es 641–940px. Si ahí queda apretado, se saca
"Proceso" del nav; la sección permanece.

### Reutilización de CSS

No se agregan clases nuevas. Servicios reutiliza `.process-grid` /
`.process-step`. El bloque "Cómo queda" de El ejemplo reutiliza la misma
grilla. El mockup del celular conserva `.phone-modern`, `.bubble`,
`.bubble-day`, `.bubble-time`, `.bubble.ok` y `.bubble.summary`; solo cambia
el texto dentro.

### Layout de El ejemplo

`.example-grid` es una grilla de dos columnas. Se mantiene:

- Columna izquierda: kicker, H2, bajada y el `.timeline` con los tres puntos de
  "Cómo funciona hoy".
- Columna derecha: el celular, ahora con una solicitud de aprobación.
- Debajo de la grilla, a ancho completo: "Cómo queda" en tres tarjetas
  `.process-step`.

Poner los dos bloques de tres ítems en la columna izquierda desbalancearía la
sección contra el celular; por eso "Cómo queda" va abajo, a ancho completo.

## Textos aprobados

### Hero

- Eyebrow: `Digitalización de procesos con Microsoft`
- Ganchos: `Menos planillas y mails sueltos` · `Procesos que no dependen de una persona` · `Información al día sin cargarla a mano`
- H1: `Tu empresa ya tiene Microsoft. Nosotros lo convertimos en tu sistema de trabajo.`
- Bajada: `Relevamos los procesos que hoy funcionan a fuerza de planillas y mails, y los pasamos a Power Apps, Power Automate y Power BI.`
- Botones: `Contanos tu proceso` (→ `#contacto`) · `Ver un ejemplo` (→ `#ejemplo`)

Tarjeta "Así te ayudamos":

- **Menos trabajo manual** — El equipo deja de copiar datos entre planillas, mails y formularios en papel.
- **Procesos que no se frenan** — Cada solicitud sigue su curso aunque la persona que aprueba esté de viaje.
- **Todo queda registrado** — Quién pidió qué, quién aprobó y cuándo. Sin buscar en la casilla de mail.
- Pie: Y los datos para decidir salen del proceso, no de armarlos a mano.

### El ejemplo

- Kicker: `Un caso concreto`
- H2: `Aprobaciones internas: de la cadena de mails a un flujo que se resuelve solo`
- Bajada: `Gastos, vacaciones, permisos, compras. Todos los meses la misma escena: alguien pregunta por dónde va la solicitud y nadie sabe.`

**Cómo funciona hoy** (`.timeline`):

1. **La solicitud arranca en un mail** — O en un WhatsApp, o en un formulario impreso. Cada uno lo pide como puede.
2. **La aprobación depende de encontrar a la persona** — Si quien firma está de viaje, la solicitud queda frenada sin que nadie se entere.
3. **El registro se arma después** — Alguien carga todo a una planilla a fin de mes, cuando ya nadie recuerda los detalles.

**Cómo queda** (`.process-grid`, sin numeración):

1. **Se pide desde una app** — Un formulario único en Power Apps, desde la computadora o el celular. Siempre los mismos datos.
2. **La aprobación llega sola** — Power Automate la deriva a quien corresponde según el monto y avisa por Teams si se demora.
3. **El tablero se actualiza solo** — En Power BI ves qué se aprobó, cuánto se gastó y dónde se traba el proceso.

**Celular** — encabezado `Solicitudes` / `pendientes de tu aprobación`.
Burbujas:

- `Nuevo` — Compra de insumos · $180.000 → Aprobar / Rechazar
- `Aprobado` — Vacaciones · Laura Giménez, 12 al 23 de agosto (usa `.bubble.ok`)
- `Demorado` — Anticipo a proveedor · $95.000, recordatorio enviado
- `Este mes` — 34 solicitudes, 31 resueltas en menos de 24 horas (usa `.bubble.summary`)

El `aria-label` del contenedor pasa a `Ejemplo de solicitudes de aprobación`.

### Servicios (nueva)

- Kicker: `Qué hacemos`
- H2: `Tres herramientas, un proceso que funciona solo`
- Bajada: `No vendemos licencias ni un producto cerrado. Construimos sobre la plataforma que tu empresa ya tiene.`

Tarjetas:

- **Power Apps · Aplicaciones internas a medida** — Reemplazamos las planillas compartidas y los formularios en papel por una app simple, con los datos validados desde el momento de la carga.
- **Power Automate · Flujos y aprobaciones automáticas** — Cada solicitud sigue su recorrido sola: notifica, escala cuando se demora y deja registro de cada paso.
- **Power BI · Tableros para decidir** — Los datos del proceso se convierten en indicadores actualizados, sin que nadie arme el informe a mano.

Pie: `También trabajamos con SharePoint, Teams y Listas de Microsoft 365, integraciones sobre Azure y automatizaciones con Dynamics 365 y Copilot.`

### CTA de conversión

- Kicker: `Hablemos de tu empresa`
- H2: `¿Qué proceso te está consumiendo más tiempo?`
- Párrafo: `Contanos cómo funciona hoy y te decimos si conviene digitalizarlo.`
- Botón: `Contanos tu caso` (texto sin cambios)

### Proceso

- Kicker: `Cómo trabajamos` (sin cambios)
- H2: `De la primera charla al proceso funcionando`
- Bajada: `Empezamos por un proceso concreto, el que más duele. Cuando funciona, seguimos con el siguiente.`

1. **Relevamos el proceso** — Nos sentamos con quienes lo ejecutan todos los días y mapeamos cómo funciona hoy, con sus excepciones y sus atajos. Primera reunión sin compromiso.
2. **Lo construimos sobre Microsoft** — Armamos la app, los flujos y el tablero sobre las herramientas que tu empresa ya tiene. Te mostramos avances mientras lo hacemos, no al final.
3. **Implementamos y acompañamos** — Capacitamos al equipo, ajustamos lo que aparece en el uso real y quedamos disponibles para lo que siga.

### Nosotros

- Kicker: `Quiénes somos` (sin cambios)
- H2: `Un equipo que entiende el proceso antes de escribir código`
- Bajada: `Somos un equipo de Mendoza especializado en digitalización de procesos sobre el entorno Microsoft. Nos complementamos para que no tengas que traducir entre lo operativo y lo técnico: uno entiende cómo trabaja tu empresa, el otro lo construye.`

Fotos, nombres y roles no cambian. Cambia solo el `.team-do` de cada uno:

- Juan Diego Caballero — `Construye las apps, los flujos y las integraciones sobre Power Platform para que el proceso corra solo.`
- Gonzalo Manresa — `Releva cómo trabaja tu empresa hoy y define qué conviene digitalizar primero para que el cambio se note rápido.`

### Contacto

- H2: `Contanos qué proceso querés digitalizar`
- Campo `negocio`: label y placeholder pasan a `Empresa y rubro`
- Placeholder de `mensaje`: `Contanos brevemente qué proceso te gustaría ordenar.`

El resto del formulario no se toca: action de FormSubmit, campos ocultos,
honeypot, orden de campos `nombre, email, negocio, mensaje`.

### Meta

- `<title>`: `MendoData | Digitalización de procesos con Microsoft para empresas`
- `<meta name="description">`: `Digitalizamos los procesos de tu empresa con Power Apps, Power Automate y Power BI. Menos planillas y mails, procesos que se resuelven solos e información siempre al día.`

La página no tiene tags Open Graph hoy. Agregarlos queda fuera de alcance de
este cambio.

## Impacto en los tests

`tests/landing.test.mjs` verifica textos literales. Los siguientes tests fallan
con el cambio y deben actualizarse en el mismo commit:

| Test | Qué actualizar |
|---|---|
| `renders the current landing sections` | Los seis snippets son del copy viejo. Reemplazarlos por los títulos nuevos |
| `presents the approved MendoData team profiles` | Los dos textos de `.team-do` |
| `guides Instagram visitors from the hero and example to contact` | H1, bajada del hero, texto del botón (`Contanos qué necesitás` → `Contanos tu proceso`) y el bloque de `.conversion-cta` |
| `includes baseline accessibility and usability hooks` | Agregar `href="#servicios"` a los anchors verificados |

Tests que **no** deben romperse, y que actúan como red de seguridad del
alcance "solo contenido":

- Paleta azul y paletas retiradas
- Tipografía Manrope / Inter y los pesos por selector
- Formulario FormSubmit y orden de campos
- CTA móvil, IntersectionObserver y `.reveal`
- Fotos del equipo y sus recortes
- `padding` del hero

### Restricción de vocabulario

El test `keeps unsupported product claims out of visible copy` prohíbe las
palabras `portal`, `dashboard` e `inteligencia artificial` en el texto visible.
El copy aprobado usa "tablero" en lugar de "dashboard" y no menciona IA. Al
escribir el HTML hay que sostener esa restricción.

## Verificación

1. `node --test tests/` en verde.
2. Levantar la página y revisarla a ojo en escritorio y en ancho móvil,
   prestando atención al nav de 4 links y al balance de la sección El ejemplo.

## Fuera de alcance

- Cambios de paleta, tipografía o layout.
- Casos de cliente reales con nombre y números.
- Páginas nuevas o navegación multipágina.
- Logos o insignias de Microsoft.
