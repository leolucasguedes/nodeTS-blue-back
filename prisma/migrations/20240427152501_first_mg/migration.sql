-- CreateTable
CREATE TABLE `restaurants` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NOT NULL,
    `foodType` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `restaurants_name_key`(`name`),
    UNIQUE INDEX `restaurants_address_key`(`address`),
    UNIQUE INDEX `restaurants_email_key`(`email`),
    UNIQUE INDEX `restaurants_phone_key`(`phone`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
