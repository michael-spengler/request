export const defaultOptions: RequestInit = {
  mode: "cors",
  cache: "no-cache",
  credentials: "same-origin",
  headers: {
    "Content-Type": "application/json",
  },
  redirect: "follow",
  referrerPolicy: "no-referrer",
};

export class RequestError extends Error {
  status: number;
  statusText: string;

  constructor(message: string, response: Response) {
    super(`${message}: ${response.status} ${response.statusText}`);
    this.status = response.status;
    this.statusText = response.statusText;
  }
}

export function request(method: string) {
  return async function <T>(
    input: string | globalThis.Request | URL,
    init?: RequestInit | undefined,
  ): Promise<T> {
    const response = await fetch(input, {
      method,
      ...defaultOptions,
      ...init,
    });
    if (response.ok) {
      return response.json();
    }
    throw new RequestError(`Error while fetching ${input}`, response);
  };
}

export const Request = {
  get: request("GET"),
  head: request("HEAD"),
  post: request("POST"),
  put: request("PUT"),
  delete: request("DELETE"),
  connect: request("CONNECT"),
  options: request("OPTIONS"),
  trace: request("TRACE"),
  patch: request("PATCH"),
};

export default Request;
