export interface WorkerEnv { DATABASE_URL: string; REDIS_URL: string }
export function loadWorkerEnv(env: NodeJS.ProcessEnv = process.env): WorkerEnv {
  const DATABASE_URL = env.DATABASE_URL; if (!DATABASE_URL) throw new Error("DATABASE_URL is required");
  return { DATABASE_URL, REDIS_URL: env.REDIS_URL ?? "redis://localhost:6379" };
}
