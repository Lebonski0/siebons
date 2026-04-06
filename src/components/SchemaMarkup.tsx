import React from 'react';

export default function SchemaMarkup() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "PlumbingService",
    "name": "AquaFlow Loodgieter West-Vlaanderen",
    "image": "https://picsum.photos/seed/plumbing/1200/630",
    "@id": "https://aquaflow-loodgieter.be/#organization",
    "url": "https://aquaflow-loodgieter.be",
    "telephone": "+32 470 00 00 00",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Grote Markt 1",
      "addressLocality": "Brugge",
      "postalCode": "8000",
      "addressRegion": "West-Vlaanderen",
      "addressCountry": "BE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 51.2093,
      "longitude": 3.2247
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Brugge"
      },
      {
        "@type": "City",
        "name": "Oostende"
      },
      {
        "@type": "City",
        "name": "Kortrijk"
      },
      {
        "@type": "City",
        "name": "Roeselare"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
