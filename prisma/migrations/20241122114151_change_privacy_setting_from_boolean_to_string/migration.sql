-- AlterTable
ALTER TABLE "User" ALTER COLUMN "requested_privacy" SET DEFAULT 'Public',
ALTER COLUMN "requested_privacy" SET DATA TYPE TEXT;
