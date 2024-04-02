
export enum Method {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE'
}

interface FetcherProps {
  path: string;
  method?: Method;
  data?: Record<string, any>;
}

export const fetcher = async ({ path, method = Method.GET, data }: FetcherProps) => {
  const be = import.meta.env.VITE_BACKEND_URL;

  const url = be + path;

  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  // headers.append("Accept", "*/*");

  const body = data && JSON.stringify(data);

  try {
    const response = await fetch(url, {
      method,
      headers,
      body,
      credentials: 'include',
    });
    const data = await response.json();
    return data;
  } catch (error) {
    if (error instanceof Error) {
      return console.trace(error.message);
    }
    console.trace(error);
  }
};
