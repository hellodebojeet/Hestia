import { z } from "zod";
export const messageDto = z.object({ id: z.string(), conversationId: z.string(), senderId: z.string(),
  body: z.string(), createdAt: z.string() });
export const sendMessageDto = z.object({ body: z.string().min(1).max(4000) });
