import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import ChatWidget from "@/components/ChatWidget";

export const metadata: Metadata = {
  title: "Peak Automations | Agentes de IA para Negocios",
  description:
    "Automatiza llamadas, chat y captación de leads con agentes de IA que trabajan 24/7. Ketchum, Idaho & Corrientes, Argentina.",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">
        <LanguageProvider>
          {children}
          <ChatWidget />
        </LanguageProvider>
      </body>
    </html>
  );
}
