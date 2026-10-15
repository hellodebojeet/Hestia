import { z } from "zod";
export const mediaDto = z.object({ id: z.string(), storageKey: z.string(), mimeType: z.string(),
  byteSize: z.number(), status: z.enum(["PENDING","READY","FAILED"]) });
export const requestUploadDto = z.object({ mimeType: z.string(), byteSize: z.number().int().positive().max(25_000_000),
  kind: z.enum(["IMAGE","VIDEO","AVATAR","COVER","STORY","REEL"]).default("IMAGE") });
