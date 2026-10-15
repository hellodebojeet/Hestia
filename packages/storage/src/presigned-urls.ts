export interface PresignRequest { storageKey: string; mimeType: string; byteSize: number }
const ALLOWED = ["image/jpeg", "image/png", "image/webp", "video/mp4", "video/webm"];
export function validatePresignRequest(r: PresignRequest): void {
  if (r.byteSize <= 0 || r.byteSize > 25_000_000) throw new Error("Invalid byteSize");
  if (!ALLOWED.includes(r.mimeType)) throw new Error("Unsupported mimeType");
  if (r.storageKey.includes("..")) throw new Error("Invalid storageKey");
}
