import type { FastifyInstance } from "fastify";
export async function messagingRoutes(app: FastifyInstance) {
  app.get("/conversations/:id/messages", { preHandler: [app.authenticate] }, async () => ({ data: [] }));
}
