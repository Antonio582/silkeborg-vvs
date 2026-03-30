"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import StaggerContainer, { StaggerItem } from "@/components/StaggerContainer";
import Counter from "@/components/Counter";
import Card from "@/components/Card";
import FAQ from "@/components/FAQ";
import FAQSchema from "@/components/FAQSchema";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import CTASection from "@/components/CTASection";
import ArticleSchema from "@/components/ArticleSchema";
import Byline from "@/components/Byline";

const services = [
  {
    title: "VVS-installation",
    description: "Professionel installation af vandrør, afløb, blandingsbatterier og sanitetsudstyr i hele Silkeborg.",
    href: "/vvs-installation",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M6 6.5V2h4v4.5M8 6.5v6M6 12.5h4M14 2h4v4.5M16 6.5v6M14 12.5h4M3 22h18M6 22v-5.5h12V22" />
      </svg>
    ),
  },
  {
    title: "Varme og varmepumper",
    description: "Installation og service af varmepumper, fjernvarme, centralvarme, gulvvarme og radiatoranlæg.",
    href: "/varme-varmepumper",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    ),
  },
  {
    title: "Blikkenslagerarbejde",
    description: "Tagrender, nedløbsrør, inddækninger og zinkarbejde udført af erfarne blikkenslagere.",
    href: "/blikkenslager",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 21l4-4M7 17l10-10M17 7l4-4M7 3l14 14M3 7l4-4M17 21l4-4" />
      </svg>
    ),
  },
  {
    title: "Akut VVS",
    description: "Akut VVS-service i Silkeborg. Vi rykker hurtigt ud ved sprængte vandrør, tilstoppede afløb og vandskader.",
    href: "/akut-vvs",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    title: "Kloak og afløb",
    description: "Kloakrenovering, kloakseparering, TV-inspektion og afløbsarbejde i Silkeborg og omegn.",
    href: "/kloak-afloeb",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2v8M4 10h16M4 10l2 10h12l2-10M8 14v4M16 14v4M12 14v4" />
      </svg>
    ),
  },
  {
    title: "Priser",
    description: "Se vores gennemsigtige priser for VVS-arbejde i Silkeborg. Fair og konkurrencedygtige priser.",
    href: "/priser",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
      </svg>
    ),
  },
];

const testimonials = [
  {
    text: "Fantastisk service fra start til slut. De installerede nyt badeværelse på rekordtid og til en fair pris. Kan varmt anbefales til alle i Silkeborg.",
    author: "Michael P.",
    location: "Silkeborg C",
  },
  {
    text: "Havde akut brug for hjælp en søndag aften med et sprængt vandrør. De var fremme inden for en time og fik løst problemet hurtigt og professionelt.",
    author: "Line K.",
    location: "Balle",
  },
  {
    text: "Vi fik installeret luft-til-vand varmepumpe og er utroligt tilfredse. Besparelsen på varmeregningen har været mærkbar allerede fra første måned.",
    author: "Thomas og Anja",
    location: "Alderslyst",
  },
];

const faqItems = [
  {
    question: "Hvad koster en VVS-installatør i Silkeborg?",
    answer: "Prisen for VVS-arbejde i Silkeborg afhænger af opgavens omfang og kompleksitet. En typisk timeløn for en autoriseret VVS-installatør ligger mellem 450-650 kr. ekskl. moms. Vi tilbyder altid et uforpligtende tilbud, så du kender prisen på forhånd. Kontakt os for et konkret tilbud på dit projekt.",
  },
  {
    question: "Er I autoriserede VVS-installatører?",
    answer: "Ja, vi er fuldt autoriserede VVS-installatører med gyldig VVS-attest. Det betyder, at vi må udføre alle typer vandinstallationer, varmeanlæg og kloakarbejde i henhold til gældende lovgivning. Vores autorisation er din garanti for kvalitet og sikkerhed.",
  },
  {
    question: "Hvor hurtigt kan I rykke ud ved akut VVS?",
    answer: "Ved akutte VVS-problemer som sprængte vandrør, oversvømmelse eller tilstoppede afløb rykker vi typisk ud inden for 1-2 timer i Silkeborg og nærområdet. Vi har døgnvagt, så du kan altid komme i kontakt med os ved akutte situationer.",
  },
  {
    question: "Hvilke områder dækker I i Silkeborg?",
    answer: "Vi dækker hele Silkeborg Kommune inklusiv Silkeborg C, Them, Kjellerup, Sorring, Funder, Balle, Alderslyst og Søholt. Vi kører også gerne til nabokommunerne efter aftale.",
  },
  {
    question: "Kan I hjælpe med varmepumper?",
    answer: "Absolut. Vi er specialister i installation af varmepumper i Silkeborg. Vi rådgiver om valg mellem luft-til-vand og luft-til-luft varmepumper, og vi sørger for korrekt dimensionering og installation, så du opnår den bedste energibesparelse.",
  },
];

