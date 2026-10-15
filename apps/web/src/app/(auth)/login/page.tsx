import Link from "next/link";
import { Button } from "@hestia/ui";

export default function LoginPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold tracking-tight">Welcome back</h1>
      <p className="mt-2 text-sm text-stone-600">
        Sign-in opens with the public launch. Hestia is in private
        development — this page is a placeholder.
      </p>
      <form className="mt-6 space-y-4">
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
            placeholder="••••••••"
            className="mt-1 block h-10 w-full rounded-lg border border-stone-300 px-3"
          />
        </label>
        <Button type="submit" className="w-full" disabled>
          Log in (coming soon)
        </Button>
      </form>
      <p className="mt-6 text-center text-sm text-stone-600">
        New here?{" "}
        <Link href="/register" className="font-medium text-orange-700">
          Create an account
        </Link>
      </p>
    </div>
  );
}
