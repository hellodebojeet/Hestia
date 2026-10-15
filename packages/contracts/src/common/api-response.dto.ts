import { z } from "zod";
export const apiErrorDto = z.object({ data: z.null().default(null),
  error: z.object({ code: z.string(), message: z.string() }) });
