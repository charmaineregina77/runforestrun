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
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-slate-50 text-slate-900 antialiased`}
      >
        <header className="sticky top-0 z-20 border-b border-slate-200/60 bg-white/80 backdrop-blur-xl">
          <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-8 py-5">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-900 text-white font-semibold shadow-sm">
                RF
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-slate-900">
                  Run Forest Run
                </p>
                <p className="text-xs text-slate-500">
                  Founder Operating System
                </p>
              </div>
            </div>
            <nav className="flex flex-wrap gap-6 text-sm text-slate-600">
              <Link className="hover:text-slate-900" href="/">
                Home
              </Link>
              <Link className="hover:text-slate-900" href="/roadmap">
                Roadmap
              </Link>
              <Link className="hover:text-slate-900" href="/checklist">
                Checklist
              </Link>
              <Link className="hover:text-slate-900" href="/success">
                Success
              </Link>
              <Link className="hover:text-slate-900" href="/agents">
                Find Experts
              </Link>
              <Link className="hover:text-slate-900" href="/kpis">
                KPIs
              </Link>
            </nav>
          </div>
        </header>
        <main className="mx-auto w-full max-w-6xl px-6 py-8">{children}</main>
      </body>
    </html>
  );
}
