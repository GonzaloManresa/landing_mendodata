// Envío del formulario de contacto sin salir de la página.
// Usa la versión en segundo plano (ajax) del mismo buzón de FormSubmit que figura
// en el `action` del formulario; sin JavaScript, el formulario se envía como siempre.

export type SubmitResult = 'success' | 'error';

type FetchLike = (url: string, init: {
  method: string;
  headers: Record<string, string>;
  body: string;
}) => Promise<{ ok: boolean; json: () => Promise<unknown> }>;

const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content'];

export function ajaxEndpoint(action: string): string {
  return action.replace('formsubmit.co/', 'formsubmit.co/ajax/');
}

// Solo los cuatro parámetros de atribución previstos; nunca se muestran al usuario
export function collectUtm(search: string): Record<string, string> {
  const params = new URLSearchParams(search);
  const utm: Record<string, string> = {};
  for (const key of UTM_KEYS) {
    const value = params.get(key);
    if (value) utm[key] = value;
  }
  return utm;
}

type StorageLike = Pick<Storage, 'getItem' | 'setItem'>;

const UTM_STORAGE_KEY = 'mendodata:utm';

// Guarda la atribución de la visita para que llegue al formulario aunque la
// persona entre por /proyectos y después vaya a /#contacto. Una visita sin UTM
// no pisa lo guardado. Si el almacenamiento está bloqueado, no pasa nada.
export function rememberUtm(search: string, storage: StorageLike): void {
  const utm = collectUtm(search);
  if (Object.keys(utm).length === 0) return;
  try {
    storage.setItem(UTM_STORAGE_KEY, JSON.stringify(utm));
  } catch {
    // sin almacenamiento disponible: se usa solo la URL actual
  }
}

export function recallUtm(storage: StorageLike): Record<string, string> {
  try {
    const saved = JSON.parse(storage.getItem(UTM_STORAGE_KEY) ?? '{}');
    return collectUtm(new URLSearchParams(saved).toString());
  } catch {
    return {};
  }
}

export async function submitContact(
  endpoint: string,
  data: Record<string, string>,
  fetchImpl: FetchLike = fetch,
): Promise<SubmitResult> {
  try {
    const response = await fetchImpl(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(data),
    });
    if (!response.ok) return 'error';
    const body = (await response.json()) as { success?: string | boolean };
    return String(body.success) === 'true' ? 'success' : 'error';
  } catch {
    return 'error';
  }
}
