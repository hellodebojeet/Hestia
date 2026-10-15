import Link from "next/link";
import { Button } from "@hestia/ui";

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-bold tracking-tight">About Hestia</h1>
      <p className="mt-4 leading-relaxed text-stone-600">
        Named for the hearth — the warm center of the home — Hestia is a
        social network designed around people you actually know. Feeds stay
        chronological until real usage justifies ranking. Stories expire.
        Privacy rules live on the server, where they can be enforced.
      </p>
      <p className="mt-4 leading-relaxed text-stone-600">
        The codebase is a TypeScript monorepo: a Next.js client, a Fastify
        API, a WebSocket realtime gateway, and BullMQ workers, backed by one
        PostgreSQL schema and Redis timelines.
      </p>
      <div className="mt-8">
        <Link href="/">
          <Button variant="outline">Back home</Button>
        </Link>
      </div>
    </main>
  );
}
