import type { FastifyInstance, FastifyRequest } from "fastify";
import { unauthorized } from "../lib/errors.js";
import { hashToken } from "@hestia/auth";
declare module "fastify" { interface FastifyRequest { userId?: string } }
export async function authenticatePlugin(app: FastifyInstance) {
  app.decorate("authenticate", async function (req: FastifyRequest): Promise<void> {
    const header = req.headers.authorization;
    if (!header?.startsWith("Bearer ")) throw unauthorized();
    const session = await app.prisma.authSession.findUnique({ where: { tokenHash: hashToken(header.slice(7)) } });
    if (!session || session.revokedAt || session.expiresAt.getTime() <= Date.now()) throw unauthorized("Session expired");
    req.userId = session.userId;
  });
}
declare module "fastify" { interface FastifyInstance { authenticate: (req: FastifyRequest) => Promise<void> } }
