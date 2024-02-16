/*
  Warnings:

  - You are about to drop the column `buy_link` on the `product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "product" DROP COLUMN "buy_link";

-- AlterTable
ALTER TABLE "product_variations" ADD COLUMN     "buy_link" TEXT;
