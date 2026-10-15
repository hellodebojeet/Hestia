import { z } from "zod";
export const createCommentDto = z.object({ content: z.string().min(1).max(2000), parentId: z.string().optional() });
export const commentDto = z.object({ id: z.string(), postId: z.string(), authorId: z.string(),
  content: z.string(), parentId: z.string().nullable(), createdAt: z.string() });
