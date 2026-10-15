"use client";

import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../../lib/query-keys.js";
import { cn } from "../../lib/utils.js";

type State = "checking" | "operational" | "offline";

export function StatusPill() {
  const query = useQuery({
    queryKey: queryKeys.health,
    queryFn: async () => {
      const res = await fetch("/api/health", { cache: "no-store" });
      if (!res.ok) throw new Error("unhealthy");
      return res.json() as Promise<{ status: string }>;
    },
    retry: false,
    refetchInterval: 30_000,
  });

  const state: State = query.isPending
    ? "checking"
    : query.isSuccess
      ? "operational"
      : "offline";

  const label =
    state === "operational"
      ? "All systems operational"
      : state === "checking"
        ? "Checking status…"
        : "Offline preview mode";

  return (
    <span
      role="status"
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium",
        state === "operational" &&
          "border-emerald-200 bg-emerald-50 text-emerald-800",
        state === "checking" && "border-stone-200 bg-white text-stone-600",
        state === "offline" && "border-amber-200 bg-amber-50 text-amber-800",
      )}
    >
      <span className="relative flex h-2 w-2">
        <span
          className={cn(
            "absolute inline-flex h-full w-full animate-ping rounded-full opacity-60",
            state === "operational" && "bg-emerald-500",
            state === "checking" && "bg-stone-400",
            state === "offline" && "bg-amber-500",
          )}
        />
        <span
          className={cn(
            "relative inline-flex h-2 w-2 rounded-full",
            state === "operational" && "bg-emerald-600",
            state === "checking" && "bg-stone-500",
            state === "offline" && "bg-amber-600",
          )}
        />
      </span>
      {label}
    </span>
  );
}
