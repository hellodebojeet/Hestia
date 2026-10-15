import type { FastifyInstance } from "fastify";
import type { PrismaClient } from "@prisma/client";
import { StoriesRepository } from "./stories.repository.js";
import { StoriesService } from "./stories.service.js";
import { buildStoriesController } from "./stories.controller.js";
export async function storiesRoutes(app: FastifyInstance, opts: { db: PrismaClient }) {
  const c = buildStoriesController(new StoriesService(new StoriesRepository(opts.db)));
  app.post("/stories", { preHandler: [app.authenticate] }, c.create);
  app.get("/stories/mine", { preHandler: [app.authenticate] }, c.listMine);
}
