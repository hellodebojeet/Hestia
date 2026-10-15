import type { FastifyInstance } from "fastify";
import { HttpError } from "../lib/errors.js";
export async function errorHandlerPlugin(app: FastifyInstance) {
  app.setErrorHandler((err, _req, reply) => {
    if (err instanceof HttpError) return reply.status(err.statusCode).send({ data: null, error: { code: err.code, message: err.message } });
    if ((err as { validation?: unknown }).validation) return reply.status(400).send({ data: null, error: { code: "VALIDATION_ERROR", message: "Invalid request" } });
    app.log.error(err);
    return reply.status(500).send({ data: null, error: { code: "INTERNAL_ERROR", message: "Something went wrong" } });
  });
}
