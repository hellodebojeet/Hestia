import Link from "next/link";
import { Button } from "@hestia/ui";

export default function RegisterPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold tracking-tight">Claim your username</h1>
      <p className="mt-2 text-sm text-stone-600">
        Registration opens with the public launch. This page is a placeholder
        for now.
      </p>
      <form className="mt-6 space-y-4">
        <label className="block text-sm">
          <span className="font-medium">Username</span>
          <input
            type="text"
            required
            minLength={3}
            placeholder="hearth_keeper"
            className="mt-1 block h-10 w-full rounded-lg border border-stone-300 px-3"
          />
        </label>
        <label className="block text-sm">
          <span className="font-medium">Email</span>
          <input
            type="email"
            required
            placeholder="you@example.com"
            className="mt-1 block h-10 w-full rounded-lg border border-stone-300 px-3"
          />
        </label>
        <label className="block text-sm">
          <span className="font-medium">Password</span>
          <input
            type="password"
            required
            minLength={8}
            placeholder="At least 8 characters"
            className="mt-1 block h-10 w-full rounded-lg border border-stone-300 px-3"
          />
        </label>
        <Button type="submit" className="w-full" disabled>
          Create account (coming soon)
        </Button>
      </form>
      <p className="mt-6 text-center text-sm text-stone-600">
        Already have one?{" "}
        <Link href="/login" className="font-medium text-orange-700">
          Log in
        </Link>
      </p>
    </div>
  );
}
