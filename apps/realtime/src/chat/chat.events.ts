export const CHAT_MESSAGE = "chat:message";
export const CHAT_TYPING = "chat:typing";
export interface ChatMessageEvent { conversationId: string; senderId: string; body: string; createdAt: string }
