# Base global en Astro — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Migrar la landing de un `index.html` suelto a Astro con Header, Footer, WhatsApp y configuración compartidos, y crear las rutas `/proyectos`, `/legal` y 404.

**Architecture:** Astro con salida estática. Una única configuración (`src/config/site.ts`) alimenta un `BaseLayout` que monta Header, Footer y WhatsApp en todas las páginas. La Home actual se migra sin cambios de contenido; los tests `node:test` leen el HTML generado en `dist/`.

**Tech Stack:** Astro 7.3.x, @astrojs/sitemap 3.7.x, Node 22 (`node:test`), Render (sitio estático).

**Spec:** `docs/superpowers/specs/2026-09-30-astro-base-global-design.md`

## Global Constraints

- Rama de trabajo: `feature/astro-base`. No mergear a `main`.
- Número de WhatsApp: `5492615974103`. Mensaje inicial: vacío. Solo puede aparecer en `src/config/site.ts` dentro de `src/`.
- Redes: TikTok `https://www.tiktok.com/@mendo.data`, Instagram `https://www.instagram.com/mendo.data/`. LinkedIn: URL vacía, no se muestra.
- Enlaces globales con ruta completa: `/#soluciones`, `/proyectos`, `/#como-trabajamos`, `/#equipo`, `/#contacto`, `/legal#privacidad`, `/legal#cookies`. Nunca `href="#"` ni `/contacto`.
- CTA del Header: "Contanos tu caso".
- Texto de marca: "Sistemas, automatización y datos para ordenar y mejorar procesos operativos."
- SEO exacto:
  - `/` → "MendoData | Sistemas, automatización y datos" / "Desarrollamos sistemas, automatizaciones y soluciones de datos para ordenar procesos, reducir errores y mejorar el control operativo."
  - `/proyectos` → "Proyectos | MendoData" / "Conocé proyectos reales de MendoData y cómo convertimos necesidades operativas en sistemas, automatizaciones y soluciones de datos."
  - `/legal` → "Privacidad y cookies | MendoData" / "Información sobre privacidad, tratamiento de datos y cookies del sitio de MendoData."
- No cambiar copy de la Home. Únicos cambios en la Home: IDs `servicios→soluciones`, `proceso→como-trabajamos`, `nosotros→equipo`; quitar `.mobile-contact-cta`; rutas de imágenes a `/assets/...`.
- No inventar contenido. Un solo `<h1>` por página.
- Commits terminan con: `Co-Authored-By: Claude Opus 5.5 (1M context) <noreply@anthropic.com>`

---

## File map

| Archivo | Responsabilidad |
|---|---|
| `package.json`, `astro.config.mjs`, `.node-version`, `.gitignore` | Proyecto Astro, build, test |
| `CLAUDE.md`, `docs/MendoData-Blueprint-Maestro.md`, `docs/mockups/*` | Fuentes del proyecto |
| `src/config/site.ts` | Única fuente de nav, WhatsApp, redes, legal, SEO |
| `src/styles/global.css` | Tokens y estilos compartidos por todas las páginas |
| `src/styles/home.css` | Estilos de las secciones de la Home |
| `src/layouts/BaseLayout.astro` | `<head>`, skip-link, Header, `<main>`, Footer, WhatsApp, script de reveal |
| `src/components/Header.astro` | Header + menú mobile |
| `src/components/Footer.astro` | Footer global |
| `src/components/WhatsAppButton.astro` | Botón flotante |
| `src/components/SocialIcon.astro` | SVG de redes (Instagram, TikTok, LinkedIn) |
| `src/pages/index.astro`, `proyectos.astro`, `legal.astro`, `404.astro` | Páginas |
| `public/assets/*`, `public/robots.txt` | Imágenes y robots |
| `tests/helpers.mjs` | Lectura de `dist/` |
| `tests/site-config.test.mjs` | Unit tests de `site.ts` |
| `tests/site.test.mjs` | Tests de páginas y componentes globales |
| `tests/landing.test.mjs` | Tests existentes de la Home, adaptados a `dist/` |
| `render.yaml` | Deploy |

---

### Task 1: Proyecto Astro, documentos y configuración central

**Files:**
- Create: `package.json`, `astro.config.mjs`, `.node-version`, `src/config/site.ts`, `tests/site-config.test.mjs`
- Create (copias): `CLAUDE.md`, `docs/MendoData-Blueprint-Maestro.md`, `docs/mockups/*.png`
- Modify: `.gitignore`

**Interfaces:**
- Produces (`src/config/site.ts`):
  - `type NavLink = { label: string; href: string }`
  - `site: { name: string; url: string; tagline: string }`
  - `nav: NavLink[]`, `footerNav: NavLink[]`, `legalLinks: NavLink[]`
  - `contactHref: '/#contacto'`, `headerCta: string`
  - `whatsapp: { number: string; message: string }`
  - `whatsappUrl(config?: { number: string; message: string }): string | null`
  - `type SocialName = 'LinkedIn' | 'Instagram' | 'TikTok'`, `type Social = { name: SocialName; url: string }`
  - `socials: Social[]` (solo las que tienen URL)
  - `type PageSeo = { title: string; description: string; path: string }`
  - `seo: { home: PageSeo; proyectos: PageSeo; legal: PageSeo }`

- [ ] **Step 1: Copiar documentos al repo**

```bash
cd "/Users/gonzalomanresa/Desktop/landing mendodata 2026"
mkdir -p docs/mockups
cp ~/Downloads/CLAUDE.md ./CLAUDE.md
cp ~/Downloads/MendoData-Blueprint-Maestro.md docs/
for name in home-01-hero home-02-problemas home-03-soluciones home-04-proyecto-destacado \
  home-05-operaciones-logistica home-06-como-trabajamos home-07-equipo home-08-contacto proyectos; do
  cp "$HOME/Downloads/$name-desktop.png.png" "docs/mockups/$name-desktop.png"
done
cp "$HOME/Downloads/Mockup completo PC.png" docs/mockups/mockup-completo-desktop.png
ls docs/mockups
```

Expected: 10 PNG en `docs/mockups/` (`home-01-hero-desktop.png` … `home-08-contacto-desktop.png`, `proyectos-desktop.png`, `mockup-completo-desktop.png`).

- [ ] **Step 2: Crear `package.json` e instalar**

```json
{
  "name": "landing-mendodata",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "astro dev",
    "build": "astro build",
    "preview": "astro preview",
    "test": "astro build && node --test \"tests/**/*.test.mjs\""
  }
}
```

```bash
npm install astro@^7.3.5 @astrojs/sitemap@^3.7.4
```

Expected: `package-lock.json` creado, sin errores.

- [ ] **Step 3: Crear `astro.config.mjs`, `.node-version` y actualizar `.gitignore`**

```js
// astro.config.mjs
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://mendodata.online',
  output: 'static',
  integrations: [sitemap({ filter: (page) => !page.includes('404') })],
  build: { inlineStylesheets: 'never' },
  // CSS sin minificar: los tests leen los estilos tal como están escritos
  vite: { build: { cssMinify: false } },
});
```

`.node-version`:
```
22
```

Agregar al final de `.gitignore`:
```
node_modules/
dist/
.astro/
```

- [ ] **Step 4: Escribir el test de configuración (falla)**

