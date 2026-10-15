import { z } from "zod";
export const sessionDto = z.object({ token: z.string(), expiresAt: z.string(), userId: z.string() });
export type SessionDto = z.infer<typeof sessionDto>;
