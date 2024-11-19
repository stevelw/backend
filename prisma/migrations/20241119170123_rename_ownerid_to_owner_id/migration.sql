/*
  Warnings:

  - You are about to drop the column `ownerId` on the `Device` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Device" DROP CONSTRAINT "Device_ownerId_fkey";

-- AlterTable
ALTER TABLE "Device" DROP COLUMN "ownerId",
ADD COLUMN     "owner_id" TEXT;

-- AddForeignKey
ALTER TABLE "Device" ADD CONSTRAINT "Device_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
