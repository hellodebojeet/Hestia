import { decodeCursor, encodeCursor } from "../../lib/pagination.js";
import type { FeedRepository } from "./feed.repository.js";
// Reads hot timeline from Redis ZSET (via worker fan-out); falls back to DB chronological.
export class FeedService {
  constructor(private repo: FeedRepository) {}
  async list(viewerFriendIds: string[], cursor?: string, limit = 20) {
    const decoded = decodeCursor(cursor);
    const posts = await this.repo.listChronological(viewerFriendIds, decoded, limit);
    const hasMore = posts.length > limit;
    const items = hasMore ? posts.slice(0, limit) : posts;
    const nextCursor = hasMore ? encodeCursor(items[items.length - 1].id) : null;
    return { items, nextCursor };
  }
}
