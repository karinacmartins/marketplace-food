// src/globals.d.ts
import { PrismaClient } from "@prisma/client";

declare global {
  var cachedPrisma: PrismaClient | undefined;
}

export {}; // Necessário para tornar esse arquivo um módulo
