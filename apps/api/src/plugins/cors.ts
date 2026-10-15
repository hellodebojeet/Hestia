import type { FastifyInstance } from "fastify";
export async function corsPlugin(app: FastifyInstance) {
  await app.register(import("@fastify/cors"), { origin: process.env.WEB_URL ?? "http://localhost:3000", credentials: true });
}
