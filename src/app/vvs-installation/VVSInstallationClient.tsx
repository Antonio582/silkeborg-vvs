"use client";

import Link from "next/link";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import StaggerContainer, { StaggerItem } from "@/components/StaggerContainer";
import Card from "@/components/Card";
import FAQ from "@/components/FAQ";
import FAQSchema from "@/components/FAQSchema";
import CTASection from "@/components/CTASection";
import PageHeader from "@/components/PageHeader";
import ArticleSchema from "@/components/ArticleSchema";
import Byline from "@/components/Byline";

const steps = [
  {
    step: "01",
    title: "Besigtigelse og rådgivning",
    description:
      "Vi starter altid med en grundig besigtigelse af dit hjem eller erhvervslokale i Silkeborg. Her gennemgår vi dine ønsker og behov, vurderer de eksisterende installationer og rådgiver om de bedste løsninger. Vi tager højde for både funktionalitet, æstetik og dit budget, så du får en løsning der passer perfekt til netop din situation.",
  },
  {
    step: "02",
    title: "Tilbud og planlægning",
    description:
      "Efter besigtigelsen udarbejder vi et detaljeret tilbud med fast pris, så du ved præcis hvad projektet koster. Vi planlægger arbejdet grundigt, koordinerer med eventuelle andre håndværkere og sørger for at alle materialer er klar inden opstart. Gennemsigtighed er altafgørende for os — ingen skjulte omkostninger.",
  },
  {
    step: "03",
    title: "Professionel installation",
    description:
      "Vores autoriserede VVS-installatører udfører arbejdet med præcision og omhu. Vi arbejder rent og ryddeligt, beskytter dine overflader og holder dig løbende orienteret om fremdriften. Alle vandinstallationer udføres i overensstemmelse med gældende bygningsreglement og DS 439-normen for vandinstallationer.",
  },
  {
    step: "04",
    title: "Aflevering og kvalitetssikring",
    description:
      "Inden vi afleverer, gennemgår vi hele installationen sammen med dig. Vi tester alle funktioner, kontrollerer for utætheder og sikrer at alt fungerer optimalt. Du modtager dokumentation for det udførte arbejde, og vi står altid til rådighed hvis du har spørgsmål efterfølgende.",
  },
];

const services = [
  {
    title: "Badeværelsesrenovering",
    description:
      "Komplet renovering af badeværelser med nye vandrør, afløb, blandingsbatterier, toilet, håndvask og bruseniche. Vi sørger for korrekt fald mod afløb, vandtætte membraner og professionel finish.",
  },
  {
    title: "Køkkeninstallation",
    description:
      "Installation af køkkenvask, opvaskemaskine, blandingsbatteri og eventuelt vandtilslutning til køleskab med isterningmaskine. Vi tilpasser vandrør og afløb til dit nye køkkenlayout.",
  },
  {
    title: "Vandrørsrenovering",
    description:
      "Udskiftning af gamle galvaniserede eller kobberrør til moderne PEX-rør eller rustfri stålrør. Vi renoverer skjulte installationer i vægge og gulve med minimal gene for din dagligdag.",
  },
  {
    title: "Sanitetsudstyr",
    description:
      "Montering af toiletter, håndvaske, brusekabiner, badekar og tilbehør. Vi forhandler kvalitetsprodukter fra førende producenter og sikrer korrekt montering med tætte samlinger.",
  },
  {
    title: "Vandmålerinstallation",
    description:
      "Installation og udskiftning af vandmålere i overensstemmelse med forsyningsselskabets krav. Vi sørger for korrekt placering og plombering af måleren.",
  },
  {
    title: "Erhvervsinstallationer",
    description:
      "VVS-installationer til erhvervsejendomme, butikker, restauranter og kontorer i Silkeborg. Vi håndterer alt fra simpel vandtilslutning til komplekse installationsprojekter.",
  },
];

