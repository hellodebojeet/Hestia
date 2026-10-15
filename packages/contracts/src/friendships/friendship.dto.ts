import { z } from "zod";
export const friendshipDto = z.object({ id: z.string(), requesterId: z.string(), addresseeId: z.string(),
  status: z.enum(["PENDING","ACCEPTED","DECLINED","CANCELLED"]) });
export const sendFriendRequestDto = z.object({ addresseeId: z.string() });
