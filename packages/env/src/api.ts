export interface ApiEnv { DATABASE_URL: string; REDIS_URL: string; PORT: number; SESSION_SECRET: string; NODE_ENV: string }
function required(name: string, env: NodeJS.ProcessEnv): string {
  const v = env[name]; if (!v) throw new Error(`${name} is required`); return v;
}
export function loadApiEnv(env: NodeJS.ProcessEnv = process.env): ApiEnv {
  return { DATABASE_URL: required("DATABASE_URL", env), REDIS_URL: env.REDIS_URL ?? "redis://localhost:6379",
    PORT: Number(env.API_PORT ?? env.PORT ?? 4000), SESSION_SECRET: required("SESSION_SECRET", env), NODE_ENV: env.NODE_ENV ?? "development" };
}
