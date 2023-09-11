import { prisma } from "../database/PrismaClient";


export default defineEventHandler(async () => {
  // create a new user
  await prisma.user.create({
    data: {
      name: "John Dough",
      email: `john-${Math.random()}@example.com`,
    },
  });
})
