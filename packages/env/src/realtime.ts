export interface RealtimeEnv { PORT: number; REDIS_URL: string }
export function loadRealtimeEnv(env: NodeJS.ProcessEnv = process.env): RealtimeEnv {
  return { PORT: Number(env.REALTIME_PORT ?? 4001), REDIS_URL: env.REDIS_URL ?? "redis://localhost:6379" };
}
