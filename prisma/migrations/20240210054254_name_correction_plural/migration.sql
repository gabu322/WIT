/*
  Warnings:

  - You are about to drop the `product_image` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `product_variation` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "order_item" DROP CONSTRAINT "order_item_product_variation_id_fkey";

-- DropForeignKey
ALTER TABLE "product_image" DROP CONSTRAINT "product_image_product_id_fkey";

-- DropForeignKey
ALTER TABLE "product_variation" DROP CONSTRAINT "product_variation_product_id_fkey";

-- DropTable
DROP TABLE "product_image";

-- DropTable
DROP TABLE "product_variation";

-- CreateTable
CREATE TABLE "product_images" (
    "id" SERIAL NOT NULL,
    "product_id" INTEGER NOT NULL,
    "link" TEXT NOT NULL,

    CONSTRAINT "product_images_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "product_variations" (
    "id" SERIAL NOT NULL,
    "product_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "stock" INTEGER NOT NULL,
    "buy_price" DOUBLE PRECISION NOT NULL,
    "sell_price" DOUBLE PRECISION NOT NULL,
    "image_link" TEXT,
    "priority_weight" DOUBLE PRECISION,

    CONSTRAINT "product_variations_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "product_images" ADD CONSTRAINT "product_images_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "product_variations" ADD CONSTRAINT "product_variations_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_item" ADD CONSTRAINT "order_item_product_variation_id_fkey" FOREIGN KEY ("product_variation_id") REFERENCES "product_variations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
