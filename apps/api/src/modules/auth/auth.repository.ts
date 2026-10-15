import type { PrismaClient, User } from "@prisma/client";
export class AuthRepository {
  constructor(private db: PrismaClient) {}
  findUserByEmail(email: string): Promise<User | null> {
    return this.db.user.findUnique({ where: { email: email.toLowerCase() } });
  }
  findUsername(username: string) { return this.db.profile.findUnique({ where: { username } }); }
  createUserWithProfile(input: { email: string; passwordHash: string; username: string; displayName: string }) {
    return this.db.user.create({ data: { email: input.email.toLowerCase(), passwordHash: input.passwordHash,
      profile: { create: { username: input.username, displayName: input.displayName } } }, include: { profile: true } });
  }
  createSession(input: { userId: string; tokenHash: string; expiresAt: Date; ip?: string; userAgent?: string }) {
    return this.db.authSession.create({ data: input });
  }
  findSessionByTokenHash(tokenHash: string) { return this.db.authSession.findUnique({ where: { tokenHash } }); }
}
