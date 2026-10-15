import type { FastifyInstance } from "fastify";
import type { PrismaClient } from "@prisma/client";
import { MediaRepository } from "./media.repository.js";
import { MediaService } from "./media.service.js";
import { buildMediaController } from "./media.controller.js";
export async function mediaRoutes(app: FastifyInstance, opts: { db: PrismaClient }) {
  const c = buildMediaController(new MediaService(new MediaRepository(opts.db)));
  app.post("/media/uploads", { preHandler: [app.authenticate] }, c.requestUpload);
}
