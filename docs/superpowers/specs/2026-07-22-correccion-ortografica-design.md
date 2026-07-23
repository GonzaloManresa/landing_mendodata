# Corrección ortográfica integral de la landing

## Objetivo

Normalizar la ortografía, la acentuación y la puntuación de todos los textos de la landing, sin modificar su mensaje, tono, diseño ni comportamiento.

## Alcance

- Corregir el título y la descripción para buscadores.
- Corregir los textos visibles, encabezados, botones, etiquetas, textos alternativos y mensajes del formulario en `index.html`.
- Corregir los textos que las pruebas validan literalmente en `tests/landing.test.mjs`.
- Mantener nombres propios, marcas, enlaces, clases, identificadores, atributos técnicos y la estructura HTML sin cambios salvo que formen parte de contenido humano legible.

## Enfoque

Se hará una revisión manual de los textos en español y se aplicarán cambios mínimos: tildes requeridas (por ejemplo, «análisis», «automatización», «información» y «cómo»), puntuación y usos ortotipográficos evidentes. No se reescribirá el contenido ni se cambiará el voseo empleado por la landing.

## Validación

Se ejecutarán las pruebas de la landing y `git diff --check`. Además se revisará el diff final para confirmar que solo haya cambios de texto y ajustes correspondientes en las pruebas.
