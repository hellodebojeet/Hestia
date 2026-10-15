import { z } from "zod";
export const userDto = z.object({ id: z.string(), email: z.string().email(),
  status: z.enum(["ACTIVE","SUSPENDED","DELETED"]), createdAt: z.string() });
