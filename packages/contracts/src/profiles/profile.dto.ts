import { z } from "zod";
export const profileDto = z.object({ userId: z.string(), username: z.string(), displayName: z.string(),
  bio: z.string(), visibility: z.enum(["PUBLIC","FRIENDS","PRIVATE"]) });
export const updateProfileDto = z.object({ displayName: z.string().min(1).max(80).optional(),
  bio: z.string().max(500).optional(), visibility: z.enum(["PUBLIC","FRIENDS","PRIVATE"]).optional() });