const faqItems = [
  {
    question: "Hvad koster en VVS-installation i Silkeborg?",
    answer:
      "Prisen afhænger af opgavens omfang. En simpel installation som udskiftning af et blandingsbatteri koster typisk 1.500-3.000 kr., mens en komplet badeværelsesrenovering kan koste fra 80.000-200.000 kr. Vi giver altid et uforpligtende tilbud med fast pris.",
  },
  {
    question: "Hvor lang tid tager en badeværelsesrenovering?",
    answer:
      "En typisk badeværelsesrenovering tager 2-4 uger afhængigt af størrelse og omfang. Vi koordinerer tømrer, murer, elektriker og VVS-arbejde, så processen forløber så effektivt som muligt.",
  },
  {
    question: "Skal jeg bruge en autoriseret VVS-installatør?",
    answer:
      "Ja, ifølge dansk lovgivning skal alt arbejde med vandinstallationer og afløb udføres af en autoriseret VVS-installatør. Det sikrer at arbejdet overholder gældende normer og er korrekt udført. Uautoriseret arbejde kan medføre bøder og forsikringsproblemer.",
  },
  {
    question: "Kan I hjælpe med tilladelser fra kommunen?",
    answer:
      "Ja, vi håndterer alle nødvendige anmeldelser og tilladelser i forbindelse med VVS-installationer i Silkeborg Kommune. Vi kender de lokale regler og sørger for at alt dokumentation er i orden.",
  },
];

