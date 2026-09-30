// Proyectos reales de MendoData. La Home usa una versión resumida y
// /proyectos podrá ampliarla desde esta misma fuente.
// Copy exacto del blueprint (Home / Sección 4). No agregar métricas,
// tecnologías ni datos del cliente que no estén documentados y autorizados.

export type Project = {
  slug: string;
  status: string;
  name: string;
  tags: string[];
  problem: string;
  solution: string;
  features: string[];
  result: string;
  visualAlt: string;
  visualNote: string;
  privacyNote: string;
};

export const featuredProject: Project = {
  slug: 'control-inventario-sucursales',
  status: 'Proyecto real anonimizado',
  name: 'Control de inventario y sucursales',
  tags: ['Operaciones', 'Inventarios', 'Gestión entre sucursales'],
  problem: 'Había dificultades para controlar inventarios, registrar movimientos entre sucursales, gestionar diferencias de stock y seguir aprobaciones.',
  solution: 'Desarrollamos un sistema para gestionar inventarios con códigos de barras, registrar movimientos, controlar diferencias y digitalizar aprobaciones.',
  features: [
    'Gestión de inventario con códigos de barras.',
    'Registro de movimientos entre sucursales.',
    'Control de diferencias de stock.',
    'Aprobaciones digitales.',
  ],
  result: 'Mayor control y trazabilidad de la operación, con mejor capacidad para detectar inconsistencias.',
  visualAlt: 'Interfaz de un sistema de gestión de inventarios y movimientos entre sucursales.',
  visualNote: 'Representación ilustrativa basada en un proyecto real',
  privacyNote: 'Información anonimizada para preservar la confidencialidad del cliente.',
};
