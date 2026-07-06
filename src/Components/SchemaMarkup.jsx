export default function SchemaMarkup() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "@id": "https://redsongroup.in/#organization",
            name: "Redson Pharmaceuticals",
            alternateName: "Redson",
            url: "https://redsongroup.in",
            logo: {
              "@type": "ImageObject",
              url: "https://redsongroup.in/logo.png",
              width: 200,
              height: 60,
            },
            image: "https://redsongroup.in/og-image.jpg",
            description:
              "Redson is a global pharmaceutical manufacturing partner specializing in contract manufacturing, third-party manufacturing, private label, and custom packaging solutions for healthcare brands worldwide.",
            foundingDate: "2010",
            numberOfEmployees: {
              "@type": "QuantitativeValue",
              minValue: 100,
              maxValue: 500,
            },
            address: {
              "@type": "PostalAddress",
              addressCountry: "IN",
            },
            contactPoint: [
              {
                "@type": "ContactPoint",
                contactType: "customer service",
                availableLanguage: ["English"],
              },
              {
                "@type": "ContactPoint",
                contactType: "sales",
                availableLanguage: ["English"],
              },
            ],
            areaServed: {
              "@type": "Place",
              name: "Worldwide",
            },
            sameAs: [
              "https://www.linkedin.com/company/redson",
              "https://twitter.com/RedsonPharma",
            ],
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Pharmaceutical Manufacturing Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Contract Manufacturing",
                    description:
                      "End-to-end pharmaceutical contract manufacturing across multiple dosage forms.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Third Party Manufacturing",
                    description:
                      "Third-party pharma manufacturing with full regulatory compliance.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Private Label Manufacturing",
                    description:
                      "Private label pharmaceutical products built around your brand.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Custom Packaging Solutions",
                    description:
                      "Tailored pharmaceutical packaging that meets global compliance standards.",
                  },
                },
              ],
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://redsongroup.in/#webpage",
            url: "https://redsongroup.in/",
            name: "WHO-GMP Pharmaceutical Manufacturing Company in India | Redson Pharmaceuticals",
            description:
"Redson Pharmaceuticals is a WHO-GMP certified pharmaceutical manufacturing company in India offering third-party manufacturing, contract manufacturing, private label solutions, and pharmaceutical packaging for global healthcare brands.",
            isPartOf: {
              "@id": "https://redsongroup.in/#website",
            },
            about: {
              "@id": "https://redsongroup.in/#organization",
            },
            primaryImageOfPage: {
              "@type": "ImageObject",
              url: "https://redsongroup.in/og-image.jpg",
            },
            inLanguage: "en-US",
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://redsongroup.in/",
                },
              ],
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["LocalBusiness", "MedicalBusiness"],
            "@id": "https://redsongroup.in/#localbusiness",
            name: "Redson Pharmaceuticals",
            url: "https://redsongroup.in",
            image: "https://redsongroup.in/og-image.jpg",
            description:
              "Global pharmaceutical manufacturing partner. Contract manufacturing, third-party manufacturing, private label, and custom packaging — certified, compliant, globally trusted.",
            address: {
              "@type": "PostalAddress",
              addressCountry: "IN",
            },
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                ],
                opens: "09:00",
                closes: "18:00",
              },
            ],
            priceRange: "$$",
            currenciesAccepted: "USD, INR",
            paymentAccepted: "Bank Transfer, Letter of Credit",
            areaServed: "Worldwide",
            hasMap: "https://www.google.com/maps/",
            knowsAbout: [
              "Pharmaceutical Manufacturing",
              "Contract Manufacturing",
              "Third Party Manufacturing",
              "Private Label Pharmaceuticals",
              "Dosage Form Manufacturing",
              "GMP Compliance",
              "WHO-GMP Certification",
              "EU GMP",
              "Regulatory Affairs",
              "Pharmaceutical Packaging",
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What pharmaceutical manufacturing services does Redson offer?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Redson offers contract manufacturing, third-party manufacturing, private label manufacturing, and custom packaging solutions — all built around your brand and delivered with full compliance.",
                },
              },
              {
                "@type": "Question",
                name: "What dosage forms does Redson manufacture?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Redson manufactures across multiple dosage forms including tablets, capsules, liquids, injectables, eye drops, and veterinary products.",
                },
              },
              {
                "@type": "Question",
                name: "Is Redson certified for pharmaceutical manufacturing?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Redson is certified for quality and compliance, holding WHO-GMP, EU GMP, and other relevant regulatory certifications ensuring every batch meets the highest pharmaceutical standards.",
                },
              },
              {
                "@type": "Question",
                name: "Does Redson supply globally?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Redson has a global supply network and exports to markets worldwide, delivering pharmaceutical products with confidence and precision.",
                },
              },
              {
                "@type": "Question",
                name: "Can Redson handle private label pharmaceutical products?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Absolutely. Redson's private label manufacturing allows healthcare brands to launch products under their own brand name, backed by Redson's manufacturing expertise and compliance infrastructure.",
                },
              },
              {
                "@type": "Question",
                name: "How does Redson ensure manufacturing quality?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Redson uses scientific-driven quality systems including advanced formulation development, stability studies, process automation, and investment support — ensuring quality is built into every batch.",
                },
              },
              {
                "@type": "Question",
                name: "How can I start working with Redson?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "You can start your pharmaceutical manufacturing journey with Redson by reaching out through their website contact form or inquiry section. Their team will guide you through the process.",
                },
              },
            ],
          }),
        }}
      />
    </>
  );
}
