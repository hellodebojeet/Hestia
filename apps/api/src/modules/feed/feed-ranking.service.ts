// Stage 1: chronological. Ranking hooks added when measurements justify it.
export function rankChronological<T extends { createdAt: Date }>(items: T[]): T[] {
  return [...items].sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
}
