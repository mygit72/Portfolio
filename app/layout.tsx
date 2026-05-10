import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vansh Mahendru — ML / AI Engineer",
  description:
    "Portfolio of Vansh Mahendru — building production-grade LLM, RAG, and ML systems.",
  openGraph: {
    title: "Vansh Mahendru — ML / AI Engineer",
    description:
      "Production LLM systems, RAG pipelines, and end-to-end ML engineering.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`}>
      <body className="bg-carbon text-neutral-100">{children}</body>
    </html>
  );
}
