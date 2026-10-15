import type { FastifyInstance } from "fastify";
export async function rateLimiterPlugin(app: FastifyInstance) {
  await app.register(import("@fastify/rate-limit"), { max: 100, timeWindow: "1 minute" });
}
