import { useRoute } from "wouter";
import { motion } from "framer-motion";
import { PageHeader } from "@/components/ui/PageHeader";
import { useLanguage } from "@/lib/i18n";
import { T, getPageContentTranslated } from "@/lib/translations";
import { Button } from "@/components/ui/button";
import { SEOHead } from "@/components/SEOHead";
import { ArrowRight, Baby, BookOpen, GraduationCap, CheckCircle, ChevronRight, Star, Palette } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";

const AKADEMIK_SEO: Record<string, { titleTR: string; titleEN: string; descTR: string; descEN: string }> = {
  anaokulu: {
    titleTR: "Çekmeköy Anaokulu | Özel Boğaziçi İlgi Koleji",
    titleEN: "Preschool in Çekmeköy | Özel Boğaziçi İlgi Koleji",
    descTR: "Çekmeköy anaokulu arıyorsanız doğru adrestesiniz! Boğaziçi İlgi Koleji'nde 3-6 yaş için oyun temelli öğrenme, İngilizce eğitim, müzik ve yaratıcı atölyeler.",
    descEN: "Looking for a preschool in Çekmeköy? Boğaziçi İlgi Koleji offers play-based learning, English education, music and creative workshops for ages 3-6.",
  },
  "oyun-grubu": {
    titleTR: "Çekmeköy Oyun Grubu | Özel Boğaziçi İlgi Koleji",
    titleEN: "Play Group in Çekmeköy | Özel Boğaziçi İlgi Koleji",
    descTR: "Çekmeköy'de 2-3 yaş oyun grubu. Boğaziçi İlgi Koleji'nde çocuğunuzun ilk adımlarını oyun temelli, sevgi dolu bir ortamda atmasını sağlıyoruz.",
    descEN: "Play group for ages 2-3 in Çekmeköy. At Boğaziçi İlgi Koleji, we ensure your child takes their first steps in a play-based, loving environment.",
  },
  ilkokul: {
    titleTR: "Çekmeköy İlkokulu | Özel Boğaziçi İlgi Koleji",
    titleEN: "Primary School in Çekmeköy | Özel Boğaziçi İlgi Koleji",
    descTR: "Çekmeköy ilkokulu arıyorsanız doğru adrestesiniz! Boğaziçi İlgi Koleji'nde 1-4. sınıf için Cambridge İngilizce, STEM projeleri ve güçlü akademik temeller.",
    descEN: "Looking for a primary school in Çekmeköy? Boğaziçi İlgi Koleji offers Cambridge English, STEM projects and strong academic foundations for grades 1-4.",
  },
  ortaokul: {
    titleTR: "Çekmeköy Ortaokulu | Özel Boğaziçi İlgi Koleji",
    titleEN: "Middle School in Çekmeköy | Özel Boğaziçi İlgi Koleji",
    descTR: "Çekmeköy ortaokulu arıyorsanız doğru adrestesiniz! Boğaziçi İlgi Koleji'nde 5-8. sınıf için LGS hazırlık, 2. yabancı dil, robotik ve kariyer rehberliği.",
    descEN: "Looking for a middle school in Çekmeköy? Boğaziçi İlgi Koleji offers LGS exam prep, second foreign language, robotics and career guidance for grades 5-8.",
  },
};

const levelIcons: Record<string, any> = {
  "anaokulu": Baby,
  "oyun-grubu": Star,
  "ilkokul": BookOpen,
  "ortaokul": GraduationCap,
};

export default function AkademikPage() {
  const { lang, t } = useLanguage();
  const PAGE_CONTENT = getPageContentTranslated(lang);
  const [match, params] = useRoute("/akademik/:slug");
  const slug = params?.slug as keyof typeof PAGE_CONTENT.akademik;
  const content = slug && PAGE_CONTENT.akademik[slug];

  if (!content) {
    return <AkademikOverview />;
  }

  return <AkademikDetail slug={slug} content={content} />;
}

