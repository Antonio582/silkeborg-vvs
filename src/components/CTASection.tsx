"use client";

import Link from "next/link";
import AnimatedSection from "./AnimatedSection";

interface Props {
  title?: string;
  description?: string;
}

export default function CTASection({
  title = "Klar til at komme i gang?",
  description = "Kontakt os i dag for en uforpligtende snak om dit VVS-projekt. Vi dækker hele Silkeborg og omegn.",
}: Props) {
  return (
    <section className="py-20 bg-teal">
      <div className="max-w-[1200px] mx-auto px-6 text-center">
        <AnimatedSection>
          <h2 className="font-heading text-3xl md:text-4xl text-white mb-4">{title}</h2>
          <p className="text-teal-light/80 text-lg mb-8 max-w-xl mx-auto">{description}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center gap-2 bg-white text-teal px-8 py-3 rounded-lg font-medium hover:bg-sand transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
              </svg>
              Ring [TELEFON]
            </Link>
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center gap-2 border border-white/30 text-white px-8 py-3 rounded-lg hover:bg-white/10 transition-colors"
            >
              Få et tilbud
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
