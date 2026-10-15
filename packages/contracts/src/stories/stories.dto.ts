import { z } from "zod";
export const createStoryDto = z.object({ mediaAssetId: z.string(), caption: z.string().max(280).optional() });
export const storyDto = z.object({ id: z.string(), authorId: z.string(), mediaAssetId: z.string(),
  caption: z.string().nullable(), expiresAt: z.string(), createdAt: z.string() });
