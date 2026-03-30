import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-[1200px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Info */}
          <div>
            <h3 className="font-heading text-white text-lg mb-4">Søhøjlandets VVS</h3>
            <p className="text-sm leading-relaxed mb-4">
              Autoriseret VVS-installatør i Silkeborg med mange års erfaring inden for
              vandinstallation, varmeanlæg, blikkenslagerarbejde og kloakarbejde.
            </p>
            <p className="text-sm">CVR: [CVR-NUMMER]</p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading text-white text-lg mb-4">Ydelser</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/vvs-installation" className="hover:text-teal-light transition-colors">VVS-installation</Link></li>
              <li><Link href="/varme-varmepumper" className="hover:text-teal-light transition-colors">Varme og varmepumper</Link></li>
              <li><Link href="/blikkenslager" className="hover:text-teal-light transition-colors">Blikkenslagerarbejde</Link></li>
              <li><Link href="/akut-vvs" className="hover:text-teal-light transition-colors">Akut VVS</Link></li>
              <li><Link href="/kloak-afloeb" className="hover:text-teal-light transition-colors">Kloak og afløb</Link></li>
              <li><Link href="/priser" className="hover:text-teal-light transition-colors">Priser</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-white text-lg mb-4">Kontakt</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="mt-0.5 shrink-0">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                [ADRESSE, SILKEBORG]
              </li>
              <li className="flex items-center gap-3">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="shrink-0">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
                
              </li>
              <li className="flex items-center gap-3">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="shrink-0">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M22 7l-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7" />
                </svg>
                info@silkeborg-vvs.dk
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Søhøjlandets VVS. Alle rettigheder forbeholdes.</p>
        </div>
      </div>
    </footer>
  );
}
