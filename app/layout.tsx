import { ThemeProvider } from "@/components/providers/theme-provider";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Noot",
  description: "The quick & easy note tool.",
  icons: {
    icon: [
      { media: "(prefers-color-scheme: light)", url: "/logo.svc", href: "/logo.svg" },
      { media: "(prefers-color-scheme: dark)", url: "/logo-dark.svc", href: "/logo-dark.svg" },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange storageKey="noot-theme">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
