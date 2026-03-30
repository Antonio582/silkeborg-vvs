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

const pricingCategories = [
  {
    title: "VVS-installation",
    description: "Priser for almindeligt VVS-arbejde",
    items: [
      { service: "Timepris VVS-montør", price: "495 - 650 kr.", note: "ekskl. moms" },
      { service: "Udskiftning af blandingsbatteri", price: "1.500 - 3.000 kr.", note: "inkl. montering" },
      { service: "Installation af toilet", price: "2.500 - 5.000 kr.", note: "inkl. montering" },
      { service: "Udskiftning af vask", price: "2.000 - 4.500 kr.", note: "inkl. montering" },
      { service: "Badeværelsesrenovering", price: "80.000 - 200.000 kr.", note: "komplet renovering" },
    ],
  },
  {
    title: "Varme og varmepumper",
    description: "Priser for varmeinstallationer",
    items: [
      { service: "Luft-til-vand varmepumpe", price: "80.000 - 150.000 kr.", note: "inkl. installation" },
      { service: "Luft-til-luft varmepumpe", price: "15.000 - 40.000 kr.", note: "inkl. installation" },
      { service: "Fjernvarmetilslutning", price: "25.000 - 50.000 kr.", note: "inkl. installation" },
      { service: "Gulvvarme installation", price: "350 - 550 kr./m²", note: "inkl. materialer" },
      { service: "Radiatorudskiftning", price: "3.000 - 6.000 kr.", note: "per radiator" },
    ],
  },
  {
    title: "Blikkenslagerarbejde",
    description: "Priser for tagrender og zinkarbejde",
    items: [
      { service: "Tagrender i zink", price: "250 - 450 kr./m", note: "inkl. montering" },
      { service: "Nedløbsrør", price: "200 - 350 kr./m", note: "inkl. montering" },
      { service: "Zinkinddækning", price: "800 - 1.500 kr./m", note: "afhængigt af kompleksitet" },
      { service: "Komplet tagrende-udskiftning", price: "15.000 - 35.000 kr.", note: "standard parcelhus" },
    ],
  },
  {
    title: "Kloak og afløb",
    description: "Priser for kloakarbejde",
    items: [
      { service: "TV-inspektion", price: "1.500 - 3.500 kr.", note: "inkl. rapport" },
      { service: "Afløbsrensning", price: "1.200 - 2.500 kr.", note: "mekanisk oprensning" },
      { service: "Kloakseparering", price: "30.000 - 80.000 kr.", note: "standard parcelhus" },
      { service: "Kloakrenovering", price: "20.000 - 60.000 kr.", note: "afhængigt af omfang" },
      { service: "Strømpeforing", price: "1.000 - 2.500 kr./m", note: "no-dig metode" },
    ],
  },
  {
    title: "Akut VVS",
    description: "Priser for akut udrykning",
    items: [
      { service: "Udkørselsgebyr (hverdage)", price: "500 - 750 kr.", note: "ekskl. moms" },
      { service: "Udkørselsgebyr (weekend/helligdag)", price: "750 - 1.250 kr.", note: "ekskl. moms" },
      { service: "Akut timepris", price: "650 - 950 kr.", note: "inkl. vagttillæg" },
      { service: "Sprængt vandrør (typisk)", price: "2.500 - 6.000 kr.", note: "inkl. udrykning" },
    ],
  },
];

const faqItems = [
  {
    question: "Er priserne inklusiv eller eksklusiv moms?",
    answer:
      "De angivne priser er vejledende og eksklusiv moms medmindre andet er angivet. For private kunder tillægges 25% moms. Erhvervskunder kan trække momsen fra. Vi angiver altid den præcise pris inkl. moms i vores tilbud, så du ved præcis hvad du skal betale.",
  },
  {
    question: "Giver I fast pris på VVS-arbejde?",
    answer:
      "Ja, vi tilbyder fast pris på de fleste VVS-opgaver efter en besigtigelse. Fast pris giver dig tryghed og forudsigelighed, da du kender den samlede pris inden arbejdet påbegyndes. For løbende service og reparationer arbejder vi på timebasis.",
  },
  {
    question: "Hvad er inkluderet i prisen?",
    answer:
      "Vores priser inkluderer typisk arbejdsløn, kørsel i Silkeborg-området og standard materialer. Specielle materialer, sanitet og armaturer faktureres separat til fordelagtige priser. Vi specificerer altid hvad der er inkluderet i det konkrete tilbud.",
  },
  {
    question: "Tilbyder I finansiering af større projekter?",
    answer:
      "Vi samarbejder med finansieringspartnere der kan tilbyde fordelagtige lånemuligheder til større VVS-projekter som badeværelsesrenoveringer og varmepumpeinstallationer. Kontakt os for mere information om finansieringsmuligheder.",
  },
  {
    question: "Hvornår skal der betales?",
    answer:
      "For mindre opgaver betales ved aflevering. For større projekter kan vi aftale delbetaling med en acontobetaling ved opstart og restbeløb ved aflevering. Vi sender en detaljeret faktura med specificering af alle ydelser og materialer.",
  },
];

