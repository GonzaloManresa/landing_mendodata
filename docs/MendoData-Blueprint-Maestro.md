# MendoData — Blueprint Maestro

- Página Web - Mendodata ✅
    - 01. Qué debe lograr y cómo debe ser la página web ✅
        
        ```jsx
        # 01. Qué debe lograr y cómo debe ser la página web
        
        La web de MendoData debe funcionar principalmente como una herramienta de confianza y conversión.
        
        El visitante debe poder entender rápidamente:
        
        - qué hace MendoData;
        - qué problemas empresariales podemos ayudar a resolver;
        - qué tipo de soluciones podemos construir;
        - cómo trabajamos;
        - qué experiencia y proyectos tenemos;
        - quién está detrás de la empresa;
        - cómo contactarnos.
        
        ## Posicionamiento
        
        MendoData es una empresa tecnológica B2B que desarrolla soluciones adaptadas a las necesidades de cada empresa.
        
        Primero entendemos el problema y el proceso del cliente. Después definimos qué solución y tecnología conviene utilizar.
        
        Las principales capacidades de MendoData son:
        
        - sistemas y aplicaciones a medida;
        - digitalización y automatización de procesos;
        - datos, indicadores e integraciones;
        - soluciones con tecnologías Microsoft cuando sean adecuadas.
        
        MendoData busca desarrollar progresivamente una especialización en operaciones, logística y distribución, pero la web no debe presentar a la empresa como exclusivamente logística.
        
        ## Criterios generales de comunicación
        
        La web debe sentirse:
        
        - clara;
        - profesional;
        - cercana;
        - moderna;
        - confiable;
        - fácil de entender para personas no técnicas.
        
        Priorizar problemas, beneficios, procesos y resultados antes que nombres de tecnologías.
        
        Evitar lenguaje corporativo exagerado, tecnicismos innecesarios y promesas genéricas.
        
        ## Criterios generales de diseño
        
        Mantener una identidad visual coherente en todo el sitio:
        
        - azul profundo / navy;
        - azul como color principal de acción;
        - fondos blancos o claros;
        - diseño limpio y ordenado;
        - buena utilización del espacio;
        - bordes y sombras suaves;
        - interfaces y proyectos como principales recursos visuales.
        
        La web debe funcionar correctamente en desktop, tablet y mobile.
        
        El diseño responsive forma parte de cada sección y no debe tratarse como una adaptación posterior.
        
        ## Confianza y evidencia
        
        Priorizar información y material real:
        
        - proyectos realizados;
        - capturas o demostraciones;
        - equipo real;
        - procesos reales;
        - resultados verificables;
        - testimonios únicamente cuando existan y estén autorizados.
        
        No inventar clientes, métricas, testimonios, resultados, certificaciones ni información que MendoData no pueda demostrar.
        
        Actualmente el equipo visible de MendoData está formado por tres personas:
        
        - Juan Diego Caballero;
        - Gonzalo Manresa;
        - Leandro Hirschegger.
        
        Julián Fierro no forma parte del equipo y no debe aparecer en la web.
        
        ## Conversión
        
        La web debe facilitar que una empresa interesada pueda iniciar una conversación con MendoData con pocos pasos.
        
        Los principales mecanismos de contacto serán:
        
        - formulario;
        - WhatsApp.
        
        Los CTA deben ser claros y consistentes.
        
        La web no debe obligar al visitante a agendar una reunión directamente.
        
        ## Criterio de implementación
        
        Priorizar:
        
        claridad → confianza → evidencia → contacto.
        
        No agregar páginas, secciones, funcionalidades, textos o elementos visuales que no estén definidos en los blueprints o que no aporten directamente a esos objetivos.
        
        Los blueprints específicos de cada página y sección tienen prioridad sobre estas instrucciones generales cuando definan comportamientos más concretos.
        ```
        
    - 02. Estructura y distribución de páginas ✅
        
        ```jsx
        # 02. Estructura y distribución de páginas
        
        La web de MendoData tendrá una estructura simple.
        
        ## Páginas principales
        
        ### 1. Home
        
        Ruta:
        
        `https://mendodata.online/`
        
        Función:
        
        Será la página principal de MendoData.
        
        Debe permitir que una persona entienda rápidamente:
        
        - qué hacemos;
        - qué problemas ayudamos a resolver;
        - qué soluciones desarrollamos;
        - proyectos y experiencia;
        - especialización en operaciones y logística;
        - cómo trabajamos;
        - quién forma parte del equipo;
        - cómo contactarnos.
        
        La Home contendrá las principales secciones comerciales de la web.
        
        También contendrá la principal sección de contacto del sitio.
        
        Contacto:
        
        `https://mendodata.online/#contacto`
        
        Canales principales:
        
        - formulario;
        - WhatsApp.
        
        No crear una página independiente `/contacto` en la versión V1.
        
        ---
        
        ### 2. Proyectos
        
        Ruta:
        
        `https://mendodata.online/proyectos`
        
        Función:
        
        Mostrar proyectos, soluciones desarrolladas y evidencia real del trabajo de MendoData.
        
        Debe permitir presentar progresivamente:
        
        - proyectos reales;
        - proyectos anonimizados cuando sea necesario;
        - problema inicial;
        - solución desarrollada;
        - funcionalidades;
        - capturas o demostraciones;
        - tecnologías utilizadas cuando estén confirmadas;
        - resultados verificables cuando existan.
        
        La Home podrá mostrar un proyecto destacado y dirigir desde allí a esta página.
        
        La página de Proyectos debe complementar la Home aportando mayor profundidad y evidencia.
        
        No debe convertirse en una copia de la Home.
        
        ---
        
        ### 3. Legal
        
        Ruta:
        
        `https://mendodata.online/legal`
        
        Función:
        
        Centralizar la información legal necesaria del sitio.
        
        Puede contener, según corresponda:
        
        - privacidad;
        - cookies;
        - información legal requerida.
        
        Anchors principales:
        
        `https://mendodata.online/legal#privacidad`
        
        `https://mendodata.online/legal#cookies`
        
        No inventar políticas, datos de responsables, herramientas instaladas ni información legal que todavía no haya sido definida o verificada.
        
        El contenido legal definitivo debe reflejar el funcionamiento real del sitio y las herramientas realmente utilizadas.
        
        ---
        
        ## Contacto
        
        Contacto no constituye una página independiente en la versión V1.
        
        El punto principal de contacto será la Sección 8 de la Home:
        
        `https://mendodata.online/#contacto`
        
        Los CTA globales que dirijan al formulario deben utilizar:
        
        `/#contacto`
        
        El visitante podrá iniciar una consulta mediante:
        
        - formulario;
        - WhatsApp.
        
        No debe obligarse al visitante a agendar una reunión directamente.
        
        No utilizar Calendly como CTA público principal.
        
        ---
        
        ## Navegación entre páginas
        
        La navegación debe ser simple y consistente.
        
        Las páginas públicas principales del sitio serán:
        
        `/`
        
        `/proyectos`
        
        `/legal`
        
        Contacto se resolverá mediante:
        
        `/#contacto`
        
        Las secciones internas de la Home utilizarán anclas.
        
        Principales destinos:
        
        `/#soluciones`
        
        `/#proyecto-destacado`
        
        `/#operaciones-logistica`
        
        `/#como-trabajamos`
        
        `/#equipo`
        
        `/#contacto`
        
        Antes de implementar los enlaces definitivos, reutilizar los identificadores reales definidos en los blueprints y en el código.
        
        No crear IDs duplicados.
        
        ---
        
        ## Navegación desde páginas internas
        
        Los componentes globales deben utilizar rutas completas hacia las secciones de la Home.
        
        Por ejemplo, desde:
        
        `/proyectos`
        
        o:
        
        `/legal`
        
        utilizar:
        
        `/#soluciones`
        
        `/#como-trabajamos`
        
        `/#equipo`
        
        `/#contacto`
        
        y no únicamente:
        
        `#soluciones`
        
        `#como-trabajamos`
        
        `#equipo`
        
        `#contacto`
        
        De esta manera el visitante vuelve correctamente a la Home y luego a la sección correspondiente.
        
        ---
        
        ## Componentes globales
        
        Todas las páginas deben compartir, cuando corresponda:
        
        - Header.
        - Footer.
        - Identidad visual.
        - Navegación.
        - Botón flotante de WhatsApp.
        - Configuración global de WhatsApp.
        - Criterios responsive.
        - Accesibilidad básica.
        - SEO técnico básico.
        - Medición y conservación de parámetros UTM si ya está implementada.
        
        Los componentes globales deben reutilizarse.
        
        No crear versiones independientes del Header, Footer o WhatsApp para cada página.
        
        ---
        
        ## Arquitectura definitiva V1
        
        La arquitectura pública queda formada por:
        
        ### Home
        
        `/`
        
        ### Proyectos
        
        `/proyectos`
        
        ### Legal
        
        `/legal`
        
        ### Contacto dentro de Home
        
        `/#contacto`
        
        No existe en V1:
        
        `/contacto`
        
        ---
        
        ## Criterio general
        
        No crear nuevas páginas porque sí.
        
        Agregar nuevas páginas o landing pages únicamente cuando exista una necesidad comercial, de contenido o de posicionamiento concreta.
        
        Priorizar:
        
        - claridad;
        - confianza;
        - evidencia;
        - contacto;
        - simplicidad.
        
        No agregar complejidad que no aporte valor.
        ```
        
    - 03. Página principal - Home ✅
        - Estructura ✅
            
            ```jsx
            # 03. Página principal - Home
            
            Ruta:
            
            `https://mendodata.online/`
            
            ## Objetivo
            
            La Home debe permitir que una persona entienda rápidamente qué hace MendoData, se identifique con los problemas que podemos resolver, conozca nuestras capacidades y encuentre evidencia suficiente para iniciar una consulta.
            
            El recorrido debe avanzar de forma simple:
            
            problema → solución → evidencia → especialización → forma de trabajo → equipo → contacto.
            
            ## Estructura de la Home
            
            ### Sección 1 — Hero / Promesa
            
            Presentar rápidamente qué hace MendoData, los principales beneficios y el CTA principal.
            
            ---
            
            ### Sección 2 — Problemas operativos que podemos ayudar a ordenar
            
            Mostrar situaciones con las que un potencial cliente pueda identificarse.
            
            No vender todavía una tecnología específica.
            
            ---
            
            ### Sección 3 — Soluciones que podemos construir
            
            Presentar las principales familias de soluciones:
            
            - sistemas y aplicaciones a medida;
            - digitalización y automatización;
            - datos e integraciones.
            
            La tecnología debe aparecer como medio para resolver problemas.
            
            ---
            
            ### Sección 4 — Proyecto destacado
            
            Mostrar evidencia concreta del trabajo de MendoData mediante un proyecto real, anonimizado o una demostración claramente identificada.
            
            Debe funcionar también como acceso a la página:
            
            `/proyectos`
            
            ---
            
            ### Sección 5 — Operaciones y logística
            
            Comunicar la experiencia y especialización progresiva de MendoData en operaciones, logística y distribución.
            
            No presentar a MendoData como exclusivamente logística.
            
            ---
            
            ### Sección 6 — Cómo trabajamos
            
            Explicar de manera simple el proceso de trabajo:
            
            entender el problema → definir la solución → desarrollar e implementar → acompañar.
            
            ---
            
            ### Sección 7 — Equipo
            
            Mostrar las personas que actualmente forman MendoData:
            
            - Juan Diego Caballero;
            - Gonzalo Manresa;
            - Leandro Hirschegger.
            
            MendoData es actualmente un equipo de tres personas.
            
            Julián Fierro no debe aparecer.
            
            ---
            
            ### Sección 8 — Contacto final
            
            Cerrar el recorrido comercial y facilitar una consulta.
            
            Acciones principales:
            
            - enviar formulario;
            - contactar por WhatsApp como alternativa.
            
            No obligar al visitante a agendar una reunión.
            
            ---
            
            ### Sección 9 — Footer
            
            Cerrar la página con:
            
            - identidad de MendoData;
            - navegación;
            - proyectos;
            - contacto;
            - redes sociales confirmadas;
            - privacidad y cookies.
            
            ## Componentes globales relacionados
            
            La Home también debe utilizar los componentes globales del sitio:
            
            - Header.
            - Navegación.
            - Botón flotante de WhatsApp.
            - Footer.
            - Sistema visual.
            - Responsive.
            - Accesibilidad.
            - Medición.
            
            El botón flotante de WhatsApp no constituye una sección de la Home. Es un componente global del sitio.
            
            ## Criterio general
            
            Cada sección tendrá su propio blueprint de implementación.
            
            No modificar el contenido, estructura o comportamiento de otras secciones al implementar una sección específica, salvo que sea necesario para mantener coherencia o funcionamiento global.
            
            Los mockups aprobados deben utilizarse como referencia visual junto con los blueprints.
            
            La versión mobile debe formar parte de la implementación desde el comienzo y no tratarse como una adaptación posterior.
            ```
            
        - Sección 1 — Hero / Promesa ✅
            
            ```jsx
            # BLUEPRINT DEFINITIVO — HOME / SECCIÓN 1: HERO + PROMESA
            
            ## Estado
            
            APROBADO.
            
            Utilizar este blueprint como versión definitiva de la Sección 1 de la Home.
            
            El mockup aprobado de esta sección debe utilizarse como referencia visual junto con estas instrucciones.
            
            No utilizar ni recuperar versiones anteriores o alternativas del Hero.
            
            ---
            
            # 1. Objetivo de la sección
            
            El Hero debe permitir que una persona entienda rápidamente:
            
            - qué hace MendoData;
            - qué tipo de problemas ayuda a resolver;
            - qué beneficios busca generar;
            - cuál es el siguiente paso para iniciar una conversación.
            
            MendoData no debe quedar posicionada alrededor de una única herramienta, tecnología, industria o problema.
            
            La idea central es:
            
            MendoData entiende primero la operación y después construye o implementa la solución tecnológica adecuada.
            
            El Hero debe generar interés y llevar a una consulta.
            
            No debe intentar explicar todos los servicios de MendoData.
            
            ---
            
            # 2. Estructura
            
            La sección estará compuesta por:
            
            1. Pre-título.
            2. Título principal H1.
            3. Descripción.
            4. CTA principal.
            5. Frase de refuerzo.
            6. Visual principal.
            7. Franja inferior de confianza.
            
            ---
            
            # 3. Copy definitivo
            
            ## Pre-título
            
            Utilizar exactamente:
            
            “Sistemas, automatización y datos para ordenar y mejorar procesos operativos.”
            
            Debe funcionar como contextualización breve de lo que hace MendoData.
            
            No darle mayor jerarquía que al H1.
            
            ---
            
            ## H1
            
            Utilizar exactamente:
            
            “Ordenamos y digitalizamos procesos para que tu empresa gane tiempo, reduzca errores y tenga más control.”
            
            Este debe ser el único H1 de la página.
            
            Debe ser el elemento textual con mayor jerarquía del Hero.
            
            La lectura debe destacar especialmente:
            
            - Ordenamos y digitalizamos procesos.
            - gane tiempo;
            - reduzca errores;
            - tenga más control.
            
            No modificar el texto para incorporar nombres de tecnologías.
            
            ---
            
            ## Descripción
            
            Utilizar exactamente:
            
            “Cuando la información está dispersa, las tareas son demasiado manuales o los procesos dependen de demasiadas personas, entendemos cómo funciona la operación y construimos e implementamos la solución adecuada.”
            
            Debe aparecer inmediatamente debajo del H1.
            
            Mantener un ancho de lectura cómodo.
            
            No convertirlo en un bloque de texto demasiado ancho.
            
            ---
            
            ## CTA principal
            
            Texto exacto:
            
            “Contanos qué necesitás resolver”
            
            Debe ser el único CTA principal del Hero.
            
            En la Home debe dirigir a la sección de contacto:
            
            `#contacto`
            
            Si el identificador real de la sección de contacto ya existe con otro nombre, reutilizar el identificador existente en lugar de duplicarlo.
            
            No debe:
            
            - abrir WhatsApp;
            - llevar a Calendly;
            - abrir una nueva pestaña;
            - iniciar una llamada automáticamente.
            
            El desplazamiento hacia el formulario puede ser suave siempre que se respete `prefers-reduced-motion`.
            
            ---
            
            ## Frase de refuerzo
            
            Utilizar exactamente:
            
            “Primero entendemos el problema. Después definimos la tecnología adecuada.”
            
            Debe aparecer debajo del CTA.
            
            Jerarquía secundaria.
            
            No debe parecer un botón ni un enlace.
            
            Su función es reforzar el diferencial de MendoData.
            
            ---
            
            # 4. Layout desktop
            
            Utilizar un layout principal de dos columnas siguiendo el mockup aprobado.
            
            ## Columna izquierda
            
            Orden:
            
            1. Pre-título.
            2. H1.
            3. Descripción.
            4. CTA.
            5. Frase de refuerzo.
            
            Debe ocupar aproximadamente entre 42% y 48% del ancho útil.
            
            Mantener suficiente espacio entre los elementos.
            
            El CTA debe ser visible dentro del primer viewport en una pantalla desktop normal.
            
            ---
            
            ## Columna derecha
            
            Mostrar el visual principal.
            
            Debe ocupar aproximadamente entre 52% y 58% del ancho útil.
            
            El visual debe tener mayor presencia que una simple ilustración decorativa, pero no competir con el mensaje principal.
            
            Ambas columnas deben sentirse equilibradas y verticalmente alineadas.
            
            No aumentar innecesariamente la altura del Hero.
            
            ---
            
            # 5. Visual principal
            
            ## Función
            
            El visual debe demostrar de manera inmediata que MendoData construye soluciones digitales aplicadas a operaciones reales.
            
            Debe transmitir conceptos como:
            
            - sistemas;
            - aplicaciones;
            - datos;
            - indicadores;
            - información organizada;
            - procesos digitales;
            - control operativo.
            
            No debe representar exclusivamente logística ni inventarios.
            
            ---
            
            ## Composición
            
            Seguir la composición general del mockup aprobado.
            
            Preferentemente mostrar:
            
            - una interfaz principal desktop o laptop;
            - y una interfaz secundaria mobile cuando aporte valor.
            
            El resultado debe sentirse como una solución empresarial real y moderna.
            
            ---
            
            ## Prioridad del material
            
            Utilizar en este orden:
            
            1. Material real de MendoData aprobado.
            2. Composición basada en interfaces reales.
            3. Mockup basado en una solución real.
            4. Placeholder visual provisional.
            
            Mientras no exista material definitivo, conservar el espacio y proporciones del visual aprobado.
            
            Identificador sugerido:
            
            `hero-visual`
            
            ---
            
            ## Restricciones
            
            No utilizar:
            
            - fotografías corporativas de stock;
            - personas genéricas trabajando;
            - logos de clientes sin autorización;
            - nombres de clientes no autorizados;
            - testimonios inventados;
            - certificaciones inexistentes;
            - métricas falsas;
            - resultados ficticios;
            - interfaces que parezcan pertenecer a un cliente real cuando sean conceptuales;
            - estética cyberpunk o futurista exagerada.
            
            Si el visual representa una demostración conceptual y puede confundirse con un proyecto real, identificarla discretamente como:
            
            “Demostración ilustrativa”
            
            ---
            
            # 6. Franja de confianza
            
            Inmediatamente debajo del bloque principal del Hero debe aparecer una franja compacta con tres argumentos.
            
            ## Elemento 1
            
            “Entendemos el proceso antes de desarrollar.”
            
            Ícono conceptual relacionado con:
            
            - análisis;
            - proceso;
            - comprensión.
            
            ---
            
            ## Elemento 2
            
            “Elegimos la tecnología según tu problema.”
            
            Ícono conceptual relacionado con:
            
            - herramientas;
            - selección;
            - tecnología.
            
            ---
            
            ## Elemento 3
            
            “Acompañamos la implementación.”
            
            Ícono conceptual relacionado con:
            
            - acompañamiento;
            - avance;
            - implementación.
            
            ---
            
            ## Desktop
            
            Mostrar los tres elementos en una única fila.
            
            Mantener:
            
            - misma jerarquía;
            - distribución equilibrada;
            - íconos simples;
            - separadores discretos si son necesarios.
            
            La franja debe sentirse integrada al Hero y no como tres tarjetas independientes pesadas.
            
            No incluir botones.
            
            ---
            
            # 7. Responsive / Mobile
            
            La adaptación mobile es obligatoria.
            
            Utilizar una sola columna.
            
            Orden:
            
            1. Pre-título.
            2. H1.
            3. Descripción.
            4. CTA.
            5. Frase de refuerzo.
            6. Visual.
            7. Franja de confianza.
            
            ## Criterios
            
            - mantener márgenes laterales cómodos;
            - evitar scroll horizontal;
            - mantener el H1 claramente legible;
            - evitar que el H1 genere una cantidad excesiva de líneas;
            - no reducir tipografías hasta tamaños incómodos;
            - hacer que el CTA tenga un área táctil amplia;
            - permitir que el CTA ocupe gran parte del ancho disponible si mejora la usabilidad;
            - mantener el visual después del mensaje y del CTA;
            - adaptar el visual sin cortar información importante;
            - evitar interfaces internas ilegibles;
            - mantener espacios verticales consistentes.
            
            La franja de confianza debe transformarse en tres filas o bloques compactos verticales.
            
            No utilizar carrusel para estos tres elementos.
            
            ---
            
            # 8. Tablet
            
            Entre desktop y mobile, adaptar progresivamente las columnas.
            
            Mantener dos columnas únicamente mientras texto y visual conserven buena legibilidad.
            
            Cuando el ancho resulte insuficiente, pasar al layout vertical utilizado en mobile.
            
            No comprimir artificialmente las columnas para conservar el diseño desktop.
            
            ---
            
            # 9. Estilo visual
            
            Respetar el sistema visual general definido para MendoData y el mockup aprobado.
            
            Priorizar:
            
            - navy / azul profundo;
            - azul de acción;
            - fondos claros;
            - superficies limpias;
            - bordes suaves;
            - sombras sutiles;
            - tipografía clara;
            - bastante espacio en blanco;
            - sensación de orden;
            - aspecto tecnológico pero cercano.
            
            No reinterpretar esta sección con una estética diferente al resto de la Home.
            
            ---
            
            # 10. Interacciones
            
            El CTA debe tener como mínimo:
            
            - estado hover;
            - estado focus visible;
            - estado active;
            - cursor adecuado;
            - transición discreta.
            
            No agregar animaciones decorativas que distraigan.
            
            Si existen animaciones de entrada, deben ser sutiles y respetar:
            
            `prefers-reduced-motion`
            
            ---
            
            # 11. Accesibilidad
            
            Implementar:
            
            - un único H1;
            - estructura HTML semántica;
            - contraste suficiente;
            - foco visible;
            - navegación mediante teclado;
            - área táctil adecuada en mobile;
            - texto alternativo cuando el visual transmita información relevante;
            - elementos puramente decorativos ocultos para tecnologías asistivas cuando corresponda.
            
            Texto alternativo provisional del visual:
            
            “Interfaz digital para organizar procesos operativos, información y datos empresariales.”
            
            Actualizarlo cuando se utilice un visual definitivo.
            
            ---
            
            # 12. Medición
            
            Si el proyecto ya dispone de analítica, registrar el clic del CTA utilizando el sistema existente.
            
            Evento sugerido:
            
            `cta_click`
            
            Datos mínimos:
            
            - `page: home`
            - `section: hero`
            - `cta_name: consulta`
            - `destination: contacto`
            
            No crear una infraestructura nueva de analítica únicamente para esta sección.
            
            Mantener parámetros de atribución/UTM si el sistema global ya los utiliza.
            
            ---
            
            # 13. Relación con componentes globales
            
            El Header y el botón flotante de WhatsApp son componentes globales y no forman parte del Hero.
            
            No recrearlos dentro de esta sección.
            
            El WhatsApp flotante puede permanecer visible mientras se visualiza el Hero, pero:
            
            - no debe tapar el CTA;
            - no debe competir visualmente con él;
            - no debe agregarse un segundo botón de WhatsApp dentro del Hero.
            
            Las especificaciones completas de WhatsApp se definirán en su blueprint global correspondiente.
            
            ---
            
            # 14. No hacer
            
            No:
            
            - cambiar el copy aprobado;
            - agregar un segundo CTA principal;
            - agregar botón de WhatsApp dentro del Hero;
            - agregar Calendly;
            - enumerar tecnologías en el H1;
            - centrar el posicionamiento exclusivamente en Microsoft;
            - centrar el posicionamiento exclusivamente en logística;
            - sumar métricas sin evidencia;
            - agregar testimonios;
            - agregar logos de clientes sin autorización;
            - utilizar fotografías de stock;
            - modificar otras secciones de la Home;
            - crear páginas nuevas desde esta implementación.
            
            ---
            
            # 15. Criterios de aceptación
            
            La sección estará terminada cuando:
            
            - respete el copy aprobado;
            - sea clara en pocos segundos;
            - explique que MendoData ordena y digitaliza procesos;
            - comunique los beneficios de tiempo, reducción de errores y control;
            - el CTA lleve correctamente a Contacto;
            - exista un único CTA principal;
            - el visual represente soluciones digitales sin limitar a MendoData a una sola tecnología;
            - la franja de confianza contenga exactamente los tres mensajes definidos;
            - funcione correctamente en desktop, tablet y mobile;
            - no exista scroll horizontal;
            - ningún elemento se superponga;
            - mantenga la identidad visual general;
            - cumpla los criterios básicos de accesibilidad;
            - no se haya inventado información;
            - no se hayan modificado otras secciones innecesariamente.
            
            ---
            
            # 16. Resumen visual
            
            DESKTOP
            
            [ Header global ]
            
            ┌──────────────────────────────┬──────────────────────────────┐
            │ Pre-título                   │                              │
            │                              │                              │
            │ H1                           │      Visual principal        │
            │                              │                              │
            │ Descripción                  │    Desktop + mobile /        │
            │                              │    interfaz empresarial      │
            │ [ CTA principal ]            │                              │
            │ Frase de refuerzo            │                              │
            └──────────────────────────────┴──────────────────────────────┘
            
            [ Entendemos el proceso ]
            [ Elegimos la tecnología ]
            [ Acompañamos la implementación ]
            
            MOBILE
            
            Pre-título
            
            H1
            
            Descripción
            
            [ CTA principal ]
            
            Frase de refuerzo
            
            [ Visual principal ]
            
            [ Entendemos el proceso ]
            [ Elegimos la tecnología ]
            [ Acompañamos la implementación ]
            ```
            
        - Sección 2 — Problemas operativos que podemos ayudar a ordenar ✅
            
            ```jsx
            # BLUEPRINT DEFINITIVO — HOME / SECCIÓN 2: PROBLEMAS OPERATIVOS
            
            ## Estado
            
            APROBADO.
            
            Utilizar este blueprint como versión definitiva de la Sección 2 de la Home.
            
            El mockup aprobado de esta sección debe utilizarse como referencia visual junto con estas instrucciones.
            
            ---
            
            # 1. Nombre e identificador
            
            Nombre:
            
            “Problemas operativos que podemos ayudar a ordenar”
            
            ID:
            
            `problemas-operativos`
            
            Ubicación:
            
            Debe aparecer inmediatamente después del Hero y su franja de confianza.
            
            Orden:
            
            Hero
            ↓
            Franja de confianza
            ↓
            Problemas operativos
            ↓
            Soluciones que podemos construir
            
            ---
            
            # 2. Objetivo de la sección
            
            La sección debe conseguir que el visitante reconozca situaciones que pueden estar ocurriendo actualmente en su empresa.
            
            Su función es generar identificación antes de presentar las soluciones de MendoData.
            
            Debe comunicar problemas operativos amplios relacionados con:
            
            - pérdida de tiempo;
            - procesos manuales;
            - tareas repetitivas;
            - información dispersa;
            - errores;
            - retrabajo;
            - falta de visibilidad;
            - falta de control;
            - dependencia de personas específicas.
            
            Esta sección debe hablar del problema, no de la tecnología.
            
            No mencionar como protagonistas:
            
            - Power BI;
            - Power Apps;
            - Power Automate;
            - Microsoft;
            - sistemas específicos.
            
            La idea conceptual es:
            
            “Esto puede estar pasando en mi empresa.”
            
            La sección siguiente responderá:
            
            “Estas son las soluciones que MendoData puede construir para ayudar.”
            
            ---
            
            # 3. Encabezado
            
            ## H2
            
            Utilizar exactamente:
            
            “Problemas operativos que podemos ayudar a ordenar”
            
            Debe ser el heading principal de la sección.
            
            No utilizar lenguaje alarmista ni exagerado.
            
            ---
            
            ## Descripción
            
            Utilizar exactamente:
            
            “Cada empresa tiene una realidad distinta. Pero cuando los procesos crecen sin las herramientas adecuadas, aparecen situaciones que consumen tiempo, generan errores y dificultan el control de la operación.”
            
            Debe:
            
            - aparecer inmediatamente debajo del H2;
            - tener menor jerarquía visual;
            - mantener un ancho de lectura cómodo;
            - ser fácil de comprender para una persona no técnica;
            - no ocupar un ancho excesivo en desktop.
            
            ---
            
            # 4. Tarjetas de problemas
            
            Mostrar exactamente cinco problemas.
            
            Todas las tarjetas deben utilizar la misma estructura:
            
            1. Ícono.
            2. Título.
            3. Descripción.
            
            No agregar:
            
            - botones;
            - enlaces;
            - CTA;
            - tecnologías;
            - listas adicionales dentro de cada tarjeta.
            
            ---
            
            ## Tarjeta 1 — Procesos manuales y repetitivos
            
            Título:
            
            “Procesos manuales y repetitivos”
            
            Descripción:
            
            “Tareas que consumen tiempo y podrían resolverse de una forma más simple y ordenada.”
            
            Ícono:
            
            Utilizar un ícono simple relacionado con tareas, documentos, repetición o procesos.
            
            ---
            
            ## Tarjeta 2 — Información dispersa
            
            Título:
            
            “Información dispersa”
            
            Descripción:
            
            “Datos repartidos entre planillas, mails y sistemas que no se conectan entre sí.”
            
            Ícono:
            
            Utilizar un ícono relacionado con documentos, fuentes de información, bases de datos o conexiones.
            
            ---
            
            ## Tarjeta 3 — Falta de visibilidad y control
            
            Título:
            
            “Falta de visibilidad y control”
            
            Descripción:
            
            “Dificultad para saber qué está ocurriendo, qué está pendiente y dónde intervenir.”
            
            Ícono:
            
            Utilizar un ícono relacionado con visibilidad, indicadores, seguimiento o control.
            
            ---
            
            ## Tarjeta 4 — Errores y retrabajo
            
            Título:
            
            “Errores y retrabajo”
            
            Descripción:
            
            “Cargas duplicadas, información desactualizada o tareas que deben hacerse nuevamente.”
            
            Ícono:
            
            Utilizar un ícono relacionado con alertas, errores, revisión o repetición de tareas.
            
            ---
            
            ## Tarjeta 5 — Dependencia de personas específicas
            
            Título:
            
            “Dependencia de personas específicas”
            
            Descripción:
            
            “Procesos que dependen demasiado del conocimiento o la disponibilidad de alguien específico.”
            
            Ícono:
            
            Utilizar un ícono relacionado con personas, conocimiento o dependencia operativa.
            
            ---
            
            # 5. Cierre de la sección
            
            Después de las cinco tarjetas mostrar la frase:
            
            “Entender el problema es el primer paso para definir qué solución conviene.”
            
            Debe funcionar como transición hacia la siguiente sección.
            
            No debe ser:
            
            - botón;
            - enlace;
            - CTA.
            
            Debe tener una jerarquía ligeramente mayor que el texto normal, pero menor que el H2.
            
            ---
            
            # 6. Layout desktop
            
            Seguir la composición del mockup aprobado.
            
            Orden:
            
            1. H2.
            2. Descripción introductoria.
            3. Grilla de cinco tarjetas.
            4. Frase de cierre.
            
            ## Grilla
            
            Primera fila:
            
            3 tarjetas.
            
            Segunda fila:
            
            2 tarjetas centradas.
            
            Representación:
            
            [ Problema 1 ] [ Problema 2 ] [ Problema 3 ]
            
                   [ Problema 4 ] [ Problema 5 ]
            
            Las dos tarjetas de la segunda fila deben quedar visualmente centradas.
            
            No alinearlas simplemente hacia la izquierda.
            
            Todas las tarjetas deben mantener:
            
            - ancho consistente;
            - altura visual equivalente;
            - mismo padding;
            - misma estructura interna;
            - alineación coherente;
            - separación uniforme.
            
            No variar el tamaño de las tarjetas según la cantidad de texto.
            
            ---
            
            # 7. Tablet
            
            Utilizar dos columnas cuando exista espacio suficiente.
            
            Distribución aproximada:
            
            [ Problema 1 ] [ Problema 2 ]
            
            [ Problema 3 ] [ Problema 4 ]
            
                  [ Problema 5 ]
            
            La última tarjeta puede quedar centrada.
            
            Si el ancho disponible hace que el contenido quede comprimido, pasar progresivamente a una sola columna.
            
            No reducir excesivamente la tipografía para conservar dos columnas.
            
            ---
            
            # 8. Mobile
            
            Utilizar una única columna.
            
            Orden obligatorio:
            
            1. Procesos manuales y repetitivos.
            2. Información dispersa.
            3. Falta de visibilidad y control.
            4. Errores y retrabajo.
            5. Dependencia de personas específicas.
            
            Después:
            
            6. Frase de cierre.
            
            Las tarjetas deben:
            
            - ocupar el ancho disponible respetando los márgenes laterales;
            - mantener separación vertical consistente;
            - ser fáciles de recorrer;
            - mantener los íconos visibles;
            - conservar títulos claramente legibles;
            - evitar bloques de texto demasiado largos.
            
            No utilizar:
            
            - carrusel;
            - scroll horizontal;
            - tarjetas parcialmente ocultas;
            - acordeones;
            - interacciones necesarias para leer el contenido.
            
            Toda la información debe estar visible.
            
            ---
            
            # 9. Estilo visual
            
            Respetar el sistema visual general de MendoData y el mockup aprobado.
            
            La sección debe sentirse más liviana que el Hero.
            
            Priorizar:
            
            - fondo claro o suavemente contrastado respecto del Hero;
            - tarjetas blancas;
            - azul profundo / navy;
            - azul de acción para íconos y pequeños detalles;
            - tipografía oscura;
            - bordes redondeados;
            - sombras suaves;
            - suficiente espacio en blanco;
            - diseño limpio;
            - sensación de orden.
            
            Los íconos deben compartir:
            
            - mismo estilo;
            - proporciones similares;
            - grosor visual consistente;
            - tratamiento de color coherente.
            
            Si el proyecto ya utiliza una librería de íconos, reutilizarla.
            
            No incorporar una nueva dependencia únicamente para esta sección.
            
            ---
            
            # 10. Recursos visuales
            
            Esta sección no necesita:
            
            - fotografías;
            - capturas de sistemas;
            - dashboards;
            - mockups;
            - ilustraciones complejas;
            - imágenes de personas.
            
            La identificación debe producirse mediante los problemas presentados.
            
            No utilizar elementos decorativos que compitan con las tarjetas.
            
            ---
            
            # 11. CTA
            
            Esta sección NO debe tener CTA.
            
            No agregar:
            
            - “Consultar”;
            - “Conocé más”;
            - “Ver soluciones”;
            - botones dentro de las tarjetas;
            - botón de WhatsApp;
            - Calendly.
            
            El visitante ya dispone del CTA principal del Hero.
            
            La siguiente sección continuará naturalmente el recorrido mostrando las soluciones.
            
            ---
            
            # 12. Componentes globales
            
            El Header y el botón flotante de WhatsApp son componentes globales.
            
            No recrearlos dentro de esta sección.
            
            El WhatsApp flotante puede permanecer visible durante el recorrido, pero no forma parte visual de la sección.
            
            ---
            
            # 13. Interacciones
            
            Las tarjetas son informativas.
            
            No deben comportarse como enlaces.
            
            Se pueden utilizar microinteracciones visuales muy sutiles si ya forman parte del sistema de diseño, por ejemplo:
            
            - pequeña variación de sombra;
            - cambio mínimo de borde.
            
            No utilizar movimientos, elevaciones o animaciones que hagan pensar que la tarjeta es clickeable cuando no lo es.
            
            ---
            
            # 14. Accesibilidad
            
            Implementar:
            
            - H2 semántico para el título principal;
            - H3 para los títulos de las tarjetas si corresponde a la estructura HTML;
            - contraste suficiente;
            - textos legibles;
            - íconos decorativos con `aria-hidden="true"` cuando corresponda;
            - no depender exclusivamente del color para comunicar los problemas.
            
            Evitar utilizar texto dentro de imágenes.
            
            ---
            
            # 15. Medición
            
            Las tarjetas no tienen interacción, por lo que no necesitan eventos individuales.
            
            Si el sitio ya mide visualización de secciones, se puede reutilizar el sistema existente con:
            
            `section_view`
            
            Datos:
            
            - `page: home`
            - `section: problemas_operativos`
            
            No crear una infraestructura nueva de analítica únicamente para esta sección.
            
            ---
            
            # 16. Relación con la sección siguiente
            
            La transición conceptual debe ser:
            
            Problemas operativos
            ↓
            Reconocer qué está ocurriendo
            ↓
            Entender la situación
            ↓
            Definir qué solución conviene
            ↓
            Soluciones que podemos construir
            
            La siguiente sección es:
            
            “Soluciones que podemos construir”
            
            Ambas secciones deben sentirse conectadas, pero visualmente diferenciadas.
            
            ---
            
            # 17. No hacer
            
            No:
            
            - cambiar los cinco problemas definidos;
            - agregar más tarjetas sin necesidad;
            - presentar tecnologías;
            - transformar las tarjetas en servicios;
            - agregar CTA;
            - agregar fotografías;
            - agregar dashboards;
            - agregar métricas;
            - utilizar animaciones innecesarias;
            - crear un carrusel en mobile;
            - modificar otras secciones de la Home;
            - convertir esta sección en una explicación extensa.
            
            ---
            
            # 18. Criterios de aceptación
            
            La sección estará terminada cuando:
            
            - aparezca inmediatamente después del Hero;
            - utilice el H2 definido;
            - incluya la descripción aprobada;
            - muestre exactamente cinco problemas;
            - las cinco tarjetas tengan estructura y tamaño coherentes;
            - desktop utilice una composición 3 + 2 equilibrada;
            - tablet se adapte correctamente;
            - mobile utilice una sola columna;
            - no exista scroll horizontal;
            - no tenga CTA propio;
            - no venda tecnologías;
            - mantenga la identidad visual de MendoData;
            - conecte naturalmente con “Soluciones que podemos construir”;
            - sea comprensible sin conocimientos técnicos;
            - no se hayan modificado otras secciones innecesariamente.
            
            ---
            
            # 19. Resumen visual
            
            DESKTOP
            
                            Problemas operativos que
                          podemos ayudar a ordenar
            
                       [ Descripción introductoria ]
            
            [ Procesos manuales ] [ Información dispersa ] [ Falta de control ]
            
                   [ Errores y retrabajo ] [ Dependencia de personas ]
            
               “Entender el problema es el primer paso
                    para definir qué solución conviene.”
            
            MOBILE
            
            Problemas operativos que
            podemos ayudar a ordenar
            
            Descripción
            
            [ Procesos manuales y repetitivos ]
            
            [ Información dispersa ]
            
            [ Falta de visibilidad y control ]
            
            [ Errores y retrabajo ]
            
            [ Dependencia de personas específicas ]
            
            Frase de cierre
            ```
            
        - Sección 3 — Soluciones que podemos construir. ✅
            
            ```jsx
            # BLUEPRINT DEFINITIVO — HOME / SECCIÓN 3: SOLUCIONES QUE PODEMOS CONSTRUIR
            
            ## Estado
            
            APROBADO.
            
            Utilizar este blueprint como versión definitiva de la Sección 3 de la Home.
            
            El mockup aprobado debe utilizarse como referencia visual junto con estas instrucciones.
            
            ---
            
            # 1. Nombre e identificador
            
            Nombre:
            
            “Soluciones que podemos construir”
            
            ID:
            
            `soluciones`
            
            Ubicación:
            
            Debe aparecer inmediatamente después de:
            
            “Problemas operativos que podemos ayudar a ordenar”
            
            y antes de:
            
            “Proyecto destacado”
            
            Recorrido:
            
            Problemas operativos
            ↓
            Soluciones que podemos construir
            ↓
            Proyecto destacado
            
            ---
            
            # 2. Objetivo de la sección
            
            Explicar qué tipo de soluciones puede desarrollar o implementar MendoData después de entender el problema del cliente.
            
            La sección debe dejar claro que:
            
            - no vendemos un único producto cerrado;
            - no utilizamos siempre la misma tecnología;
            - la solución depende del problema y del contexto de cada empresa;
            - la tecnología es un medio para mejorar procesos y operaciones.
            
            Mostrar tres grandes familias de solución:
            
            1. Sistemas y aplicaciones a medida.
            2. Digitalización y automatización.
            3. Datos e integraciones.
            
            La sección debe ser comprensible para personas sin conocimientos técnicos.
            
            ---
            
            # 3. Encabezado
            
            ## H2
            
            Utilizar exactamente:
            
            “Soluciones que podemos construir”
            
            ---
            
            ## Descripción
            
            Utilizar exactamente:
            
            “A partir de cada problema, definimos qué solución puede ayudar mejor: un sistema a medida, un proceso automatizado, una mejor forma de trabajar con los datos o una combinación de varias herramientas.”
            
            Debe aparecer debajo del H2.
            
            Mantener:
            
            - ancho de lectura cómodo;
            - lenguaje simple;
            - jerarquía inferior al título;
            - lectura clara en desktop y mobile.
            
            ---
            
            # 4. Estructura de las soluciones
            
            Mostrar exactamente tres tarjetas.
            
            Cada tarjeta debe contener:
            
            1. Visual.
            2. Título.
            3. Descripción.
            4. Ejemplos breves.
            5. Información tecnológica secundaria únicamente cuando corresponda.
            
            No agregar botones ni enlaces individuales.
            
            ---
            
            # 5. Tarjeta 1 — Sistemas y aplicaciones a medida
            
            ## Título
            
            “Sistemas y aplicaciones a medida”
            
            ## Descripción
            
            “Desarrollamos herramientas adaptadas a la forma en que trabaja cada empresa, sus procesos y sus necesidades específicas.”
            
            ## Ejemplos visibles
            
            Mostrar de forma breve:
            
            - Sistemas internos.
            - Aplicaciones de gestión.
            - Inventarios.
            - Circuitos operativos.
            
            No convertir esta lista en un catálogo exhaustivo.
            
            Otros ejemplos pueden utilizarse posteriormente si un proyecto lo requiere:
            
            - movimientos entre sucursales;
            - portales;
            - permisos y roles.
            
            ## Información secundaria
            
            Puede utilizarse una línea o chips discretos relacionados con:
            
            - Desarrollo a medida.
            - Aplicaciones web.
            - Sistemas internos.
            - Integraciones.
            
            Esta información debe tener menor jerarquía que el título y la descripción.
            
            ## Visual
            
            Representar una aplicación empresarial o sistema interno.
            
            Puede mostrar conceptualmente:
            
            - navegación;
            - registros;
            - gestión;
            - estados;
            - formularios;
            - procesos internos.
            
            Identificador:
            
            `solution-custom-systems-visual`
            
            ---
            
            # 6. Tarjeta 2 — Digitalización y automatización
            
            ## Título
            
            “Digitalización y automatización”
            
            ## Descripción
            
            “Convertimos procesos manuales en flujos digitales más simples, ordenados y fáciles de seguir.”
            
            ## Ejemplos visibles
            
            Mostrar de forma breve:
            
            - Formularios digitales.
            - Aprobaciones.
            - Avisos automáticos.
            - Flujos internos.
            
            Otros ejemplos posibles:
            
            - seguimientos;
            - tareas repetitivas;
            - organización de procesos.
            
            ## Tecnologías secundarias
            
            Cuando aporte valor, se pueden mostrar discretamente:
            
            - Power Apps.
            - Power Automate.
            - SharePoint.
            - Microsoft 365.
            
            No es necesario mostrar todas.
            
            No utilizar estas tecnologías como título ni como mensaje principal de la tarjeta.
            
            ## Visual
            
            Representar conceptualmente:
            
            - formulario;
            - aprobación;
            - flujo de trabajo;
            - notificación;
            - automatización;
            - aplicación interna.
            
            Identificador:
            
            `solution-automation-visual`
            
            ---
            
            # 7. Tarjeta 3 — Datos e integraciones
            
            ## Título
            
            “Datos e integraciones”
            
            ## Descripción
            
            “Conectamos fuentes, organizamos información y desarrollamos indicadores para mejorar la visibilidad de la operación.”
            
            ## Ejemplos visibles
            
            Mostrar de forma breve:
            
            - Tableros e indicadores.
            - Centralización de información.
            - Conexión entre sistemas.
            - Reportes operativos.
            
            Otros ejemplos posibles:
            
            - integraciones;
            - conexión de fuentes;
            - información para la toma de decisiones.
            
            ## Tecnologías secundarias
            
            Cuando corresponda, se puede mostrar:
            
            - Power BI.
            - Bases de datos.
            - Integraciones.
            - Fuentes de información.
            
            Power BI debe aparecer como una herramienta posible, no como el servicio principal de MendoData.
            
            ## Visual
            
            Representar conceptualmente:
            
            - tablero;
            - indicadores;
            - fuentes conectadas;
            - centralización de datos;
            - esquema de integración.
            
            Identificador:
            
            `solution-data-integrations-visual`
            
            ---
            
            # 8. Frase de cierre
            
            Después de las tres tarjetas utilizar exactamente:
            
            “No partimos de una herramienta. Partimos del problema.”
            
            Debe funcionar como cierre conceptual de la sección.
            
            Debe tener una jerarquía visual destacada pero inferior al H2.
            
            No debe:
            
            - ser un botón;
            - ser un enlace;
            - tener comportamiento interactivo.
            
            La frase debe conectar conceptualmente con la siguiente sección:
            
            “Proyecto destacado”
            
            ---
            
            # 9. Layout desktop
            
            Seguir el mockup aprobado.
            
            Orden:
            
            1. H2.
            2. Descripción.
            3. Tres tarjetas.
            4. Frase de cierre.
            
            Distribución:
            
            [ Sistemas ] [ Automatización ] [ Datos e integraciones ]
            
            Las tres tarjetas deben:
            
            - ocupar columnas de igual ancho;
            - mantener altura visual equivalente;
            - compartir la misma estructura;
            - utilizar el mismo padding;
            - mantener una jerarquía visual consistente.
            
            Orden interno:
            
            [ Visual ]
            
            Título
            
            Descripción
            
            Ejemplos
            
            Tecnología/capacidad secundaria, si corresponde
            
            No permitir que una tarjeta sea significativamente más larga que las demás.
            
            ---
            
            # 10. Tablet
            
            Utilizar dos columnas mientras exista espacio suficiente.
            
            Ejemplo:
            
            [ Sistemas ] [ Automatización ]
            
                    [ Datos ]
            
            La tercera tarjeta debe quedar visualmente equilibrada.
            
            Si el contenido empieza a comprimirse, utilizar una sola columna.
            
            No forzar tres columnas.
            
            ---
            
            # 11. Mobile
            
            Utilizar una sola columna.
            
            Orden:
            
            1. Sistemas y aplicaciones a medida.
            2. Digitalización y automatización.
            3. Datos e integraciones.
            4. Frase de cierre.
            
            Cada tarjeta debe conservar:
            
            - visual;
            - título;
            - descripción;
            - ejemplos breves.
            
            No utilizar:
            
            - carrusel;
            - scroll horizontal;
            - acordeones;
            - contenido escondido;
            - texto excesivamente pequeño.
            
            Toda la información principal debe ser visible sin interacción.
            
            ---
            
            # 12. Visuales
            
            Los tres visuales deben compartir un mismo lenguaje gráfico.
            
            Deben sentirse como partes del mismo sistema visual.
            
            Prioridad:
            
            1. Material real de MendoData aprobado.
            2. Mockup basado en soluciones reales.
            3. Visual conceptual provisional.
            
            Mientras no exista material definitivo, utilizar:
            
            `solution-custom-systems-visual`
            
            `solution-automation-visual`
            
            `solution-data-integrations-visual`
            
            Los placeholders deben:
            
            - respetar la proporción definitiva;
            - utilizar la identidad de MendoData;
            - permitir reemplazo posterior sin cambiar el layout;
            - representar interfaces de forma clara;
            - no confundirse con capturas reales de clientes.
            
            No utilizar:
            
            - nombres de clientes;
            - logos de clientes;
            - información sensible;
            - métricas inventadas;
            - resultados ficticios.
            
            ---
            
            # 13. Estilo visual
            
            Mantener el sistema visual general y el mockup aprobado.
            
            Priorizar:
            
            - fondos claros;
            - navy / azul profundo;
            - azul de acción;
            - tarjetas limpias;
            - bordes redondeados;
            - sombras suaves;
            - tipografía clara;
            - espacio en blanco;
            - sensación tecnológica y profesional.
            
            La sección debe sentirse más visual que la sección de Problemas, porque aquí comienzan a aparecer ejemplos de las soluciones que MendoData puede construir.
            
            No utilizar:
            
            - fotografías corporativas de stock;
            - fotografías genéricas de personas;
            - fondos negros;
            - estética cyberpunk;
            - efectos 3D excesivos;
            - ilustraciones decorativas sin función;
            - métricas falsas;
            - testimonios;
            - certificaciones.
            
            ---
            
            # 14. CTA
            
            Esta sección NO debe tener CTA propio.
            
            No agregar:
            
            - “Conocé más”.
            - “Ver solución”.
            - “Solicitar presupuesto”.
            - “Consultar”.
            - Calendly.
            - botón de WhatsApp.
            - enlaces individuales hacia Power BI, Power Apps o tecnologías.
            
            El CTA comercial de la zona media aparecerá en la sección:
            
            “Proyecto destacado”.
            
            ---
            
            # 15. Componentes globales
            
            El Header y el botón flotante de WhatsApp son componentes globales.
            
            No recrearlos dentro de esta sección.
            
            El botón flotante puede permanecer visible durante el recorrido sin formar parte del layout.
            
            ---
            
            # 16. Interacciones
            
            Las tarjetas son principalmente informativas.
            
            No deben aparentar ser enlaces si no tienen destino.
            
            Se pueden utilizar microinteracciones visuales discretas si forman parte del sistema general, por ejemplo:
            
            - variación suave de sombra;
            - pequeña modificación del borde.
            
            No utilizar animaciones llamativas.
            
            ---
            
            # 17. Accesibilidad
            
            Implementar:
            
            - H2 para el título de la sección;
            - H3 para cada familia de solución;
            - contraste suficiente;
            - texto legible;
            - estructura semántica mediante `article` para cada tarjeta cuando corresponda;
            - texto alternativo en visuales informativos;
            - elementos puramente decorativos con `aria-hidden="true"`.
            
            Alt provisional — Sistemas:
            
            “Interfaz de una aplicación empresarial adaptada a un proceso operativo.”
            
            Alt provisional — Automatización:
            
            “Flujo digital de tareas y automatizaciones para un proceso empresarial.”
            
            Alt provisional — Datos:
            
            “Panel de datos que conecta información operativa de distintas fuentes.”
            
            Actualizar los textos cuando se utilicen visuales reales.
            
            ---
            
            # 18. Medición
            
            Las tarjetas no necesitan eventos individuales porque no son interactivas.
            
            Si ya existe medición de visualización de secciones, reutilizar:
            
            `section_view`
            
            Datos:
            
            - `page: home`
            - `section: soluciones`
            
            No crear infraestructura adicional de analítica únicamente para esta sección.
            
            ---
            
            # 19. Relación con las secciones adyacentes
            
            Sección anterior:
            
            “Problemas operativos que podemos ayudar a ordenar”
            
            Concepto:
            
            “Esto puede estar ocurriendo en mi empresa.”
            
            ↓
            
            Esta sección:
            
            “Estas son las clases de soluciones que MendoData puede construir.”
            
            ↓
            
            Siguiente sección:
            
            “Proyecto destacado”
            
            Concepto:
            
            “Así se ve una solución aplicada a una necesidad real.”
            
            Este recorrido debe sentirse natural.
            
            ---
            
            # 20. No hacer
            
            No:
            
            - cambiar las tres familias principales;
            - convertir la sección en un listado de tecnologías;
            - presentar Power BI como el servicio principal;
            - presentar Microsoft como el centro de MendoData;
            - llenar las tarjetas de ejemplos;
            - agregar CTA;
            - agregar enlaces por tarjeta;
            - inventar métricas;
            - inventar proyectos;
            - utilizar logos de clientes sin autorización;
            - utilizar fotografías de stock;
            - modificar otras secciones de la Home.
            
            ---
            
            # 21. Criterios de aceptación
            
            La sección estará terminada cuando:
            
            - aparezca después de Problemas operativos;
            - utilice el título y la descripción definidos;
            - muestre exactamente tres familias de solución;
            - cada tarjeta tenga visual, título, descripción y ejemplos breves;
            - las tecnologías tengan jerarquía secundaria;
            - desktop muestre tres tarjetas equilibradas;
            - tablet se adapte correctamente;
            - mobile utilice una columna;
            - no exista scroll horizontal;
            - no tenga CTA propio;
            - no quede centrada exclusivamente en Microsoft;
            - no presente Power BI como único servicio;
            - los visuales puedan reemplazarse posteriormente sin modificar el layout;
            - no se utilice información ficticia presentada como real;
            - conecte naturalmente con Proyecto destacado.
            
            ---
            
            # 22. Resumen visual
            
            DESKTOP
            
                          Soluciones que podemos construir
            
                              [ Descripción ]
            
            ┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐
            │     Visual      │ │     Visual      │ │     Visual      │
            │                 │ │                 │ │                 │
            │ Sistemas y      │ │ Digitalización  │ │ Datos e         │
            │ aplicaciones    │ │ y automatización│ │ integraciones   │
            │                 │ │                 │ │                 │
            │ Descripción     │ │ Descripción     │ │ Descripción     │
            │                 │ │                 │ │                 │
            │ Ejemplos        │ │ Ejemplos        │ │ Ejemplos        │
            └─────────────────┘ └─────────────────┘ └─────────────────┘
            
                  “No partimos de una herramienta.
                         Partimos del problema.”
            
            MOBILE
            
            Soluciones que podemos construir
            
            Descripción
            
            [ Sistemas y aplicaciones a medida ]
            
            [ Digitalización y automatización ]
            
            [ Datos e integraciones ]
            
            “No partimos de una herramienta.
            Partimos del problema.”
            ```
            
        - Sección 4 — Proyecto destacado ✅
            
            ```jsx
            # BLUEPRINT DEFINITIVO — HOME / SECCIÓN 4: PROYECTO DESTACADO
            
            ## Estado
            
            APROBADO.
            
            Utilizar este blueprint como versión definitiva de la Sección 4 de la Home.
            
            El mockup aprobado debe utilizarse como referencia visual junto con estas instrucciones.
            
            Esta sección debe utilizar un proyecto real de MendoData.
            
            ---
            
            # 1. Nombre e identificador
            
            Nombre:
            
            “Proyecto destacado”
            
            ID:
            
            `proyecto-destacado`
            
            Ubicación:
            
            Debe aparecer inmediatamente después de:
            
            “Soluciones que podemos construir”
            
            y antes de:
            
            “Operaciones y logística”
            
            Recorrido:
            
            Problemas
            ↓
            Soluciones
            ↓
            Proyecto real
            ↓
            Especialización en operaciones y logística
            
            ---
            
            # 2. Objetivo de la sección
            
            Demostrar que MendoData no solamente explica qué soluciones podría construir, sino que ya ha desarrollado soluciones aplicadas a necesidades operativas reales.
            
            La sección debe mostrar de forma breve:
            
            - el problema;
            - la solución desarrollada;
            - funcionalidades concretas;
            - evidencia visual;
            - resultado cualitativo;
            - posibilidad de conocer más proyectos;
            - posibilidad de iniciar una consulta.
            
            La sensación buscada es:
            
            “Esto no es solamente una propuesta. MendoData ya construye este tipo de soluciones.”
            
            No presentar el proyecto como “caso de éxito” mientras no existan métricas verificables, testimonio y autorización suficiente.
            
            ---
            
            # 3. Proyecto seleccionado para la Home
            
            Utilizar:
            
            “Control de inventario y sucursales”
            
            Este es un proyecto real de MendoData.
            
            Por defecto debe presentarse como:
            
            “Proyecto real anonimizado”
            
            hasta que exista autorización explícita para publicar identidad, logo, capturas u otros datos del cliente.
            
            No mostrar el nombre del cliente.
            
            ---
            
            # 4. Encabezado de la sección
            
            ## H2
            
            Utilizar exactamente:
            
            “Proyecto destacado”
            
            ## Descripción
            
            Utilizar exactamente:
            
            “Una solución construida alrededor de una necesidad operativa real.”
            
            Debe aparecer debajo del H2.
            
            Debe ser breve y funcionar como introducción al proyecto.
            
            ---
            
            # 5. Encabezado del proyecto
            
            ## Badge
            
            Utilizar:
            
            “Proyecto real anonimizado”
            
            Si posteriormente existe autorización suficiente, podrá cambiarse por:
            
            “Proyecto real”
            
            No utilizar:
            
            “Caso de éxito”
            
            ---
            
            ## Nombre
            
            Utilizar exactamente:
            
            “Control de inventario y sucursales”
            
            ---
            
            ## Información secundaria
            
            Utilizar:
            
            “Operaciones · Inventarios · Gestión entre sucursales”
            
            Debe tener menor jerarquía visual que el nombre del proyecto.
            
            No mencionar tecnologías que todavía no estén confirmadas.
            
            ---
            
            # 6. Problema
            
            Título:
            
            “Problema”
            
            Texto:
            
            “Había dificultades para controlar inventarios, registrar movimientos entre sucursales, gestionar diferencias de stock y seguir aprobaciones.”
            
            Debe explicar rápidamente qué situación existía antes de la solución.
            
            No agregar:
            
            - pérdidas económicas;
            - porcentajes;
            - tiempos;
            - cantidad de usuarios;
            - afirmaciones que no estén documentadas.
            
            ---
            
            # 7. Solución
            
            Título:
            
            “Solución”
            
            Texto:
            
            “Desarrollamos un sistema para gestionar inventarios con códigos de barras, registrar movimientos, controlar diferencias y digitalizar aprobaciones.”
            
            Mantener el texto centrado en lo que se construyó y en el proceso mejorado.
            
            No convertir esta explicación en una descripción técnica extensa.
            
            ---
            
            # 8. Funcionalidades principales
            
            Título:
            
            “Funcionalidades”
            
            Mostrar estas cuatro funcionalidades:
            
            - Gestión de inventario con códigos de barras.
            - Registro de movimientos entre sucursales.
            - Control de diferencias de stock.
            - Aprobaciones digitales.
            
            Pueden visualizarse mediante:
            
            - íconos;
            - chips;
            - lista breve;
            - pequeña grilla.
            
            No mostrar más funcionalidades en la Home.
            
            El detalle completo podrá desarrollarse posteriormente en `/proyectos`.
            
            ---
            
            # 9. Resultado
            
            Título:
            
            “Resultado”
            
            Texto:
            
            “Mayor control y trazabilidad de la operación, con mejor capacidad para detectar inconsistencias.”
            
            Este es un resultado cualitativo.
            
            No presentar resultados cuantificados porque actualmente no están documentados.
            
            No inventar:
            
            - porcentajes de mejora;
            - ahorro de horas;
            - ahorro económico;
            - reducción porcentual de errores;
            - volumen de operaciones;
            - cantidad de usuarios.
            
            Cuando existan resultados verificables, podrán incorporarse en `/proyectos`.
            
            ---
            
            # 10. Visual principal
            
            El visual debe ser uno de los elementos con mayor peso de la sección.
            
            Debe representar el proyecto de control de inventarios y sucursales.
            
            ## Prioridad
            
            Utilizar en este orden:
            
            1. Captura real aprobada y anonimizada.
            2. Captura real editada para ocultar información sensible.
            3. Mockup construido a partir de la solución real.
            4. Representación ilustrativa provisional basada en el proyecto.
            
            No utilizar una captura real sin revisar previamente los datos visibles.
            
            ---
            
            ## Si existe captura real
            
            Eliminar u ocultar:
            
            - nombre del cliente;
            - logos;
            - usuarios;
            - nombres de empleados;
            - correos;
            - teléfonos;
            - direcciones;
            - información comercial;
            - información financiera;
            - información interna sensible.
            
            Mantener únicamente la información necesaria para demostrar la solución.
            
            ---
            
            ## Si todavía no existe captura publicable
            
            Utilizar un visual basado en el proyecto real.
            
            Debe mostrar conceptualmente elementos relacionados con:
            
            - inventario;
            - productos;
            - movimientos;
            - sucursales;
            - diferencias;
            - aprobaciones.
            
            El visual debe indicar discretamente:
            
            “Representación ilustrativa basada en un proyecto real”
            
            No presentar un mockup conceptual como si fuera una captura del cliente.
            
            ---
            
            ## Identificador
            
            Utilizar:
            
            `project-featured-visual`
            
            El contenedor debe permitir reemplazar posteriormente el visual sin modificar el layout.
            
            ---
            
            # 11. Nivel de detalle en la Home
            
            La Home debe mostrar únicamente:
            
            - nombre;
            - contexto;
            - problema;
            - solución;
            - cuatro funcionalidades;
            - resultado cualitativo;
            - un visual principal.
            
            No incluir en esta sección:
            
            - galerías extensas;
            - múltiples pantallas;
            - videos largos;
            - arquitectura técnica;
            - proceso completo del proyecto;
            - tecnologías detalladas;
            - aprendizajes internos;
            - testimonios extensos;
            - explicación completa del caso.
            
            Ese contenido corresponde a:
            
            `/proyectos`
            
            La Home debe funcionar como introducción y evidencia.
            
            ---
            
            # 12. Acciones de la sección
            
            La sección tendrá dos posibles acciones con diferente jerarquía.
            
            ## CTA de conversión
            
            Texto:
            
            “¿Tenés un desafío parecido? Contanos tu caso”
            
            Destino:
            
            `#contacto`
            
            Debe funcionar como CTA comercial de la zona media de la Home.
            
            No debe:
            
            - abrir WhatsApp;
            - abrir Calendly;
            - abrir una nueva pestaña.
            
            ---
            
            ## Acceso a proyectos
            
            Agregar un enlace secundario:
            
            “Ver proyectos”
            
            Destino:
            
            `/proyectos`
            
            Debe tener menor jerarquía visual que el CTA de contacto.
            
            Su función es permitir que una persona que todavía necesita más evidencia pueda continuar investigando antes de contactar.
            
            No convertir ambos enlaces en dos botones visualmente idénticos.
            
            Jerarquía:
            
            CTA principal de la sección:
            “¿Tenés un desafío parecido? Contanos tu caso”
            
            Acción secundaria:
            “Ver proyectos”
            
            ---
            
            # 13. Layout desktop
            
            Seguir el mockup aprobado.
            
            Utilizar dos columnas principales.
            
            ## Columna izquierda
            
            Mostrar:
            
            1. Visual principal.
            2. Badge del proyecto cuando corresponda.
            3. Nota de anonimización o del visual si es necesaria.
            
            Debe ocupar aproximadamente entre 50% y 55% del ancho.
            
            La interfaz debe verse suficientemente grande como para reconocer que se trata de una solución real.
            
            ---
            
            ## Columna derecha
            
            Mostrar:
            
            1. Nombre del proyecto.
            2. Información secundaria.
            3. Problema.
            4. Solución.
            5. Funcionalidades.
            6. Resultado.
            7. CTA.
            8. Enlace “Ver proyectos”.
            
            Debe ocupar aproximadamente entre 45% y 50%.
            
            Los bloques deben ser fáciles de escanear.
            
            Evitar párrafos largos.
            
            ---
            
            # 14. Tablet
            
            Mantener dos columnas solamente mientras:
            
            - el visual siga siendo legible;
            - el texto tenga espacio suficiente;
            - las funcionalidades no queden comprimidas.
            
            Cuando deje de funcionar correctamente, pasar a una sola columna.
            
            No reducir excesivamente el contenido para mantener artificialmente el diseño desktop.
            
            ---
            
            # 15. Mobile
            
            Utilizar una sola columna.
            
            Orden:
            
            1. Título de la sección.
            2. Descripción.
            3. Badge.
            4. Nombre del proyecto.
            5. Información secundaria.
            6. Visual principal.
            7. Problema.
            8. Solución.
            9. Funcionalidades.
            10. Resultado.
            11. CTA.
            12. “Ver proyectos”.
            
            El visual debe aparecer antes de los bloques detallados de Problema y Solución.
            
            Características:
            
            - visual adaptado al ancho;
            - sin textos ilegibles dentro de la interfaz;
            - márgenes laterales cómodos;
            - bloques fáciles de recorrer;
            - CTA con área táctil suficiente;
            - sin scroll horizontal.
            
            No utilizar carrusel en esta versión de la Home.
            
            ---
            
            # 16. Estilo visual
            
            Esta sección debe sentirse más concreta y demostrativa que las anteriores.
            
            Mantener:
            
            - identidad visual de MendoData;
            - navy / azul profundo;
            - azul de acción;
            - fondos claros;
            - tarjetas o superficies limpias;
            - bordes redondeados;
            - sombras sutiles;
            - espacio en blanco;
            - interfaces como principal recurso visual.
            
            La evidencia del proyecto debe ser protagonista.
            
            No utilizar:
            
            - fotografías corporativas de stock;
            - personas genéricas;
            - fondos excesivamente oscuros;
            - estética cyberpunk;
            - gráficos decorativos sin función;
            - métricas ficticias;
            - logos de clientes no autorizados.
            
            ---
            
            # 17. Privacidad y anonimización
            
            Mientras no exista autorización explícita para comunicar al cliente, mantener el proyecto anonimizado.
            
            No publicar:
            
            - nombre del cliente;
            - logo;
            - empleados;
            - información sensible;
            - datos internos;
            - direcciones;
            - información financiera;
            - información confidencial;
            - capturas sin revisar.
            
            Si se utiliza material anonimizado, puede mostrarse discretamente:
            
            “Información anonimizada para preservar la confidencialidad del cliente.”
            
            No es necesario repetir esta aclaración varias veces.
            
            ---
            
            # 18. Tecnologías
            
            No mostrar tecnologías específicas en esta versión hasta confirmar cuáles se utilizaron realmente en el proyecto.
            
            No asumir:
            
            - Power Apps;
            - Power Automate;
            - Power BI;
            - Microsoft 365;
            - framework;
            - base de datos;
            - infraestructura.
            
            Cuando esa información esté documentada podrá incorporarse, especialmente dentro de `/proyectos`.
            
            ---
            
            # 19. Reutilización para /proyectos
            
            Construir esta sección de manera que la información del proyecto pueda reutilizarse posteriormente en la página:
            
            `/proyectos`
            
            Evitar duplicar manualmente la información si la arquitectura actual permite compartir datos o componentes.
            
            La Home utilizará una versión resumida.
            
            `/proyectos` podrá utilizar una versión ampliada con:
            
            - más contexto;
            - galería;
            - capturas adicionales;
            - video;
            - tecnologías;
            - proceso;
            - resultados;
            - otros proyectos.
            
            No desarrollar todavía todo ese contenido dentro de la Home.
            
            ---
            
            # 20. Interacciones
            
            El visual no debe parecer clickeable si no existe una acción asociada.
            
            El CTA y “Ver proyectos” deben tener:
            
            - hover;
            - focus visible;
            - active;
            - navegación mediante teclado.
            
            No agregar animaciones llamativas.
            
            Si existen animaciones de entrada, deben ser discretas y respetar:
            
            `prefers-reduced-motion`
            
            ---
            
            # 21. Accesibilidad
            
            Implementar:
            
            - H2 para “Proyecto destacado”;
            - heading adecuado para el nombre del proyecto;
            - estructura semántica coherente;
            - contraste suficiente;
            - foco visible;
            - área táctil adecuada;
            - texto alternativo específico para el visual.
            
            Alt provisional:
            
            “Interfaz de un sistema de gestión de inventarios y movimientos entre sucursales.”
            
            Si cambia el visual, actualizar el texto alternativo.
            
            ---
            
            # 22. Medición
            
            Si el proyecto ya dispone de analítica, registrar el CTA de contacto.
            
            Evento:
            
            `cta_click`
            
            Datos:
            
            - `page: home`
            - `section: proyecto_destacado`
            - `cta_name: consulta`
            - `destination: contacto`
            
            Registrar también el acceso a `/proyectos` si el sistema actual mide navegación interna.
            
            Evento sugerido:
            
            `project_link_click`
            
            Datos:
            
            - `page: home`
            - `section: proyecto_destacado`
            - `destination: proyectos`
            
            No crear una infraestructura nueva de medición únicamente para esta sección.
            
            ---
            
            # 23. No hacer
            
            No:
            
            - presentar este proyecto como ficticio;
            - presentar una demo como captura real;
            - utilizar “caso de éxito”;
            - inventar métricas;
            - inventar tecnologías;
            - inventar testimonios;
            - publicar el nombre del cliente sin autorización;
            - mostrar información sensible;
            - agregar demasiadas funcionalidades;
            - convertir la Home en la página completa del proyecto;
            - agregar galerías innecesarias;
            - agregar Calendly;
            - agregar botón adicional de WhatsApp;
            - modificar otras secciones de la Home.
            
            ---
            
            # 24. Criterios de aceptación
            
            La sección estará terminada cuando:
            
            - aparezca después de “Soluciones que podemos construir”;
            - utilice un proyecto real de MendoData;
            - el proyecto esté identificado como real anonimizado mientras corresponda;
            - utilice “Control de inventario y sucursales”;
            - explique el problema real;
            - explique la solución real;
            - muestre las cuatro funcionalidades documentadas;
            - comunique únicamente resultados cualitativos verificables;
            - no invente métricas;
            - no invente tecnologías;
            - incluya un visual relacionado con el proyecto;
            - diferencie claramente una captura real de una representación ilustrativa;
            - incluya CTA hacia contacto;
            - incluya acceso secundario a `/proyectos`;
            - funcione correctamente en desktop;
            - funcione correctamente en tablet;
            - funcione correctamente en mobile;
            - no genere scroll horizontal;
            - respete la privacidad del cliente;
            - pueda reutilizarse posteriormente en `/proyectos`.
            
            ---
            
            # 25. Resumen visual
            
            DESKTOP
            
                             Proyecto destacado
            
                Una solución construida alrededor de
                     una necesidad operativa real.
            
            ┌──────────────────────────┬──────────────────────────────┐
            │                          │ Proyecto real anonimizado    │
            │                          │                              │
            │      Visual real /       │ Control de inventario       │
            │      anonimizado /       │ y sucursales                │
            │      ilustrativo         │                              │
            │                          │ Operaciones · Inventarios    │
            │                          │                              │
            │                          │ Problema                     │
            │                          │ Texto breve                  │
            │                          │                              │
            │                          │ Solución                     │
            │                          │ Texto breve                  │
            │                          │                              │
            │                          │ Funcionalidades              │
            │                          │ • ...                        │
            │                          │ • ...                        │
            │                          │                              │
            │                          │ Resultado                    │
            │                          │ Texto breve                  │
            │                          │                              │
            │                          │ [ Contanos tu caso ]         │
            │                          │ Ver proyectos →              │
            └──────────────────────────┴──────────────────────────────┘
            
            MOBILE
            
            Proyecto destacado
            
            Descripción
            
            Proyecto real anonimizado
            
            Control de inventario y sucursales
            
            Operaciones · Inventarios · Gestión entre sucursales
            
            [ Visual ]
            
            Problema
            Texto
            
            Solución
            Texto
            
            Funcionalidades
            • Gestión de inventario con códigos de barras
            • Movimientos entre sucursales
            • Control de diferencias
            • Aprobaciones digitales
            
            Resultado
            Texto
            
            [ ¿Tenés un desafío parecido? Contanos tu caso ]
            
            Ver proyectos →
            ```
            
        - Sección 5 — Operaciones y logística ✅
            
            ```jsx
            # BLUEPRINT DEFINITIVO — HOME / SECCIÓN 5: OPERACIONES Y LOGÍSTICA
            
            ## Estado
            
            APROBADO.
            
            Utilizar este blueprint como versión definitiva de la Sección 5 de la Home.
            
            El mockup aprobado debe utilizarse como referencia visual junto con estas instrucciones.
            
            ---
            
            # 1. Nombre e identificador
            
            Nombre:
            
            “Operaciones y logística”
            
            ID:
            
            `operaciones-logistica`
            
            Ubicación:
            
            Debe aparecer inmediatamente después de:
            
            “Proyecto destacado”
            
            y antes de:
            
            “Cómo trabajamos”
            
            Recorrido:
            
            Problemas
            ↓
            Soluciones
            ↓
            Proyecto real
            ↓
            Foco en operaciones y logística
            ↓
            Cómo trabajamos
            
            ---
            
            # 2. Objetivo de la sección
            
            Comenzar a construir el posicionamiento progresivo de MendoData en operaciones y logística.
            
            La sección debe comunicar que:
            
            - MendoData trabaja con problemas operativos de distintos sectores;
            - existe un interés y una experiencia creciente en operaciones, logística y distribución;
            - este foco surge de necesidades y proyectos reales;
            - MendoData puede trabajar sobre inventarios, movimientos, trazabilidad, distribución y control operativo;
            - la tecnología se adapta al proceso y no al revés.
            
            La sección NO debe presentar a MendoData como una empresa exclusivamente logística.
            
            La idea que debe quedar es:
            
            “MendoData puede trabajar con distintas empresas, pero está profundizando especialmente su experiencia en operaciones y logística.”
            
            ---
            
            # 3. Etiqueta superior
            
            Utilizar exactamente:
            
            “Foco de especialización”
            
            Debe aparecer sobre el H2.
            
            Características:
            
            - pequeña;
            - discreta;
            - azul como color de acento;
            - misma lógica visual que otros pre-títulos de la web;
            - menor jerarquía que el título.
            
            No utilizar:
            
            “Especialistas en logística”
            
            ni otras afirmaciones de especialización consolidada.
            
            ---
            
            # 4. Título
            
            H2:
            
            “Operaciones y logística”
            
            Debe ser el elemento textual principal de la sección.
            
            ---
            
            # 5. Descripción principal
            
            Utilizar exactamente:
            
            “Estamos profundizando nuestro trabajo en procesos de inventario, movimientos, trazabilidad, distribución y control operativo.”
            
            Debe aparecer inmediatamente debajo del título.
            
            Debe:
            
            - ser directa;
            - comunicar foco progresivo;
            - evitar tecnicismos;
            - evitar promesas;
            - no mencionar tecnologías específicas.
            
            ---
            
            # 6. Descripción complementaria
            
            Utilizar:
            
            “Trabajamos con empresas de distintos sectores, y este foco crece a partir de necesidades y proyectos reales que requieren más visibilidad, seguimiento y control.”
            
            Debe reforzar dos conceptos:
            
            1. MendoData no trabaja exclusivamente con logística.
            2. La especialización se está construyendo a partir de experiencia concreta.
            
            Mantener una extensión breve.
            
            ---
            
            # 7. Procesos donde estamos profundizando
            
            En lugar de repetir problemas de la Sección 2, mostrar cinco áreas operativas relacionadas con el foco de MendoData.
            
            Título opcional de apoyo:
            
            “Procesos donde estamos profundizando”
            
            Debe tener una jerarquía secundaria y puede omitirse si el diseño funciona mejor sin él.
            
            Mostrar exactamente estos cinco elementos:
            
            1. Inventarios y stock.
            2. Movimientos entre sucursales.
            3. Trazabilidad.
            4. Distribución y seguimiento.
            5. Control operativo.
            
            Cada elemento debe incluir:
            
            - ícono simple;
            - texto corto;
            - buena separación;
            - lectura inmediata.
            
            No agregar párrafos explicativos.
            
            ---
            
            # 8. Presentación de los cinco elementos
            
            Los elementos deben sentirse más livianos que las tarjetas de la Sección 2.
            
            Pueden utilizarse:
            
            - filas compactas;
            - pequeños bloques;
            - chips visuales;
            - ícono + texto;
            - grilla simple de dos columnas.
            
            No crear cinco tarjetas grandes.
            
            No convertirlos en servicios independientes.
            
            No agregar botones.
            
            ---
            
            # 9. Visual principal
            
            El visual debe representar operaciones y logística desde una mirada tecnológica.
            
            Su función es ampliar el territorio visual de MendoData después del Proyecto destacado.
            
            No debe repetir exactamente el visual de la Sección 4.
            
            ---
            
            ## Concepto recomendado
            
            En esta sección priorizar una representación más amplia del flujo operativo.
            
            Ejemplo conceptual:
            
            Inventario
            ↓
            Movimiento
            ↓
            Trazabilidad
            ↓
            Distribución
            ↓
            Control
            
            Puede representarse mediante una composición que combine:
            
            - pequeños módulos de interfaz;
            - productos o inventario;
            - sucursales;
            - movimientos;
            - estados;
            - conexiones;
            - seguimiento;
            - indicadores operativos.
            
            La sensación buscada es:
            
            “Una operación conectada, visible y controlable.”
            
            ---
            
            # 10. Prioridad del material
            
            Utilizar en este orden:
            
            1. Material real aprobado que no repita la Sección 4.
            2. Otra vista de una solución real.
            3. Diagrama real de proceso.
            4. Composición basada en proyectos reales.
            5. Mockup conceptual.
            6. Placeholder provisional.
            
            Si se utiliza material real, revisar previamente privacidad y autorización.
            
            ---
            
            # 11. Placeholder
            
            Mientras no exista un visual definitivo, utilizar:
            
            `operations-logistics-visual`
            
            Debe:
            
            - respetar la proporción definitiva;
            - utilizar la identidad visual de MendoData;
            - representar inventario, movimiento, trazabilidad y control;
            - poder reemplazarse posteriormente sin cambiar el layout;
            - evitar datos falsos;
            - evitar nombres de empresas;
            - evitar métricas ficticias.
            
            Si el visual puede confundirse con una solución real, mostrar discretamente:
            
            “Demostración ilustrativa”
            
            ---
            
            # 12. Restricciones del visual
            
            No utilizar como recurso principal:
            
            - fotografía genérica de camiones;
            - depósitos de stock;
            - personas con chalecos;
            - imágenes de logística de banco de imágenes;
            - mapas decorativos sin función;
            - estética típica de empresa de transporte.
            
            MendoData debe seguir viéndose como una empresa tecnológica aplicada a operaciones.
            
            No mostrar:
            
            - nombres de clientes;
            - logos no autorizados;
            - datos sensibles;
            - métricas inventadas;
            - resultados ficticios;
            - interfaces conceptuales presentadas como reales.
            
            ---
            
            # 13. Layout desktop
            
            Seguir la composición general del mockup aprobado.
            
            Utilizar dos columnas.
            
            ## Columna izquierda
            
            Mostrar:
            
            1. Etiqueta “Foco de especialización”.
            2. H2 “Operaciones y logística”.
            3. Descripción principal.
            4. Descripción complementaria.
            5. Procesos donde estamos profundizando.
            
            Ancho aproximado:
            
            45%.
            
            ---
            
            ## Columna derecha
            
            Mostrar:
            
            Visual de operaciones y logística.
            
            Ancho aproximado:
            
            55%.
            
            Debe tener suficiente presencia visual sin dominar toda la sección.
            
            Ambas columnas deben sentirse equilibradas verticalmente.
            
            ---
            
            # 14. Desktop — estructura aproximada
            
            ┌────────────────────────────┬─────────────────────────────┐
            │ Foco de especialización    │                             │
            │                            │                             │
            │ Operaciones y logística    │       Visual operativo     │
            │                            │                             │
            │ Descripción principal      │    Inventario → Movimiento │
            │                            │          ↓                  │
            │ Descripción complementaria │      Trazabilidad           │
            │                            │          ↓                  │
            │ Procesos:                  │      Distribución           │
            │ ✓ Inventarios              │          ↓                  │
            │ ✓ Movimientos              │        Control              │
            │ ✓ Trazabilidad             │                             │
            │ ✓ Distribución             │                             │
            │ ✓ Control operativo        │                             │
            └────────────────────────────┴─────────────────────────────┘
            
            ---
            
            # 15. Tablet
            
            Mantener dos columnas mientras:
            
            - el contenido siga siendo legible;
            - el visual conserve suficiente espacio;
            - la lista no quede comprimida.
            
            Cuando el ancho sea insuficiente, pasar a una sola columna.
            
            No reducir excesivamente tipografías ni visuales para mantener dos columnas.
            
            ---
            
            # 16. Mobile
            
            Utilizar una sola columna.
            
            Orden:
            
            1. Etiqueta “Foco de especialización”.
            2. H2.
            3. Descripción principal.
            4. Descripción complementaria.
            5. Visual.
            6. Procesos donde estamos profundizando.
            
            Representación:
            
            Foco de especialización
            
            Operaciones y logística
            
            Descripción principal
            
            Descripción complementaria
            
            [ Visual operativo ]
            
            Inventarios y stock
            Movimientos entre sucursales
            Trazabilidad
            Distribución y seguimiento
            Control operativo
            
            Características:
            
            - márgenes laterales cómodos;
            - párrafos breves;
            - visual adaptado al ancho;
            - lista en una sola columna;
            - buena separación;
            - sin scroll horizontal.
            
            No utilizar carrusel.
            
            No ocultar información.
            
            ---
            
            # 17. Estilo visual
            
            Mantener la identidad general de MendoData.
            
            Priorizar:
            
            - azul profundo / navy;
            - azul de acción;
            - fondos blancos o claros;
            - superficies limpias;
            - bordes suaves;
            - sombras discretas;
            - tipografía clara;
            - componentes de interfaz;
            - diagramas simples;
            - sensación de orden y control.
            
            La sección puede utilizar un fondo ligeramente distinto a las secciones anterior y posterior para marcar el cambio de tema.
            
            Ejemplos:
            
            - azul muy claro;
            - gris azulado muy suave;
            - fondo claro cálido.
            
            No utilizar un fondo oscuro dominante.
            
            ---
            
            # 18. Relación con Proyecto destacado
            
            La Sección 4 demuestra:
            
            “MendoData ya desarrolló una solución operativa real.”
            
            La Sección 5 amplía:
            
            “Este tipo de problemas forma parte de un territorio en el que MendoData está profundizando.”
            
            Por eso:
            
            - no repetir exactamente la misma captura;
            - no volver a explicar el proyecto;
            - no volver a contar problema, solución y resultado;
            - no volver a listar funcionalidades del proyecto.
            
            La Sección 5 debe ampliar el posicionamiento, no repetir evidencia.
            
            ---
            
            # 19. CTA
            
            Esta sección NO debe tener CTA propio.
            
            No agregar:
            
            - “Conocé más”.
            - “Soluciones logísticas”.
            - “Contactanos”.
            - “Solicitar presupuesto”.
            - Calendly.
            - botón de WhatsApp dentro de la sección.
            
            La conversión ya se trabaja en Proyecto destacado y nuevamente al final de la Home.
            
            El botón flotante de WhatsApp es global y puede continuar visible.
            
            ---
            
            # 20. Accesibilidad
            
            Implementar:
            
            - H2 semántico;
            - estructura HTML coherente;
            - contraste suficiente;
            - tipografía legible;
            - íconos decorativos con `aria-hidden="true"`;
            - texto alternativo descriptivo para el visual;
            - no depender únicamente del color;
            - compatibilidad con `prefers-reduced-motion`.
            
            Alt provisional:
            
            “Representación de procesos de inventario, movimientos, trazabilidad, distribución y control operativo.”
            
            Actualizarlo cuando exista un visual definitivo.
            
            ---
            
            # 21. Medición
            
            No existen interacciones propias que necesiten eventos individuales.
            
            Si ya existe medición de visualización de secciones, reutilizar:
            
            `section_view`
            
            Datos:
            
            - `page: home`
            - `section: operaciones_logistica`
            
            No crear infraestructura nueva de analítica para esta sección.
            
            ---
            
            # 22. No hacer
            
            No:
            
            - afirmar que MendoData trabaja exclusivamente con logística;
            - utilizar “especialistas en logística”;
            - prometer una experiencia que todavía no pueda demostrarse;
            - repetir las tarjetas de problemas de la Sección 2;
            - repetir el proyecto completo de la Sección 4;
            - agregar CTA;
            - crear una página de logística;
            - agregar una lista extensa de servicios;
            - inventar métricas;
            - inventar resultados;
            - inventar proyectos;
            - utilizar fotografías logísticas de stock como visual principal;
            - convertir la sección en publicidad de una tecnología específica;
            - modificar otras secciones de la Home.
            
            ---
            
            # 23. Criterios de aceptación
            
            La sección estará terminada cuando:
            
            - aparezca después de Proyecto destacado;
            - utilice la etiqueta “Foco de especialización”;
            - utilice el H2 “Operaciones y logística”;
            - comunique especialización progresiva;
            - deje claro que MendoData trabaja también con otros sectores;
            - incluya las cinco áreas operativas definidas;
            - no repita los problemas de la Sección 2;
            - no repita el contenido del Proyecto destacado;
            - utilice un visual relacionado con operaciones y logística;
            - mantenga una estética tecnológica;
            - no utilice información ficticia presentada como real;
            - no tenga CTA propio;
            - funcione correctamente en desktop;
            - funcione correctamente en tablet;
            - funcione correctamente en mobile;
            - no genere scroll horizontal;
            - mantenga coherencia visual con toda la Home.
            
            ---
            
            # 24. Resumen de contenido definitivo
            
            Etiqueta:
            
            “Foco de especialización”
            
            Título:
            
            “Operaciones y logística”
            
            Descripción principal:
            
            “Estamos profundizando nuestro trabajo en procesos de inventario, movimientos, trazabilidad, distribución y control operativo.”
            
            Descripción complementaria:
            
            “Trabajamos con empresas de distintos sectores, y este foco crece a partir de necesidades y proyectos reales que requieren más visibilidad, seguimiento y control.”
            
            Procesos:
            
            - Inventarios y stock.
            - Movimientos entre sucursales.
            - Trazabilidad.
            - Distribución y seguimiento.
            - Control operativo.
            
            CTA:
            
            No tiene CTA propio.
            
            Visual:
            
            Representación tecnológica de una operación conectada:
            
            Inventario → Movimientos → Trazabilidad → Distribución → Control.
            ```
            
        - Sección 6 — Cómo trabajamos ✅
            
            ```jsx
            # BLUEPRINT DEFINITIVO — HOME / SECCIÓN 6: CÓMO TRABAJAMOS
            
            ## Estado
            
            APROBADO.
            
            Utilizar este blueprint como versión definitiva de la Sección 6 de la Home.
            
            El mockup aprobado debe utilizarse como referencia visual junto con estas instrucciones.
            
            ---
            
            # 1. Nombre e identificador
            
            Nombre:
            
            “Cómo trabajamos”
            
            ID:
            
            `como-trabajamos`
            
            Ubicación:
            
            Debe aparecer inmediatamente después de:
            
            “Operaciones y logística”
            
            y antes de:
            
            “Equipo”
            
            Recorrido:
            
            Problemas
            ↓
            Soluciones
            ↓
            Proyecto destacado
            ↓
            Operaciones y logística
            ↓
            Cómo trabajamos
            ↓
            Equipo
            ↓
            Contacto
            
            ---
            
            # 2. Objetivo de la sección
            
            Explicar de forma simple, transparente y fácil de entender cómo trabaja MendoData desde que una empresa realiza una consulta hasta que la solución se implementa.
            
            La sección debe comunicar que:
            
            - no empezamos vendiendo una herramienta;
            - primero entendemos la necesidad y el contexto;
            - después definimos qué solución conviene;
            - presentamos alcance, tiempos estimados e inversión;
            - desarrollamos e implementamos;
            - acompañamos la puesta en funcionamiento y evolución cuando corresponde.
            
            La sensación buscada es:
            
            “Hay un proceso claro, pero la solución se adapta a mi empresa.”
            
            No convertir esta sección en una explicación extensa del proceso comercial interno.
            
            ---
            
            # 3. Título
            
            H2:
            
            “Cómo trabajamos”
            
            ---
            
            # 4. Descripción introductoria
            
            Utilizar exactamente:
            
            “No empezamos por una herramienta. Primero entendemos cómo funciona tu operación y después definimos la solución adecuada.”
            
            Debe aparecer debajo del H2.
            
            Características:
            
            - lenguaje simple;
            - ancho de lectura cómodo;
            - menor jerarquía que el título;
            - comprensible para personas no técnicas;
            - coherente con el posicionamiento general de MendoData.
            
            No mencionar tecnologías específicas.
            
            ---
            
            # 5. Estructura
            
            Mostrar un proceso visual de cuatro etapas:
            
            1. Consulta inicial.
            2. Entendimiento del contexto.
            3. Recomendación y propuesta.
            4. Desarrollo e implementación.
            
            Las cuatro etapas deben sentirse como parte de un mismo recorrido.
            
            No convertirlas en cuatro servicios diferentes.
            
            ---
            
            # 6. Etapa 1 — Consulta inicial
            
            Título:
            
            “Consulta inicial”
            
            Descripción:
            
            “Nos contás qué proceso, problema o necesidad querés mejorar.”
            
            La consulta puede comenzar mediante:
            
            - formulario;
            - WhatsApp.
            
            El objetivo es entender brevemente qué necesita la empresa y determinar cómo continuar.
            
            Ícono conceptual:
            
            - conversación;
            - mensaje;
            - formulario.
            
            Identificador:
            
            `process-step-consulta`
            
            No mostrar:
            
            - Calendly;
            - precios;
            - formularios adicionales;
            - agenda automática.
            
            ---
            
            # 7. Etapa 2 — Entendimiento del contexto
            
            Título:
            
            “Entendimiento del contexto”
            
            Descripción:
            
            “Conocemos cómo funciona actualmente la operación, quiénes participan y qué limitaciones existen.”
            
            Esta etapa representa la comprensión de:
            
            - proceso actual;
            - personas involucradas;
            - herramientas existentes;
            - dificultades;
            - prioridades;
            - restricciones.
            
            No es necesario mostrar esta lista completa visualmente.
            
            La descripción principal debe mantenerse breve.
            
            Ícono conceptual:
            
            - lupa;
            - análisis;
            - proceso;
            - contexto.
            
            Identificador:
            
            `process-step-contexto`
            
            No utilizar:
            
            “Diagnóstico gratuito”
            
            ni prometer una consultoría completa sin costo.
            
            ---
            
            # 8. Etapa 3 — Recomendación y propuesta
            
            Título:
            
            “Recomendación y propuesta”
            
            Descripción:
            
            “Definimos qué solución conviene y presentamos su alcance, tiempos estimados e inversión.”
            
            La propuesta puede involucrar:
            
            - sistemas a medida;
            - automatización;
            - datos;
            - integraciones;
            - herramientas Microsoft;
            - combinación de distintas tecnologías.
            
            Esta información no necesita aparecer completa dentro de la tarjeta.
            
            La tecnología debe continuar siendo secundaria.
            
            Ícono conceptual:
            
            - documento;
            - propuesta;
            - solución;
            - herramienta.
            
            Identificador:
            
            `process-step-propuesta`
            
            No mostrar:
            
            - precios fijos;
            - paquetes cerrados;
            - plazos garantizados antes de conocer el alcance.
            
            ---
            
            # 9. Etapa 4 — Desarrollo e implementación
            
            Título:
            
            “Desarrollo e implementación”
            
            Descripción:
            
            “Construimos, validamos e implementamos la solución, acompañando su puesta en funcionamiento.”
            
            Esta etapa puede involucrar:
            
            - desarrollo;
            - configuración;
            - pruebas;
            - validación;
            - implementación;
            - ajustes;
            - acompañamiento inicial;
            - mejoras posteriores cuando corresponda.
            
            No es necesario mostrar esta lista completa dentro del diseño.
            
            Ícono conceptual:
            
            - engranaje;
            - construcción;
            - implementación;
            - avance.
            
            Identificador:
            
            `process-step-implementacion`
            
            No prometer soporte o acompañamiento ilimitado.
            
            ---
            
            # 10. Aclaración comercial
            
            Debajo del proceso mostrar una aclaración breve:
            
            “Después de recibir tu consulta, nos ponemos en contacto para entender mejor la necesidad. Si tiene sentido avanzar, coordinamos una primera conversación.”
            
            Esta frase debe explicar qué ocurre después de enviar una consulta sin entrar en el detalle del proceso comercial interno.
            
            No mencionar públicamente:
            
            - cantidad obligatoria de reuniones;
            - segunda llamada;
            - seguimiento comercial;
            - etapas internas del CRM;
            - responsables internos;
            - Calendly como herramienta.
            
            La coordinación puede realizarse posteriormente mediante el sistema que MendoData utilice.
            
            ---
            
            # 11. Flexibilidad del proceso
            
            El proceso mostrado representa la forma habitual de trabajo.
            
            No debe presentarse como una secuencia rígida e idéntica para todos los proyectos.
            
            El alcance, cantidad de conversaciones, validaciones y etapas pueden variar según:
            
            - complejidad;
            - tipo de solución;
            - contexto;
            - necesidades del cliente.
            
            No es necesario mostrar esta explicación como un bloque grande.
            
            Puede resolverse mediante una frase secundaria breve si el diseño lo requiere.
            
            ---
            
            # 12. Layout desktop
            
            Seguir el mockup aprobado.
            
            Orden:
            
            1. H2.
            2. Descripción introductoria.
            3. Proceso de cuatro etapas.
            4. Aclaración comercial.
            
            Representación:
            
                   Cómo trabajamos
            
            [ Descripción introductoria ]
            
               01                 02                 03                 04
            
            Consulta inicial  →  Entendimiento  →  Recomendación  →  Desarrollo e
                                  del contexto      y propuesta       implementación
            
            Texto breve          Texto breve        Texto breve        Texto breve
            
            [ Aclaración comercial ]
            
            ---
            
            # 13. Proceso visual desktop
            
            Mostrar las cuatro etapas en una misma fila cuando el ancho lo permita.
            
            Cada etapa debe tener:
            
            - número o indicador de etapa;
            - ícono;
            - título;
            - descripción breve.
            
            Puede existir una línea o conexión visual entre etapas.
            
            La conexión debe ser discreta.
            
            No debe parecer:
            
            - timeline corporativo complejo;
            - diagrama técnico;
            - workflow de software.
            
            Las cuatro etapas deben tener:
            
            - ancho equilibrado;
            - altura visual coherente;
            - misma jerarquía;
            - espaciado consistente.
            
            ---
            
            # 14. Tablet
            
            En tablet puede utilizarse:
            
            - cuatro etapas en fila si mantienen buena legibilidad;
            - grilla 2 x 2;
            - secuencia vertical.
            
            Elegir la alternativa que mantenga mejor claridad.
            
            No comprimir las tarjetas para conservar cuatro columnas.
            
            La secuencia debe continuar siendo evidente.
            
            ---
            
            # 15. Mobile
            
            Utilizar una secuencia vertical.
            
            Orden:
            
            01 — Consulta inicial
            ↓
            02 — Entendimiento del contexto
            ↓
            03 — Recomendación y propuesta
            ↓
            04 — Desarrollo e implementación
            
            Después:
            
            Aclaración comercial.
            
            Cada etapa debe mostrar:
            
            - número;
            - ícono;
            - título;
            - descripción.
            
            Mantener una conexión visual vertical sutil si mejora la comprensión.
            
            No utilizar:
            
            - carrusel;
            - scroll horizontal;
            - tabs;
            - acordeones;
            - contenido oculto.
            
            El usuario debe poder comprender todo el proceso recorriendo verticalmente la página.
            
            ---
            
            # 16. Estilo visual
            
            Mantener la identidad general de MendoData.
            
            Priorizar:
            
            - fondo claro;
            - navy / azul profundo;
            - azul como color de acento;
            - íconos simples;
            - bordes suaves;
            - líneas de conexión discretas;
            - buen espacio en blanco;
            - lectura rápida.
            
            La sección debe sentirse:
            
            - ordenada;
            - transparente;
            - profesional;
            - cercana.
            
            No utilizar elementos visuales excesivamente complejos.
            
            ---
            
            # 17. Jerarquía visual
            
            El protagonista debe ser el recorrido completo.
            
            Evitar que una etapa parezca más importante que las demás.
            
            Jerarquía:
            
            1. H2.
            2. Descripción.
            3. Etapas.
            4. Aclaración comercial.
            
            La aclaración final debe ser visible pero no competir con las cuatro etapas.
            
            ---
            
            # 18. CTA
            
            Esta sección NO debe tener CTA propio.
            
            No agregar:
            
            - “Agendar reunión”.
            - “Agendá una llamada”.
            - Calendly.
            - “Solicitar diagnóstico”.
            - “Conocé más”.
            - botón de WhatsApp dentro de la sección.
            - “Solicitar presupuesto”.
            
            El visitante encontrará nuevamente las opciones de contacto en la Sección 8.
            
            El botón flotante de WhatsApp continúa disponible como componente global.
            
            ---
            
            # 19. Relación con las demás secciones
            
            Las secciones anteriores explican:
            
            Problema
            ↓
            Soluciones
            ↓
            Evidencia
            ↓
            Especialización
            
            Esta sección responde:
            
            “¿Qué pasa si decido hablar con MendoData?”
            
            La sección siguiente, Equipo, responde:
            
            “¿Quiénes están detrás de MendoData?”
            
            Por eso Cómo trabajamos debe funcionar como puente entre las capacidades de la empresa y las personas que las llevan adelante.
            
            ---
            
            # 20. Accesibilidad
            
            Implementar:
            
            - H2 semántico;
            - H3 para cada etapa cuando corresponda;
            - orden lógico del contenido en HTML;
            - contraste suficiente;
            - texto legible;
            - íconos decorativos con `aria-hidden="true"`;
            - no depender de líneas o colores para comprender la secuencia.
            
            En mobile el orden del DOM debe coincidir con el orden visual.
            
            ---
            
            # 21. Interacciones y animaciones
            
            No es necesario que las etapas sean interactivas.
            
            No convertirlas en enlaces.
            
            Si se utiliza una animación para mostrar progresivamente el proceso:
            
            - debe ser sutil;
            - no debe retrasar la lectura;
            - debe respetar `prefers-reduced-motion`.
            
            La sección debe funcionar completamente sin animaciones.
            
            ---
            
            # 22. Medición
            
            La sección no necesita eventos específicos de clic porque no tiene CTA ni elementos interactivos.
            
            Si ya existe medición de visualización de secciones:
            
            Evento:
            
            `section_view`
            
            Datos:
            
            - `page: home`
            - `section: como_trabajamos`
            
            No crear infraestructura de analítica únicamente para esta sección.
            
            ---
            
            # 23. No hacer
            
            No:
            
            - convertir la sección en el proceso comercial interno completo;
            - mostrar el CRM;
            - mostrar Calendly;
            - obligar al visitante a agendar;
            - prometer diagnóstico gratuito;
            - prometer plazos sin conocer el alcance;
            - mostrar precios;
            - ofrecer paquetes cerrados;
            - presentar una tecnología como solución automática;
            - agregar CTA;
            - crear más de cuatro etapas;
            - llenar cada etapa de texto;
            - utilizar un carrusel en mobile;
            - modificar otras secciones de la Home.
            
            ---
            
            # 24. Criterios de aceptación
            
            La sección estará terminada cuando:
            
            - aparezca después de Operaciones y logística;
            - utilice el H2 “Cómo trabajamos”;
            - utilice la descripción introductoria definida;
            - muestre exactamente cuatro etapas;
            - las cuatro etapas sigan una secuencia clara;
            - comunique que primero se entiende el problema;
            - la propuesta aparezca antes del desarrollo;
            - explique qué ocurre después de una consulta;
            - no obligue a agendar una reunión;
            - no muestre Calendly;
            - no prometa diagnóstico gratuito;
            - no muestre precios o tiempos definitivos;
            - no tenga CTA propio;
            - funcione correctamente en desktop;
            - funcione correctamente en tablet;
            - funcione correctamente en mobile;
            - no genere scroll horizontal;
            - mantenga la identidad visual de MendoData;
            - sea comprensible sin conocimientos técnicos.
            
            ---
            
            # 25. Resumen de contenido definitivo
            
            Título:
            
            “Cómo trabajamos”
            
            Descripción:
            
            “No empezamos por una herramienta. Primero entendemos cómo funciona tu operación y después definimos la solución adecuada.”
            
            Etapa 1:
            
            “Consulta inicial”
            
            “Nos contás qué proceso, problema o necesidad querés mejorar.”
            
            Etapa 2:
            
            “Entendimiento del contexto”
            
            “Conocemos cómo funciona actualmente la operación, quiénes participan y qué limitaciones existen.”
            
            Etapa 3:
            
            “Recomendación y propuesta”
            
            “Definimos qué solución conviene y presentamos su alcance, tiempos estimados e inversión.”
            
            Etapa 4:
            
            “Desarrollo e implementación”
            
            “Construimos, validamos e implementamos la solución, acompañando su puesta en funcionamiento.”
            
            Aclaración final:
            
            “Después de recibir tu consulta, nos ponemos en contacto para entender mejor la necesidad. Si tiene sentido avanzar, coordinamos una primera conversación.”
            
            CTA:
            
            No tiene CTA propio.
            ```
            
        - Sección 7 — Equipo ✅
            
            ```jsx
            # BLUEPRINT DEFINITIVO — HOME / SECCIÓN 7: EQUIPO
            
            ## Estado
            
            APROBADO.
            
            Utilizar este blueprint como versión definitiva de la Sección 7 de la Home.
            
            IMPORTANTE:
            
            MendoData está formada actualmente por tres personas:
            
            - Juan Diego Caballero.
            - Gonzalo Manresa.
            - Leandro Hirschegger.
            
            Julián Fierro ya no forma parte del equipo y NO debe aparecer en la web.
            
            Cualquier blueprint, mockup, componente, array de datos, imagen o referencia anterior que muestre cuatro integrantes debe considerarse desactualizado.
            
            El mockup anterior de esta sección puede utilizarse únicamente como referencia de estilo visual.
            
            ---
            
            # 1. Nombre e identificador
            
            Nombre:
            
            “Equipo”
            
            ID:
            
            `equipo`
            
            Ubicación:
            
            Debe aparecer inmediatamente después de:
            
            “Cómo trabajamos”
            
            y antes de:
            
            “Contacto final”
            
            Recorrido:
            
            Cómo trabajamos
            ↓
            Equipo
            ↓
            Contacto final
            
            ---
            
            # 2. Objetivo de la sección
            
            Mostrar que detrás de MendoData existe un equipo real, pequeño y con responsabilidades concretas.
            
            La sección debe transmitir:
            
            - cercanía;
            - profesionalismo;
            - transparencia;
            - capacidad técnica;
            - entendimiento del negocio;
            - capacidad comercial;
            - complementariedad entre los integrantes.
            
            El visitante debe poder identificar rápidamente:
            
            - quién es cada persona;
            - cuál es su rol;
            - qué aporta a MendoData.
            
            La sección debe ser breve.
            
            No convertirla en una presentación institucional extensa ni en una página de currículums.
            
            ---
            
            # 3. Título
            
            H2:
            
            “El equipo detrás de MendoData”
            
            Utilizar exactamente este texto.
            
            ---
            
            # 4. Descripción introductoria
            
            Utilizar exactamente:
            
            “Somos un equipo de tres personas que combina tecnología, análisis de negocios, marketing y desarrollo comercial para construir soluciones adaptadas a cada empresa.”
            
            Debe aparecer debajo del H2.
            
            Características:
            
            - tono cercano y profesional;
            - extensión breve;
            - menor jerarquía que el título;
            - ancho de lectura cómodo;
            - no presentar a MendoData como una empresa grande;
            - no exagerar experiencia ni estructura.
            
            No utilizar:
            
            - “equipo multidisciplinario”;
            - “equipo de expertos”;
            - “líderes de la industria”;
            - expresiones corporativas exageradas.
            
            ---
            
            # 5. Integrantes
            
            Mostrar exactamente tres integrantes.
            
            Orden:
            
            1. Juan Diego Caballero.
            2. Gonzalo Manresa.
            3. Leandro Hirschegger.
            
            No agregar un cuarto perfil vacío.
            
            No mantener espacios visuales destinados anteriormente a Julián.
            
            ---
            
            # 6. Integrante 1 — Juan Diego Caballero
            
            Nombre:
            
            “Juan Diego Caballero”
            
            Rol:
            
            “Ingeniero en Software”
            
            Descripción:
            
            “Desarrolla sistemas y soluciones digitales para MendoData.”
            
            Identificador:
            
            `team-member-juan-diego`
            
            Foto:
            
            `team-photo-juan-diego`
            
            No agregar títulos como:
            
            - Senior;
            - Lead;
            - CTO;
            - Director;
            - Software Lead.
            
            Mantener el rol simple y real.
            
            ---
            
            # 7. Integrante 2 — Gonzalo Manresa
            
            Nombre:
            
            “Gonzalo Manresa”
            
            Rol:
            
            “Analista de Negocios”
            
            Descripción:
            
            “Entiende los procesos y ayuda a definir cada solución.”
            
            Identificador:
            
            `team-member-gonzalo`
            
            Foto:
            
            `team-photo-gonzalo`
            
            No agregar:
            
            - CEO;
            - Director;
            - Consultor Senior;
            - Business Lead.
            
            El foco debe estar en su aporte al entendimiento de procesos y definición de soluciones.
            
            ---
            
            # 8. Integrante 3 — Leandro Hirschegger
            
            Nombre:
            
            “Leandro Hirschegger”
            
            Rol:
            
            “Marketing y Desarrollo Comercial”
            
            Descripción:
            
            “Trabaja en marketing, comunicación y desarrollo comercial.”
            
            Identificador:
            
            `team-member-leandro`
            
            Foto:
            
            `team-photo-leandro`
            
            Utilizar exactamente:
            
            “Hirschegger”
            
            No utilizar como rol:
            
            - Head of Growth;
            - Director de Marketing;
            - CMO;
            - Marketing Director;
            - Responsable de Crecimiento.
            
            Mantener una denominación clara y natural.
            
            ---
            
            # 9. Estructura de cada perfil
            
            Cada perfil debe contener:
            
            1. Fotografía.
            2. Nombre.
            3. Rol.
            4. Descripción breve.
            
            La jerarquía debe ser:
            
            Fotografía
            ↓
            Nombre
            ↓
            Rol
            ↓
            Descripción
            
            Las descripciones deben mantenerse en una sola oración.
            
            No agregar:
            
            - biografías;
            - estudios detallados;
            - experiencia laboral extensa;
            - años de experiencia;
            - LinkedIn dentro de cada tarjeta salvo que se defina posteriormente;
            - botones individuales.
            
            ---
            
            # 10. Fotografías
            
            La versión final debe utilizar preferentemente fotografías individuales reales de los tres integrantes.
            
            Las fotografías deben compartir un criterio visual coherente:
            
            - encuadre similar;
            - proporción similar;
            - iluminación compatible;
            - fondo similar o visualmente coherente;
            - expresión natural;
            - calidad equivalente;
            - apariencia profesional pero cercana.
            
            No utilizar:
            
            - fotografías de stock;
            - rostros generados por IA como versión definitiva;
            - filtros excesivos;
            - poses corporativas artificiales;
            - imágenes de baja calidad mezcladas con imágenes profesionales.
            
            ---
            
            # 11. Placeholders
            
            Mientras no estén disponibles las fotografías finales se pueden utilizar placeholders neutros.
            
            Identificadores:
            
            `team-photo-juan-diego`
            
            `team-photo-gonzalo`
            
            `team-photo-leandro`
            
            Los placeholders son únicamente para desarrollo.
            
            No publicar placeholders como si fueran fotografías reales.
            
            Eliminar cualquier referencia anterior a:
            
            `team-photo-julian`
            
            ---
            
            # 12. Fotografía grupal
            
            La fotografía grupal es opcional.
            
            La prioridad es utilizar las tres fotografías individuales.
            
            Una fotografía grupal puede utilizarse como alternativa únicamente si:
            
            - aparecen los tres integrantes actuales;
            - tiene buena calidad;
            - representa correctamente al equipo actual;
            - mantiene una estética natural y profesional.
            
            No utilizar una fotografía grupal anterior si aparece Julián.
            
            Identificador:
            
            `team-group-photo`
            
            No es necesario mostrar simultáneamente:
            
            - fotografía grupal;
            - tres fotografías individuales.
            
            Preferencia:
            
            1. Tres fotografías individuales.
            2. Fotografía grupal como alternativa.
            3. Ambas solamente si existe una razón visual clara y la sección no se vuelve demasiado extensa.
            
            ---
            
            # 13. Layout desktop
            
            Seguir el lenguaje visual del mockup aprobado, adaptándolo a tres integrantes.
            
            Orden:
            
            1. H2.
            2. Descripción introductoria.
            3. Grilla de tres perfiles.
            
            Distribución:
            
            [ Juan Diego ]   [ Gonzalo ]   [ Leandro ]
            
            Las tres tarjetas deben estar centradas dentro del contenedor.
            
            Cada perfil debe tener:
            
            - mismo ancho;
            - misma estructura;
            - misma proporción de fotografía;
            - alineación coherente;
            - altura visual equilibrada.
            
            No dejar un cuarto espacio vacío.
            
            No utilizar una grilla de cuatro columnas.
            
            La composición de tres perfiles debe sentirse intencional y equilibrada.
            
            ---
            
            # 14. Tablet
            
            Utilizar tres columnas mientras exista espacio suficiente para mantener:
            
            - fotografías legibles;
            - nombres sin compresión;
            - roles claros;
            - descripciones cómodas.
            
            Si tres columnas dejan de funcionar correctamente, utilizar:
            
            2 perfiles
            +
            1 perfil centrado debajo.
            
            Ejemplo:
            
            [ Juan Diego ] [ Gonzalo ]
            
                   [ Leandro ]
            
            No reducir excesivamente las tarjetas para conservar tres columnas.
            
            ---
            
            # 15. Mobile
            
            Utilizar una sola columna.
            
            Orden:
            
            1. Juan Diego Caballero.
            2. Gonzalo Manresa.
            3. Leandro Hirschegger.
            
            Representación:
            
            [ Foto Juan Diego ]
            
            Juan Diego Caballero
            Ingeniero en Software
            Descripción
            
            [ Foto Gonzalo ]
            
            Gonzalo Manresa
            Analista de Negocios
            Descripción
            
            [ Foto Leandro ]
            
            Leandro Hirschegger
            Marketing y Desarrollo Comercial
            Descripción
            
            Mantener:
            
            - márgenes laterales cómodos;
            - fotografías de tamaño consistente;
            - textos claramente legibles;
            - separación vertical uniforme.
            
            No utilizar:
            
            - carrusel;
            - scroll horizontal;
            - acordeones;
            - perfiles ocultos.
            
            Los tres integrantes deben estar visibles recorriendo la página verticalmente.
            
            ---
            
            # 16. Estilo visual
            
            Mantener la identidad general de MendoData y el criterio del mockup.
            
            Priorizar:
            
            - fondo claro;
            - navy / azul profundo;
            - azul como acento;
            - fotografías protagonistas;
            - tarjetas o bloques limpios;
            - bordes suaves;
            - sombras sutiles;
            - bastante espacio en blanco;
            - tipografía clara.
            
            La sección debe sentirse humana y cercana.
            
            No debe parecer:
            
            - organigrama corporativo;
            - página de LinkedIn;
            - sección de currículums;
            - gran estructura empresarial.
            
            ---
            
            # 17. Relación con la sección anterior
            
            La sección anterior explica:
            
            “Así trabaja MendoData.”
            
            Esta sección responde:
            
            “Estas son las personas que hacen ese trabajo.”
            
            Debe reforzar la confianza antes de llegar al contacto final.
            
            No repetir la explicación de servicios ni del proceso de trabajo.
            
            ---
            
            # 18. CTA
            
            Esta sección NO debe tener CTA propio.
            
            No agregar:
            
            - “Contactá a Juan Diego”.
            - “Contactá a Gonzalo”.
            - “Contactá a Leandro”.
            - botones personales;
            - Calendly individual;
            - WhatsApp individual;
            - “Conocé más”.
            
            La siguiente sección contiene el CTA de contacto general de MendoData.
            
            ---
            
            # 19. Redes personales
            
            No incorporar automáticamente perfiles personales de:
            
            - LinkedIn;
            - Instagram;
            - X;
            - otras redes.
            
            Solo agregar enlaces personales si posteriormente se decide explícitamente.
            
            Las redes oficiales de MendoData corresponden al Footer u otros componentes globales.
            
            ---
            
            # 20. Accesibilidad
            
            Implementar:
            
            - H2 semántico;
            - nombre de cada integrante con jerarquía adecuada;
            - texto alternativo de cada fotografía;
            - contraste suficiente;
            - contenido legible;
            - estructura HTML coherente.
            
            Alt sugeridos:
            
            Juan Diego:
            
            “Juan Diego Caballero, Ingeniero en Software de MendoData.”
            
            Gonzalo:
            
            “Gonzalo Manresa, Analista de Negocios de MendoData.”
            
            Leandro:
            
            “Leandro Hirschegger, Marketing y Desarrollo Comercial de MendoData.”
            
            Si las fotografías son puramente decorativas y el nombre aparece inmediatamente al lado, evitar redundancia innecesaria para lectores de pantalla según la implementación final.
            
            ---
            
            # 21. Medición
            
            La sección no tiene interacciones principales.
            
            No crear eventos individuales por integrante.
            
            Si el sitio ya mide visualización de secciones, reutilizar:
            
            `section_view`
            
            Datos:
            
            - `page: home`
            - `section: equipo`
            
            No crear infraestructura de analítica exclusivamente para esta sección.
            
            ---
            
            # 22. Limpieza de contenido anterior
            
            Eliminar por completo cualquier referencia a:
            
            “Julián Fierro”
            
            “Contenido Audiovisual”
            
            `team-member-julian`
            
            `team-photo-julian`
            
            Cualquier array o estructura de datos del componente debe contener únicamente tres integrantes.
            
            Revisar también:
            
            - desktop;
            - tablet;
            - mobile;
            - contenido oculto;
            - alt texts;
            - placeholders;
            - mocks;
            - datos hardcodeados;
            - componentes reutilizados.
            
            No dejar referencias antiguas aunque no sean visibles.
            
            ---
            
            # 23. Mockup anterior
            
            El mockup existente de esta sección muestra cuatro integrantes y está desactualizado en ese aspecto.
            
            Utilizarlo únicamente como referencia para:
            
            - estilo;
            - jerarquía;
            - tratamiento de fotografías;
            - tipografía;
            - espaciado;
            - estética general.
            
            NO utilizarlo como referencia para:
            
            - cantidad de personas;
            - nombres;
            - distribución de cuatro columnas.
            
            La implementación definitiva debe mostrar tres integrantes.
            
            ---
            
            # 24. No hacer
            
            No:
            
            - mostrar a Julián;
            - mostrar cuatro integrantes;
            - dejar una cuarta tarjeta vacía;
            - inventar nuevos integrantes;
            - exagerar cargos;
            - agregar títulos corporativos;
            - utilizar biografías extensas;
            - agregar CTA;
            - agregar redes personales no aprobadas;
            - utilizar fotos falsas como definitivas;
            - convertir la sección en un organigrama;
            - modificar otras secciones de la Home.
            
            ---
            
            # 25. Criterios de aceptación
            
            La sección estará terminada cuando:
            
            - aparezca después de “Cómo trabajamos”;
            - utilice el título “El equipo detrás de MendoData”;
            - indique que MendoData está formado por tres personas;
            - muestre únicamente a Juan Diego, Gonzalo y Leandro;
            - utilice los roles definidos;
            - utilice las descripciones breves definidas;
            - no exista ninguna referencia a Julián;
            - desktop muestre tres perfiles equilibrados y centrados;
            - tablet se adapte correctamente;
            - mobile muestre los tres perfiles en una columna;
            - las fotografías mantengan un criterio coherente;
            - no tenga CTA propio;
            - mantenga la identidad visual de MendoData;
            - no genere scroll horizontal;
            - no presente a MendoData como una empresa más grande de lo que es.
            
            ---
            
            # 26. Resumen de contenido definitivo
            
            Título:
            
            “El equipo detrás de MendoData”
            
            Descripción:
            
            “Somos un equipo de tres personas que combina tecnología, análisis de negocios, marketing y desarrollo comercial para construir soluciones adaptadas a cada empresa.”
            
            JUAN DIEGO CABALLERO
            
            Ingeniero en Software
            
            “Desarrolla sistemas y soluciones digitales para MendoData.”
            
            GONZALO MANRESA
            
            Analista de Negocios
            
            “Entiende los procesos y ayuda a definir cada solución.”
            
            LEANDRO HIRSCHEGGER
            
            Marketing y Desarrollo Comercial
            
            “Trabaja en marketing, comunicación y desarrollo comercial.”
            
            CTA:
            
            No tiene CTA propio.
            
            DESKTOP:
            
            [ Juan Diego ]   [ Gonzalo ]   [ Leandro ]
            
            MOBILE:
            
            [ Juan Diego ]
            
            [ Gonzalo ]
            
            [ Leandro ]
            ```
            
        - Sección 8 — Contacto final ✅
            
            ```jsx
            # BLUEPRINT DEFINITIVO — HOME / SECCIÓN 8: CONTACTO FINAL
            
            ## Estado
            
            APROBADO.
            
            Utilizar este blueprint como versión definitiva de la Sección 8 de la Home.
            
            La tercera referencia visual adjunta —layout de dos columnas con contenido a la izquierda y formulario a la derecha— debe utilizarse como referencia principal de composición.
            
            Las capturas anteriores pueden utilizarse como referencia de:
            
            - estilo del formulario;
            - campos;
            - tipografía;
            - colores;
            - comportamiento existente.
            
            No utilizar como referencia definitiva la composición centrada anterior.
            
            ---
            
            # 1. Nombre e identificador
            
            Nombre:
            
            “Contacto final”
            
            ID:
            
            `contacto`
            
            Debe aparecer inmediatamente después de:
            
            “Equipo”
            
            y antes del Footer.
            
            Esta es la principal sección de conversión del sitio.
            
            También constituye el punto principal de contacto de MendoData dentro de la arquitectura V1.
            
            Ruta de acceso desde otras páginas:
            
            `/#contacto`
            
            Dentro de la propia Home puede utilizarse:
            
            `#contacto`
            
            No existe una página independiente:
            
            `/contacto`
            
            ---
            
            # 2. Objetivo
            
            Facilitar que una persona que recorrió la Home o llegó desde otra página pueda iniciar una conversación con MendoData con la menor fricción posible.
            
            La sección debe permitir:
            
            1. enviar una consulta mediante formulario;
            2. utilizar WhatsApp como alternativa.
            
            También debe explicar brevemente qué ocurre después de enviar una consulta.
            
            La sección no debe obligar a:
            
            - agendar una reunión;
            - seleccionar una tecnología;
            - conocer qué solución necesita;
            - completar un formulario largo.
            
            La idea debe ser:
            
            “Contanos qué está pasando. Nosotros te ayudamos a entender cómo avanzar.”
            
            ---
            
            # 3. Estructura desktop
            
            Utilizar un layout de dos columnas.
            
            ## Columna izquierda
            
            Contendrá:
            
            1. Rótulo.
            2. H2.
            3. Descripción.
            4. Bloque breve “Qué pasa después”.
            
            ## Columna derecha
            
            Contendrá:
            
            1. Formulario.
            2. Botón principal.
            3. Separador.
            4. Alternativa de WhatsApp.
            
            Distribución aproximada:
            
            - contenido izquierdo: 42%–45%;
            - formulario derecho: 55%–58%.
            
            Debe existir suficiente separación entre ambas columnas.
            
            La composición debe sentirse equilibrada y funcionar como cierre fuerte de la Home.
            
            ---
            
            # 4. Rótulo
            
            Utilizar exactamente:
            
            “CONTACTO”
            
            No utilizar:
            
            “CONTACTO FINAL”
            
            como texto visible.
            
            “Contacto final” puede mantenerse únicamente como nombre interno de la sección dentro de la documentación.
            
            Tratamiento:
            
            - pequeño;
            - mayúsculas;
            - azul;
            - espaciado entre letras;
            - baja jerarquía.
            
            ---
            
            # 5. Título
            
            H2:
            
            “Contanos qué necesitás resolver”
            
            Utilizar exactamente este texto.
            
            Debe ser el elemento textual principal de la columna izquierda.
            
            No utilizar:
            
            “Contanos qué proceso querés digitalizar”
            
            porque limita innecesariamente la consulta a procesos que el visitante ya reconoce como candidatos a digitalización.
            
            El usuario no necesita saber de antemano qué tecnología o solución necesita.
            
            ---
            
            # 6. Descripción
            
            Utilizar exactamente:
            
            “Contanos brevemente qué proceso querés mejorar o qué situación está dificultando la operación de tu empresa.”
            
            Debe:
            
            - aparecer debajo del H2;
            - ser fácil de entender;
            - tener un ancho cómodo;
            - evitar términos técnicos;
            - mantener un tono cercano.
            
            ---
            
            # 7. Bloque “Qué pasa después”
            
            Debajo de la descripción mostrar un bloque visual secundario.
            
            Título:
            
            “Qué pasa después”
            
            Texto:
            
            “Después de recibir tu consulta, nos ponemos en contacto para entender mejor la necesidad. Si tiene sentido avanzar, coordinamos una primera conversación.”
            
            Este texto debe ser exactamente coherente con la Sección 6 — Cómo trabajamos.
            
            Su objetivo es reducir incertidumbre antes de que el visitante complete el formulario.
            
            ---
            
            ## Diseño del bloque
            
            Debe ser pequeño y liviano.
            
            Puede utilizar:
            
            - fondo azul muy claro;
            - borde suave;
            - ícono simple;
            - border-radius consistente con el sitio.
            
            Ícono sugerido:
            
            - conversación;
            - mensaje;
            - documento;
            - contacto.
            
            No convertir este bloque en una tarjeta grande.
            
            No agregar más pasos.
            
            No mencionar:
            
            - Calendly;
            - cantidad de reuniones;
            - diagnóstico gratuito;
            - tiempos de respuesta.
            
            ---
            
            # 8. Contenedor del formulario
            
            En desktop, colocar el formulario dentro de una tarjeta o superficie clara como muestra el mockup aprobado.
            
            La tarjeta puede utilizar:
            
            - fondo blanco;
            - border-radius;
            - sombra muy suave;
            - borde discreto;
            - padding generoso.
            
            No debe sentirse como un modal ni como un elemento separado del sitio.
            
            Debe integrarse visualmente con la sección.
            
            ---
            
            # 9. Campos del formulario
            
            Mantener exactamente cuatro campos.
            
            Orden:
            
            1. Nombre.
            2. Email.
            3. Empresa o rubro.
            4. Mensaje.
            
            No agregar nuevos campos.
            
            La lógica funcional existente debe revisarse antes de modificar obligatoriedad o validaciones.
            
            La única decisión expresamente definida en este blueprint es:
            
            “Empresa o rubro”
            
            debe ser opcional.
            
            ---
            
            ## Campo 1
            
            Label:
            
            “Nombre”
            
            Placeholder:
            
            “Tu nombre”
            
            Mantener la obligatoriedad actual si ya está correctamente implementada.
            
            Autocomplete recomendado:
            
            `name`
            
            ---
            
            ## Campo 2
            
            Label:
            
            “Email”
            
            Placeholder:
            
            “tucorreo@ejemplo.com”
            
            Mantener validación de email existente.
            
            Autocomplete:
            
            `email`
            
            ---
            
            ## Campo 3
            
            Label:
            
            “Empresa o rubro”
            
            Mostrar como:
            
            “Empresa o rubro (opcional)”
            
            o indicar de manera equivalente que no es obligatorio.
            
            Placeholder:
            
            “Empresa o rubro”
            
            Este campo debe ser opcional.
            
            Autocomplete cuando corresponda:
            
            `organization`
            
            ---
            
            ## Campo 4
            
            Label:
            
            “Mensaje”
            
            Placeholder:
            
            “Contanos brevemente qué proceso te gustaría ordenar.”
            
            Utilizar un textarea con altura suficiente para escribir cómodamente.
            
            ---
            
            # 10. No agregar campos
            
            No agregar:
            
            - teléfono;
            - cargo;
            - cantidad de empleados;
            - presupuesto;
            - tecnología deseada;
            - industria obligatoria;
            - tipo de proyecto;
            - selector de servicio;
            - fecha para reunión.
            
            El objetivo es minimizar fricción.
            
            ---
            
            # 11. Botón principal
            
            Texto exacto:
            
            “Enviar consulta”
            
            Debe ser el CTA principal de la sección.
            
            Características:
            
            - azul de acción;
            - alto contraste;
            - ancho completo dentro del formulario;
            - border-radius coherente;
            - área táctil amplia;
            - hover;
            - focus visible;
            - active.
            
            No cambiar el destino o comportamiento funcional existente del formulario salvo que sea necesario para corregir errores.
            
            ---
            
            # 12. Alternativa de WhatsApp
            
            Debajo del botón principal agregar una separación visual discreta.
            
            Mostrar:
            
            “¿Preferís hablar directamente? Escribinos por WhatsApp.”
            
            Botón secundario:
            
            “Hablar por WhatsApp”
            
            No agregar otro CTA comercial dentro de esta sección.
            
            ---
            
            ## Estilo del botón de WhatsApp
            
            Debe tener menor jerarquía que:
            
            “Enviar consulta”
            
            Preferencia visual:
            
            - fondo blanco o transparente;
            - borde azul;
            - texto azul;
            - ícono de WhatsApp;
            - tamaño más compacto que el botón principal.
            
            No utilizar un botón verde dominante dentro del formulario.
            
            El ícono reconocible de WhatsApp puede utilizar su tratamiento habitual sin alterar la jerarquía general.
            
            ---
            
            # 13. Comportamiento de WhatsApp
            
            Reutilizar exactamente:
            
            - número oficial;
            - enlace oficial;
            - mensaje inicial;
            - comportamiento;
            
            que utilice el componente global de WhatsApp.
            
            No crear otro número ni mantener enlaces de WhatsApp distintos en diferentes partes del sitio.
            
            El botón interno y el botón flotante deben utilizar la misma configuración central.
            
            ---
            
            # 14. WhatsApp flotante
            
            El botón flotante global permanece visible en esta sección.
            
            Debe ubicarse en la esquina inferior derecha.
            
            No forma parte del layout de la sección.
            
            Debe comprobarse especialmente que NO cubra:
            
            - campos;
            - botón “Enviar consulta”;
            - botón “Hablar por WhatsApp”;
            - mensajes de validación;
            - mensajes de éxito.
            
            En mobile respetar:
            
            - safe areas;
            - separación del borde;
            - espacio respecto del Footer;
            - espacio respecto de cualquier sistema de cookies que pueda aparecer.
            
            ---
            
            # 15. Formulario existente
            
            Conservar la lógica funcional ya implementada cuando esté funcionando correctamente.
            
            No modificar innecesariamente:
            
            - endpoint;
            - método de envío;
            - validaciones;
            - tratamiento de errores;
            - estado de carga;
            - mensaje de éxito;
            - destino de los datos.
            
            La modificación principal de esta sección es visual, estructural y de contenido.
            
            Antes de realizar cambios funcionales, revisar la implementación existente.
            
            No crear un segundo formulario o una segunda lógica de contacto.
            
            ---
            
            # 16. Estados del formulario
            
            El formulario debe contemplar correctamente:
            
            ## Estado normal
            
            Campos disponibles y botón:
            
            “Enviar consulta”
            
            ## Estado enviando
            
            Evitar múltiples envíos.
            
            Puede utilizar:
            
            “Enviando…”
            
            ## Estado de éxito
            
            Mostrar una confirmación clara.
            
            Ejemplo válido si no existe actualmente un mensaje aprobado:
            
            “Gracias por escribirnos. Recibimos tu consulta.”
            
            No prometer un tiempo específico de respuesta.
            
            No redirigir automáticamente a Calendly.
            
            No abrir WhatsApp automáticamente.
            
            ## Estado de error
            
            Mostrar un mensaje comprensible y permitir volver a intentar.
            
            No borrar los campos innecesariamente si el envío falla.
            
            No mostrar mensajes técnicos internos.
            
            Si estos estados ya están correctamente implementados, conservarlos.
            
            ---
            
            # 17. Desktop
            
            Representación:
            
            ┌─────────────────────────────┬──────────────────────────────┐
            │ CONTACTO                    │                              │
            │                             │ Nombre                       │
            │ Contanos qué                │ [________________________]   │
            │ necesitás resolver          │                              │
            │                             │ Email                        │
            │ Descripción                 │ [________________________]   │
            │                             │                              │
            │ ┌─────────────────────────┐ │ Empresa o rubro             │
            │ │ Qué pasa después        │ │ [________________________]   │
            │ │                         │ │                              │
            │ │ Después de recibir...   │ │ Mensaje                     │
            │ └─────────────────────────┘ │ [________________________]   │
            │                             │ [________________________]   │
            │                             │                              │
            │                             │ [ Enviar consulta ]          │
            │                             │                              │
            │                             │ ───────────────────────────  │
            │                             │ ¿Preferís hablar             │
            │                             │ directamente?                │
            │                             │                              │
            │                             │ [ Hablar por WhatsApp ]      │
            └─────────────────────────────┴──────────────────────────────┘
            
            ---
            
            # 18. Tablet
            
            Mantener dos columnas mientras exista suficiente espacio.
            
            Si:
            
            - el formulario queda demasiado angosto;
            - el título genera demasiadas líneas;
            - el bloque “Qué pasa después” queda comprimido;
            
            pasar a una sola columna.
            
            No forzar el diseño desktop.
            
            ---
            
            # 19. Mobile
            
            Utilizar una sola columna.
            
            Orden:
            
            1. Rótulo.
            2. H2.
            3. Descripción.
            4. Bloque “Qué pasa después”.
            5. Formulario.
            6. Botón “Enviar consulta”.
            7. Separador.
            8. Texto de WhatsApp.
            9. Botón “Hablar por WhatsApp”.
            
            Representación:
            
            CONTACTO
            
            Contanos qué
            necesitás resolver
            
            Descripción
            
            [ Qué pasa después
              Texto breve ]
            
            [ Nombre ]
            
            [ Email ]
            
            [ Empresa o rubro — opcional ]
            
            [ Mensaje            ]
            
            [ Enviar consulta ]
            
            ───────────────
            
            ¿Preferís hablar directamente?
            Escribinos por WhatsApp.
            
            [ Hablar por WhatsApp ]
            
            ---
            
            # 20. Responsive mobile
            
            En mobile:
            
            - todos los campos deben ocupar una columna;
            - mantener márgenes laterales cómodos;
            - botones con área táctil suficiente;
            - formulario fácil de completar;
            - textarea con altura adecuada;
            - evitar zoom provocado por inputs demasiado pequeños;
            - no generar scroll horizontal;
            - mantener mensajes de validación legibles.
            
            No intentar conservar dos columnas de campos.
            
            ---
            
            # 21. Estilo visual
            
            Seguir principalmente la tercera referencia adjunta.
            
            Mantener:
            
            - fondo claro;
            - navy para título;
            - azul de acción;
            - tarjeta blanca para formulario;
            - fondo azul muy suave para “Qué pasa después”;
            - bordes redondeados;
            - sombras muy suaves;
            - bastante espacio en blanco;
            - decoración abstracta muy discreta si ya forma parte del sistema visual.
            
            La sección debe sentirse:
            
            - clara;
            - cercana;
            - profesional;
            - simple;
            - orientada a conversión.
            
            ---
            
            # 22. Elementos decorativos
            
            Las formas suaves que aparecen en el mockup pueden utilizarse si ayudan a integrar la sección con la identidad visual.
            
            Deben ser:
            
            - sutiles;
            - de bajo contraste;
            - decorativas;
            - no interactivas;
            - ocultadas correctamente para tecnologías asistivas.
            
            No permitir que:
            
            - resten legibilidad;
            - generen ruido visual;
            - ocupen demasiado espacio en mobile.
            
            En mobile pueden reducirse o eliminarse.
            
            ---
            
            # 23. Textos a eliminar
            
            Eliminar:
            
            “Trabajamos con empresas que quieren más orden y control en su operación diaria.”
            
            Eliminar:
            
            “Respondemos todas las consultas a la brevedad.”
            
            No reemplazar este último texto por:
            
            - “Respondemos en 24 horas”.
            - “Respuesta inmediata”.
            - ningún compromiso de tiempo que no esté definido.
            
            ---
            
            # 24. Rol de esta sección dentro del sitio
            
            Esta sección es el punto principal de contacto de la arquitectura V1 de MendoData.
            
            No existe una página independiente:
            
            `/contacto`
            
            Todos los CTA globales que deban llevar al formulario desde otra página deben utilizar:
            
            `/#contacto`
            
            Ejemplos:
            
            Header
            → `/#contacto`
            
            Proyecto destacado desde otra ruta, cuando corresponda
            → `/#contacto`
            
            CTA final de `/proyectos`
            → `/#contacto`
            
            Footer
            → `/#contacto`
            
            Dentro de la propia Home puede utilizarse:
            
            `#contacto`
            
            No crear:
            
            - una segunda página de contacto;
            - un segundo formulario;
            - una segunda lógica de validación;
            - un segundo sistema de envío.
            
            La Sección 8 de la Home es la única experiencia principal de formulario comercial de la V1.
            
            ---
            
            # 25. Relación con Cómo trabajamos
            
            La Sección 6 ya explica el proceso general de MendoData.
            
            Por eso el bloque “Qué pasa después” debe ser únicamente un recordatorio breve.
            
            No volver a mostrar las cuatro etapas.
            
            No repetir:
            
            - Consulta inicial.
            - Entendimiento del contexto.
            - Recomendación y propuesta.
            - Desarrollo e implementación.
            
            Solo explicar qué ocurre inmediatamente después de enviar el formulario.
            
            ---
            
            # 26. Medición
            
            Conservar la medición existente cuando ya esté implementada.
            
            Medir como mínimo, si existe sistema de analítica:
            
            ## Inicio del formulario
            
            `form_start`
            
            Datos:
            
            - `page: home`
            - `section: contacto`
            
            ## Envío correcto
            
            `form_submit`
            
            Datos:
            
            - `page: home`
            - `section: contacto`
            
            ## WhatsApp
            
            `whatsapp_click`
            
            Datos:
            
            - `page: home`
            - `section: contacto`
            - `source: contact_section`
            
            Mantener parámetros UTM y atribución cuando el sistema global ya los gestione.
            
            No solicitar estos datos al usuario.
            
            No crear una integración nueva con CRM únicamente desde esta sección.
            
            ---
            
            # 27. Accesibilidad
            
            Implementar:
            
            - H2 semántico;
            - labels reales asociados a cada input;
            - no depender únicamente de placeholders;
            - mensajes de error asociados al campo correspondiente;
            - navegación completa mediante teclado;
            - focus visible;
            - contraste suficiente;
            - área táctil adecuada;
            - estados de envío anunciables para tecnologías asistivas;
            - `autocomplete` adecuado cuando corresponda.
            
            Ejemplos:
            
            Nombre:
            
            `autocomplete="name"`
            
            Email:
            
            `autocomplete="email"`
            
            Organización:
            
            `autocomplete="organization"`
            
            ---
            
            # 28. No hacer
            
            No:
            
            - volver al título “Contanos qué proceso querés digitalizar”;
            - agregar campos;
            - exigir teléfono;
            - exigir empresa o rubro;
            - agregar selector de servicios;
            - agregar Calendly;
            - abrir automáticamente una agenda;
            - crear una segunda lógica de formulario;
            - crear una página `/contacto`;
            - inventar número de WhatsApp;
            - agregar testimonios;
            - agregar métricas;
            - agregar otro CTA;
            - convertir “Qué pasa después” en una explicación extensa;
            - modificar otras secciones de la Home innecesariamente.
            
            ---
            
            # 29. Criterios de aceptación
            
            La sección estará terminada cuando:
            
            - aparezca después de Equipo;
            - utilice el rótulo “CONTACTO”;
            - utilice el título “Contanos qué necesitás resolver”;
            - utilice el layout de dos columnas en desktop;
            - explique brevemente qué sucede después;
            - contenga únicamente cuatro campos;
            - Empresa o rubro sea opcional;
            - “Enviar consulta” sea el CTA principal;
            - WhatsApp sea una alternativa secundaria;
            - el WhatsApp interno utilice la misma configuración que el flotante;
            - el botón flotante no cubra el formulario;
            - el formulario conserve su funcionamiento actual;
            - esta sección sea el punto principal de contacto del sitio;
            - `/#contacto` funcione correctamente desde `/proyectos` y `/legal`;
            - no exista una página independiente `/contacto`;
            - desktop funcione correctamente;
            - tablet se adapte correctamente;
            - mobile utilice una sola columna;
            - no exista scroll horizontal;
            - existan estados claros de éxito y error;
            - no aparezca Calendly;
            - no existan promesas de tiempos de respuesta;
            - no se hayan modificado otras secciones innecesariamente.
            
            ---
            
            # 30. Resumen de contenido definitivo
            
            NOMBRE INTERNO:
            
            “Contacto final”
            
            ID:
            
            `contacto`
            
            DESTINO GLOBAL:
            
            `/#contacto`
            
            RÓTULO VISIBLE:
            
            “CONTACTO”
            
            TÍTULO:
            
            “Contanos qué necesitás resolver”
            
            DESCRIPCIÓN:
            
            “Contanos brevemente qué proceso querés mejorar o qué situación está dificultando la operación de tu empresa.”
            
            QUÉ PASA DESPUÉS:
            
            “Después de recibir tu consulta, nos ponemos en contacto para entender mejor la necesidad. Si tiene sentido avanzar, coordinamos una primera conversación.”
            
            CAMPOS:
            
            - Nombre.
            - Email.
            - Empresa o rubro (opcional).
            - Mensaje.
            
            CTA PRINCIPAL:
            
            “Enviar consulta”
            
            ALTERNATIVA:
            
            “¿Preferís hablar directamente? Escribinos por WhatsApp.”
            
            BOTÓN:
            
            “Hablar por WhatsApp”
            
            ARQUITECTURA:
            
            No existe:
            
            `/contacto`
            
            El formulario principal vive en:
            
            `/#contacto`
            ```
            
        - Sección 9 — Footer ✅
            
            ```jsx
            # BLUEPRINT DEFINITIVO — HOME / SECCIÓN 9: FOOTER
            
            ## Estado
            
            APROBADO.
            
            Utilizar este blueprint como versión definitiva del Footer de MendoData.
            
            Aunque se documenta como Sección 9 de la Home, el Footer es un componente global.
            
            Debe utilizarse en:
            
            - `/`
            - `/proyectos`
            - `/legal`
            
            No existe una página independiente:
            
            `/contacto`
            
            No crear versiones diferentes del Footer para cada página.
            
            ---
            
            # 1. Objetivo
            
            Cerrar el sitio de forma clara y ordenada, permitiendo:
            
            - reconocer la marca;
            - navegar por las principales páginas y secciones;
            - acceder a los canales de contacto;
            - encontrar las redes oficiales;
            - acceder a Privacidad y Cookies.
            
            El Footer debe ser útil y compacto.
            
            No debe convertirse en otra sección comercial ni repetir contenido de la Home.
            
            ---
            
            # 2. Identidad
            
            Utilizar el logo oficial de MendoData que ya existe en el proyecto.
            
            Debajo del logo mostrar exactamente:
            
            “Sistemas, automatización y datos para ordenar y mejorar procesos operativos.”
            
            Este texto debe tener jerarquía secundaria.
            
            No agregar:
            
            - slogans adicionales;
            - certificaciones;
            - métricas;
            - clientes;
            - testimonios;
            - afirmaciones no verificadas.
            
            ---
            
            # 3. Estructura desktop
            
            Utilizar un Footer de ancho completo con fondo navy / azul profundo.
            
            Dentro, utilizar un contenedor alineado con el ancho general de la web.
            
            Organizar el contenido en tres columnas:
            
            1. Marca.
            2. Explorá.
            3. Contacto.
            
            Debajo de las tres columnas:
            
            4. Franja legal y copyright.
            
            Representación:
            
            ┌──────────────────────────────────────────────────────────────┐
            │                                                              │
            │   MENDODATA            EXPLORÁ             CONTACTO          │
            │                                                              │
            │   Logo                 Inicio              Formulario        │
            │   Descripción          Soluciones          WhatsApp          │
            │                        Proyectos                              │
            │   Redes sociales       Cómo trabajamos                       │
            │                        Equipo                                 │
            │                                                              │
            ├──────────────────────────────────────────────────────────────┤
            │ © [año] MendoData...             Privacidad · Cookies       │
            └──────────────────────────────────────────────────────────────┘
            
            El año mostrado en el sitio debe generarse dinámicamente.
            
            No hardcodear un año fijo.
            
            ---
            
            # 4. Columna 1 — Marca
            
            Mostrar:
            
            1. Logo de MendoData.
            2. Descripción breve.
            3. Redes sociales oficiales.
            
            ## Texto
            
            Utilizar exactamente:
            
            “Sistemas, automatización y datos para ordenar y mejorar procesos operativos.”
            
            Mantener un ancho limitado para facilitar la lectura.
            
            ---
            
            # 5. Redes sociales
            
            Mostrar únicamente cuentas oficiales activas y confirmadas de MendoData.
            
            Redes previstas:
            
            - LinkedIn.
            - Instagram.
            - TikTok.
            
            Cada enlace debe incluir:
            
            - ícono reconocible;
            - nombre accesible;
            - URL oficial.
            
            Pueden mostrarse visualmente solo los íconos si el diseño es suficientemente claro, pero cada enlace debe tener un nombre accesible.
            
            No inventar URLs.
            
            Si una cuenta no está confirmada:
            
            NO mostrarla.
            
            No utilizar enlaces vacíos como:
            
            `#`
            
            No utilizar perfiles personales como reemplazo de las cuentas oficiales de MendoData.
            
            ---
            
            # 6. Columna 2 — Navegación
            
            Título:
            
            “Explorá”
            
            Mostrar estos enlaces:
            
            - Inicio.
            - Soluciones.
            - Proyectos.
            - Cómo trabajamos.
            - Equipo.
            
            Destinos:
            
            “Inicio”
            
            `/`
            
            “Soluciones”
            
            `/#soluciones`
            
            “Proyectos”
            
            `/proyectos`
            
            “Cómo trabajamos”
            
            `/#como-trabajamos`
            
            “Equipo”
            
            `/#equipo`
            
            Antes de implementar, verificar que los IDs reales utilizados en la Home coincidan exactamente.
            
            No crear IDs duplicados.
            
            ---
            
            # 7. Navegación desde otras páginas
            
            Los enlaces internos de la Home deben funcionar también cuando el usuario se encuentre en:
            
            - `/proyectos`
            - `/legal`
            
            Por eso utilizar:
            
            `/#soluciones`
            
            `/#como-trabajamos`
            
            `/#equipo`
            
            `/#contacto`
            
            y no solamente:
            
            `#soluciones`
            
            `#como-trabajamos`
            
            `#equipo`
            
            `#contacto`
            
            De esta manera el visitante vuelve primero a la Home y después a la sección correspondiente.
            
            ---
            
            # 8. Columna 3 — Contacto
            
            Título:
            
            “Contacto”
            
            Mostrar:
            
            “Formulario de contacto”
            
            Destino:
            
            `/#contacto`
            
            Mostrar también:
            
            “Escribinos por WhatsApp”
            
            El enlace debe reutilizar exactamente la configuración oficial del WhatsApp global.
            
            No crear otro número, enlace o mensaje independiente.
            
            La jerarquía recomendada es:
            
            1. Formulario de contacto.
            2. WhatsApp como alternativa.
            
            ---
            
            # 9. Información de contacto adicional
            
            No inventar:
            
            - número de teléfono;
            - dirección física;
            - correo electrónico;
            - horarios;
            - ubicación;
            - oficinas.
            
            Si posteriormente existe un correo oficial confirmado de MendoData y se decide publicarlo, puede agregarse en esta columna.
            
            Hasta entonces, omitirlo.
            
            ---
            
            # 10. Relación con la Sección 8
            
            La Sección 8 de la Home contiene el principal formulario de conversión y constituye el punto principal de contacto del sitio.
            
            Ruta global:
            
            `/#contacto`
            
            Por lo tanto el Footer NO debe incluir:
            
            - formulario;
            - formulario reducido;
            - campo de email;
            - CTA grande;
            - caja de contacto adicional.
            
            El Footer simplemente ofrece accesos a:
            
            - `/#contacto`
            - WhatsApp.
            
            No repetir:
            
            “Contanos qué necesitás resolver”
            
            como gran CTA dentro del Footer.
            
            No crear una página independiente de contacto.
            
            ---
            
            # 11. Franja inferior
            
            Separar el contenido principal mediante una línea horizontal fina y discreta.
            
            ## Izquierda
            
            Mostrar:
            
            “© [año actual] MendoData. Todos los derechos reservados.”
            
            El año debe generarse automáticamente.
            
            No hardcodear un año fijo.
            
            ---
            
            ## Derecha
            
            Mostrar:
            
            “Privacidad”
            
            Destino:
            
            `/legal#privacidad`
            
            “Cookies”
            
            Destino:
            
            `/legal#cookies`
            
            Los enlaces deben utilizar exactamente los IDs definidos en el blueprint de `/legal`.
            
            ---
            
            # 12. Configurar cookies
            
            Mostrar:
            
            “Configurar cookies”
            
            ÚNICAMENTE si existe un sistema funcional de consentimiento y preferencias.
            
            El enlace debe abrir realmente el panel de configuración.
            
            No mostrarlo si:
            
            - el panel no existe;
            - no existe gestión de consentimiento;
            - el enlace no tiene comportamiento.
            
            No crear un enlace decorativo que no haga nada.
            
            ---
            
            # 13. Términos y condiciones
            
            No agregar:
            
            “Términos y condiciones”
            
            salvo que posteriormente se defina contenido real y una sección específica para ellos.
            
            No crear texto legal simplemente para completar el Footer.
            
            ---
            
            # 14. Relación con /legal
            
            La página:
            
            `/legal`
            
            es la fuente de los contenidos legales del sitio.
            
            Debe contemplar:
            
            `/legal#privacidad`
            
            `/legal#cookies`
            
            El Footer debe utilizar esas rutas.
            
            No duplicar políticas dentro del Footer.
            
            No redactar políticas legales desde este componente.
            
            ---
            
            # 15. Contenido legal
            
            No inventar información sobre:
            
            - responsable del tratamiento de datos;
            - domicilio;
            - correo legal;
            - proveedores;
            - almacenamiento;
            - transferencias;
            - períodos de conservación;
            - herramientas de medición;
            - cookies instaladas;
            - terceros que reciben datos.
            
            La página `/legal` debe completarse únicamente con información real y verificada según su blueprint específico.
            
            ---
            
            # 16. Estilo visual
            
            Utilizar:
            
            - fondo navy / azul profundo;
            - texto blanco;
            - textos secundarios en gris claro;
            - azul de marca para pequeños acentos;
            - líneas divisorias discretas;
            - tipografía consistente con el resto de la web.
            
            El contraste debe ser suficiente para lectura y accesibilidad.
            
            El Footer debe sentirse:
            
            - limpio;
            - ordenado;
            - profesional;
            - compacto.
            
            No utilizar:
            
            - tarjetas grandes;
            - gradientes fuertes;
            - imágenes decorativas;
            - mockups;
            - ilustraciones;
            - fotografías;
            - efectos 3D;
            - CTA gigante.
            
            ---
            
            # 17. Links
            
            Los enlaces deben tener estados:
            
            - normal;
            - hover;
            - focus;
            - active cuando corresponda.
            
            El hover puede utilizar:
            
            - azul de marca;
            - cambio sutil de opacidad;
            - subrayado discreto.
            
            Mantener focus visible para navegación mediante teclado.
            
            No depender solamente del color cuando afecte la comprensión.
            
            ---
            
            # 18. Desktop
            
            Utilizar tres columnas claramente diferenciadas.
            
            Distribución aproximada:
            
            Marca:
            
            40%
            
            Explorá:
            
            25%–30%
            
            Contacto:
            
            30%–35%
            
            No es necesario respetar porcentajes exactos si la implementación actual funciona mejor con otra distribución.
            
            La columna de Marca puede ocupar algo más de ancho porque contiene logo, descripción y redes.
            
            ---
            
            # 19. Tablet
            
            Mantener tres columnas mientras exista espacio suficiente.
            
            Si el contenido empieza a comprimirse:
            
            - Marca puede ocupar una fila completa;
            - Explorá y Contacto pueden colocarse debajo en dos columnas.
            
            Ejemplo:
            
            [ Marca                         ]
            
            [ Explorá ]       [ Contacto ]
            
            No reducir excesivamente tipografía o espacios.
            
            ---
            
            # 20. Mobile
            
            Apilar el contenido.
            
            Orden:
            
            1. Marca.
            2. Redes sociales.
            3. Explorá.
            4. Contacto.
            5. Franja legal.
            6. Copyright.
            
            Representación:
            
            MendoData
            
            Descripción breve
            
            [ LinkedIn ] [ Instagram ] [ TikTok ]
            
            Explorá
            
            Inicio
            Soluciones
            Proyectos
            Cómo trabajamos
            Equipo
            
            Contacto
            
            Formulario de contacto
            Escribinos por WhatsApp
            
            ────────────────────
            
            Privacidad
            Cookies
            
            © [año actual] MendoData.
            Todos los derechos reservados.
            
            ---
            
            # 21. Responsive
            
            En mobile:
            
            - mantener márgenes laterales cómodos;
            - separar claramente los grupos;
            - aumentar el área táctil de enlaces;
            - permitir que la franja legal se apile;
            - evitar textos demasiado pequeños;
            - evitar scroll horizontal.
            
            No intentar mantener tres columnas en pantallas pequeñas.
            
            ---
            
            # 22. WhatsApp
            
            El enlace:
            
            “Escribinos por WhatsApp”
            
            debe reutilizar la misma configuración utilizada por:
            
            - botón flotante global;
            - botón de WhatsApp de la Sección 8;
            - CTA secundario de WhatsApp de `/proyectos`, cuando corresponda.
            
            Debe existir una única fuente de configuración para:
            
            - número;
            - URL;
            - mensaje inicial.
            
            Evitar tener enlaces de WhatsApp hardcodeados en distintos componentes.
            
            No existe una configuración separada asociada a `/contacto`.
            
            ---
            
            # 23. Componentes globales
            
            El Footer debe implementarse como componente reutilizable.
            
            No duplicar manualmente su código dentro de cada página.
            
            La misma implementación debe aparecer en:
            
            - Home.
            - Proyectos.
            - Legal.
            
            Los cambios futuros deben poder realizarse desde un único componente.
            
            ---
            
            # 24. Accesibilidad
            
            Implementar:
            
            - elemento semántico `<footer>`;
            - navegación agrupada correctamente;
            - headings o labels visibles para cada grupo;
            - navegación por teclado;
            - focus visible;
            - contraste suficiente;
            - enlaces de redes con nombres accesibles;
            - íconos decorativos correctamente ocultos cuando corresponda.
            
            Ejemplos de nombres accesibles:
            
            “LinkedIn de MendoData”
            
            “Instagram de MendoData”
            
            “TikTok de MendoData”
            
            “Contactar a MendoData por WhatsApp”
            
            ---
            
            # 25. Medición
            
            Si existe analítica en el proyecto, reutilizar el sistema existente.
            
            Medir como mínimo cuando corresponda:
            
            ## WhatsApp
            
            Evento:
            
            `whatsapp_click`
            
            Datos:
            
            - `page`
            - `section: footer`
            - `source: footer`
            
            ## Contacto
            
            Puede registrarse navegación hacia:
            
            `/#contacto`
            
            si el sistema global ya mide navegación o CTA.
            
            Evento sugerido si ya existe una convención global:
            
            `cta_click`
            
            Datos posibles:
            
            - `page`
            - `section: footer`
            - `cta_name: contacto`
            - `destination: contacto`
            
            No crear infraestructura nueva exclusivamente para el Footer.
            
            ## Redes sociales
            
            No es obligatorio crear eventos específicos para cada red.
            
            Puede hacerse únicamente si ya existe una estrategia global de medición de enlaces externos.
            
            No crear eventos innecesarios.
            
            ---
            
            # 26. No incluir
            
            No agregar:
            
            - newsletter;
            - suscripción por email;
            - blog;
            - empleos;
            - carreras;
            - páginas de servicios inexistentes;
            - página `/contacto`;
            - dirección física no confirmada;
            - teléfono no confirmado;
            - email no confirmado;
            - perfiles sociales no confirmados;
            - testimonios;
            - logos de clientes;
            - certificaciones;
            - créditos de desarrollo;
            - CTA gigante;
            - formulario;
            - contenido legal inventado.
            
            ---
            
            # 27. No crear enlaces rotos
            
            Antes de finalizar verificar todos los enlaces.
            
            No dejar enlaces con:
            
            `#`
            
            como destino provisional en producción.
            
            No enlazar a páginas que no existen.
            
            No enlazar a:
            
            `/contacto`
            
            porque esa página no forma parte de la arquitectura V1.
            
            Cuando se implemente el sitio completo:
            
            Privacidad → `/legal#privacidad`
            
            Cookies → `/legal#cookies`
            
            deben quedar activos.
            
            Formulario de contacto → `/#contacto`
            
            debe funcionar desde:
            
            - Home;
            - Proyectos;
            - Legal.
            
            ---
            
            # 28. Criterios de aceptación
            
            El Footer estará terminado cuando:
            
            - utilice el logo oficial de MendoData;
            - muestre la descripción definida;
            - tenga tres grupos claros en desktop;
            - incluya navegación correcta;
            - enlace correctamente a `/proyectos`;
            - los anchors de la Home funcionen desde cualquier página;
            - incluya acceso a `/#contacto`;
            - no exista ningún enlace activo hacia `/contacto`;
            - WhatsApp utilice la configuración global;
            - muestre únicamente redes sociales confirmadas;
            - Privacidad y Cookies apunten a destinos existentes;
            - el copyright utilice el año actual automáticamente;
            - sea reutilizado en Home, Proyectos y Legal;
            - funcione correctamente en desktop;
            - funcione correctamente en tablet;
            - funcione correctamente en mobile;
            - tenga navegación accesible;
            - no exista scroll horizontal;
            - no tenga enlaces rotos;
            - no contenga información inventada.
            
            ---
            
            # 29. Resumen definitivo
            
            MARCA
            
            Logo MendoData
            
            “Sistemas, automatización y datos para ordenar y mejorar procesos operativos.”
            
            Redes oficiales:
            
            - LinkedIn.
            - Instagram.
            - TikTok.
            
            EXPLORÁ
            
            Inicio → `/`
            
            Soluciones → `/#soluciones`
            
            Proyectos → `/proyectos`
            
            Cómo trabajamos → `/#como-trabajamos`
            
            Equipo → `/#equipo`
            
            CONTACTO
            
            Formulario de contacto → `/#contacto`
            
            Escribinos por WhatsApp → configuración global de WhatsApp
            
            LEGAL
            
            Privacidad → `/legal#privacidad`
            
            Cookies → `/legal#cookies`
            
            Configurar cookies → solo si existe sistema funcional
            
            COPYRIGHT
            
            “© [año actual] MendoData. Todos los derechos reservados.”
            
            PÁGINAS DONDE SE UTILIZA
            
            `/`
            
            `/proyectos`
            
            `/legal`
            
            NO EXISTE EN V1
            
            `/contacto`
            ```
            
    - 04. Subpágina - Proyectos ✅
        - Estructura
            
            ```jsx
            # 04. Subpágina - Proyectos
            
            Ruta:
            
            `https://mendodata.online/proyectos`
            
            ## Estado
            
            ESTRUCTURA APROBADA.
            
            Esta página debe funcionar como el espacio principal de evidencia y proyectos de MendoData.
            
            No debe ser una copia de la Home.
            
            La Home presenta un proyecto resumido.
            
            `/proyectos` permite conocer con mayor profundidad qué problema existía, qué solución desarrolló MendoData y qué cambió después de implementarla.
            
            ---
            
            # 1. Objetivo
            
            La página debe aumentar la confianza mostrando trabajo real de MendoData.
            
            Debe permitir que un potencial cliente vea:
            
            - qué tipo de problemas abordamos;
            - qué soluciones construimos;
            - cómo se aplican a operaciones reales;
            - qué funcionalidades desarrollamos;
            - qué resultados cualitativos se obtuvieron;
            - qué evidencia visual existe.
            
            La página debe ayudar al visitante a pensar:
            
            “MendoData ya trabajó sobre problemas concretos como estos.”
            
            ---
            
            # 2. Principio general
            
            Priorizar evidencia real antes que cantidad.
            
            No completar la página con:
            
            - proyectos ficticios;
            - clientes inventados;
            - métricas inventadas;
            - testimonios inventados;
            - capturas falsas presentadas como reales;
            - casos genéricos creados solamente para llenar espacio.
            
            Si actualmente existe un solo proyecto correctamente documentado, mostrar uno solo.
            
            La página debe quedar preparada para incorporar nuevos proyectos posteriormente sin rediseñar toda la estructura.
            
            ---
            
            # 3. Diferencia entre Home y /proyectos
            
            ## Home
            
            La Sección 4 muestra un resumen del proyecto destacado:
            
            - problema;
            - solución;
            - funcionalidades;
            - resultado;
            - visual;
            - CTA.
            
            Su función es aportar evidencia rápidamente sin interrumpir demasiado el recorrido de la Home.
            
            ## /proyectos
            
            La página de Proyectos desarrolla la evidencia con mayor profundidad.
            
            Puede mostrar:
            
            - contexto;
            - problema inicial;
            - solución desarrollada;
            - proceso abordado;
            - funcionalidades;
            - capturas;
            - resultados verificables;
            - tecnologías confirmadas;
            - aprendizajes relevantes cuando aporten valor.
            
            No duplicar literalmente todo el contenido de la Home.
            
            ---
            
            # 4. Proyecto disponible actualmente
            
            Proyecto:
            
            “Control de inventario y sucursales”
            
            Estado público inicial:
            
            “Proyecto real anonimizado”
            
            Contexto disponible:
            
            Empresa chilena vinculada al mantenimiento y reparación de vehículos utilizados en minería.
            
            No publicar el nombre del cliente mientras no exista autorización explícita.
            
            ---
            
            # 5. Información real disponible
            
            ## Problema
            
            Existían dificultades para:
            
            - controlar inventarios;
            - registrar movimientos entre sucursales;
            - controlar diferencias de stock;
            - gestionar aprobaciones.
            
            ## Solución
            
            MendoData desarrolló un sistema para:
            
            - gestionar inventarios mediante códigos de barras;
            - registrar movimientos;
            - controlar diferencias;
            - digitalizar aprobaciones.
            
            ## Resultados identificados
            
            Se puede comunicar:
            
            - mayor control;
            - mayor trazabilidad;
            - mejor capacidad para detectar inconsistencias.
            
            Actualmente no existen resultados cuantificados documentados.
            
            No inventar porcentajes, ahorros, tiempos ni métricas.
            
            ---
            
            # 6. Estructura de la página
            
            La página tendrá inicialmente cuatro bloques principales.
            
            ## Sección 1 — Hero de Proyectos
            
            Objetivo:
            
            Presentar el propósito de la página y explicar que aquí se muestran soluciones desarrolladas sobre necesidades reales.
            
            Debe ser un Hero más compacto que el de la Home.
            
            No necesita un CTA comercial dominante.
            
            ---
            
            ## Sección 2 — Proyecto principal / Caso desarrollado
            
            Mostrar en profundidad:
            
            “Control de inventario y sucursales”
            
            Debe contener:
            
            - estado del proyecto;
            - contexto;
            - problema;
            - solución;
            - funcionalidades;
            - evidencia visual;
            - resultado;
            - tecnologías únicamente si están confirmadas.
            
            Esta será la sección principal de la página.
            
            ---
            
            ## Sección 3 — Otros proyectos
            
            Esta sección será condicional.
            
            Debe existir únicamente cuando haya otros proyectos suficientemente documentados.
            
            Cuando existan, podrá mostrar una grilla de proyectos con:
            
            - imagen;
            - nombre descriptivo;
            - tipo de problema;
            - solución desarrollada;
            - categoría o sector;
            - acceso al detalle si corresponde.
            
            Mientras no exista contenido real suficiente:
            
            NO mostrar:
            
            - tarjetas vacías;
            - “Próximamente” repetido;
            - proyectos ficticios;
            - placeholders públicos.
            
            La página puede funcionar perfectamente con un único proyecto.
            
            ---
            
            ## Sección 4 — Contacto final
            
            Cerrar la página con una invitación breve a conversar.
            
            Concepto:
            
            “¿Tenés un problema parecido o un proceso que necesitás ordenar?”
            
            Acciones:
            
            - ir a `/#contacto`;
            - WhatsApp como alternativa.
            
            No duplicar el formulario completo de la Home dentro de esta página.
            
            La experiencia principal de formulario vive en:
            
            `/#contacto`
            
            Preferencia:
            
            CTA principal hacia `/#contacto`.
            
            WhatsApp debe funcionar como alternativa secundaria.
            
            No crear una página independiente:
            
            `/contacto`
            
            ---
            
            # 7. Recorrido conceptual
            
            La página debe seguir esta lógica:
            
            PROYECTOS
            ↓
            Qué tipo de trabajo hace MendoData
            ↓
            Problema real
            ↓
            Solución desarrollada
            ↓
            Cómo funciona
            ↓
            Resultado
            ↓
            Más proyectos, cuando existan
            ↓
            Contacto
            
            La evidencia debe ser protagonista.
            
            ---
            
            # 8. Modelo de proyecto reutilizable
            
            Cada proyecto futuro debería poder almacenar, cuando exista la información:
            
            - ID.
            - Nombre público.
            - Estado.
            - Cliente, únicamente si está autorizado.
            - Sector.
            - Tipo de operación.
            - Contexto.
            - Problema.
            - Solución.
            - Funcionalidades.
            - Tecnologías.
            - Resultados.
            - Métricas verificadas.
            - Capturas.
            - Videos.
            - Testimonio.
            - Autorización de publicación.
            - Información que debe anonimizarse.
            
            No es necesario mostrar todos esos campos públicamente.
            
            El modelo debe permitir decidir qué información se publica en cada proyecto.
            
            ---
            
            # 9. Estados permitidos de un proyecto
            
            Un proyecto puede presentarse como:
            
            ## Proyecto real
            
            Cuando el contenido y material pueden mostrarse públicamente.
            
            ## Proyecto real anonimizado
            
            Cuando el proyecto es real pero se protege la identidad o información del cliente.
            
            ## Demostración ilustrativa
            
            Cuando el contenido es conceptual o demostrativo.
            
            Nunca mezclar estos estados.
            
            Nunca presentar una demostración como proyecto real.
            
            ---
            
            # 10. Privacidad
            
            Antes de publicar un proyecto revisar:
            
            - nombre del cliente;
            - logo;
            - capturas;
            - usuarios;
            - nombres;
            - correos;
            - teléfonos;
            - direcciones;
            - información comercial;
            - información financiera;
            - métricas;
            - información interna;
            - cualquier dato sensible.
            
            Si no existe autorización suficiente, anonimizar.
            
            Puede utilizarse discretamente:
            
            “Información anonimizada para preservar la confidencialidad del cliente.”
            
            ---
            
            # 11. Evidencia visual
            
            La página debe dar más espacio a las interfaces que la Home.
            
            Prioridad:
            
            1. Capturas reales aprobadas.
            2. Capturas reales anonimizadas.
            3. Video o recorrido real.
            4. Mockup basado en el sistema real.
            5. Representación ilustrativa correctamente identificada.
            
            No utilizar fotografías de stock para sustituir evidencia de proyectos.
            
            Las interfaces y soluciones desarrolladas deben ser el principal recurso visual.
            
            ---
            
            # 12. Galerías
            
            En `/proyectos` sí pueden utilizarse varias capturas cuando aporten información.
            
            Preferencia:
            
            - una captura principal;
            - entre 2 y 4 vistas secundarias cuando existan.
            
            No llenar la página de capturas casi idénticas.
            
            Cada imagen debe ayudar a explicar alguna parte del proyecto.
            
            ---
            
            # 13. Videos
            
            Los proyectos pueden incorporar video cuando exista material real útil.
            
            No reproducir automáticamente con sonido.
            
            Permitir:
            
            - reproducir;
            - pausar;
            - controlar el video.
            
            No utilizar videos simplemente como decoración.
            
            ---
            
            # 14. Tecnologías
            
            Las tecnologías pueden mostrarse dentro de un proyecto únicamente cuando estén confirmadas.
            
            Deben tener jerarquía secundaria.
            
            El relato debe ser:
            
            Problema
            → Solución
            → Resultado
            → Tecnología utilizada
            
            y no:
            
            Tecnología
            → Tecnología
            → Tecnología.
            
            No inventar herramientas utilizadas.
            
            ---
            
            # 15. Resultados
            
            Priorizar resultados verificables.
            
            Pueden ser:
            
            - cualitativos;
            - cuantitativos.
            
            Los cuantitativos solo deben mostrarse cuando exista información real que los sostenga.
            
            No inventar:
            
            - ahorro de tiempo;
            - porcentajes;
            - productividad;
            - reducción de errores;
            - ROI;
            - cantidad de usuarios;
            - volumen de operaciones.
            
            ---
            
            # 16. Testimonios
            
            Mostrar testimonios únicamente si:
            
            - son reales;
            - están autorizados;
            - existe claridad sobre quién los realizó.
            
            Mientras no existan testimonios aprobados, no crear bloques vacíos ni testimonios ficticios.
            
            ---
            
            # 17. Diseño general
            
            Mantener el sistema visual definido para MendoData.
            
            Priorizar:
            
            - navy / azul profundo;
            - azul de acción;
            - fondos blancos o claros;
            - superficies limpias;
            - interfaces protagonistas;
            - bordes suaves;
            - sombras discretas;
            - bastante espacio en blanco;
            - jerarquía visual clara.
            
            La página debe sentirse:
            
            - tecnológica;
            - concreta;
            - profesional;
            - basada en evidencia.
            
            No debe parecer un portfolio creativo genérico.
            
            ---
            
            # 18. Responsive
            
            Toda la página debe diseñarse desde el inicio para:
            
            - desktop;
            - tablet;
            - mobile.
            
            En mobile:
            
            - priorizar texto antes que detalles secundarios;
            - adaptar capturas al ancho;
            - permitir ampliar imágenes si se implementa galería;
            - evitar interfaces internas ilegibles;
            - evitar tablas horizontales;
            - evitar scroll horizontal;
            - mantener CTA accesibles.
            
            No reducir una composición desktop completa hasta volverla ilegible.
            
            ---
            
            # 19. Header
            
            Reutilizar el Header global.
            
            No crear un Header específico para `/proyectos`.
            
            La navegación debe permitir:
            
            - volver a Inicio;
            - navegar a secciones de la Home;
            - acceder a Proyectos;
            - acceder a Contacto mediante `/#contacto`.
            
            El estado visual de “Proyectos” puede mostrarse como página activa si el sistema existente lo contempla.
            
            ---
            
            # 20. Footer
            
            Reutilizar exactamente el Footer global aprobado.
            
            No crear otro Footer.
            
            El enlace de contacto del Footer debe dirigir a:
            
            `/#contacto`
            
            No utilizar:
            
            `/contacto`
            
            ---
            
            # 21. WhatsApp
            
            Reutilizar el botón flotante global.
            
            Debe utilizar la misma configuración de:
            
            - número;
            - enlace;
            - mensaje;
            - medición.
            
            No crear un WhatsApp específico para Proyectos.
            
            El CTA secundario de WhatsApp de la Sección 4 debe reutilizar esa misma configuración.
            
            ---
            
            # 22. Contacto
            
            El CTA principal de esta página debe dirigir a:
            
            `/#contacto`
            
            No utilizar:
            
            `/contacto`
            
            porque Contacto no constituye una página independiente en la arquitectura V1.
            
            El formulario comercial principal vive dentro de la Home:
            
            `/#contacto`
            
            Desde `/proyectos`, el enlace debe navegar correctamente a la Home y posicionarse en la Sección 8.
            
            Puede conservar parámetros UTM o atribución cuando el sistema existente lo permita.
            
            No crear:
            
            - un segundo sistema de contacto;
            - un segundo formulario;
            - una página `/contacto`;
            - una segunda lógica de validación o envío.
            
            WhatsApp permanece disponible como alternativa mediante la configuración global.
            
            ---
            
            # 23. SEO y estructura semántica
            
            La página debe tener un único H1.
            
            Los nombres de los proyectos deben utilizar una jerarquía de headings coherente.
            
            Utilizar lenguaje natural relacionado con:
            
            - proyectos tecnológicos;
            - sistemas;
            - automatización;
            - datos;
            - procesos;
            - operaciones.
            
            No llenar la página artificialmente de palabras clave.
            
            ## Configuración SEO definitiva
            
            Ruta:
            
            `https://mendodata.online/proyectos`
            
            Title:
            
            `Proyectos | MendoData`
            
            Meta description:
            
            `Conocé proyectos reales de MendoData y cómo convertimos necesidades operativas en sistemas, automatizaciones y soluciones de datos.`
            
            Canonical:
            
            `https://mendodata.online/proyectos`
            
            Open Graph:
            
            Utilizar como base el mismo title y description.
            
            Agregar `og:image` únicamente cuando exista un recurso institucional aprobado.
            
            No inventar una imagen social.
            
            No utilizar material de clientes sin autorización.
            
            ---
            
            # 24. Medición
            
            Si ya existe analítica, medir como mínimo:
            
            - visualización de `/proyectos`;
            - clic hacia `/#contacto`;
            - clic en WhatsApp.
            
            Para el CTA hacia contacto puede reutilizarse:
            
            `cta_click`
            
            Datos sugeridos:
            
            - `page: proyectos`
            - `section: contacto_proyectos`
            - `cta_name: consulta`
            - `destination: contacto`
            
            Para WhatsApp:
            
            `whatsapp_click`
            
            Datos sugeridos:
            
            - `page: proyectos`
            - `section: contacto_proyectos`
            - `source: projects_final_cta`
            
            Opcionalmente, cuando existan varios proyectos:
            
            - proyecto visualizado;
            - acceso a detalle;
            - interacción con galería o video.
            
            No crear eventos innecesarios.
            
            No instalar infraestructura nueva de analítica únicamente para esta página.
            
            ---
            
            # 25. No hacer
            
            No:
            
            - inventar proyectos para completar la página;
            - inventar clientes;
            - inventar métricas;
            - inventar testimonios;
            - inventar tecnologías;
            - crear una grilla de proyectos falsos;
            - utilizar “casos de éxito” sin evidencia;
            - publicar información confidencial;
            - convertir la página en una lista de servicios;
            - duplicar la Home;
            - crear una página distinta por proyecto en V1 sin necesidad;
            - crear filtros cuando todavía hay pocos proyectos;
            - agregar categorías vacías;
            - crear buscador de proyectos;
            - agregar complejidad que todavía no aporta valor;
            - crear una página `/contacto`;
            - dirigir CTA activos hacia `/contacto`;
            - duplicar el formulario de la Home.
            
            ---
            
            # 26. Evolución futura
            
            La arquitectura debe permitir que posteriormente `/proyectos` pueda crecer.
            
            Ejemplo futuro:
            
            Hero
            ↓
            Proyecto destacado
            ↓
            Grilla de proyectos
            ↓
            Detalle de cada proyecto
            ↓
            Contacto
            
            Pero esa estructura debe incorporarse solamente cuando exista contenido real suficiente.
            
            No diseñar hoy una plataforma de portfolio compleja para contenido que todavía no existe.
            
            El contacto seguirá pudiendo resolverse mediante:
            
            `/#contacto`
            
            salvo que en el futuro se tome explícitamente otra decisión de arquitectura.
            
            ---
            
            # 27. Criterios de aceptación generales
            
            La página `/proyectos` estará correctamente estructurada cuando:
            
            - tenga una función clara de evidencia y confianza;
            - no duplique la Home;
            - utilice proyectos reales;
            - pueda funcionar correctamente con un único proyecto;
            - el proyecto actual esté anonimizado cuando corresponda;
            - no invente resultados;
            - priorice capturas y evidencia;
            - permita incorporar nuevos proyectos en el futuro;
            - tenga CTA hacia `/#contacto`;
            - no exista un CTA activo hacia `/contacto`;
            - no duplique el formulario de la Home;
            - reutilice Header;
            - reutilice Footer;
            - reutilice WhatsApp global;
            - utilice la configuración SEO definida;
            - funcione correctamente en desktop;
            - funcione correctamente en tablet;
            - funcione correctamente en mobile;
            - no genere scroll horizontal;
            - mantenga la identidad general de MendoData.
            
            ---
            
            # 28. Estructura definitiva V1
            
            Ruta:
            
            `/proyectos`
            
            Estructura:
            
            1. Hero de Proyectos.
            
            2. Proyecto real:
               “Control de inventario y sucursales”.
            
            3. Otros proyectos.
               Mostrar únicamente cuando existan proyectos reales suficientemente documentados.
            
            4. CTA final.
            
               Principal:
               `/#contacto`
            
               Secundario:
               WhatsApp mediante configuración global.
            
            5. Footer global.
            
            Contacto:
            
            No existe una página independiente:
            
            `/contacto`
            
            El formulario principal del sitio vive en:
            
            `/#contacto`
            ```
            
        - Sección 1 — Hero de Proyectos
            
            ```jsx
            # BLUEPRINT DEFINITIVO — PROYECTOS / SECCIÓN 1: HERO
            
            ## Estado
            
            APROBADO.
            
            Utilizar este blueprint como versión definitiva del Hero de la página:
            
            `/proyectos`
            
            Esta sección debe ser más compacta que el Hero de la Home.
            
            Su función es introducir la página de proyectos y preparar al visitante para ver evidencia real del trabajo de MendoData.
            
            ---
            
            # 1. Nombre e identificador
            
            Nombre:
            
            “Hero de Proyectos”
            
            ID sugerido:
            
            `proyectos-hero`
            
            Ruta:
            
            `/proyectos`
            
            Debe aparecer inmediatamente después del Header global.
            
            Después del Hero debe comenzar el primer proyecto desarrollado.
            
            ---
            
            # 2. Objetivo
            
            Explicar de forma rápida qué encontrará el visitante en esta página.
            
            El Hero debe comunicar que MendoData desarrolla soluciones tecnológicas alrededor de problemas y procesos reales de empresas.
            
            La página debe sentirse como:
            
            - evidencia;
            - experiencia aplicada;
            - soluciones concretas;
            - trabajo real.
            
            No debe sentirse como:
            
            - otra página de servicios;
            - una presentación institucional;
            - un portfolio creativo;
            - un catálogo de tecnologías.
            
            La idea principal es:
            
            “Así aplicamos tecnología para resolver necesidades reales.”
            
            ---
            
            # 3. Rótulo superior
            
            Utilizar exactamente:
            
            “PROYECTOS”
            
            Tratamiento:
            
            - pequeño;
            - en mayúsculas;
            - azul de marca;
            - espaciado entre letras;
            - misma lógica visual que otros rótulos del sitio.
            
            Debe tener menor jerarquía que el H1.
            
            ---
            
            # 4. H1
            
            Utilizar exactamente:
            
            “Soluciones construidas alrededor de problemas reales.”
            
            Debe ser el único H1 de la página.
            
            Debe comunicar:
            
            - orientación al problema;
            - soluciones concretas;
            - experiencia aplicada.
            
            No utilizar:
            
            - “Casos de éxito”.
            - “Nuestro portfolio”.
            - “Proyectos que transforman empresas”.
            - “Soluciones innovadoras”.
            - frases exageradas o genéricas.
            
            ---
            
            # 5. Descripción
            
            Utilizar exactamente:
            
            “Mostramos cómo convertimos necesidades operativas en sistemas, automatizaciones y soluciones de datos adaptadas a cada empresa.”
            
            Debe aparecer debajo del H1.
            
            Características:
            
            - breve;
            - clara;
            - comprensible para personas no técnicas;
            - ancho de lectura cómodo;
            - menor jerarquía que el H1.
            
            La tecnología aparece como medio para resolver necesidades.
            
            No listar productos ni herramientas específicas.
            
            ---
            
            # 6. Frase secundaria
            
            Debajo de la descripción puede mostrarse una línea de apoyo:
            
            “Problema → solución → implementación → resultado.”
            
            Su función es explicar de forma muy rápida cómo se presentan los proyectos.
            
            Debe tener baja jerarquía visual.
            
            No debe parecer un CTA.
            
            Esta línea es opcional si el diseño funciona mejor sin ella.
            
            ---
            
            # 7. CTA
            
            El Hero NO necesita un CTA comercial dominante.
            
            La prioridad es que el visitante empiece a explorar la evidencia.
            
            Se puede utilizar una única acción secundaria:
            
            “Ver proyecto”
            
            Destino:
            
            `#control-inventario-sucursales`
            
            o el ID definitivo utilizado por la Sección 2.
            
            El botón puede utilizar scroll interno hacia el proyecto.
            
            Debe tener menor protagonismo que el CTA principal de la Home.
            
            ---
            
            # 8. Alternativa sin botón
            
            Si visualmente el Hero funciona mejor sin CTA, puede utilizarse simplemente una indicación discreta de continuidad:
            
            “Explorá el proyecto ↓”
            
            En ese caso no agregar botón.
            
            Preferencia:
            
            mantener la versión más limpia.
            
            No es obligatorio incluir una acción si el primer proyecto ya comienza inmediatamente debajo.
            
            ---
            
            # 9. Contenido que NO debe aparecer
            
            No mostrar en el Hero:
            
            - cantidad de proyectos;
            - cantidad de clientes;
            - años de experiencia;
            - porcentajes de resultados;
            - logos de clientes;
            - testimonios;
            - tecnologías específicas;
            - Power BI;
            - Power Apps;
            - Power Automate;
            - métricas;
            - categorías o filtros.
            
            No inventar números para generar autoridad.
            
            La evidencia debe aparecer en los proyectos reales.
            
            ---
            
            # 10. Layout desktop
            
            Utilizar un Hero compacto.
            
            Preferencia:
            
            layout centrado de una sola columna.
            
            Orden:
            
            1. Rótulo.
            2. H1.
            3. Descripción.
            4. Frase secundaria opcional.
            5. Acción secundaria opcional.
            
            Representación:
            
                          PROYECTOS
            
               Soluciones construidas alrededor
                      de problemas reales.
            
               Mostramos cómo convertimos necesidades
               operativas en sistemas, automatizaciones
               y soluciones de datos adaptadas a cada empresa.
            
                   Problema → solución → resultado
            
                          [ Ver proyecto ]
            
            No utilizar un Hero de dos columnas como el de la Home salvo que exista una razón visual clara.
            
            ---
            
            # 11. Por qué no utilizar dos columnas
            
            La página debe llegar rápidamente al proyecto real.
            
            Agregar una gran ilustración o mockup lateral generaría:
            
            - repetición visual con la Home;
            - más altura antes de llegar a la evidencia;
            - competencia con las capturas del proyecto real.
            
            Por eso priorizar texto breve y transición directa hacia el contenido.
            
            El primer proyecto debe convertirse en el principal recurso visual de la página.
            
            ---
            
            # 12. Altura del Hero
            
            No utilizar:
            
            `min-height: 100vh`
            
            El Hero no debe ocupar una pantalla completa.
            
            Debe permitir que en desktop se empiece a percibir el comienzo del proyecto siguiente o que se llegue a él con poco scroll.
            
            La página debe transmitir rápidamente:
            
            “Acá están los proyectos.”
            
            ---
            
            # 13. Fondo
            
            Utilizar un fondo claro.
            
            Puede ser:
            
            - blanco;
            - blanco cálido;
            - azul muy claro;
            - fondo general utilizado por el sistema visual de MendoData.
            
            Se pueden incorporar detalles abstractos muy suaves si ya forman parte de la identidad.
            
            No utilizar:
            
            - fotografía;
            - dashboard falso;
            - ilustración genérica;
            - fondo oscuro dominante;
            - video;
            - animación compleja.
            
            ---
            
            # 14. Desktop — ancho del contenido
            
            El bloque textual debe estar centrado.
            
            Utilizar un ancho máximo que permita que:
            
            - el H1 tenga aproximadamente entre 2 y 3 líneas;
            - la descripción tenga buena lectura;
            - no ocupe todo el ancho de pantalla.
            
            Mantener bastante espacio en blanco.
            
            ---
            
            # 15. Tablet
            
            Mantener la misma estructura centrada.
            
            Adaptar:
            
            - tamaño del H1;
            - ancho del contenido;
            - espacios verticales.
            
            No crear una composición distinta exclusivamente para tablet.
            
            ---
            
            # 16. Mobile
            
            Mantener una sola columna.
            
            Orden:
            
            1. Rótulo.
            2. H1.
            3. Descripción.
            4. Frase secundaria opcional.
            5. Acción secundaria opcional.
            6. Primer proyecto.
            
            El H1 debe conservar buena jerarquía sin generar una cantidad excesiva de líneas.
            
            Mantener:
            
            - márgenes laterales cómodos;
            - lectura clara;
            - CTA táctil si existe;
            - separación suficiente del Header.
            
            No generar scroll horizontal.
            
            ---
            
            # 17. Relación con el primer proyecto
            
            El Hero debe conectar directamente con:
            
            “Control de inventario y sucursales”
            
            La transición debe sentirse natural:
            
            PROYECTOS
            
            ↓
            
            Soluciones construidas alrededor de problemas reales
            
            ↓
            
            PROYECTO REAL ANONIMIZADO
            
            Control de inventario y sucursales
            
            No agregar una sección intermedia innecesaria.
            
            ---
            
            # 18. Header
            
            Reutilizar el Header global.
            
            No crear un Header específico para esta página.
            
            El enlace “Proyectos” puede mostrarse visualmente activo si el sistema global contempla estados de navegación.
            
            Los enlaces hacia secciones de la Home deben seguir funcionando mediante:
            
            `/#soluciones`
            
            `/#como-trabajamos`
            
            `/#equipo`
            
            ---
            
            # 19. WhatsApp
            
            El botón flotante global debe continuar visible.
            
            No agregar un botón de WhatsApp dentro del Hero.
            
            WhatsApp es un canal global secundario y no debe competir con el contenido de proyectos.
            
            ---
            
            # 20. Accesibilidad
            
            Implementar:
            
            - un único H1;
            - estructura semántica correcta;
            - contraste suficiente;
            - tamaños legibles;
            - foco visible si existe CTA;
            - navegación mediante teclado;
            - respeto de `prefers-reduced-motion`.
            
            No utilizar texto dentro de imágenes.
            
            ---
            
            # 21. Animaciones
            
            Si se utilizan animaciones de entrada:
            
            - deben ser sutiles;
            - rápidas;
            - no bloquear la lectura;
            - respetar `prefers-reduced-motion`.
            
            Preferencia:
            
            animación mínima o ninguna.
            
            La evidencia debe ser más importante que el efecto visual.
            
            ---
            
            # 22. Medición
            
            Si ya existe analítica, registrar la visualización de la página mediante el sistema global.
            
            No crear eventos específicos solamente porque el Hero es visible.
            
            Si existe CTA “Ver proyecto”, se puede registrar:
            
            `cta_click`
            
            Datos:
            
            - `page: proyectos`
            - `section: hero`
            - `cta_name: ver_proyecto`
            - `destination: proyecto_control_inventario`
            
            No crear infraestructura nueva de analítica.
            
            ---
            
            # 23. SEO y semántica
            
            Utilizar un único H1:
            
            “Soluciones construidas alrededor de problemas reales.”
            
            El contenido debe utilizar lenguaje natural relacionado con:
            
            - proyectos;
            - sistemas;
            - automatización;
            - datos;
            - procesos;
            - operaciones.
            
            No agregar palabras clave artificialmente.
            
            El title y meta description globales de `/proyectos` se definirán posteriormente junto con el SEO general del sitio.
            
            ---
            
            # 24. No hacer
            
            No:
            
            - copiar el Hero de la Home;
            - volver a explicar todos los servicios;
            - utilizar una composición demasiado alta;
            - incluir tecnologías específicas;
            - utilizar “casos de éxito”;
            - inventar métricas;
            - inventar cantidad de proyectos;
            - mostrar logos de clientes;
            - agregar testimonios;
            - agregar fotografías de stock;
            - agregar una gran ilustración genérica;
            - agregar filtros;
            - agregar buscador;
            - agregar CTA hacia Calendly;
            - agregar WhatsApp interno;
            - crear un visual que compita con el proyecto real siguiente.
            
            ---
            
            # 25. Criterios de aceptación
            
            El Hero estará terminado cuando:
            
            - aparezca inmediatamente después del Header;
            - utilice el rótulo “PROYECTOS”;
            - tenga un único H1;
            - utilice el copy aprobado;
            - sea más compacto que el Hero de la Home;
            - comunique que la página contiene soluciones aplicadas a problemas reales;
            - no presente tecnologías como protagonistas;
            - no utilice métricas inventadas;
            - no utilice “casos de éxito”;
            - conecte directamente con el primer proyecto;
            - funcione correctamente en desktop;
            - funcione correctamente en tablet;
            - funcione correctamente en mobile;
            - no genere scroll horizontal;
            - mantenga la identidad visual de MendoData.
            
            ---
            
            # 26. Resumen definitivo
            
            Rótulo:
            
            “PROYECTOS”
            
            H1:
            
            “Soluciones construidas alrededor de problemas reales.”
            
            Descripción:
            
            “Mostramos cómo convertimos necesidades operativas en sistemas, automatizaciones y soluciones de datos adaptadas a cada empresa.”
            
            Apoyo opcional:
            
            “Problema → solución → implementación → resultado.”
            
            CTA opcional:
            
            “Ver proyecto”
            
            Destino:
            
            primer proyecto de la página.
            
            Visual:
            
            No necesita visual propio.
            
            El proyecto real inmediatamente posterior será el principal recurso visual.
            ```
            
        - Sección 2 — Proyecto real: “Control de inventario y sucursales”
            
            ```jsx
            # BLUEPRINT DEFINITIVO — PROYECTOS / SECCIÓN 2:
            # CONTROL DE INVENTARIO Y SUCURSALES
            
            ## Estado
            
            APROBADO.
            
            Esta sección desarrolla en profundidad el primer proyecto real de MendoData.
            
            Proyecto:
            
            “Control de inventario y sucursales”
            
            Estado público inicial:
            
            “Proyecto real anonimizado”
            
            No utilizar “Caso de éxito”.
            
            No publicar el nombre del cliente mientras no exista autorización explícita.
            
            ---
            
            # 1. Nombre e identificador
            
            Nombre interno:
            
            “Control de inventario y sucursales”
            
            ID:
            
            `control-inventario-sucursales`
            
            Ubicación:
            
            Debe aparecer inmediatamente después del Hero de `/proyectos`.
            
            Es la sección principal de la página en la versión V1.
            
            ---
            
            # 2. Objetivo
            
            Demostrar mediante un proyecto real cómo MendoData aborda una necesidad operativa concreta y construye una solución adaptada.
            
            La sección debe permitir entender:
            
            - cuál era el contexto;
            - qué problema existía;
            - qué solución desarrolló MendoData;
            - qué funcionalidades principales se implementaron;
            - qué resultado cualitativo se obtuvo;
            - cómo se ve la solución, cuando exista material visual publicable.
            
            El proyecto debe transmitir evidencia y capacidad real.
            
            No debe sentirse como una descripción comercial genérica.
            
            ---
            
            # 3. Encabezado del proyecto
            
            Mostrar:
            
            Badge:
            
            “Proyecto real anonimizado”
            
            Título:
            
            “Control de inventario y sucursales”
            
            Información secundaria:
            
            “Operaciones · Inventarios · Gestión entre sucursales”
            
            La etiqueta debe ser discreta.
            
            El nombre del proyecto debe tener mayor jerarquía.
            
            ---
            
            # 4. Contexto
            
            Título:
            
            “Contexto”
            
            Texto:
            
            “Proyecto desarrollado para una empresa chilena vinculada al mantenimiento y reparación de vehículos utilizados en minería.”
            
            Este texto puede utilizarse mientras el nivel de anonimización sea considerado suficiente.
            
            Si posteriormente se determina que esta descripción permite identificar al cliente, reemplazarla por una versión más general:
            
            “Proyecto desarrollado para una empresa con operaciones vinculadas al sector minero.”
            
            No agregar el nombre del cliente sin autorización.
            
            ---
            
            # 5. Introducción breve
            
            Debajo del encabezado puede incorporarse una frase resumen:
            
            “Una solución desarrollada para mejorar el control de inventarios, movimientos entre sucursales y aprobaciones operativas.”
            
            Esta frase funciona como síntesis del proyecto.
            
            No debe introducir resultados o funcionalidades no documentadas.
            
            ---
            
            # 6. Evidencia visual principal
            
            Después del encabezado mostrar un visual principal de gran tamaño.
            
            El visual debe tener más protagonismo que en la Home.
            
            Prioridad:
            
            1. Captura real aprobada y anonimizada.
            2. Captura real editada para eliminar información sensible.
            3. Mockup construido a partir de la interfaz real.
            4. Representación ilustrativa basada en el proyecto.
            
            Identificador:
            
            `inventory-project-main-visual`
            
            ---
            
            # 7. Si existe una captura real
            
            Antes de publicarla revisar y ocultar:
            
            - nombre del cliente;
            - logo;
            - nombres de personas;
            - usuarios;
            - correos;
            - teléfonos;
            - direcciones;
            - información financiera;
            - datos internos;
            - identificadores sensibles;
            - cualquier información que permita identificar innecesariamente al cliente.
            
            No publicar una captura sin revisión.
            
            ---
            
            # 8. Si todavía no existe material publicable
            
            Utilizar un placeholder o mockup inspirado en las funcionalidades reales del proyecto.
            
            Puede representar:
            
            - inventario;
            - códigos de barras;
            - movimientos;
            - sucursales;
            - diferencias de stock;
            - aprobaciones.
            
            Mostrar discretamente:
            
            “Representación ilustrativa basada en un proyecto real”
            
            No presentar el mockup como captura real del sistema.
            
            ---
            
            # 9. Problema
            
            Título:
            
            “Problema”
            
            Texto:
            
            “La empresa tenía dificultades para controlar inventarios, movimientos entre sucursales, diferencias de stock y aprobaciones.”
            
            Este texto debe permanecer directo y breve.
            
            Puede acompañarse visualmente con cuatro elementos:
            
            - Control de inventarios.
            - Movimientos entre sucursales.
            - Diferencias de stock.
            - Aprobaciones.
            
            No agregar problemas que todavía no estén documentados.
            
            Especialmente NO afirmar que:
            
            - todo se gestionaba con Excel;
            - existían pérdidas económicas;
            - había determinada cantidad de errores;
            - se perdían determinadas horas;
            - existían problemas de productividad cuantificados.
            
            ---
            
            # 10. Solución
            
            Título:
            
            “Solución”
            
            Texto:
            
            “Desarrollamos un sistema para gestionar inventarios con códigos de barras, registrar movimientos, controlar diferencias y digitalizar aprobaciones.”
            
            Debe ser uno de los bloques principales del proyecto.
            
            La solución debe explicarse desde la operación y no desde la tecnología utilizada.
            
            No mencionar framework, base de datos, Power Platform u otras herramientas hasta confirmarlas.
            
            ---
            
            # 11. Funcionalidades principales
            
            Título:
            
            “Funcionalidades principales”
            
            Mostrar exactamente estas cuatro funcionalidades confirmadas:
            
            ## 1. Gestión de inventario con códigos de barras
            
            Permite representar la gestión de inventario utilizando códigos de barras.
            
            No agregar detalles de dispositivos, lectores o hardware mientras no estén confirmados.
            
            ## 2. Movimientos entre sucursales
            
            Registro y seguimiento de movimientos relacionados con las distintas sucursales.
            
            ## 3. Control de diferencias de stock
            
            Soporte para registrar y controlar diferencias detectadas en inventario.
            
            ## 4. Aprobaciones digitales
            
            Digitalización de procesos de aprobación relacionados con la operación.
            
            ---
            
            # 12. Presentación visual de funcionalidades
            
            En desktop pueden mostrarse en una grilla 2 x 2.
            
            Ejemplo:
            
            [ Código de barras ]     [ Movimientos ]
            
            [ Diferencias ]          [ Aprobaciones ]
            
            Cada bloque debe tener:
            
            - ícono;
            - título;
            - descripción muy breve si aporta claridad.
            
            No convertirlos en cuatro tarjetas grandes cargadas de contenido.
            
            ---
            
            # 13. Resultado
            
            Título:
            
            “Resultado”
            
            Utilizar exactamente como idea central:
            
            “Mayor control, trazabilidad y capacidad para detectar inconsistencias.”
            
            Puede acompañarse con tres elementos visuales:
            
            - Mayor control.
            - Mayor trazabilidad.
            - Detección de inconsistencias.
            
            Estos son resultados cualitativos.
            
            No acompañarlos con números.
            
            ---
            
            # 14. Resultados cuantitativos
            
            Actualmente NO existen resultados cuantificados documentados.
            
            No mostrar:
            
            - porcentajes;
            - ahorro de horas;
            - ahorro económico;
            - reducción porcentual de errores;
            - ROI;
            - aumento de productividad;
            - cantidad de usuarios;
            - cantidad de sucursales;
            - volumen de movimientos.
            
            Cuando existan datos reales y verificables podrán incorporarse posteriormente.
            
            ---
            
            # 15. Estructura narrativa
            
            La sección debe seguir este recorrido:
            
            Proyecto real
            ↓
            Contexto
            ↓
            Evidencia visual
            ↓
            Problema
            ↓
            Solución
            ↓
            Funcionalidades
            ↓
            Resultado
            
            La lectura debe explicar claramente:
            
            ANTES
            ↓
            QUÉ CONSTRUIMOS
            ↓
            CÓMO FUNCIONA
            ↓
            QUÉ MEJORÓ
            
            ---
            
            # 16. Layout desktop
            
            La sección puede dividirse en varios bloques y no necesita resolverse como una única tarjeta gigante.
            
            ## Bloque 1 — Encabezado
            
            Badge.
            
            Título.
            
            Información secundaria.
            
            Contexto.
            
            ---
            
            ## Bloque 2 — Visual principal
            
            Visual de gran tamaño.
            
            Debe ocupar buena parte del ancho disponible.
            
            La interfaz debe poder observarse con claridad.
            
            ---
            
            ## Bloque 3 — Problema y solución
            
            Utilizar dos columnas:
            
            [ Problema ]     [ Solución ]
            
            Ambos bloques deben tener una jerarquía equivalente.
            
            No hacer que el problema ocupe mucho más espacio que la solución.
            
            ---
            
            ## Bloque 4 — Funcionalidades
            
            Grilla 2 x 2.
            
            ---
            
            ## Bloque 5 — Resultado
            
            Bloque destacado, pero sobrio.
            
            Puede utilizar un fondo ligeramente contrastado.
            
            Mostrar:
            
            “Mayor control”
            
            “Trazabilidad”
            
            “Detección de inconsistencias”
            
            ---
            
            # 17. Representación desktop aproximada
            
            PROYECTO REAL ANONIMIZADO
            
            Control de inventario y sucursales
            
            Operaciones · Inventarios · Gestión entre sucursales
            
            Contexto breve
            
            ┌───────────────────────────────────────────────┐
            │                                               │
            │             VISUAL PRINCIPAL                  │
            │                                               │
            │      interfaz / captura / mockup              │
            │                                               │
            └───────────────────────────────────────────────┘
            
            ┌──────────────────────┐  ┌──────────────────────┐
            │ PROBLEMA             │  │ SOLUCIÓN             │
            │                      │  │                      │
            │ Texto breve          │  │ Texto breve          │
            └──────────────────────┘  └──────────────────────┘
            
            FUNCIONALIDADES PRINCIPALES
            
            [ Código de barras ]       [ Movimientos ]
            
            [ Diferencias ]            [ Aprobaciones ]
            
            RESULTADO
            
            Mayor control · Trazabilidad · Detección de inconsistencias
            
            ---
            
            # 18. Tablet
            
            Mantener:
            
            - visual principal ancho;
            - problema y solución en dos columnas mientras sean cómodas;
            - funcionalidades en 2 x 2.
            
            Cuando el ancho resulte insuficiente:
            
            - problema y solución pasan a una columna;
            - funcionalidades pueden mantenerse en dos columnas.
            
            No comprimir textos o imágenes para conservar artificialmente el desktop.
            
            ---
            
            # 19. Mobile
            
            Utilizar una sola columna.
            
            Orden:
            
            1. Badge.
            2. Título.
            3. Información secundaria.
            4. Contexto.
            5. Visual principal.
            6. Problema.
            7. Solución.
            8. Funcionalidades.
            9. Resultado.
            
            Las funcionalidades pueden utilizar:
            
            - una columna;
            - o dos columnas muy simples si el ancho lo permite.
            
            Preferir legibilidad.
            
            No utilizar tablas horizontales.
            
            No generar scroll horizontal.
            
            ---
            
            # 20. Galería adicional
            
            Si posteriormente existen varias capturas aprobadas, puede agregarse después del visual principal una pequeña galería.
            
            Mostrar únicamente imágenes que ayuden a comprender funcionalidades diferentes.
            
            Ejemplos posibles:
            
            - inventario;
            - movimientos;
            - diferencias;
            - aprobaciones.
            
            No asumir que estas capturas existen actualmente.
            
            La galería debe ser condicional.
            
            Si no existe material suficiente:
            
            NO mostrar placeholders múltiples solamente para llenar espacio.
            
            ---
            
            # 21. Comportamiento de la galería
            
            Cuando exista:
            
            - una imagen principal;
            - miniaturas o vistas secundarias;
            - posibilidad de ampliar si aporta valor;
            - navegación mediante teclado;
            - textos alternativos descriptivos.
            
            En mobile puede utilizarse scroll horizontal controlado para las imágenes secundarias si resulta necesario.
            
            No utilizar autoplay.
            
            ---
            
            # 22. Video
            
            Puede incorporarse video únicamente si posteriormente existe una demostración real y aprobada.
            
            No es obligatorio para V1.
            
            Si existe:
            
            - no reproducir automáticamente con sonido;
            - mostrar controles;
            - permitir pausa;
            - utilizar portada clara.
            
            No crear un video conceptual únicamente para llenar la sección.
            
            ---
            
            # 23. Tecnologías utilizadas
            
            No mostrar todavía una sección de tecnologías porque las fuentes actuales no especifican cuáles se utilizaron en este proyecto.
            
            No asumir:
            
            - Power Apps;
            - Power Automate;
            - Power BI;
            - React;
            - Node;
            - SQL;
            - Azure;
            - Microsoft 365;
            - otras herramientas.
            
            Cuando Juan Diego o Gonzalo confirmen el stack real, podrá incorporarse como información secundaria.
            
            Nunca debe dominar el relato del proyecto.
            
            ---
            
            # 24. Testimonio
            
            No mostrar testimonio actualmente.
            
            Solo incorporarlo cuando exista:
            
            - testimonio real;
            - autorización de publicación;
            - autor correctamente identificado o anonimización aprobada.
            
            No utilizar testimonios genéricos.
            
            ---
            
            # 25. Cliente
            
            Mantener anonimizado.
            
            No mostrar:
            
            - nombre;
            - logo;
            - web;
            - responsables;
            - empleados.
            
            Si posteriormente existe autorización explícita, podrá actualizarse el contenido.
            
            ---
            
            # 26. Nota de anonimización
            
            Puede incluirse discretamente cerca del encabezado o visual:
            
            “Información anonimizada para preservar la confidencialidad del cliente.”
            
            Mostrarla una sola vez.
            
            No repetir constantemente que el proyecto es anonimizado.
            
            ---
            
            # 27. CTA
            
            Esta sección NO necesita un CTA comercial grande en medio del caso.
            
            La página contará con una sección final de contacto.
            
            Priorizar que el visitante termine de conocer el proyecto.
            
            No agregar:
            
            - “Solicitar presupuesto”.
            - “Agendar reunión”.
            - Calendly.
            - botón de WhatsApp dentro del caso.
            
            Si se considera necesaria una transición al terminar, puede utilizarse solamente un enlace discreto hacia el contenido siguiente.
            
            ---
            
            # 28. Otros proyectos
            
            Después de esta sección podrá aparecer:
            
            “Otros proyectos”
            
            Únicamente cuando existan otros casos reales suficientemente documentados.
            
            Mientras no existan:
            
            pasar directamente al CTA final de `/proyectos`.
            
            No agregar tarjetas falsas.
            
            ---
            
            # 29. Estilo visual
            
            Mantener el sistema visual de MendoData.
            
            La sección debe sentirse más editorial y demostrativa que las tarjetas de la Home.
            
            Priorizar:
            
            - interfaces grandes;
            - mucho espacio en blanco;
            - navy;
            - azul de marca;
            - superficies claras;
            - bordes suaves;
            - sombras discretas;
            - bloques bien separados;
            - lectura fácil.
            
            No encerrar todo el proyecto dentro de una única tarjeta.
            
            Permitir que el contenido respire.
            
            ---
            
            # 30. Diferencia respecto de la Home
            
            La Home ya presenta una versión resumida de este proyecto.
            
            En `/proyectos` NO repetir exactamente la misma composición.
            
            HOME:
            
            Problema + solución + funcionalidades + resultado en formato breve.
            
            PROYECTOS:
            
            Contexto
            ↓
            Visual amplio
            ↓
            Problema
            ↓
            Solución
            ↓
            Funcionalidades explicadas
            ↓
            Resultado
            ↓
            Evidencia adicional cuando exista
            
            La página de Proyectos debe aportar profundidad real.
            
            ---
            
            # 31. Accesibilidad
            
            Implementar:
            
            - estructura semántica coherente;
            - heading adecuado para el proyecto;
            - subtítulos para Problema, Solución, Funcionalidades y Resultado;
            - alt descriptivo para capturas;
            - navegación de galería mediante teclado si existe;
            - contraste suficiente;
            - foco visible;
            - no depender únicamente del color.
            
            Alt provisional del visual:
            
            “Interfaz de un sistema para gestionar inventarios, movimientos entre sucursales, diferencias de stock y aprobaciones.”
            
            Actualizar según la captura definitiva.
            
            ---
            
            # 32. Medición
            
            Si existe analítica global, puede registrarse:
            
            `project_view`
            
            Datos:
            
            - `page: proyectos`
            - `project_id: control_inventario_sucursales`
            - `project_type: real_anonimizado`
            
            Si existe galería:
            
            `project_media_view`
            
            Datos posibles:
            
            - `project_id`
            - `media_index`
            - `media_type`
            
            No crear infraestructura de medición nueva únicamente para esta sección.
            
            ---
            
            # 33. Información pendiente antes de enriquecer el caso
            
            Actualmente falta confirmar o conseguir:
            
            - capturas publicables;
            - posibles videos;
            - stack tecnológico;
            - cantidad de sucursales;
            - cantidad de usuarios;
            - métricas de mejora;
            - tiempos ahorrados;
            - resultados cuantificados;
            - testimonio;
            - autorización del cliente;
            - posibilidad de publicar identidad o logo;
            - detalles adicionales del proceso anterior;
            - aprendizajes del proyecto.
            
            No inventar estos datos.
            
            La sección debe funcionar correctamente aunque permanezcan pendientes.
            
            ---
            
            # 34. No hacer
            
            No:
            
            - afirmar que el proyecto utilizaba Excel si no está confirmado;
            - inventar cómo era el proceso anterior;
            - inventar cantidad de sucursales;
            - inventar cantidad de usuarios;
            - inventar tecnologías;
            - inventar tiempos;
            - inventar métricas;
            - inventar ROI;
            - inventar testimonios;
            - publicar el cliente sin autorización;
            - utilizar “Caso de éxito”;
            - agregar fotografías de stock;
            - presentar un mockup como captura real;
            - llenar la página de placeholders;
            - agregar un CTA comercial después de cada bloque;
            - modificar otras páginas durante esta implementación.
            
            ---
            
            # 35. Criterios de aceptación
            
            La sección estará terminada cuando:
            
            - presente “Control de inventario y sucursales”;
            - indique que es un proyecto real anonimizado;
            - utilice únicamente información confirmada;
            - explique el contexto;
            - explique el problema;
            - explique la solución;
            - muestre las cuatro funcionalidades confirmadas;
            - comunique los resultados cualitativos reales;
            - no invente métricas;
            - no invente tecnologías;
            - tenga un visual principal preparado para material real;
            - distinga claramente entre captura real y representación ilustrativa;
            - permita incorporar una galería posteriormente;
            - funcione correctamente en desktop;
            - funcione correctamente en tablet;
            - funcione correctamente en mobile;
            - no genere scroll horizontal;
            - tenga mayor profundidad que la versión mostrada en la Home;
            - mantenga la identidad visual de MendoData.
            
            ---
            
            # 36. Copy definitivo actual
            
            BADGE
            
            “Proyecto real anonimizado”
            
            TÍTULO
            
            “Control de inventario y sucursales”
            
            META
            
            “Operaciones · Inventarios · Gestión entre sucursales”
            
            CONTEXTO
            
            “Proyecto desarrollado para una empresa chilena vinculada al mantenimiento y reparación de vehículos utilizados en minería.”
            
            RESUMEN
            
            “Una solución desarrollada para mejorar el control de inventarios, movimientos entre sucursales y aprobaciones operativas.”
            
            PROBLEMA
            
            “La empresa tenía dificultades para controlar inventarios, movimientos entre sucursales, diferencias de stock y aprobaciones.”
            
            SOLUCIÓN
            
            “Desarrollamos un sistema para gestionar inventarios con códigos de barras, registrar movimientos, controlar diferencias y digitalizar aprobaciones.”
            
            FUNCIONALIDADES
            
            - Gestión de inventario con códigos de barras.
            - Movimientos entre sucursales.
            - Control de diferencias de stock.
            - Aprobaciones digitales.
            
            RESULTADO
            
            “Mayor control, trazabilidad y capacidad para detectar inconsistencias.”
            ```
            
        - Sección 3: Otros proyectos
            
            ```jsx
            # BLUEPRINT DEFINITIVO — PROYECTOS / SECCIÓN 3: OTROS PROYECTOS
            
            ## Estado
            
            APROBADO COMO SECCIÓN CONDICIONAL.
            
            Esta sección forma parte de la arquitectura futura de `/proyectos`, pero NO debe mostrarse públicamente mientras no exista al menos un segundo proyecto real suficientemente documentado.
            
            Actualmente:
            
            NO RENDERIZAR ESTA SECCIÓN EN PRODUCCIÓN.
            
            Después del proyecto:
            
            “Control de inventario y sucursales”
            
            la página debe continuar directamente hacia el CTA final de Proyectos.
            
            ---
            
            # 1. Nombre e identificador
            
            Nombre:
            
            “Otros proyectos”
            
            ID:
            
            `otros-proyectos`
            
            Ubicación futura:
            
            Después de:
            
            “Control de inventario y sucursales”
            
            y antes del CTA final de `/proyectos`.
            
            ---
            
            # 2. Objetivo
            
            Mostrar progresivamente otros trabajos reales de MendoData y ampliar la evidencia de sus capacidades.
            
            La sección debe permitir que un visitante conozca distintos ejemplos de:
            
            - problemas abordados;
            - soluciones desarrolladas;
            - procesos mejorados;
            - tipos de operación;
            - tecnologías aplicadas cuando estén confirmadas;
            - resultados verificables.
            
            Su función es construir confianza mediante variedad de evidencia real.
            
            No debe convertirse en un catálogo de servicios.
            
            ---
            
            # 3. Condición para mostrar la sección
            
            Renderizar esta sección únicamente cuando exista como mínimo:
            
            1 proyecto adicional al proyecto principal
            
            que cuente con información suficiente para ser presentado públicamente.
            
            Un proyecto se considera suficientemente documentado cuando existe, como mínimo:
            
            - nombre público o descriptivo;
            - estado del proyecto;
            - problema real;
            - solución real;
            - al menos una funcionalidad o característica verificable;
            - evidencia visual publicable o un recurso visual correctamente identificado;
            - autorización o criterio claro de anonimización.
            
            No es obligatorio disponer todavía de métricas o testimonios.
            
            ---
            
            # 4. Estado actual
            
            Actualmente existe un proyecto correctamente documentado:
            
            “Control de inventario y sucursales”
            
            Los demás proyectos todavía deben documentarse y recuperar evidencia antes de publicarse.
            
            Por lo tanto:
            
            NO mostrar actualmente:
            
            - título “Otros proyectos”;
            - tarjetas vacías;
            - placeholders;
            - proyectos ficticios;
            - proyectos conceptuales presentados como reales;
            - mensajes “Próximamente”.
            
            La ausencia de esta sección no debe dejar un espacio vacío.
            
            ---
            
            # 5. Flujo actual V1
            
            Mientras exista un solo proyecto:
            
            Hero
            ↓
            Control de inventario y sucursales
            ↓
            CTA final
            ↓
            Footer
            
            No mostrar:
            
            Otros proyectos
            
            ---
            
            # 6. Flujo futuro
            
            Cuando existan más proyectos publicables:
            
            Hero
            ↓
            Proyecto principal
            ↓
            Otros proyectos
            ↓
            CTA final
            ↓
            Footer
            
            ---
            
            # 7. Encabezado futuro
            
            Cuando la sección esté activa utilizar:
            
            H2:
            
            “Otros proyectos”
            
            Descripción sugerida:
            
            “Más ejemplos de soluciones desarrolladas alrededor de procesos y necesidades reales.”
            
            La descripción puede revisarse cuando existan los proyectos concretos.
            
            No utilizar:
            
            - “Casos de éxito”.
            - “Nuestros mejores proyectos”.
            - “Clientes que transformamos”.
            - lenguaje exagerado.
            
            ---
            
            # 8. Tarjeta de proyecto
            
            Cada proyecto debe utilizar una tarjeta resumida.
            
            Estructura:
            
            1. Visual.
            2. Estado.
            3. Nombre del proyecto.
            4. Categoría o contexto breve.
            5. Problema resumido.
            6. Solución resumida.
            7. Acción opcional.
            
            No incluir el caso completo dentro de la tarjeta.
            
            ---
            
            # 9. Estado del proyecto
            
            Cada tarjeta debe indicar correctamente uno de estos estados:
            
            “Proyecto real”
            
            “Proyecto real anonimizado”
            
            “Demostración ilustrativa”
            
            Utilizar únicamente el estado que corresponda.
            
            No presentar una demo como proyecto real.
            
            ---
            
            # 10. Visual
            
            Cada tarjeta debe incluir un visual.
            
            Prioridad:
            
            1. Captura real aprobada.
            2. Captura real anonimizada.
            3. Mockup basado en una solución real.
            4. Representación ilustrativa claramente identificada.
            
            Mantener una proporción consistente entre tarjetas.
            
            No utilizar fotografías genéricas de stock.
            
            ---
            
            # 11. Nombre
            
            Utilizar un nombre descriptivo que permita entender rápidamente el proyecto.
            
            Ejemplos de estructura:
            
            “Control de inventarios y sucursales”
            
            “Automatización de aprobaciones”
            
            “Centralización de información operativa”
            
            Estos ejemplos NO deben publicarse como proyectos reales salvo que efectivamente existan y estén documentados.
            
            No inventar proyectos a partir de estos ejemplos.
            
            ---
            
            # 12. Contexto
            
            Cada tarjeta puede incluir una línea breve relacionada con:
            
            - sector;
            - tipo de operación;
            - área;
            - problema.
            
            Ejemplo de formato:
            
            “Operaciones · Inventarios”
            
            o:
            
            “Administración · Automatización”
            
            Mostrar únicamente información confirmada.
            
            ---
            
            # 13. Problema resumido
            
            Mostrar una sola frase.
            
            Debe explicar qué situación llevó al desarrollo del proyecto.
            
            No utilizar párrafos largos.
            
            No inventar impacto económico o métricas.
            
            ---
            
            # 14. Solución resumida
            
            Mostrar una sola frase.
            
            Debe explicar qué desarrolló o implementó MendoData.
            
            Priorizar:
            
            qué se resolvió
            
            antes que:
            
            qué tecnología se utilizó.
            
            ---
            
            # 15. Tecnologías
            
            Las tecnologías son opcionales.
            
            Mostrar únicamente cuando estén confirmadas.
            
            Pueden aparecer como pequeños chips o texto secundario.
            
            No convertir la tarjeta en una lista de:
            
            - Power BI;
            - Power Apps;
            - Power Automate;
            - frameworks;
            - bases de datos.
            
            El proyecto debe entenderse aunque el visitante ignore la tecnología utilizada.
            
            ---
            
            # 16. Acción de la tarjeta
            
            En V1 futura puede utilizarse:
            
            “Ver proyecto”
            
            solo si existe una experiencia real de detalle.
            
            El destino puede ser:
            
            - una sección expandida;
            - una página individual;
            - un modal accesible;
            - otro mecanismo definido posteriormente.
            
            No crear ahora rutas individuales como:
            
            `/proyectos/proyecto-x`
            
            si todavía no existe necesidad.
            
            Si no existe detalle adicional:
            
            NO mostrar botón.
            
            ---
            
            # 17. Cantidad de proyectos
            
            No establecer un número artificial.
            
            Mostrar únicamente los proyectos reales disponibles.
            
            Ejemplos válidos:
            
            - 2 proyectos;
            - 3 proyectos;
            - 4 proyectos.
            
            No esperar a tener exactamente seis para activar la sección.
            
            No rellenar una grilla para lograr simetría.
            
            ---
            
            # 18. Layout desktop
            
            Cuando existan proyectos, utilizar una grilla.
            
            Preferencia:
            
            3 columnas cuando haya suficiente contenido y ancho.
            
            Ejemplo:
            
            [ Proyecto 2 ] [ Proyecto 3 ] [ Proyecto 4 ]
            
            Si existen solamente dos proyectos:
            
            [ Proyecto 2 ] [ Proyecto 3 ]
            
            centrados dentro del contenedor.
            
            No agregar una tercera tarjeta vacía.
            
            ---
            
            # 19. Tablet
            
            Utilizar:
            
            2 columnas
            
            mientras exista espacio suficiente.
            
            Si queda una tarjeta impar, puede quedar centrada debajo.
            
            No comprimir tres columnas.
            
            ---
            
            # 20. Mobile
            
            Utilizar una sola columna.
            
            Orden:
            
            Proyecto 2
            ↓
            Proyecto 3
            ↓
            Proyecto 4
            
            No utilizar carrusel como comportamiento principal.
            
            No ocultar proyectos detrás de interacción innecesaria.
            
            ---
            
            # 21. Altura de tarjetas
            
            Mantener una estructura consistente.
            
            Las tarjetas deben tener alturas visualmente equilibradas, pero no forzar cantidades de texto idénticas artificialmente.
            
            Priorizar:
            
            - visual consistente;
            - títulos breves;
            - máximo de 1–2 frases descriptivas.
            
            El detalle pertenece al proyecto completo.
            
            ---
            
            # 22. Estilo visual
            
            Mantener el sistema visual de MendoData:
            
            - navy;
            - azul de acción;
            - fondos claros;
            - tarjetas blancas;
            - bordes suaves;
            - sombras sutiles;
            - interfaces como recurso visual principal;
            - bastante espacio en blanco.
            
            La sección debe sentirse como una galería de evidencia, no como una tienda de productos.
            
            ---
            
            # 23. Datos recomendados por proyecto
            
            Preparar la estructura de datos para poder almacenar:
            
            - `id`
            - `slug`
            - `status`
            - `title`
            - `sector`
            - `operation`
            - `problem`
            - `solution`
            - `features`
            - `result`
            - `technologies`
            - `coverImage`
            - `gallery`
            - `video`
            - `clientName`
            - `clientAuthorized`
            - `anonymized`
            - `testimonial`
            - `testimonialAuthorized`
            
            No es obligatorio utilizar todos los campos.
            
            No mostrar datos vacíos.
            
            ---
            
            # 24. Fuente única de datos
            
            Evitar hardcodear el mismo proyecto varias veces si la arquitectura actual permite compartir datos.
            
            Idealmente:
            
            - Home utiliza una versión resumida;
            - `/proyectos` utiliza la versión desarrollada;
            - “Otros proyectos” consume la misma fuente de datos.
            
            La implementación debe facilitar agregar nuevos proyectos en el futuro.
            
            No construir un CMS complejo si el proyecto no lo necesita.
            
            Una estructura simple de datos es suficiente.
            
            ---
            
            # 25. Privacidad
            
            Aplicar los mismos criterios definidos para el proyecto principal.
            
            No publicar:
            
            - nombres de clientes sin autorización;
            - logos sin autorización;
            - usuarios;
            - correos;
            - teléfonos;
            - datos internos;
            - datos financieros;
            - métricas confidenciales;
            - capturas sensibles.
            
            Anonimizar cuando corresponda.
            
            ---
            
            # 26. Resultados
            
            Mostrar únicamente resultados verificables.
            
            Pueden ser cualitativos.
            
            No exigir métricas para poder publicar un proyecto.
            
            Sí exigir que cualquier afirmación incluida tenga respaldo real.
            
            No inventar:
            
            - porcentajes;
            - ROI;
            - ahorro;
            - productividad;
            - reducción de errores;
            - tiempos.
            
            ---
            
            # 27. Testimonios
            
            No son obligatorios para publicar un proyecto.
            
            Cuando existan:
            
            - deben ser reales;
            - autorizados;
            - correctamente atribuidos o anonimizados.
            
            No utilizar texto ficticio para rellenar tarjetas.
            
            ---
            
            # 28. Interacciones
            
            Las tarjetas pueden tener una microinteracción discreta en hover si existe una acción real.
            
            Si la tarjeta NO es clickeable:
            
            no utilizar efectos que hagan parecer que lo es.
            
            Si es clickeable:
            
            - cursor adecuado;
            - hover;
            - focus;
            - navegación mediante teclado.
            
            ---
            
            # 29. Accesibilidad
            
            Cuando la sección esté activa implementar:
            
            - H2 para “Otros proyectos”;
            - heading coherente para cada proyecto;
            - alt descriptivo para visuales;
            - contraste suficiente;
            - navegación mediante teclado;
            - focus visible;
            - tarjetas clickeables mediante estructura semántica correcta.
            
            No depender únicamente del color para indicar estado.
            
            ---
            
            # 30. Medición
            
            Cuando existan varios proyectos y analítica configurada se puede registrar:
            
            `project_card_click`
            
            Datos:
            
            - `page: proyectos`
            - `project_id`
            - `project_name`
            - `section: otros_proyectos`
            
            No medir cada hover o impresión individual si no aporta información útil.
            
            No crear eventos mientras la sección no esté activa.
            
            ---
            
            # 31. No hacer actualmente
            
            No:
            
            - mostrar esta sección vacía;
            - mostrar “Próximamente”;
            - inventar proyectos;
            - convertir demos en proyectos reales;
            - duplicar el proyecto principal dentro de “Otros proyectos”;
            - agregar tarjetas placeholder públicas;
            - mostrar una grilla de seis elementos por estética;
            - agregar filtros;
            - agregar buscador;
            - agregar categorías vacías;
            - crear páginas individuales sin contenido suficiente.
            
            ---
            
            # 32. Activación futura
            
            Antes de activar esta sección:
            
            1. Documentar el nuevo proyecto.
            2. Confirmar qué información puede publicarse.
            3. Recuperar o crear material visual válido.
            4. Definir si debe anonimizarse.
            5. Revisar resultados.
            6. Confirmar tecnologías si se mostrarán.
            7. Agregar el proyecto a la fuente de datos.
            8. Probar desktop, tablet y mobile.
            
            Solo entonces hacer visible:
            
            “Otros proyectos”
            
            ---
            
            # 33. Criterios de aceptación actuales
            
            En la versión actual `/proyectos`:
            
            - la sección NO debe renderizarse;
            - no debe dejar espacio vacío;
            - no deben aparecer placeholders;
            - no deben aparecer proyectos ficticios;
            - el proyecto principal debe conectar directamente con el CTA final.
            
            La arquitectura puede quedar preparada internamente para activarla posteriormente.
            
            ---
            
            # 34. Criterios de aceptación futuros
            
            Cuando exista más contenido:
            
            - mostrar únicamente proyectos reales o demos correctamente identificadas;
            - cada tarjeta debe tener contenido suficiente;
            - la grilla debe adaptarse a la cantidad real;
            - funcionar correctamente en desktop;
            - funcionar correctamente en tablet;
            - funcionar correctamente en mobile;
            - no generar scroll horizontal;
            - mantener coherencia visual;
            - respetar privacidad;
            - permitir incorporar nuevos proyectos sin rediseñar la página.
            
            ---
            
            # 35. Resumen de comportamiento
            
            HOY:
            
            Control de inventario y sucursales
            ↓
            CTA final
            
            FUTURO:
            
            Control de inventario y sucursales
            ↓
            Otros proyectos
            
            [ Proyecto 2 ] [ Proyecto 3 ] [ Proyecto 4 ]
            
            ↓
            CTA final
            ```
            
        - Sección 4: CTA final
            
            ```jsx
            # BLUEPRINT DEFINITIVO — PROYECTOS / SECCIÓN 4: CTA FINAL
            
            ## Estado
            
            APROBADO.
            
            Utilizar este blueprint como versión definitiva de la Sección 4 de:
            
            `/proyectos`
            
            Esta sección debe cerrar la página después del proyecto o de la futura sección “Otros proyectos”.
            
            Su función es convertir la confianza generada por la evidencia en una consulta comercial.
            
            ---
            
            # 1. Nombre e identificador
            
            Nombre:
            
            “CTA final”
            
            ID:
            
            `contacto-proyectos`
            
            Ubicación:
            
            VERSIÓN ACTUAL:
            
            Hero
            ↓
            Control de inventario y sucursales
            ↓
            CTA final
            ↓
            Footer
            
            VERSIÓN FUTURA:
            
            Hero
            ↓
            Proyecto principal
            ↓
            Otros proyectos
            ↓
            CTA final
            ↓
            Footer
            
            ---
            
            # 2. Objetivo
            
            Invitar al visitante a iniciar una conversación con MendoData después de conocer proyectos reales.
            
            La sección debe transmitir:
            
            “Si en tu empresa existe un problema parecido o un proceso que necesitás ordenar, podemos empezar por entenderlo.”
            
            Debe existir un siguiente paso claro, sin obligar al visitante a:
            
            - saber qué tecnología necesita;
            - solicitar un presupuesto inmediatamente;
            - elegir un servicio;
            - agendar una reunión.
            
            ---
            
            # 3. Rótulo
            
            Utilizar:
            
            “HABLEMOS”
            
            Tratamiento:
            
            - pequeño;
            - mayúsculas;
            - azul de marca;
            - espaciado entre letras;
            - jerarquía secundaria.
            
            El rótulo es opcional si el diseño final funciona mejor sin él.
            
            ---
            
            # 4. Título
            
            H2:
            
            “¿Tenés un problema parecido o un proceso que necesitás ordenar?”
            
            Utilizar exactamente este texto.
            
            Debe ser el elemento principal de la sección.
            
            El copy debe permitir que se identifiquen tanto empresas con problemas similares al proyecto mostrado como empresas con otros desafíos operativos.
            
            ---
            
            # 5. Descripción
            
            Utilizar exactamente:
            
            “Contanos brevemente qué está pasando en tu empresa. Primero entendemos la necesidad y después vemos qué solución tiene sentido.”
            
            Debe aparecer debajo del H2.
            
            Características:
            
            - breve;
            - cercana;
            - fácil de entender;
            - sin tecnicismos;
            - sin prometer una solución antes de conocer el problema.
            
            ---
            
            # 6. CTA principal
            
            Texto:
            
            “Contanos qué necesitás resolver”
            
            Destino:
            
            `/#contacto`
            
            Debe ser la acción principal de la sección.
            
            Este CTA debe llevar desde `/proyectos` a la Sección 8 de la Home.
            
            No dirigir a:
            
            - Calendly;
            - WhatsApp;
            - email;
            - una página `/contacto`;
            - una sección inexistente.
            
            El formulario principal del sitio vive en:
            
            `/#contacto`
            
            No crear una página independiente de contacto.
            
            ---
            
            # 7. CTA secundario
            
            Mostrar como alternativa:
            
            “Hablar por WhatsApp”
            
            Debe reutilizar exactamente la configuración global de WhatsApp:
            
            - número;
            - enlace;
            - mensaje inicial;
            - comportamiento.
            
            No crear una URL independiente.
            
            Jerarquía:
            
            CTA principal:
            
            “Contanos qué necesitás resolver”
            
            CTA secundario:
            
            “Hablar por WhatsApp”
            
            WhatsApp debe funcionar como alternativa y no competir visualmente con el CTA principal.
            
            ---
            
            # 8. Estilo de botones
            
            ## CTA principal
            
            Utilizar:
            
            - fondo azul de acción;
            - texto blanco;
            - alto contraste;
            - tamaño cómodo;
            - hover;
            - focus visible;
            - active.
            
            Debe ser visualmente dominante.
            
            ---
            
            ## WhatsApp
            
            Utilizar un estilo secundario:
            
            - fondo blanco o transparente;
            - borde azul;
            - texto azul;
            - ícono de WhatsApp cuando corresponda.
            
            No utilizar un gran botón verde que compita con el CTA principal.
            
            El ícono de WhatsApp puede utilizar su tratamiento habitual siempre que mantenga una jerarquía secundaria.
            
            ---
            
            # 9. No incluir formulario
            
            NO colocar el formulario completo dentro de `/proyectos`.
            
            El formulario comercial principal del sitio ya existe en la Home:
            
            `/#contacto`
            
            Esta página debe dirigir hacia esa sección.
            
            No crear:
            
            - otro formulario;
            - otra lógica de validación;
            - otro endpoint;
            - otro sistema de envío;
            - una página independiente `/contacto`.
            
            Evitar formularios repetidos innecesariamente en el sitio.
            
            ---
            
            # 10. Layout desktop
            
            Preferencia:
            
            composición centrada y compacta.
            
            Orden:
            
            1. Rótulo.
            2. H2.
            3. Descripción.
            4. Acciones.
            
            Representación:
            
                             HABLEMOS
            
                 ¿Tenés un problema parecido o
                   un proceso que necesitás ordenar?
            
                 Contanos brevemente qué está pasando
                  en tu empresa. Primero entendemos
                   la necesidad y después vemos qué
                         solución tiene sentido.
            
               [ Contanos qué necesitás resolver ]
            
                       [ Hablar por WhatsApp ]
            
            También pueden colocarse ambos botones en una misma fila si el ancho lo permite:
            
            [ Contanos qué necesitás resolver ] [ Hablar por WhatsApp ]
            
            Mantener claramente la jerarquía entre ambos.
            
            ---
            
            # 11. Ancho
            
            El contenido no debe ocupar todo el ancho de pantalla.
            
            Mantener un ancho de lectura cómodo.
            
            El H2 debe tener aproximadamente entre:
            
            2 y 3 líneas
            
            en desktop normal.
            
            La sección debe tener suficiente espacio vertical para funcionar como cierre, pero no convertirse en otro Hero.
            
            ---
            
            # 12. Mobile
            
            Utilizar una sola columna.
            
            Orden:
            
            1. Rótulo.
            2. H2.
            3. Descripción.
            4. CTA principal.
            5. CTA WhatsApp.
            
            Representación:
            
            HABLEMOS
            
            ¿Tenés un problema parecido
            o un proceso que necesitás
            ordenar?
            
            Descripción
            
            [ Contanos qué necesitás resolver ]
            
            [ Hablar por WhatsApp ]
            
            Los botones pueden ocupar todo el ancho útil.
            
            Mantener suficiente separación para evitar pulsaciones accidentales.
            
            No generar scroll horizontal.
            
            ---
            
            # 13. Tablet
            
            Mantener la composición centrada.
            
            Los botones pueden:
            
            - permanecer en una fila;
            - o apilarse.
            
            Elegir según el espacio disponible.
            
            No reducir excesivamente el texto o los botones para conservar una disposición horizontal.
            
            ---
            
            # 14. Estilo visual
            
            La sección debe diferenciarse del contenido del proyecto y anticipar visualmente el cierre de página.
            
            Preferencia:
            
            - fondo azul muy claro o superficie suavemente contrastada;
            - título navy;
            - texto secundario oscuro;
            - CTA azul;
            - bordes redondeados;
            - decoración mínima.
            
            Puede utilizarse un contenedor amplio con border-radius si encaja con el sistema visual.
            
            No debe parecer:
            
            - popup;
            - banner publicitario;
            - bloque agresivo de venta.
            
            ---
            
            # 15. Relación con el Footer
            
            El Footer global aparece inmediatamente después.
            
            Por eso evitar que esta sección utilice el mismo fondo navy oscuro dominante del Footer.
            
            Preferencia:
            
            CTA final claro
            ↓
            Footer navy
            
            Esto ayuda a separar visualmente:
            
            conversión
            ↓
            navegación institucional
            
            ---
            
            # 16. WhatsApp flotante
            
            El botón flotante global sigue visible.
            
            Debe comprobarse que no cubra:
            
            - CTA principal;
            - CTA secundario;
            - Footer;
            - contenido mobile.
            
            Aunque exista el botón flotante, el CTA secundario de WhatsApp puede mantenerse aquí porque forma parte explícita de las opciones de contacto al final del recorrido.
            
            Ambos deben utilizar exactamente la misma configuración global.
            
            ---
            
            # 17. Relación con Contacto
            
            El CTA principal dirige a:
            
            `/#contacto`
            
            La Sección 8 de la Home constituye el punto principal de contacto y contiene el formulario comercial del sitio.
            
            Desde:
            
            `/proyectos`
            
            el enlace debe navegar correctamente hacia la Home y posicionarse en:
            
            `#contacto`
            
            No existe una página independiente:
            
            `/contacto`
            
            No duplicar lógica de contacto.
            
            No crear:
            
            - otra página;
            - otro formulario;
            - otro endpoint;
            - otras validaciones;
            - otro sistema de envío.
            
            Si el sistema global maneja parámetros de atribución o UTM, conservarlos al navegar cuando técnicamente corresponda.
            
            No pedir esa información manualmente al usuario.
            
            ---
            
            # 18. Relación con el proyecto
            
            El copy no debe limitarse exclusivamente a inventarios.
            
            El proyecto anterior trata sobre:
            
            - inventarios;
            - sucursales;
            - movimientos;
            - aprobaciones.
            
            Pero el CTA debe abrir la conversación a cualquier problema compatible con las capacidades de MendoData.
            
            Por eso utilizar:
            
            “problema parecido o proceso que necesitás ordenar”
            
            y no:
            
            “¿Necesitás un sistema de inventario?”
            
            La sección debe permitir que una empresa con otro tipo de necesidad operativa también se sienta invitada a consultar.
            
            ---
            
            # 19. No agregar
            
            No agregar:
            
            - formulario;
            - Calendly;
            - agenda;
            - selector de servicios;
            - teléfono;
            - email;
            - testimonios;
            - logos;
            - métricas;
            - precios;
            - paquetes;
            - garantía de respuesta;
            - promesa de diagnóstico gratuito;
            - página `/contacto`.
            
            Mantener la sección simple.
            
            ---
            
            # 20. Accesibilidad
            
            Implementar:
            
            - H2 semántico;
            - contraste suficiente;
            - botones y enlaces claramente identificables;
            - navegación mediante teclado;
            - focus visible;
            - área táctil suficiente en mobile;
            - nombres accesibles para WhatsApp.
            
            El ícono de WhatsApp no debe ser el único contenido del botón.
            
            Los dos CTA deben mantener suficiente diferenciación visual y semántica.
            
            ---
            
            # 21. Medición
            
            Si existe analítica:
            
            ## CTA hacia contacto
            
            Evento:
            
            `cta_click`
            
            Datos:
            
            - `page: proyectos`
            - `section: contacto_final`
            - `cta_name: consulta`
            - `destination: contacto`
            
            Destino real:
            
            `/#contacto`
            
            No es necesario utilizar la URL completa como valor de `destination` si la convención global ya utiliza nombres lógicos.
            
            ---
            
            ## WhatsApp
            
            Evento:
            
            `whatsapp_click`
            
            Datos:
            
            - `page: proyectos`
            - `section: contacto_final`
            - `source: projects_final_cta`
            
            No crear infraestructura adicional exclusivamente para esta sección.
            
            ---
            
            # 22. No hacer
            
            No:
            
            - colocar el formulario de nuevo;
            - crear una página `/contacto`;
            - dirigir el CTA a `/contacto`;
            - agregar un tercer CTA;
            - abrir Calendly;
            - prometer reuniones;
            - utilizar copy exclusivamente logístico;
            - utilizar copy exclusivamente relacionado con inventario;
            - agregar una lista de servicios;
            - repetir las funcionalidades del proyecto;
            - volver a explicar Cómo trabajamos;
            - agregar testimonios ficticios;
            - convertir la sección en un segundo Hero.
            
            ---
            
            # 23. Criterios de aceptación
            
            La sección estará terminada cuando:
            
            - aparezca después del contenido de proyectos;
            - tenga un H2 claro;
            - el copy invite a consultar sin limitarse a inventarios;
            - exista un CTA principal hacia `/#contacto`;
            - no exista ningún CTA activo hacia `/contacto`;
            - exista WhatsApp como alternativa secundaria;
            - ambas acciones funcionen;
            - el CTA principal navegue correctamente desde `/proyectos` hasta la Sección 8 de la Home;
            - WhatsApp reutilice la configuración global;
            - no exista formulario duplicado;
            - no exista una página independiente de contacto;
            - no aparezca Calendly;
            - funcione correctamente en desktop;
            - funcione correctamente en tablet;
            - funcione correctamente en mobile;
            - no genere scroll horizontal;
            - mantenga coherencia con MendoData;
            - conecte visualmente correctamente con el Footer.
            
            ---
            
            # 24. Copy definitivo
            
            Rótulo:
            
            “HABLEMOS”
            
            Título:
            
            “¿Tenés un problema parecido o un proceso que necesitás ordenar?”
            
            Descripción:
            
            “Contanos brevemente qué está pasando en tu empresa. Primero entendemos la necesidad y después vemos qué solución tiene sentido.”
            
            CTA principal:
            
            “Contanos qué necesitás resolver”
            
            Destino:
            
            `/#contacto`
            
            CTA secundario:
            
            “Hablar por WhatsApp”
            
            Destino:
            
            configuración global de WhatsApp.
            
            Arquitectura:
            
            No existe:
            
            `/contacto`
            
            El formulario comercial principal vive en:
            
            `/#contacto`
            ```
            
    - 05. Página - Legal ✅
        
        ```jsx
        # BLUEPRINT DEFINITIVO — 05. PÁGINA LEGAL
        
        ## Estado
        
        APROBADO A NIVEL DE ESTRUCTURA.
        
        Ruta:
        
        `https://mendodata.online/legal`
        
        Esta página centraliza la información relacionada con:
        
        - privacidad;
        - tratamiento de datos;
        - cookies;
        - preferencias de cookies, únicamente si existe un sistema funcional.
        
        IMPORTANTE:
        
        La estructura y experiencia de la página pueden implementarse con este blueprint.
        
        El contenido jurídico definitivo NO debe inventarse.
        
        Antes de publicar textos legales deben verificarse:
        
        - datos oficiales de MendoData;
        - datos realmente recopilados;
        - funcionamiento real del formulario;
        - herramientas externas instaladas;
        - analítica;
        - cookies;
        - proveedores;
        - integraciones;
        - mecanismos de almacenamiento;
        - configuración técnica del sitio.
        
        ---
        
        # 1. Objetivo
        
        Permitir que cualquier visitante pueda comprender de forma clara:
        
        - qué información puede recopilar el sitio;
        - para qué se utiliza;
        - cómo puede contactar a MendoData respecto de sus datos;
        - qué cookies utiliza realmente el sitio;
        - cómo administrar sus preferencias, si corresponde.
        
        La página debe priorizar:
        
        - claridad;
        - transparencia;
        - lectura simple;
        - información real.
        
        No debe contener texto legal genérico solamente para “tener una política”.
        
        ---
        
        # 2. Estructura general
        
        Orden:
        
        1. Header global.
        2. Encabezado de página.
        3. Navegación interna.
        4. Privacidad.
        5. Cookies.
        6. Configuración de cookies, únicamente si existe.
        7. Fecha de actualización.
        8. Footer global.
        
        No crear múltiples páginas separadas en V1.
        
        Utilizar:
        
        `/legal#privacidad`
        
        y:
        
        `/legal#cookies`
        
        ---
        
        # 3. Header
        
        Reutilizar exactamente el Header global.
        
        No crear una navegación especial para Legal.
        
        Los enlaces a secciones de la Home deben continuar utilizando rutas globales, por ejemplo:
        
        `/#soluciones`
        
        `/#como-trabajamos`
        
        `/#equipo`
        
        `/#contacto`
        
        ---
        
        # 4. Encabezado
        
        Rótulo:
        
        “LEGAL”
        
        H1:
        
        “Privacidad y cookies”
        
        Descripción:
        
        “Información sobre el tratamiento de datos y el uso de cookies en el sitio de MendoData.”
        
        Mantener esta introducción breve.
        
        No utilizar lenguaje excesivamente jurídico en el encabezado.
        
        ---
        
        # 5. Navegación interna
        
        Debajo del encabezado incluir accesos a:
        
        “Privacidad”
        
        → `#privacidad`
        
        “Cookies”
        
        → `#cookies`
        
        Si posteriormente existe un panel funcional:
        
        “Configurar cookies”
        
        → abre el panel de preferencias.
        
        No agregar:
        
        - Términos y condiciones;
        - Aviso legal;
        - Condiciones de contratación;
        
        salvo que exista una necesidad real y contenido validado para esas secciones.
        
        ---
        
        # 6. Sección Privacidad
        
        ID:
        
        `privacidad`
        
        H2:
        
        “Privacidad”
        
        La sección debe explicar únicamente información verdadera y confirmada.
        
        Debe estructurarse mediante subtítulos claros.
        
        ---
        
        # 7. Responsable
        
        Subtítulo sugerido:
        
        “Quién es responsable de los datos”
        
        Antes de publicar esta parte confirmar:
        
        - nombre legal o denominación correspondiente;
        - identificación fiscal cuando corresponda;
        - domicilio legal si debe publicarse;
        - medio oficial de contacto;
        - jurisdicción aplicable.
        
        NO asumir que:
        
        “MendoData”
        
        es necesariamente la denominación legal que debe aparecer en la política.
        
        No inventar CUIT, dirección, razón social o email.
        
        ---
        
        # 8. Datos que recopila el formulario
        
        La implementación actual prevista del formulario utiliza:
        
        - Nombre.
        - Email.
        - Empresa o rubro, opcional.
        - Mensaje.
        
        La política publicada debe reflejar exactamente la implementación real.
        
        Si Claude descubre que el formulario recopila datos adicionales mediante:
        
        - campos ocultos;
        - IP;
        - UTM;
        - identificadores;
        - logs;
        - metadata;
        
        debe informarlo antes de redactar la versión definitiva.
        
        No afirmar que solamente se recopilan cuatro datos si técnicamente existen otros registros.
        
        ---
        
        # 9. Finalidad de los datos
        
        Subtítulo sugerido:
        
        “Para qué utilizamos la información”
        
        El contenido deberá explicar las finalidades reales.
        
        Ejemplos que deben verificarse antes de publicar:
        
        - responder consultas;
        - gestionar oportunidades comerciales;
        - realizar seguimiento de una consulta;
        - analizar el origen de consultas.
        
        No agregar finalidades futuras o hipotéticas.
        
        No afirmar:
        
        “Utilizamos tus datos para marketing”
        
        si no existe ese tratamiento.
        
        ---
        
        # 10. Campos opcionales y obligatorios
        
        La política debe ser coherente con el formulario.
        
        Actualmente:
        
        - Empresa o rubro debe ser opcional.
        
        No describir un campo como obligatorio si la interfaz lo presenta como opcional.
        
        No recopilar información adicional solamente porque aparezca mencionada en la política.
        
        ---
        
        # 11. Base o fundamento del tratamiento
        
        No inventar la base jurídica.
        
        Debe definirse según:
        
        - jurisdicción aplicable;
        - funcionamiento real;
        - tipo de relación;
        - datos recopilados.
        
        Si esta información todavía no está validada:
        
        NO redactar una afirmación definitiva.
        
        Marcar como dato pendiente antes de publicación.
        
        ---
        
        # 12. Destinatarios y proveedores
        
        Subtítulo sugerido:
        
        “Servicios y proveedores”
        
        Antes de completar esta parte revisar qué servicios reciben o procesan realmente información.
        
        Ejemplos posibles, únicamente si existen:
        
        - hosting;
        - proveedor del formulario;
        - email;
        - CRM;
        - analítica;
        - infraestructura cloud.
        
        No inventar proveedores.
        
        No mencionar servicios únicamente porque MendoData utiliza tecnología Microsoft en otros contextos.
        
        ---
        
        # 13. CRM
        
        Si las consultas del formulario se incorporan a un CRM, la política debe reflejar el tratamiento real.
        
        Antes de publicar confirmar:
        
        - si la integración existe;
        - qué datos transfiere;
        - dónde se almacenan;
        - qué servicio se utiliza.
        
        No afirmar que existe integración automática con CRM si todavía no está implementada.
        
        ---
        
        # 14. Conservación
        
        Subtítulo sugerido:
        
        “Durante cuánto tiempo conservamos la información”
        
        No inventar períodos.
        
        No utilizar frases genéricas como:
        
        “Conservaremos tus datos durante 5 años”
        
        sin una decisión real que lo sustente.
        
        El plazo deberá definirse posteriormente según:
        
        - finalidad;
        - obligaciones aplicables;
        - proceso comercial;
        - herramientas utilizadas.
        
        ---
        
        # 15. Derechos y consultas
        
        Subtítulo sugerido:
        
        “Consultas sobre tus datos”
        
        La sección debe ofrecer un medio real mediante el cual una persona pueda realizar una consulta relacionada con privacidad.
        
        Antes de publicar confirmar:
        
        - correo;
        - formulario;
        - dirección;
        - u otro canal válido.
        
        No utilizar WhatsApp automáticamente como canal legal salvo que se decida expresamente.
        
        No inventar un correo como:
        
        `privacidad@mendodata...`
        
        si no existe.
        
        ---
        
        # 16. Transferencias y ubicación de los datos
        
        No afirmar:
        
        - que los datos permanecen en Argentina;
        - que se transfieren internacionalmente;
        - que están almacenados en Estados Unidos;
        - que están almacenados en Europa;
        
        sin revisar la infraestructura real.
        
        Si los proveedores implican transferencias o almacenamiento internacional, el texto debe reflejarlo correctamente.
        
        ---
        
        # 17. Seguridad
        
        Puede existir un apartado:
        
        “Seguridad”
        
        Pero debe mantenerse general y realista.
        
        No realizar afirmaciones absolutas como:
        
        - “Tus datos están 100% seguros”.
        - “Es imposible acceder a tus datos”.
        - “Utilizamos el máximo nivel de seguridad”.
        
        No publicar certificaciones o estándares que MendoData no tenga.
        
        ---
        
        # 18. Sección Cookies
        
        ID:
        
        `cookies`
        
        H2:
        
        “Cookies”
        
        Debe explicar únicamente las cookies y tecnologías similares que realmente utiliza el sitio.
        
        Antes de completar la política realizar una revisión técnica.
        
        ---
        
        # 19. Auditoría de cookies
        
        Antes de publicar la sección revisar:
        
        - cookies propias;
        - cookies de terceros;
        - localStorage;
        - sessionStorage;
        - scripts externos;
        - analítica;
        - píxeles;
        - embeds;
        - herramientas de marketing;
        - formularios externos;
        - videos externos;
        - componentes que creen identificadores.
        
        La política debe corresponderse con lo encontrado.
        
        No copiar una política de cookies de otro sitio.
        
        ---
        
        # 20. Categorías
        
        Utilizar categorías únicamente cuando realmente correspondan.
        
        Posibles categorías:
        
        ## Necesarias
        
        Cookies o almacenamiento imprescindible para que el sitio funcione.
        
        ## Analítica
        
        Únicamente si existe una herramienta de medición que use cookies o identificadores.
        
        ## Marketing
        
        Únicamente si existen herramientas publicitarias o de seguimiento con ese propósito.
        
        ## Preferencias
        
        Únicamente si el sitio almacena preferencias del usuario.
        
        No mostrar categorías vacías.
        
        ---
        
        # 21. Tabla de cookies
        
        Si realmente existen cookies identificadas, puede utilizarse una tabla sencilla.
        
        Columnas recomendadas:
        
        - Nombre.
        - Proveedor.
        - Finalidad.
        - Duración.
        - Categoría.
        
        Ejemplo estructural:
        
        | Cookie | Proveedor | Finalidad | Duración | Categoría |
        |--------|-----------|-----------|----------|-----------|
        
        NO completar la tabla con valores inventados.
        
        La información debe salir de la auditoría técnica.
        
        ---
        
        # 22. Sitio sin cookies no esenciales
        
        Si después de revisar el sitio se confirma que no existen cookies no esenciales:
        
        NO crear artificialmente:
        
        - categorías de analítica;
        - marketing;
        - publicidad.
        
        La política debe explicar únicamente lo que realmente ocurre.
        
        No implementar un banner complejo de consentimiento si técnicamente no existe nada que requiera esa decisión.
        
        La necesidad de consentimiento debe evaluarse según la implementación real y los requisitos legales aplicables.
        
        ---
        
        # 23. Configuración de cookies
        
        Mostrar un botón:
        
        “Configurar cookies”
        
        ÚNICAMENTE cuando exista un sistema funcional de consentimiento.
        
        El botón debe permitir:
        
        - abrir el panel;
        - ver categorías;
        - modificar preferencias;
        - guardar cambios.
        
        No mostrar un botón decorativo.
        
        No dirigir a `#`.
        
        ---
        
        # 24. Relación con el banner de cookies
        
        Si posteriormente se implementa un banner:
        
        la página Legal y el banner deben utilizar la misma fuente de configuración.
        
        No mantener:
        
        - categorías distintas;
        - proveedores distintos;
        - nombres distintos;
        - políticas contradictorias.
        
        El consentimiento se definirá en:
        
        “06. Agregados y componentes globales”
        
        ---
        
        # 25. Fecha de actualización
        
        Al final del contenido mostrar:
        
        “Última actualización: [fecha real]”
        
        Utilizar la fecha de publicación o modificación efectiva del documento.
        
        No generar una fecha distinta en cada carga de página.
        
        No utilizar automáticamente el día actual como si fuera la fecha real de revisión.
        
        ---
        
        # 26. Actualizaciones
        
        La política debe poder modificarse fácilmente cuando cambien:
        
        - formulario;
        - analítica;
        - CRM;
        - hosting;
        - proveedores;
        - cookies;
        - herramientas externas.
        
        No hardcodear contenido legal en múltiples componentes.
        
        Preferencia:
        
        mantener el contenido centralizado.
        
        ---
        
        # 27. Layout desktop
        
        Preferencia:
        
        contenido editorial, simple y legible.
        
        Puede utilizar:
        
        - columna lateral pequeña para navegación interna;
        - columna principal para el texto.
        
        Representación:
        
        ┌───────────────────┬──────────────────────────────────────┐
        │                   │                                      │
        │ Privacidad        │ PRIVACIDAD                           │
        │ Cookies           │                                      │
        │                   │ Quién es responsable                 │
        │                   │ ...                                  │
        │                   │                                      │
        │                   │ Qué información recopilamos          │
        │                   │ ...                                  │
        │                   │                                      │
        │                   │ COOKIES                              │
        │                   │ ...                                  │
        │                   │                                      │
        └───────────────────┴──────────────────────────────────────┘
        
        La navegación lateral puede ser sticky si:
        
        - no genera problemas;
        - no cubre el Header;
        - mejora realmente la lectura.
        
        No es obligatoria.
        
        ---
        
        # 28. Alternativa simple
        
        También es válida una única columna centrada.
        
        Preferencia cuando el contenido inicial sea corto:
        
        Rótulo
        H1
        Descripción
        
        [ Privacidad ] [ Cookies ]
        
        PRIVACIDAD
        contenido
        
        COOKIES
        contenido
        
        Última actualización
        
        La implementación debe priorizar simplicidad.
        
        ---
        
        # 29. Ancho de lectura
        
        No utilizar todo el ancho de la pantalla para párrafos largos.
        
        Mantener una columna de lectura cómoda.
        
        El texto legal debe poder leerse sin esfuerzo.
        
        Evitar bloques excesivamente largos sin subtítulos.
        
        ---
        
        # 30. Mobile
        
        En celular utilizar una sola columna.
        
        Orden:
        
        1. Rótulo.
        2. H1.
        3. Descripción.
        4. Navegación interna.
        5. Privacidad.
        6. Cookies.
        7. Configurar cookies, si corresponde.
        8. Última actualización.
        9. Footer.
        
        La navegación interna puede mostrarse como botones o links simples.
        
        No utilizar una barra lateral sticky en mobile.
        
        ---
        
        # 31. Tipografía
        
        Priorizar legibilidad.
        
        Utilizar:
        
        - H1 claro;
        - H2 para secciones principales;
        - H3 para subtítulos;
        - párrafos con interlineado cómodo;
        - listas cuando ayuden a escanear información.
        
        No utilizar tamaños extremadamente pequeños por tratarse de contenido legal.
        
        ---
        
        # 32. Diseño visual
        
        Mantener identidad MendoData:
        
        - fondo claro;
        - navy;
        - azul de marca;
        - tipografía global;
        - bordes suaves cuando correspondan;
        - mucho espacio en blanco.
        
        La página debe sentirse integrada al sitio.
        
        No debe parecer un documento PDF pegado en la web.
        
        ---
        
        # 33. No agregar elementos comerciales
        
        No agregar dentro de Legal:
        
        - CTA de venta;
        - formulario comercial;
        - testimonios;
        - proyectos;
        - logos de clientes;
        - “Hablemos”;
        - CTA de WhatsApp como protagonista.
        
        El botón flotante global puede mantenerse si forma parte de todo el sitio.
        
        ---
        
        # 34. WhatsApp flotante
        
        Mantener el componente global si esa es la regla general del sitio.
        
        No agregar un WhatsApp especial dentro del contenido legal.
        
        Verificar que no cubra:
        
        - navegación;
        - texto;
        - botones de cookies.
        
        ---
        
        # 35. Footer
        
        Reutilizar exactamente el Footer global.
        
        En este momento los enlaces del Footer deben utilizar:
        
        “Privacidad”
        
        → `/legal#privacidad`
        
        “Cookies”
        
        → `/legal#cookies`
        
        Contacto:
        
        → `/#contacto`
        
        No utilizar `/contacto`.
        
        ---
        
        # 36. Header y Footer — corrección de arquitectura
        
        La arquitectura definitiva actual es:
        
        `/`
        
        Home.
        
        `/proyectos`
        
        Proyectos.
        
        `/legal`
        
        Legal.
        
        Contacto NO es una página independiente.
        
        Contacto vive en:
        
        `/#contacto`
        
        Por lo tanto eliminar referencias globales a:
        
        `/contacto`
        
        cuando se realice la implementación final.
        
        ---
        
        # 37. SEO
        
        Utilizar un único H1:
        
        “Privacidad y cookies”
        
        Title sugerido:
        
        “Privacidad y cookies | MendoData”
        
        La meta description puede definirse de forma breve y descriptiva.
        
        No buscar posicionamiento comercial mediante esta página.
        
        No incluir keywords artificiales.
        
        ---
        
        # 38. Accesibilidad
        
        Implementar:
        
        - único H1;
        - H2 y H3 jerárquicos;
        - enlaces internos accesibles;
        - focus visible;
        - navegación por teclado;
        - contraste suficiente;
        - tablas accesibles cuando existan;
        - encabezados correctos en tablas;
        - botones reales para acciones;
        - áreas táctiles adecuadas.
        
        No utilizar divs clickeables en lugar de botones.
        
        ---
        
        # 39. Anchors
        
        Utilizar exactamente:
        
        `id="privacidad"`
        
        `id="cookies"`
        
        Verificar que al navegar desde el Footer:
        
        `/legal#privacidad`
        
        y:
        
        `/legal#cookies`
        
        el título correspondiente no quede oculto detrás del Header sticky.
        
        Aplicar:
        
        `scroll-margin-top`
        
        o equivalente según la altura real del Header.
        
        ---
        
        # 40. Analítica
        
        La propia visita a `/legal` puede medirse mediante el sistema global de page views.
        
        No es necesario crear eventos específicos para:
        
        - leer Privacidad;
        - leer Cookies.
        
        Si existe:
        
        “Configurar cookies”
        
        su interacción debe formar parte del sistema de consentimiento correspondiente.
        
        No utilizar analítica no consentida para medir el propio consentimiento cuando eso resulte contradictorio con la implementación.
        
        ---
        
        # 41. Información que Claude debe auditar
        
        Antes de considerar esta página lista, revisar el código y documentar:
        
        1. Qué datos envía realmente el formulario.
        2. Dónde se envían.
        3. Qué servicio los procesa.
        4. Si se almacenan y dónde.
        5. Qué analítica está instalada.
        6. Qué scripts externos carga el sitio.
        7. Qué cookies se crean.
        8. Qué localStorage/sessionStorage se utiliza.
        9. Si existen píxeles publicitarios.
        10. Si existen embeds externos.
        11. Si existe CRM.
        12. Si existen herramientas de consentimiento.
        
        Entregar el resultado de esta auditoría.
        
        No inferir respuestas.
        
        ---
        
        # 42. Información que debe proporcionar MendoData
        
        Si no puede obtenerse del código, marcar como pendiente:
        
        - denominación legal correcta;
        - identificación fiscal si corresponde;
        - domicilio si corresponde;
        - contacto oficial para privacidad;
        - criterios de conservación;
        - responsables internos;
        - decisiones sobre uso comercial de los datos;
        - cualquier otra información empresarial requerida para completar la política.
        
        No bloquear el diseño de la página.
        
        Sí bloquear la publicación de afirmaciones legales inventadas.
        
        ---
        
        # 43. Contenido provisional durante desarrollo
        
        Durante desarrollo pueden utilizarse encabezados estructurales como:
        
        PRIVACIDAD
        
        Quién es responsable
        
        Qué información recopilamos
        
        Para qué utilizamos la información
        
        Servicios y proveedores
        
        Conservación
        
        Consultas sobre tus datos
        
        COOKIES
        
        Qué son las cookies
        
        Qué utiliza este sitio
        
        Cómo administrar tus preferencias
        
        Pero no publicar párrafos genéricos como si fueran la política definitiva.
        
        Los datos faltantes deben quedar claramente marcados como pendientes dentro del entorno de desarrollo, no visibles al público final.
        
        ---
        
        # 44. No hacer
        
        No:
        
        - copiar políticas de otra empresa;
        - generar automáticamente un texto legal genérico;
        - inventar razón social;
        - inventar CUIT;
        - inventar domicilio;
        - inventar correo;
        - inventar proveedores;
        - inventar cookies;
        - inventar plazos de conservación;
        - inventar transferencias internacionales;
        - afirmar cumplimiento normativo absoluto;
        - agregar “Términos y condiciones” sin necesidad;
        - crear páginas legales adicionales sin contenido;
        - mostrar “Configurar cookies” si no funciona;
        - publicar placeholders legales en producción;
        - dejar anchors rotos.
        
        ---
        
        # 45. Criterios de aceptación técnicos
        
        La página estará técnicamente preparada cuando:
        
        - exista en `/legal`;
        - utilice Header global;
        - utilice Footer global;
        - tenga un único H1;
        - exista `#privacidad`;
        - exista `#cookies`;
        - ambos anchors funcionen desde el Footer;
        - sea responsive;
        - funcione en desktop;
        - funcione en tablet;
        - funcione en mobile;
        - no genere scroll horizontal;
        - sea navegable mediante teclado;
        - el texto sea legible;
        - no existan links rotos.
        
        ---
        
        # 46. Criterios de aceptación de contenido
        
        NO considerar la página legal definitivamente publicada hasta que:
        
        - se hayan auditado las herramientas reales;
        - se hayan identificado los datos recopilados;
        - se hayan confirmado proveedores;
        - se hayan confirmado cookies;
        - se hayan completado los datos empresariales necesarios;
        - se haya revisado el contenido legal final.
        
        El diseño puede estar finalizado antes.
        
        El contenido legal definitivo requiere información real.
        
        ---
        
        # 47. Resumen definitivo
        
        RUTA
        
        `/legal`
        
        RÓTULO
        
        “LEGAL”
        
        H1
        
        “Privacidad y cookies”
        
        DESCRIPCIÓN
        
        “Información sobre el tratamiento de datos y el uso de cookies en el sitio de MendoData.”
        
        ANCHORS
        
        Privacidad:
        
        `/legal#privacidad`
        
        Cookies:
        
        `/legal#cookies`
        
        ESTRUCTURA
        
        Header global
        ↓
        Introducción
        ↓
        Navegación interna
        ↓
        Privacidad
        ↓
        Cookies
        ↓
        Configurar cookies, si existe sistema funcional
        ↓
        Última actualización
        ↓
        Footer global
        
        CONTACTO DEL SITIO
        
        `/#contacto`
        
        No:
        
        `/contacto`
        ```
        
    - 06. Agregados y componentes globales ✅
        
        ```jsx
        # BLUEPRINT DEFINITIVO — 06. AGREGADOS Y COMPONENTES GLOBALES
        
        ## Estado
        
        APROBADO.
        
        Este documento define las reglas globales del sitio de MendoData.
        
        No reemplaza los blueprints específicos de:
        
        - Home;
        - Proyectos;
        - Legal;
        - Footer;
        - secciones individuales.
        
        Cuando exista una diferencia entre una regla global y una instrucción específica de una sección:
        
        PREVALECE EL BLUEPRINT ESPECÍFICO DE LA SECCIÓN.
        
        ---
        
        # 1. Arquitectura definitiva del sitio
        
        La arquitectura pública V1 queda formada por exactamente tres páginas:
        
        ## Home
        
        `/`
        
        ## Proyectos
        
        `/proyectos`
        
        ## Legal
        
        `/legal`
        
        Contacto NO tiene una página independiente.
        
        El formulario principal vive dentro de la Home:
        
        `/#contacto`
        
        No implementar como página pública:
        
        `/contacto`
        
        Todos los enlaces comerciales que deban dirigir al formulario desde otra página deben utilizar:
        
        `/#contacto`
        
        Si existen referencias antiguas hacia `/contacto` en el código, deberán revisarse y actualizarse según corresponda.
        
        ---
        
        # 2. Navegación global
        
        Los principales destinos son:
        
        Inicio:
        
        `/`
        
        Soluciones:
        
        `/#soluciones`
        
        Proyectos:
        
        `/proyectos`
        
        Cómo trabajamos:
        
        `/#como-trabajamos`
        
        Equipo:
        
        `/#equipo`
        
        Contacto:
        
        `/#contacto`
        
        Legal:
        
        `/legal`
        
        Privacidad:
        
        `/legal#privacidad`
        
        Cookies:
        
        `/legal#cookies`
        
        Los anchors de Home deben utilizar la ruta completa cuando el enlace pueda activarse desde otra página.
        
        Ejemplo correcto:
        
        `/#equipo`
        
        No utilizar solamente:
        
        `#equipo`
        
        cuando el enlace forma parte de un componente global que también aparece en `/proyectos` o `/legal`.
        
        ---
        
        # 3. Header global
        
        Implementar un único Header reutilizable.
        
        Debe utilizarse en:
        
        - Home;
        - Proyectos;
        - Legal.
        
        No duplicar manualmente el Header en cada página.
        
        ---
        
        # 4. Estructura del Header desktop
        
        Preferencia:
        
        IZQUIERDA
        
        Logo MendoData.
        
        CENTRO / DERECHA
        
        - Soluciones.
        - Proyectos.
        - Cómo trabajamos.
        - Equipo.
        
        CTA principal del Header:
        
        “Contanos tu caso”
        
        Destino:
        
        `/#contacto`
        
        El Header debe mantener una navegación simple.
        
        El CTA comercial debe dirigir al formulario.
        
        No debe:
        
        - abrir Calendly;
        - iniciar una llamada automática;
        - llevar a una página `/contacto`;
        - abrir WhatsApp como acción principal del Header.
        
        ---
        
        # 5. Logo del Header
        
        El logo oficial de MendoData debe llevar siempre a:
        
        `/`
        
        Debe ser clickeable.
        
        No utilizar versiones distintas del logo sin necesidad.
        
        Mantener:
        
        - proporción correcta;
        - buena legibilidad;
        - tamaño consistente;
        - nombre accesible adecuado.
        
        No deformar el logo.
        
        ---
        
        # 6. Estado activo de navegación
        
        Cuando el visitante se encuentre en:
        
        `/proyectos`
        
        el enlace:
        
        “Proyectos”
        
        puede mostrarse activo.
        
        En Home los anchors pueden reflejar estado únicamente si ya existe un sistema confiable para hacerlo.
        
        No es obligatorio implementar detección compleja de sección activa.
        
        En `/legal` no es necesario agregar “Legal” al Header.
        
        Legal se accede principalmente desde el Footer.
        
        ---
        
        # 7. Header sticky
        
        Se puede mantener el Header sticky si ya forma parte del diseño actual o mejora la navegación.
        
        En ese caso:
        
        - no debe ocupar demasiada altura;
        - debe mantener contraste al hacer scroll;
        - no debe tapar anchors;
        - no debe tapar títulos;
        - no debe generar saltos visuales.
        
        Los anchors deben utilizar:
        
        `scroll-margin-top`
        
        o mecanismo equivalente.
        
        ---
        
        # 8. Header mobile
        
        En mobile utilizar:
        
        - logo;
        - botón de menú;
        - navegación desplegable.
        
        Contenido del menú:
        
        - Soluciones.
        - Proyectos.
        - Cómo trabajamos.
        - Equipo.
        - Contacto.
        
        Contacto debe dirigir a:
        
        `/#contacto`
        
        Puede mostrarse como CTA destacado:
        
        “Contanos tu caso”
        
        No incluir Legal como elemento principal del menú salvo que exista una razón clara.
        
        Privacidad y Cookies permanecen en el Footer.
        
        ---
        
        # 9. Menú mobile
        
        El menú debe:
        
        - abrir y cerrar correctamente;
        - poder operarse con teclado;
        - bloquear interacciones incorrectas detrás si corresponde;
        - poder cerrarse mediante un botón visible;
        - poder cerrarse con Escape cuando corresponda;
        - mantener correctamente el foco;
        - no generar scroll horizontal.
        
        Cuando se selecciona un enlace, el menú debe cerrarse.
        
        ---
        
        # 10. WhatsApp global
        
        Implementar un único componente global de WhatsApp.
        
        Debe aparecer en:
        
        - Home;
        - Proyectos;
        - Legal.
        
        Ubicación:
        
        esquina inferior derecha.
        
        Posición:
        
        fija.
        
        Debe:
        
        - mantener separación suficiente del borde;
        - respetar safe areas en mobile;
        - no cubrir CTAs;
        - no cubrir formularios;
        - no cubrir el Footer;
        - no cubrir controles importantes;
        - no cubrir un eventual sistema de consentimiento de cookies.
        
        ---
        
        # 11. Configuración única de WhatsApp
        
        Crear una única fuente de configuración para:
        
        - número;
        - URL;
        - mensaje inicial;
        - comportamiento.
        
        Reutilizarla en:
        
        - botón flotante;
        - Sección 8 de Home;
        - CTA final de Proyectos;
        - Footer.
        
        No hardcodear el número de WhatsApp en varios componentes.
        
        No inventar un número.
        
        No inventar el mensaje inicial si todavía no está confirmado.
        
        ---
        
        # 12. Apariencia del WhatsApp flotante
        
        Utilizar:
        
        - ícono reconocible;
        - tamaño cómodo;
        - contraste suficiente;
        - sombra discreta si corresponde.
        
        En mobile puede utilizar únicamente el ícono.
        
        En desktop puede utilizar:
        
        - ícono solamente;
        - o ícono + texto corto.
        
        No debe competir con los CTAs principales.
        
        WhatsApp funciona como canal alternativo de contacto y no como CTA dominante del sitio.
        
        ---
        
        # 13. Accesibilidad de WhatsApp
        
        Agregar nombre accesible.
        
        Ejemplo:
        
        `aria-label="Contactar a MendoData por WhatsApp"`
        
        Debe tener:
        
        - focus visible;
        - navegación por teclado;
        - área táctil suficiente.
        
        ---
        
        # 14. Footer global
        
        Reutilizar exactamente el Footer aprobado en:
        
        - Home;
        - Proyectos;
        - Legal.
        
        No crear variantes.
        
        “Formulario de contacto”
        
        debe dirigir a:
        
        `/#contacto`
        
        No utilizar como destino:
        
        `/contacto`
        
        Mantener:
        
        Privacidad:
        
        `/legal#privacidad`
        
        Cookies:
        
        `/legal#cookies`
        
        ---
        
        # 15. Identidad visual global
        
        Conservar el sistema visual actual de MendoData.
        
        Características generales:
        
        - navy / azul profundo;
        - azul de marca;
        - fondos blancos o muy claros;
        - superficies limpias;
        - bordes suaves;
        - sombras discretas;
        - bastante espacio en blanco;
        - estética tecnológica pero cercana.
        
        No rediseñar completamente la identidad durante la implementación.
        
        ---
        
        # 16. Colores
        
        Antes de implementar:
        
        revisar los colores que ya utiliza el proyecto.
        
        Centralizarlos mediante variables o tokens cuando la arquitectura lo permita.
        
        Ejemplo conceptual:
        
        `--color-navy`
        `--color-primary`
        `--color-background`
        `--color-surface`
        `--color-text`
        `--color-text-muted`
        `--color-border`
        
        No inventar una nueva paleta si ya existe una identidad coherente.
        
        No mantener múltiples tonos casi idénticos sin necesidad.
        
        ---
        
        # 17. Tipografía
        
        Reutilizar las tipografías actuales aprobadas.
        
        Centralizar:
        
        - familia principal;
        - pesos;
        - tamaños;
        - line-height;
        - letter-spacing cuando corresponda.
        
        No incorporar nuevas tipografías innecesariamente.
        
        Mantener buena legibilidad en:
        
        - títulos;
        - párrafos;
        - botones;
        - labels;
        - contenido legal.
        
        ---
        
        # 18. Jerarquía tipográfica
        
        Mantener coherencia global.
        
        ## H1
        
        Un único H1 por página.
        
        ## H2
        
        Secciones principales.
        
        ## H3
        
        Subsecciones o componentes internos.
        
        No utilizar headings únicamente por apariencia.
        
        No saltar jerarquías arbitrariamente.
        
        ---
        
        # 19. Contenedor global
        
        Utilizar un ancho máximo consistente para el contenido principal.
        
        No permitir que cada sección tenga un ancho completamente distinto sin razón.
        
        Mantener:
        
        - márgenes laterales desktop;
        - márgenes tablet;
        - padding mobile.
        
        El sistema puede contemplar excepciones como:
        
        - visuales grandes de proyectos;
        - fondos full-width;
        - Footer.
        
        El contenido textual debe mantener una alineación general coherente.
        
        ---
        
        # 20. Espaciado vertical
        
        Definir un sistema consistente de separación entre secciones.
        
        Evitar que cada componente utilice valores arbitrarios.
        
        Preferencia:
        
        - Hero: separación específica;
        - secciones principales: padding vertical amplio;
        - mobile: reducir espacios sin comprimir.
        
        No utilizar espacios gigantes únicamente para llenar pantalla.
        
        ---
        
        # 21. Border radius
        
        Utilizar una escala reducida y coherente.
        
        Aplicar consistentemente en:
        
        - tarjetas;
        - botones;
        - formularios;
        - visuales;
        - bloques destacados.
        
        No utilizar radios distintos en cada componente sin motivo.
        
        ---
        
        # 22. Sombras
        
        Utilizar sombras discretas.
        
        Reservarlas principalmente para:
        
        - tarjetas;
        - formularios;
        - mockups;
        - elementos flotantes.
        
        No utilizar sombras fuertes o múltiples capas decorativas.
        
        ---
        
        # 23. Botones globales
        
        Definir al menos:
        
        ## Primario
        
        - fondo azul;
        - texto blanco.
        
        ## Secundario
        
        - fondo claro o transparente;
        - borde azul;
        - texto azul.
        
        ## Link
        
        - texto;
        - hover visible.
        
        Todos deben tener:
        
        - hover;
        - focus;
        - active;
        - disabled cuando corresponda.
        
        ---
        
        # 24. Tamaño de interacción
        
        Botones y controles deben tener un área táctil cómoda.
        
        Especialmente en mobile.
        
        No crear:
        
        - botones diminutos;
        - links demasiado juntos;
        - íconos clickeables sin área suficiente.
        
        ---
        
        # 25. Formularios
        
        El único formulario comercial principal vive en:
        
        `/#contacto`
        
        Mantener exactamente:
        
        - Nombre.
        - Email.
        - Empresa o rubro — opcional.
        - Mensaje.
        
        No crear otro formulario comercial global.
        
        Centralizar la lógica del formulario.
        
        No crear una página `/contacto`.
        
        ---
        
        # 26. Estados de formulario
        
        El formulario debe contemplar:
        
        - normal;
        - focus;
        - error;
        - enviando;
        - éxito.
        
        No depender únicamente del color para mostrar errores.
        
        Mantener labels visibles.
        
        No utilizar placeholder como reemplazo de label.
        
        ---
        
        # 27. Responsive global
        
        Diseñar siempre para:
        
        - desktop;
        - tablet;
        - mobile.
        
        No considerar mobile como una reducción automática del desktop.
        
        Cada blueprint específico define su comportamiento cuando exista una instrucción particular.
        
        ---
        
        # 28. Breakpoints
        
        Reutilizar los breakpoints existentes del proyecto si funcionan correctamente.
        
        No introducir una cantidad excesiva de breakpoints.
        
        Como criterio general:
        
        - desktop;
        - tablet;
        - mobile.
        
        La transición debe responder al contenido y no únicamente a un dispositivo específico.
        
        ---
        
        # 29. Mobile
        
        Reglas generales:
        
        - una columna cuando corresponda;
        - márgenes laterales cómodos;
        - tipografía legible;
        - botones táctiles;
        - imágenes adaptadas;
        - formularios accesibles;
        - navegación simple.
        
        Nunca permitir:
        
        - scroll horizontal;
        - textos cortados;
        - botones fuera de pantalla;
        - WhatsApp tapando contenido.
        
        ---
        
        # 30. Imágenes y visuales
        
        Prioridad global:
        
        1. material real;
        2. material real anonimizado;
        3. mockup basado en realidad;
        4. demostración ilustrativa correctamente identificada.
        
        No utilizar:
        
        - datos falsos presentados como reales;
        - logos de clientes no autorizados;
        - métricas inventadas;
        - screenshots sensibles;
        - fotografías de stock para fingir proyectos.
        
        ---
        
        # 31. Optimización de imágenes
        
        Cuando sea posible:
        
        - utilizar formatos modernos;
        - dimensionar correctamente;
        - evitar descargar imágenes gigantes para mostrarlas pequeñas;
        - utilizar lazy loading debajo del primer viewport;
        - mantener dimensiones para evitar layout shift.
        
        No degradar excesivamente la calidad de interfaces o capturas.
        
        ---
        
        # 32. Animaciones
        
        Mantener animaciones mínimas.
        
        Permitido:
        
        - fade sutil;
        - desplazamiento muy pequeño;
        - hover discreto.
        
        No utilizar:
        
        - animaciones largas;
        - parallax fuerte;
        - efectos 3D innecesarios;
        - elementos que dificulten la lectura.
        
        Respetar:
        
        `prefers-reduced-motion`
        
        ---
        
        # 33. SEO global
        
        Existen únicamente tres páginas públicas que requieren configuración SEO principal:
        
        - `/`
        - `/proyectos`
        - `/legal`
        
        Cada una debe tener:
        
        - title único;
        - meta description única;
        - canonical correcto;
        - único H1;
        - estructura semántica;
        - Open Graph básico cuando la infraestructura lo permita.
        
        No generar una configuración SEO para:
        
        `/contacto`
        
        porque esa página no existe en V1.
        
        ---
        
        # 34. SEO definitivo — Home
        
        Ruta:
        
        `https://mendodata.online/`
        
        Title:
        
        `MendoData | Sistemas, automatización y datos`
        
        Meta description:
        
        `Desarrollamos sistemas, automatizaciones y soluciones de datos para ordenar procesos, reducir errores y mejorar el control operativo.`
        
        Canonical:
        
        `https://mendodata.online/`
        
        El contenido debe representar principalmente:
        
        - sistemas;
        - automatización;
        - datos;
        - procesos;
        - mejora operativa.
        
        No posicionar MendoData exclusivamente como:
        
        - Power BI;
        - Microsoft;
        - logística.
        
        No llenar títulos con nombres de tecnologías.
        
        El H1 visible de la página debe seguir siendo el definido en el blueprint del Hero:
        
        “Ordenamos y digitalizamos procesos para que tu empresa gane tiempo, reduzca errores y tenga más control.”
        
        No modificar el H1 para hacerlo coincidir literalmente con el title SEO.
        
        ---
        
        # 35. SEO definitivo — Proyectos
        
        Ruta:
        
        `https://mendodata.online/proyectos`
        
        Title:
        
        `Proyectos | MendoData`
        
        Meta description:
        
        `Conocé proyectos reales de MendoData y cómo convertimos necesidades operativas en sistemas, automatizaciones y soluciones de datos.`
        
        Canonical:
        
        `https://mendodata.online/proyectos`
        
        Debe reflejar:
        
        - proyectos;
        - sistemas;
        - automatización;
        - datos;
        - procesos reales.
        
        No utilizar:
        
        “Casos de éxito”
        
        como concepto principal mientras no exista evidencia suficiente para sostenerlo.
        
        El H1 debe mantenerse según el blueprint específico de Proyectos.
        
        ---
        
        # 36. SEO definitivo — Legal
        
        Ruta:
        
        `https://mendodata.online/legal`
        
        Title:
        
        `Privacidad y cookies | MendoData`
        
        Meta description:
        
        `Información sobre privacidad, tratamiento de datos y cookies del sitio de MendoData.`
        
        Canonical:
        
        `https://mendodata.online/legal`
        
        No intentar posicionar comercialmente esta página.
        
        H1:
        
        “Privacidad y cookies”
        
        ---
        
        # 37. Open Graph
        
        Si la infraestructura actual permite configurar Open Graph, definir para cada página:
        
        - `og:title`;
        - `og:description`;
        - `og:url`;
        - `og:type`;
        - `og:image` cuando exista un recurso oficial adecuado.
        
        Para Home y Proyectos:
        
        `og:type="website"`
        
        Utilizar como base los mismos titles y descriptions SEO definidos anteriormente.
        
        No inventar una imagen social.
        
        Si todavía no existe una imagen Open Graph oficial:
        
        - utilizar un recurso institucional real ya aprobado cuando sea adecuado;
        - o dejar el recurso pendiente.
        
        No utilizar imágenes de clientes sin autorización.
        
        ---
        
        # 38. Sitemap y robots
        
        Si el proyecto ya genera sitemap:
        
        incluir únicamente páginas públicas válidas.
        
        El sitemap V1 debe contemplar:
        
        `/`
        
        `/proyectos`
        
        `/legal`
        
        No incluir:
        
        - `/contacto`;
        - rutas inexistentes;
        - páginas internas de desarrollo;
        - anchors individuales como páginas independientes.
        
        Revisar `robots.txt` si existe.
        
        No crear reglas restrictivas sin motivo.
        
        ---
        
        # 39. URLs y enlaces
        
        Evitar enlaces rotos.
        
        Todos los enlaces internos deben utilizar rutas reales.
        
        No dejar en producción:
        
        `href="#"`
        
        como placeholder funcional.
        
        No crear páginas simplemente para satisfacer un enlace viejo.
        
        Contacto debe dirigir siempre a:
        
        `/#contacto`
        
        cuando se acceda desde un componente global o desde otra página.
        
        ---
        
        # 40. Analytics
        
        No instalar una herramienta nueva si ya existe una solución funcionando correctamente.
        
        Primero revisar:
        
        - qué analítica existe;
        - qué eventos existen;
        - cómo se envían;
        - qué consentimiento requieren.
        
        Implementar medición únicamente utilizando la infraestructura existente cuando sea posible.
        
        Evitar eventos innecesarios.
        
        ---
        
        # 41. Eventos globales sugeridos
        
        Reutilizar nombres existentes cuando ya estén configurados.
        
        Eventos previstos:
        
        `cta_click`
        
        `form_start`
        
        `form_submit`
        
        `whatsapp_click`
        
        No crear docenas de eventos.
        
        ---
        
        # 42. Parámetros de eventos
        
        Cuando el sistema lo permita, mantener una convención común:
        
        - `page`
        - `section`
        - `source`
        - `cta_name`
        - `destination`
        - `utm_source`
        - `utm_medium`
        - `utm_campaign`
        - `utm_content`
        - `device_type`
        
        No enviar datos personales innecesarios a analítica.
        
        ---
        
        # 43. WhatsApp analytics
        
        Evento:
        
        `whatsapp_click`
        
        Distinguir origen cuando sea útil:
        
        - `floating`;
        - `home_contact`;
        - `projects_final_cta`;
        - `footer`.
        
        No crear eventos diferentes para cada botón si un mismo evento con `source` resuelve el problema.
        
        ---
        
        # 44. UTM y atribución
        
        Si el sitio recibe parámetros:
        
        - `utm_source`
        - `utm_medium`
        - `utm_campaign`
        - `utm_content`
        
        conservarlos cuando técnicamente sea posible hasta el envío del formulario.
        
        Esta información puede viajar al formulario mediante campos ocultos cuando el sistema existente lo permita.
        
        No pedir estos datos manualmente al usuario.
        
        No mostrar campos UTM visibles.
        
        ---
        
        # 45. CRM
        
        Si actualmente existe integración real con CRM:
        
        conservarla y documentarla.
        
        Si no existe:
        
        NO inventarla durante la implementación de la web.
        
        La web debe permitir identificar el origen de las consultas cuando la infraestructura existente lo permita.
        
        No asumir una integración automática con CRM sin verificarla.
        
        ---
        
        # 46. Cookies y consentimiento
        
        Antes de implementar un banner de cookies:
        
        auditar qué herramientas utiliza realmente el sitio.
        
        Revisar:
        
        - cookies;
        - localStorage;
        - sessionStorage;
        - analítica;
        - scripts externos;
        - píxeles;
        - embeds;
        - marketing;
        - formularios de terceros.
        
        No implementar un banner complejo simplemente porque “todas las webs tienen uno”.
        
        ---
        
        # 47. Banner de cookies
        
        Implementarlo únicamente si corresponde a la configuración real del sitio y a los requisitos aplicables.
        
        Si existe:
        
        debe permitir tomar decisiones reales.
        
        Como mínimo cuando sea aplicable:
        
        - aceptar;
        - rechazar cookies no necesarias;
        - configurar preferencias.
        
        No utilizar:
        
        - botones falsos;
        - consentimiento engañoso;
        - “Configurar cookies” sin funcionalidad.
        
        ---
        
        # 48. Preferencias de cookies
        
        Cuando exista un sistema funcional:
        
        las preferencias deben poder modificarse posteriormente.
        
        El Footer puede mostrar:
        
        “Configurar cookies”
        
        únicamente en ese caso.
        
        Si no existe un panel funcional:
        
        no mostrar ese enlace.
        
        ---
        
        # 49. Relación con Legal
        
        La configuración real debe coincidir con:
        
        `/legal#cookies`
        
        No permitir contradicciones entre:
        
        - banner;
        - panel;
        - política de cookies;
        - scripts realmente instalados.
        
        ---
        
        # 50. Privacidad
        
        El sitio no debe recopilar información innecesaria.
        
        El formulario debe mantenerse simple.
        
        La página Legal debe reflejar el funcionamiento real.
        
        No inventar:
        
        - responsable;
        - proveedores;
        - plazos;
        - transferencias;
        - cookies.
        
        Antes de publicar la política definitiva deben revisarse los datos reales del formulario y las herramientas realmente instaladas.
        
        ---
        
        # 51. Accesibilidad global
        
        Implementar como mínimo:
        
        - HTML semántico;
        - un H1 por página;
        - jerarquía correcta de headings;
        - navegación por teclado;
        - focus visible;
        - contraste suficiente;
        - labels en formularios;
        - alt para imágenes significativas;
        - nombres accesibles para íconos interactivos;
        - áreas táctiles adecuadas;
        - soporte de reducción de movimiento.
        
        ---
        
        # 52. Elementos decorativos
        
        Si una imagen, ícono o forma es puramente decorativa:
        
        no debe añadir ruido a lectores de pantalla.
        
        Utilizar el mecanismo apropiado según implementación.
        
        No escribir descripciones inútiles para decoración.
        
        ---
        
        # 53. Focus
        
        Todos los elementos interactivos deben tener un focus visible.
        
        No eliminar `outline` sin reemplazo accesible.
        
        Aplicar a:
        
        - Header;
        - menú mobile;
        - botones;
        - links;
        - formulario;
        - WhatsApp;
        - Footer;
        - galerías;
        - controles de cookies.
        
        ---
        
        # 54. Contraste
        
        Verificar especialmente:
        
        - textos grises;
        - texto sobre azul;
        - botones secundarios;
        - placeholders;
        - bordes;
        - Footer;
        - etiquetas pequeñas.
        
        No priorizar estética sobre legibilidad.
        
        ---
        
        # 55. Performance
        
        No sacrificar rendimiento por decoración.
        
        Evitar:
        
        - librerías pesadas innecesarias;
        - videos automáticos;
        - animaciones complejas;
        - múltiples fuentes;
        - imágenes enormes;
        - JavaScript para funciones que puede resolver HTML/CSS simple.
        
        Priorizar carga rápida y estabilidad visual.
        
        ---
        
        # 56. Carga inicial
        
        El primer viewport de la Home debe priorizar:
        
        - Header;
        - copy del Hero;
        - CTA;
        - visual necesario.
        
        Lazy load:
        
        - imágenes inferiores;
        - galería de proyectos;
        - recursos pesados debajo del fold.
        
        No retrasar el mensaje principal esperando recursos secundarios.
        
        ---
        
        # 57. Código reutilizable
        
        Priorizar componentes reutilizables para:
        
        - Header;
        - Footer;
        - WhatsApp;
        - botones;
        - formulario;
        - contenedores;
        - headings de sección;
        - tarjetas;
        - visuales de proyecto cuando corresponda.
        
        No convertir absolutamente todo en componente si no aporta valor.
        
        Evitar duplicación evidente.
        
        ---
        
        # 58. Datos centralizados
        
        Centralizar cuando corresponda:
        
        - navegación;
        - redes sociales;
        - WhatsApp;
        - proyectos;
        - enlaces legales;
        - metadata SEO cuando la arquitectura lo permita.
        
        Evitar escribir la misma URL en múltiples archivos.
        
        Especialmente:
        
        WhatsApp debe tener una única fuente de verdad.
        
        ---
        
        # 59. Redes sociales
        
        Mostrar únicamente cuentas oficiales confirmadas.
        
        Previstas:
        
        - LinkedIn;
        - Instagram;
        - TikTok.
        
        Si una URL no está confirmada:
        
        no mostrarla.
        
        No utilizar:
        
        `#`
        
        como destino.
        
        ---
        
        # 60. Página 404
        
        Si el proyecto ya tiene una 404:
        
        mantenerla y alinearla visualmente.
        
        Si no existe y el framework requiere una:
        
        crear una versión simple.
        
        Contenido sugerido:
        
        Título:
        
        “Página no encontrada”
        
        Texto:
        
        “No encontramos la página que buscabas.”
        
        Acción:
        
        “Volver al inicio”
        
        Destino:
        
        `/`
        
        No convertir la 404 en una nueva sección comercial.
        
        ---
        
        # 61. Estados de error generales
        
        No mostrar al usuario:
        
        - stack traces;
        - mensajes técnicos;
        - códigos internos innecesarios.
        
        Los errores deben ser:
        
        - comprensibles;
        - breves;
        - recuperables cuando sea posible.
        
        ---
        
        # 62. Seguridad básica de interfaz
        
        No exponer en frontend:
        
        - credenciales;
        - secrets;
        - tokens privados;
        - claves API sensibles.
        
        No modificar infraestructura de seguridad sin necesidad.
        
        Si se detecta un secreto en código público:
        
        informarlo.
        
        ---
        
        # 63. Contenido real
        
        No inventar:
        
        - clientes;
        - proyectos;
        - métricas;
        - testimonios;
        - certificaciones;
        - resultados;
        - tecnologías utilizadas;
        - integrantes del equipo.
        
        El equipo actual es únicamente:
        
        - Juan Diego Caballero.
        - Gonzalo Manresa.
        - Leandro Hirschegger.
        
        No mostrar referencias antiguas a integrantes que ya no forman parte del equipo.
        
        ---
        
        # 64. Componentes antiguos
        
        Durante la implementación revisar y eliminar o actualizar contenido obsoleto que pueda seguir en:
        
        - arrays;
        - JSON;
        - constants;
        - mocks;
        - componentes ocultos;
        - datos de prueba;
        - alt text;
        - navegación;
        - Footer;
        - rutas.
        
        No basta con ocultarlo mediante CSS si sigue formando parte de la interfaz o de los datos públicos.
        
        ---
        
        # 65. Calendly
        
        No utilizar Calendly públicamente como CTA.
        
        No agregar:
        
        - botón de agenda;
        - iframe;
        - popup;
        - redirección automática.
        
        La coordinación de una conversación ocurre posteriormente si tiene sentido avanzar.
        
        ---
        
        # 66. Rutas antiguas
        
        Buscar referencias antiguas a:
        
        `/contacto`
        
        Cuando funcionen como destinos de navegación o CTA deben reemplazarse por:
        
        `/#contacto`
        
        No crear una nueva página únicamente para conservar la arquitectura descartada.
        
        Si `/contacto` ya está publicada, indexada o recibe tráfico real:
        
        informar antes de eliminarla para evaluar una redirección permanente hacia:
        
        `/#contacto`
        
        Una referencia a `/contacto` puede permanecer únicamente dentro de documentación técnica que indique explícitamente que esa ruta NO forma parte de la V1.
        
        ---
        
        # 67. Anchors definitivos principales
        
        Home:
        
        `#soluciones`
        
        `#proyecto-destacado`
        
        `#operaciones-logistica`
        
        `#como-trabajamos`
        
        `#equipo`
        
        `#contacto`
        
        Proyectos:
        
        `#control-inventario-sucursales`
        
        Legal:
        
        `#privacidad`
        
        `#cookies`
        
        Reutilizar los IDs existentes si ya coinciden.
        
        No crear duplicados.
        
        ---
        
        # 68. Scroll hacia anchors
        
        Cuando el usuario llega desde otra página:
        
        por ejemplo:
        
        `/proyectos`
        
        →
        
        `/#contacto`
        
        el scroll debe terminar correctamente en la sección.
        
        Si existe Header sticky:
        
        compensar su altura.
        
        No permitir que el título quede escondido.
        
        ---
        
        # 69. Diseño mobile del WhatsApp
        
        En pantallas pequeñas:
        
        - respetar safe area;
        - mantener distancia del Footer;
        - no cubrir botones;
        - no cubrir textarea;
        - no cubrir banner de cookies.
        
        Si aparece un banner de cookies:
        
        ajustar temporalmente la posición del WhatsApp cuando sea necesario.
        
        ---
        
        # 70. Compatibilidad
        
        Probar al menos:
        
        - desktop;
        - tablet;
        - mobile.
        
        Y navegadores modernos principales disponibles durante implementación.
        
        No dedicar complejidad especial a navegadores obsoletos salvo requisito específico.
        
        ---
        
        # 71. Verificación de rutas
        
        Antes de terminar comprobar:
        
        Home
        → Proyectos.
        
        Home
        → Contacto (`#contacto`).
        
        Home
        → Legal.
        
        Proyectos
        → Inicio.
        
        Proyectos
        → Soluciones.
        
        Proyectos
        → Equipo.
        
        Proyectos
        → Contacto (`/#contacto`).
        
        Legal
        → Inicio.
        
        Legal
        → Proyectos.
        
        Legal
        → Contacto (`/#contacto`).
        
        Footer
        → Contacto (`/#contacto`).
        
        Footer
        → Privacidad.
        
        Footer
        → Cookies.
        
        No probar `/contacto` como una página pública válida.
        
        ---
        
        # 72. Verificación funcional
        
        Comprobar:
        
        - Header;
        - menú mobile;
        - formulario;
        - WhatsApp;
        - Footer;
        - anchors;
        - links externos;
        - estados del formulario;
        - galería si existe;
        - banner de cookies si existe.
        
        No considerar la implementación terminada solamente porque visualmente se vea correcta.
        
        ---
        
        # 73. Verificación responsive
        
        Revisar las tres páginas públicas en:
        
        - desktop;
        - tablet;
        - mobile.
        
        Páginas:
        
        - `/`
        - `/proyectos`
        - `/legal`
        
        Comprobar:
        
        - overflow;
        - textos;
        - botones;
        - formularios;
        - imágenes;
        - cards;
        - menú;
        - Footer;
        - WhatsApp.
        
        No debe existir scroll horizontal.
        
        ---
        
        # 74. Información pendiente
        
        Antes de cerrar producción confirmar:
        
        - URL oficial de LinkedIn;
        - URL oficial de Instagram;
        - URL oficial de TikTok;
        - número oficial de WhatsApp;
        - mensaje inicial de WhatsApp;
        - formulario funcionando;
        - destino real de las consultas;
        - sistema de analítica instalado;
        - cookies reales;
        - datos legales faltantes;
        - material visual final disponible;
        - recurso Open Graph si se decide utilizar uno.
        
        No inventar estos datos.
        
        ---
        
        # 75. Prioridad de implementación
        
        Si aparecen dudas durante desarrollo, priorizar en este orden:
        
        1. Correcto funcionamiento.
        2. Claridad.
        3. Responsive.
        4. Accesibilidad.
        5. Coherencia visual.
        6. Performance.
        7. Medición.
        8. Efectos o detalles decorativos.
        
        No sacrificar las primeras prioridades por animaciones o adornos.
        
        ---
        
        # 76. Regla de simplicidad
        
        No agregar funcionalidades porque “podrían servir”.
        
        La versión V1 debe priorizar:
        
        - claridad;
        - confianza;
        - evidencia;
        - navegación simple;
        - conversión.
        
        Si una funcionalidad no mejora claramente:
        
        - comprensión;
        - confianza;
        - navegación;
        - conversión;
        
        no incorporarla en V1.
        
        ---
        
        # 77. Arquitectura final resumida
        
        PÁGINAS PÚBLICAS — EXACTAMENTE TRES
        
        `/`
        Home
        
        `/proyectos`
        Proyectos
        
        `/legal`
        Legal
        
        CONTACTO
        
        `/#contacto`
        
        Es una sección de la Home.
        
        No es una página independiente.
        
        HEADER
        
        Logo → `/`
        
        Soluciones → `/#soluciones`
        
        Proyectos → `/proyectos`
        
        Cómo trabajamos → `/#como-trabajamos`
        
        Equipo → `/#equipo`
        
        Contanos tu caso → `/#contacto`
        
        COMPONENTES GLOBALES
        
        Header
        
        Footer
        
        WhatsApp flotante
        
        Sistema visual
        
        Responsive
        
        Analytics
        
        UTM
        
        SEO
        
        Cookies / consentimiento si corresponde
        
        Accesibilidad
        
        SEO
        
        Home:
        `MendoData | Sistemas, automatización y datos`
        
        Proyectos:
        `Proyectos | MendoData`
        
        Legal:
        `Privacidad y cookies | MendoData`
        
        LEGAL
        
        `/legal#privacidad`
        
        `/legal#cookies`
        
        NO EXISTE EN V1
        
        `/contacto`
        
        Calendly público
        
        Blog
        
        Servicios individuales como páginas
        
        CMS complejo
        
        Filtros de proyectos
        
        Buscador de proyectos
        
        Newsletter
        ```
        
    - 07. Instrucciones finales para Claude Code. ✅
        
        ```jsx
        # 07. INSTRUCCIONES FINALES PARA IMPLEMENTACIÓN EN CLAUDE CODE
        
        ## Objetivo de este documento
        
        Estas instrucciones acompañan todos los blueprints aprobados de la web de MendoData.
        
        Su función es indicarte cómo implementar el sitio existente.
        
        NO reemplazan los blueprints.
        
        Los blueprints contienen las decisiones específicas de:
        
        - contenido;
        - estructura;
        - comportamiento;
        - responsive;
        - restricciones;
        - componentes;
        - CTAs;
        - visuales;
        - medición.
        
        Debés utilizarlos como fuente principal de implementación.
        
        ---
        
        # 1. Principio general
        
        Trabajar SOBRE la web existente de MendoData.
        
        No reconstruir todo el proyecto desde cero salvo que exista una razón técnica real y necesaria.
        
        Antes de modificar código:
        
        1. Revisar la estructura actual del proyecto.
        2. Identificar framework, componentes, rutas y estilos existentes.
        3. Identificar qué partes ya funcionan correctamente.
        4. Identificar componentes reutilizables.
        5. Identificar formulario, WhatsApp, analítica y rutas existentes.
        6. Identificar posibles contradicciones con versiones antiguas.
        
        Después realizar los cambios necesarios para adaptar el sitio a los blueprints aprobados.
        
        ---
        
        # 2. No reinterpretar los blueprints
        
        Los blueprints ya contienen decisiones de negocio, marketing, contenido, UX y estructura.
        
        No cambiar por criterio propio:
        
        - títulos;
        - textos;
        - número de tarjetas;
        - orden de secciones;
        - CTAs;
        - destinos;
        - nombres del equipo;
        - contenido de proyectos;
        - arquitectura de páginas;
        - jerarquía de información.
        
        Si el blueprint indica un texto exacto:
        
        utilizar ese texto.
        
        Si algo no está especificado:
        
        resolverlo de la forma más simple y coherente posible con el sistema existente.
        
        ---
        
        # 3. Jerarquía de fuentes
        
        Cuando existan varias referencias utilizar este orden:
        
        1. Blueprint específico de la sección.
        2. Blueprint global / componentes globales.
        3. Blueprint de la página.
        4. Mockup aprobado.
        5. Diseño actual del sitio.
        6. Criterio técnico propio.
        
        Si existe una contradicción:
        
        la instrucción más específica y más reciente prevalece.
        
        ---
        
        # 4. Mockups
        
        Los mockups son referencias visuales.
        
        Utilizarlos para interpretar:
        
        - composición;
        - jerarquía;
        - proporciones;
        - distribución;
        - estilo;
        - espacios;
        - tratamiento visual.
        
        NO utilizar el mockup como fuente de contenido cuando contradiga el blueprint.
        
        El blueprint manda sobre:
        
        - copy;
        - cantidad de elementos;
        - integrantes;
        - funcionalidades;
        - resultados;
        - comportamiento;
        - enlaces.
        
        Ejemplo:
        
        si un mockup antiguo muestra cuatro integrantes del equipo pero el blueprint definitivo muestra tres:
        
        implementar tres.
        
        ---
        
        # 5. Arquitectura definitiva
        
        La versión V1 del sitio tiene únicamente estas páginas públicas:
        
        ## Home
        
        `/`
        
        ## Proyectos
        
        `/proyectos`
        
        ## Legal
        
        `/legal`
        
        Contacto NO es una página independiente.
        
        El formulario vive en:
        
        `/#contacto`
        
        No implementar:
        
        `/contacto`
        
        salvo que durante la revisión técnica exista una razón concreta para conservar temporalmente una ruta ya publicada.
        
        Si `/contacto` ya está indexada o recibe tráfico:
        
        informar antes de eliminarla y evaluar redirección hacia:
        
        `/#contacto`
        
        ---
        
        # 6. Estructura definitiva de Home
        
        La Home debe contener:
        
        1. Hero / Promesa.
        2. Problemas operativos que podemos ayudar a ordenar.
        3. Soluciones que podemos construir.
        4. Proyecto destacado.
        5. Operaciones y logística.
        6. Cómo trabajamos.
        7. Equipo.
        8. Contacto final.
        9. Footer.
        
        Mantener este orden.
        
        ---
        
        # 7. Proyectos
        
        Ruta:
        
        `/proyectos`
        
        Estructura V1:
        
        1. Hero de Proyectos.
        2. Proyecto real:
           “Control de inventario y sucursales”.
        3. Otros proyectos — condicional.
        4. CTA final.
        5. Footer.
        
        Actualmente la sección:
        
        “Otros proyectos”
        
        NO debe renderizarse públicamente mientras no existan proyectos reales adicionales suficientemente documentados.
        
        No mostrar placeholders ni “Próximamente”.
        
        ---
        
        # 8. Legal
        
        Ruta:
        
        `/legal`
        
        Debe contener:
        
        - encabezado;
        - navegación interna;
        - Privacidad;
        - Cookies;
        - configuración de cookies únicamente si existe funcionalidad real;
        - última actualización;
        - Footer.
        
        Anchors:
        
        `/legal#privacidad`
        
        `/legal#cookies`
        
        No inventar contenido legal.
        
        Auditar primero:
        
        - formulario;
        - herramientas;
        - cookies;
        - analítica;
        - almacenamiento;
        - proveedores;
        - scripts externos.
        
        Informar los datos faltantes.
        
        ---
        
        # 9. Contacto
        
        Todos los principales CTAs comerciales deben terminar en:
        
        `/#contacto`
        
        cuando corresponda.
        
        Ejemplos:
        
        Hero Home.
        
        Header.
        
        Proyecto destacado.
        
        CTA final de Proyectos.
        
        Footer.
        
        No dirigir estos CTAs a Calendly.
        
        No obligar a agendar una reunión.
        
        ---
        
        # 10. Header global
        
        Implementar un único Header reutilizable.
        
        Navegación:
        
        Logo → `/`
        
        Soluciones → `/#soluciones`
        
        Proyectos → `/proyectos`
        
        Cómo trabajamos → `/#como-trabajamos`
        
        Equipo → `/#equipo`
        
        CTA:
        
        “Contanos tu caso”
        
        → `/#contacto`
        
        No agregar navegación innecesaria.
        
        ---
        
        # 11. Footer global
        
        Implementar un único Footer reutilizable.
        
        Debe aparecer en:
        
        - Home;
        - Proyectos;
        - Legal.
        
        Actualizar cualquier referencia antigua:
        
        Formulario de contacto:
        
        `/#contacto`
        
        No:
        
        `/contacto`
        
        Legal:
        
        Privacidad → `/legal#privacidad`
        
        Cookies → `/legal#cookies`
        
        ---
        
        # 12. WhatsApp
        
        Debe existir una única configuración global de WhatsApp.
        
        Centralizar:
        
        - número;
        - URL;
        - mensaje inicial.
        
        Reutilizar en:
        
        - botón flotante;
        - Contacto Home;
        - Proyectos;
        - Footer.
        
        No hardcodear varios enlaces distintos.
        
        No inventar número ni mensaje.
        
        ---
        
        # 13. Equipo
        
        El equipo actual de MendoData está formado únicamente por:
        
        Juan Diego Caballero
        — Ingeniero en Software.
        
        Gonzalo Manresa
        — Analista de Negocios.
        
        Leandro Hirschegger
        — Marketing y Desarrollo Comercial.
        
        NO mostrar:
        
        Julián Fierro.
        
        Eliminar cualquier referencia antigua a Julián en:
        
        - componentes;
        - arrays;
        - JSON;
        - mocks;
        - placeholders;
        - alt text;
        - imágenes;
        - datos ocultos;
        - contenido antiguo.
        
        ---
        
        # 14. Proyecto real
        
        El proyecto documentado actualmente es:
        
        “Control de inventario y sucursales”
        
        Estado:
        
        “Proyecto real anonimizado”
        
        Utilizar solamente información confirmada en el blueprint.
        
        No inventar:
        
        - tecnologías;
        - número de usuarios;
        - número de sucursales;
        - porcentajes;
        - ROI;
        - horas ahorradas;
        - cliente;
        - testimonio;
        - métricas.
        
        ---
        
        # 15. Contenido real
        
        No inventar contenido para completar espacios visuales.
        
        No inventar:
        
        - clientes;
        - proyectos;
        - resultados;
        - testimonios;
        - métricas;
        - certificaciones;
        - partners;
        - tecnologías utilizadas;
        - datos empresariales;
        - información legal.
        
        Si falta información:
        
        mantener una solución visual válida o informar el pendiente.
        
        ---
        
        # 16. Material visual
        
        Prioridad:
        
        1. Material real aprobado.
        2. Material real anonimizado.
        3. Mockup basado en material real.
        4. Representación ilustrativa.
        
        Cuando un recurso NO sea una captura real:
        
        indicarlo cuando el blueprint lo requiera.
        
        No presentar demos como proyectos reales.
        
        ---
        
        # 17. Sistema visual
        
        Conservar la identidad actual de MendoData.
        
        Priorizar:
        
        - navy;
        - azul de marca;
        - fondos claros;
        - superficies blancas;
        - bordes suaves;
        - sombras sutiles;
        - espacios amplios;
        - interfaces como recurso visual.
        
        No rediseñar completamente la identidad.
        
        No introducir una estética distinta en cada sección.
        
        ---
        
        # 18. Componentes reutilizables
        
        Reutilizar cuando tenga sentido:
        
        - Header;
        - Footer;
        - WhatsApp;
        - formulario;
        - botones;
        - contenedores;
        - cards;
        - navegación;
        - datos de proyectos.
        
        Evitar duplicación evidente.
        
        No crear una arquitectura excesivamente compleja para resolver una web pequeña.
        
        ---
        
        # 19. Formulario
        
        Conservar el formulario existente siempre que funcione correctamente.
        
        Campos:
        
        1. Nombre.
        2. Email.
        3. Empresa o rubro — opcional.
        4. Mensaje.
        
        CTA:
        
        “Enviar consulta”
        
        No agregar campos.
        
        No modificar innecesariamente:
        
        - endpoint;
        - envío;
        - validaciones;
        - estados;
        - integración existente.
        
        ---
        
        # 20. Responsive
        
        Implementar y comprobar todas las páginas en:
        
        - desktop;
        - tablet;
        - mobile.
        
        Los blueprints contienen instrucciones responsive específicas.
        
        No limitarse a reducir tamaños.
        
        Adaptar layouts cuando sea necesario.
        
        Nunca permitir:
        
        - scroll horizontal;
        - elementos cortados;
        - WhatsApp tapando controles;
        - inputs fuera de pantalla;
        - textos ilegibles.
        
        ---
        
        # 21. Mobile
        
        Prestar especial atención a:
        
        - Header;
        - menú;
        - Hero;
        - cards;
        - visuales;
        - formulario;
        - proyectos;
        - Footer;
        - WhatsApp.
        
        Mantener:
        
        - márgenes cómodos;
        - botones táctiles;
        - tipografía legible;
        - buena jerarquía;
        - navegación simple.
        
        ---
        
        # 22. Accesibilidad
        
        Aplicar como mínimo:
        
        - HTML semántico;
        - único H1 por página;
        - headings jerárquicos;
        - labels reales;
        - alt descriptivos;
        - navegación con teclado;
        - focus visible;
        - buen contraste;
        - áreas táctiles suficientes;
        - nombres accesibles para íconos;
        - `prefers-reduced-motion`.
        
        No eliminar accesibilidad existente.
        
        ---
        
        # 23. Anchors
        
        Verificar especialmente:
        
        Home:
        
        `#soluciones`
        
        `#proyecto-destacado`
        
        `#operaciones-logistica`
        
        `#como-trabajamos`
        
        `#equipo`
        
        `#contacto`
        
        Proyectos:
        
        `#control-inventario-sucursales`
        
        Legal:
        
        `#privacidad`
        
        `#cookies`
        
        Si el Header es sticky:
        
        compensar su altura con `scroll-margin-top` o equivalente.
        
        ---
        
        # 24. SEO
        
        Implementar SEO técnico básico para:
        
        `/`
        
        `/proyectos`
        
        `/legal`
        
        Cada página debe tener:
        
        - title;
        - meta description;
        - canonical;
        - único H1;
        - estructura semántica;
        - Open Graph básico cuando corresponda.
        
        No hacer keyword stuffing.
        
        No crear textos artificiales para SEO.
        
        ---
        
        # 25. Analytics
        
        Antes de modificar medición:
        
        revisar qué sistema existe actualmente.
        
        Reutilizarlo.
        
        Eventos principales previstos:
        
        `cta_click`
        
        `form_start`
        
        `form_submit`
        
        `whatsapp_click`
        
        No crear eventos innecesarios.
        
        No instalar analítica adicional sin necesidad.
        
        ---
        
        # 26. UTM
        
        Si actualmente pueden conservarse:
        
        mantener:
        
        - `utm_source`;
        - `utm_medium`;
        - `utm_campaign`;
        - `utm_content`.
        
        Transferirlos al formulario mediante campos ocultos cuando corresponda.
        
        No pedir UTM al usuario.
        
        ---
        
        # 27. Cookies
        
        No implementar automáticamente un banner genérico.
        
        Primero auditar:
        
        - cookies;
        - analítica;
        - scripts externos;
        - píxeles;
        - localStorage;
        - sessionStorage;
        - embeds.
        
        Implementar consentimiento únicamente según lo que realmente utilice el sitio y los requisitos correspondientes.
        
        ---
        
        # 28. Calendly
        
        No mostrar públicamente:
        
        - botones;
        - embeds;
        - popups;
        - links;
        - redirecciones;
        
        hacia Calendly.
        
        El proceso comercial puede utilizar Calendly posteriormente de forma interna.
        
        No forma parte del recorrido público principal.
        
        ---
        
        # 29. Performance
        
        Evitar complejidad innecesaria.
        
        Priorizar:
        
        - carga rápida;
        - imágenes optimizadas;
        - lazy loading;
        - JS razonable;
        - estabilidad visual;
        - animaciones discretas.
        
        No instalar librerías grandes solamente para pequeños efectos.
        
        ---
        
        # 30. Animaciones
        
        Si existen:
        
        mantenerlas sutiles.
        
        No utilizar:
        
        - parallax intenso;
        - efectos 3D;
        - animaciones largas;
        - animaciones que retrasen contenido.
        
        Respetar:
        
        `prefers-reduced-motion`.
        
        ---
        
        # 31. No crear nuevas funcionalidades
        
        NO agregar sin aprobación:
        
        - blog;
        - newsletter;
        - login;
        - cuentas;
        - buscador;
        - filtros;
        - páginas individuales de servicios;
        - páginas individuales de proyectos;
        - página Contacto;
        - chatbot;
        - agenda;
        - popups comerciales;
        - nuevas integraciones;
        - CMS complejo.
        
        Implementar únicamente lo definido.
        
        ---
        
        # 32. No borrar funcionalidad útil sin revisar
        
        Antes de eliminar algo existente:
        
        comprobar para qué sirve.
        
        Si una funcionalidad existente contradice los nuevos blueprints:
        
        adaptarla o eliminarla.
        
        Si existe duda técnica importante:
        
        informarla.
        
        No destruir componentes que puedan reutilizarse.
        
        ---
        
        # 33. Código antiguo
        
        Buscar contenido obsoleto.
        
        Especialmente:
        
        `/contacto`
        
        Julián Fierro.
        
        Textos anteriores del Hero.
        
        Copys antiguos del formulario.
        
        Proyectos antiguos o ficticios.
        
        Calendly.
        
        Links sociales provisionales.
        
        WhatsApp duplicado.
        
        No dejar versiones viejas ocultas que puedan generar inconsistencias.
        
        ---
        
        # 34. Implementación por etapas
        
        Trabajar preferentemente en este orden:
        
        ## ETAPA 1
        
        Auditoría del proyecto existente.
        
        ## ETAPA 2
        
        Componentes globales:
        
        - sistema visual;
        - Header;
        - Footer;
        - WhatsApp;
        - navegación.
        
        ## ETAPA 3
        
        Home.
        
        Secciones 1 a 9.
        
        ## ETAPA 4
        
        `/proyectos`.
        
        ## ETAPA 5
        
        `/legal`.
        
        ## ETAPA 6
        
        Responsive y accesibilidad global.
        
        ## ETAPA 7
        
        SEO, analytics, UTM y cookies según infraestructura existente.
        
        ## ETAPA 8
        
        QA final.
        
        ---
        
        # 35. No modificar todo de una vez sin verificar
        
        Después de cada bloque importante:
        
        - comprobar compilación;
        - comprobar errores;
        - revisar visualmente;
        - probar navegación;
        - probar responsive.
        
        Evitar acumular una gran cantidad de cambios sin comprobarlos.
        
        ---
        
        # 36. QA funcional final
        
        Antes de considerar el trabajo terminado comprobar:
        
        ## Home
        
        - Header.
        - Hero.
        - Todas las secciones.
        - Proyecto destacado.
        - Equipo.
        - Formulario.
        - WhatsApp.
        - Footer.
        
        ## Proyectos
        
        - Hero.
        - proyecto real.
        - imágenes.
        - CTA final.
        - navegación.
        
        ## Legal
        
        - Privacidad.
        - Cookies.
        - anchors.
        - navegación.
        
        ---
        
        # 37. QA de enlaces
        
        Probar:
        
        `/`
        
        `/proyectos`
        
        `/legal`
        
        `/#soluciones`
        
        `/#como-trabajamos`
        
        `/#equipo`
        
        `/#contacto`
        
        `/legal#privacidad`
        
        `/legal#cookies`
        
        No dejar enlaces rotos.
        
        ---
        
        # 38. QA responsive
        
        Revisar:
        
        - desktop;
        - tablet;
        - mobile.
        
        Especialmente:
        
        - 320–375 px;
        - mobile medio;
        - tablet;
        - desktop estándar;
        - desktop amplio.
        
        No es obligatorio diseñar específicamente para cada medida.
        
        Debe adaptarse fluidamente.
        
        ---
        
        # 39. QA del formulario
        
        Comprobar:
        
        - campos.
        - validaciones.
        - loading.
        - éxito.
        - error.
        - envío real.
        - datos recibidos.
        - mobile.
        - teclado.
        - accesibilidad.
        
        No asumir que funciona solo porque renderiza.
        
        ---
        
        # 40. QA WhatsApp
        
        Comprobar todos los accesos:
        
        - flotante;
        - Contacto;
        - Proyectos;
        - Footer.
        
        Todos deben utilizar la misma configuración.
        
        Probar:
        
        - desktop;
        - mobile.
        
        ---
        
        # 41. QA de contenido
        
        Antes de finalizar revisar:
        
        - no existe Julián.
        - no existe `/contacto` como destino activo.
        - no existe Calendly público.
        - no existen métricas inventadas.
        - no existen proyectos inventados.
        - no existen clientes inventados.
        - no existen textos viejos contradictorios.
        - no existen placeholders visibles en producción.
        
        ---
        
        # 42. Información que falta
        
        Si durante la implementación falta información real como:
        
        - WhatsApp oficial;
        - redes sociales;
        - fotografías;
        - screenshots;
        - tecnología del proyecto;
        - datos legales;
        - analítica;
        - cookies;
        - proveedores;
        
        NO inventar.
        
        Registrar el pendiente y continuar con todo aquello que sí pueda implementarse correctamente.
        
        ---
        
        # 43. Entrega final
        
        Al finalizar informar:
        
        ## Archivos modificados
        
        Listar los archivos principales modificados.
        
        ## Componentes creados
        
        Listar únicamente los nuevos componentes relevantes.
        
        ## Componentes reutilizados
        
        Indicar reutilizaciones importantes.
        
        ## Rutas
        
        Confirmar:
        
        `/`
        
        `/proyectos`
        
        `/legal`
        
        ## Contacto
        
        Confirmar:
        
        `/#contacto`
        
        ## Pendientes
        
        Listar únicamente información o materiales reales que todavía falten.
        
        ## Problemas encontrados
        
        Informar cualquier problema técnico detectado.
        
        ---
        
        # 44. No considerar terminado si
        
        No dar el trabajo por finalizado si:
        
        - el sitio compila pero no fue probado;
        - mobile está roto;
        - existen links rotos;
        - el formulario no funciona;
        - WhatsApp no funciona;
        - aparecen datos ficticios;
        - existen textos antiguos contradictorios;
        - Legal contiene información inventada;
        - existen errores de consola relevantes;
        - existen desbordamientos horizontales importantes.
        
        ---
        
        # 45. Prioridad ante dudas
        
        Cuando haya que elegir entre:
        
        más diseño
        
        o
        
        más claridad
        
        priorizar claridad.
        
        Entre:
        
        más funcionalidades
        
        o
        
        más simplicidad
        
        priorizar simplicidad.
        
        Entre:
        
        inventar contenido
        
        o
        
        dejar un pendiente
        
        dejar el pendiente.
        
        Entre:
        
        reconstruir
        
        o
        
        reutilizar algo que funciona
        
        reutilizar.
        
        ---
        
        # 46. Regla final
        
        El objetivo no es construir una web más grande.
        
        El objetivo es terminar una web:
        
        - clara;
        - profesional;
        - confiable;
        - rápida;
        - responsive;
        - fácil de mantener;
        - orientada a generar consultas.
        
        Implementar exactamente lo necesario para lograr eso.
        
        No agregar complejidad que no aporte valor.
        ```