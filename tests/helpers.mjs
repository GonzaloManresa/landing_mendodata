import { readFileSync, readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

export const projectRoot = fileURLToPath(new URL('..', import.meta.url));
const dist = new URL('../dist/', import.meta.url);

export function readPage(file) {
  return readFileSync(new URL(file, dist), 'utf8');
}

export function readCss() {
  const dir = new URL('_astro/', dist);
  return readdirSync(dir)
    .filter((name) => name.endsWith('.css'))
    .map((name) => readFileSync(new URL(name, dir), 'utf8'))
    .join('\n');
}

// HTML de la página + todo el CSS generado, para tests que revisan estilos
export function pageSource(file) {
  return `${readPage(file)}<style>${readCss()}</style>`;
}
