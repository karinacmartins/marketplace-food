import { PrismaClient } from "@prisma/client";

declare global {
  // Substitua `var` por `let` ou `const`
  let cachedPrisma: PrismaClient | undefined;
}

let prisma: PrismaClient;

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  if (!globalThis.cachedPrisma) {
    globalThis.cachedPrisma = new PrismaClient();
  }
  prisma = globalThis.cachedPrisma;
}

export const db = prisma;
