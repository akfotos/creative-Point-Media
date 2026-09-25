import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";
import { BackgroundEffects } from "@/components/effects/BackgroundEffects";
import { ScrollToTop } from "@/components/effects/ScrollToTop";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Creative Point Media | Production & Visual Studio",
  description:
    "Creative Point Media is a multidisciplinary visual production studio crafting bold stories through commercial photography, film direction, and brand identity.",
  openGraph: {
    title: "Creative Point Media | Production & Visual Studio",
    description:
      "Creative Point Media is a multidisciplinary visual production studio crafting bold stories.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${syne.variable} h-full antialiased`}
    >
      <body className="relative min-h-full flex flex-col bg-background text-foreground">
        <BackgroundEffects />
        <ScrollToTop />
        <div className="relative z-10 flex min-h-full flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
