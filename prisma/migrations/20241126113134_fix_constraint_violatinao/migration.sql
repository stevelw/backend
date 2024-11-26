-- DropForeignKey
ALTER TABLE "BattleProfile" DROP CONSTRAINT "BattleProfile_id_fkey";

-- AddForeignKey
ALTER TABLE "BattleProfile" ADD CONSTRAINT "BattleProfile_cat_id_fkey" FOREIGN KEY ("cat_id") REFERENCES "Cat"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