`tests/site-config.test.mjs`:
```js
import test from 'node:test';
import assert from 'node:assert/strict';
import {
  nav, footerNav, legalLinks, contactHref, headerCta,
  whatsapp, whatsappUrl, socials, seo, site,
} from '../src/config/site.ts';

test('whatsappUrl builds the official link and hides without number', () => {
  assert.equal(whatsapp.number, '5492615974103');
  assert.equal(whatsapp.message, '');
  assert.equal(whatsappUrl(), 'https://wa.me/5492615974103');
  assert.equal(whatsappUrl({ number: '', message: '' }), null);
  assert.equal(
    whatsappUrl({ number: '5492615974103', message: 'Hola, quiero consultar' }),
    'https://wa.me/5492615974103?text=Hola%2C%20quiero%20consultar',
  );
});

test('navigation uses full routes from any page', () => {
  assert.deepEqual(nav, [
    { label: 'Soluciones', href: '/#soluciones' },
    { label: 'Proyectos', href: '/proyectos' },
    { label: 'Cómo trabajamos', href: '/#como-trabajamos' },
    { label: 'Equipo', href: '/#equipo' },
  ]);
  assert.deepEqual(footerNav[0], { label: 'Inicio', href: '/' });
  assert.deepEqual(footerNav.slice(1), nav);
  assert.deepEqual(legalLinks, [
    { label: 'Privacidad', href: '/legal#privacidad' },
    { label: 'Cookies', href: '/legal#cookies' },
  ]);
  assert.equal(contactHref, '/#contacto');
  assert.equal(headerCta, 'Contanos tu caso');
});

test('only confirmed socials are exposed', () => {
  assert.deepEqual(socials, [
    { name: 'Instagram', url: 'https://www.instagram.com/mendo.data/' },
    { name: 'TikTok', url: 'https://www.tiktok.com/@mendo.data' },
  ]);
});

test('SEO copy matches the blueprint', () => {
  assert.equal(site.url, 'https://mendodata.online');
  assert.equal(site.tagline, 'Sistemas, automatización y datos para ordenar y mejorar procesos operativos.');
  assert.deepEqual(seo.home, {
    title: 'MendoData | Sistemas, automatización y datos',
    description: 'Desarrollamos sistemas, automatizaciones y soluciones de datos para ordenar procesos, reducir errores y mejorar el control operativo.',
    path: '/',
  });
  assert.deepEqual(seo.proyectos, {
    title: 'Proyectos | MendoData',
    description: 'Conocé proyectos reales de MendoData y cómo convertimos necesidades operativas en sistemas, automatizaciones y soluciones de datos.',
    path: '/proyectos',
  });
  assert.deepEqual(seo.legal, {
    title: 'Privacidad y cookies | MendoData',
    description: 'Información sobre privacidad, tratamiento de datos y cookies del sitio de MendoData.',
    path: '/legal',
  });
});
```

- [ ] **Step 5: Correr el test y verificar que falla**

Run: `node --test tests/site-config.test.mjs`
Expected: FAIL con `Cannot find module .../src/config/site.ts`.
(Si en cambio falla por sintaxis TypeScript, Node no está quitando tipos: usar `node --experimental-strip-types --test ...` y agregar ese flag al script `test`.)

- [ ] **Step 6: Implementar `src/config/site.ts`**

```ts
// Única fuente de verdad para datos globales del sitio.
// Header, Footer, WhatsApp y SEO leen de acá; no repetir estos valores en otros archivos.

export type NavLink = { label: string; href: string };

export const site = {
  name: 'MendoData',
  url: 'https://mendodata.online',
  tagline: 'Sistemas, automatización y datos para ordenar y mejorar procesos operativos.',
};

export const contactHref = '/#contacto';
export const headerCta = 'Contanos tu caso';

// Rutas completas: estos enlaces también se usan desde /proyectos y /legal
export const nav: NavLink[] = [
  { label: 'Soluciones', href: '/#soluciones' },
  { label: 'Proyectos', href: '/proyectos' },
  { label: 'Cómo trabajamos', href: '/#como-trabajamos' },
  { label: 'Equipo', href: '/#equipo' },
];

export const footerNav: NavLink[] = [{ label: 'Inicio', href: '/' }, ...nav];

export const legalLinks: NavLink[] = [
  { label: 'Privacidad', href: '/legal#privacidad' },
  { label: 'Cookies', href: '/legal#cookies' },
];

// Sin número, el botón flotante y los enlaces de WhatsApp no se muestran
export const whatsapp = {
  number: '5492615974103',
  message: '',
};

export function whatsappUrl(config: { number: string; message: string } = whatsapp): string | null {
  if (!config.number) return null;
  const base = `https://wa.me/${config.number}`;
  return config.message ? `${base}?text=${encodeURIComponent(config.message)}` : base;
}

export type SocialName = 'LinkedIn' | 'Instagram' | 'TikTok';
export type Social = { name: SocialName; url: string };

// Solo cuentas oficiales confirmadas; una URL vacía no se muestra
const allSocials: Social[] = [
  { name: 'LinkedIn', url: '' },
  { name: 'Instagram', url: 'https://www.instagram.com/mendo.data/' },
  { name: 'TikTok', url: 'https://www.tiktok.com/@mendo.data' },
];

export const socials: Social[] = allSocials.filter((social) => social.url);

export type PageSeo = { title: string; description: string; path: string };

