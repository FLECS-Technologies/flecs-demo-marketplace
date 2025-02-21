import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/styles/gradient-border.css";
import "@/styles/grid-background.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "FLECS Marketplace Demo",
  description: "Experience the power of FLECS Marketplace in this interactive demo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} overflow-hidden`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className="fixed inset-0 bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
            <div className="absolute inset-0 bg-grid-slate-200/50 dark:bg-grid-slate-800/50 bg-[size:20px_20px]" />
          </div>
          <main className="relative min-h-screen flex items-center justify-center">
            <div className="w-full flex items-center justify-center py-8">
              {children}
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}