-- AlterTable
ALTER TABLE "Cat" ADD COLUMN     "battleProfileId" TEXT;

-- CreateTable
CREATE TABLE "BattleProfile" (
    "id" TEXT NOT NULL,
    "level" INTEGER NOT NULL DEFAULT 0,
    "xp" INTEGER NOT NULL DEFAULT 0,
    "cat_id" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "BattleProfile_id_key" ON "BattleProfile"("id");

-- CreateIndex
CREATE UNIQUE INDEX "BattleProfile_cat_id_key" ON "BattleProfile"("cat_id");

-- AddForeignKey
ALTER TABLE "BattleProfile" ADD CONSTRAINT "BattleProfile_id_fkey" FOREIGN KEY ("id") REFERENCES "Cat"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