export const seo: { home: PageSeo; proyectos: PageSeo; legal: PageSeo } = {
  home: {
    title: 'MendoData | Sistemas, automatización y datos',
    description: 'Desarrollamos sistemas, automatizaciones y soluciones de datos para ordenar procesos, reducir errores y mejorar el control operativo.',
    path: '/',
  },
  proyectos: {
    title: 'Proyectos | MendoData',
    description: 'Conocé proyectos reales de MendoData y cómo convertimos necesidades operativas en sistemas, automatizaciones y soluciones de datos.',
    path: '/proyectos',
  },
  legal: {
    title: 'Privacidad y cookies | MendoData',
    description: 'Información sobre privacidad, tratamiento de datos y cookies del sitio de MendoData.',
    path: '/legal',
  },
};
```

- [ ] **Step 7: Correr el test y verificar que pasa**

Run: `node --test tests/site-config.test.mjs`
Expected: 4 tests PASS.

- [ ] **Step 8: Commit**

```bash
git add package.json package-lock.json astro.config.mjs .node-version .gitignore CLAUDE.md docs/MendoData-Blueprint-Maestro.md docs/mockups src/config/site.ts tests/site-config.test.mjs
git commit -m "Set up Astro with a single site config and bring the blueprint into the repo"
```

---

### Task 2: Migrar la Home a Astro sin cambios visibles

Migración pura: mismo HTML, mismo CSS, mismo Header y Footer que hoy (se reemplazan en Tasks 3 y 4). Los tests existentes pasan a leer `dist/`.

**Files:**
- Create: `src/styles/global.css`, `src/styles/home.css`, `src/layouts/BaseLayout.astro`, `src/components/Header.astro`, `src/components/Footer.astro`, `src/pages/index.astro`, `tests/helpers.mjs`
- Move: `assets/*` → `public/assets/*` (favicons también en `public/assets/`)
- Delete: `index.html`
- Modify: `tests/landing.test.mjs`

**Interfaces:**
- Consumes: `seo.home` de `site.ts`.
- Produces:
  - `BaseLayout` props: `{ title: string; description?: string; path?: string; noindex?: boolean }`; renderiza `<slot />` dentro de `<main id="contenido">`.
  - `tests/helpers.mjs`: `readPage(file: string): string` (lee `dist/<file>`), `readCss(): string` (concatena todos los `.css` de `dist/_astro/`), `pageSource(file: string): string` (= `readPage(file) + '<style>' + readCss() + '</style>'`), `projectRoot: string`.

- [ ] **Step 1: Mover imágenes**

```bash
mkdir -p public && git mv assets public/assets
```

- [ ] **Step 2: Crear `tests/helpers.mjs`**

```js
import { readFileSync, readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

export const projectRoot = fileURLToPath(new URL('..', import.meta.url));
const dist = new URL('../dist/', import.meta.url);

export function readPage(file) {
  return readFileSync(new URL(file, dist), 'utf8');
}

export function readCss() {
  const dir = new URL('_astro/', dist);
  return readdirSync(dir)
    .filter((name) => name.endsWith('.css'))
    .map((name) => readFileSync(new URL(name, dir), 'utf8'))
    .join('\n');
}

// HTML de la página + todo el CSS generado, para tests que revisan estilos
export function pageSource(file) {
  return `${readPage(file)}<style>${readCss()}</style>`;
}
```

- [ ] **Step 3: Adaptar `tests/landing.test.mjs` a `dist/` (falla)**

Reemplazar la cabecera (imports y carga de `html`):
```js
import { existsSync } from 'node:fs';
import test from 'node:test';
import assert from 'node:assert/strict';
import { runInNewContext } from 'node:vm';
import { pageSource, projectRoot } from './helpers.mjs';

const html = pageSource('index.html');
```
(`visibleText` queda igual.)

En `uses the approved accessible team photos...` cambiar:
- `const projectRoot = fileURLToPath(...)` → borrar la línea (se importa de helpers).
- `${projectRoot}/assets/` → `${projectRoot}/public/assets/` (dos veces).
- `src="assets\/team-juan-diego\.png"` → `src="\/assets\/team-juan-diego\.png"` y lo mismo para `team-gonzalo\.jpeg`.

Nada más cambia en este task: el resto de los tests deben pasar con la migración pura.

- [ ] **Step 4: Correr tests y verificar que fallan**

Run: `npm test`
Expected: FAIL (`astro build` sin páginas o `ENOENT .../dist/index.html`).

- [ ] **Step 5: Crear `src/styles/global.css`**

Copiar de `index.html` (numeración del archivo actual en `main`, commit `9390018`), sin la etiqueta `<style>` y quitando 6 espacios de sangría:
1. Líneas 22–94 (`:root` hasta `.skip-link:focus`).
2. Líneas 118–136 (`.brand`, `.brand-mark`, `.brand-word`).
3. Líneas 157–290 (botones, `:focus-visible`, `main`, tipografía, `.section`, `.wrap`, kickers, `.lead`).
4. Líneas 1333–1351 (`.reveal`).
5. Al final:

```css
/* Responsive global ----------------------------------------------- */
@media (max-width: 640px) {
  .brand-mark {
    height: 26px;
  }

  .brand-word {
    font-size: 1.12rem;
  }

  .section {
    padding-left: 16px;
    padding-right: 16px;
  }

  .lead {
    font-size: 1.06rem;
  }
}
```
6. Líneas 1501–1517 (`@media (prefers-reduced-motion: reduce)` completo).

Verificar con `grep -c 'hero' src/styles/global.css` → 0 (salvo comentarios).

- [ ] **Step 6: Crear `src/styles/home.css`**

Copiar de `index.html`, quitando 6 espacios de sangría:
1. Líneas 292–1311 (desde `.hero` hasta `.form-hint`).
   - En `.hero::before` cambiar `url("assets/hero.jpg")` → `url("/assets/hero.jpg")`.
   - Conservar `.mobile-contact-cta { display: none; }` por ahora (se quita en Task 3).
2. Líneas 1353–1389 (`@media (max-width: 940px)` completo).
3. Del `@media (max-width: 640px)` (líneas 1396–1499), todas las reglas **excepto** `.nav`, `.brand-mark`, `.brand-word` y `.lead`; en el selector `.hero, .section` dejar solo `.hero`. Conservar las reglas de `.mobile-contact-cta` y `.mobile-contact-cta.is-hidden` por ahora.

No copiar las líneas 1390–1394 (`.nav-link` a 820px): van al Header.

- [ ] **Step 7: Crear `src/components/Header.astro` (Header actual, sin cambios)**

```astro
<header class="site-header">
  <nav class="nav" aria-label="MendoData">
    <a class="brand" href="#inicio" aria-label="MendoData inicio">
      <img class="brand-mark" src="/assets/mendodata-symbol.png" alt="" aria-hidden="true" width="583" height="186">
      <span class="brand-word">MendoData</span>
    </a>
    <div class="nav-actions">
      <a class="nav-link" href="#servicios">Qué hacemos</a>
      <a class="nav-link" href="#ejemplo">El ejemplo</a>
      <a class="nav-link" href="#proceso">Proceso</a>
      <a class="nav-link" href="#nosotros">Nosotros</a>
      <a class="button accent" href="#contacto">Contáctanos</a>
    </div>
  </nav>
</header>

<style is:global>
  /* líneas 95–116 y 138–156 de index.html (.site-header, .nav, .nav-actions, .nav-link) */
  /* + @media (max-width: 820px) { .nav-link { display: none; } } */
  /* + @media (max-width: 640px) { .nav { min-height: 66px; padding: 12px 16px; } } */
</style>
```

Reemplazar los tres comentarios por el CSS literal que indican (copiar de `index.html`). `is:global` en este task mantiene los selectores iguales para que los tests de estilos existentes pasen; Task 3 reescribe el Header.

- [ ] **Step 8: Crear `src/components/Footer.astro` (Footer actual, sin cambios)**

```astro
<footer class="site-footer">
  <div class="footer-inner">
    <a class="brand" href="#inicio" aria-label="MendoData inicio">
      <img class="brand-mark" src="/assets/mendodata-symbol.png" alt="" aria-hidden="true" width="583" height="186">
      <span class="brand-word">MendoData</span>
    </a>
    <a href="#inicio">Volver arriba</a>
  </div>
</footer>

<style is:global>
  /* líneas 1312–1331 de index.html (.site-footer, .footer-inner, .footer-inner .brand-word) */
</style>
```

Reemplazar el comentario por el CSS literal.

- [ ] **Step 9: Crear `src/layouts/BaseLayout.astro`**

```astro
---
import '../styles/global.css';
import Header from '../components/Header.astro';
import Footer from '../components/Footer.astro';
import { site } from '../config/site';

interface Props {
  title: string;
  description?: string;
  path?: string;
  noindex?: boolean;
}

const { title, description, path, noindex = false } = Astro.props;
const canonical = path ? new URL(path, site.url).href : undefined;
---
<!doctype html>
<html lang="es-AR">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script is:inline>document.documentElement.classList.add('js');</script>
    <title>{title}</title>
    {description && <meta name="description" content={description}>}
    {noindex && <meta name="robots" content="noindex">}
    {canonical && <link rel="canonical" href={canonical}>}
    {canonical && <meta property="og:type" content="website">}
    {canonical && <meta property="og:url" content={canonical}>}
    {canonical && <meta property="og:title" content={title}>}
    {canonical && description && <meta property="og:description" content={description}>}
    <meta property="og:site_name" content={site.name}>
    <meta property="og:locale" content="es_AR">
    <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon-32.png">
    <link rel="icon" type="image/png" sizes="512x512" href="/assets/favicon-512.png">
    <link rel="apple-touch-icon" href="/assets/favicon-180.png">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Newsreader:ital,opsz,wght@1,6..72,400&display=swap"
      rel="stylesheet"
    >
  </head>
  <body>
    <a class="skip-link" href="#contenido">Saltar al contenido</a>
    <Header />
    <main id="contenido">
      <slot />
    </main>
    <Footer />

    <script>
      const reveals = document.querySelectorAll('.reveal');

      if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver(
          (entries) => {
            for (const entry of entries) {
              if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
              }
            }
          },
          { threshold: 0.14 }
        );

        for (const item of reveals) observer.observe(item);
      } else {
        for (const item of reveals) item.classList.add('is-visible');
      }
    </script>
  </body>
</html>
```

- [ ] **Step 10: Crear `src/pages/index.astro`**

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
import '../styles/home.css';
import { seo } from '../config/site';
---
<BaseLayout title={seo.home.title} description={seo.home.description} path={seo.home.path}>
  <!-- pegar aquí las líneas 1540–2026 de index.html (desde el comentario HERO hasta </section> de #contacto) -->
  <a class="mobile-contact-cta button accent" href="#contacto">Contanos tu caso</a>
  <script>
    const mobileContactCta = document.querySelector('.mobile-contact-cta');
    const contactSection = document.querySelector('#contacto');

    if (mobileContactCta && contactSection && 'IntersectionObserver' in window) {
      const contactObserver = new IntersectionObserver((entries) => {
        for (const entry of entries) {
          mobileContactCta.classList.toggle('is-hidden', entry.isIntersecting);
        }
      }, { threshold: 0.05 });

      contactObserver.observe(contactSection);
    }
  </script>
</BaseLayout>
```

