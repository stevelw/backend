/*
  Warnings:

  - Added the required column `deleted_at` to the `Cat` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `Cat` table without a default value. This is not possible if the table is not empty.
  - Added the required column `deleted_at` to the `Device` table without a default value. This is not possible if the table is not empty.
  - Added the required column `deleted_at` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Cat" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "deleted_at" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Device" ADD COLUMN     "deleted_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "deleted_at" TIMESTAMP(3) NOT NULL;
