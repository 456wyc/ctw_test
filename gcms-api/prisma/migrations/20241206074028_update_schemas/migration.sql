/*
  Warnings:

  - You are about to alter the column `name` on the `Config` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(50)`.
  - You are about to alter the column `name` on the `Group` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(50)`.
  - You are about to alter the column `type` on the `Group` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(50)`.
  - You are about to alter the column `name` on the `User` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(50)`.

*/
-- AlterTable
ALTER TABLE `Config` MODIFY `name` VARCHAR(50) NOT NULL,
    MODIFY `desc` VARCHAR(255) NULL;

-- AlterTable
ALTER TABLE `Group` ADD COLUMN `desc` VARCHAR(255) NULL,
    MODIFY `name` VARCHAR(50) NOT NULL,
    MODIFY `type` VARCHAR(50) NULL;

-- AlterTable
ALTER TABLE `User` MODIFY `name` VARCHAR(50) NULL;
