import type { FastifyInstance } from "fastify";
import type { PrismaClient } from "@prisma/client";
import { FeedRepository } from "./feed.repository.js";
import { FeedService } from "./feed.service.js";
import { buildFeedController } from "./feed.controller.js";
export async function feedRoutes(app: FastifyInstance, opts: { db: PrismaClient }) {
  const c = buildFeedController(new FeedService(new FeedRepository(opts.db)));
  app.get("/feed", { preHandler: [app.authenticate] }, c.list);
}
