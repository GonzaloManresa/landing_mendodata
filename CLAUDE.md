# MendoData — Instrucciones para Claude Code

La fuente de verdad completa del proyecto es:

`docs/MendoData-Blueprint-Maestro.md`

Los mockups visuales están en:

`docs/mockups/`

Este archivo contiene reglas operativas globales para trabajar sobre la web de MendoData sin releer innecesariamente todo el documento maestro en cada tarea.

---

## 1. Forma de trabajo

- Trabajar sobre el código existente.
- No reconstruir el sitio desde cero salvo necesidad técnica real.
- Antes de modificar una sección, revisar brevemente la implementación actual y reutilizar lo que ya funcione.
- Implementar una sección o bloque por vez.
- No modificar otras secciones salvo que sea estrictamente necesario para integrar la tarea actual.
- No avanzar a la siguiente sección sin indicación.
- Mantener desktop, tablet y mobile desde el comienzo.

---

## 2. Uso del Blueprint Maestro

El archivo:

`docs/MendoData-Blueprint-Maestro.md`

es la fuente de verdad funcional y de contenido.

No releer todo el documento maestro innecesariamente.

Para cada tarea:

1. Buscar la sección específica dentro del Blueprint Maestro.
2. Leer únicamente:
   - reglas globales necesarias;
   - blueprint de la página o sección solicitada;
   - criterios de aceptación relacionados.
3. Revisar el mockup correspondiente.
4. Implementar solamente el alcance solicitado.

Si existe una diferencia entre fuentes, usar esta prioridad:

1. Blueprint específico de la sección.
2. Reglas globales del Blueprint Maestro.
3. Mockup visual aprobado.
4. Implementación actual.
5. Criterio técnico.

La instrucción más específica y aprobada tiene prioridad.

---

## 3. Uso de los mockups

Los mockups se encuentran en:

`docs/mockups/`

Sirven principalmente como referencia de:

- composición;
- jerarquía;
- proporciones;
- espaciado;
- estilo visual.

No gobiernan:

- copy;
- rutas;
- cantidad de elementos;
- integrantes;
- datos reales;
- comportamiento funcional.

Si el mockup contradice el blueprint:

PREVALECE EL BLUEPRINT.

No copiar errores de texto, datos inventados o elementos desactualizados presentes en mockups anteriores.

---

## 4. Arquitectura pública V1

Existen exactamente tres páginas públicas principales:

Home:

`/`

Proyectos:

`/proyectos`

Legal:

`/legal`

Contacto NO es una página independiente.

El formulario principal vive en:

`/#contacto`

No crear:

`/contacto`

Todos los CTA globales que deban dirigir al formulario desde otra página deben utilizar:

`/#contacto`

---

## 5. Navegación principal

Header global:

Logo → `/`

Soluciones → `/#soluciones`

Proyectos → `/proyectos`

Cómo trabajamos → `/#como-trabajamos`

Equipo → `/#equipo`

CTA:

“Contanos tu caso”

→ `/#contacto`

No utilizar Calendly como CTA público.

---

## 6. Componentes globales

Reutilizar un único:

- Header;
- Footer;
- botón flotante de WhatsApp;
- sistema visual;
- configuración de navegación.

No crear versiones independientes por página sin necesidad.

---

## 7. WhatsApp

Debe existir una única configuración global para:

- número;
- URL;
- mensaje inicial;
- comportamiento.

Reutilizarla en:

- botón flotante;
- Contacto de Home;
- CTA final de Proyectos;
- Footer.

No inventar número, URL o mensaje.

No hardcodear configuraciones diferentes en varios componentes.

---

## 8. Formulario comercial

Existe un único formulario comercial principal.

Ubicación:

`/#contacto`

Campos:

1. Nombre.
2. Email.
3. Empresa o rubro — opcional.
4. Mensaje.

No crear formularios duplicados.

No agregar campos sin aprobación.

Conservar la lógica funcional existente cuando funcione correctamente.

---

## 9. Calendly

No utilizar Calendly públicamente.

No agregar:

- botones;
- embeds;
- iframes;
- popups;
- redirecciones automáticas;
- enlaces públicos de agenda.

La coordinación de una conversación ocurre posteriormente cuando corresponda.

---

## 10. Equipo

El equipo público actual está formado únicamente por:

- Juan Diego Caballero — Ingeniero en Software.
- Gonzalo Manresa — Analista de Negocios.
- Leandro Hirschegger — Marketing y Desarrollo Comercial.

Julián Fierro NO debe aparecer.

Eliminar referencias antiguas también de:

- arrays;
- JSON;
- mocks;
- placeholders;
- alt text;
- datos ocultos;
- componentes antiguos.

---

## 11. Contenido real

No inventar:

- clientes;
- proyectos;
- resultados;
- métricas;
- testimonios;
- tecnologías utilizadas;
- certificaciones;
- logos;
- información empresarial;
- información legal.

Cuando falte información real:

dejarla pendiente.

No completar contenido solamente para llenar espacio.

---

## 12. Proyecto real actual

Proyecto:

“Control de inventario y sucursales”

Estado público:

“Proyecto real anonimizado”

No publicar identidad del cliente sin autorización.

No inventar:

- porcentajes;
- ROI;
- ahorro de horas;
- cantidad de usuarios;
- cantidad de sucursales;
- tecnologías;
- métricas.

Utilizar únicamente información documentada en el blueprint específico.

---

