import { prisma } from "../src/client.js";
async function main(): Promise<void> {
  const email = "demo@hestia.local";
  const existing = await prisma.user.findUnique({ where: { email } });
  if (!existing) {
    await prisma.user.create({ data: { email, passwordHash: "REPLACE_ME",
      profile: { create: { username: "demo", displayName: "Demo User" } } } });
    console.log("seeded demo");
  } else console.log("seed: demo exists");
}
main().catch((e) => { console.error(e); process.exit(1); }).finally(() => prisma.$disconnect());
