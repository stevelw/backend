/*
  Warnings:

  - You are about to drop the column `deleted_at` on the `Cat` table. All the data in the column will be lost.
  - You are about to drop the column `deleted_at` on the `Device` table. All the data in the column will be lost.
  - You are about to drop the column `deleted_at` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Cat" DROP COLUMN "deleted_at";

-- AlterTable
ALTER TABLE "Device" DROP COLUMN "deleted_at";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "deleted_at";
