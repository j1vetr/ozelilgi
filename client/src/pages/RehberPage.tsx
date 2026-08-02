import { PageHeader } from "@/components/ui/PageHeader";
import { SEOHead, SCHOOL_SCHEMA } from "@/components/SEOHead";
import { GUIDES, getGuideBySlug } from "@/lib/guide-content";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link, useRoute } from "wouter";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ArrowLeft,
  BookOpen,
  Calendar,
  ChevronRight,
  Clock,
  HelpCircle,
  Link2,
  Phone,
} from "lucide-react";

const SITE_URL = "https://ozelbogaziciilgiokullari.k12.tr";

function formatDate(iso: string) {
  const [y, m, d] = iso.split("-");
  const months = [
    "Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran",
    "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık",
  ];
  return `${parseInt(d, 10)} ${months[parseInt(m, 10) - 1]} ${y}`;
}

function GuideCTA({ text }: { text: string }) {
  return (
    <div className="mt-10 rounded-xl bg-gradient-to-r from-primary to-blue-700 p-6 sm:p-8 text-white">
      <h2 className="font-display text-lg sm:text-xl font-bold mb-2">
        Sizi Kampüsümüze Bekliyoruz
      </h2>
      <p className="text-sm text-white/85 mb-5 max-w-2xl">{text}</p>
      <div className="flex flex-wrap gap-3">
        <Link href="/kayit/on-kayit">
          <Button
            className="bg-white text-primary hover:bg-white/90 font-semibold"
            data-testid="button-guide-cta-onkayit"
          >
            Ön Kayıt Formu <ChevronRight className="w-4 h-4 ml-1" />
          </Button>
        </Link>
        <a href="tel:+902166428642">
          <Button
            variant="outline"
            className="border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white"
            data-testid="button-guide-cta-phone"
          >
            <Phone className="w-4 h-4 mr-1.5" /> 0216 642 8 642
          </Button>
        </a>
      </div>
    </div>
  );
}

