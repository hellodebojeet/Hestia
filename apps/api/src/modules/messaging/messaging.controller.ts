import type { FastifyReply, FastifyRequest } from "fastify";
export function buildMessagingController(_svc: unknown) {
  return { async history(req: FastifyRequest, reply: FastifyReply) { return reply.send({ data: [] }); } };
}
