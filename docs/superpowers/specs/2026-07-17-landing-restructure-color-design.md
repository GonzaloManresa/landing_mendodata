# MendoData Landing — Reestructura de contenido y color

**Fecha:** 2026-07-17
**Archivo objetivo:** `landing-mendodata.html` (HTML estático, un solo archivo, CSS inline)

## Objetivo

Virar la paleta de cálida (durazno/naranja) a **azul dato / confianza**, sumar una
sección **"Quiénes somos"** para conectar con el público, y de paso corregir
fixes de accesibilidad/jerarquía detectados en la revisión con la skill ui-ux-pro-max.

## Decisiones (confirmadas con el usuario)

- **Contenido:** agregar sección "Quiénes somos" (2 personas), tono confianza/expertise,
  mostrando cómo se complementan y qué hace cada uno.
- **Color:** azul dato como principal, verde calma como secundario/CTA.
- **CTA principal (WhatsApp):** verde (rima con WhatsApp y con orden/tranquilidad).
- **Fotos equipo:** placeholder con avatares de iniciales, marcados para reemplazar.
- **Tipografía:** se mantiene Fraunces + Inter (el serif cálido equilibra el azul).

## Sistema de color nuevo

| Variable | Valor nuevo | Nota |
|---|---|---|
| `--bg` | `#F5F8FC` | azul muy claro (antes crema) |
| `--surface` | `#FFFFFF` | |
| `--ink` | `#12212E` | navy slate (texto principal) |
| `--ink-soft` | `#3E4E5E` / rgba equivalente | ≥ 5:1 |
| `--ink-mute` | `#5A6B7B` | **≥ 4.6:1** (fix P1 de contraste) |
| `--accent` (marca) | `#2563EB` | azul dato |
| `--accent-strong` | `#1B4DB1` | |
| `--accent-soft` | `rgba(37,99,235,0.10)` | |
| `--green` | `#1FA971` | secundario + CTA |
| `--green-strong` | `#16855A` | |
| `--green-soft` | `rgba(31,169,113,0.12)` | |
| `--tint-blue` | `#E9F1FC` | fondo de sección |
| `--tint-mint` | `#E9F6EF` | fondo de sección |
| `--line` | `rgba(18,33,46,0.12)` | |

Los degradados del hero/contacto/promise pasan de naranja→azul y mantienen el verde.
El botón `.accent` (CTA principal) usa verde; los links/acentos de marca usan azul.

## Estructura de contenido

Orden nuevo:

```
Hero → Ejemplo (chat) → Quiénes somos → Testimonios → Contacto
```

- Nav: agregar link "Nosotros" (`#nosotros`) antes de "Clientes".
- "Quiénes somos" se ubica entre Ejemplo y Testimonios: prueba → personas → social proof → CTA.

### Sección "Quiénes somos" (`#nosotros`)

- Fondo `--tint-blue` con borde superior/inferior.
- Kicker: "Quiénes somos".
- H2 de confianza (ej: "Detrás de MendoData hay dos personas, no un software impersonal").
- Lead corto: expertise + cómo se complementan.
- Grilla de **2 tarjetas** (`.team`, 2 columnas → 1 en mobile):
  - Avatar redondo con iniciales (fallback); estructura lista para `<img>` real.
  - Nombre (Fraunces), rol (azul), y renglón "de qué se encarga".
  - Contenido placeholder marcado con comentario `<!-- REEMPLAZAR -->`.

## Fixes técnicos incluidos

- **P1 contraste:** `--ink-mute` sube a `#5A6B7B` (~4.6:1). Resuelto por la paleta.
- **P2 jerarquía:** el `<h1>` del hero pasa a ser el título tipográfico más grande
  (por encima de los `<h2>` de sección).
- **P3 CSS muerto:** eliminar reglas sin HTML asociado (`#antes-despues`,
  `.comparison-*`, `.pain-*`, `.about-*`, `.principle-*`, `.project*`).
  Se **reutilizan/reworkean** `.team*` para la nueva sección.

## Fuera de alcance

- Número real de WhatsApp (queda el placeholder, el usuario lo reemplaza).
- Fotos reales del equipo (avatares de iniciales por ahora).
- Cambio de fuentes.

## Criterios de éxito

- Paleta azul/verde coherente en todas las secciones, sin restos de naranja.
- Sección "Quiénes somos" visible entre Ejemplo y Testimonios, responsive.
- Contraste de todo el texto ≥ 4.5:1.
- H1 del hero es el elemento tipográfico más grande.
- Sin CSS muerto.
- `prefers-reduced-motion`, focus states y skip-link intactos.
