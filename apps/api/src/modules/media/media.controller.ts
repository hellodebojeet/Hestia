import type { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import type { MediaService } from "./media.service.js";
const schema = z.object({ mimeType: z.string(), byteSize: z.number().int().positive().max(25_000_000),
  kind: z.enum(["IMAGE","VIDEO","AVATAR","COVER","STORY","REEL"]).default("IMAGE") });
export function buildMediaController(service: MediaService) {
  return {
    async requestUpload(req: FastifyRequest, reply: FastifyReply) {
      const input = schema.parse(req.body);
      const asset = await service.requestUpload(req.userId!, input.mimeType, input.byteSize, input.kind);
      return reply.status(201).send({ data: asset });
    },
  };
}
