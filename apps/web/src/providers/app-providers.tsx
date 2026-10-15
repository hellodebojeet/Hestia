"use client";

import { QueryProvider } from "./query-provider.js";
import { ThemeProvider } from "./theme-provider.js";

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <QueryProvider>{children}</QueryProvider>
    </ThemeProvider>
  );
}
