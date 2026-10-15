import { Prisma } from "@prisma/client";
export const UNIQUE_VIOLATION = "P2002";
export const NOT_FOUND = "P2025";
export const FK_VIOLATION = "P2003";
export function isPrismaError(error: unknown, code: string): error is Prisma.PrismaClientKnownRequestError {
  return error instanceof Prisma.PrismaClientKnownRequestError && error.code === code;
}
