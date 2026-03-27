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

const faqItems = [
  {
    question: "Hvad koster nye tagrender i Silkeborg?",
    answer:
      "Nye tagrender i zink koster typisk 250-450 kr. pr. løbende meter inkl. montering. En komplet udskiftning af tagrender og nedløbsrør på et standard parcelhus koster typisk 15.000-35.000 kr. afhængigt af husets størrelse og tagets kompleksitet. Vi giver altid et uforpligtende tilbud.",
  },
  {
    question: "Hvornår bør tagrender udskiftes?",
    answer:
      "Tagrender bør udskiftes når de er gennemtærede, har revner, hænger skævt eller lækker ved samlingerne. Generelt holder zinktrender 30-50 år, mens plastiktrender holder 15-25 år. Vi anbefaler at få inspiceret tagrenderne mindst én gang årligt for at opdage problemer tidligt.",
  },
  {
    question: "Hvad er forskellen på zink og plast tagrender?",
    answer:
      "Zinktagrender er mere holdbare (30-50 år), æstetisk flottere og patinerer smukt over tid. Plasttagrender er billigere i indkøb men har kortere levetid (15-25 år) og kan misfarves og skørne i solen. For de fleste boliger i Silkeborg anbefaler vi zinktagrender for den bedste langsigtede investering.",
  },
  {
    question: "Udfører I også reparationer af tagrender?",
    answer:
      "Ja, vi reparerer alle typer tagrender. Typiske reparationer inkluderer lodning af utætte samlinger, udskiftning af beskadigede sektioner, fastgørelse af løse beslag og rensning af tilstoppede tagrender. Ofte er reparation en god midlertidig løsning inden en komplet udskiftning.",
  },
];