Reemplazar el comentario por el markup literal. En ese markup cambiar solo `src="assets/` → `src="/assets/` (2 imágenes del equipo). Nota: el CTA mobile queda dentro de `<main>` temporalmente; se elimina en Task 3.

Luego borrar el archivo viejo: `git rm index.html`.

- [ ] **Step 11: Ajustar tests que dependen de la estructura inline**

En `tests/landing.test.mjs`:
- `toggles the mobile contact CTA...`: el script ya no es el último `<script>` inline (Astro lo empaqueta en `dist/_astro/*.js`). Cambiar la obtención del script por:
  ```js
  const behaviorScript = readFileSync(
    new URL(`../dist${html.match(/<script type="module" src="([^"]+)"/)?.[1] ?? ''}`, import.meta.url),
    'utf8',
  );
  ```
  y agregar `import { readFileSync } from 'node:fs';`. Si Astro inlinea el script (sin `src`), usar en cambio el contenido de `html.match(/<script type="module">([\s\S]*?)<\/script>/)[1]`. Correr `grep -o '<script[^>]*>' dist/index.html` para ver cuál aplica y dejar solo esa variante.
- `keeps a progressively enhanced contact CTA...`: el script puede quedar en un archivo `.js` aparte; si las aserciones sobre `const contactSection = ...` fallan, cambiar `html` por `html + behaviorScript` en esas aserciones usando la misma lectura del paso anterior (extraerla a una función `readBehaviorScript()` al inicio del archivo y reutilizarla en ambos tests).

Estos dos tests se borran en Task 3; el objetivo aquí es solo verificar que la migración no rompió nada.

- [ ] **Step 12: Correr tests y verificar que pasan**

Run: `npm test`
Expected: build OK; todos los tests de `landing.test.mjs` y `site-config.test.mjs` PASS.

- [ ] **Step 13: Revisión visual rápida**

Run: `npm run dev` y abrir `http://localhost:4321/`. Verificar en 1280px y 390px que hero, imagen de fondo, pestañas del panel, equipo, formulario, Header y Footer se ven como en `main`. Consola sin errores ni recursos 404.

- [ ] **Step 14: Commit**

```bash
git add -A
git commit -m "Move the landing into Astro without visible changes"
```

---

### Task 3: Header global y anclas de la Home

**Files:**
- Modify: `src/components/Header.astro` (reescritura), `src/layouts/BaseLayout.astro`, `src/pages/index.astro`, `src/styles/home.css`, `src/styles/global.css`, `tests/landing.test.mjs`
- Create: `tests/site.test.mjs`

**Interfaces:**
- Consumes: `nav`, `contactHref`, `headerCta` de `site.ts`.
- Produces: `Header` props `{ current?: string }` (href del enlace activo, p. ej. `'/proyectos'`). `BaseLayout` agrega prop `current?: string` y lo pasa al Header.

- [ ] **Step 1: Escribir tests del Header (fallan)**

`tests/site.test.mjs`:
```js
import test from 'node:test';
import assert from 'node:assert/strict';
import { readPage } from './helpers.mjs';

const header = (html) => html.match(/<header[\s\S]*?<\/header>/i)?.[0] ?? '';
const hrefs = (fragment) => [...fragment.matchAll(/href="([^"]*)"/g)].map((m) => m[1]);

test('header links to the blueprint destinations with full routes', () => {
  const h = header(readPage('index.html'));
  assert.ok(h, 'la página debe tener <header>');
  assert.deepEqual(hrefs(h), [
    '/',
    '/#soluciones',
    '/proyectos',
    '/#como-trabajamos',
    '/#equipo',
    '/#contacto',
    '/#contacto',
  ]);
  assert.match(h, />\s*Contanos tu caso\s*</);
  assert.match(h, /aria-label="MendoData, inicio"/);
  assert.doesNotMatch(h, /wa\.me/);
});

test('header has an accessible mobile menu toggle', () => {
  const h = header(readPage('index.html'));
  assert.match(h, /<button[^>]+class="menu-toggle"[^>]*>/);
  assert.match(h, /aria-controls="site-menu"/);
  assert.match(h, /aria-expanded="false"/);
  assert.match(h, /id="site-menu"/);
});

test('home exposes the anchors the global navigation targets', () => {
  const html = readPage('index.html');
  for (const id of ['soluciones', 'como-trabajamos', 'equipo', 'contacto']) {
    assert.match(html, new RegExp(`id="${id}"`), `falta id="${id}"`);
  }
  for (const id of ['servicios', 'proceso', 'nosotros']) {
    assert.doesNotMatch(html, new RegExp(`id="${id}"`), `quedó id="${id}"`);
  }
});

test('home no longer has the fixed mobile contact bar', () => {
  assert.doesNotMatch(readPage('index.html'), /mobile-contact-cta/);
});
```

- [ ] **Step 2: Correr y verificar que fallan**

Run: `npm test`
Expected: los 4 tests nuevos FAIL (hrefs viejos, sin `menu-toggle`, ids viejos, CTA mobile presente).

- [ ] **Step 3: Reescribir `src/components/Header.astro`**

