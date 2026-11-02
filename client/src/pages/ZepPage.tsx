import { motion } from "framer-motion";
import { PageHeader } from "@/components/ui/PageHeader";
import { SEOHead } from "@/components/SEOHead";
import { useLanguage } from "@/lib/i18n";

type Localized = { tr: string; en: string };

const fade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5 },
};

const SCHOOL: Localized = { tr: "ÖZEL BOĞAZİÇİ İLGİ OKULLARI", en: "ÖZEL BOĞAZİÇİ İLGİ SCHOOLS" };
const TITLE: Localized = { tr: "ZEP – Zenginleştirilmiş Eğitim Programı", en: "ZEP – Enriched Education Program" };
const TAGLINE: Localized = { tr: "Her Çocuk Farklıdır. Her Potansiyel Değerlidir.", en: "Every Child Is Different. Every Potential Is Valuable." };
const SLOGAN: Localized = { tr: "Boğaziçi Vizyonuyla Geleceğe", en: "Towards the Future with the Boğaziçi Vision" };

const INTRO: Localized[] = [
  {
    tr: "Özel Boğaziçi İlgi Okulları olarak her çocuğun kendine özgü bir öğrenme yolculuğu olduğuna inanıyoruz. Öğrencilerimizin ilgi alanları, yetenekleri, öğrenme hızları ve gelişim ihtiyaçları birbirinden farklıdır. Bizim için nitelikli eğitim, bu farklılıkları tanımak ve her çocuğa kendi potansiyelini geliştirebileceği fırsatlar sunmaktır.",
    en: "At Özel Boğaziçi İlgi Schools, we believe that every child has a unique learning journey. Our students' interests, talents, learning pace and developmental needs differ from one another. For us, quality education means recognizing these differences and offering every child opportunities to develop their own potential.",
  },
  {
    tr: "Bu anlayışla şekillendirdiğimiz ZEP – Zenginleştirilmiş Eğitim Programı, BİLİVA Eğitim Modelimizin bireysel ilgi ve bilimsel düşünme ilkelerini akademik öğrenme süreçleriyle buluşturan bir eğitim yaklaşımıdır.",
    en: "The ZEP – Enriched Education Program, which we have shaped with this understanding, is an educational approach that brings the individual interest and scientific thinking principles of our BİLİVA Education Model together with academic learning processes.",
  },
  {
    tr: "ZEP’in amacı yalnızca öğrencilerimizin akademik başarılarını artırmak değil; onların merak duygularını güçlendirmek, düşünme becerilerini derinleştirmek, güçlü yönlerini keşfetmelerini desteklemek ve öğrenmeyi daha anlamlı hâle getirmektir.",
    en: "The aim of ZEP is not only to raise our students' academic achievement but to strengthen their curiosity, deepen their thinking skills, support them in discovering their strengths and make learning more meaningful.",
  },
];

const GOALS_TITLE: Localized = { tr: "ZEP ile Neyi Hedefliyoruz?", en: "What Do We Aim for with ZEP?" };
const GOALS: { label: Localized; text: Localized; color: string }[] = [
  { label: { tr: "Bireysel öğrenme", en: "Individual learning" }, text: { tr: "Her öğrencinin öğrenme hızını, hazır bulunuşluk düzeyini, ilgi alanlarını ve gelişim ihtiyaçlarını dikkate almak.", en: "Taking into account every student's learning pace, level of readiness, interests and developmental needs." }, color: "bg-brand-blue" },
  { label: { tr: "Güçlü akademik temel", en: "Strong academic foundation" }, text: { tr: "Temel bilgi ve becerileri sağlamlaştırırken öğrencilerin kavrama, yorumlama ve uygulama yetkinliklerini geliştirmek.", en: "Consolidating basic knowledge and skills while developing students' comprehension, interpretation and application competencies." }, color: "bg-brand-orange" },
  { label: { tr: "Derinlemesine öğrenme", en: "In-depth learning" }, text: { tr: "Öğrencilerin konular arasında bağlantılar kurmasını, farklı sorular sormasını ve bilgiyi ezberin ötesinde anlamlandırmasını desteklemek.", en: "Supporting students in making connections between subjects, asking different questions and making sense of knowledge beyond memorization." }, color: "bg-brand-green" },
  { label: { tr: "Araştırma ve üretim", en: "Research and production" }, text: { tr: "Merak edilen konular üzerinde inceleme, problem çözme, yaratıcı düşünme ve özgün fikirler geliştirme fırsatları oluşturmak.", en: "Creating opportunities for investigation, problem solving, creative thinking and developing original ideas on subjects of curiosity." }, color: "bg-brand-blue" },
  { label: { tr: "Çok yönlü gelişim", en: "Multifaceted development" }, text: { tr: "Akademik öğrenmeyi sanat, kültür, bilim ve günlük yaşamla ilişkilendirerek öğrencilerin farklı yeteneklerini beslemek.", en: "Nurturing students' different talents by relating academic learning to art, culture, science and daily life." }, color: "bg-brand-orange" },
  { label: { tr: "Özgüven ve öğrenme motivasyonu", en: "Self-confidence and motivation to learn" }, text: { tr: "Her öğrencinin kendi ilerlemesini fark etmesini, öğrenme sorumluluğu kazanmasını ve başarma duygusunu yaşamasını önemsemek.", en: "Caring that every student notices their own progress, gains responsibility for learning and experiences the feeling of achievement." }, color: "bg-brand-green" },
];

