import type { ChatMessageEvent } from "./chat.events.js";
export interface Pub { publish(channel: string, payload: string): Promise<unknown> | unknown }
export class ChatGateway {
  constructor(private pub: Pub) {}
  broadcastMessage(evt: ChatMessageEvent) {
    return this.pub.publish(`chat:${evt.conversationId}`, JSON.stringify(evt));
  }
  broadcastTyping(conversationId: string, userId: string, typing: boolean) {
    return this.pub.publish(`chat:${conversationId}:typing`, JSON.stringify({ userId, typing }));
  }
}