```astro
---
import { nav, contactHref, headerCta } from '../config/site';

interface Props {
  current?: string;
}

const { current } = Astro.props;
---
<header class="site-header">
  <nav class="nav" aria-label="Principal">
    <a class="brand" href="/" aria-label="MendoData, inicio">
      <img class="brand-mark" src="/assets/mendodata-symbol.png" alt="" width="583" height="186">
      <span class="brand-word">MendoData</span>
    </a>

    <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="site-menu">
      <span class="menu-toggle-icon" aria-hidden="true"></span>
      <span class="menu-toggle-label">Menú</span>
    </button>

    <div class="nav-menu" id="site-menu">
      <ul class="nav-list">
        {nav.map((link) => (
          <li>
            <a class="nav-link" href={link.href} aria-current={current === link.href ? 'page' : undefined}>
              {link.label}
            </a>
          </li>
        ))}
        <li class="nav-contact">
          <a class="nav-link" href={contactHref}>Contacto</a>
        </li>
      </ul>
      <a class="button accent nav-cta" href={contactHref}>{headerCta}</a>
    </div>
  </nav>
</header>

<script>
  const toggle = document.querySelector<HTMLButtonElement>('.menu-toggle');
  const menu = document.getElementById('site-menu');
  const nav = toggle?.closest('.nav');

  if (toggle && menu && nav) {
    const label = toggle.querySelector('.menu-toggle-label');

    const setOpen = (open: boolean) => {
      toggle.setAttribute('aria-expanded', String(open));
      nav.classList.toggle('is-open', open);
      document.body.classList.toggle('menu-open', open);
      if (label) label.textContent = open ? 'Cerrar' : 'Menú';
    };

    toggle.addEventListener('click', () => {
      setOpen(toggle.getAttribute('aria-expanded') !== 'true');
    });

    // Elegir un destino cierra el menú
    menu.addEventListener('click', (event) => {
      if ((event.target as Element).closest('a')) setOpen(false);
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && nav.classList.contains('is-open')) {
        setOpen(false);
        toggle.focus();
      }
    });

    // Si la ventana vuelve a desktop con el menú abierto, se cierra
    window.matchMedia('(min-width: 941px)').addEventListener('change', (event) => {
      if (event.matches) setOpen(false);
    });
  }
</script>

<style>
  .site-header {
    position: sticky;
    top: 0;
    z-index: 20;
    padding: 14px 22px;
  }

  .nav {
    position: relative;
    max-width: 980px;
    margin: 0 auto;
    min-height: 60px;
    padding: 8px 8px 8px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 18px;
    border: 1px solid rgba(255, 255, 255, 0.7);
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.72);
    backdrop-filter: blur(16px);
    box-shadow: 0 10px 34px rgba(20, 41, 61, 0.12);
  }

  .nav-menu {
    display: flex;
    align-items: center;
    gap: 26px;
  }

  .nav-list {
    display: flex;
    align-items: center;
    gap: 26px;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .nav-link {
    color: var(--ink-soft);
    font-weight: 500;
    font-size: 0.94rem;
  }

  .nav-link:hover,
  .nav-link[aria-current="page"] {
    color: var(--ink);
    text-decoration: underline;
    text-underline-offset: 5px;
    text-decoration-thickness: 1px;
  }

  .nav-contact,
  .menu-toggle {
    display: none;
  }

  .menu-toggle {
    align-items: center;
    gap: 10px;
    min-height: 44px;
    padding: 0 16px;
    border: 1px solid var(--line);
    border-radius: 999px;
    background: var(--surface);
    color: var(--ink);
    font: 600 0.94rem var(--font-body);
    cursor: pointer;
  }

  .menu-toggle-icon,
  .menu-toggle-icon::before,
  .menu-toggle-icon::after {
    display: block;
    width: 16px;
    height: 2px;
    border-radius: 2px;
    background: currentColor;
    transition: transform 160ms ease, opacity 160ms ease;
  }

  .menu-toggle-icon {
    position: relative;
  }

  .menu-toggle-icon::before,
  .menu-toggle-icon::after {
    content: "";
    position: absolute;
    left: 0;
  }

  .menu-toggle-icon::before { top: -5px; }
  .menu-toggle-icon::after { top: 5px; }

  .is-open .menu-toggle-icon { background: transparent; }
  .is-open .menu-toggle-icon::before { transform: translateY(5px) rotate(45deg); }
  .is-open .menu-toggle-icon::after { transform: translateY(-5px) rotate(-45deg); }

  @media (max-width: 940px) {
    .nav {
      border-radius: 28px;
    }

    /* Sin JS el menú queda visible como lista, debajo del logo */
    :global(html:not(.js)) .nav {
      flex-wrap: wrap;
    }

    :global(html:not(.js)) .nav-menu {
      flex-basis: 100%;
      flex-wrap: wrap;
    }

    :global(.js) .menu-toggle {
      display: inline-flex;
    }

    :global(.js) .nav-menu {
      display: none;
    }

    :global(.js) .is-open .nav-menu {
      position: absolute;
      top: calc(100% + 8px);
      left: 0;
      right: 0;
      display: flex;
      flex-direction: column;
      align-items: stretch;
      gap: 8px;
      padding: 12px;
      border: 1px solid var(--line);
      border-radius: 22px;
      background: var(--surface);
      box-shadow: var(--shadow-soft);
      max-height: calc(100dvh - 110px);
      overflow-y: auto;
    }

    .is-open .nav-list {
      flex-direction: column;
      align-items: stretch;
      gap: 0;
    }

    .is-open .nav-link {
      display: flex;
      align-items: center;
      min-height: 48px;
      padding: 0 12px;
      font-size: 1.02rem;
    }

    .nav-contact {
      display: list-item;
    }

    .is-open .nav-cta {
      width: 100%;
      min-height: 50px;
    }
  }

  @media (max-width: 640px) {
    .site-header {
      padding: 12px 16px;
    }

    .nav {
      min-height: 62px;
      padding: 8px 8px 8px 16px;
    }
  }

  :global(body.menu-open) {
    overflow: hidden;
  }
</style>
```

- [ ] **Step 4: Pasar `current` desde el layout**

En `src/layouts/BaseLayout.astro`:
- `interface Props` agrega `current?: string;`
- `const { title, description, path, noindex = false, current } = Astro.props;`
- `<Header />` → `<Header current={current} />`

- [ ] **Step 5: Renombrar IDs y quitar el CTA mobile de la Home**

En `src/pages/index.astro`:
- `id="servicios"` → `id="soluciones"`
- `id="proceso"` → `id="como-trabajamos"`
- `id="nosotros"` → `id="equipo"`
- Borrar el `<a class="mobile-contact-cta ...">` y su `<script>`.

En `src/styles/home.css`:
- Reemplazar todas las apariciones de `#servicios` por `#soluciones` y `#nosotros` por `#equipo` (`sed -i '' 's/#servicios/#soluciones/g; s/#nosotros/#equipo/g' src/styles/home.css`).
- Borrar el bloque `.mobile-contact-cta { display: none; }` y, dentro del `@media (max-width: 640px)`, los bloques `.mobile-contact-cta` y `.mobile-contact-cta.is-hidden`.

En `src/styles/global.css`, después de `main { ... }`, agregar:
```css
/* Anclas: el Header sticky no tapa el título de la sección */
section[id] {
  scroll-margin-top: 96px;
}
```

Verificar: `grep -rn "servicios\|nosotros\|mobile-contact" src/` → sin resultados (salvo texto visible que diga "servicios", si lo hubiera; revisar cada coincidencia).

- [ ] **Step 6: Actualizar `tests/landing.test.mjs`**

- `names the Microsoft tools...`: `id="servicios"` → `id="soluciones"` y el mensaje `'la sección #soluciones debe existir'`.
- Borrar los tests `keeps a progressively enhanced contact CTA available on mobile`, `toggles the mobile contact CTA as the contact section enters and leaves view` y `hides the nav links before they run out of room`, y la función `readBehaviorScript` / imports que queden sin uso (`runInNewContext`, `readFileSync`).
- `includes baseline accessibility and usability hooks`: reemplazar el cuerpo por:
  ```js
  assert.match(html, /<main\b/i);
  assert.match(html, /aria-label="Principal"/i);
  assert.match(html, /href="#contacto"/i);
  assert.match(html, /href="#ejemplo"/i);
  assert.match(html, /href="\/#como-trabajamos"/i);
  assert.match(html, /href="\/#equipo"/i);
  assert.match(html, /href="\/#soluciones"/i);
  assert.match(html, /prefers-reduced-motion/i);
  assert.match(html, /<div class="showcase"/i);
  assert.match(html, /#contacto\s*\{[^}]*scroll-margin-top:/i);
  ```

- [ ] **Step 7: Correr tests**

Run: `npm test`
Expected: todo PASS.

- [ ] **Step 8: Verificar en navegador**

`npm run dev`, abrir `http://localhost:4321/`:
- 1280px: logo, 4 enlaces, CTA en una línea; sin "Contacto" suelto.
- 990px y 941px: el pill no se desborda. Si se desborda, subir el breakpoint (940 → 1000 en `@media` y en `matchMedia('(min-width: 1001px)')`) y repetir.
- 390px: botón "Menú"; abre panel; Tab recorre enlaces; Escape cierra y devuelve foco; tocar "Equipo" cierra y baja a `#equipo` con el título visible debajo del Header; sin scroll horizontal.
- Consola sin errores.

- [ ] **Step 9: Commit**

```bash
git add -A
git commit -m "Replace the header with the global navigation from the blueprint"
```

---

### Task 4: Footer global

**Files:**
- Create: `src/components/SocialIcon.astro`
- Modify: `src/components/Footer.astro` (reescritura), `tests/site.test.mjs`

**Interfaces:**
- Consumes: `site`, `footerNav`, `legalLinks`, `contactHref`, `socials`, `whatsappUrl` de `site.ts`; tipo `SocialName`.
- Produces: `SocialIcon` props `{ name: SocialName }` → `<svg>` 20×20 con `aria-hidden="true"`.

- [ ] **Step 1: Tests del Footer (fallan)**

