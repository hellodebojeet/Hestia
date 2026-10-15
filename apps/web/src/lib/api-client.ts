const baseUrl =
  process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "") ?? "";

export class ApiError extends Error {
  constructor(
    public status: number,
    message: string,
  ) {
    super(message);
  }
}

export async function apiGet<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`${baseUrl}${path}`, {
    ...init,
    headers: { "content-type": "application/json", ...init?.headers },
  });
  if (!res.ok) {
    throw new ApiError(res.status, `Request failed: ${res.status}`);
  }
  const json = (await res.json()) as { data: T };
  return json.data;
}
