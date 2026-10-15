import { z } from "zod";
export const postAudience = z.enum(["PUBLIC","FRIENDS","ONLY_ME"]);
export const createPostDto = z.object({ content: z.string().min(1).max(5000), audience: postAudience.default("PUBLIC") });
export const updatePostDto = z.object({ content: z.string().min(1).max(5000).optional(), audience: postAudience.optional() });
export const postDto = z.object({ id: z.string(), authorId: z.string(), audience: postAudience,
  content: z.string(), createdAt: z.string(), updatedAt: z.string() });