Agregar a `tests/site.test.mjs`:
```js
const footer = (html) => html.match(/<footer[\s\S]*?<\/footer>/i)?.[0] ?? '';

test('footer follows the blueprint structure', () => {
  const f = footer(readPage('index.html'));
  assert.ok(f, 'la página debe tener <footer>');
  assert.match(f, /Sistemas, automatización y datos para ordenar y mejorar procesos operativos\./);
  assert.match(f, />\s*Explorá\s*</);
  assert.match(f, />\s*Contacto\s*</);
  for (const [label, href] of [
    ['Inicio', '/'],
    ['Soluciones', '/#soluciones'],
    ['Proyectos', '/proyectos'],
    ['Cómo trabajamos', '/#como-trabajamos'],
    ['Equipo', '/#equipo'],
    ['Formulario de contacto', '/#contacto'],
    ['Privacidad', '/legal#privacidad'],
    ['Cookies', '/legal#cookies'],
  ]) {
    assert.match(f, new RegExp(`href="${href.replace(/[/#]/g, '\\$&')}"[^>]*>\\s*${label}\\s*<`), `${label} → ${href}`);
  }
  assert.match(f, /href="https:\/\/wa\.me\/5492615974103"[^>]*>\s*Escribinos por WhatsApp\s*</);
  assert.match(f, /© <span data-year>\d{4}<\/span> MendoData\. Todos los derechos reservados\./);
});

test('footer shows only confirmed social accounts', () => {
  const f = footer(readPage('index.html'));
  assert.match(f, /href="https:\/\/www\.instagram\.com\/mendo\.data\/"[^>]*aria-label="MendoData en Instagram"/);
  assert.match(f, /href="https:\/\/www\.tiktok\.com\/@mendo\.data"[^>]*aria-label="MendoData en TikTok"/);
  assert.doesNotMatch(f, /linkedin/i);
});

test('footer has no placeholder or out-of-scope links', () => {
  const f = footer(readPage('index.html'));
  assert.doesNotMatch(f, /href="#"/);
  assert.doesNotMatch(f, /href="\/contacto"/);
  assert.doesNotMatch(f, /Configurar cookies|Términos/i);
  assert.doesNotMatch(f, /<form\b/i);
});
```

- [ ] **Step 2: Correr y verificar que fallan**

Run: `npm test` → los 3 tests nuevos FAIL.

- [ ] **Step 3: Crear `src/components/SocialIcon.astro`**

```astro
---
import type { SocialName } from '../config/site';

interface Props {
  name: SocialName;
}

const { name } = Astro.props;
---
{name === 'Instagram' && (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
)}
{name === 'TikTok' && (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
  </svg>
)}
{name === 'LinkedIn' && (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)}
```

- [ ] **Step 4: Reescribir `src/components/Footer.astro`**

```astro
---
import SocialIcon from './SocialIcon.astro';
import { site, footerNav, legalLinks, contactHref, socials, whatsappUrl } from '../config/site';

const whatsappHref = whatsappUrl();
const year = new Date().getFullYear();
---
<footer class="site-footer">
  <div class="footer-inner">
    <div class="footer-brand">
      <a class="brand" href="/" aria-label="MendoData, inicio">
        <img class="brand-mark" src="/assets/mendodata-symbol.png" alt="" width="583" height="186">
        <span class="brand-word">MendoData</span>
      </a>
      <p class="footer-tagline">{site.tagline}</p>
      {socials.length > 0 && (
        <ul class="footer-socials">
          {socials.map((social) => (
            <li>
              <a href={social.url} target="_blank" rel="noopener" aria-label={`MendoData en ${social.name}`}>
                <SocialIcon name={social.name} />
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>

    <nav class="footer-col" aria-labelledby="footer-explora">
      <h2 class="footer-title" id="footer-explora">Explorá</h2>
      <ul>
        {footerNav.map((link) => <li><a href={link.href}>{link.label}</a></li>)}
      </ul>
    </nav>

    <div class="footer-col">
      <h2 class="footer-title">Contacto</h2>
      <ul>
        <li><a href={contactHref}>Formulario de contacto</a></li>
        {whatsappHref && <li><a href={whatsappHref} target="_blank" rel="noopener">Escribinos por WhatsApp</a></li>}
      </ul>
    </div>
  </div>

  <div class="footer-legal">
    <p>© <span data-year>{year}</span> MendoData. Todos los derechos reservados.</p>
    <ul>
      {legalLinks.map((link) => <li><a href={link.href}>{link.label}</a></li>)}
    </ul>
  </div>

  <!-- El año sale del build; esto lo corrige si el sitio no se reconstruyó -->
  <script is:inline>
    document.querySelectorAll('[data-year]').forEach((el) => {
      el.textContent = String(new Date().getFullYear());
    });
  </script>
</footer>

<style>
  .site-footer {
    background: var(--ink);
    color: rgba(255, 255, 255, 0.72);
    padding: 64px 22px calc(40px + 72px);
  }

  .footer-inner,
  .footer-legal {
    max-width: var(--max);
    margin: 0 auto;
  }

  .footer-inner {
    display: grid;
    grid-template-columns: 1.4fr 1fr 1fr;
    gap: 40px;
  }

  .brand {
    color: #ffffff;
  }

  .brand-mark {
    filter: brightness(0) invert(1);
  }

  .footer-tagline {
    max-width: 34ch;
    margin: 16px 0 20px;
    font-size: 0.96rem;
  }

  .footer-socials,
  .footer-col ul,
  .footer-legal ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .footer-socials {
    display: flex;
    gap: 8px;
  }

  .footer-socials a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    border-radius: 999px;
    color: #ffffff;
  }

  .footer-socials a:hover {
    border-color: #ffffff;
  }

  .footer-title {
    max-width: none;
    margin: 0 0 14px;
    color: #ffffff;
    font-family: var(--font-body);
    font-size: 0.8rem;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  .footer-col a,
  .footer-legal a {
    display: inline-flex;
    align-items: center;
    min-height: 36px;
  }

  .footer-col a:hover,
  .footer-legal a:hover {
    color: #ffffff;
    text-decoration: underline;
    text-underline-offset: 4px;
  }

  .site-footer :focus-visible {
    outline-color: #ffffff;
  }

  .footer-legal {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
    flex-wrap: wrap;
    margin-top: 48px;
    padding-top: 20px;
    border-top: 1px solid rgba(255, 255, 255, 0.14);
    font-size: 0.88rem;
  }

  .footer-legal p {
    margin: 0;
  }

  .footer-legal ul {
    display: flex;
    gap: 20px;
  }

  @media (max-width: 940px) {
    .footer-inner {
      grid-template-columns: 1fr 1fr;
    }

    .footer-brand {
      grid-column: 1 / -1;
    }
  }

  @media (max-width: 640px) {
    .site-footer {
      padding: 48px 16px calc(32px + 72px);
    }

    .footer-inner {
      grid-template-columns: 1fr;
      gap: 32px;
    }

    .footer-legal {
      flex-direction: column-reverse;
      align-items: flex-start;
    }
  }
</style>
```

Nota: el `padding-bottom` extra (72px) deja lugar al botón flotante de WhatsApp. `filter` convierte el símbolo a blanco sobre navy; si al verlo en el navegador el logo pierde detalle, quitar el `filter` y dejar el símbolo en color.

- [ ] **Step 5: Correr tests**

Run: `npm test` → todo PASS.

- [ ] **Step 6: Verificar en navegador**

1280px (3 columnas), 820px (Marca arriba, Explorá/Contacto en 2 columnas), 390px (apilado: Marca, redes, Explorá, Contacto, legal, copyright). Contraste legible, focus visible con Tab, sin scroll horizontal.

- [ ] **Step 7: Commit**

```bash
git add -A
git commit -m "Add the global footer with navigation, contact and confirmed socials"
```

---

### Task 5: Botón flotante de WhatsApp

**Files:**
- Create: `src/components/WhatsAppButton.astro`
- Modify: `src/layouts/BaseLayout.astro`, `tests/site.test.mjs`, `tests/landing.test.mjs`

**Interfaces:**
- Consumes: `whatsappUrl()` de `site.ts`.

- [ ] **Step 1: Tests (fallan)**