export default function VVSInstallationClient() {
  return (
    <>
      <FAQSchema items={faqItems} />
      <ArticleSchema
        title="VVS-installation i Silkeborg"
        description="Professionel VVS-installation i Silkeborg. Vandinstallation, badeværelse, køkken og sanitetsudstyr."
        url="/vvs-installation"
        image="/images/badevaerelse-1.jpg"
      />

      <PageHeader
        title="VVS-installation i Silkeborg"
        description="Professionel vandinstallation, badeværelsesrenovering og sanitetsarbejde udført af autoriserede VVS-installatører med mange års erfaring i Silkeborg."
        breadcrumbItems={[
          { label: "Forside", href: "/" },
          { label: "VVS-installation" },
        ]}
      />

      {/* Intro content */}
      <section className="py-20 bg-sand">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-3xl">
            <AnimatedSection>
              <div className="mb-8 rounded-xl overflow-hidden">
                <Image
                  src="/images/badevaerelse-1.jpg"
                  alt="Professionel badeværelsesrenovering og VVS-installation i Silkeborg"
                  width={940}
                  height={650}
                  className="w-full h-auto object-cover rounded-xl"
                />
              </div>
              <h2 className="font-heading text-3xl text-gray-900 mb-6">
                Autoriseret VVS-installation til private og erhverv
              </h2>
              <Byline />
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Når du skal have udført VVS-installation i Silkeborg, er det vigtigt at vælge en autoriseret
                  VVS-installatør med den rette erfaring og ekspertise. Hos [FIRMA NAVN] har vi mange års
                  erfaring med alle typer vandinstallationer — fra simple reparationer til omfattende
                  renoveringsprojekter i hele Silkeborg og omegn. Har du brug for{" "}
                  <Link href="/akut-vvs" className="text-teal hover:text-teal-dark underline">akut VVS-hjælp</Link>, rykker vi ud inden for 60 minutter.
                </p>
                <p>
                  Vores team af dygtige VVS-folk besidder den nødvendige VVS-attest og holder sig konstant
                  opdateret med de nyeste teknologier og bygningsreglementer. Uanset om du bor i Silkeborg C,
                  Them, Kjellerup, Sorring, Funder, Balle, Alderslyst eller Søholt, er vi klar til at hjælpe
                  dig med professionel VVS-installation af højeste kvalitet.
                </p>
                <p>
                  Vi arbejder med anerkendte materialer og produkter fra førende producenter som Grohe,
                  Hansgrohe, Geberit og Uponor. Det sikrer at dine installationer holder i mange år og
                  fungerer optimalt. Vores fokus er altid på kvalitet, holdbarhed og kundetilfredshed.
                </p>
                <p>
                  Som lokal VVS-installatør kender vi de specifikke forhold i Silkeborg-området, herunder
                  vandkvalitet, trykforhold og de typiske installationstyper i områdets boliger. Den viden
                  bruger vi aktivt til at rådgive dig om de bedste løsninger for dit hjem eller din virksomhed.
                  Vi udfører også <Link href="/kloak-afloeb" className="text-teal hover:text-teal-dark underline">kloakarbejde og afløbsrensning</Link> i hele kommunen.
                </p>
                <p>
                  Vi ved at en VVS-installation er en investering i din boligs komfort og værdi. Derfor
                  prioriterer vi altid grundig planlægning, rene arbejdsprocesser og gennemsigtig kommunikation
                  gennem hele forløbet. Fra den første besigtigelse til den endelige aflevering holder vi dig
                  informeret og sikrer at resultatet lever op til dine forventninger.
                </p>
                <p>
                  Vores erfaring spænder over alt fra nybyggeri og totalrenoveringer til mindre reparationer
                  og udskiftninger. Vi samarbejder tæt med tømrere, elektrikere og murere ved større
                  byggeprojekter, så koordineringen forløber smertefrit. Uanset opgavens størrelse behandler
                  vi dit hjem med respekt og efterlader arbejdsområdet rent og ryddeligt.
                </p>
                <p>
                  Vandkvaliteten i Silkeborg-området er generelt god, men kalkindholdet kan variere
                  afhængigt af den præcise beliggenhed. Vi tager altid højde for de lokale vandforhold
                  når vi rådgiver om materialevalg og rørtyper. For boliger med hårdt vand kan vi
                  installere blødgøringsanlæg der forlænger levetiden på blandingsbatterier,
                  vaskemaskiner og opvaskemaskiner markant.
                </p>
                <p>
                  Ved badeværelsesrenoveringer i Silkeborg sørger vi for at alle vådrumskrav er
                  opfyldt i henhold til DS 439 og BR18. Det indebærer korrekt membranopsætning,
                  fald mod gulvafløb og tætte rørgennemføringer. En professionelt udført
                  badeværelsesrenovering øger din boligs værdi og giver dig et funktionelt og
                  æstetisk flot badeværelse i mange år fremover. Se vores{" "}
                  <Link href="/priser" className="text-teal hover:text-teal-dark underline">gennemsigtige VVS-priser</Link> for
                  Silkeborg-området, eller <Link href="/varme-varmepumper" className="text-teal hover:text-teal-dark underline">læs om vores varmeløsninger</Link>.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Image section */}
      <section className="py-12 bg-white border-y border-gray-200">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl overflow-hidden">
              <Image
                src="/images/kobberroer-1.jpg"
                alt="Kobberrør og VVS-materialer til vandinstallation i Silkeborg"
                width={940}
                height={650}
                className="w-full h-auto object-cover rounded-xl"
              />
            </div>
            <div className="rounded-xl overflow-hidden">
              <Image
                src="/images/badevaerelse-2.jpg"
                alt="Moderne badeværelse med ny VVS-installation i Silkeborg"
                width={940}
                height={650}
                className="w-full h-auto object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Step by step */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <AnimatedSection>
            <h2 className="font-heading text-3xl text-gray-900 mb-4 text-center">
              Sådan forløber en VVS-installation
            </h2>
            <p className="text-gray-600 text-center mb-16 max-w-xl mx-auto">
              Vi guider dig trygt gennem hele processen — fra første henvendelse til færdigt resultat.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {steps.map((step) => (
              <StaggerItem key={step.step}>
                <div className="flex gap-6">
                  <span className="font-heading text-5xl text-teal/20 shrink-0">{step.step}</span>
                  <div>
                    <h3 className="font-heading text-xl text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20 bg-sand">
        <div className="max-w-[1200px] mx-auto px-6">
          <AnimatedSection>
            <h2 className="font-heading text-3xl text-gray-900 mb-4 text-center">
              VVS-installationer vi udfører
            </h2>
            <p className="text-gray-600 text-center mb-16 max-w-xl mx-auto">
              Vi dækker alle typer VVS-installationer for private og erhverv i Silkeborg.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <StaggerItem key={service.title}>
                <Card className="h-full">
                  <h3 className="font-heading text-lg text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Internal links */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="max-w-[1200px] mx-auto px-6">
          <AnimatedSection>
            <h2 className="font-heading text-2xl text-gray-900 mb-6">Relaterede ydelser</h2>
            <div className="flex flex-wrap gap-4">
              <Link href="/varme-varmepumper" className="text-teal hover:text-teal-dark transition-colors border border-gray-200 rounded-lg px-4 py-2 text-sm">
                Varme og varmepumper
              </Link>
              <Link href="/blikkenslager" className="text-teal hover:text-teal-dark transition-colors border border-gray-200 rounded-lg px-4 py-2 text-sm">
                Blikkenslagerarbejde
              </Link>
              <Link href="/kloak-afloeb" className="text-teal hover:text-teal-dark transition-colors border border-gray-200 rounded-lg px-4 py-2 text-sm">
                Kloak og afløb
              </Link>
              <Link href="/akut-vvs" className="text-teal hover:text-teal-dark transition-colors border border-gray-200 rounded-lg px-4 py-2 text-sm">
                Akut VVS-service
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-sand">
        <div className="max-w-[800px] mx-auto px-6">
          <AnimatedSection>
            <h2 className="font-heading text-3xl text-gray-900 mb-12 text-center">
              Spørgsmål om VVS-installation
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <FAQ items={faqItems} />
          </AnimatedSection>
        </div>
      </section>

      <CTASection />
    </>
  );
}
