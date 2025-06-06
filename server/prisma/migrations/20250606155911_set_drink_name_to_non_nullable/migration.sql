/*
  Warnings:

  - Made the column `drink_name` on table `orders` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "orders" ALTER COLUMN "drink_name" SET NOT NULL;
