/*
  Warnings:

  - The `requested_privacy` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "Privacy" AS ENUM ('PUBLIC', 'FRIENDS', 'PRIVATE');

-- AlterTable
ALTER TABLE "User" DROP COLUMN "requested_privacy",
ADD COLUMN     "requested_privacy" "Privacy" NOT NULL DEFAULT 'PUBLIC';
