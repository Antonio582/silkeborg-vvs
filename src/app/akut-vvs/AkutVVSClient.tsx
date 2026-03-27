"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import StaggerContainer, { StaggerItem } from "@/components/StaggerContainer";
import Card from "@/components/Card";
import FAQ from "@/components/FAQ";
import FAQSchema from "@/components/FAQSchema";
import CTASection from "@/components/CTASection";
import PageHeader from "@/components/PageHeader";
import ArticleSchema from "@/components/ArticleSchema";
import Byline from "@/components/Byline";

const emergencyTypes = [
  {
    title: "Sprængte vandrør",
    description:
      "Et sprængt vandrør kan hurtigt forårsage omfattende vandskade. Vi rykker ud med det samme, lukker for vandet og udbedrer skaden professionelt. Vi medbringer altid reservedele og materiale til de mest almindelige reparationer, så vi kan løse problemet ved første besøg.",
    urgent: true,
  },
  {
    title: "Tilstoppede afløb",
    description:
      "Et tilstoppet afløb i køkken, badeværelse eller toilet kan forårsage oversvømmelse og ubehagelige lugtgener. Vi har professionelt udstyr til at rense afløb hurtigt og effektivt, herunder mekanisk oprensning, højtryksrensning og TV-inspektion for at finde årsagen.",
    urgent: true,
  },
  {
    title: "Vandskade",
    description:
      "Ved vandskade handler det om at handle hurtigt for at minimere skaderne. Vi hjælper med at stoppe vandtilførslen, dræne vand og lave midlertidige reparationer indtil en permanent løsning kan udføres. Vi samarbejder med forsikringsselskaber om skadesopgørelse.",
    urgent: true,
  },
  {
    title: "Defekte varmtvandsinstallationer",
    description:
      "Intet varmt vand er en akut situation, især i vintermånederne. Vi fejlfinder og reparerer vandvarmere, varmtvandsbeholdere og gennemstrømningsvandvarmere. Hvis reparation ikke er mulig, installerer vi en ny enhed samme dag når det er praktisk muligt.",
    urgent: false,
  },
  {
    title: "Utæt toilet eller cisterne",
    description:
      "Et løbende toilet spilder store mængder vand og kan forårsage vandskade. Vi reparerer eller udskifter defekte cisterneventiler, flottører, tætningsringe og tilslutningsslanger. De fleste toiletproblemer kan løses hurtigt og til en overkommelig pris.",
    urgent: false,
  },
  {
    title: "Gas- og varmeproblemer",
    description:
      "Problemer med gasfyr, varmekedler eller centralvarme kræver hurtig og professionel assistance. Vi fejlfinder og reparerer alle typer varmeanlæg og sørger for at dit hjem igen bliver varmt og sikkert. Ved gaslugt: forlad huset og ring til os med det samme.",
    urgent: true,
  },
];

const faqItems = [
  {
    question: "Hvad koster akut VVS i Silkeborg?",
    answer:
      "Akut VVS-service har typisk et udkørselsgebyr på 500-1.000 kr. plus timeløn og materialer. Timeprisen for akut arbejde ligger typisk 25-50% over normal pris grundet vagttillæg. Vi informerer altid om prisen inden vi påbegynder arbejdet, så der er ingen overraskelser.",
  },
  {
    question: "Hvor hurtigt kan I komme ved akut VVS?",
    answer:
      "I Silkeborg by og nærområdet rykker vi typisk ud inden for 30-60 minutter ved akutte situationer. I ydreområderne som Them, Kjellerup og Sorring kan responstiden være lidt længere. Vi prioriterer altid de mest akutte situationer først.",
  },
  {
    question: "Har I døgnvagt for VVS?",
    answer:
      "Ja, vi har VVS-døgnvagt i Silkeborg. Du kan ringe til os på [TELEFON] døgnet rundt ved akutte VVS-problemer. Uden for normal arbejdstid og i weekender vil der være et vagttillæg på prisen.",
  },
  {
    question: "Hvad skal jeg gøre ved et sprængt vandrør?",
    answer:
      "Luk straks for hovedhanen (typisk i bryggers eller ved vandmåleren). Sluk for varmtvandsapparatet. Saml op så meget vand som muligt for at begrænse skaden. Ring derefter til os på [TELEFON] — vi rykker hurtigt ud og ordner problemet.",
  },
  {
    question: "Dækker forsikringen akut VVS-arbejde?",
    answer:
      "De fleste husforsikringer dækker pludselige vandskader forårsaget af sprængte rør eller defekte installationer. Du skal typisk selv betale for selve VVS-reparationen, mens forsikringen dækker følgeskader som vandskade på bygning og inventar. Vi anbefaler at kontakte dit forsikringsselskab hurtigst muligt.",
  },
];

