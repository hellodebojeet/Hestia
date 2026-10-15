export interface WebEnv { NEXT_PUBLIC_API_URL: string }
export function loadWebEnv(env: NodeJS.ProcessEnv = process.env): WebEnv {
  const NEXT_PUBLIC_API_URL = env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000";
  if (!NEXT_PUBLIC_API_URL.startsWith("http")) throw new Error("NEXT_PUBLIC_API_URL must be a URL");
  return { NEXT_PUBLIC_API_URL };
}
