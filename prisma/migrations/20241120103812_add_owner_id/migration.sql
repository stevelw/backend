-- CreateTable
CREATE TABLE "Cat" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL DEFAULT 'Cat',
    "description" TEXT NOT NULL DEFAULT 'Meow meow. Meow meow? Meow!',
    "picture_url" TEXT NOT NULL DEFAULT 'https://c8.alamy.com/comp/DBTJAD/a-closeup-picture-of-a-cats-face-on-a-white-background-DBTJAD.jpg',
    "device_id" TEXT NOT NULL,
    "owner_id" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Cat_id_key" ON "Cat"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Cat_device_id_key" ON "Cat"("device_id");

-- AddForeignKey
ALTER TABLE "Cat" ADD CONSTRAINT "Cat_device_id_fkey" FOREIGN KEY ("device_id") REFERENCES "Device"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cat" ADD CONSTRAINT "Cat_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
