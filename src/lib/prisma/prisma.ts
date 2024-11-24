import { PrismaClient } from "@prisma/client";

/*
 * Prevents instantiation of multiple PrismaClient instances when hot-reloading in Development.
 * */

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
