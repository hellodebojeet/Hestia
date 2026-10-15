import { z } from "zod";
export const notificationDto = z.object({ id: z.string(), type: z.string(), actorId: z.string().nullable(),
  postId: z.string().nullable(), readAt: z.string().nullable(), createdAt: z.string() });
