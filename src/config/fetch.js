import { BASE_URL } from '../constants';

const createRequest = async (
  method,
  endpoint,
  body,
) => {
  const headers = new Headers();

  if (!headers.get('content-type') && body) {
    headers.set('content-type', 'application/json');
    if (typeof body !== 'string') {
      body = JSON.stringify(body);
    }
  }

  const options = {
    method,
    headers,
  };

  if (body) {
    options.body = body;
  }

  const resource = `${BASE_URL}${endpoint}`;
  try {
    const response = await fetch(resource, options);
    const contentType = response.headers.get('Content-Type');
    let parsedResponse;
    if (contentType.includes('application/json')) {
      parsedResponse = await response.json();
    }

    if (parsedResponse.error) {
        throw parsedResponse;
    }

    return parsedResponse;
  } catch (err) {
    throw err;
  }
}

export const fetchRequest = {
  get: (...data) => createRequest('GET', ...data),
  post: (...data) => createRequest('POST', ...data),
  put: (...data) => createRequest('PUT', ...data),
  patch: (...data) => createRequest('PATCH', ...data),
  delete: (...data) => createRequest('DELETE', ...data),
}
