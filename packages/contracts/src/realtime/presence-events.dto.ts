import { z } from "zod";
export const heartbeatDto = z.object({ userId: z.string() });
export const presenceStateDto = z.object({ userId: z.string(), online: z.boolean() });
