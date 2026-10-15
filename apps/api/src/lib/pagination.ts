export interface CursorPage<T> { items: T[]; nextCursor: string | null }
export function encodeCursor(v: string): string { return Buffer.from(v, "utf8").toString("base64url"); }
export function decodeCursor(c?: string): string | undefined {
  if (!c) return undefined;
  try { return Buffer.from(c, "base64url").toString("utf8"); } catch { return undefined; }
}
