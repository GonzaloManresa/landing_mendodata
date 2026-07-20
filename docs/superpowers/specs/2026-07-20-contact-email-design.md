# Configuración del correo de contacto

## Objetivo

Configurar el formulario público para que las consultas lleguen a
`mendodata@gmail.com` mediante FormSubmit, con protección anti-spam.

## Decisión aprobada

- Cambiar el atributo `action` del formulario a
  `https://formsubmit.co/mendodata@gmail.com`.
- Eliminar el campo oculto `_captcha=false` para restaurar el reCAPTCHA que
  FormSubmit habilita por defecto.
- Mantener el honeypot `_honey` como segunda barrera contra bots.
- Mantener el asunto `Nueva consulta desde la web` y la plantilla `table`.
- Mantener los campos actuales: nombre, email, negocio y mensaje.
- Actualizar el comentario del HTML para que deje de presentar el correo como
  placeholder.

## Flujo de datos

1. El visitante completa el formulario.
2. FormSubmit valida la solicitud y aplica su protección anti-spam.
3. FormSubmit reenvía los datos a `mendodata@gmail.com`.
4. La dirección ingresada por el visitante queda disponible para responderle.

## Activación

FormSubmit requiere un primer envío desde el formulario. Ese envío genera un
correo de activación en `mendodata@gmail.com`; el propietario debe abrirlo y
confirmar la dirección. No se enviará ni confirmará ese correo automáticamente
durante la implementación.

## Verificación

- Una prueba automatizada exige el destino exacto
  `https://formsubmit.co/mendodata@gmail.com`.
- Una prueba automatizada confirma que `_captcha=false` ya no existe.
- Se conservan el método POST, el asunto, la plantilla y el honeypot.
- La suite completa continúa pasando.
- La landing responde con HTTP `200` y muestra el formulario sin cambios visuales.

## Alcance excluido

- Enviar el primer formulario o activar FormSubmit en nombre del usuario.
- Añadir AJAX, JavaScript, autorespuestas, copias CC o una página de agradecimiento.
- Sustituir el correo visible por el endpoint aleatorio de FormSubmit; puede hacerse
  después de la activación si el usuario proporciona ese identificador.
- Cambiar el diseño, copy o campos visibles del formulario.
