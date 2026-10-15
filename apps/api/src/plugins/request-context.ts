import { randomUUID } from "node:crypto";
import type { FastifyInstance } from "fastify";
declare module "fastify" { interface FastifyRequest { requestId: string } }
export async function requestContextPlugin(app: FastifyInstance) {
  app.addHook("onRequest", async (req) => { req.requestId = (req.headers["x-request-id"] as string) ?? randomUUID(); });
}
