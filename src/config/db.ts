import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
exec();

export default prisma;

async function exec() {
  try {
    await prisma.$connect();
    console.log("Server", "Connected to database");
  } catch (error) {
    console.log(
      "Error",
      `Internal error while connecting to database | ${error}`
    );
  }
}
