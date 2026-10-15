import type Redis from "ioredis";
export const presenceKey = (userId: string) => `presence:${userId}`;
export const setOnline = (r: Redis, userId: string, ttlSec = 60) => r.set(presenceKey(userId), "1", "EX", ttlSec);
export const setOffline = (r: Redis, userId: string) => r.del(presenceKey(userId));
export const isOnline = async (r: Redis, userId: string) => (await r.exists(presenceKey(userId))) === 1;
