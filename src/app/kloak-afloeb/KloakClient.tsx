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

const timeline = [
  {
    year: "Besigtigelse",
    title: "TV-inspektion og opmåling",
    description:
      "Vi starter med en grundig TV-inspektion af dit eksisterende kloaksystem for at kortlægge tilstanden og identificere eventuelle problemer. Vi opmåler alle ledninger og dokumenterer med video og rapport.",
  },
  {
    year: "Planlægning",
    title: "Projekt og tilladelser",
    description:
      "Vi udarbejder et detaljeret projekt med tegninger og beregninger. Vi sørger for alle nødvendige tilladelser fra Silkeborg Kommune og koordinerer med forsyningsselskabet om tilslutning.",
  },
  {
    year: "Udførelse",
    title: "Gravearbejde og installation",
    description:
      "Vi udfører gravearbejdet skånsomt og installerer nye kloakrør, brønde og tilslutninger. Vi arbejder med moderne materialer og metoder for at sikre lang levetid og optimal funktion.",
  },
  {
    year: "Separering",
    title: "Adskillelse af regnvand og spildevand",
    description:
      "Ved kloakseparering adskiller vi regnvand og spildevand i to separate systemer. Regnvand ledes til nedsivning eller regnvandssystem, mens spildevand føres til renseanlægget.",
  },
  {
    year: "Test",
    title: "Tæthedsprøvning og TV-kontrol",
    description:
      "Efter installation udfører vi tæthedsprøvning af alle samlinger og en afsluttende TV-inspektion for at dokumentere at alt er korrekt udført og tæt.",
  },
  {
    year: "Aflevering",
    title: "Retablering og dokumentation",
    description:
      "Vi retablerer haven, indkørslen eller terrassens overflader og afleverer komplet dokumentation med tegninger, fotos og inspektionsrapporter. Alt indsendes til kommunen.",
  },
];

const faqItems = [
  {
    question: "Hvad koster kloakseparering i Silkeborg?",
    answer:
      "Kloakseparering koster typisk 30.000-80.000 kr. for et standard parcelhus i Silkeborg, afhængigt af grundens størrelse, ledningernes tilstand og omfanget af retableringsarbejdet. Vi giver altid et uforpligtende tilbud efter besigtigelse med TV-inspektion.",
  },
  {
    question: "Er kloakseparering lovpligtigt i Silkeborg?",
    answer:
      "Silkeborg Kommune kan påbyde kloakseparering som led i spildevandsplanen. Når du modtager et påbud, har du typisk en frist på 1-3 år til at gennemføre separeringen. Vi hjælper dig med hele processen fra planlægning til færdigmelding.",
  },
  {
    question: "Hvad er en TV-inspektion af kloak?",
    answer:
      "En TV-inspektion er en undersøgelse af kloakledningerne med et specialkamera der føres gennem rørene. Kameraet optager video der viser rørenes tilstand, eventuelle skader, rodindtrængning, sætningsskader og tilstopninger. Det er den mest effektive metode til at vurdere kloakkens tilstand.",
  },
  {
    question: "Hvor lang tid tager en kloakrenovering?",
    answer:
      "En typisk kloakrenovering med separering tager 3-7 arbejdsdage afhængigt af projektets omfang. Mindre reparationer kan klares på en enkelt dag, mens større projekter med omfattende gravearbejde kan tage op til 2 uger. Vi planlægger altid arbejdet for minimal gene.",
  },
  {
    question: "Kan I lave no-dig kloakrenovering?",
    answer:
      "Ja, vi tilbyder no-dig metoder som strømpeforing (relining) til renovering af kloakrør uden opgravning. Denne metode er velegnet når rørene har mindre skader og ligger under terrasser, indkørsler eller andre svært tilgængelige områder.",
  },
];

