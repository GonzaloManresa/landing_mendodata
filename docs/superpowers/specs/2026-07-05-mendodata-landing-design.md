# Diseno de landing para MendoData

## Objetivo

Armar una landing page estatica para MendoData, orientada a duenios de negocios chicos: pizzerias, cafes, canchas, comercios y PyMEs similares.

La pagina tiene que comunicar un solo problema de fondo: el duenio no sabe que pasa en su negocio cuando no esta fisicamente ahi. Las consecuencias emocionales y practicas son perdida de plata, ansiedad y falta de tiempo libre real.

## Reglas de comunicacion

- No mencionar producto, tecnologia, portal, IA, sistema, dashboard ni datos.
- Hablar del dolor real, no del mecanismo.
- Mantener un solo problema central; los rubros son ejemplos, no mensajes distintos.
- Usar un tono cercano, informal y rioplatense.
- Evitar lenguaje de startup tech y lenguaje corporativo.
- Mantener el copy directo y corto.

## Direccion de marca

- Nombre: MendoData.
- Logo: conservar el concepto del icono de montania con grafico de barras ascendente.
- Tipografia: no usar tipografia cursiva.
- Paleta:
  - Montania: terracota `#C1502E`.
  - Barras del grafico: verde oliva `#6B7548`.
  - Detalle/circulo de acento: verde oliva claro `#A9B481`.
  - Texto `MendoData`: marron oscuro/carbon `#3A362E`.
  - Fondo, si aplica: crema `#F5F1E8`.
- Direccion visual: cercana, simple y sobria; evitar una estetica tech azulada o demasiado corporativa.

## Estructura de la pagina

1. Hero
   - Promesa principal: `Tu negocio funciona, vos tambien podes desconectar`.
   - El texto de apoyo debe nombrar la ansiedad de estar lejos sin sobreexplicar.
   - El CTA debe llevar a una accion de contacto simple.

2. Ejemplo del finde
   - Usar un mockup con formato de telefono actualizado, legible y moderno.
   - Mostrar mensajes del finde ordenados para el lunes.
   - El ejemplo debe hacer concreto el beneficio sin explicar ningun mecanismo.

3. Antes y despues
   - Mostrar de forma explicita el cambio entre estar encima de todo y saber que mirar.
   - El "antes" debe incluir mensajes sueltos, dudas, lunes lento y descanso interrumpido.
   - El "despues" debe incluir prioridades claras, calma y una idea simple de accion.

4. Cuatro dolores concretos
   - Bloques cortos para:
     - No saber si se perdio plata.
     - Perseguir novedades por mensajes.
     - Descansar con culpa o ansiedad.
     - Arrancar el lunes apagando incendios.

5. Quienes somos, mision y vision
   - Incluir una seccion institucional breve y humana.
   - Explicar que MendoData acompania a duenios de negocios chicos que terminan haciendo de todo.
   - Mision: menos ruido, menos ansiedad y mas claridad para decidir.
   - Vision: que crecer no signifique vivir preso del local, del telefono o de la duda.

6. Proyectos
   - Mostrar proyectos por tipo de negocio sin convertir cada rubro en un mensaje separado.
   - Nombrar problematicas concretas: cierres flojos, faltantes, turnos que cambian y estar pendiente fuera de horario.

7. Mensajes de clientes y testimonios
   - Usar testimonios breves centrados en el dolor y el alivio.
   - Si no hay nombres reales aprobados, usar rubros/cargos genericos en vez de inventar clientes.

8. Promesa de cierre
   - Reforzar el resultado emocional: el duenio puede irse, descansar y volver con claridad.
   - Mantenerlo humano y corto.

9. Formulario de contacto
   - Campos simples: nombre, negocio, contacto y mensaje.
   - El copy del CTA debe sentirse conversacional, no vendedor.

## Interaccion e implementacion

- HTML/CSS estatico alcanza, salvo que el proyecto existente requiera un framework.
- El formulario puede ser presentacional por ahora si no existe un endpoint.
- La pagina debe ser responsive para mobile y desktop.
- La primera pantalla debe mostrar marca, promesa y CTA de contacto.
- El mockup del telefono y el icono de marca pueden construirse con HTML/CSS y formas tipo SVG si no hay assets disponibles.
- Las transiciones deben mejorar lectura y usabilidad, no tapar contenido ni bloquear navegacion.
- Respetar `prefers-reduced-motion` para usuarios que prefieren menos movimiento.

## Revision 2026-07-05 (segunda direccion visual, aprobada)

El objetivo de esta revision es que en los primeros 3 segundos el visitante sienta
que le puede confiar su problema a alguien que lo entiende, no que esta frente a una
empresa de tecnologia. Cambios aprobados por el usuario:

- Paleta nueva calida: fondo blanco apenas cremoso `#FBF9F5`, tinta carbon `#211E1A`,
  y un unico acento naranja `#F2994A` reservado solo para CTA y detalles clave (nunca
  como fondo grande). Se retira el uso protagonico de terracota/oliva/crema. El logo
  se adapta a naranja + carbon.
- Tipografia: titulos en sans humanista redondeada (Nunito), texto en sans limpia
  (Inter). Sin fuentes tecnicas ni cursivas de titulo.
- Se quita el fondo de grilla tipo papel milimetrado (lee como "tech").
- Jerarquia de confianza: 1) promesa emocional corta + foto real de quien esta detras
  (reemplaza el mockup de telefono en el hero); 2) el ejemplo concreto (telefono) sube
  a ser lo primero despues del hero, como prueba; 3) los 4 dolores; 4) quienes somos y
  equipo; 5) cierre humano.
- Cierre: se elimina el formulario. El contacto es solo un boton grande de WhatsApp
  (`wa.me`) con copy hablado tipo "Contame tu problema".
- Sensacion: el contenido arriba del fold se ve al instante (no depende de reveals),
  reveals mas suaves abajo, menos simetria tipo plantilla SaaS, cero iconos abstractos,
  copy en voseo hablado. Se respeta `prefers-reduced-motion`.
- Assets pendientes del usuario: foto real (`equipo.jpg`) y numero de WhatsApp.

## Direccion aprobada

Usar la direccion visual mostrada en el companion del navegador el 5 de julio de 2026 como base estructural: corta, emocional, con hero fuerte y mockup de telefono. La paleta vigente es terracota, verdes oliva, marron oscuro/carbon y crema. El usuario aprobo luego la opcion A de expansion: telefono mas actualizado, antes/despues claro, quienes somos, mision, vision, proyectos, mensajes de clientes y testimonios.
