import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "VVS Silkeborg | Autoriseret VVS-installatør — [FIRMA NAVN]",
  description:
    "Autoriseret VVS-installatør i Silkeborg. Vi udfører VVS-installation, varmepumper, blikkenslagerarbejde, akut VVS-service og kloakarbejde. Kontakt os for tilbud.",
  alternates: {
    canonical: "https://silkeborg-vvs.dk",
    languages: { "da-DK": "https://silkeborg-vvs.dk" },
  },
  twitter: {
    card: "summary_large_image",
    title: "VVS Silkeborg | Autoriseret VVS-installatør — [FIRMA NAVN]",
    description: "Autoriseret VVS-installatør i Silkeborg. VVS-installation, varmepumper, blikkenslagerarbejde, akut VVS og kloak. Kontakt os for tilbud.",
    images: ["/images/vvs-vaerktoj-1.jpg"],
  },
  openGraph: {
    title: "VVS Silkeborg | Autoriseret VVS-installatør — [FIRMA NAVN]",
    description: "Autoriseret VVS-installatør i Silkeborg. VVS-installation, varmepumper, blikkenslagerarbejde, akut VVS og kloak.",
    url: "https://silkeborg-vvs.dk",
    images: [{ url: "/images/vvs-vaerktoj-1.jpg", alt: "VVS-værktøj og professionelt VVS-udstyr i Silkeborg" }],
  },
};

export default function Home() {
  return <HomeClient />;
}