export default function HomeClient() {
  return (
    <>
      <LocalBusinessSchema />
      <FAQSchema items={faqItems} />
      <ArticleSchema
        title="VVS Silkeborg | Autoriseret VVS-installatør"
        description="Autoriseret VVS-installatør i Silkeborg. VVS-installation, varmepumper, blikkenslagerarbejde, akut VVS og kloakarbejde."
        url=""
        image="/images/vvs-vaerktoj-1.jpg"
      />

      {/* Hero */}
      <section className="relative bg-white overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 py-20 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          >
            <p className="text-teal text-sm font-medium tracking-wide uppercase mb-4">
              Autoriseret VVS-installatør i Silkeborg
            </p>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
            className="font-heading text-4xl md:text-6xl lg:text-7xl text-gray-900 max-w-3xl leading-[1.1] mb-6"
          >
            Din lokale VVS-mester i Silkeborg
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="text-lg md:text-xl text-gray-600 max-w-xl leading-relaxed mb-10"
          >
            Vi leverer professionelt VVS-arbejde til private og erhverv i Silkeborg og omegn.
            Fra vandinstallation og varmeanlæg til akut VVS-service — altid med kvalitet i fokus.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center gap-2 bg-teal text-white px-8 py-3.5 rounded-lg font-medium hover:bg-teal-dark transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
              </svg>
              Kontakt os
            </Link>
            <Link
              href="/priser"
              className="inline-flex items-center justify-center gap-2 border border-gray-300 text-gray-700 px-8 py-3.5 rounded-lg hover:border-teal hover:text-teal transition-colors"
            >
              Se vores priser
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-y border-gray-200 bg-sand">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <Counter target={25} suffix="+" label="Års erfaring" />
            <Counter target={3500} suffix="+" label="Opgaver udført" />
            <Counter target={98} suffix="%" label="Tilfredse kunder" />
            <Counter target={60} label="Min. responstid (akut)" suffix=" min" />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-sand">
        <div className="max-w-[1200px] mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl md:text-4xl text-gray-900 mb-4">
                Vores VVS-ydelser i Silkeborg
              </h2>
              <p className="text-gray-600 max-w-xl mx-auto">
                Som autoriseret VVS-installatør tilbyder vi et bredt udvalg af ydelser
                til private og erhverv i Silkeborg og omegn.
              </p>
            </div>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <StaggerItem key={service.href}>
                <Link href={service.href}>
                  <Card className="h-full group cursor-pointer">
                    <div className="text-teal mb-4">{service.icon}</div>
                    <h3 className="font-heading text-xl text-gray-900 mb-2 group-hover:text-teal transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                    <span className="inline-flex items-center gap-1 text-teal text-sm mt-4 group-hover:gap-2 transition-all">
                      Læs mere
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </span>
                  </Card>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* About / Why us */}
      <section className="py-20 bg-white border-y border-gray-200">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <p className="text-teal text-sm font-medium tracking-wide uppercase mb-4">
                Hvorfor vælge os
              </p>
              <h2 className="font-heading text-3xl md:text-4xl text-gray-900 mb-6">
                Lokal ekspertise og personlig service i Silkeborg
              </h2>
              <Byline />
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Som lokal VVS-installatør i Silkeborg kender vi området som vores egen bukselomme.
                  Vi har udført tusindvis af opgaver i Silkeborg C, Them, Kjellerup, Sorring, Funder,
                  Balle, Alderslyst og Søholt — fra små reparationer til store renoveringsprojekter.
                  Har du brug for <Link href="/vvs-installation" className="text-teal hover:text-teal-dark underline">professionel VVS-installation</Link>,
                  er vi klar til at hjælpe.
                </p>
                <p>
                  Vores team af autoriserede VVS-folk har den nødvendige VVS-attest og mange års
                  erfaring inden for vandinstallation, <Link href="/varme-varmepumper" className="text-teal hover:text-teal-dark underline">varmeanlæg og varmepumper</Link>,
                  centralvarme og <Link href="/kloak-afloeb" className="text-teal hover:text-teal-dark underline">kloakarbejde</Link>.
                  Vi holder os altid opdateret med de nyeste regler og teknologier inden for branchen.
                </p>
                <p>
                  Vi tror på gennemsigtighed og ærlighed. Derfor får du altid et klart tilbud inden
                  vi går i gang, og vi holder dig løbende orienteret under hele processen. Se vores{" "}
                  <Link href="/priser" className="text-teal hover:text-teal-dark underline">gennemsigtige priser</Link> eller{" "}
                  <Link href="/kontakt" className="text-teal hover:text-teal-dark underline">kontakt os</Link> for et uforpligtende tilbud.
                  Din tilfredshed er vores vigtigste parameter.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="mb-6 rounded-xl overflow-hidden">
                <Image
                  src="/images/vvs-vaerktoj-1.jpg"
                  alt="Professionelt VVS-værktøj brugt af autoriserede VVS-installatører i Silkeborg"
                  width={940}
                  height={650}
                  className="w-full h-auto object-cover rounded-xl"
                />
              </div>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="rounded-xl overflow-hidden">
                  <Image
                    src="/images/badevaerelse-1.jpg"
                    alt="Badeværelsesrenovering udført af VVS-installatør i Silkeborg"
                    width={460}
                    height={320}
                    className="w-full h-auto object-cover rounded-xl"
                  />
                </div>
                <div className="rounded-xl overflow-hidden">
                  <Image
                    src="/images/varmeinstallation-1.jpg"
                    alt="Varmepumpe og varmeinstallation i Silkeborg-bolig"
                    width={460}
                    height={320}
                    className="w-full h-auto object-cover rounded-xl"
                  />
                </div>
              </div>
              <StaggerContainer className="grid grid-cols-1 gap-4">
                {[
                  { title: "Autoriseret", desc: "Gyldig VVS-attest og fuldt forsikret" },
                  { title: "Hurtig respons", desc: "Akut udrykning inden for 60 minutter" },
                  { title: "Fast pris", desc: "Gennemsigtige tilbud uden skjulte omkostninger" },
                  { title: "Lokal forankring", desc: "Kender Silkeborg og omegns installationer" },
                ].map((item) => (
                  <StaggerItem key={item.title}>
                    <div className="flex items-start gap-4 p-4 rounded-lg bg-sand/50">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0f766e" strokeWidth="2" className="shrink-0 mt-0.5">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                      <div>
                        <p className="font-heading text-gray-900">{item.title}</p>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-sand">
        <div className="max-w-[1200px] mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl md:text-4xl text-gray-900 mb-4">
                Det siger vores kunder
              </h2>
              <p className="text-gray-600">
                Vi er stolte af de mange tilfredse kunder i Silkeborg og omegn.
              </p>
            </div>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <StaggerItem key={i}>
                <Card>
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <svg key={j} width="16" height="16" viewBox="0 0 24 24" fill="#0f766e" stroke="none">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div className="border-t border-gray-100 pt-4">
                    <p className="font-heading text-gray-900 text-sm">{t.author}</p>
                    <p className="text-gray-500 text-xs">{t.location}</p>
                  </div>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white border-t border-gray-200">
        <div className="max-w-[800px] mx-auto px-6">
          <AnimatedSection>
            <h2 className="font-heading text-3xl md:text-4xl text-gray-900 mb-4 text-center">
              Ofte stillede spørgsmål
            </h2>
            <p className="text-gray-600 text-center mb-12">
              Find svar på de mest almindelige spørgsmål om VVS-arbejde i Silkeborg.
            </p>
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
