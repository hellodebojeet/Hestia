import type { PrismaClient } from "@prisma/client";
export async function withTransaction<T>(db: PrismaClient, fn: (tx: PrismaClient) => Promise<T>): Promise<T> {
  return db.$transaction(async (tx) => fn(tx as PrismaClient));
}
