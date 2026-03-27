import type { Metadata } from "next";
import KontaktClient from "./KontaktClient";

export const metadata: Metadata = {
  title: "Kontakt VVS Silkeborg | Få et uforpligtende tilbud",
  description:
    "Kontakt [FIRMA NAVN] i Silkeborg. Få et uforpligtende tilbud på VVS-arbejde, varmepumper, blikkenslager eller kloakarbejde. Ring [TELEFON] eller udfyld formularen.",
  alternates: {
    canonical: "https://silkeborg-vvs.dk/kontakt",
    languages: { "da-DK": "https://silkeborg-vvs.dk/kontakt" },
  },
  twitter: {
    card: "summary_large_image",
    title: "Kontakt VVS Silkeborg | Få et uforpligtende tilbud",
    description: "Kontakt os for et uforpligtende tilbud på VVS-arbejde i Silkeborg. Ring eller udfyld formularen. Vi svarer hurtigt.",
    images: ["/images/vvs-vaerktoj-1.jpg"],
  },
  openGraph: {
    title: "Kontakt VVS Silkeborg | Få et uforpligtende tilbud",
    description: "Kontakt os for et uforpligtende tilbud på VVS-arbejde i Silkeborg. Ring eller udfyld formularen.",
    url: "https://silkeborg-vvs.dk/kontakt",
    images: [{ url: "/images/vvs-vaerktoj-1.jpg", alt: "Kontakt VVS-installatør i Silkeborg" }],
  },
};

export default function KontaktPage() {
  return <KontaktClient />;
}
