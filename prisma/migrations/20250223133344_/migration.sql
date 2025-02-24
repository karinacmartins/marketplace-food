/*
  Warnings:

  - You are about to drop the column `ConsumptionMethod` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `cutomerName` on the `Order` table. All the data in the column will be lost.
  - Added the required column `consumptionMethod` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `customerName` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Order" DROP COLUMN "ConsumptionMethod",
DROP COLUMN "cutomerName",
ADD COLUMN     "consumptionMethod" "ConsumptionMethod" NOT NULL,
ADD COLUMN     "customerName" TEXT NOT NULL;
