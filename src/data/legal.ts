// Contenido de /legal, centralizado para actualizarlo cuando cambie el sitio.
// Todo lo publicado surge de la auditoría técnica del sitio (formulario,
// servicios externos, cookies y almacenamiento). Lo que no se puede verificar
// desde el código queda en `pending`: se muestra solo en desarrollo y bloquea
// considerar la política como definitiva.

export type LegalBlock = {
  title: string;
  paragraphs?: string[];
  list?: string[];
  // Párrafos que van después de la lista
  afterList?: string[];
  // Pendiente asociado a este bloque (solo visible en desarrollo)
  pending?: string;
};

export const legal = {
  // Fecha real de redacción de este contenido (no la fecha del día)
  updatedAt: '2026-09-30',
  contactEmail: 'mendodata@gmail.com',

  privacy: [
    {
      title: 'Quién es responsable de los datos',
      paragraphs: [
        'El sitio mendodata.online es operado por MendoData, con base en Mendoza, Argentina.',
        'Para cualquier consulta sobre tus datos podés escribirnos a mendodata@gmail.com.',
      ],
      pending: 'Confirmar denominación legal, identificación fiscal (CUIT) y domicilio legal, y si deben publicarse.',
    },
    {
      title: 'Qué información recopilamos',
      paragraphs: [
        'Cuando nos escribís por el formulario de contacto recibimos:',
      ],
      list: [
        'Nombre.',
        'Email.',
        'Empresa o rubro (opcional).',
        'Mensaje.',
      ],
      afterList: [
        'Si llegaste al sitio desde un enlace de campaña, junto con tu consulta recibimos también los parámetros utm_source, utm_medium, utm_campaign y utm_content, que indican por qué canal llegó la visita. No te identifican personalmente.',
        'Además, como en cualquier conexión a internet, el servicio que procesa el formulario recibe datos técnicos como tu dirección IP (ver "Servicios y proveedores").',
      ],
    },
    {
      title: 'Para qué utilizamos la información',
      paragraphs: [
        'Usamos esta información para responder tu consulta y continuar la conversación que iniciaste con nosotros.',
        'Los parámetros de campaña (utm) los usamos para saber por qué canales llegan las consultas.',
        'No usamos esta información para enviarte publicidad ni la vendemos a terceros.',
      ],
      pending: 'Confirmar la base del tratamiento según la normativa aplicable y si las consultas se usan para otras finalidades (por ejemplo, seguimiento comercial).',
    },
    {
      title: 'Servicios y proveedores',
      paragraphs: [
        'Para que el sitio y el formulario funcionen utilizamos estos servicios:',
      ],
      list: [
        'FormSubmit (formsubmit.co): procesa el envío del formulario y nos lo reenvía por email. Como en cualquier conexión a internet, este servicio recibe también datos técnicos como tu dirección IP.',
        'Gmail (Google): la cuenta mendodata@gmail.com donde recibimos las consultas.',
        'Render (render.com): aloja el sitio.',
        'Google Fonts (Google): provee las tipografías del sitio; al cargarlas, tu navegador se conecta a servidores de Google, que reciben tu dirección IP.',
      ],
      pending: 'Confirmar en qué países almacenan o procesan los datos estos proveedores y si corresponde informarlo como transferencia internacional.',
    },
    {
      title: 'Durante cuánto tiempo conservamos la información',
      paragraphs: [
        'Conservamos las consultas mientras sean necesarias para responderlas y dar seguimiento a la conversación.',
      ],
      pending: 'Definir un plazo o criterio concreto de conservación y eliminación.',
    },
    {
      title: 'Consultas sobre tus datos',
      paragraphs: [
        'Podés pedirnos que te informemos qué datos tuyos tenemos, que los corrijamos o que los eliminemos escribiendo a mendodata@gmail.com.',
      ],
      pending: 'Revisar con asesoramiento legal la redacción de los derechos según la jurisdicción aplicable.',
    },
  ] satisfies LegalBlock[],

  cookies: [
    {
      title: 'Qué son las cookies',
      paragraphs: [
        'Las cookies son pequeños archivos que un sitio guarda en tu navegador. Algunos sitios también usan otras formas de almacenamiento del navegador con fines parecidos.',
      ],
    },
    {
      title: 'Qué utiliza este sitio',
      paragraphs: [
        'Este sitio no crea cookies propias y no utiliza herramientas de analítica, publicidad ni píxeles de seguimiento.',
        'Solo usamos el almacenamiento de sesión del navegador (sessionStorage) para recordar los parámetros de campaña (utm) mientras navegás, así llegan junto a tu consulta si nos escribís. Se borra automáticamente al cerrar la pestaña.',
        'Los enlaces a WhatsApp, Instagram y TikTok te llevan a esos servicios, que aplican sus propias políticas.',
      ],
    },
    {
      title: 'Cómo administrar tus preferencias',
      paragraphs: [
        'Como el sitio no usa cookies opcionales, no hay preferencias que configurar. Igualmente, podés borrar el almacenamiento del sitio desde la configuración de tu navegador en cualquier momento.',
      ],
    },
  ] satisfies LegalBlock[],

  // Resumen de pendientes antes de considerar definitiva la política
  pending: [
    'Denominación legal, CUIT y domicilio legal del responsable.',
    'Base del tratamiento y finalidades adicionales, si las hay.',
    'Ubicación de los datos en los proveedores y posibles transferencias internacionales.',
    'Plazo o criterio de conservación.',
    'Revisión legal final del texto.',
  ],
};
