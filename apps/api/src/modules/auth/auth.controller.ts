import type { FastifyReply, FastifyRequest } from "fastify";
import type { AuthService } from "./auth.service.js";
import { loginSchema, registerSchema } from "./auth.schema.js";
export function buildAuthController(service: AuthService) {
  return {
    async register(req: FastifyRequest, reply: FastifyReply) {
      const result = await service.register(registerSchema.parse(req.body), { ip: req.ip, userAgent: req.headers["user-agent"] });
      return reply.status(201).send({ data: result });
    },
    async login(req: FastifyRequest, reply: FastifyReply) {
      const result = await service.login(loginSchema.parse(req.body), { ip: req.ip, userAgent: req.headers["user-agent"] });
      return reply.send({ data: result });
    },
    async me(req: FastifyRequest, reply: FastifyReply) { return reply.send({ data: { userId: req.userId } }); },
  };
}
