import Redis from "ioredis";
let client: Redis | null = null;
export function getRedis(url = process.env.REDIS_URL ?? "redis://localhost:6379"): Redis {
  if (!client) client = new Redis(url, { lazyConnect: true });
  return client;
}
export function resetRedisForTests(): void { client = null; }