export default function PriserClient() {
  return (
    <>
      <FAQSchema items={faqItems} />
      <ArticleSchema
        title="Priser for VVS-arbejde i Silkeborg"
        description="Gennemsigtige priser for VVS-arbejde i Silkeborg. VVS-installation, varmepumper, blikkenslager og kloak."
        url="/priser"
        image="/images/kobberroer-1.jpg"
      />

      <PageHeader
        title="Priser for VVS-arbejde i Silkeborg"
        description="Gennemsigtige og konkurrencedygtige priser for alle typer VVS-arbejde. Vi giver altid et uforpligtende tilbud inden vi går i gang."
        breadcrumbItems={[
          { label: "Forside", href: "/" },
          { label: "Priser" },
        ]}
      />

      {/* Intro */}
      <section className="py-16 bg-sand">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-3xl">
            <AnimatedSection>
              <div className="mb-8 rounded-xl overflow-hidden">
                <Image
                  src="/images/kobberroer-1.jpg"
                  alt="VVS-materialer og priser for installation i Silkeborg"
                  width={940}
                  height={650}
                  className="w-full h-auto object-cover rounded-xl"
                />
              </div>
              <Byline />
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Vi tror på gennemsigtighed og ærlighed når det kommer til priser. Nedenstående er
                  vejledende priser for de mest almindelige VVS-ydelser i Silkeborg-området. Priserne
                  kan variere afhængigt af opgavens specifikke omfang, adgangsforhold og materialevalg.
                </p>
                <p>
                  Vi tilbyder altid et uforpligtende tilbud med fast pris efter besigtigelse, så du
                  ved præcis hvad dit projekt vil koste inden vi går i gang.{" "}
                  <Link href="/kontakt" className="text-teal hover:text-teal-dark underline">Kontakt os</Link> for et
                  konkret tilbud tilpasset dine behov.
                </p>
                <p>
                  Hos Søhøjlandets VVS arbejder vi med konkurrencedygtige priser uden at gå på kompromis
                  med kvaliteten. Vi bruger anerkendte materialer fra førende producenter som Grohe,
                  Geberit og Uponor, hvilket sikrer holdbare installationer der fungerer optimalt i
                  mange år. Billige løsninger kan virke tillokkende, men de koster ofte mere på lang
                  sigt i form af reparationer og udskiftninger.
                </p>
                <p>
                  Vores priser for VVS-arbejde i Silkeborg inkluderer kørsel inden for kommunegrænsen,
                  standard materialer og professionel arbejdskraft fra autoriserede VVS-installatører.
                  Specielle armaturer, sanitet og særlige materialeønsker specificeres separat i
                  tilbuddet. Vi sørger altid for at du har det fulde overblik over omkostningerne
                  inden vi påbegynder arbejdet, så der ikke kommer ubehagelige overraskelser.
                </p>
                <p>
                  Priserne for <Link href="/vvs-installation" className="text-teal hover:text-teal-dark underline">VVS-installation</Link> varierer
                  naturligvis afhængigt af om det drejer sig om en simpel udskiftning af et blandingsbatteri
                  i Silkeborg C, en komplet badeværelsesrenovering i Balle, eller en ny vandinstallation
                  i Them. Vi tager altid udgangspunkt i en grundig besigtigelse, hvor vi vurderer
                  de eksisterende installationer, adgangsforhold og eventuelle udfordringer, før vi
                  giver et bindende tilbud.
                </p>
                <p>
                  For <Link href="/varme-varmepumper" className="text-teal hover:text-teal-dark underline">varmepumper i Silkeborg</Link> kan
                  prisen variere betydeligt afhængigt af pumpetypen, boligens størrelse og det
                  eksisterende varmeanlægs tilstand. En luft-til-vand varmepumpe er den mest populære
                  løsning i Silkeborg-området og giver den bedste balance mellem pris og besparelse.
                  Husk at der kan være tilskudsmuligheder der reducerer din investering.
                </p>
                <p>
                  <Link href="/blikkenslager" className="text-teal hover:text-teal-dark underline">Blikkenslagerarbejde</Link> som
                  tagrender og inddækninger prissættes pr. løbende meter, og den samlede pris afhænger
                  af husets størrelse, tagets kompleksitet og materialevalg. Zink er det foretrukne
                  materiale i Silkeborg-området grundet dets lange holdbarhed og æstetik.
                </p>
                <p>
                  Ved <Link href="/kloak-afloeb" className="text-teal hover:text-teal-dark underline">kloakarbejde</Link> anbefaler
                  vi altid at starte med en TV-inspektion, så vi kan give et præcist tilbud baseret
                  på den faktiske tilstand af dine kloakledninger. Det sparer dig for overraskelser
                  undervejs og sikrer at vi kan planlægge arbejdet effektivt. Ved{" "}
                  <Link href="/akut-vvs" className="text-teal hover:text-teal-dark underline">akut VVS-udkald</Link> gælder
                  særlige takster med vagttillæg, men vi oplyser altid prisen inden vi påbegynder
                  arbejdet.
                </p>
              </div>

              {/* Extra images */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="rounded-xl overflow-hidden">
                  <Image
                    src="/images/vvs-vaerktoj-2.jpg"
                    alt="VVS-værktøj og udstyr brugt af professionelle VVS-installatører i Silkeborg"
                    width={460}
                    height={320}
                    className="w-full h-auto object-cover rounded-xl"
                  />
                </div>
                <div className="rounded-xl overflow-hidden">
                  <Image
                    src="/images/badevaerelse-3.jpg"
                    alt="Nyt badeværelse efter renovering til fair VVS-priser i Silkeborg"
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

      {/* Pricing cards */}
      <section className="py-20 bg-white border-y border-gray-200">
        <div className="max-w-[1200px] mx-auto px-6">
          <StaggerContainer className="space-y-12">
            {pricingCategories.map((category) => (
              <StaggerItem key={category.title}>
                <Card>
                  <h2 className="font-heading text-2xl text-gray-900 mb-1">{category.title}</h2>
                  <p className="text-gray-500 text-sm mb-6">{category.description}</p>
                  <div className="divide-y divide-gray-100">
                    {category.items.map((item, i) => (
                      <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between py-4 gap-2">
                        <div>
                          <p className="text-gray-800">{item.service}</p>
                          <p className="text-gray-500 text-xs">{item.note}</p>
                        </div>
                        <p className="font-heading text-teal text-lg shrink-0">{item.price}</p>
                      </div>
                    ))}
                  </div>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-20 bg-sand">
        <div className="max-w-[1200px] mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl text-gray-900 mb-4">Vores prisgaranti</h2>
              <p className="text-gray-600 max-w-xl mx-auto">
                Vi er stolte af vores gennemsigtige og fair prissætning. Her er hvad du kan forvente.
              </p>
            </div>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Ingen skjulte omkostninger",
                desc: "Det tilbud du accepterer, er den pris du betaler. Vi informerer altid om eventuelle tillæg inden arbejdet påbegyndes. Ingen overraskelser på fakturaen.",
              },
              {
                title: "Uforpligtende tilbud",
                desc: "Vi giver altid et gratis og uforpligtende tilbud efter besigtigelse. Du kan sammenligne vores tilbud med andre VVS-firmaer uden at forpligte dig til noget.",
              },
              {
                title: "Kvalitet der holder",
                desc: "Vi bruger kun materialer af høj kvalitet fra anerkendte producenter. Det koster måske lidt mere her og nu, men du sparer på lang sigt ved at undgå dyre reparationer.",
              },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <Card className="h-full text-center">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0f766e" strokeWidth="1.5" className="mx-auto mb-4">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  <h3 className="font-heading text-lg text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
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
            <h2 className="font-heading text-2xl text-gray-900 mb-6">Se vores ydelser</h2>
            <div className="flex flex-wrap gap-4">
              <Link href="/vvs-installation" className="text-teal hover:text-teal-dark transition-colors border border-gray-200 rounded-lg px-4 py-2 text-sm">
                VVS-installation
              </Link>
              <Link href="/varme-varmepumper" className="text-teal hover:text-teal-dark transition-colors border border-gray-200 rounded-lg px-4 py-2 text-sm">
                Varme og varmepumper
              </Link>
              <Link href="/blikkenslager" className="text-teal hover:text-teal-dark transition-colors border border-gray-200 rounded-lg px-4 py-2 text-sm">
                Blikkenslagerarbejde
              </Link>
              <Link href="/kloak-afloeb" className="text-teal hover:text-teal-dark transition-colors border border-gray-200 rounded-lg px-4 py-2 text-sm">
                Kloak og afløb
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
              Spørgsmål om priser
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <FAQ items={faqItems} />
          </AnimatedSection>
        </div>
      </section>

      <CTASection
        title="Få et uforpligtende tilbud"
        description="Kontakt os i dag, og vi giver dig et konkret tilbud tilpasset dit projekt."
      />
    </>
  );
}
