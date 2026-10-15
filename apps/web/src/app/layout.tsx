import type { Metadata } from "next";
import { AppProviders } from "../providers/app-providers.js";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Hestia — Gather around what matters",
  description:
    "Hestia is an independent, privacy-first social network. Friends, feeds, and conversations on infrastructure you can inspect and self-host.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