## 13. Sistema visual

Mantener la identidad actual de MendoData.

Priorizar:

- navy / azul profundo;
- azul de acción;
- fondos blancos o muy claros;
- superficies limpias;
- bordes suaves;
- sombras discretas;
- espacio en blanco;
- estética tecnológica;
- sensación profesional y cercana.

No rediseñar completamente la identidad.

Evitar estética:

- cyberpunk;
- excesivamente futurista;
- corporativa genérica;
- cargada de efectos.

---

## 14. Responsive

Toda implementación debe funcionar en:

- desktop;
- tablet;
- mobile.

No considerar mobile como una simple reducción del desktop.

Evitar siempre:

- scroll horizontal;
- textos cortados;
- interfaces ilegibles;
- botones fuera de pantalla;
- superposición del WhatsApp;
- elementos desbordados.

Seguir el comportamiento responsive definido en cada blueprint específico.

---

## 15. Accesibilidad

Implementar como mínimo:

- HTML semántico;
- un solo H1 por página;
- jerarquía correcta de headings;
- navegación mediante teclado;
- focus visible;
- contraste suficiente;
- labels reales en formularios;
- alt adecuado para imágenes relevantes;
- nombres accesibles para botones de íconos;
- áreas táctiles cómodas;
- soporte para `prefers-reduced-motion`.

---

## 16. Imágenes y material visual

Prioridad:

1. Material real aprobado.
2. Material real anonimizado.
3. Mockup basado en una solución real.
4. Demostración ilustrativa.

No utilizar como evidencia:

- capturas falsas presentadas como reales;
- métricas inventadas;
- nombres de clientes;
- información sensible;
- logos sin autorización.

Cuando un visual conceptual pueda confundirse con algo real, identificarlo correctamente.

---

## 17. SEO

Páginas públicas:

`/`

`/proyectos`

`/legal`

No crear metadata para `/contacto`.

Home:

Title:

`MendoData | Sistemas, automatización y datos`

Meta description:

`Desarrollamos sistemas, automatizaciones y soluciones de datos para ordenar procesos, reducir errores y mejorar el control operativo.`

Proyectos:

Title:

`Proyectos | MendoData`

Meta description:

`Conocé proyectos reales de MendoData y cómo convertimos necesidades operativas en sistemas, automatizaciones y soluciones de datos.`

Legal:

Title:

`Privacidad y cookies | MendoData`

Meta description:

`Información sobre privacidad, tratamiento de datos y cookies del sitio de MendoData.`

---

## 18. Analytics

Antes de implementar nueva analítica:

revisar qué sistema ya existe.

Eventos globales previstos cuando corresponda:

- `cta_click`
- `form_start`
- `form_submit`
- `whatsapp_click`

No crear eventos innecesarios.

No enviar información personal a analítica.

---

## 19. UTM

Si existen parámetros:

- `utm_source`
- `utm_medium`
- `utm_campaign`
- `utm_content`

preservarlos cuando sea posible hasta el envío del formulario.

No mostrarlos al usuario.

No solicitar UTMs mediante campos visibles.

---

## 20. Cookies

No crear automáticamente un banner genérico.

Primero revisar:

- cookies;
- analytics;
- scripts externos;
- localStorage;
- sessionStorage;
- píxeles;
- embeds.

Mostrar “Configurar cookies” únicamente si existe un sistema real y funcional de preferencias.

La implementación debe coincidir con `/legal`.

---

## 21. Performance

Evitar:

- librerías innecesarias;
- imágenes enormes;
- animaciones pesadas;
- videos automáticos;
- múltiples fuentes innecesarias;
- JavaScript para funciones simples que puedan resolverse con HTML/CSS.

Priorizar:

- carga rápida;
- estabilidad visual;
- imágenes optimizadas;
- lazy loading debajo del primer viewport.

---

## 22. No agregar funcionalidades fuera de alcance

No crear sin aprobación:

- blog;
- newsletter;
- login;
- buscador;
- filtros;
- páginas individuales de servicios;
- páginas individuales de proyectos;
- CRM nuevo;
- CMS complejo;
- chatbot;
- agenda pública;
- nueva página de contacto.

---

## 23. Proceso de implementación por sección

Cuando se solicite implementar una sección:

1. Leer este archivo.
2. Buscar y leer únicamente el blueprint específico solicitado dentro de `docs/MendoData-Blueprint-Maestro.md`.
3. Revisar el mockup correspondiente dentro de `docs/mockups/`.
4. Revisar la implementación existente.
5. Implementar solo esa sección.
6. Adaptar desktop, tablet y mobile.
7. Verificar errores y funcionamiento.
8. Informar archivos modificados.
9. Informar pendientes reales.
10. No avanzar a la siguiente sección sin indicación.

---

## 24. Verificación al terminar cada tarea

Antes de dar una sección por terminada:

- comprobar que compile;
- revisar consola;
- revisar desktop;
- revisar tablet;
- revisar mobile;
- revisar overflow;
- revisar links;
- revisar anchors;
- revisar estados interactivos;
- revisar accesibilidad básica;
- comprobar que no se haya inventado contenido;
- comprobar que no se hayan modificado otras secciones innecesariamente.

---

## 25. Regla final

Ante una duda:

claridad > decoración

simplicidad > funcionalidad innecesaria

contenido pendiente > contenido inventado

reutilizar código correcto > reconstruir

blueprint específico > mockup visual

funcionamiento > efectos
