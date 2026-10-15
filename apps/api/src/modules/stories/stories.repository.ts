import type { PrismaClient } from "@prisma/client";
export class StoriesRepository {
  constructor(private db: PrismaClient) {}
  create(authorId: string, mediaAssetId: string, caption: string | undefined, expiresAt: Date) {
    return this.db.story.create({ data: { authorId, mediaAssetId, caption, expiresAt } });
  }
  listActiveForAuthor(authorId: string, now = new Date()) {
    return this.db.story.findMany({ where: { authorId, expiresAt: { gt: now } }, orderBy: { createdAt: "desc" } });
  }
  deleteExpired(now = new Date()) { return this.db.story.deleteMany({ where: { expiresAt: { lte: now } } }); }
}