const BILIVA_TITLE: Localized = { tr: "BİLİVA ile Güçlenen Öğrenme", en: "Learning Strengthened by BİLİVA" };
const BILIVA: Localized[] = [
  { tr: "ZEP, BİLİVA Eğitim Modelimizden bağımsız bir anlayış değil; onun öğrenme ortamlarına yansıyan tamamlayıcı bir parçasıdır.", en: "ZEP is not an approach independent of our BİLİVA Education Model but a complementary part of it that is reflected in learning environments." },
  { tr: "Öğrencilerimiz bilimsel düşünmeyle sorunlara yaklaşırken bireysel ilgiyle desteklenir; öğrendiklerini ilişkilendirir, araştırır, fikir geliştirir ve kendi öğrenme süreçlerinde daha fazla sorumluluk üstlenir.", en: "While our students approach problems through scientific thinking, they are supported by individual interest. They connect what they learn, research, develop ideas and take on more responsibility in their own learning processes." },
  { tr: "Bu yaklaşımda başarıyı yalnızca sınav sonuçlarıyla değil, öğrencinin gösterdiği gelişim, kazandığı beceriler ve öğrenmeye karşı geliştirdiği tutumla birlikte değerlendiririz.", en: "In this approach, we evaluate success not only through exam results but together with the development the student shows, the skills they gain and the attitude they develop toward learning." },
];

const OPP_TITLE: Localized = { tr: "Her Öğrenci İçin Gelişim Fırsatı", en: "A Development Opportunity for Every Student" };
const OPP: Localized[] = [
  { tr: "Zenginleştirilmiş eğitim anlayışımız, yalnızca belirli bir başarı düzeyindeki öğrencilere değil, her çocuğun kendi potansiyelini geliştirme hakkına dayanır.", en: "Our enriched approach to education is based not only on students at a certain level of achievement but on every child's right to develop their own potential." },
  { tr: "Çünkü biz, çocukların birbirleriyle karşılaştırılarak değil, kendi gelişim yolculuklarında desteklenerek güçlendiklerine inanıyoruz.", en: "Because we believe that children grow stronger not by being compared with one another but by being supported on their own developmental journeys." },
];
const GOAL_FINAL: Localized = {
  tr: "ZEP ile hedefimiz; öğrenmeyi seven, kendini tanıyan, akademik yönden güçlü, araştıran, üreten ve geleceğe özgüvenle hazırlanan bireyler yetiştirmektir.",
  en: "With ZEP, our goal is to raise individuals who love learning, know themselves, are academically strong, research, create and prepare for the future with confidence.",
};
const FOOTER_LABEL: Localized = { tr: "ZEP  |  Zenginleştirilmiş Eğitim Programı", en: "ZEP  |  Enriched Education Program" };

