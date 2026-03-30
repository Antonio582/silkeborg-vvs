export default function LocalBusinessSchema() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Plumber",
    name: "[FIRMA NAVN]",
    description: "Autoriseret VVS-installatør i Silkeborg. VVS-installation, varmepumper, blikkenslagerarbejde, akut VVS og kloakarbejde.",
    url: "https://silkeborg-vvs.dk",
    telephone: "",
    address: {
      "@type": "PostalAddress",
      streetAddress: "[ADRESSE]",
      addressLocality: "Silkeborg",
      postalCode: "8600",
      addressCountry: "DK",
    },
    areaServed: {
      "@type": "City",
      name: "Silkeborg",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:00",
        closes: "16:00",
      },
    ],
    priceRange: "$$",
    sameAs: [],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
