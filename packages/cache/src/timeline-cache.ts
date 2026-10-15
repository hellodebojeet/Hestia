import type Redis from "ioredis";
export const feedKey = (ownerId: string) => `feed:${ownerId}`;
export async function pushToFeed(redis: Redis, ownerId: string, postId: string, score = Date.now()): Promise<void> {
  await redis.zadd(feedKey(ownerId), score, postId);
  await redis.zremrangebyrank(feedKey(ownerId), 0, -1001);
}
export async function readFeedIds(redis: Redis, ownerId: string, offset = 0, limit = 20): Promise<string[]> {
  return redis.zrevrange(feedKey(ownerId), offset, offset + limit - 1);
}
export async function removeFromFeed(redis: Redis, ownerId: string, postId: string): Promise<void> {
  await redis.zrem(feedKey(ownerId), postId);
}
