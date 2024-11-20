-- DropForeignKey
ALTER TABLE "Cat" DROP CONSTRAINT "Cat_device_id_fkey";

-- AlterTable
ALTER TABLE "Cat" ALTER COLUMN "device_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Cat" ADD CONSTRAINT "Cat_device_id_fkey" FOREIGN KEY ("device_id") REFERENCES "Device"("id") ON DELETE SET NULL ON UPDATE CASCADE;
