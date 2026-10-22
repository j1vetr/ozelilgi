import { useRoute, Redirect } from "wouter";
import { motion } from "framer-motion";
import { PageHeader } from "@/components/ui/PageHeader";
import { useLanguage } from "@/lib/i18n";
import { T } from "@/lib/translations";
import { SEOHead } from "@/components/SEOHead";
import { KurulusHikayesiContent } from "./kurumsal/FoundingStoryPage";
import { LogomuzunHikayesiContent } from "./kurumsal/LogoStoryPage";
import { VizyonMisyonContent } from "./kurumsal/VisionMissionPage";
import { EgitimYaklasimiContent } from "./kurumsal/ApproachPage";

const NEW_SEO: Record<string, { titleTR: string; titleEN: string; path: string }> = {
  "kurulus-hikayesi": { titleTR: "Kuruluş Hikâyesi", titleEN: "Our Founding Story", path: "/kurumsal/kurulus-hikayesi" },
  "logomuzun-hikayesi": { titleTR: "Logomuzun Hikâyesi", titleEN: "The Story of Our Logo", path: "/kurumsal/logomuzun-hikayesi" },
  "vizyon-misyon": { titleTR: "Vizyon & Misyon", titleEN: "Vision & Mission", path: "/kurumsal/vizyon-misyon" },
  "egitim-yaklasimimiz": { titleTR: "Eğitim Yaklaşımımız", titleEN: "Our Approach to Education", path: "/kurumsal/egitim-yaklasimimiz" },
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
  "kurulus-hikayesi": {
    tr: "Bazı hayaller nesillerin geleceğine dokunmak için doğar. Boğaziçi Eğitim İlgi Okulları'nın kuruluş hikâyesini okuyun.",
    en: "Some dreams are born to touch the future of generations. Read the founding story of Boğaziçi Education İlgi Schools.",
  },
  "logomuzun-hikayesi": {
    tr: "Özel Boğaziçi İlgi Okulları logosundaki güneşin, figürlerin ve renklerin anlamı.",
    en: "The meaning of the sun, the figures and the colors in the Özel Boğaziçi İlgi Schools logo.",
  },
};

const VALID_SLUGS = ["kurulus-hikayesi", "logomuzun-hikayesi", "vizyon-misyon", "egitim-yaklasimimiz", "yonetim-kurulu", "idari-kadro", "danismanlar"] as const;
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
  const rawSlug = params?.slug;
  const slug = resolveSlug(rawSlug);

  if (!slug) {
    return <Redirect to={`/kurumsal/${(rawSlug && SLUG_ALIASES[rawSlug]) || "kurulus-hikayesi"}`} replace />;
  }

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
      <PageHeader
        title={T("nav.about", lang)}
        subtitle={t("Özel Boğaziçi İlgi Koleji Çekmeköy", "Özel Boğaziçi İlgi College Çekmeköy")}
        breadcrumbs={[{ label: T("nav.about", lang), href: "/kurumsal/kurulus-hikayesi" }]}
      />

      <div className="container py-10 px-4">
        <motion.div key={slug} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
          {slug === "kurulus-hikayesi" && <KurulusHikayesiContent />}
          {slug === "logomuzun-hikayesi" && <LogomuzunHikayesiContent />}
          {slug === "vizyon-misyon" && <VizyonMisyonContent />}
          {slug === "egitim-yaklasimimiz" && <EgitimYaklasimiContent />}
          {slug === "yonetim-kurulu" && <YonetimKuruluContent />}
          {slug === "idari-kadro" && <IdariKadroContent />}
          {slug === "danismanlar" && <DanismanlarContent />}
        </motion.div>
      </div>
    </div>
  );
}

function SkeletonPage({ titleKey }: { titleKey: string }) {
  const { lang, t } = useLanguage();
  return (
    <div className="max-w-3xl mx-auto text-center py-12">
      <h2 className="text-2xl md:text-4xl font-display font-bold text-primary mb-4">{T(titleKey, lang)}</h2>
      <p className="text-muted-foreground">{t("İçerik yakında eklenecek", "Content coming soon")}</p>
    </div>
  );
}

function YonetimKuruluContent() { return <SkeletonPage titleKey="nav.about.board" />; }
function IdariKadroContent() { return <SkeletonPage titleKey="nav.about.staff" />; }
function DanismanlarContent() { return <SkeletonPage titleKey="nav.about.advisors" />; }
