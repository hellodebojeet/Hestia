export const SESSION_TTL_MS = 30 * 24 * 60 * 60 * 1000;
export const RESET_TOKEN_TTL_MS = 60 * 60 * 1000;
export const VERIFY_TOKEN_TTL_MS = 24 * 60 * 60 * 1000;
export function sessionExpiry(from = new Date()): Date { return new Date(from.getTime() + SESSION_TTL_MS); }
export function isExpired(expiresAt: Date, now = new Date()): boolean { return expiresAt.getTime() <= now.getTime(); }
