export interface S3Config { endpoint: string; bucket: string; region: string }
export function s3ConfigFromEnv(env: NodeJS.ProcessEnv = process.env): S3Config {
  return { endpoint: env.S3_ENDPOINT ?? "http://localhost:9000", bucket: env.S3_BUCKET ?? "hestia-media", region: env.S3_REGION ?? "auto" };
}
export function storageKeyFor(userId: string, filename: string): string {
  const safe = filename.replace(/[^a-zA-Z0-9._-]/g, "_");
  return `${userId}/${Date.now()}-${safe}`;
}
