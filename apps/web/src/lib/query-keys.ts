export const queryKeys = {
  health: ["health"] as const,
  feed: ["feed"] as const,
  profile: (username: string) => ["profile", username] as const,
} as const;