Agregar a `tests/site.test.mjs`:
```js
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { projectRoot } from './helpers.mjs';

test('floating WhatsApp button uses the global config', () => {
  const html = readPage('index.html');
  assert.match(
    html,
    /<a[^>]+class="whatsapp-float"[^>]+href="https:\/\/wa\.me\/5492615974103"[^>]+aria-label="Contactar a MendoData por WhatsApp"/,
  );
});

test('the WhatsApp number lives only in site.ts', () => {
  const files = [];
  const walk = (dir) => {
    for (const name of readdirSync(dir)) {
      const path = join(dir, name);
      if (statSync(path).isDirectory()) walk(path);
      else files.push(path);
    }
  };
  walk(join(projectRoot, 'src'));
  const withNumber = files
    .filter((file) => readFileSync(file, 'utf8').includes('5492615974103'))
    .map((file) => file.slice(projectRoot.length));
  assert.deepEqual(withNumber, ['src/config/site.ts']);
});
```
(Unificar los imports de `node:fs` y `helpers.mjs` al inicio del archivo.)

Nota sobre el orden de atributos: si Astro emite `href` antes que `class`, ajustar la regex a `/<a[^>]+href="https:\/\/wa\.me\/5492615974103"[^>]+class="whatsapp-float"/` tras mirar `dist/index.html`.

En `tests/landing.test.mjs`, test `closes with the configured FormSubmit contact form`: borrar `assert.doesNotMatch(html, /wa\.me\//i);` (el sitio ahora tiene WhatsApp por decisión del blueprint).

- [ ] **Step 2: Correr y verificar que falla**

Run: `npm test` → `floating WhatsApp button...` FAIL.

- [ ] **Step 3: Crear `src/components/WhatsAppButton.astro`**

```astro
---
import { whatsappUrl } from '../config/site';

const href = whatsappUrl();
---
{href && (
  <a class="whatsapp-float" href={href} target="_blank" rel="noopener" aria-label="Contactar a MendoData por WhatsApp">
    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M3.5 20.5l1.3-4.2A8.6 8.6 0 1 1 8 19.4z" />
      <path d="M9.2 8.6c.2-.4.5-.4.8-.4h.4c.2 0 .4 0 .5.4l.6 1.4c.1.2 0 .4-.1.6l-.5.6c-.1.1-.1.3 0 .5.7 1.2 1.6 2 2.8 2.6.2.1.4.1.5-.1l.6-.7c.2-.2.4-.2.6-.1l1.4.7c.2.1.3.3.3.5 0 .6-.3 1.3-.9 1.6-.6.3-1.3.4-2 .2-1.9-.6-3.5-1.9-4.6-3.6-.6-.9-.9-1.9-.7-2.9.1-.5.3-.9.7-1.3z" fill="currentColor" stroke="none" />
    </svg>
  </a>
)}

<style>
  .whatsapp-float {
    position: fixed;
    right: max(20px, env(safe-area-inset-right));
    bottom: max(20px, env(safe-area-inset-bottom));
    z-index: 15;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 56px;
    height: 56px;
    border-radius: 999px;
    background: #1F8F4E;
    color: #ffffff;
    box-shadow: 0 8px 24px rgba(20, 41, 61, 0.22);
    transition: transform 160ms ease, background 160ms ease;
  }

  .whatsapp-float:hover {
    background: #187A42;
    transform: translateY(-2px);
  }

  .whatsapp-float:focus-visible {
    outline: 3px solid var(--accent);
    outline-offset: 3px;
  }

  @media (max-width: 640px) {
    .whatsapp-float {
      right: max(16px, env(safe-area-inset-right));
      bottom: max(16px, env(safe-area-inset-bottom));
      width: 52px;
      height: 52px;
    }
  }
</style>
```

`#1F8F4E` da contraste ≥ 4.5:1 con blanco (el verde oficial `#25D366` no llega a 3:1). Ninguno de los dos está en la lista de colores retirados de `landing.test.mjs`.

- [ ] **Step 4: Montarlo en el layout**

`src/layouts/BaseLayout.astro`: `import WhatsAppButton from '../components/WhatsAppButton.astro';` y colocar `<WhatsAppButton />` justo después de `<Footer />`.

- [ ] **Step 5: Correr tests**

Run: `npm test` → todo PASS.

- [ ] **Step 6: Verificar en navegador**

- 1280px y 390px: el botón no tapa el botón "Enviar consulta" al scrollear el formulario, ni enlaces del Footer al final de la página, ni el panel del menú mobile abierto (el Header tiene `z-index: 20`, el botón 15).
- El ícono se lee como WhatsApp (burbuja + teléfono). Si no se reconoce, reemplazar el `<svg>` por el ícono oficial de simple-icons (`https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/whatsapp.svg`, copiar el `path` inline; no cargarlo desde CDN).
- Click abre `https://wa.me/5492615974103` en pestaña nueva. Tab llega al botón con focus visible.

- [ ] **Step 7: Commit**

```bash
git add -A
git commit -m "Add the floating WhatsApp button from the global config"
```

---

### Task 6: Páginas /proyectos, /legal y 404, sitemap y robots

**Files:**
- Create: `src/pages/proyectos.astro`, `src/pages/legal.astro`, `src/pages/404.astro`, `src/styles/page-intro.css`, `public/robots.txt`
- Modify: `tests/site.test.mjs`

**Interfaces:**
- Consumes: `BaseLayout` (`title`, `description`, `path`, `noindex`, `current`), `seo.proyectos`, `seo.legal`.

- [ ] **Step 1: Tests (fallan)**

Agregar a `tests/site.test.mjs`:
```js
import { existsSync } from 'node:fs';

const pages = {
  'index.html': seo.home,
  'proyectos/index.html': seo.proyectos,
  'legal/index.html': seo.legal,
};

test('every public page has one h1, exact SEO and canonical', () => {
  for (const [file, meta] of Object.entries(pages)) {
    const html = readPage(file);
    assert.equal((html.match(/<h1\b/g) ?? []).length, 1, `${file}: un solo h1`);
    assert.match(html, new RegExp(`<title>${meta.title.replace(/[|]/g, '\\|')}</title>`), `${file}: title`);
    assert.ok(html.includes(`<meta name="description" content="${meta.description}">`), `${file}: description`);
    assert.ok(html.includes(`<link rel="canonical" href="https://mendodata.online${meta.path}">`), `${file}: canonical`);
    assert.ok(html.includes(`<meta property="og:title" content="${meta.title}">`), `${file}: og:title`);
  }
});

test('no page repeats an id or links to /contacto or #', () => {
  for (const file of [...Object.keys(pages), '404.html']) {
    const html = readPage(file);
    const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]);
    assert.deepEqual(ids.filter((id, i) => ids.indexOf(id) !== i), [], `${file}: ids duplicados`);
    assert.doesNotMatch(html, /href="\/contacto"/, `${file}: /contacto`);
    assert.doesNotMatch(html, /href="#"/, `${file}: href="#"`);
    assert.doesNotMatch(html, /Fierro/i, `${file}: Fierro`);
  }
});

test('proyectos shows only the blueprint intro and marks its nav link', () => {
  const html = readPage('proyectos/index.html');
  assert.match(html, />\s*PROYECTOS\s*</);
  assert.match(html, /<h1[^>]*>\s*Soluciones construidas alrededor de problemas reales\.\s*<\/h1>/);
  assert.match(html, /Mostramos cómo convertimos necesidades operativas en sistemas, automatizaciones y soluciones de datos adaptadas a cada empresa\./);
  assert.match(header(html), /href="\/proyectos"[^>]*aria-current="page"/);
});

test('legal has the intro and the privacy and cookies anchors', () => {
  const html = readPage('legal/index.html');
  assert.match(html, />\s*LEGAL\s*</);
  assert.match(html, /<h1[^>]*>\s*Privacidad y cookies\s*<\/h1>/);
  assert.match(html, /Información sobre el tratamiento de datos y el uso de cookies en el sitio de MendoData\./);
  assert.match(html, /id="privacidad"/);
  assert.match(html, /id="cookies"/);
});

test('404 page exists, is not indexed and links home', () => {
  const html = readPage('404.html');
  assert.match(html, /<h1[^>]*>\s*Página no encontrada\s*<\/h1>/);
  assert.match(html, /<meta name="robots" content="noindex">/);
  assert.match(html, /<main[\s\S]*href="\/"[\s\S]*<\/main>/);
});

test('global components appear on every page', () => {
  for (const file of [...Object.keys(pages), '404.html']) {
    const html = readPage(file);
    assert.match(html, /<header class="site-header/, `${file}: header`);
    assert.match(html, /<footer class="site-footer/, `${file}: footer`);
    assert.match(html, /class="whatsapp-float/, `${file}: whatsapp`);
  }
});

test('sitemap lists only the public pages and robots points to it', () => {
  const sitemap = readPage('sitemap-0.xml');
  const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]).sort();
  assert.deepEqual(locs, [
    'https://mendodata.online/',
    'https://mendodata.online/legal/',
    'https://mendodata.online/proyectos/',
  ]);
  assert.match(readPage('robots.txt'), /Sitemap: https:\/\/mendodata\.online\/sitemap-index\.xml/);
  assert.ok(existsSync(new URL('../dist/sitemap-index.xml', import.meta.url)));
});
```
Agregar `seo` al import: `import { seo } from '../src/config/site.ts';`. Mantener todos los imports agrupados al inicio de `tests/site.test.mjs` (un solo import de `node:fs` con `existsSync, readdirSync, readFileSync, statSync`; un solo import de `./helpers.mjs` con `readPage, projectRoot`). Nota: las clases en `<header class="site-header` pueden llevar el atributo de scope de Astro después (`class="site-header" data-astro-cid-…`); la regex sin comillas de cierre lo admite.

