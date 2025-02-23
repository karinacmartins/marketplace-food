// src/lib/prisma.ts
import { PrismaClient } from "@prisma/client";

let prisma: PrismaClient;

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  // Usando cachedPrisma no ambiente de desenvolvimento
  if (!globalThis.cachedPrisma) {
    globalThis.cachedPrisma = new PrismaClient();
  }
  prisma = globalThis.cachedPrisma;
}

export const db = prisma;