function AkademikOverview() {
  const { lang, t } = useLanguage();
  const PAGE_CONTENT = getPageContentTranslated(lang);
  const levels = Object.entries(PAGE_CONTENT.akademik);

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
      <SEOHead
        titleTR="Akademik Programlar | Çekmeköy Özel Okul | Boğaziçi İlgi Koleji"
        titleEN="Academic Programs | Çekmeköy Private School | Boğaziçi İlgi Koleji"
        descriptionTR="Boğaziçi İlgi Koleji Çekmeköy'de anaokulu (3-6 yaş), ilkokul (1-4. sınıf) ve ortaokul (5-8. sınıf) kademelerinde kaliteli akademik programlar. Çekmeköy'ün seçkin özel okulu."
        descriptionEN="Quality academic programs at Boğaziçi İlgi Koleji Çekmeköy for preschool (ages 3-6), primary (grades 1-4) and middle school (grades 5-8). The distinguished private school of Çekmeköy."
        canonical="/akademik"
      />
      <PageHeader 
        title={T("nav.academic", lang)} 
        subtitle={t("Her Yaş Grubuna Özel Eğitim Programları", "Education Programs for Every Age Group")}
        breadcrumbs={[{ label: T("nav.academic", lang), href: "/akademik" }]} 
      />

      <div className="container py-12 px-4">
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {levels.map(([key, item], index) => {
            const Icon = levelIcons[key] || GraduationCap;
            const colors = {
              anaokulu: { primary: "#F97316", gradient: "from-orange-500 to-amber-500", bg: "bg-orange-50", ring: "ring-orange-200" },
              "oyun-grubu": { primary: "#EC4899", gradient: "from-pink-500 to-rose-500", bg: "bg-pink-50", ring: "ring-pink-200" },
              ilkokul: { primary: "#3B82F6", gradient: "from-blue-500 to-indigo-500", bg: "bg-blue-50", ring: "ring-blue-200" },
              ortaokul: { primary: "#10B981", gradient: "from-emerald-500 to-teal-500", bg: "bg-emerald-50", ring: "ring-emerald-200" },
            };
            const color = colors[key as keyof typeof colors];

            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                className="group relative"
              >
                <div 
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                  style={{ backgroundColor: color.primary + "20" }}
                />
                
                <div className="relative bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={(item as any).image}
                      alt={(item as any).title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    
                    <div 
                      className="absolute top-4 right-4 px-3 py-1.5 rounded-full text-white text-xs font-bold shadow-lg"
                      style={{ backgroundColor: color.primary }}
                    >
                      {(item as any).ages}
                    </div>

                    <div className="absolute bottom-4 left-4">
                      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${color.gradient} flex items-center justify-center shadow-lg`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-2xl font-display font-bold text-gray-900 mb-2">{(item as any).title}</h3>
                    <p className="text-gray-500 text-sm mb-4 flex-1">{(item as any).subtitle}</p>

                    <div className="space-y-2 mb-6">
                      {(item as any).features.slice(0, 3).map((feature: any, i: number) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-gray-600">
                          <CheckCircle className="w-3.5 h-3.5" style={{ color: color.primary }} />
                          <span>{feature.title}</span>
                        </div>
                      ))}
                    </div>

                    <Link href={`/akademik/${key}`}>
                      <Button 
                        className="w-full h-11 rounded-xl text-white font-semibold shadow-lg group/btn"
                        style={{ backgroundColor: color.primary }}
                      >
                        {t("Detaylı Bilgi", "Learn More")}
                        <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 bg-primary/5 rounded-full px-6 py-3">
            <Star className="w-5 h-5 text-primary" />
            <span className="text-gray-600 text-sm">{t("2026-2027 Kayıtları Devam Ediyor", "2026-2027 Enrollment is Open")}</span>
            <Link href="/kayit/on-kayit">
              <Button size="sm" className="rounded-full">
                {t("Başvur", "Apply")} <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function AkademikDetail({ slug, content }: { slug: string; content: any }) {
  const { lang, t } = useLanguage();
  const PAGE_CONTENT = getPageContentTranslated(lang);
  const [selectedImage, setSelectedImage] = useState(0);
  const Icon = levelIcons[slug] || GraduationCap;

  const colors: Record<string, { primary: string; gradient: string; bg: string; light: string }> = {
    anaokulu: { primary: "#F97316", gradient: "from-orange-500 to-amber-500", bg: "bg-orange-500", light: "bg-orange-50" },
    "oyun-grubu": { primary: "#EC4899", gradient: "from-pink-500 to-rose-500", bg: "bg-pink-500", light: "bg-pink-50" },
    ilkokul: { primary: "#3B82F6", gradient: "from-blue-500 to-indigo-500", bg: "bg-blue-500", light: "bg-blue-50" },
    ortaokul: { primary: "#10B981", gradient: "from-emerald-500 to-teal-500", bg: "bg-emerald-500", light: "bg-emerald-50" },
  };
  const color = colors[slug] || colors.ilkokul;
  const seo = AKADEMIK_SEO[slug] || AKADEMIK_SEO["ilkokul"];

  // SEO: H1'de hedef anahtar kelime ("Çekmeköy Anaokulu" vb.)
  const H1_TITLES: Record<string, { tr: string; en: string }> = {
    anaokulu: { tr: "Çekmeköy Anaokulu", en: "Preschool in Çekmeköy" },
    ilkokul: { tr: "Çekmeköy İlkokulu", en: "Primary School in Çekmeköy" },
    ortaokul: { tr: "Çekmeköy Ortaokulu", en: "Middle School in Çekmeköy" },
  };
  const h1Title = H1_TITLES[slug] ? (lang === "tr" ? H1_TITLES[slug].tr : H1_TITLES[slug].en) : content.title;

  // SEO: Eğitim kademesine özel schema.org yapısal verisi
  const SCHEMA_TYPES: Record<string, string> = {
    anaokulu: "Preschool",
    ilkokul: "ElementarySchool",
    ortaokul: "MiddleSchool",
  };
  const levelJsonLd = SCHEMA_TYPES[slug]
    ? [
        {
          "@context": "https://schema.org",
          "@type": SCHEMA_TYPES[slug],
          name: `Özel Boğaziçi İlgi Koleji Çekmeköy — ${h1Title}`,
          description: seo.descTR,
          url: `https://ozelbogaziciilgiokullari.k12.tr/akademik/${slug}`,
          telephone: "+902166428642",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Mimar Sinan, Yeşil Kayalar Cd. No: 46 - 48",
            addressLocality: "Çekmeköy",
            addressRegion: "İstanbul",
            postalCode: "34782",
            addressCountry: "TR",
          },
          parentOrganization: {
            "@type": "School",
            name: "Özel Boğaziçi İlgi Koleji Çekmeköy",
            url: "https://ozelbogaziciilgiokullari.k12.tr",
          },
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Anasayfa", item: "https://ozelbogaziciilgiokullari.k12.tr/" },
            { "@type": "ListItem", position: 2, name: "Akademik", item: "https://ozelbogaziciilgiokullari.k12.tr/akademik" },
            { "@type": "ListItem", position: 3, name: h1Title, item: `https://ozelbogaziciilgiokullari.k12.tr/akademik/${slug}` },
          ],
        },
      ]
    : undefined;

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
      <SEOHead
        titleTR={seo.titleTR}
        titleEN={seo.titleEN}
        descriptionTR={seo.descTR}
        descriptionEN={seo.descEN}
        canonical={`/akademik/${slug}`}
        jsonLd={levelJsonLd}
      />
      <PageHeader 
        title={h1Title} 
        subtitle={content.subtitle}
        breadcrumbs={[
          { label: T("nav.academic", lang), href: "/akademik" },
          { label: content.title, href: `/akademik/${slug}` }
        ]}
      />

      <div className="container py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid lg:grid-cols-2 gap-8 mb-12"
          >
            <div className="space-y-4">
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-xl">
                <img 
                  src={content.galleryImages?.[selectedImage] || content.image}
                  alt={content.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                
                <div 
                  className="absolute top-4 left-4 px-4 py-2 rounded-full text-white font-bold shadow-lg flex items-center gap-2"
                  style={{ backgroundColor: color.primary }}
                >
                  <Icon className="w-5 h-5" />
                  {content.ages}
                </div>
              </div>

              {content.galleryImages && (
                <div className="grid grid-cols-5 gap-2">
                  {content.galleryImages.slice(0, 5).map((img: string, i: number) => (
                    <button
                      key={i}
                      onClick={() => setSelectedImage(i)}
                      className={`aspect-square rounded-xl overflow-hidden border-2 transition-all ${
                        selectedImage === i ? 'border-primary ring-2 ring-primary/20' : 'border-transparent hover:border-gray-200'
                      }`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" loading="lazy" decoding="async" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="flex flex-col justify-center">
              <div className={`inline-flex items-center gap-2 ${color.light} px-4 py-2 rounded-full text-sm font-medium mb-4 w-fit`} style={{ color: color.primary }}>
                <Icon className="w-4 h-4" />
                {content.ages} {t("Eğitim Programı", "Education Program")}
              </div>

              <h1 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">{content.title}</h1>
              
              <p className="text-gray-600 leading-relaxed mb-6">{content.content}</p>

              <div className="grid grid-cols-3 gap-4 mb-6">
                {[
                  { label: t("Yıllık Tecrübe", "Years Experience"), value: "26+" },
                  { label: t("Mezun", "Graduates"), value: "250+" },
                  { label: t("Memnuniyet", "Satisfaction"), value: "%100" }
                ].map((stat, i) => (
                  <div key={i} className={`${color.light} rounded-xl p-4 text-center`}>
                    <div className="text-xl font-bold" style={{ color: color.primary }}>{stat.value}</div>
                    <div className="text-xs text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </div>

              <Link href="/kayit/on-kayit">
                <Button 
                  className="w-full md:w-auto h-12 px-8 rounded-xl text-white font-semibold shadow-lg"
                  style={{ backgroundColor: color.primary }}
                >
                  {t("Ön Kayıt Başvurusu", "Pre-Registration Application")}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="text-center mb-8">
              <h2 className="text-2xl font-display font-bold text-gray-900">{t("Eğitim Programımız", "Our Education Program")}</h2>
              <p className="text-gray-500 text-sm mt-2">{t("Öğrencilerimize sunduğumuz imkanlar", "Opportunities we offer our students")}</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {content.features?.map((feature: any, i: number) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-lg transition-all group"
                >
                  <div className="flex items-start gap-4">
                    <div 
                      className={`w-10 h-10 rounded-xl bg-gradient-to-br ${color.gradient} flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform`}
                    >
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">{feature.title}</h4>
                      <p className="text-gray-500 text-sm">{feature.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {content.galleryImages && content.galleryImages.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="text-center mb-8">
                <h2 className="text-2xl font-display font-bold text-gray-900">{t("Fotoğraf Galerisi", "Photo Gallery")}</h2>
                <p className="text-gray-500 text-sm mt-2">{t("Kampüs ve sınıf ortamımızdan kareler", "Scenes from our campus and classrooms")}</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                {content.galleryImages.map((img: string, i: number) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="aspect-square rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all cursor-pointer group"
                    onClick={() => setSelectedImage(i)}
                  >
                    <img 
                      src={img} 
                      alt={`${content.title} - ${i + 1}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                      decoding="async"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-6">
              <h3 className="text-lg font-display font-bold text-gray-900">{t("Diğer Kademeler", "Other Levels")}</h3>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {Object.entries(PAGE_CONTENT.akademik).filter(([key]) => key !== slug).map(([key, item]) => {
                const OtherIcon = levelIcons[key] || GraduationCap;
                const otherColor = colors[key] || colors.ilkokul;
                return (
                  <Link key={key} href={`/akademik/${key}`}>
                    <div className="flex items-center gap-4 bg-white rounded-xl p-4 border border-gray-100 hover:shadow-lg transition-all group cursor-pointer">
                      <div 
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${otherColor.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}
                      >
                        <OtherIcon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900">{(item as any).title}</h4>
                        <p className="text-gray-500 text-xs">{(item as any).ages}</p>
                      </div>
                      <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1 transition-all" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
