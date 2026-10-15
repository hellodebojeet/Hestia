export function parseBearer(header?: string): string | null {
  if (!header?.startsWith("Bearer ")) return null;
  const token = header.slice(7).trim();
  return token ? token : null;
}
