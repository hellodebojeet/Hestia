import type { FastifyInstance } from "fastify";
import type { PrismaClient } from "@prisma/client";
import { AuthRepository } from "./auth.repository.js";
import { AuthService } from "./auth.service.js";
import { buildAuthController } from "./auth.controller.js";
export async function authRoutes(app: FastifyInstance, opts: { db: PrismaClient }) {
  const c = buildAuthController(new AuthService(new AuthRepository(opts.db)));
  app.post("/auth/register", c.register);
  app.post("/auth/login", c.login);
  app.get("/auth/me", { preHandler: [app.authenticate] }, c.me);
}
