import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useRoute, Redirect, Link } from "wouter";
import { motion } from "framer-motion";
import { PageHeader } from "@/components/ui/PageHeader";
import { useLanguage } from "@/lib/i18n";
import { T } from "@/lib/translations";
import { SEOHead } from "@/components/SEOHead";
import { KurulusHikayesiContent } from "./kurumsal/FoundingStoryPage";
import { LogomuzunHikayesiContent } from "./kurumsal/LogoStoryPage";
import { VizyonMisyonContent } from "./kurumsal/VisionMissionPage";
import { EgitimYaklasimiContent } from "./kurumsal/ApproachPage";
import { BilivaContent } from "./kurumsal/BilivaPage";
import { ButunculEgitimContent } from "./kurumsal/HolisticPage";
import { YonetimKuruluContent, IdariKadroContent, DanismanlarContent } from "./kurumsal/TeamPages";

const NEW_SEO: Record<string, { titleTR: string; titleEN: string; path: string }> = {
  "kurulus-hikayesi": { titleTR: "Kuruluş Hikâyesi", titleEN: "Our Founding Story", path: "/kurumsal/kurulus-hikayesi" },
  "logomuzun-hikayesi": { titleTR: "Logomuzun Hikâyesi", titleEN: "The Story of Our Logo", path: "/kurumsal/logomuzun-hikayesi" },
  "vizyon-misyon": { titleTR: "Vizyon & Misyon", titleEN: "Vision & Mission", path: "/kurumsal/vizyon-misyon" },
  "egitim-yaklasimimiz": { titleTR: "Eğitim Yaklaşımımız", titleEN: "Our Approach to Education", path: "/kurumsal/egitim-yaklasimimiz" },
  "biliva-egitim-modeli": { titleTR: "BİLİVA Eğitim Modeli", titleEN: "The BİLİVA Education Model", path: "/kurumsal/biliva-egitim-modeli" },
  "butuncul-egitim-modelimiz": { titleTR: "Bütüncül Eğitim Modelimiz", titleEN: "Our Holistic Education Model", path: "/kurumsal/butuncul-egitim-modelimiz" },
  "yonetim-kurulu": { titleTR: "Yönetim Kurulu", titleEN: "Board of Directors", path: "/kurumsal/yonetim-kurulu" },
  "idari-kadro": { titleTR: "İdari Kadro", titleEN: "Administrative Staff", path: "/kurumsal/idari-kadro" },
  "danismanlar": { titleTR: "Danışmanlar", titleEN: "Advisors", path: "/kurumsal/danismanlar" },
};

const NEW_DESC: Record<string, { tr: string; en: string }> = {
  "vizyon-misyon": {
    tr: "Özel Boğaziçi İlgi Okulları'nın misyonu ve vizyonu: bilimsel düşünceyi ve özgür öğrenme kültürünü esas alan, nitelikli eğitimin öncü kurumlarından biri olmak.",
    en: "The mission and vision of Özel Boğaziçi İlgi Schools: to be one of the pioneering institutions of quality education, based on scientific thought and a culture of free learning.",
  },
  "egitim-yaklasimimiz": {
    tr: "Akademik başarıyı kişisel gelişimle bütünleştiren, anaokulundan ortaokula uzanan Boğaziçi vizyonlu eğitim yaklaşımımızın sekiz ilkesi.",
    en: "The eight principles of our Boğaziçi-inspired approach to education, from kindergarten to middle school, which integrates academic success with personal development.",
  },
  "biliva-egitim-modeli": {
    tr: "BİLİVA Eğitim Modeli: İlgiyle Keşfet. Bilimle Geliş. Geleceğe Yön Ver. Bilimsel düşünceyi, bireysel ilgiyi ve araştırmayı buluşturan bütüncül eğitim yaklaşımı.",
    en: "The BİLİVA Education Model: Discover with Interest. Grow with Science. Give Direction to the Future. A holistic approach that brings together scientific thought, individual interest and research.",
  },
  "butuncul-egitim-modelimiz": {
    tr: "Çocuğun zihinsel, sosyal, duygusal, fiziksel ve kültürel yönden bir bütün olarak geliştiği Boğaziçi vizyonlu bütüncül eğitim modelimiz.",
    en: "Our Boğaziçi-inspired holistic education model, in which the child develops as a whole mentally, socially, emotionally, physically and culturally.",
  },
  "kurulus-hikayesi": {
    tr: "Bazı hayaller nesillerin geleceğine dokunmak için doğar. Boğaziçi Eğitim İlgi Okulları'nın kuruluş hikâyesini okuyun.",
    en: "Some dreams are born to touch the future of generations. Read the founding story of Boğaziçi Education İlgi Schools.",
  },
  "logomuzun-hikayesi": {
    tr: "Özel Boğaziçi İlgi Okulları logosundaki güneşin, figürlerin ve renklerin anlamı.",
    en: "The meaning of the sun, the figures and the colors in the Özel Boğaziçi İlgi Schools logo.",
  },
};

const VALID_SLUGS = ["kurulus-hikayesi", "logomuzun-hikayesi", "vizyon-misyon", "egitim-yaklasimimiz", "biliva-egitim-modeli", "butuncul-egitim-modelimiz", "yonetim-kurulu", "idari-kadro", "danismanlar"] as const;
const SECTION_SLUGS = ["kurulus-hikayesi", "logomuzun-hikayesi", "vizyon-misyon"] as const;
type KurumsalSlug = typeof VALID_SLUGS[number];
// Eski adresler yeni sayfalara yönlendirilir.
const SLUG_ALIASES: Record<string, KurumsalSlug> = {
  "hakkimizda": "kurulus-hikayesi",
  "kurucu-mesaji": "kurulus-hikayesi",
  "egitim-politikamiz": "egitim-yaklasimimiz",
};

