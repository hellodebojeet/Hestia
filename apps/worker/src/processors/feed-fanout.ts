import { pushToFeed } from "@hestia/cache";
import type Redis from "ioredis";
// Hybrid: push-to-cache ZSET for regular authors; celebrities pulled on read (skip list here).
const CELEBRITY_THRESHOLD = 10_000;
export async function fanoutPost(redis: Redis, post: { id: string; authorId: string }, followerIds: string[], followerCount: number): Promise<number> {
  if (followerCount >= CELEBRITY_THRESHOLD) return 0;
  const score = Date.now();
  await Promise.all(followerIds.map((fid) => pushToFeed(redis, fid, post.id, score)));
  await pushToFeed(redis, post.authorId, post.id, score);
  return followerIds.length + 1;
}