Nota sobre `<loc>`: Astro puede generar las URLs con o sin barra final según `trailingSlash`. Correr el build, mirar `dist/sitemap-0.xml` y ajustar la lista esperada a lo que genere, siempre que sean exactamente esas 3 páginas. Los canonical usan `seo.*.path` sin barra (`/proyectos`); si el sitemap sale con barra, agregar `trailingSlash: 'never'` en `astro.config.mjs` para que ambos coincidan y que el sitemap liste `/proyectos` y `/legal` sin barra.

- [ ] **Step 2: Correr y verificar que fallan**

Run: `npm test` → los tests nuevos FAIL (faltan páginas).

- [ ] **Step 3: Estilos del encabezado de página**

`src/styles/page-intro.css`:
```css
/* Encabezado simple de páginas internas (/proyectos, /legal, 404) */
.page-intro {
  padding: clamp(56px, 8vw, 104px) 22px clamp(48px, 6vw, 80px);
}

.page-intro .wrap {
  max-width: 880px;
}

.page-intro h1 {
  font-size: clamp(2rem, 5vw, 3.4rem);
}

.page-intro .lead {
  max-width: 60ch;
}

.legal-section {
  padding-top: 0;
}

.legal-section .wrap {
  max-width: 880px;
}

@media (max-width: 640px) {
  .page-intro {
    padding-left: 16px;
    padding-right: 16px;
  }
}
```

(`.kicker`, `.lead`, `.section`, `.wrap` ya existen en `global.css`.)

- [ ] **Step 4: `src/pages/proyectos.astro`**

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
import '../styles/page-intro.css';
import { seo } from '../config/site';
---
<BaseLayout title={seo.proyectos.title} description={seo.proyectos.description} path={seo.proyectos.path} current="/proyectos">
  <section class="page-intro" aria-labelledby="proyectos-title">
    <div class="wrap">
      <p class="kicker">PROYECTOS</p>
      <h1 id="proyectos-title">Soluciones construidas alrededor de problemas reales.</h1>
      <p class="lead">Mostramos cómo convertimos necesidades operativas en sistemas, automatizaciones y soluciones de datos adaptadas a cada empresa.</p>
    </div>
  </section>
</BaseLayout>
```

- [ ] **Step 5: `src/pages/legal.astro`**

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
import '../styles/page-intro.css';
import { seo } from '../config/site';
---
<BaseLayout title={seo.legal.title} description={seo.legal.description} path={seo.legal.path}>
  <section class="page-intro" aria-labelledby="legal-title">
    <div class="wrap">
      <p class="kicker">LEGAL</p>
      <h1 id="legal-title">Privacidad y cookies</h1>
      <p class="lead">Información sobre el tratamiento de datos y el uso de cookies en el sitio de MendoData.</p>
    </div>
  </section>

  <!-- Contenido pendiente: se completa con el blueprint 05 y datos reales -->
  <section class="section legal-section" id="privacidad" aria-labelledby="privacidad-title">
    <div class="wrap">
      <h2 id="privacidad-title">Privacidad</h2>
    </div>
  </section>

  <section class="section legal-section" id="cookies" aria-labelledby="cookies-title">
    <div class="wrap">
      <h2 id="cookies-title">Cookies</h2>
    </div>
  </section>
</BaseLayout>
```

- [ ] **Step 6: `src/pages/404.astro`**

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
import '../styles/page-intro.css';
---
<BaseLayout title="Página no encontrada | MendoData" noindex>
  <section class="page-intro" aria-labelledby="not-found-title">
    <div class="wrap">
      <h1 id="not-found-title">Página no encontrada</h1>
      <p class="lead">La página que buscás no existe o cambió de dirección.</p>
      <a class="button accent" href="/">Volver al inicio</a>
    </div>
  </section>
</BaseLayout>
```

- [ ] **Step 7: `public/robots.txt`**

```
User-agent: *
Allow: /

Sitemap: https://mendodata.online/sitemap-index.xml
```

- [ ] **Step 8: Correr tests**

Run: `npm test` → todo PASS (ajustar la lista de `<loc>` según la nota del Step 1).

- [ ] **Step 9: Verificar en navegador**

`npm run build && npm run preview`, abrir `/proyectos`, `/legal`, `/legal#cookies`, `/cualquier-cosa`:
- Header con "Proyectos" marcado en `/proyectos`.
- Desde `/proyectos`, click en "Equipo" lleva a `/#equipo` con el título visible.
- `/legal#cookies` baja a la sección Cookies.
- Ruta inexistente muestra la 404.
- 390px sin scroll horizontal. Consola limpia.

- [ ] **Step 10: Commit**

```bash
git add -A
git commit -m "Add projects, legal and 404 pages with sitemap and robots"
```

---

### Task 7: Deploy en Render y verificación final

**Files:**
- Modify: `render.yaml`

- [ ] **Step 1: Reescribir `render.yaml`**

```yaml
services:
  - type: web
    name: landing-mendodata
    runtime: static
    # Astro genera el sitio estático en dist/
    buildCommand: npm ci && npm run build
    staticPublishPath: dist
    routes:
      # Contacto vive en la Home; /contacto respondía antes por el rewrite global
      - type: redirect
        source: /contacto
        destination: /#contacto
    headers:
      - path: /*
        name: Cache-Control
        value: no-cache
```

- [ ] **Step 2: Build limpio desde cero**

```bash
rm -rf node_modules dist && npm ci && npm test
```
Expected: instalación sin errores, todos los tests PASS.

- [ ] **Step 3: Verificación final en navegador**

`npm run preview` y recorrer `/`, `/proyectos`, `/legal`, 404 en 1280px, 820px y 390px:
- Sin scroll horizontal (en consola: `document.documentElement.scrollWidth === innerWidth`).
- Consola sin errores ni 404 de recursos (imágenes, favicons, fuentes, `hero.jpg`).
- Menú mobile completo con teclado.
- Todos los enlaces de Header y Footer llegan a destino desde cada página.
- WhatsApp no tapa CTA, formulario ni Footer.
- La Home se ve igual que en `main` salvo Header, Footer, WhatsApp y la barra CTA mobile eliminada.

- [ ] **Step 4: Commit**

```bash
git add render.yaml
git commit -m "Build the Astro site on Render and redirect /contacto to the contact section"
```

- [ ] **Step 5: Pendientes a informar (no se verifican localmente)**

Reportar al usuario, sin mergear:
- Confirmar en un deploy de preview de Render que `/proyectos` sirve `proyectos/index.html`, que las rutas inexistentes muestran `404.html` y que `/contacto` redirige y baja a `#contacto`.
- La rama no se mergea hasta que `/proyectos` y `/legal` tengan contenido.
