import test from 'node:test';
import assert from 'node:assert/strict';
import {
  nav, footerNav, legalLinks, contactHref, headerCta,
  whatsapp, whatsappUrl, socials, seo, site,
} from '../src/config/site.ts';

test('whatsappUrl builds the official link and hides without number', () => {
  assert.equal(whatsapp.number, '5492615974103');
  assert.equal(whatsapp.message, '');
  assert.equal(whatsappUrl(), 'https://wa.me/5492615974103');
  assert.equal(whatsappUrl({ number: '', message: '' }), null);
  assert.equal(
    whatsappUrl({ number: '5492615974103', message: 'Hola, quiero consultar' }),
    'https://wa.me/5492615974103?text=Hola%2C%20quiero%20consultar',
  );
});

test('navigation uses full routes from any page', () => {
  assert.deepEqual(nav, [
    { label: 'Soluciones', href: '/#soluciones' },
    { label: 'Proyectos', href: '/proyectos' },
    { label: 'Cómo trabajamos', href: '/#como-trabajamos' },
    { label: 'Equipo', href: '/#equipo' },
  ]);
  assert.deepEqual(footerNav[0], { label: 'Inicio', href: '/' });
  assert.deepEqual(footerNav.slice(1), nav);
  assert.deepEqual(legalLinks, [
    { label: 'Privacidad', href: '/legal#privacidad' },
    { label: 'Cookies', href: '/legal#cookies' },
  ]);
  assert.equal(contactHref, '/#contacto');
  assert.equal(headerCta, 'Contanos tu caso');
});

test('only confirmed socials are exposed', () => {
  assert.deepEqual(socials, [
    { name: 'Instagram', url: 'https://www.instagram.com/mendo.data/' },
    { name: 'TikTok', url: 'https://www.tiktok.com/@mendo.data' },
  ]);
});

test('SEO copy matches the blueprint', () => {
  assert.equal(site.url, 'https://mendodata.online');
  assert.equal(site.tagline, 'Sistemas, automatización y datos para ordenar y mejorar procesos operativos.');
  assert.deepEqual(seo.home, {
    title: 'MendoData | Sistemas, automatización y datos',
    description: 'Desarrollamos sistemas, automatizaciones y soluciones de datos para ordenar procesos, reducir errores y mejorar el control operativo.',
    path: '/',
  });
  assert.deepEqual(seo.proyectos, {
    title: 'Proyectos | MendoData',
    description: 'Conocé proyectos reales de MendoData y cómo convertimos necesidades operativas en sistemas, automatizaciones y soluciones de datos.',
    path: '/proyectos',
  });
  assert.deepEqual(seo.legal, {
    title: 'Privacidad y cookies | MendoData',
    description: 'Información sobre privacidad, tratamiento de datos y cookies del sitio de MendoData.',
    path: '/legal',
  });
});
