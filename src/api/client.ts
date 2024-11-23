interface BaseErrorConstructor {
  message: string;
  code: number;
}

class BaseError extends Error {
  public message: string;
  public code: number;

  constructor({ message, code }: BaseErrorConstructor) {
    super();
    this.message = message;
    this.code = code;
  }
}

async function handleErrors(response: Response | unknown): Promise<Response> {
  if (response instanceof Response === false) {
    throw new BaseError({ message: 'Unknown error', code: 0 });
  }

  if (!response.ok) {
    if (response.headers.get('Content-Type')?.startsWith('application/json')) {
      const json = await response.json();
      if ('error' in json && json.error !== null) {
        throw new BaseError(json.error);
      }
    }

    throw new BaseError({ message: response.statusText, code: response.status });
  }

  return response;
}

function handleSuccess<T>(response: Response): Promise<T> {
  if (response.headers.get('Content-Type')?.startsWith('application/json') === false) {
    throw new BaseError({ message: 'Unsupported content type!', code: 0 });
  }

  return response.json();
}

function getBackoffWithJitter(attempt: number, baseDelay = 500) {
  const jitter = Math.random() * baseDelay;

  return Math.min(((2 ** attempt) * baseDelay) + jitter, 16_000);
}

function wait(delay: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

export async function get<T>(endpoint: string, options = {} as { retries?: number, _attempt?: number } & RequestInit): Promise<T> {
  const { retries = 3, _attempt = 0, ...requestOptions } = options;

  return fetch(endpoint, {
    method: 'GET',
    ...requestOptions,
  })
    .then((response: Response) => {
      if (response.ok) {
        return response;
      }

      if (response.status >= 500 || response.status === 408 || response.status === 429) {
        return wait(getBackoffWithJitter(_attempt)).then(() => get(endpoint, { ...options, retries: retries - 1, _attempt: _attempt + 1 }));
      }

      return response;
    })
    .then(handleErrors)
    .then(handleSuccess<T>);
}
