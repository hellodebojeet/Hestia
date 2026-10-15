import { forbidden } from "../../lib/errors.js";
import type { StoriesRepository } from "./stories.repository.js";
export class StoriesService {
  constructor(private repo: StoriesRepository) {}
  async create(authorId: string, mediaAssetId: string, caption?: string) {
    const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000);
    return this.repo.create(authorId, mediaAssetId, caption, expiresAt);
  }
  listMine(authorId: string) { return this.repo.listActiveForAuthor(authorId); }
  async assertOwner(story: { authorId: string } | null, userId: string) {
    if (!story) throw forbidden("Not found");
    if (story.authorId !== userId) throw forbidden("Not your story");
  }
}
