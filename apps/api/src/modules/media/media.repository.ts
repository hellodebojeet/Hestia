import type { PrismaClient } from "@prisma/client";
export class MediaRepository {
  constructor(private db: PrismaClient) {}
  createPending(ownerId: string, storageKey: string, mimeType: string, byteSize: number, kind: "IMAGE"|"VIDEO"|"AVATAR"|"COVER"|"STORY"|"REEL" = "IMAGE") {
    return this.db.mediaAsset.create({ data: { ownerId, storageKey, mimeType, byteSize, kind } });
  }
  markReady(id: string) { return this.db.mediaAsset.update({ where: { id }, data: { status: "READY" } }); }
}
