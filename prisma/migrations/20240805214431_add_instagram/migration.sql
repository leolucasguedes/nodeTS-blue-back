/*
  Warnings:

  - Added the required column `instagram` to the `restaurants` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "restaurants" ADD COLUMN     "instagram" TEXT NOT NULL;