function resolveSlug(raw: string | undefined): KurumsalSlug | null {
  if (!raw) return null;
  if ((VALID_SLUGS as readonly string[]).includes(raw)) return raw as KurumsalSlug;
  return null;
}

export default function KurumsalPage() {
  const { lang, t } = useLanguage();
  const [, params] = useRoute("/kurumsal/:slug");
  const [menuOpen, setMenuOpen] = useState(false);
  const rawSlug = params?.slug;
  const slug = resolveSlug(rawSlug);

  if (!slug) {
    return <Redirect to={`/kurumsal/${(rawSlug && SLUG_ALIASES[rawSlug]) || "kurulus-hikayesi"}`} replace />;
  }

  const inSection = (SECTION_SLUGS as readonly string[]).includes(slug);
  const fresh = NEW_SEO[slug];
  const seo = {
    titleTR: `${fresh.titleTR} | Özel Boğaziçi İlgi Koleji Çekmeköy`,
    titleEN: `${fresh.titleEN} | Özel Boğaziçi İlgi Koleji Çekmeköy`,
    descTR: NEW_DESC[slug]?.tr ?? "Boğaziçi Vizyonuyla Geleceğe. Özel Boğaziçi İlgi Okulları Çekmeköy.",
    descEN: NEW_DESC[slug]?.en ?? "Towards the Future with the Boğaziçi Vision. Özel Boğaziçi İlgi Schools Çekmeköy.",
    path: fresh.path,
  };

  return (
    <div className="bg-background min-h-screen">
      <SEOHead
        titleTR={seo.titleTR}
        titleEN={seo.titleEN}
        descriptionTR={seo.descTR}
        descriptionEN={seo.descEN}
        canonical={seo.path}
      />
      {inSection ? (
        <div className="pt-32 md:pt-40 pb-8 md:pb-10 bg-white border-b border-gray-100">
          <div className="container px-4 text-center">
            <h1 className="font-display text-3xl md:text-5xl font-bold text-primary" data-testid="kurumsal-page-title">
              {lang === "tr" ? NEW_SEO[slug].titleTR : NEW_SEO[slug].titleEN}
            </h1>
          </div>
        </div>
      ) : (
      <PageHeader
        title={T("nav.about", lang)}
        subtitle={t("Boğaziçi Vizyonuyla Geleceğe", "Towards the Future with the Boğaziçi Vision")}
        breadcrumbs={[{ label: T("nav.about", lang), href: "/kurumsal/kurulus-hikayesi" }]}
      />
      )}

      <div className="container py-10 px-4">
        <div className={inSection ? "grid lg:grid-cols-[260px_1fr] gap-8 lg:gap-12 items-start" : ""}>
        {inSection && (
          <div>
          <div className="hidden lg:block mb-4">
            <img src="/images/bogazici-logo-yuvarlak.png" alt="Özel Boğaziçi İlgi Okulları" className="w-28 h-28 rounded-full object-contain mb-4" data-testid="kurumsal-sidebar-logo" />
            <p className="font-display font-bold text-primary text-lg">{lang === "tr" ? "Kurumsal Menü" : "Corporate Menu"}</p>
          </div>
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            className="lg:hidden w-full flex items-center justify-between bg-primary text-white font-semibold rounded-xl px-5 py-4"
            data-testid="kurumsal-menu-toggle"
          >
            {lang === "tr" ? "Kurumsal Menü" : "Corporate Menu"}
            <ChevronDown className={`w-5 h-5 transition-transform ${menuOpen ? "rotate-180" : ""}`} />
          </button>
          <nav className={`${menuOpen ? "block" : "hidden"} lg:block mt-2 lg:mt-0 lg:sticky lg:top-32 bg-gray-50 border border-gray-100 rounded-2xl overflow-hidden`} data-testid="kurumsal-sidebar">
            {SECTION_SLUGS.map((sl) => {
              const active = sl === slug;
              return (
                <Link
                  key={sl}
                  onClick={() => setMenuOpen(false)}
                  href={`/kurumsal/${sl}`}
                  data-testid={`kurumsal-sidebar-${sl}`}
                  className={`block px-6 py-4 text-base border-b border-gray-100 last:border-b-0 transition-colors ${active ? "font-bold text-primary border-b-2 border-b-brand-orange" : "text-gray-500 hover:text-primary"}`}
                >
                  {lang === "tr" ? NEW_SEO[sl].titleTR : NEW_SEO[sl].titleEN}
                </Link>
              );
            })}
          </nav>
          </div>
        )}
        <motion.div key={slug} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
          {slug === "kurulus-hikayesi" && <KurulusHikayesiContent />}
          {slug === "logomuzun-hikayesi" && <LogomuzunHikayesiContent />}
          {slug === "vizyon-misyon" && <VizyonMisyonContent />}
          {slug === "egitim-yaklasimimiz" && <EgitimYaklasimiContent />}
          {slug === "biliva-egitim-modeli" && <BilivaContent />}
          {slug === "butuncul-egitim-modelimiz" && <ButunculEgitimContent />}
          {slug === "yonetim-kurulu" && <YonetimKuruluContent />}
          {slug === "idari-kadro" && <IdariKadroContent />}
          {slug === "danismanlar" && <DanismanlarContent />}
        </motion.div>
        </div>
      </div>
    </div>
  );
}
