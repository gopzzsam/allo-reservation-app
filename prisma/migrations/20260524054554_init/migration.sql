/*
  Warnings:

  - You are about to drop the column `customerName` on the `Reservation` table. All the data in the column will be lost.
  - You are about to drop the column `productName` on the `Reservation` table. All the data in the column will be lost.
  - Added the required column `email` to the `Reservation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Reservation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `stockName` to the `Reservation` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Reservation" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "stockName" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Reservation" ("createdAt", "id", "quantity") SELECT "createdAt", "id", "quantity" FROM "Reservation";
DROP TABLE "Reservation";
ALTER TABLE "new_Reservation" RENAME TO "Reservation";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
