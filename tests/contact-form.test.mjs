import test from 'node:test';
import assert from 'node:assert/strict';
import { ajaxEndpoint, collectUtm, submitContact } from '../src/scripts/contact-form.ts';

test('ajaxEndpoint targets the same FormSubmit inbox in background mode', () => {
  assert.equal(
    ajaxEndpoint('https://formsubmit.co/mendodata@gmail.com'),
    'https://formsubmit.co/ajax/mendodata@gmail.com',
  );
});

test('collectUtm keeps only the four supported UTM parameters', () => {
  assert.deepEqual(
    collectUtm('?utm_source=instagram&utm_medium=social&utm_campaign=lanzamiento&utm_content=reel&utm_term=x&gclid=1'),
    { utm_source: 'instagram', utm_medium: 'social', utm_campaign: 'lanzamiento', utm_content: 'reel' },
  );
  assert.deepEqual(collectUtm(''), {});
});

test('submitContact posts JSON and reports success', async () => {
  const calls = [];
  const fakeFetch = async (url, init) => {
    calls.push({ url, init });
    return { ok: true, json: async () => ({ success: 'true' }) };
  };
  const result = await submitContact('https://formsubmit.co/ajax/x@y.com', { nombre: 'Ana' }, fakeFetch);
  assert.equal(result, 'success');
  assert.equal(calls[0].url, 'https://formsubmit.co/ajax/x@y.com');
  assert.equal(calls[0].init.method, 'POST');
  assert.equal(calls[0].init.headers['Content-Type'], 'application/json');
  assert.equal(calls[0].init.headers.Accept, 'application/json');
  assert.deepEqual(JSON.parse(calls[0].init.body), { nombre: 'Ana' });
});

test('submitContact reports errors without throwing', async () => {
  assert.equal(await submitContact('u', {}, async () => ({ ok: false, json: async () => ({}) })), 'error');
  assert.equal(await submitContact('u', {}, async () => ({ ok: true, json: async () => ({ success: 'false' }) })), 'error');
  assert.equal(await submitContact('u', {}, async () => { throw new Error('offline'); }), 'error');
});

test('UTM parameters are remembered across pages for the contact form', async () => {
  const { rememberUtm, recallUtm } = await import('../src/scripts/contact-form.ts');
  const store = new Map();
  const storage = { getItem: (k) => store.get(k) ?? null, setItem: (k, v) => store.set(k, v) };

  rememberUtm('?utm_source=instagram&utm_campaign=otono', storage);
  assert.deepEqual(recallUtm(storage), { utm_source: 'instagram', utm_campaign: 'otono' });

  // una visita sin UTM no borra la atribución guardada
  rememberUtm('', storage);
  assert.deepEqual(recallUtm(storage), { utm_source: 'instagram', utm_campaign: 'otono' });

  // almacenamiento bloqueado: no rompe
  const broken = { getItem: () => { throw new Error('blocked'); }, setItem: () => { throw new Error('blocked'); } };
  assert.doesNotThrow(() => rememberUtm('?utm_source=x', broken));
  assert.deepEqual(recallUtm(broken), {});
});
