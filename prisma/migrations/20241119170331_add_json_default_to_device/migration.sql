-- AlterTable
ALTER TABLE "Device" ALTER COLUMN "last_pulse_at" DROP NOT NULL,
ALTER COLUMN "last_location" SET DEFAULT '{}',
ALTER COLUMN "location_history" SET DEFAULT '{}';
