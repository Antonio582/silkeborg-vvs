"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import StaggerContainer, { StaggerItem } from "@/components/StaggerContainer";
import Card from "@/components/Card";
import FAQ from "@/components/FAQ";
import FAQSchema from "@/components/FAQSchema";
import CTASection from "@/components/CTASection";
import PageHeader from "@/components/PageHeader";
import ArticleSchema from "@/components/ArticleSchema";
import Byline from "@/components/Byline";

function HighlightText({ children }: { children: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.span
      ref={ref}
      className="relative inline"
    >
      <motion.span
        className="absolute inset-0 bg-teal/10 -mx-1 px-1 rounded"
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        style={{ originX: 0 }}
      />
      <span className="relative">{children}</span>
    </motion.span>
  );
}

const comparisonData = [
  {
    feature: "Energikilde",
    luftVand: "Udeluft → Vand",
    luftLuft: "Udeluft → Luft",
    jordvarme: "Jord → Vand",
  },
  {
    feature: "Typisk COP",
    luftVand: "3,0 - 4,5",
    luftLuft: "3,5 - 5,0",
    jordvarme: "4,0 - 5,0",
  },
  {
    feature: "Installation pris",
    luftVand: "80.000 - 150.000 kr.",
    luftLuft: "15.000 - 40.000 kr.",
    jordvarme: "150.000 - 250.000 kr.",
  },
  {
    feature: "Varmt brugsvand",
    luftVand: "Ja",
    luftLuft: "Nej",
    jordvarme: "Ja",
  },
  {
    feature: "Gulvvarme/radiator",
    luftVand: "Ja",
    luftLuft: "Nej (blæser)",
    jordvarme: "Ja",
  },
  {
    feature: "Besparelse vs. gas",
    luftVand: "50-70%",
    luftLuft: "30-50%",
    jordvarme: "60-75%",
  },
  {
    feature: "Levetid",
    luftVand: "15-20 år",
    luftLuft: "10-15 år",
    jordvarme: "20-25 år",
  },
  {
    feature: "Bedst til",
    luftVand: "Helårsbolig",
    luftLuft: "Supplement/sommerhus",
    jordvarme: "Stor helårsbolig",
  },
];

const faqItems = [
  {
    question: "Hvad koster en varmepumpe i Silkeborg?",
    answer:
      "En luft-til-vand varmepumpe koster typisk 80.000-150.000 kr. inkl. installation, mens en luft-til-luft varmepumpe koster 15.000-40.000 kr. Jordvarme koster 150.000-250.000 kr. Priserne afhænger af boligens størrelse og isoleringsgrad. Vi giver altid et konkret tilbud efter besigtigelse.",
  },
  {
    question: "Hvor meget kan jeg spare med en varmepumpe?",
    answer:
      "Med en luft-til-vand varmepumpe kan du typisk spare 50-70% på din varmeregning sammenlignet med olie- eller gasfyr. En gennemsnitlig husstand i Silkeborg kan spare 15.000-25.000 kr. om året. Tilbagebetalingstiden er typisk 5-10 år afhængigt af dit nuværende varmeforbrug.",
  },
  {
    question: "Kan en varmepumpe bruges med fjernvarme?",
    answer:
      "Normalt anbefales det ikke at kombinere varmepumpe med fjernvarme, da fjernvarme allerede er en effektiv og klimavenlig opvarmningsform. Hvis du har fjernvarme i Silkeborg, rådgiver vi i stedet om optimering af dit fjernvarmeanlæg, udskiftning af radiatorer og installation af gulvvarme for bedre komfort.",
  },
  {
    question: "Er der tilskud til varmepumper i 2025?",
    answer:
      "Ja, der er fortsat tilskudsmuligheder til varmepumper gennem Energistyrelsen og de enkelte kommuner. Tilskuddet kan dække en del af investeringen. Vi hjælper dig med at undersøge aktuelle tilskudsordninger og ansøge om dem i forbindelse med installationen.",
  },
];

