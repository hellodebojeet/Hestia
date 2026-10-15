import { generateOpaqueToken, hashPassword, hashToken, sessionExpiry, verifyPassword } from "@hestia/auth";
import { isPrismaError, UNIQUE_VIOLATION } from "@hestia/database";
import { conflict, unauthorized } from "../../lib/errors.js";
import type { AuthRepository } from "./auth.repository.js";
import type { LoginInput, RegisterInput } from "./auth.schema.js";
export class AuthService {
  constructor(private repo: AuthRepository) {}
  async register(input: RegisterInput, meta?: { ip?: string; userAgent?: string }) {
    if (await this.repo.findUserByEmail(input.email)) throw conflict("Email already registered");
    if (await this.repo.findUsername(input.username)) throw conflict("Username already taken");
    try {
      const user = await this.repo.createUserWithProfile({ ...input, passwordHash: await hashPassword(input.password) });
      return this.issueSession(user.id, meta);
    } catch (err) {
      if (isPrismaError(err, UNIQUE_VIOLATION)) throw conflict("Already registered");
      throw err;
    }
  }
  async login(input: LoginInput, meta?: { ip?: string; userAgent?: string }) {
    const user = await this.repo.findUserByEmail(input.email);
    if (!user || user.deletedAt) throw unauthorized("Invalid credentials");
    if (!(await verifyPassword(input.password, user.passwordHash))) throw unauthorized("Invalid credentials");
    return this.issueSession(user.id, meta);
  }
  private async issueSession(userId: string, meta?: { ip?: string; userAgent?: string }) {
    const token = generateOpaqueToken();
    const expiresAt = sessionExpiry();
    await this.repo.createSession({ userId, tokenHash: hashToken(token), expiresAt, ...meta });
    return { token, expiresAt: expiresAt.toISOString(), userId };
  }
}
