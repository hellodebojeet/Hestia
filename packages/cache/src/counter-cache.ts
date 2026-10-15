import type Redis from "ioredis";
export const likeKey = (postId: string) => `counts:post:${postId}:likes`;
export const commentKey = (postId: string) => `counts:post:${postId}:comments`;
export const incrLike = (r: Redis, postId: string) => r.incr(likeKey(postId));
export const decrLike = (r: Redis, postId: string) => r.decr(likeKey(postId));
export const incrComment = (r: Redis, postId: string) => r.incr(commentKey(postId));
