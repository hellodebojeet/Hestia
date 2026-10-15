import { forbidden } from "../../lib/errors.js";
import type { MessagingRepository } from "./messaging.repository.js";
// HTTP history + thread creation; live delivery via apps/realtime chat gateway.
export class MessagingService {
  constructor(private repo: MessagingRepository) {}
  async post(conversationId: string, senderId: string, participantIds: string[], body: string) {
    if (!participantIds.includes(senderId)) throw forbidden("Not a participant");
    return this.repo.postMessage(conversationId, senderId, body);
  }
}
