import Fastify from "fastify";
import type { PrismaClient } from "@prisma/client";
import { prisma } from "@hestia/database";
import { authRoutes } from "./modules/auth/auth.routes.js";
import { healthRoutes } from "./modules/health/health.routes.js";
import { storiesRoutes } from "./modules/stories/stories.routes.js";
import { feedRoutes } from "./modules/feed/feed.routes.js";
import { mediaRoutes } from "./modules/media/media.routes.js";
import { messagingRoutes } from "./modules/messaging/messaging.routes.js";
import { authenticatePlugin } from "./plugins/authenticate.js";
import { errorHandlerPlugin } from "./plugins/error-handler.js";
import { requestContextPlugin } from "./plugins/request-context.js";
declare module "fastify" { interface FastifyInstance { prisma: PrismaClient } }
export function buildApp(db: PrismaClient = prisma) {
  const app = Fastify({ logger: true });
  app.decorate("prisma", db);
  void requestContextPlugin(app);
  void errorHandlerPlugin(app);
  void authenticatePlugin(app);
  void app.register((instance, _opts, done) => {
    void instance.register(healthRoutes);
    void instance.register(authRoutes, { db });
    void instance.register(storiesRoutes, { db });
    void instance.register(feedRoutes, { db });
    void instance.register(mediaRoutes, { db });
    void instance.register(messagingRoutes);
    done();
  });
  return app;
}
