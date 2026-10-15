import type { PrismaClient } from "@prisma/client";
export class MessagingRepository {
  constructor(private db: PrismaClient) {}
  createConversation(memberIds: string[]) {
    return this.db.conversation.create({ data: { participants: { create: memberIds.map((userId) => ({ userId })) } } });
  }
  postMessage(conversationId: string, senderId: string, body: string) {
    return this.db.message.create({ data: { conversationId, senderId, body } });
  }
  history(conversationId: string, limit = 30) {
    return this.db.message.findMany({ where: { conversationId }, orderBy: { createdAt: "desc" }, take: limit });
  }
}
