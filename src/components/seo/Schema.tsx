import { SITE, CONTACT, MAPS } from "@/lib/data/site";

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
    logo: `${SITE.url}/images/logo.png`,
    sameAs: [
      "https://www.facebook.com/SandaneHomes",
      "https://www.instagram.com/sandanehomes/",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: CONTACT.telephone,
      contactType: "reservations",
      availableLanguage: ["English", "Hindi"],
    },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export function WebSiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
    publisher: { "@type": "Organization", name: SITE.name },
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE.url}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export function HotelSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    "@id": `${SITE.url}/#hotel`,
    name: SITE.name,
    alternateName: "The Glam",
    url: SITE.url,
    description: SITE.description,
    telephone: CONTACT.telephone,
    email: CONTACT.email,
    checkinTime: "12:00",
    checkoutTime: "11:00",
    numberofrooms: "22",
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Plot No. AE-189, Block A, Ansal Golf Link-1",
      addressLocality: "Greater Noida",
      addressRegion: "Uttar Pradesh",
      postalCode: "201315",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: MAPS.coordinates.lat,
      longitude: MAPS.coordinates.lng,
    },
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Complimentary Wi-Fi" },
      { "@type": "LocationFeatureSpecification", name: "Air Conditioning" },
      { "@type": "LocationFeatureSpecification", name: "Daily Housekeeping" },
      { "@type": "LocationFeatureSpecification", name: "24-Hour Front Desk" },
      { "@type": "LocationFeatureSpecification", name: "Power Backup" },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: SITE.rating,
      reviewCount: SITE.reviewCount,
      bestRating: "5",
      worstRating: "1",
    },
    makesOffer: [
      {
        "@type": "Offer",
        name: "Deluxe Room",
        description: "King bed, private bathroom, Wi-Fi, AC and workspace.",
      },
      {
        "@type": "Offer",
        name: "Luxury Room",
        description: "Spacious room with king bed, sitting area, workspace and Wi-Fi.",
      },
      {
        "@type": "Offer",
        name: "Suite Room",
        description: "Spacious suite with king bed, private bathroom, TV, kettle and Wi-Fi.",
      },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export function BreadcrumbSchema({ items }: { items: { name: string; url: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export function FaqSchema({ faqs }: { faqs: { q: string; a: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export function RoomSchema({
  name,
  description,
  image,
  url,
}: {
  name: string;
  description: string;
  image: string;
  url: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Room",
    name,
    description,
    image,
    url,
    occupancy: { "@type": "QuantitativeValue", maxValue: 2 },
    isIn: { "@id": `${SITE.url}/#hotel` },
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Air Conditioning" },
      { "@type": "LocationFeatureSpecification", name: "Complimentary Wi-Fi" },
      { "@type": "LocationFeatureSpecification", name: "Private Bathroom" },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
