import { Helmet } from "react-helmet-async";
import { useLanguage } from "@/lib/i18n";

const SITE_URL = "https://cekmekoy.ozelbogaziciilgiokullari.k12.tr";
const OG_IMAGE = `${SITE_URL}/images/og-share.png`;
const SCHOOL_NAME = "Özel Boğaziçi İlgi Koleji Çekmeköy";

interface SEOHeadProps {
  titleTR: string;
  titleEN: string;
  descriptionTR: string;
  descriptionEN: string;
  canonical: string;
  jsonLd?: object | object[];
}

export function SEOHead({ titleTR, titleEN, descriptionTR, descriptionEN, canonical, jsonLd }: SEOHeadProps) {
  const { lang } = useLanguage();
  const title = lang === "tr" ? titleTR : titleEN;
  const description = lang === "tr" ? descriptionTR : descriptionEN;
  const canonicalUrl = `${SITE_URL}${canonical}`;

  return (
    <Helmet>
      <html lang={lang} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content={lang === "tr" ? "tr_TR" : "en_US"} />
      <meta property="og:site_name" content={SCHOOL_NAME} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={OG_IMAGE} />

      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(Array.isArray(jsonLd) ? jsonLd : jsonLd)}
        </script>
      )}
    </Helmet>
  );
}

export const SCHOOL_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "School",
  "name": "Özel Boğaziçi İlgi Koleji Çekmeköy",
  "alternateName": ["Boğaziçi İlgi Koleji", "Çekmeköy Anaokulu", "Çekmeköy İlkokulu", "Çekmeköy Ortaokulu"],
  "description": "Çekmeköy'de anaokulu (3-6 yaş), ilkokul (1-4. sınıf) ve ortaokul (5-8. sınıf) kademelerinde kaliteli özel eğitim.",
  "url": SITE_URL,
  "telephone": "+902166428642",
  "email": "info@ozelbogaziciilgiokullari.k12.tr",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Mimar Sinan, Yeşil Kayalar Cd. No: 46 - 48",
    "addressLocality": "Çekmeköy",
    "addressRegion": "İstanbul",
    "postalCode": "34782",
    "addressCountry": "TR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 41.0794744,
    "longitude": 29.1100000
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    "opens": "07:00",
    "closes": "18:30"
  },
  "image": `${SITE_URL}/images/building-drone-1.webp`,
  "logo": `${SITE_URL}/images/navbar-logo.png`,
  "hasMap": "https://maps.google.com/?q=Özel+Boğaziçi+İlgi+Koleji+Çekmeköy",
  "foundingDate": "2000",
  "numberOfEmployees": { "@type": "QuantitativeValue", "value": 50 },
  "educationalLevel": ["Preschool", "Primary School", "Middle School"],
  "teaches": ["Türkçe", "Matematik", "İngilizce", "Fen Bilimleri", "Sosyal Bilgiler", "STEM", "Robotik", "Müzik", "Görsel Sanatlar"],
  "sameAs": [
    "https://www.instagram.com",
    "https://www.facebook.com"
  ]
};