export default function VarmeClient() {
  return (
    <>
      <FAQSchema items={faqItems} />
      <ArticleSchema
        title="Varme og varmepumper i Silkeborg"
        description="Installation af varmepumper, fjernvarme, gulvvarme og centralvarme i Silkeborg."
        url="/varme-varmepumper"
        image="/images/varmeinstallation-1.jpg"
      />

      <PageHeader
        title="Varme og varmepumper i Silkeborg"
        description="Professionel installation og service af varmepumper, fjernvarme, centralvarme og gulvvarme. Spar op til 70% på din varmeregning."
        breadcrumbItems={[
          { label: "Forside", href: "/" },
          { label: "Varme og varmepumper" },
        ]}
      />

      {/* Intro */}
      <section className="py-20 bg-sand">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-3xl">
            <AnimatedSection>
              <div className="mb-8 rounded-xl overflow-hidden">
                <Image
                  src="/images/varmeinstallation-1.jpg"
                  alt="Installation af varmepumpe og varmeanlæg i Silkeborg"
                  width={940}
                  height={650}
                  className="w-full h-auto object-cover rounded-xl"
                />
              </div>
              <h2 className="font-heading text-3xl text-gray-900 mb-6">
                Din specialist i varmeløsninger i Silkeborg
              </h2>
              <Byline />
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Et effektivt og velfungerende varmeanlæg er fundamentet for en komfortabel bolig.
                  Som autoriseret VVS-installatør i Silkeborg har vi stor erfaring med alle typer
                  varmeanlæg — fra <HighlightText>moderne varmepumper</HighlightText> og{" "}
                  <HighlightText>fjernvarmetilslutning</HighlightText> til traditionel centralvarme
                  med radiatorer og gulvvarme.
                </p>
                <p>
                  Mange boliger i Silkeborg-området opvarmes stadig med olie- eller naturgasfyr,
                  som både er dyre i drift og belastende for miljøet. Ved at skifte til en moderne
                  varmepumpe kan du reducere din varmeregning med op til 70% og samtidig bidrage
                  til den grønne omstilling. Vi rådgiver dig om den optimale løsning baseret på
                  din boligs størrelse, isoleringsgrad og dit nuværende varmeforbrug.
                </p>
                <p>
                  Vi installerer varmepumper fra alle førende producenter, herunder Bosch, Daikin,
                  Mitsubishi, Nibe og Vaillant. Uanset om du bor i Silkeborg C, Them, Kjellerup,
                  Sorring, Funder, Balle, Alderslyst eller Søholt, sørger vi for en professionel
                  installation med optimal dimensionering og energieffektivitet.
                </p>
                <p>
                  Ud over nyinstallation tilbyder vi også service og vedligeholdelse af eksisterende
                  varmeanlæg. Regelmæssig service forlænger levetiden og sikrer optimal ydeevne.
                  Vi servicerer alle mærker og typer af varmepumper, fjernvarmeanlæg og centralvarme.
                  Vi udfører desuden <Link href="/vvs-installation" className="text-teal hover:text-teal-dark underline">VVS-installationer</Link> i
                  forbindelse med varmeanlæg, herunder rørføring og radiatortilslutning.
                </p>
                <p>
                  Silkeborg Kommune har en ambitiøs klimaplan, og mange boligejere ønsker at bidrage
                  til den grønne omstilling ved at skifte fra fossile brændsler til vedvarende
                  energikilder. En varmepumpe er en af de mest effektive måder at reducere dit
                  CO2-aftryk og samtidig spare penge på varmeregningen. Vi hjælper dig med at
                  navigere i de mange muligheder og finder den løsning der giver mest mening for
                  netop din bolig og dit forbrug.
                </p>
                <p>
                  Når vi dimensionerer en varmepumpe, tager vi højde for boligens opvarmede areal,
                  isoleringsstandard, vinduestyper og det eksisterende varmeanlægs kapacitet. En
                  korrekt dimensionering er afgørende for at opnå den optimale COP-værdi og dermed
                  den største besparelse. For store eller for små anlæg giver dårligere økonomi og
                  kortere levetid, og det er derfor vigtigt at vælge en installatør med erfaring
                  i korrekt dimensionering af varmeanlæg.
                </p>
                <p>
                  Gulvvarme er en populær opvarmningsform i Silkeborg-området, særligt i nye boliger
                  og ved renoveringer. Vandbaseret gulvvarme fordeler varmen jævnt over hele gulvfladen
                  og giver en behagelig strålevarme uden kolde zoner. Kombineret med en varmepumpe er
                  gulvvarme den mest energieffektive opvarmningsløsning, fordi den fungerer optimalt
                  ved lave fremløbstemperaturer, hvilket øger varmepumpens COP-værdi markant.
                </p>
                <p>
                  Vi tilbyder også udskiftning og opgradering af gamle radiatorer til moderne,
                  energieffektive modeller. Nye radiatorer med termostatventiler og lav fremløbstemperatur
                  kan reducere dit varmeforbrug med 10-20% og forbedre komforten i alle rum. Vores
                  VVS-installatører i Silkeborg rådgiver dig om det optimale valg baseret på
                  rummenes størrelse, isolering og eksisterende rørføring. Se vores{" "}
                  <Link href="/priser" className="text-teal hover:text-teal-dark underline">priser for varmeinstallationer</Link> eller{" "}
                  <Link href="/kontakt" className="text-teal hover:text-teal-dark underline">kontakt os</Link> for et uforpligtende tilbud.
                  Har du brug for hjælp med <Link href="/blikkenslager" className="text-teal hover:text-teal-dark underline">blikkenslagerarbejde</Link> i
                  forbindelse med en tagudskiftning, klarer vi også det.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Images */}
      <section className="py-12 bg-white border-y border-gray-200">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl overflow-hidden">
              <Image
                src="/images/gulvvarme-1.jpg"
                alt="Gulvvarme installation i bolig i Silkeborg"
                width={940}
                height={650}
                className="w-full h-auto object-cover rounded-xl"
              />
            </div>
            <div className="rounded-xl overflow-hidden">
              <Image
                src="/images/radiator-1.jpg"
                alt="Moderne radiator med termostatventil i Silkeborg-hjem"
                width={940}
                height={650}
                className="w-full h-auto object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <AnimatedSection>
            <h2 className="font-heading text-3xl text-gray-900 mb-4 text-center">
              Sammenligning af varmepumpetyper
            </h2>
            <p className="text-gray-600 text-center mb-12 max-w-xl mx-auto">
              Vælg den rigtige varmepumpe til din bolig i Silkeborg.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-4 pr-4 font-heading text-gray-900"></th>
                    <th className="text-left py-4 px-4 font-heading text-teal">Luft-til-vand</th>
                    <th className="text-left py-4 px-4 font-heading text-gray-900">Luft-til-luft</th>
                    <th className="text-left py-4 px-4 font-heading text-gray-900">Jordvarme</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, i) => (
                    <tr key={i} className="border-b border-gray-100">
                      <td className="py-3 pr-4 font-medium text-gray-700">{row.feature}</td>
                      <td className="py-3 px-4 text-gray-600 bg-teal/5">{row.luftVand}</td>
                      <td className="py-3 px-4 text-gray-600">{row.luftLuft}</td>
                      <td className="py-3 px-4 text-gray-600">{row.jordvarme}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-sand">
        <div className="max-w-[1200px] mx-auto px-6">
          <AnimatedSection>
            <h2 className="font-heading text-3xl text-gray-900 mb-12 text-center">
              Varmeydelser vi tilbyder
            </h2>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Varmepumpe-installation",
                desc: "Komplet installation af luft-til-vand og luft-til-luft varmepumper. Vi dimensionerer korrekt, installerer udedel og indedel, tilslutter til eksisterende varmeanlæg og sørger for idriftsættelse og indregulering.",
              },
              {
                title: "Fjernvarmetilslutning",
                desc: "Tilslutning til fjernvarme i Silkeborg. Vi installerer varmevekslere, vandrør og automatik, og sørger for optimal udnyttelse af fjernvarmen med korrekt returtemperatur.",
              },
              {
                title: "Gulvvarme",
                desc: "Installation af vandbaseret gulvvarme i nye og eksisterende boliger. Gulvvarme giver jævn varmefordeling, lavere energiforbrug og frihed til møblering uden synlige radiatorer.",
              },
              {
                title: "Radiatoranlæg",
                desc: "Udskiftning og installation af radiatorer, termostatventiler og rørsystemer. Vi sikrer korrekt dimensionering og indregulering for optimal varmefordeling i alle rum.",
              },
              {
                title: "Service og vedligeholdelse",
                desc: "Årlig service af varmepumper, fjernvarmeanlæg og centralvarme. Forebyggende vedligeholdelse forlænger levetiden, sikrer energieffektiviteten og forebygger dyre nedbrud.",
              },
              {
                title: "Energirådgivning",
                desc: "Vi rådgiver om den optimale varmeløsning for din bolig baseret på størrelse, isolering, nuværende varmekilde og budget. Vi hjælper også med ansøgning om tilskud til varmepumper.",
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
              <Link href="/blikkenslager" className="text-teal hover:text-teal-dark transition-colors border border-gray-200 rounded-lg px-4 py-2 text-sm">
                Blikkenslagerarbejde
              </Link>
              <Link href="/akut-vvs" className="text-teal hover:text-teal-dark transition-colors border border-gray-200 rounded-lg px-4 py-2 text-sm">
                Akut VVS-service
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
              Spørgsmål om varme og varmepumper
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