export default function BlikkenslagerClient() {
  return (
    <>
      <FAQSchema items={faqItems} />
      <ArticleSchema
        title="Blikkenslagerarbejde i Silkeborg"
        description="Professionelt blikkenslagerarbejde i Silkeborg. Tagrender, nedløbsrør, inddækninger og zinkarbejde."
        url="/blikkenslager"
        image="/images/tagrender-1.jpg"
      />

      <PageHeader
        title="Blikkenslagerarbejde i Silkeborg"
        description="Professionelt blikkenslagerarbejde med tagrender, nedløbsrør, inddækninger og zinkarbejde udført af erfarne blikkenslagere."
        breadcrumbItems={[
          { label: "Forside", href: "/" },
          { label: "Blikkenslagerarbejde" },
        ]}
      />

      {/* Intro */}
      <section className="py-20 bg-sand">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-3xl">
            <AnimatedSection>
              <h2 className="font-heading text-3xl text-gray-900 mb-6">
                Erfarne blikkenslagere i Silkeborg
              </h2>
              <Byline />
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Godt blikkenslagerarbejde er afgørende for at beskytte din bolig mod vejr og vind.
                  Tagrender, nedløbsrør og inddækninger sørger for at regnvand ledes sikkert væk fra
                  bygningen, og forhindrer fugtskader på tag, facade og fundament. Hos [FIRMA NAVN]
                  har vi mange års erfaring med alle typer blikkenslagerarbejde i Silkeborg og omegn.
                </p>
                <p>
                  Vores blikkenslagere er specialister i arbejde med zink, kobber og stål. Vi udfører
                  alt fra montering af nye tagrender og nedløbsrør til avancerede zinkinddækninger ved
                  skorstene, kviste og taggennemføringer. Præcision og kvalitet er altafgørende i vores
                  arbejde — hver samling skal være tæt, hvert beslag skal sidde korrekt, og det
                  færdige resultat skal både fungere optimalt og se flot ud.
                </p>
                <p>
                  Vi arbejder primært med zinktagrender, som er den mest populære og holdbare løsning
                  til danske boliger. Zink har en levetid på 30-50 år og patinerer smukt over tid.
                  Vi tilbyder også kobbertagrender til historiske bygninger og villaer, hvor det
                  æstetiske udtryk er særligt vigtigt.
                </p>
                <p>
                  I Silkeborg-området ser vi ofte behov for blikkenslagerarbejde i forbindelse med
                  tagrenoveringer, tilbygninger og facaderenoveringer. Uanset om du bor i Silkeborg C,
                  Them, Kjellerup, Sorring, Funder, Balle, Alderslyst eller Søholt, er vi klar til at
                  hjælpe med professionelt blikkenslagerarbejde af højeste kvalitet.
                </p>
                <p>
                  Vi samarbejder tæt med tømrere, murere og tagdækkere for at sikre et koordineret
                  forløb ved større byggeprojekter. Vores erfaring gør at vi kan rådgive om de bedste
                  løsninger og materialer til netop dit projekt, og vi sørger altid for at arbejdet
                  udføres i overensstemmelse med gældende byggeregler og standarder. Vi varetager også{" "}
                  <Link href="/vvs-installation" className="text-teal hover:text-teal-dark underline">VVS-installationer</Link> og{" "}
                  <Link href="/kloak-afloeb" className="text-teal hover:text-teal-dark underline">kloakarbejde</Link> i forbindelse med tagrenoveringer.
                </p>
                <p>
                  Et ofte overset aspekt af blikkenslagerarbejde er den rolle det spiller i at beskytte
                  tagkonstruktionen mod fugtskader. Utætte inddækninger ved skorstene, ovenlysvinduer
                  og taggennemføringer er blandt de hyppigste årsager til vandindtrængning i taget.
                  Professionelt udført blikkenslagerarbejde sikrer at alle sårbare punkter er forsvarligt
                  dækket, og at regnvand ledes effektivt væk fra bygningen.
                </p>
                <p>
                  Vi tilbyder også forebyggende vedligeholdelse af tagrender og nedløbsrør. Tilstoppede
                  tagrender kan forårsage vandskader på facade og fundament, og i værste fald kan
                  overløbende tagrender medføre fugt i kælder og krybekælder. Vi anbefaler en årlig
                  inspektion og rensning af tagrender, især om efteråret efter løvfald. Det er en
                  lille investering der kan spare dig for store reparationsudgifter på sigt.
                </p>
                <p>
                  Hos [FIRMA NAVN] benytter vi udelukkende kvalitetsmaterialer fra anerkendte
                  leverandører. Vores zinktagrender leveres med lang garanti, og vi står naturligvis
                  inde for kvaliteten af vores håndværk.{" "}
                  <Link href="/kontakt" className="text-teal hover:text-teal-dark underline">Kontakt os</Link> for en uforpligtende besigtigelse
                  og et konkret tilbud på blikkenslagerarbejde til din bolig i Silkeborg. Se også vores{" "}
                  <Link href="/priser" className="text-teal hover:text-teal-dark underline">prisoversigt</Link> for blikkenslagerydelser.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Gallery with zoom */}
      <section className="py-20 bg-white border-y border-gray-200">
        <div className="max-w-[1200px] mx-auto px-6">
          <AnimatedSection>
            <h2 className="font-heading text-3xl text-gray-900 mb-4 text-center">
              Eksempler på blikkenslagerarbejde
            </h2>
            <p className="text-gray-600 text-center mb-12 max-w-xl mx-auto">
              Se udvalgte eksempler på vores blikkenslagerarbejde i Silkeborg-området.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="rounded-xl overflow-hidden">
              <Image src="/images/tagrender-1.jpg" alt="Tagrender i zink monteret på parcelhus i Silkeborg" width={940} height={650} className="w-full h-auto object-cover rounded-xl aspect-[4/3]" />
            </div>
            <div className="rounded-xl overflow-hidden">
              <Image src="/images/tagrender-2.jpg" alt="Nedløbsrør og tagrender installation i Silkeborg-området" width={940} height={650} className="w-full h-auto object-cover rounded-xl aspect-[4/3]" />
            </div>
            <div className="rounded-xl overflow-hidden">
              <Image src="/images/kobberroer-2.jpg" alt="Kobber- og zinkarbejde til inddækning ved skorsten" width={940} height={650} className="w-full h-auto object-cover rounded-xl aspect-[4/3]" />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-sand">
        <div className="max-w-[1200px] mx-auto px-6">
          <AnimatedSection>
            <h2 className="font-heading text-3xl text-gray-900 mb-12 text-center">
              Blikkenslagerydelser
            </h2>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Tagrender",
                desc: "Montering af nye tagrender i zink, kobber eller plast. Vi tilpasser tagrenderne præcist til dit tags dimensioner og sikrer korrekt fald mod nedløbsrørene. Alle samlinger loddes for maksimal tæthed og holdbarhed.",
              },
              {
                title: "Nedløbsrør",
                desc: "Installation af nedløbsrør der leder regnvand sikkert fra tagrenderne til kloakken eller faskinen. Vi tilpasser rørstørrelse og placering for optimal afledning og minimal synlighed på facaden.",
              },
              {
                title: "Inddækninger",
                desc: "Zinkinddækninger ved skorstene, kviste, ovenlysvinduer, taggennemføringer og murværk. Professionelle inddækninger forhindrer vandindtrængning og beskytter tagkonstruktionen mod fugtskader.",
              },
              {
                title: "Zinkarbejde",
                desc: "Specialiseret zinkarbejde til gesimser, sternbrædder, facadebeklædning og dekorative elementer. Vi arbejder med både natur-zink, forvitret zink og farvet zink til forskellige arkitektoniske stilarter.",
              },
              {
                title: "Reparation og vedligeholdelse",
                desc: "Reparation af utætte tagrender, beskadigede nedløbsrør og slidte inddækninger. Vi udfører også forebyggende vedligeholdelse med rensning, inspektion og justering af eksisterende installationer.",
              },
              {
                title: "Faskiner og afledning",
                desc: "Installation af faskiner til nedsivning af regnvand. Vi beregner den nødvendige kapacitet og installerer faskinen i overensstemmelse med kommunens regler for regnvandshåndtering i Silkeborg.",
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
              <Link href="/kloak-afloeb" className="text-teal hover:text-teal-dark transition-colors border border-gray-200 rounded-lg px-4 py-2 text-sm">
                Kloak og afløb
              </Link>
              <Link href="/priser" className="text-teal hover:text-teal-dark transition-colors border border-gray-200 rounded-lg px-4 py-2 text-sm">
                Se priser
              </Link>
              <Link href="/kontakt" className="text-teal hover:text-teal-dark transition-colors border border-gray-200 rounded-lg px-4 py-2 text-sm">
                Kontakt os
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
              Spørgsmål om blikkenslagerarbejde
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
