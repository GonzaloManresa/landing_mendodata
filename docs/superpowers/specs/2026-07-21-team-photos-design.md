# Incorporación de fotos del equipo

## Contexto

La sección “Nosotros” ya presenta correctamente a Juan Diego Caballero y Gonzalo Manresa en dos tarjetas. Actualmente utiliza las iniciales decorativas `JD` y `GM` como avatares. El usuario proporcionó dos fotos y eligió el recorte circular que prioriza el rostro.

## Objetivo

Reemplazar las iniciales por fotos reales, manteniendo la composición aprobada de las tarjetas y mejorando la identificación visual del equipo.

## Recursos de origen

- Gonzalo Manresa: `C:\Users\Juan Diego\Downloads\fotoGonza.jpeg`.
- Juan Diego Caballero: `C:\Users\Juan Diego\Downloads\ChatGPT Image 12 jul 2026, 08_17_08 p.m..png`.

Los originales no se mueven ni se editan. La implementación crea copias de trabajo dentro del proyecto.

## Alcance

### Archivos de imagen

- Copiar la foto de Gonzalo a `assets/team-gonzalo.jpeg`.
- Copiar la foto de Juan Diego a `assets/team-juan-diego.png`.
- Conservar el formato original de cada archivo; no generar, retocar ni reemplazar las imágenes con IA.

### Tarjetas de equipo

- Sustituir el `span.team-photo` decorativo de Gonzalo por una imagen con `class="team-photo team-photo-gonzalo"`, `src="assets/team-gonzalo.jpeg"` y `alt="Gonzalo Manresa"`.
- Sustituir el `span.team-photo` decorativo de Juan Diego por una imagen con `class="team-photo team-photo-juan"`, `src="assets/team-juan-diego.png"` y `alt="Juan Diego Caballero"`.
- Mantener las tarjetas, nombres, cargos, descripciones, orden, estilos generales y layout responsive actuales.
- No conservar `aria-hidden` en las fotos, porque pasan a ser contenido informativo con texto alternativo.

### Encuadre B: priorizar el rostro

- Mantener las fotos circulares mediante el `border-radius` y `object-fit: cover` existentes.
- Aplicar `object-position: 50% 24%` a la foto de Gonzalo.
- Aplicar `object-position: 50% 38%` a la foto de Juan Diego.
- Conservar el tamaño actual de `76px` por `76px` para no alterar la jerarquía visual de las tarjetas.

## Accesibilidad y fallos

- Cada imagen debe tener el texto alternativo exacto de la persona representada.
- No se agrega JavaScript, interacción ni comportamiento nuevo.
- Si una imagen no carga, el `alt` identifica a la persona; los nombres y roles escritos en cada tarjeta permanecen visibles.

## Fuera de alcance

- Cambiar nombres, cargos o descripciones.
- Cambiar colores, tipografía, espaciado, dimensiones de tarjetas o estructura responsive.
- Nuevas fotos, filtros, edición de imágenes, recortes generados por IA o cambios a otras secciones.
- Cambios al formulario, CTA, navegación o analítica.

## Validación

Las pruebas automatizadas deben comprobar:

- existencia de los dos archivos en `assets/`;
- rutas de imagen, clases y textos alternativos exactos;
- ausencia de los `span` decorativos con `JD` y `GM`;
- preservación de los nombres, cargos y descripciones aprobados.

La validación manual debe comprobar en escritorio y móvil que los avatares sean circulares, que los rostros queden priorizados según el encuadre B y que las tarjetas no cambien de tamaño o alineación.

## Criterios de aceptación

- Las dos tarjetas muestran las fotos correctas con el encuadre B aprobado.
- Las fotos son accesibles y mantienen las rutas locales del proyecto.
- Los perfiles textuales y el diseño de las tarjetas se conservan.
- La suite de pruebas y `git diff --check` finalizan sin errores.