export default function ZepPage() {
  const { lang, t } = useLanguage();
  const L = (x: Localized) => x[lang];

  return (
    <div className="bg-background min-h-screen">
      <SEOHead
        titleTR="ZEP Zenginleştirilmiş Eğitim Programı | Özel Boğaziçi İlgi Koleji Çekmeköy"
        titleEN="ZEP Enriched Education Program | Özel Boğaziçi İlgi Koleji Çekmeköy"
        descriptionTR="ZEP Zenginleştirilmiş Eğitim Programı: BİLİVA Eğitim Modelinin bireysel ilgi ve bilimsel düşünme ilkelerini akademik öğrenmeyle buluşturan, her çocuğun potansiyelini destekleyen program."
        descriptionEN="ZEP Enriched Education Program: a program that brings the individual interest and scientific thinking principles of the BİLİVA Education Model together with academic learning and supports every child's potential."
        canonical="/akademik/zenginlestirme-birimi"
      />
      <PageHeader
        title={t("Akademik", "Academics")}
        subtitle={t("Boğaziçi Vizyonuyla Geleceğe", "Towards the Future with the Boğaziçi Vision")}
        breadcrumbs={[{ label: t("Akademik", "Academics"), href: "/akademik" }]}
      />

      <div className="container py-10 px-4">
        <article className="max-w-5xl mx-auto" data-testid="page-zep">
          <header className="text-center mb-10">
            <p className="text-primary/70 font-semibold tracking-widest text-sm mb-2">{L(SCHOOL)}</p>
            <h1 className="text-3xl md:text-5xl font-display font-bold text-primary mb-5">{L(TITLE)}</h1>
            <p className="inline-block bg-yellow-400 text-primary font-display font-bold text-lg md:text-xl rounded-full px-6 py-2">{L(TAGLINE)}</p>
          </header>

          <motion.div {...fade} className="max-w-3xl mx-auto space-y-5 mb-16">
            {INTRO.map((p, i) => (
              <p key={i} className={i === 2 ? "text-xl md:text-2xl font-display font-semibold text-primary leading-snug" : "text-gray-700 leading-relaxed text-base md:text-lg"}>{L(p)}</p>
            ))}
          </motion.div>

          <section className="mb-16">
            <h2 className="text-2xl md:text-4xl font-display font-bold text-primary mb-8">{L(GOALS_TITLE)}</h2>
            <ol className="space-y-4 [--zep-step:10px] md:[--zep-step:40px]">
              {GOALS.map((g, i) => (
                <motion.li
                  key={i}
                  {...fade}
                  className="flex items-stretch bg-white border border-gray-200 rounded-2xl overflow-hidden"
                  style={{ marginLeft: `calc(${i} * var(--zep-step))` }}
                >
                  <span className={`shrink-0 w-14 md:w-20 flex items-center justify-center text-white font-display font-bold text-2xl md:text-3xl ${g.color}`}>{i + 1}</span>
                  <div className="p-4 md:p-6">
                    <h3 className="font-display font-bold text-primary text-lg mb-1">{L(g.label)}</h3>
                    <p className="text-gray-700 leading-relaxed">{L(g.text)}</p>
                  </div>
                </motion.li>
              ))}
            </ol>
          </section>

          <motion.section {...fade} className="bg-primary text-white rounded-3xl p-6 md:p-12 mb-8">
            <h2 className="text-2xl md:text-4xl font-display font-bold mb-6">{L(BILIVA_TITLE)}</h2>
            <div className="space-y-4 text-white/90 text-base md:text-lg leading-relaxed">
              {BILIVA.map((p, i) => (
                <p key={i} className={i === 0 ? "font-display font-semibold text-white text-xl md:text-2xl leading-snug" : ""}>{L(p)}</p>
              ))}
            </div>
          </motion.section>

          <motion.section {...fade} className="bg-brand-green text-white rounded-3xl p-6 md:p-12">
            <h2 className="text-2xl md:text-4xl font-display font-bold mb-6">{L(OPP_TITLE)}</h2>
            <div className="space-y-4 text-base md:text-lg leading-relaxed">
              {OPP.map((p, i) => <p key={i}>{L(p)}</p>)}
            </div>
            <p className="mt-8 font-display font-bold text-xl md:text-2xl leading-snug">{L(GOAL_FINAL)}</p>
          </motion.section>

          <div className="text-center mt-10">
            <p className="font-display font-bold text-primary">{L({ tr: "Özel Boğaziçi İlgi Okulları", en: "Özel Boğaziçi İlgi Schools" })}</p>
            <p className="text-brand-orange font-display font-bold text-lg">{L(SLOGAN)}.</p>
            <p className="text-gray-500 text-sm font-semibold tracking-wide mt-4 whitespace-pre">{L(FOOTER_LABEL)}</p>
          </div>
        </article>
      </div>
    </div>
  );
}
