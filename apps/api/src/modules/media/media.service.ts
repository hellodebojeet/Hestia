import { validatePresignRequest, storageKeyFor } from "@hestia/storage";
import type { MediaRepository } from "./media.repository.js";
// API persists metadata only; bytes upload browser-direct to S3/R2 via presigned URL (worker transcodes video).
export class MediaService {
  constructor(private repo: MediaRepository) {}
  async requestUpload(ownerId: string, mimeType: string, byteSize: number, kind: "IMAGE"|"VIDEO"|"AVATAR"|"COVER"|"STORY"|"REEL" = "IMAGE", filename = "upload") {
    const storageKey = storageKeyFor(ownerId, filename);
    validatePresignRequest({ storageKey, mimeType, byteSize });
    return this.repo.createPending(ownerId, storageKey, mimeType, byteSize, kind);
  }
}
