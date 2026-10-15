import type { PrismaClient } from "@prisma/client";
export class FeedRepository {
  constructor(private db: PrismaClient) {}
  // DB fallback when Redis ZSET misses; chronological, cursor = createdAt+id.
  listChronological(ownerFriendIds: string[], cursor?: string, limit = 20) {
    return this.db.post.findMany({ where: { authorId: { in: ownerFriendIds }, deletedAt: null,
        OR: [{ audience: "PUBLIC" }, { audience: "FRIENDS" }] },
      orderBy: [{ createdAt: "desc" }, { id: "desc" }],
      take: limit + 1, ...(cursor ? { cursor: { id: cursor }, skip: 1 } : {}) });
  }
}
