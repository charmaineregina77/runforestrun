import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Run Forest Run",
  description:
    "The AI co-founder for first-time e-commerce builders. Turn data into daily growth actions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-white text-slate-900 antialiased`}
      >
        <header className="border-b border-slate-200 bg-white">
          <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-white font-bold">
                RF
              </div>
              <div>
                <p className="text-sm uppercase tracking-widest text-slate-900">
                  Run Forest Run
                </p>
                <p className="text-xs text-slate-500">
                  Founder Operating System
                </p>
              </div>
            </div>
            <nav className="flex flex-wrap gap-4 text-sm text-slate-600">
              <Link className="hover:text-slate-900" href="/">
                Home
              </Link>
              <Link className="hover:text-slate-900" href="/roadmap">
                Roadmap
              </Link>
              <Link className="hover:text-slate-900" href="/checklist">
                Checklist
              </Link>
              <Link className="hover:text-slate-900" href="/kpis">
                KPIs
              </Link>
              <Link className="hover:text-slate-900" href="/onboarding">
                Onboarding
              </Link>
            </nav>
          </div>
        </header>
        <main className="mx-auto w-full max-w-6xl px-6 py-8">{children}</main>
      </body>
    </html>
  );
}
