// Clientes que se muestran en el carrusel de la Home (sección #clientes).
// Para sumar un cliente, agregar una línea. El logo va en public/clientes/ con el
// nombre indicado en `logo` y extensión .svg, .png o .webp (se usa el primero que exista).
// Si el archivo todavía no está, la tarjeta muestra el nombre de la empresa en texto.

export type Client = {
  name: string;
  sector: string;
  // Ruta pública sin extensión, dentro de /clientes
  logo: string;
  alt: string;
  // Solo el ícono del logo (sin texto), para el globito del Hero
  icon?: string;
};

export const clients: Client[] = [
  {
    name: 'Mundo Ahorro',
    sector: 'Viajes grupales',
    logo: '/clientes/mundo-ahorro',
    alt: 'Logo de Mundo Ahorro',
    icon: '/clientes/mundo-ahorro-icon.webp',
  },
  {
    name: 'VAB Climatización',
    sector: 'Climatización · Santiago del Estero',
    logo: '/clientes/vab-climatizacion',
    alt: 'Logo de VAB Climatización',
    icon: '/clientes/vab-climatizacion-icon.webp',
  },
  {
    name: 'SC Consulting',
    sector: 'Logística y mantenimiento · Chile',
    logo: '/clientes/sc-consulting',
    alt: 'Logo de SC Consulting',
    icon: '/clientes/sc-consulting-icon.webp',
  },
];
