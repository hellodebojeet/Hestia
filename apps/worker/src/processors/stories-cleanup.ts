import type { PrismaClient } from "@prisma/client";
export async function cleanupExpiredStories(db: PrismaClient, now = new Date()): Promise<number> {
  const res = await db.story.deleteMany({ where: { expiresAt: { lte: now } } });
  return res.count;
}
