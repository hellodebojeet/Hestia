export class HttpError extends Error {
  constructor(public statusCode: number, public code: string, message: string) { super(message); }
}
export const badRequest = (m = "Bad request") => new HttpError(400, "BAD_REQUEST", m);
export const unauthorized = (m = "Unauthorized") => new HttpError(401, "UNAUTHORIZED", m);
export const forbidden = (m = "Forbidden") => new HttpError(403, "FORBIDDEN", m);
export const notFound = (m = "Not found") => new HttpError(404, "NOT_FOUND", m);
export const conflict = (m = "Conflict") => new HttpError(409, "CONFLICT", m);
