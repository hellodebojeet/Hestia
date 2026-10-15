import type { FastifyReply, FastifyRequest } from "fastify";
import { feedQuerySchema } from "./feed.schema.js";
import type { FeedService } from "./feed.service.js";
export function buildFeedController(service: FeedService) {
  return {
    async list(req: FastifyRequest, reply: FastifyReply) {
      const q = feedQuerySchema.parse(req.query);
      // Friend-id resolution + block filtering happens in friendships/privacy (stage 1b).
      return reply.send({ data: await service.list([], q.cursor, q.limit) });
    },
  };
}
