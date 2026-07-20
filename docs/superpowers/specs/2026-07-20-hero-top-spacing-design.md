# Ajuste de espacio superior del hero

## Objetivo

Mostrar el contenido inicial de la landing más arriba para que el título principal
quede visible al entrar, manteniendo el mismo contenido, orden y jerarquía.

## Causa confirmada

El header ocupa `74px` en desktop y el hero agrega hasta `76px` de padding superior.
En una ventana de `1791 × 876`, esa separación empuja la última línea del `h1` fuera
del primer viewport. No existe recorte CSS del título: el problema es la suma de
espacios verticales antes del contenido.

## Decisión aprobada

- Mantener el header sin cambios.
- Mantener el orden actual: eyebrow, objetivos, título y botones.
- Cambiar únicamente el padding superior de `.hero`.
- Sustituir `clamp(40px, 6vw, 76px)` por `clamp(24px, 3vw, 40px)`.
- Mantener sin cambios el padding horizontal y el padding inferior.

## Efecto esperado

- En desktop amplio, el contenido del hero sube `36px`.
- En móvil, el contenido sube `16px`.
- El título queda visible desde la entrada en el viewport de referencia.
- No cambian el contenido, el orden, los componentes, el header ni los espacios
  internos entre los elementos del hero.

## Verificación

- Una prueba automatizada protege el valor exacto del padding del hero.
- La suite conserva el mismo baseline de fallos preexistentes sin sumar regresiones.
- La landing responde con HTTP `200`.
- En desktop y móvil, el contenido comienza más arriba y no se superpone con el
  header ni se recorta.

## Alcance excluido

- Reordenar o eliminar objetivos.
- Cambiar tipografías, tamaños, copy, colores o botones.
- Reducir la altura del header.
- Usar márgenes negativos o transformaciones para desplazar el hero.
