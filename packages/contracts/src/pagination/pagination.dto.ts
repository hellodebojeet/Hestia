import { z } from "zod";
export const paginationQueryDto = z.object({ cursor: z.string().optional(),
  limit: z.coerce.number().int().min(1).max(50).default(20) });