function GuideDetail({ slug }: { slug: string }) {
  const guide = getGuideBySlug(slug);

  if (!guide) {
    return (
      <div className="bg-background min-h-screen">
        <PageHeader
          title="Rehber Bulunamadı"
          breadcrumbs={[{ label: "Veli Rehberi", href: "/rehber" }]}
        />
        <div className="container py-16 px-4 text-center">
          <p className="text-muted-foreground mb-6">
            Aradığınız rehber içeriği bulunamadı veya taşınmış olabilir.
          </p>
          <Link href="/rehber">
            <Button data-testid="button-back-to-guides">
              <ArrowLeft className="w-4 h-4 mr-1.5" /> Tüm Rehberler
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: guide.faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.metaDescription,
    datePublished: guide.date,
    dateModified: guide.date,
    inLanguage: "tr-TR",
    mainEntityOfPage: `${SITE_URL}/rehber/${guide.slug}`,
    author: {
      "@type": "Organization",
      name: "Özel Boğaziçi İlgi Koleji Çekmeköy",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Özel Boğaziçi İlgi Koleji Çekmeköy",
      logo: { "@type": "ImageObject", url: `${SITE_URL}/images/navbar-logo.png` },
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Veli Rehberi", item: `${SITE_URL}/rehber` },
      { "@type": "ListItem", position: 3, name: guide.title, item: `${SITE_URL}/rehber/${guide.slug}` },
    ],
  };

  return (
    <div className="bg-background min-h-screen">
      <SEOHead
        titleTR={guide.metaTitle}
        titleEN={guide.metaTitle}
        descriptionTR={guide.metaDescription}
        descriptionEN={guide.metaDescription}
        canonical={`/rehber/${guide.slug}`}
        jsonLd={[articleSchema, faqSchema, breadcrumbSchema, SCHOOL_SCHEMA]}
      />
      <PageHeader
        title={guide.title}
        breadcrumbs={[
          { label: "Veli Rehberi", href: "/rehber" },
          { label: guide.category, href: `/rehber/${guide.slug}` },
        ]}
      />

      <div className="container py-10 px-4 max-w-3xl">
        <Link href="/rehber">
          <Button
            variant="ghost"
            size="sm"
            className="mb-4 pl-0 hover:bg-transparent text-muted-foreground text-xs"
            data-testid="button-guide-back"
          >
            <ArrowLeft className="mr-1.5 w-3.5 h-3.5" /> Tüm Rehberler
          </Button>
        </Link>

        <article>
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <Badge
              variant="secondary"
              className="text-[11px] px-2 py-0.5 bg-brand-blue/10 text-brand-blue border-0"
            >
              {guide.category}
            </Badge>
            <span className="text-muted-foreground flex items-center text-xs">
              <Calendar className="w-3 h-3 mr-1" /> {formatDate(guide.date)}
            </span>
            <span className="text-muted-foreground flex items-center text-xs">
              <Clock className="w-3 h-3 mr-1" /> {guide.readingMinutes} dk okuma
            </span>
          </div>

          <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-5 leading-snug">
            {guide.title}
          </h1>

          {guide.intro.map((p, i) => (
            <p key={i} className="text-sm sm:text-[15px] leading-relaxed text-muted-foreground mb-4">
              {p}
            </p>
          ))}

          {guide.sections.map((section, i) => (
            <section key={i} className="mt-8">
              <h2 className="font-display text-lg sm:text-xl font-bold text-foreground mb-3">
                {section.heading}
              </h2>
              {section.paragraphs.map((p, j) => (
                <p key={j} className="text-sm sm:text-[15px] leading-relaxed text-muted-foreground mb-3">
                  {p}
                </p>
              ))}
              {section.list && (
                <ul className="space-y-2 mt-2 mb-3">
                  {section.list.map((item, k) => (
                    <li key={k} className="flex items-start gap-2 text-sm sm:text-[15px] text-muted-foreground">
                      <ChevronRight className="w-4 h-4 mt-0.5 shrink-0 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          <section className="mt-10">
            <div className="flex items-center gap-2 mb-4">
              <HelpCircle className="w-5 h-5 text-primary" />
              <h2 className="font-display text-lg sm:text-xl font-bold text-foreground">
                Sık Sorulan Sorular
              </h2>
            </div>
            <Accordion type="single" collapsible className="w-full">
              {guide.faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger
                    className="text-left text-sm font-semibold"
                    data-testid={`faq-question-${i}`}
                  >
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

          <GuideCTA text={guide.ctaText} />

          <section className="mt-10 pt-6 border-t border-border">
            <div className="flex items-center gap-2 mb-3">
              <Link2 className="w-4 h-4 text-primary" />
              <h2 className="font-display text-base font-bold text-foreground">
                İlgili Sayfalar
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-2">
              {guide.related.map((link, i) => (
                <Link key={i} href={link.href}>
                  <div
                    className="group flex items-center gap-2 p-3 rounded-lg border border-border hover:border-primary/30 hover:bg-muted/50 transition-colors"
                    data-testid={`related-link-${i}`}
                  >
                    <ChevronRight className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                      {link.label}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          <section className="mt-8">
            <h2 className="font-display text-base font-bold text-foreground mb-3">
              Diğer Rehberler
            </h2>
            <div className="space-y-2">
              {GUIDES.filter((g) => g.slug !== guide.slug).map((g) => (
                <Link key={g.slug} href={`/rehber/${g.slug}`}>
                  <div className="group flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors">
                    <BookOpen className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-sm text-foreground group-hover:text-primary transition-colors line-clamp-1">
                      {g.title}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </article>
      </div>
    </div>
  );
}

export default function RehberPage() {
  const [, params] = useRoute("/rehber/:slug");
  const slug = params?.slug;

  if (slug) {
    return <GuideDetail slug={slug} />;
  }

  const listSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Veli Rehberi | Özel Boğaziçi İlgi Koleji Çekmeköy",
    description:
      "Çekmeköy'de okul arayan veliler için okul seçimi, kayıt, fiyatlar ve LGS hazırlık rehberleri.",
    url: `${SITE_URL}/rehber`,
    hasPart: GUIDES.map((g) => ({
      "@type": "Article",
      headline: g.title,
      url: `${SITE_URL}/rehber/${g.slug}`,
      datePublished: g.date,
    })),
  };

  return (
    <div className="bg-background min-h-screen">
      <SEOHead
        titleTR="Veli Rehberi: Çekmeköy'de Okul Seçimi, Kayıt ve Fiyatlar | Boğaziçi İlgi Koleji"
        titleEN="Parent Guides: School Selection, Enrollment & Fees in Çekmeköy"
        descriptionTR="Çekmeköy'de özel okul, anaokulu ve ortaokul arayan veliler için hazırlanan rehberler: okul seçimi kriterleri, kayıt takvimi, fiyat rehberi ve LGS hazırlık."
        descriptionEN="Guides for parents searching for private schools, preschools and middle schools in Çekmeköy: selection criteria, enrollment calendar, fees and LGS preparation."
        canonical="/rehber"
        jsonLd={[listSchema, SCHOOL_SCHEMA]}
      />
      <PageHeader
        title="Veli Rehberi"
        breadcrumbs={[{ label: "Veli Rehberi", href: "/rehber" }]}
      />

      <div className="container py-10 px-4 max-w-4xl">
        <p className="text-sm sm:text-[15px] text-muted-foreground leading-relaxed mb-8 max-w-3xl">
          Çekmeköy'de okul arayan veliler için hazırladığımız rehberlerde; özel okul
          seçiminden anaokulu kaydına, fiyat araştırmasından LGS hazırlığına kadar
          karar sürecinizde ihtiyaç duyacağınız tüm bilgileri bulabilirsiniz.
        </p>

        <div className="grid sm:grid-cols-2 gap-4">
          {GUIDES.map((guide) => (
            <Link key={guide.slug} href={`/rehber/${guide.slug}`}>
              <div
                className="group h-full bg-white rounded-lg border border-border p-5 hover:shadow-md hover:border-primary/20 transition-all duration-300 flex flex-col"
                data-testid={`guide-card-${guide.slug}`}
              >
                <div className="flex items-center gap-2 mb-3">
                  <Badge
                    variant="secondary"
                    className="text-[11px] px-2 py-0.5 bg-brand-blue/10 text-brand-blue border-0"
                  >
                    {guide.category}
                  </Badge>
                  <span className="text-[11px] text-muted-foreground flex items-center gap-0.5">
                    <Clock className="w-3 h-3" /> {guide.readingMinutes} dk
                  </span>
                </div>
                <h2 className="font-display font-bold text-[15px] sm:text-base text-foreground group-hover:text-primary transition-colors leading-snug mb-2">
                  {guide.title}
                </h2>
                <p className="text-xs sm:text-[13px] text-muted-foreground line-clamp-3 flex-1">
                  {guide.metaDescription}
                </p>
                <span className="text-[12px] text-primary font-medium flex items-center gap-0.5 group-hover:gap-1.5 transition-all mt-3">
                  Rehberi Oku <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <GuideCTA text="Rehberlerimizde yanıtını bulamadığınız sorular için kayıt birimimiz her zaman yanınızda. Kampüsümüzü ziyaret edin, eğitim modelimizi yerinde tanıyın." />
      </div>
    </div>
  );
}
