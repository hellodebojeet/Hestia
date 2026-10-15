import { z } from "zod";
export const registerDto = z.object({ email: z.string().email().max(254),
  password: z.string().min(8).max(128),
  username: z.string().min(3).max(30).regex(/^[a-z0-9_]+$/i),
  displayName: z.string().min(1).max(80) });
export type RegisterDto = z.infer<typeof registerDto>;
