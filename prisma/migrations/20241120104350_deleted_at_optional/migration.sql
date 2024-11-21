-- AlterTable
ALTER TABLE "Cat" ALTER COLUMN "deleted_at" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Device" ALTER COLUMN "deleted_at" DROP NOT NULL;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "deleted_at" DROP NOT NULL;
