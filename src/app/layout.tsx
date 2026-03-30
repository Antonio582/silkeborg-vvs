import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollNavigation from "@/components/ScrollNavigation";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://silkeborg-vvs.dk"),
  title: {
    default: "VVS Silkeborg | Autoriseret VVS-installatør — Søhøjlandets VVS",
    template: "%s | Søhøjlandets VVS — VVS Silkeborg",
  },
  description:
    "Autoriseret VVS-installatør i Silkeborg. Vi tilbyder VVS-installation, varmepumper, blikkenslagerarbejde, akut VVS og kloak. Kontakt os i dag",
  keywords: [
    "vvs silkeborg",
    "vvs installatør silkeborg",
    "blikkenslager silkeborg",
    "vvs akut silkeborg",
    "varmepumpe silkeborg",
    "kloakmester silkeborg",
    "varmepumpe installation silkeborg",
  ],
  alternates: {
    canonical: "https://silkeborg-vvs.dk",
    languages: {
      "da-DK": "https://silkeborg-vvs.dk",
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "VVS Silkeborg | Autoriseret VVS-installatør — Søhøjlandets VVS",
    description:
      "Autoriseret VVS-installatør i Silkeborg. Vi tilbyder VVS-installation, varmepumper, blikkenslagerarbejde, akut VVS og kloak. Kontakt os i dag",
    images: ["/images/vvs-vaerktoj-1.jpg"],
  },
  openGraph: {
    type: "website",
    locale: "da_DK",
    siteName: "Søhøjlandets VVS",
    url: "https://silkeborg-vvs.dk",
    images: [
      {
        url: "/images/vvs-vaerktoj-1.jpg",
        width: 940,
        height: 650,
        alt: "VVS-værktøj og professionelt VVS-udstyr i Silkeborg",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="da" className={`${inter.variable} h-full antialiased`}>
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col font-body">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <ScrollNavigation />
      </body>
    </html>
  );
}
