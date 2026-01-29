import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "ББС 110",
  description:
    "Офіційна сторінка Батальйону безпілотних систем 110 ОМБр імені Марка Безручка. Технологічна боротьба за перемогу України.",
  metadataBase: new URL("https://bbs110.army/"), // 🔹 Замінити на твій домен
  alternates: {
    languages: {
      uk: "/",
    },
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },

  openGraph: {
    title: "ББС 110 | Батальйон безпілотних систем",
    description:
      "Батальйон безпілотних систем 110 ОМБр — FPV, розвідка, точність, перемога.",
    url: "https://bbs110.army/",
    siteName: "ББС 110",
    locale: "uk_UA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ББС 110 | Батальйон безпілотних систем",
    description: "Технологічна боротьба за перемогу України.",
  },
  other: {
    "Content-Language": "uk",
    "geo.region": "UA",
    "geo.placename": "Ukraine",
    "language": "uk",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
