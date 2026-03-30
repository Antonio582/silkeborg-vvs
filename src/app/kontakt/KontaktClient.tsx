"use client";

import { useState } from "react";
import { motion } from "framer-motion";
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

function FormField({
  label,
  type = "text",
  name,
  required = false,
  textarea = false,
}: {
  label: string;
  type?: string;
  name: string;
  required?: boolean;
  textarea?: boolean;
}) {
  const [focused, setFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  const inputClasses =
    "w-full bg-transparent border border-gray-300 rounded-lg px-4 py-3 text-gray-800 outline-none transition-all duration-300 focus:border-teal focus:ring-1 focus:ring-teal/20";

  return (
    <div className="relative">
      <motion.label
        className="absolute left-4 pointer-events-none text-gray-500 origin-left"
        animate={{
          y: focused || hasValue ? -24 : 12,
          scale: focused || hasValue ? 0.85 : 1,
          color: focused ? "#0f766e" : "#78716c",
        }}
        transition={{ duration: 0.2 }}
      >
        {label}
        {required && " *"}
      </motion.label>
      {textarea ? (
        <textarea
          name={name}
          required={required}
          rows={5}
          className={inputClasses + " resize-none"}
          onFocus={() => setFocused(true)}
          onBlur={(e) => {
            setFocused(false);
            setHasValue(e.target.value.length > 0);
          }}
        />
      ) : (
        <input
          type={type}
          name={name}
          required={required}
          className={inputClasses}
          onFocus={() => setFocused(true)}
          onBlur={(e) => {
            setFocused(false);
            setHasValue(e.target.value.length > 0);
          }}
        />
      )}
    </div>
  );
}

const faqItems = [
  {
    question: "Hvordan får jeg et tilbud?",
    answer:
      "Du kan kontakte os via kontaktformularen på denne side, kontakte os  eller sende en mail til info@silkeborg-vvs.dk. Vi aftaler en besigtigelse, og derefter modtager du et detaljeret tilbud med fast pris inden for 1-3 hverdage.",
  },
  {
    question: "Hvad er jeres åbningstider?",
    answer:
      "Vores normale åbningstider er mandag-fredag 07:00-16:00. Vi har akut VVS-døgnvagt, hvor du kan kontakte os  døgnet rundt ved akutte situationer. Uden for normal arbejdstid tillægges vagttillæg.",
  },
  {
    question: "Hvor hurtigt kan I komme ud?",
    answer:
      "For planlagte opgaver aftaler vi en dato der passer dig. Typisk kan vi komme ud til besigtigelse inden for en uge. Ved akutte VVS-problemer rykker vi ud inden for 30-60 minutter i Silkeborg by.",
  },
  {
    question: "Hvilke betalingsmetoder accepterer I?",
    answer:
      "Vi accepterer betaling via bankoverførsel, MobilePay og betalingskort. For større projekter tilbyder vi delbetaling med acontobetaling ved opstart og slutbetaling ved aflevering.",
  },
  {
    question: "Dækker I hele Silkeborg Kommune?",
    answer:
      "Ja, vi dækker hele Silkeborg Kommune inklusiv Silkeborg C, Them, Kjellerup, Sorring, Funder, Balle, Alderslyst, Søholt og alle omkringliggende områder. Vi kører også til nabokommunerne efter aftale.",
  },
];

export default function KontaktClient() {
  return (
    <>
      <FAQSchema items={faqItems} />
      <ArticleSchema
        title="Kontakt VVS Silkeborg"
        description="Kontakt os for et uforpligtende tilbud på VVS-arbejde i Silkeborg."
        url="/kontakt"
        image="/images/vvs-vaerktoj-1.jpg"
      />

      <PageHeader
        title="Kontakt os"
        description="Vi er altid klar til at hjælpe. Kontakt os, send en mail eller udfyld formularen, og vi vender tilbage hurtigst muligt."
        breadcrumbItems={[
          { label: "Forside", href: "/" },
          { label: "Kontakt" },
        ]}
      />

      <section className="py-20 bg-sand">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact form */}
            <AnimatedSection>
              <Card>
                <h2 className="font-heading text-2xl text-gray-900 mb-6">
                  Send os en besked
                </h2>
                <form className="space-y-8" action="#" method="POST">
                  <FormField label="Navn" name="name" required />
                  <FormField label="E-mail" name="email" type="email" required />
                  <FormField label="Telefon" name="phone" type="tel" />
                  <div className="relative">
                    <label className="block text-sm text-gray-600 mb-2">Hvad drejer det sig om?</label>
                    <select
                      name="service"
                      className="w-full bg-transparent border border-gray-300 rounded-lg px-4 py-3 text-gray-800 outline-none transition-all duration-300 focus:border-teal focus:ring-1 focus:ring-teal/20 appearance-none cursor-pointer"
                    >
                      <option value="">Vælg ydelse</option>
                      <option value="vvs">VVS-installation</option>
                      <option value="varme">Varme og varmepumper</option>
                      <option value="blikkenslager">Blikkenslagerarbejde</option>
                      <option value="akut">Akut VVS</option>
                      <option value="kloak">Kloak og afløb</option>
                      <option value="andet">Andet</option>
                    </select>
                  </div>
                  <FormField label="Beskriv din opgave" name="message" textarea required />
                  <button
                    type="submit"
                    className="w-full bg-teal text-white py-3.5 rounded-lg font-medium hover:bg-teal-dark transition-colors cursor-pointer"
                  >
                    Send besked
                  </button>
                  <p className="text-xs text-gray-500">
                    Vi svarer typisk inden for 24 timer på hverdage.
                  </p>
                </form>
              </Card>
            </AnimatedSection>

            {/* Contact info */}
            <div className="space-y-8">
              <AnimatedSection delay={0.1}>
                <Card>
                  <h2 className="font-heading text-2xl text-gray-900 mb-6">
                    Kontaktoplysninger
                  </h2>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0f766e" strokeWidth="1.5" className="shrink-0 mt-0.5">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      <div>
                        <p className="font-heading text-gray-900">Adresse</p>
                        <p className="text-gray-600 text-sm">[ADRESSE, SILKEBORG]</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0f766e" strokeWidth="1.5" className="shrink-0 mt-0.5">
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                      </svg>
                      <div>
                        <p className="font-heading text-gray-900">Telefon</p>
                        <p className="text-gray-600 text-sm"></p>
                        <p className="text-gray-500 text-xs mt-1">Akut VVS: Døgnvagt</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0f766e" strokeWidth="1.5" className="shrink-0 mt-0.5">
                        <rect x="2" y="4" width="20" height="16" rx="2" />
                        <path d="M22 7l-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7" />
                      </svg>
                      <div>
                        <p className="font-heading text-gray-900">E-mail</p>
                        <p className="text-gray-600 text-sm">info@silkeborg-vvs.dk</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0f766e" strokeWidth="1.5" className="shrink-0 mt-0.5">
                        <rect x="3" y="4" width="18" height="18" rx="2" />
                        <path d="M16 2v4M8 2v4M3 10h18" />
                      </svg>
                      <div>
                        <p className="font-heading text-gray-900">CVR</p>
                        <p className="text-gray-600 text-sm">[CVR-NUMMER]</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <Card>
                  <h2 className="font-heading text-2xl text-gray-900 mb-6">
                    Åbningstider
                  </h2>
                  <div className="space-y-3">
                    {[
                      { day: "Mandag - Fredag", hours: "07:00 - 16:00" },
                      { day: "Lørdag", hours: "Efter aftale" },
                      { day: "Søndag", hours: "Lukket" },
                      { day: "Akut VVS", hours: "Døgnvagt (24/7)" },
                    ].map((item) => (
                      <div key={item.day} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                        <span className="text-gray-700 text-sm">{item.day}</span>
                        <span className="text-gray-900 font-medium text-sm">{item.hours}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <Card>
                  <h2 className="font-heading text-2xl text-gray-900 mb-4">
                    Dækningsområde
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    Vi dækker hele Silkeborg Kommune og har kort afstand til alle lokalområder.
                    Vores VVS-folk kender området indgående og er hurtigt fremme.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Silkeborg C", "Them", "Kjellerup", "Sorring", "Funder", "Balle", "Alderslyst", "Søholt"].map(
                      (area) => (
                        <span key={area} className="text-xs bg-sand px-3 py-1.5 rounded-full text-gray-700">
                          {area}
                        </span>
                      )
                    )}
                  </div>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Why contact us */}
      <section className="py-20 bg-white border-t border-gray-200">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-3xl">
            <AnimatedSection>
              <div className="mb-8 rounded-xl overflow-hidden">
                <Image
                  src="/images/vvs-vaerktoj-1.jpg"
                  alt="Professionelt VVS-udstyr fra din lokale VVS-installatør i Silkeborg"
                  width={940}
                  height={650}
                  className="w-full h-auto object-cover rounded-xl"
                />
              </div>
              <h2 className="font-heading text-3xl text-gray-900 mb-6">
                Derfor skal du kontakte os
              </h2>
              <Byline />
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Når du vælger VVS-installatør i Silkeborg, er det vigtigt at vælge en virksomhed
                  med den rette erfaring, autorisation og lokalkendskab. Hos Søhøjlandets VVS kombinerer
                  vi mange års faglig ekspertise med et dybt kendskab til Silkeborg og omegns
                  bygninger, vandforsyning og kloaksystemer. Vi er ikke bare en VVS-virksomhed — vi
                  er din lokale samarbejdspartner.
                </p>
                <p>
                  Fra den første henvendelse til det færdige resultat prioriterer vi klar kommunikation
                  og gennemsigtighed. Du modtager et detaljeret tilbud med fast pris, og vi holder dig
                  løbende orienteret om fremdriften. Vores mål er at du føler dig tryg og velinformeret
                  gennem hele processen, uanset om det drejer sig om en simpel reparation eller en
                  omfattende renovering.
                </p>
                <p>
                  Vi er stolte af vores ry i Silkeborg for at levere håndværk af høj kvalitet til
                  fair priser. Mange af vores kunder er kommet til os gennem anbefalinger fra venner
                  og naboer, og det er den bedste anerkendelse vi kan få. Se vores{" "}
                  <Link href="/priser" className="text-teal hover:text-teal-dark underline">gennemsigtige prisoversigt</Link> og
                  oplev selv den forskel som professionel VVS-service gør.
                </p>
                <p>
                  Uanset om du bor i Silkeborg C, Them, Kjellerup, Sorring, Funder, Balle,
                  Alderslyst eller Søholt, kan vi hurtigt være fremme hos dig. Vi kender de lokale
                  forhold, bygningstyper og installationsstandarder i hele Silkeborg Kommune, og
                  vi ved præcis hvilke løsninger der fungerer bedst i de forskellige boligområder.
                  Vores lokale forankring betyder kortere køretider, hurtigere respons og et
                  personligt kendskab til mange af de ejendomme vi arbejder i.
                </p>
                <p>
                  Vi tilbyder et bredt udvalg af ydelser: <Link href="/vvs-installation" className="text-teal hover:text-teal-dark underline">VVS-installation</Link> til
                  badeværelse og køkken, <Link href="/varme-varmepumper" className="text-teal hover:text-teal-dark underline">varmepumper og varmeanlæg</Link>,
                  professionelt <Link href="/blikkenslager" className="text-teal hover:text-teal-dark underline">blikkenslagerarbejde</Link> med
                  tagrender og zink, <Link href="/kloak-afloeb" className="text-teal hover:text-teal-dark underline">kloakarbejde og afløbsrensning</Link>,
                  samt <Link href="/akut-vvs" className="text-teal hover:text-teal-dark underline">akut VVS-service</Link> med
                  døgnvagt. Hvad end dit behov er, finder vi den rigtige løsning sammen.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Internal links */}
      <section className="py-16 bg-sand border-t border-gray-200">
        <div className="max-w-[1200px] mx-auto px-6">
          <AnimatedSection>
            <h2 className="font-heading text-2xl text-gray-900 mb-6">Udforsk vores ydelser</h2>
            <div className="flex flex-wrap gap-4">
              <Link href="/vvs-installation" className="text-teal hover:text-teal-dark transition-colors border border-gray-200 rounded-lg px-4 py-2 text-sm">
                VVS-installation
              </Link>
              <Link href="/varme-varmepumper" className="text-teal hover:text-teal-dark transition-colors border border-gray-200 rounded-lg px-4 py-2 text-sm">
                Varme og varmepumper
              </Link>
              <Link href="/akut-vvs" className="text-teal hover:text-teal-dark transition-colors border border-gray-200 rounded-lg px-4 py-2 text-sm">
                Akut VVS-service
              </Link>
              <Link href="/kloak-afloeb" className="text-teal hover:text-teal-dark transition-colors border border-gray-200 rounded-lg px-4 py-2 text-sm">
                Kloak og afløb
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
      <section className="py-20 bg-white">
        <div className="max-w-[800px] mx-auto px-6">
          <AnimatedSection>
            <h2 className="font-heading text-3xl text-gray-900 mb-12 text-center">
              Praktiske spørgsmål
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <FAQ items={faqItems} />
          </AnimatedSection>
        </div>
      </section>

      <CTASection
        title="Kontakt os nu"
        description="Vi er klar til at hjælpe dig med dit VVS-projekt i Silkeborg."
      />
    </>
  );
}
