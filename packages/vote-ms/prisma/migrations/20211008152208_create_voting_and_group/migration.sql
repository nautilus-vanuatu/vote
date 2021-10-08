-- CreateEnum
CREATE TYPE "Status" AS ENUM ('OPEN', 'CLOSED', 'REGISTERED');

-- CreateTable
CREATE TABLE "Voting" (
    "id" TEXT NOT NULL,
    "id_system" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "begin_date" TIMESTAMP(3) NOT NULL,
    "end_date" TIMESTAMP(3) NOT NULL,
    "groupId" TEXT NOT NULL,
    "Status" "Status" NOT NULL DEFAULT E'REGISTERED',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Group" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Voting.id_system_unique" ON "Voting"("id_system");

-- AddForeignKey
ALTER TABLE "Voting" ADD FOREIGN KEY ("groupId") REFERENCES "Group"("id") ON DELETE CASCADE ON UPDATE CASCADE;
