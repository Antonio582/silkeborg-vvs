import type { Metadata } from "next";
import VVSInstallationClient from "./VVSInstallationClient";

export const metadata: Metadata = {
  title: "VVS-installation i Silkeborg | Autoriseret VVS-installatør",
  description:
    "Professionel VVS-installation i Silkeborg. Vandinstallation, badeværelse, køkken, vandrør og sanitetsudstyr. Autoriseret VVS-installatør med mange års erfaring. Kontakt os.",
  alternates: {
    canonical: "https://silkeborg-vvs.dk/vvs-installation",
    languages: { "da-DK": "https://silkeborg-vvs.dk/vvs-installation" },
  },
  twitter: {
    card: "summary_large_image",
    title: "VVS-installation i Silkeborg | Autoriseret VVS-installatør",
    description: "Professionel VVS-installation i Silkeborg. Vandinstallation, badeværelse, køkken og sanitetsudstyr. Kontakt os for tilbud.",
    images: ["/images/badevaerelse-1.jpg"],
  },
  openGraph: {
    title: "VVS-installation i Silkeborg | Autoriseret VVS-installatør",
    description: "Professionel VVS-installation i Silkeborg. Vandinstallation, badeværelse, køkken og sanitetsudstyr.",
    url: "https://silkeborg-vvs.dk/vvs-installation",
    images: [{ url: "/images/badevaerelse-1.jpg", alt: "Badeværelsesrenovering og VVS-installation i Silkeborg" }],
  },
};

export default function VVSInstallationPage() {
  return <VVSInstallationClient />;
}
