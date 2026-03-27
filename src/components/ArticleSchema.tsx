interface Props {
  title: string;
  description: string;
  url: string;
  image?: string;
  datePublished?: string;
  dateModified?: string;
}

export default function ArticleSchema({
  title,
  description,
  url,
  image = "/images/vvs-vaerktoj-1.jpg",
  datePublished = "2025-06-01",
  dateModified = "2026-03-27",
}: Props) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url: `https://silkeborg-vvs.dk${url}`,
    image: `https://silkeborg-vvs.dk${image}`,
    datePublished,
    dateModified,
    author: {
      "@type": "Person",
      name: "Silkeborg VVS Team",
      url: "https://silkeborg-vvs.dk/kontakt",
    },
    publisher: {
      "@type": "Organization",
      name: "[FIRMA NAVN]",
      url: "https://silkeborg-vvs.dk",
      logo: {
        "@type": "ImageObject",
        url: "https://silkeborg-vvs.dk/images/vvs-vaerktoj-1.jpg",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://silkeborg-vvs.dk${url}`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