export default function AkutVVSClient() {
  return (
    <>
      <FAQSchema items={faqItems} />
      <ArticleSchema
        title="Akut VVS-service i Silkeborg"
        description="Akut VVS-service i Silkeborg med hurtig udrykning. Sprængte vandrør, tilstoppede afløb og vandskader."
        url="/akut-vvs"
        image="/images/vvs-vaerktoj-2.jpg"
      />

      <PageHeader
        title="Akut VVS-service i Silkeborg"
        description="Hurtig udrykning ved akutte VVS-problemer i Silkeborg og omegn. Døgnvagt for sprængte vandrør, tilstoppede afløb og vandskader."
        breadcrumbItems={[
          { label: "Forside", href: "/" },
          { label: "Akut VVS" },
        ]}
      />

      {/* Emergency banner */}
      <section className="bg-terracotta/5 border-b border-terracotta/20">
        <div className="max-w-[1200px] mx-auto px-6 py-8">
          <AnimatedSection>
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex items-center gap-3">
                <motion.div
                  animate={{ scale: [1, 1.15, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="w-4 h-4 bg-terracotta rounded-full"
                />
                <span className="font-heading text-terracotta text-lg">Akut VVS-hjælp?</span>
              </div>
              <p className="text-gray-700">
                Ring til os nu — vi rykker ud inden for 60 minutter i Silkeborg og omegn.
              </p>
              <Link
                href="tel:[TELEFON]"
                className="inline-flex items-center gap-2 bg-terracotta text-white px-6 py-3 rounded-lg font-medium hover:bg-terracotta-light transition-colors shrink-0"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
                Ring [TELEFON]
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 bg-sand">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-3xl">
            <AnimatedSection>
              <div className="mb-8 rounded-xl overflow-hidden">
                <Image
                  src="/images/vvs-vaerktoj-2.jpg"
                  alt="Akut VVS-udstyr og værktøj til nødudrykning i Silkeborg"
                  width={940}
                  height={650}
                  className="w-full h-auto object-cover rounded-xl"
                />
              </div>
              <h2 className="font-heading text-3xl text-gray-900 mb-6">
                Hurtig og professionel akut VVS-service
              </h2>
              <Byline />
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Akutte VVS-problemer kan opstå når som helst — og når de rammer, er det vigtigt
                  at handle hurtigt. Et sprængt vandrør, et tilstoppet afløb eller en pludselig
                  vandskade kan forårsage omfattende skader på din bolig og dine ejendele, hvis
                  det ikke håndteres med det samme. Hos [FIRMA NAVN] tilbyder vi akut VVS-service
                  med hurtig udrykning i hele Silkeborg og omegn.
                </p>
                <p>
                  Vores erfarne VVS-folk er udstyret med alt det nødvendige udstyr og de mest
                  almindelige reservedele, så vi kan løse de fleste akutte problemer ved første
                  besøg. Vi medbringer altid rørdele i gængse dimensioner, pakninger, ventiler,
                  blandingsbatteridele og værktøj til afløbsrensning. Det betyder at du slipper
                  for at vente på bestilling af materialer, og vi kan afslutte langt de fleste
                  akutte opgaver samme dag.
                </p>
                <p>
                  Vi dækker Silkeborg C, Them, Kjellerup, Sorring, Funder, Balle, Alderslyst,
                  Søholt og de omkringliggende områder. Vores typiske responstid er 30-60 minutter
                  i Silkeborg by, og vi prioriterer altid de mest akutte situationer. Kender du
                  problemet på forhånd, kan du se vores{" "}
                  <Link href="/priser" className="text-teal hover:text-teal-dark underline">prisoversigt for akut VVS</Link> inden du ringer.
                </p>
                <p>
                  Uanset om det er midt om natten, i weekenden eller på en helligdag, kan du
                  regne med os. Vi har døgnvagt, og vores erfarne VVS-montører er klar til at
                  rykke ud og løse dit akutte VVS-problem hurtigt og professionelt. Du skal
                  aldrig stå alene med en VVS-nødsituation i Silkeborg.
                </p>
                <p>
                  Mange akutte VVS-situationer opstår i forbindelse med ældre installationer. Har du
                  galvaniserede vandrør fra 1960erne eller 1970erne, er risikoen for brud markant
                  højere end ved moderne PEX- eller kobberrør. Vi anbefaler at overveje en planlagt{" "}
                  <Link href="/vvs-installation" className="text-teal hover:text-teal-dark underline">vandrørsrenovering</Link> som forebyggende
                  foranstaltning, frem for at vente på det uundgåelige brud.
                </p>
                <p>
                  Tilstoppede afløb er en af de hyppigste årsager til akut VVS-udkald i Silkeborg.
                  Fedt, hår, sæberester og kalkaflejringer ophobes over tid og reducerer rørenes
                  kapacitet. Vi bruger professionelt højtryksrensningsudstyr og TV-inspektion til at
                  lokalisere og fjerne tilstopningen effektivt. I mange tilfælde kan vi også identificere
                  underliggende problemer i <Link href="/kloak-afloeb" className="text-teal hover:text-teal-dark underline">kloaksystemet</Link> der
                  bør udbedres for at forhindre gentagne tilstopninger.
                </p>
                <p>
                  Vi samarbejder med alle større forsikringsselskaber og kan hjælpe dig med
                  skadesopgørelse og dokumentation i forbindelse med vandskader. Vores detaljerede
                  rapporter og fotos gør processen nemmere for dig og sikrer en smidig behandling
                  hos dit forsikringsselskab. Vi har stor erfaring med forsikringssager i Silkeborg
                  og kender procedurerne hos de mest anvendte selskaber.
                </p>
                <p>
                  Vinteren er højsæson for akutte VVS-problemer i Silkeborg. Frost kan forårsage
                  sprængte vandrør, frostskadede varmtvandsanlæg og defekte varmekedler. Vi
                  anbefaler at isolere udsatte rør i uopvarmede rum, sikre at varmeanlægget er
                  serviceret inden vinterens komme, og at du kender placeringen af din hovedhane
                  så du hurtigt kan lukke for vandet i en nødsituation. Har du brug for
                  forebyggende service af dit <Link href="/varme-varmepumper" className="text-teal hover:text-teal-dark underline">varmeanlæg</Link>,
                  står vi også til rådighed.
                </p>
              </div>

              {/* Extra images */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="rounded-xl overflow-hidden">
                  <Image
                    src="/images/kobberroer-1.jpg"
                    alt="Reparation af kobberrør ved akut VVS-udkald i Silkeborg"
                    width={460}
                    height={320}
                    className="w-full h-auto object-cover rounded-xl"
                  />
                </div>
                <div className="rounded-xl overflow-hidden">
                  <Image
                    src="/images/varmtvandsbeholder-1.jpg"
                    alt="Akut reparation af varmtvandsinstallation i Silkeborg-bolig"
                    width={460}
                    height={320}
                    className="w-full h-auto object-cover rounded-xl"
                  />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Emergency types */}
      <section className="py-20 bg-white border-y border-gray-200">
        <div className="max-w-[1200px] mx-auto px-6">
          <AnimatedSection>
            <h2 className="font-heading text-3xl text-gray-900 mb-4 text-center">
              Akutte VVS-situationer vi håndterer
            </h2>
            <p className="text-gray-600 text-center mb-12 max-w-xl mx-auto">
              Vi er klar til at hjælpe med alle typer akutte VVS-problemer i Silkeborg.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {emergencyTypes.map((item) => (
              <StaggerItem key={item.title}>
                <Card className={`h-full ${item.urgent ? "border-terracotta/20" : ""}`}>
                  <div className="flex items-center gap-2 mb-3">
                    {item.urgent && (
                      <span className="inline-flex items-center gap-1 text-xs text-terracotta bg-terracotta/10 px-2 py-1 rounded-full">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="10" />
                          <path d="M12 8v4M12 16h.01" />
                        </svg>
                        Akut
                      </span>
                    )}
                  </div>
                  <h3 className="font-heading text-lg text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* What to do */}
      <section className="py-20 bg-sand">
        <div className="max-w-[800px] mx-auto px-6">
          <AnimatedSection>
            <h2 className="font-heading text-3xl text-gray-900 mb-8 text-center">
              Hvad skal du gøre ved akut VVS?
            </h2>
          </AnimatedSection>
          <StaggerContainer className="space-y-6">
            {[
              {
                step: "1",
                title: "Luk for vandet",
                desc: "Find din hovedhane (typisk i bryggers, kælder eller ved vandmåleren) og luk den. Det stopper vandtilførslen og begrænser skaden.",
              },
              {
                step: "2",
                title: "Sluk for elektronik",
                desc: "Hvis vand er kommet i nærheden af stikkontakter eller elektronik, sluk på gruppeafbryderen for at undgå kortslutning.",
              },
              {
                step: "3",
                title: "Ring til os",
                desc: "Kontakt [FIRMA NAVN] på [TELEFON]. Fortæl kort hvad der er sket, og vi sender en VVS-montør ud hurtigst muligt.",
              },
              {
                step: "4",
                title: "Begræns skaden",
                desc: "Saml vand op med håndklæder, koste eller en vådsugre. Jo hurtigere du handler, jo mindre bliver skaderne på gulve, vægge og inventar.",
              },
            ].map((item) => (
              <StaggerItem key={item.step}>
                <div className="flex gap-6 items-start">
                  <span className="font-heading text-3xl text-teal shrink-0 w-8">{item.step}</span>
                  <div>
                    <h3 className="font-heading text-lg text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
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
              Spørgsmål om akut VVS
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <FAQ items={faqItems} />
          </AnimatedSection>
        </div>
      </section>

      <CTASection
        title="Akut VVS-problem?"
        description="Ring nu — vi er klar til at hjælpe dig 24/7 i hele Silkeborg."
      />
    </>
  );
}
