import { z } from "zod";
export const chatMessageEventDto = z.object({ conversationId: z.string(), body: z.string().min(1).max(4000) });
export const typingEventDto = z.object({ conversationId: z.string(), typing: z.boolean() });
