# Cambio tipográfico a Manrope

## Objetivo

Actualizar la tipografía principal de MendoData para que la marca se perciba limpia,
moderna y confiable, manteniendo el tono cercano de la landing.

## Decisión aprobada

- Reemplazar **Fraunces** por **Manrope** como tipografía de display.
- Mantener **Inter** como tipografía de cuerpo e interfaz.
- Usar Manrope en todos los elementos que actualmente consumen
  `var(--font-display)`, incluidos títulos, nombres del equipo, iniciales y otros
  textos destacados.
- Usar peso `700` en títulos principales y peso `600` en destacados secundarios.
- Mantener sin cambios los tamaños, colores, espaciados, estructura y contenido.

## Implementación prevista

1. Actualizar la solicitud de Google Fonts para cargar Manrope con los pesos
   necesarios y dejar de solicitar Fraunces.
2. Cambiar el token CSS `--font-display` para usar Manrope y una cadena de
   respaldo sans serif.
3. Ajustar únicamente los pesos tipográficos que necesiten reflejar la jerarquía
   aprobada, sin alterar otras propiedades visuales.

## Alcance excluido

- Cambios de copy, color, layout, espaciado o componentes.
- Cambios en el logotipo o en sus archivos de imagen.
- Reemplazo de Inter.
- Incorporación de nuevas secciones o interacciones.

## Verificación

- La página carga Manrope e Inter desde Google Fonts.
- No queda ninguna referencia a Fraunces en `index.html`.
- Todos los elementos que usaban la fuente de display adoptan Manrope.
- Las pruebas automatizadas existentes continúan pasando.
- La landing mantiene su estructura y legibilidad en desktop y móvil.

## Criterio de éxito

La landing conserva su jerarquía y contenido actuales, pero los títulos y textos
destacados se perciben más limpios y contemporáneos mediante Manrope.
