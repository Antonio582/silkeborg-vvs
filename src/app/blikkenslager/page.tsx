import type { Metadata } from "next";
import BlikkenslagerClient from "./BlikkenslagerClient";

export const metadata: Metadata = {
  title: "Blikkenslager Silkeborg | Tagrender og zinkarbejde",
  description:
    "Professionelt blikkenslagerarbejde i Silkeborg. Tagrender, nedløbsrør, inddækninger og zinkarbejde. Autoriseret og erfaren blikkenslager. Ring [TELEFON].",
  alternates: {
    canonical: "https://silkeborg-vvs.dk/blikkenslager",
    languages: { "da-DK": "https://silkeborg-vvs.dk/blikkenslager" },
  },
  twitter: {
    card: "summary_large_image",
    title: "Blikkenslager Silkeborg | Tagrender og zinkarbejde",
    description: "Professionelt blikkenslagerarbejde i Silkeborg. Tagrender, nedløbsrør, inddækninger og zinkarbejde. Ring for tilbud.",
    images: ["/images/tagrender-1.jpg"],
  },
  openGraph: {
    title: "Blikkenslager Silkeborg | Tagrender og zinkarbejde",
    description: "Professionelt blikkenslagerarbejde i Silkeborg. Tagrender, nedløbsrør, inddækninger og zinkarbejde.",
    url: "https://silkeborg-vvs.dk/blikkenslager",
    images: [{ url: "/images/tagrender-1.jpg", alt: "Tagrender og blikkenslagerarbejde i Silkeborg" }],
  },
};

export default function BlikkenslagerPage() {
  return <BlikkenslagerClient />;
}
