import { PrismaClient } from "@prisma/client";
declare global { var __hestiaPrisma: PrismaClient | undefined; }
export function createPrismaClient(): PrismaClient {
  const existing = globalThis.__hestiaPrisma;
  if (existing) return existing;
  const client = new PrismaClient();
  if (process.env.NODE_ENV !== "production") globalThis.__hestiaPrisma = client;
  return client;
}
export const prisma = createPrismaClient();
export type DatabaseClient = PrismaClient;
