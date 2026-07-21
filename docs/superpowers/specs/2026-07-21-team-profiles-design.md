# Actualización de perfiles del equipo

## Contexto

La sección “Nosotros” de la landing ya presenta dos tarjetas con las iniciales `JD` y `GM`, pero todavía usa nombres genéricos y asigna las descripciones a roles que no corresponden a las personas reales.

## Objetivo

Presentar correctamente a los integrantes de MendoData y explicar de forma clara cómo se complementan, sin cambiar el diseño ni agregar contenido visual.

## Alcance

Conservar sin cambios:

- la estructura de dos tarjetas;
- las iniciales `JD` y `GM`;
- los estilos, colores, tipografías, espaciado y comportamiento responsive actuales;
- el título y texto introductorio de la sección;
- la nota final de la sección.

Actualizar la primera tarjeta a:

- nombre: `Juan Diego Caballero`;
- cargo: `Ingeniero en Sistemas`;
- descripción: `Construye las automatizaciones y sistemas para que la información llegue sola, sin que cambies tu forma de trabajar.`

Actualizar la segunda tarjeta a:

- nombre: `Gonzalo Manresa`;
- cargo: `Analista de Negocios`;
- descripción: `Transforma los datos de tu negocio en información clara para saber qué revisar primero y tomar mejores decisiones.`

## Fuera de alcance

- fotos reales o nuevos recursos gráficos;
- cambios de layout o estilos;
- cambios en la propuesta de valor, proceso, formulario, CTA o comportamiento JavaScript;
- cambios en los datos de contacto.

## Accesibilidad y comportamiento

Las iniciales continúan siendo decorativas mediante `aria-hidden="true"`. No se agrega JavaScript, interacción ni nuevos controles.

## Validación

Las pruebas automatizadas deben comprobar que los nombres, cargos y descripciones exactas estén presentes y que los nombres genéricos `Nombre Apellido` no permanezcan en la sección.

La validación manual debe confirmar que ambas tarjetas conservan su presentación en escritorio y móvil.

## Criterios de aceptación

- Juan Diego Caballero figura como Ingeniero en Sistemas y su descripción se enfoca en automatización y sistemas.
- Gonzalo Manresa figura como Analista de Negocios y su descripción se enfoca en análisis para la toma de decisiones.
- La sección conserva el diseño aprobado y no incorpora nuevos elementos visuales o interactivos.
- Las pruebas de la landing y `git diff --check` finalizan sin errores.
