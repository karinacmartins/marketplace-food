import { PrismaClient } from "@prisma/client";

declare global {
  // Declarando a variável cachedPrisma no escopo global
  var cachedPrisma: PrismaClient | undefined;
}

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
