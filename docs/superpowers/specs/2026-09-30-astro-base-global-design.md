# Base global: migración a Astro y componentes compartidos

Fecha: 2026-09-30

## Problema

El sitio es un único `index.html` estático (CSS y JS inline, sin build). El
Blueprint Maestro define tres páginas públicas (`/`, `/proyectos`, `/legal`)
que comparten un único Header, Footer, botón flotante de WhatsApp y una
configuración central de navegación, WhatsApp, redes y SEO. Con HTML suelto
eso obliga a duplicar markup en cada página.

Además `render.yaml` reescribe cualquier ruta a `index.html`, así que hoy
`/proyectos`, `/legal` y `/contacto` muestran la Home y no existe 404.

Este spec cubre solo la **base global**. El rediseño de cada sección de la
Home, `/proyectos` y `/legal` se trabaja después, una sección por vez, según
`CLAUDE.md`.

## Fuentes

- `CLAUDE.md` (raíz del repo).
- `docs/MendoData-Blueprint-Maestro.md`: secciones 02 (estructura), 03 /
  Sección 9 (Footer), 04 / Sección 1 (Hero de Proyectos), 05 / §4
  (encabezado de Legal) y 06 (componentes globales).
- `docs/mockups/` como referencia visual.

## Decisiones tomadas

| Tema | Decisión |
|---|---|
| Generador | Astro, salida estática (`output: 'static'`), sin JS de framework en el cliente |
| Contenido de la Home | Se migra tal cual. Único cambio: IDs `#servicios`→`#soluciones`, `#proceso`→`#como-trabajamos`, `#nosotros`→`#equipo` |
| CTA fijo inferior mobile | Se elimina (`.mobile-contact-cta` y su script). No está en el blueprint y compite con WhatsApp |
| WhatsApp | Número `5492615974103`, sin mensaje inicial |
| Redes | TikTok `https://www.tiktok.com/@mendo.data`, Instagram `https://www.instagram.com/mendo.data/`. LinkedIn sin URL → no se muestra |
| Estilo visual | Se conserva el actual (tokens, tipografías). El Header/Footer nuevos usan esos tokens |
| Formulario | Se migra sin cambios (FormSubmit). Estados, UTM y analítica quedan para la Sección 8 |
| Rama | `feature/astro-base`. No se mergea a `main` hasta que `/proyectos` y `/legal` tengan contenido real, porque Render publica `main` |

## Estructura

```
CLAUDE.md
docs/MendoData-Blueprint-Maestro.md
docs/mockups/*.png
astro.config.mjs            site: https://mendodata.online, integración sitemap
package.json                scripts: dev, build, preview, test
public/                     favicons, robots.txt, assets/ (imágenes actuales, mismas rutas /assets/...)
src/
  config/site.ts            única fuente: nav, WhatsApp, redes, legal, SEO por página
  styles/global.css         tokens :root + estilos globales extraídos de index.html
  layouts/BaseLayout.astro  <head> (title, description, canonical, OG), skip-link,
                            Header, <main>, Footer, WhatsAppButton
  components/
    Header.astro
    Footer.astro
    WhatsAppButton.astro
  pages/
    index.astro             Home actual
    proyectos.astro         esqueleto
    legal.astro             esqueleto
    404.astro
tests/                      node:test sobre dist/
render.yaml
```

Se elimina `index.html` de la raíz y la carpeta `assets/` pasa a `public/assets/`.
Las imágenes se sirven sin procesar; su optimización queda para las secciones.
La minificación de CSS se desactiva para que los tests de estilos sigan leyendo
el CSS tal como está escrito.

## `src/config/site.ts`

Exporta:

