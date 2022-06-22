-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_folder" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "title" TEXT NOT NULL,
    "type" TEXT NOT NULL DEFAULT 'folder'
);
INSERT INTO "new_folder" ("createdAt", "id", "title", "updatedAt") SELECT "createdAt", "id", "title", "updatedAt" FROM "folder";
DROP TABLE "folder";
ALTER TABLE "new_folder" RENAME TO "folder";
CREATE TABLE "new_file" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "content" TEXT NOT NULL,
    "type" TEXT NOT NULL DEFAULT 'file',
    "folderId" INTEGER,
    CONSTRAINT "file_folderId_fkey" FOREIGN KEY ("folderId") REFERENCES "folder" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_file" ("content", "createdAt", "folderId", "id", "updatedAt") SELECT "content", "createdAt", "folderId", "id", "updatedAt" FROM "file";
DROP TABLE "file";
ALTER TABLE "new_file" RENAME TO "file";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
