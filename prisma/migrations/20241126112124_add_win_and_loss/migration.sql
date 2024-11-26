/*
  Warnings:

  - Added the required column `losses` to the `BattleProfile` table without a default value. This is not possible if the table is not empty.
  - Added the required column `wins` to the `BattleProfile` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "BattleProfile" ADD COLUMN     "losses" INTEGER NOT NULL,
ADD COLUMN     "wins" INTEGER NOT NULL,
ALTER COLUMN "level" DROP DEFAULT,
ALTER COLUMN "xp" DROP DEFAULT;
