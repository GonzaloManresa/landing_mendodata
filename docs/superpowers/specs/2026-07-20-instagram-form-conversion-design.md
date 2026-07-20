# Optimización de conversión desde Instagram

## Contexto

La landing de MendoData recibe principalmente visitas desde Instagram. El objetivo de este cambio es convertir una mayor proporción de esas visitas, mayormente móviles, en consultas enviadas mediante el formulario existente.

La página ya explica la propuesta, presenta un ejemplo, describe el proceso, presenta al equipo y cierra con un formulario funcional. El cambio debe reforzar el recorrido hacia ese formulario sin reemplazar la estructura ni alterar la identidad visual aprobada.

## Objetivo

Hacer que una persona que llega desde Instagram:

1. entienda rápidamente el beneficio de MendoData;
2. encuentre una acción clara para contar su necesidad;
3. pueda volver al formulario desde puntos relevantes de la página;
4. complete el formulario actual sin pasos ni canales adicionales.

## Alcance

### Hero

- Mantener la composición, tipografías, colores y espaciado actuales.
- Cambiar el título principal a: “Más control de tu negocio, menos tiempo reuniendo información”.
- Agregar como texto de apoyo: “Organizamos tus datos y automatizamos tareas para que puedas decidir con claridad y trabajar con más tranquilidad.”
- Cambiar el CTA principal a “Contanos qué necesitás”, enlazado a `#contacto`.
- Mantener “Ver un ejemplo” como CTA secundario, enlazado a `#ejemplo`.

### CTA intermedio

Agregar después de la sección del ejemplo un bloque breve con:

- título: “¿Te gustaría tener esta claridad en tu negocio?”;
- texto: “Contanos cómo trabajás hoy y evaluamos dónde podemos ayudarte.”;
- botón: “Contanos tu caso”, enlazado a `#contacto`.

El bloque debe reutilizar el sistema visual existente y no introducir una estética nueva.

### CTA móvil persistente

- Agregar un enlace fijo en la parte inferior de la pantalla con el texto “Contanos tu caso”.
- Mostrarlo únicamente en viewport de hasta `640px`, en línea con el breakpoint móvil existente.
- Enlazarlo a `#contacto`.
- Ocultarlo cuando la sección `#contacto` sea visible y volver a mostrarlo al salir de esa sección.
- Reservar separación segura respecto de los bordes del dispositivo y evitar que tape contenido interactivo.
- Mantener el enlace funcional aunque `IntersectionObserver` no esté disponible; en ese caso puede permanecer visible.

### Formulario

Conservar sin cambios funcionales:

- los campos Nombre, Email, Negocio opcional y Mensaje;
- el método `POST`;
- el destino `https://formsubmit.co/mendodata@gmail.com`;
- `_subject="Nueva consulta desde la web"`;
- `_template="table"`;
- el campo trampa `_honey`;
- el CAPTCHA predeterminado de FormSubmit.

Ningún CTA debe enviar el formulario automáticamente. Todos deben limitarse a navegar a `#contacto`.

## Comportamiento y accesibilidad

- Aplicar `scroll-margin-top` a la sección de contacto para que el encabezado fijo no tape su título al navegar por ancla.
- Reutilizar el desplazamiento suave existente.
- Respetar `prefers-reduced-motion`, que ya desactiva el desplazamiento animado.
- Implementar el ocultamiento del CTA móvil con un `IntersectionObserver` independiente y acotado a `#contacto`.
- Marcar el estado oculto con una clase CSS; el script no debe interceptar clics ni envíos.
- El CTA móvil debe conservar foco visible, contraste suficiente y un área táctil de al menos 44 px de alto.

## Fuera de alcance

- WhatsApp u otros canales de contacto.
- Ventanas emergentes.
- Una segunda landing exclusiva para Instagram.
- Analítica, píxeles publicitarios o seguimiento de conversiones.
- Cambios en la cantidad de campos del formulario.
- Promesas nuevas sobre tiempos de respuesta, resultados o diagnósticos gratuitos.
- Rediseño general de la página.

## Manejo de fallos

- Si JavaScript no carga, todos los CTA normales y el CTA móvil deben seguir enlazando al formulario.
- Si `IntersectionObserver` no existe, no se debe producir un error; únicamente se omite el ocultamiento automático del CTA móvil.
- Los errores propios del envío continúan bajo el flujo estándar de FormSubmit; este cambio no incorpora AJAX ni una pantalla de confirmación propia.

## Validación

Las pruebas automatizadas deben comprobar:

- los textos aprobados del hero y del CTA intermedio;
- que todos los CTA de conversión enlacen a `#contacto`;
- que el CTA móvil exista y esté limitado por CSS a `max-width: 640px`;
- que el observador alterne su estado al entrar o salir de `#contacto`;
- que el formulario conserve exactamente sus cuatro campos visibles y la configuración aprobada de FormSubmit;
- que no se incorporen WhatsApp, pop-ups, AJAX ni seguimiento analítico.

La validación manual debe cubrir una pantalla móvil y una de escritorio, navegación por teclado, foco visible, desplazamiento hasta el formulario y ausencia de superposición del CTA móvil sobre el formulario.

## Criterios de aceptación

- El mensaje inicial comunica de forma directa el beneficio para el negocio.
- Hay CTA hacia el formulario en el hero, después del ejemplo y de forma persistente en móvil.
- El CTA móvil desaparece mientras la sección de contacto está visible.
- El formulario mantiene la configuración funcional ya aprobada.
- La apariencia general de la landing permanece consistente con el diseño actual.
- La suite de pruebas y `git diff --check` finalizan sin errores.