- `site`: nombre, URL base, descripción de marca ("Sistemas, automatización y
  datos para ordenar y mejorar procesos operativos.").
- `nav`: Soluciones `/#soluciones`, Proyectos `/proyectos`, Cómo trabajamos
  `/#como-trabajamos`, Equipo `/#equipo`. Siempre rutas completas.
- `contactHref = '/#contacto'`, `headerCta = 'Contanos tu caso'`.
- `footerNav`: Inicio `/` + los cuatro de `nav`.
- `legalLinks`: Privacidad `/legal#privacidad`, Cookies `/legal#cookies`.
- `whatsapp = { number: '5492615974103', message: '' }` y
  `whatsappUrl()`: devuelve `https://wa.me/<number>` (con `?text=` solo si hay
  mensaje) o `null` si no hay número.
- `socials`: lista `{ name, url, icon }`; se filtran las que no tienen URL.
- `seo`: title y description exactos del blueprint para `/`, `/proyectos`,
  `/legal`.

Ningún otro archivo de `src/` contiene el número de WhatsApp ni URLs de redes.

## Header

- Sticky (como hoy). Todas las secciones con id reciben `scroll-margin-top`
  igual a la altura del Header.
- Desktop: logo (→ `/`, `aria-label="MendoData, inicio"`), nav, CTA
  "Contanos tu caso" → `/#contacto`.
- Mobile (≤ 940px, breakpoint existente): logo + botón de menú
  (`aria-expanded`, `aria-controls`). Panel con los cuatro enlaces, "Contacto"
  y el CTA destacado. Se cierra con botón visible, con Escape y al elegir un
  enlace; el foco vuelve al botón; se bloquea el scroll del body mientras está
  abierto. Sin JS el panel no se oculta de forma inaccesible (el menú funciona
  como lista visible).
- Estado activo: `aria-current="page"` en "Proyectos" dentro de `/proyectos`.
  Sin detección de sección activa en la Home.
- No incluye Legal ni WhatsApp.

## Footer

Según la Sección 9 del blueprint:

- Fondo navy, texto blanco, secundarios en gris claro, contenedor alineado al
  ancho global.
- Columna Marca: logo, texto exacto de marca, íconos de redes con nombre
  accesible (`aria-label="MendoData en Instagram"`), `target="_blank"`,
  `rel="noopener"`.
- Columna "Explorá": Inicio, Soluciones, Proyectos, Cómo trabajamos, Equipo.
- Columna "Contacto": "Formulario de contacto" → `/#contacto`; "Escribinos por
  WhatsApp" → `whatsappUrl()` (se omite si es `null`).
- Franja inferior con línea fina: "© {año} MendoData. Todos los derechos
  reservados." y Privacidad · Cookies. El año se genera en el build y un
  script inline lo actualiza en el cliente.
- Sin "Configurar cookies", sin "Términos", sin email, teléfono ni dirección.
- Responsive: 3 columnas en desktop; en tablet Marca a fila completa y
  Explorá/Contacto en dos columnas; en mobile apilado en el orden del blueprint.
- Padding inferior suficiente para que el botón de WhatsApp no tape enlaces.

## WhatsApp flotante

- Fijo abajo a la derecha, con `env(safe-area-inset-*)`.
- Solo ícono, 56 × 56 px, sombra discreta, contraste suficiente.
- `aria-label="Contactar a MendoData por WhatsApp"`, focus visible,
  `target="_blank"`, `rel="noopener"`.
- No se renderiza si `whatsappUrl()` es `null`.
- Presente en `/`, `/proyectos`, `/legal` y 404 vía `BaseLayout`.

## Páginas

- `/`: la Home actual, con los tres IDs renombrados, sin el Header/Footer
  inline y sin `.mobile-contact-cta`. Title y description del blueprint.
- `/proyectos`: rótulo "PROYECTOS", H1 "Soluciones construidas alrededor de
  problemas reales.", descripción "Mostramos cómo convertimos necesidades
  operativas en sistemas, automatizaciones y soluciones de datos adaptadas a
  cada empresa." Sin más contenido.
- `/legal`: rótulo "LEGAL", H1 "Privacidad y cookies", descripción
  "Información sobre el tratamiento de datos y el uso de cookies en el sitio
  de MendoData.", y secciones vacías con `id="privacidad"` e `id="cookies"`
  con su H2. Sin texto legal.
- `404`: H1 "Página no encontrada", enlace a `/`. `noindex`.

## SEO

- Title y description exactos del blueprint por página; canonical y Open Graph
  (`og:title`, `og:description`, `og:url`, `og:type="website"`). Sin
  `og:image` hasta que exista una imagen oficial.
- `@astrojs/sitemap` con `/`, `/proyectos`, `/legal` (excluye 404).
- `public/robots.txt` sin restricciones, con la URL del sitemap.

## Deploy (`render.yaml`)

- `buildCommand: npm ci && npm run build`, `staticPublishPath: dist`.
- Se elimina el rewrite `/* → /index.html`.
- Redirect `/contacto` → `/#contacto`.
- Render sirve `dist/404.html` para rutas inexistentes.
- Se conserva el header `Cache-Control: no-cache`.

## Tests

`npm test` construye y corre `node:test` sobre `dist/`:

- Existen `index.html`, `proyectos/index.html`, `legal/index.html`, `404.html`.
- Cada página: exactamente un `<h1>`, title y description del blueprint,
  sin IDs duplicados.
- Header y Footer: enlaces con rutas completas; ningún `href="#"` ni
  `/contacto`; Footer con `/legal#privacidad` y `/legal#cookies`.
- `/legal` contiene `id="privacidad"` e `id="cookies"`.
- La Home contiene `id="soluciones"`, `id="como-trabajamos"`, `id="equipo"`,
  `id="contacto"` y no contiene `mobile-contact-cta`.
- WhatsApp: el botón y el Footer apuntan a `https://wa.me/5492615974103`; el
  número solo aparece en `src/config/site.ts` dentro de `src/`.
- Redes: Instagram y TikTok presentes; ningún enlace a LinkedIn.
- Ninguna página menciona "Fierro".
- Los tests de contenido existentes de la Home se adaptan para leer
  `dist/index.html` y se mantienen hasta que cada sección se rediseñe.

Verificación manual en navegador: desktop, tablet (≈ 820px) y mobile
(≈ 390px), menú mobile con teclado, ausencia de scroll horizontal, consola
limpia, anchors desde `/proyectos` y `/legal`.

## Fuera de alcance

- Cambios de copy, orden o diseño de las secciones de la Home.
- Contenido de `/proyectos` y `/legal`.
- Estados del formulario, UTM, analítica, cookies.
- Rediseño visual (fondo, tipografía) hacia el mockup.

## Pendientes de datos reales

- URL de LinkedIn.
- Foto y datos de Leandro Hirschegger (se usan en la Sección 7).
- Datos del responsable para `/legal`.
- Imagen oficial para Open Graph.
