// Única fuente de verdad para datos globales del sitio.
// Header, Footer, WhatsApp y SEO leen de acá; no repetir estos valores en otros archivos.

export type NavLink = { label: string; href: string };

export const site = {
  name: 'MendoData',
  url: 'https://mendodata.online',
  tagline: 'Sistemas, automatización y datos para ordenar y mejorar procesos operativos.',
};

export const contactHref = '/#contacto';
export const headerCta = 'Contanos tu caso';

// Rutas completas: estos enlaces también se usan desde /proyectos y /legal
export const nav: NavLink[] = [
  { label: 'Soluciones', href: '/#soluciones' },
  { label: 'Proyectos', href: '/proyectos' },
  { label: 'Cómo trabajamos', href: '/#como-trabajamos' },
  { label: 'Equipo', href: '/#equipo' },
];

export const footerNav: NavLink[] = [{ label: 'Inicio', href: '/' }, ...nav];

export const legalLinks: NavLink[] = [
  { label: 'Privacidad', href: '/legal#privacidad' },
  { label: 'Cookies', href: '/legal#cookies' },
];

// Sin número, el botón flotante y los enlaces de WhatsApp no se muestran
export const whatsapp = {
  number: '5492615974103',
  message: '',
};

export function whatsappUrl(config: { number: string; message: string } = whatsapp): string | null {
  if (!config.number) return null;
  const base = `https://wa.me/${config.number}`;
  return config.message ? `${base}?text=${encodeURIComponent(config.message)}` : base;
}

export type SocialName = 'LinkedIn' | 'Instagram' | 'TikTok';
export type Social = { name: SocialName; url: string };

// Solo cuentas oficiales confirmadas; una URL vacía no se muestra
const allSocials: Social[] = [
  { name: 'LinkedIn', url: '' },
  { name: 'Instagram', url: 'https://www.instagram.com/mendo.data/' },
  { name: 'TikTok', url: 'https://www.tiktok.com/@mendo.data' },
];

export const socials: Social[] = allSocials.filter((social) => social.url);

export type PageSeo = { title: string; description: string; path: string };

export const seo: { home: PageSeo; proyectos: PageSeo; legal: PageSeo } = {
  home: {
    title: 'MendoData | Sistemas, automatización y datos',
    description: 'Desarrollamos sistemas, automatizaciones y soluciones de datos para ordenar procesos, reducir errores y mejorar el control operativo.',
    path: '/',
  },
  proyectos: {
    title: 'Proyectos | MendoData',
    description: 'Conocé proyectos reales de MendoData y cómo convertimos necesidades operativas en sistemas, automatizaciones y soluciones de datos.',
    path: '/proyectos',
  },
  legal: {
    title: 'Privacidad y cookies | MendoData',
    description: 'Información sobre privacidad, tratamiento de datos y cookies del sitio de MendoData.',
    path: '/legal',
  },
};