export default function KloakClient() {
  return (
    <>
      <FAQSchema items={faqItems} />
      <ArticleSchema
        title="Kloak og afløb i Silkeborg"
        description="Professionelt kloakarbejde i Silkeborg. Kloakseparering, TV-inspektion og afløbsrensning."
        url="/kloak-afloeb"
        image="/images/kloakreparation-1.jpg"
      />

      <PageHeader
        title="Kloak og afløb i Silkeborg"
        description="Professionelt kloakarbejde med TV-inspektion, kloakseparering, kloakrenovering og afløbsrensning i hele Silkeborg."
        breadcrumbItems={[
          { label: "Forside", href: "/" },
          { label: "Kloak og afløb" },
        ]}
      />

      {/* Intro */}
      <section className="py-20 bg-sand">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-3xl">
            <AnimatedSection>
              <div className="mb-8 rounded-xl overflow-hidden">
                <Image
                  src="/images/kloakreparation-1.jpg"
                  alt="Kloakrenovering og afløbsarbejde udført i Silkeborg"
                  width={940}
                  height={650}
                  className="w-full h-auto object-cover rounded-xl"
                />
              </div>
              <h2 className="font-heading text-3xl text-gray-900 mb-6">
                Autoriseret kloakarbejde i Silkeborg
              </h2>
              <Byline />
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Et velfungerende kloaksystem er afgørende for din boligs sundhed og værdi. Med tiden
                  kan kloakrør blive beskadiget af rødder, sætninger, korrosion eller aldersrelateret
                  slid, hvilket kan føre til tilstopning, oversvømmelse og lugtgener. Hos Søhøjlandets VVS
                  er vi specialister i alle aspekter af kloakarbejde i Silkeborg.
                </p>
                <p>
                  Som autoriseret kloakmester udfører vi alt fra simple afløbsrensninger til omfattende
                  kloakrenoveringer og kloakseparering. Vi anvender de nyeste teknologier, herunder
                  TV-inspektion med højopløselige kameraer, no-dig metoder som strømpeforing og
                  moderne materialer der sikrer lang levetid.
                </p>
                <p>
                  Mange boligejere i Silkeborg Kommune står over for krav om kloakseparering, hvor
                  regnvand og spildevand skal adskilles i separate systemer. Vi har stor erfaring med
                  separeringsprojekter og guider dig trygt gennem hele processen — fra ansøgning hos
                  kommunen til færdigmelding og retablering af haven.
                </p>
                <p>
                  Vi dækker alle områder i Silkeborg Kommune, herunder Silkeborg C, Them, Kjellerup,
                  Sorring, Funder, Balle, Alderslyst og Søholt. Uanset om du har brug for akut
                  afløbsrensning, planlagt kloakrenovering eller kloakseparering, er vi klar til at
                  hjælpe med professionelt kloakarbejde af højeste kvalitet.
                </p>
                <p>
                  Mange ældre boliger i Silkeborg har kloaksystemer fra 1960erne og 1970erne, der
                  er udført i betonrør eller lerøbsrør. Disse materialer har en begrænset levetid
                  og er ofte ramt af revner, forskudte samlinger og rodindtrængning. En rettidig
                  renovering forebygger pludselige sammenbrud og de deraf følgende vandskader og
                  lugtgener. Vi anbefaler en TV-inspektion hvert 5.-10. år for at holde øje med
                  kloakkens tilstand og planlægge eventuel renovering i god tid.
                </p>
                <p>
                  Korrekt regnvandshåndtering bliver stadig vigtigere i takt med de øgede
                  nedbørsmængder. Vi rådgiver om lokal afledning af regnvand (LAR) med faskiner,
                  regnbede og permeable belægninger, der aflaster kloaksystemet og bidrager til
                  et sundere lokalmiljø. Silkeborg Kommune stiller krav om separatkloakering i
                  mange områder, og vi hjælper dig med at overholde disse krav på den mest
                  hensigtsmæssige og økonomiske måde.
                </p>
                <p>
                  Er kloakproblemet akut — for eksempel oversvømmelse fra et tilstoppet afløb
                  eller kloakopstigning i kælderen — tilbyder vi{" "}
                  <Link href="/akut-vvs" className="text-teal hover:text-teal-dark underline">akut VVS-udrykning</Link> med
                  responstid på 30-60 minutter i Silkeborg. Se også vores{" "}
                  <Link href="/priser" className="text-teal hover:text-teal-dark underline">priser for kloakarbejde</Link> eller{" "}
                  <Link href="/kontakt" className="text-teal hover:text-teal-dark underline">kontakt os direkte</Link> for
                  en uforpligtende besigtigelse. Vi udfører desuden{" "}
                  <Link href="/blikkenslager" className="text-teal hover:text-teal-dark underline">blikkenslagerarbejde</Link> i
                  forbindelse med nedløbsrør og regnvandsafledning fra taget.
                </p>
              </div>

              {/* Extra image */}
              <div className="mt-8 rounded-xl overflow-hidden">
                <Image
                  src="/images/kloakreparation-2.jpg"
                  alt="TV-inspektion af kloakledning i Silkeborg-bolig"
                  width={940}
                  height={650}
                  className="w-full h-auto object-cover rounded-xl"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white border-y border-gray-200">
        <div className="max-w-[800px] mx-auto px-6">
          <AnimatedSection>
            <h2 className="font-heading text-3xl text-gray-900 mb-4 text-center">
              Sådan forløber et kloakprojekt
            </h2>
            <p className="text-gray-600 text-center mb-16 max-w-xl mx-auto">
              Vi guider dig gennem hele processen fra inspektion til færdigt resultat.
            </p>
          </AnimatedSection>

          <StaggerContainer className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 top-0 bottom-0 w-px bg-gray-200" />

            <div className="space-y-12">
              {timeline.map((item) => (
                <StaggerItem key={item.year}>
                  <div className="flex gap-8 relative">
                    <div className="relative z-10 shrink-0">
                      <div className="w-8 h-8 bg-teal rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full" />
                      </div>
                    </div>
                    <div className="pb-2">
                      <span className="text-teal text-sm font-medium">{item.year}</span>
                      <h3 className="font-heading text-lg text-gray-900 mt-1 mb-2">{item.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-sand">
        <div className="max-w-[1200px] mx-auto px-6">
          <AnimatedSection>
            <h2 className="font-heading text-3xl text-gray-900 mb-12 text-center">
              Kloakydelser vi tilbyder
            </h2>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "TV-inspektion",
                desc: "Grundig undersøgelse af kloakledninger med specialkamera. Vi leverer detaljeret rapport med video og vurdering af rørenes tilstand, skadesomfang og anbefalinger til udbedring.",
              },
              {
                title: "Kloakseparering",
                desc: "Adskillelse af regnvand og spildevand i separate systemer som påbudt af Silkeborg Kommune. Vi håndterer hele processen inkl. ansøgning, gravearbejde, installation og færdigmelding.",
              },
              {
                title: "Kloakrenovering",
                desc: "Renovering og udskiftning af beskadigede kloakledninger, brønde og tilslutninger. Vi bruger moderne materialer der sikrer mindst 50 års levetid.",
              },
              {
                title: "Afløbsrensning",
                desc: "Professionel rensning af tilstoppede afløb med mekanisk oprensning og højtryksrensning. Vi finder og fjerner årsagen til tilstopningen permanent.",
              },
              {
                title: "Strømpeforing (no-dig)",
                desc: "Renovering af kloakrør indefra uden opgravning. En glasfiberstrømpe føres ind i røret og hærdes, så der dannes et nyt rør indeni det gamle.",
              },
              {
                title: "Dræning og omfangsdræn",
                desc: "Installation og renovering af dræn omkring fundamenter for at forhindre fugtindtrængning i kældre og fundament. Dræn er afgørende for bygningens langtidsholdbarhed.",
              },
            ].map((service) => (
              <StaggerItem key={service.title}>
                <Card className="h-full">
                  <h3 className="font-heading text-lg text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
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
              <Link href="/vvs-installation" className="text-teal hover:text-teal-dark transition-colors border border-gray-200 rounded-lg px-4 py-2 text-sm">
                VVS-installation
              </Link>
              <Link href="/akut-vvs" className="text-teal hover:text-teal-dark transition-colors border border-gray-200 rounded-lg px-4 py-2 text-sm">
                Akut VVS-service
              </Link>
              <Link href="/blikkenslager" className="text-teal hover:text-teal-dark transition-colors border border-gray-200 rounded-lg px-4 py-2 text-sm">
                Blikkenslagerarbejde
              </Link>
              <Link href="/priser" className="text-teal hover:text-teal-dark transition-colors border border-gray-200 rounded-lg px-4 py-2 text-sm">
                Se priser
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
              Spørgsmål om kloak og afløb
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
