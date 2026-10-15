import type { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import type { StoriesService } from "./stories.service.js";
const createSchema = z.object({ mediaAssetId: z.string(), caption: z.string().max(280).optional() });
export function buildStoriesController(service: StoriesService) {
  return {
    async create(req: FastifyRequest, reply: FastifyReply) {
      const input = createSchema.parse(req.body);
      const story = await service.create(req.userId!, input.mediaAssetId, input.caption);
      return reply.status(201).send({ data: story });
    },
    async listMine(req: FastifyRequest, reply: FastifyReply) {
      return reply.send({ data: await service.listMine(req.userId!) });
    },
  };
}
