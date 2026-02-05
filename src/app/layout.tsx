import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Peak Automations | Custom AI Solutions for Sun Valley",
  description:
    "We build intelligent automations for Sun Valley's leading businesses. Locally managed in Ketchum, powered by world-class developers in South America.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
