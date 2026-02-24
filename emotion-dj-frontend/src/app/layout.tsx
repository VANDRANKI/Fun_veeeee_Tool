import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vibe Canvas: Your Mood, Decoded",
  description:
    "Type how you feel. Watch Vibe Canvas turn your words into color, creatures, and emotion music vibes.",
  openGraph: {
    title: "Vibe Canvas",
    description: "Your mood, decoded by AI.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
