import { z } from "zod";
import { postDto } from "../posts/post.dto.js";
export const feedItemDto = z.object({ post: postDto, cursor: z.string() });
export const feedQueryDto = z.object({ cursor: z.string().optional(),
  limit: z.coerce.number().int().min(1).max(50).default(20) });
