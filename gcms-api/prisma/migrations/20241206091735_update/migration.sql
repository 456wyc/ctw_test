/*
  Warnings:

  - You are about to alter the column `configId` on the `ChangeLog` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(50)`.
  - You are about to alter the column `versionId` on the `ChangeLog` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(50)`.
  - You are about to alter the column `operator` on the `ChangeLog` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(50)`.
  - You are about to alter the column `envId` on the `Client` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(50)`.
  - You are about to alter the column `clientId` on the `ClientSubscriptions` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(50)`.
  - You are about to alter the column `configId` on the `ClientSubscriptions` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(50)`.
  - You are about to alter the column `versionId` on the `ClientSubscriptions` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(50)`.
  - You are about to alter the column `preVersionId` on the `ClientSubscriptions` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(50)`.
  - The primary key for the `ConfigGroup` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `configId` on the `ConfigGroup` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(50)`.
  - You are about to alter the column `groupId` on the `ConfigGroup` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(50)`.
  - The primary key for the `EnvConfigVersion` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `envId` on the `EnvConfigVersion` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(50)`.
  - You are about to alter the column `versionId` on the `EnvConfigVersion` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(50)`.
  - You are about to alter the column `configId` on the `Version` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(50)`.
  - You are about to alter the column `schemaId` on the `Version` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(50)`.

*/
-- AlterTable
ALTER TABLE `ChangeLog` MODIFY `configId` VARCHAR(50) NOT NULL,
    MODIFY `versionId` VARCHAR(50) NOT NULL,
    MODIFY `operator` VARCHAR(50) NOT NULL;

-- AlterTable
ALTER TABLE `Client` MODIFY `envId` VARCHAR(50) NOT NULL;

-- AlterTable
ALTER TABLE `ClientSubscriptions` MODIFY `clientId` VARCHAR(50) NOT NULL,
    MODIFY `configId` VARCHAR(50) NOT NULL,
    MODIFY `versionId` VARCHAR(50) NULL,
    MODIFY `preVersionId` VARCHAR(50) NULL;

-- AlterTable
ALTER TABLE `ConfigGroup` DROP PRIMARY KEY,
    MODIFY `configId` VARCHAR(50) NOT NULL,
    MODIFY `groupId` VARCHAR(50) NOT NULL,
    ADD PRIMARY KEY (`configId`, `groupId`);

-- AlterTable
ALTER TABLE `EnvConfigVersion` DROP PRIMARY KEY,
    MODIFY `envId` VARCHAR(50) NOT NULL,
    MODIFY `versionId` VARCHAR(50) NOT NULL,
    ADD PRIMARY KEY (`envId`, `versionId`);

-- AlterTable
ALTER TABLE `Version` MODIFY `configId` VARCHAR(50) NOT NULL,
    MODIFY `schemaId` VARCHAR(50) NOT NULL;
