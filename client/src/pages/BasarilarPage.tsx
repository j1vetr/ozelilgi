import { PageHeader } from "@/components/ui/PageHeader";
import { SEOHead } from "@/components/SEOHead";
import { useLanguage } from "@/lib/i18n";
import { T } from "@/lib/translations";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import {
  Trophy,
  Star,
  Quote,
  GraduationCap,
  Users,
  ClipboardCheck,
  Cpu,
  BookOpen,
  Palette,
  Music,
  Dumbbell,
  Brain,
  FlaskConical,
  Medal,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5 },
};

export default function BasarilarPage() {
  const { lang, t } = useLanguage();

  return (
    <div className="bg-background min-h-screen">
      <SEOHead
        titleTR="Başarılarımız | LGS ve Akademik Başarılar | Boğaziçi İlgi Koleji Çekmeköy"
        titleEN="Our Achievements | LGS & Academic Success | Boğaziçi İlgi Koleji Çekmeköy"
        descriptionTR="Boğaziçi İlgi Koleji Çekmeköy öğrencilerinin LGS başarıları, bilim fuarı projeleri, kodlama, spor ve sanat etkinlikleri. Çekmeköy'ün başarı odaklı özel okulu."
        descriptionEN="LGS success, science fair projects, coding, sports and arts activities of Boğaziçi İlgi Koleji Çekmeköy students."
        canonical="/basarilar"
      />
      <PageHeader
        title={T("achievements.title", lang)}
        subtitle={T("achievements.subtitle", lang)}
        breadcrumbs={[{ label: T("achievements.title", lang), href: "/basarilar" }]}
      />

      {/* ——— Mezunlarımız (öne çıkan) ——— */}
      <section className="bg-primary py-16 md:py-20">
        <div className="container px-4">
          <motion.div {...fadeUp} className="text-center mb-10 md:mb-14">
            <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
              <GraduationCap className="w-4 h-4" />
              {t("Mezunlarımız", "Our Graduates")}
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-black text-white mb-3">
              {t("LGS'de Parlayan Yıldızlarımız", "Our Shining Stars in LGS")}
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto text-sm md:text-base">
              {t(
                "Ortaokulumuzdan mezun olan öğrencilerimiz, güçlü akademik temelleri ve bireysel koçluk desteğiyle LGS'de hedefledikleri okullara yerleşiyor.",
                "Graduates of our middle school reach the schools they aim for in LGS with strong academic foundations and individual coaching support."
              )}
            </p>
            <div className="flex justify-center gap-1.5 mt-5">
              {[...Array(5)].map((_, i) => (
                <motion.span
                  key={i}
                  initial={{ scale: 0, rotate: -30 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 300, damping: 15, delay: 0.2 + i * 0.08 }}
                >
                  <Star className="w-6 h-6 text-amber-400 fill-amber-400" />
                </motion.span>
              ))}
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            {GRADUATES.map((g, i) => (
              <motion.div
                key={g.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="bg-white rounded-3xl overflow-hidden shadow-2xl"
                data-testid={`card-graduate-${i}`}
              >
                <div className="relative h-64 md:h-72 overflow-hidden">
                  <img
                    src={g.image}
                    alt={g.name}
                    className="w-full h-full object-cover object-[70%_20%]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 bg-amber-400 text-primary text-xs font-black uppercase tracking-wide px-3 py-1.5 rounded-full shadow-lg">
                    <Trophy className="w-3.5 h-3.5" />
                    {t("LGS Başarısı", "LGS Success")}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="text-2xl font-display font-black text-white drop-shadow">{g.name}</h3>
                    <span className="text-xs font-bold text-amber-300 uppercase tracking-wide">
                      {lang === "tr" ? g.labelTR : g.labelEN}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {lang === "tr" ? g.descTR : g.descEN}
                  </p>
                  <div className="flex gap-2.5 items-start bg-primary/5 rounded-xl p-4">
                    <Quote className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                    <p className="text-gray-700 text-sm italic leading-relaxed">
                      {lang === "tr" ? g.quoteTR : g.quoteEN}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ——— Başarıyı nasıl inşa ediyoruz ——— */}
      <section className="py-14 md:py-16 bg-white border-b border-gray-100">
        <div className="container px-4">
          <motion.div {...fadeUp} className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-display font-black text-primary mb-2">
              {t("Başarıyı Nasıl İnşa Ediyoruz?", "How Do We Build Success?")}
            </h2>
            <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">
              {t(
                "Anaokulundan ortaokula, her kademede başarının temelini birlikte atıyoruz.",
                "From preschool to middle school, we lay the foundation of success together at every level."
              )}
            </p>
          </motion.div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
            {PILLARS.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="text-center p-5 md:p-6 rounded-2xl bg-gray-50 hover:bg-primary/5 transition-colors"
                data-testid={`card-pillar-${i}`}
              >
                <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                  <p.icon className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-sm md:text-base text-gray-800 mb-1">
                  {lang === "tr" ? p.titleTR : p.titleEN}
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                  {lang === "tr" ? p.descTR : p.descEN}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ——— Akademik ve Bilim ——— */}
      <AchievementSection
        badgeIcon={FlaskConical}
        badge={t("Akademik & Bilim", "Academics & Science")}
        title={t("Sınıfın Ötesinde Öğrenme", "Learning Beyond the Classroom")}
        subtitle={t(
          "Öğrencilerimiz bilim fuarlarında, kodlama etkinliklerinde ve zeka oyunları turnuvalarında kendilerini gösteriyor.",
          "Our students shine in science fairs, coding events and mind-games tournaments."
        )}
        items={ACADEMIC_ITEMS}
        lang={lang}
        bg="bg-gray-50"
        testPrefix="academic"
      />

      {/* ——— Spor ve Sanat ——— */}
      <AchievementSection
        badgeIcon={Medal}
        badge={t("Spor & Sanat", "Sports & Arts")}
        title={t("Sahnede ve Sahada Biz Varız", "On Stage and On the Field")}
        subtitle={t(
          "Jimnastikten resme, basketboldan müziğe — her öğrencimizin yeteneğini keşfettiği bir alan var.",
          "From gymnastics to painting, basketball to music — every student has a place to discover their talent."
        )}
        items={SPORTS_ARTS_ITEMS}
        lang={lang}
        bg="bg-white"
        testPrefix="sports"
      />

      {/* ——— CTA ——— */}
      <section className="py-14 md:py-16 bg-primary">
        <div className="container px-4 text-center">
          <motion.div {...fadeUp}>
            <h2 className="text-2xl md:text-3xl font-display font-black text-white mb-3">
              {t("Sıradaki Başarı Hikayesi Çocuğunuzun Olsun", "Let the Next Success Story Be Your Child's")}
            </h2>
            <p className="text-white/70 text-sm md:text-base max-w-xl mx-auto mb-7">
              {t(
                "Her çocuk özel ilgiyi hak eder. Ön kayıt formunu doldurun, sizi kampüsümüzde ağırlayalım.",
                "Every child deserves special attention. Fill in the pre-registration form and visit our campus."
              )}
            </p>
            <Button
              size="lg"
              className="rounded-full px-8 bg-brand-orange hover:bg-brand-orange/90 text-white font-bold shadow-xl gap-2"
              data-testid="button-achievements-cta"
              asChild
            >
              <Link href="/kayit/on-kayit">
                {t("Ön Kayıt Oluştur", "Pre-Register Now")}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

/* ————— Bölüm bileşeni ————— */

function AchievementSection({
  badgeIcon: BadgeIcon,
  badge,
  title,
  subtitle,
  items,
  lang,
  bg,
  testPrefix,
}: {
  badgeIcon: any;
  badge: string;
  title: string;
  subtitle: string;
  items: typeof ACADEMIC_ITEMS;
  lang: string;
  bg: string;
  testPrefix: string;
}) {
  return (
    <section className={`py-14 md:py-20 ${bg}`}>
      <div className="container px-4">
        <motion.div {...fadeUp} className="text-center mb-10 md:mb-12">
          <span className="inline-flex items-center gap-2 bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            <BadgeIcon className="w-4 h-4" />
            {badge}
          </span>
          <h2 className="text-2xl md:text-3xl font-display font-black text-primary mb-2">{title}</h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">{subtitle}</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: (i % 3) * 0.1 }}
              className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-md hover:shadow-xl transition-all"
              data-testid={`card-${testPrefix}-${i}`}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={lang === "tr" ? item.titleTR : item.titleEN}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-white/95 text-primary text-[11px] font-bold uppercase tracking-wide px-3 py-1 rounded-full shadow">
                  {lang === "tr" ? item.levelTR : item.levelEN}
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <item.icon className="w-4 h-4" />
                  </div>
                  <h3 className="font-display font-bold text-base text-gray-800 leading-snug">
                    {lang === "tr" ? item.titleTR : item.titleEN}
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {lang === "tr" ? item.descTR : item.descEN}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ————— Veriler ————— */

const GRADUATES = [
  {
    name: "Burcu Beril Kaya",
    image: "/images/lgs-burcu-beril-kaya.webp",
    labelTR: "LGS Başarı Öğrencimiz",
    labelEN: "Our LGS Success Graduate",
    descTR:
      "Ortaokul yıllarında aldığı güçlü akademik temel ve bireysel koçluk desteğiyle hayallerini gerçeğe dönüştürdü.",
    descEN:
      "With the strong academic foundation and individual coaching she received in middle school, she turned her dreams into reality.",
    quoteTR: "\"Öğretmenlerim her zaman yanımdaydı. Başarım onların emeğiyle mümkün oldu.\"",
    quoteEN: "\"My teachers were always by my side. My success was possible thanks to their dedication.\"",
  },
  {
    name: "Kaan Ege Alp",
    image: "/images/lgs-kaan-ege-alp.webp",
    labelTR: "LGS Başarı Öğrencimiz",
    labelEN: "Our LGS Success Graduate",
    descTR:
      "Kodlama, robotik ve güçlü akademik programla donandı; LGS'de harika bir başarı elde etti.",
    descEN:
      "Equipped with coding, robotics and a strong academic program, he achieved great success in LGS.",
    quoteTR: "\"Boğaziçi İlgi'de sadece ders değil, düşünmeyi öğrendim.\"",
    quoteEN: "\"At Boğaziçi İlgi, I didn't just learn lessons — I learned to think.\"",
  },
];

const PILLARS = [
  {
    icon: Users,
    titleTR: "Az Mevcutlu Sınıflar",
    titleEN: "Small Class Sizes",
    descTR: "Her öğrenciye birebir ilgi gösterebildiğimiz butik sınıflar.",
    descEN: "Boutique classes where every student gets individual attention.",
  },
  {
    icon: ClipboardCheck,
    titleTR: "LGS Hazırlık & Koçluk",
    titleEN: "LGS Prep & Coaching",
    descTR: "Düzenli deneme sınavları ve bireysel akademik koçluk sistemi.",
    descEN: "Regular practice exams and an individual academic coaching system.",
  },
  {
    icon: Cpu,
    titleTR: "Kodlama & Robotik",
    titleEN: "Coding & Robotics",
    descTR: "Anaokulundan itibaren kodlama ve robotik atölyeleri.",
    descEN: "Coding and robotics workshops starting from preschool.",
  },
  {
    icon: BookOpen,
    titleTR: "Okuma Kültürü",
    titleEN: "Reading Culture",
    descTR: "Kitap kurdu projeleri ve yazarlık atölyeleriyle güçlü dil becerileri.",
    descEN: "Strong language skills through book projects and writing workshops.",
  },
];

const ACADEMIC_ITEMS = [
  {
    icon: FlaskConical,
    image: "/images/science-lab-new.webp",
    levelTR: "İlkokul & Ortaokul",
    levelEN: "Primary & Middle School",
    titleTR: "Bilim Fuarı Projeleri",
    titleEN: "Science Fair Projects",
    descTR:
      "Öğrencilerimiz fen laboratuvarımızda hazırladıkları deney ve projelerle her yıl okul bilim şenliğinde ailelerine sunum yapıyor.",
    descEN:
      "Every year our students present the experiments and projects they prepare in our science lab at the school science festival.",
  },
  {
    icon: Cpu,
    image: "/images/coding-lab-2.webp",
    levelTR: "İlkokul & Ortaokul",
    levelEN: "Primary & Middle School",
    titleTR: "Kodlama ve Robotik Etkinlikleri",
    titleEN: "Coding & Robotics Events",
    descTR:
      "Kodlama laboratuvarımızda üretilen projeler, öğrencilerimizin algoritmik düşünme ve problem çözme becerilerini sergiliyor.",
    descEN:
      "Projects built in our coding lab showcase our students' algorithmic thinking and problem-solving skills.",
  },
  {
    icon: Brain,
    image: "/images/primary-class-1.webp",
    levelTR: "İlkokul",
    levelEN: "Primary School",
    titleTR: "Akıl ve Zeka Oyunları",
    titleEN: "Mind & Intelligence Games",
    descTR:
      "Satranç, mangala ve strateji oyunlarıyla düzenlediğimiz sınıflar arası turnuvalar, öğrencilerimizin analitik düşünmesini güçlendiriyor.",
    descEN:
      "Interclass tournaments with chess, mangala and strategy games strengthen our students' analytical thinking.",
  },
  {
    icon: BookOpen,
    image: "/images/primary-class-2.webp",
    levelTR: "İlkokul & Ortaokul",
    levelEN: "Primary & Middle School",
    titleTR: "Okuma ve Yazarlık Projeleri",
    titleEN: "Reading & Writing Projects",
    descTR:
      "Kitap kurdu programı, şiir dinletileri ve öykü yazma çalışmalarıyla öğrencilerimiz dilin gücünü keşfediyor.",
    descEN:
      "With our bookworm program, poetry recitals and story-writing activities, students discover the power of language.",
  },
  {
    icon: Star,
    image: "/images/preschool-orange-1.webp",
    levelTR: "Anaokulu",
    levelEN: "Preschool",
    titleTR: "Minik Kâşifler Atölyeleri",
    titleEN: "Little Explorers Workshops",
    descTR:
      "Anaokulu öğrencilerimiz deney, gözlem ve oyun temelli STEM etkinlikleriyle bilimle erken yaşta tanışıyor.",
    descEN:
      "Our preschoolers meet science early through experiments, observation and play-based STEM activities.",
  },
  {
    icon: Trophy,
    image: "/images/classroom-smartboard.webp",
    levelTR: "Ortaokul",
    levelEN: "Middle School",
    titleTR: "LGS Deneme Sınavı Başarıları",
    titleEN: "LGS Practice Exam Success",
    descTR:
      "Düzenli deneme sınavları ve birebir analizlerle 8. sınıf öğrencilerimiz LGS'ye tam donanımlı hazırlanıyor.",
    descEN:
      "With regular practice exams and one-on-one analysis, our 8th graders prepare fully equipped for LGS.",
  },
];

const SPORTS_ARTS_ITEMS = [
  {
    icon: Dumbbell,
    image: "/images/sports-hall-1.webp",
    levelTR: "Tüm Kademeler",
    levelEN: "All Levels",
    titleTR: "Jimnastik ve Hareket Eğitimi",
    titleEN: "Gymnastics & Movement",
    descTR:
      "Kapalı spor salonumuzda jimnastik ve hareket eğitimiyle öğrencilerimiz küçük yaştan itibaren sporla iç içe büyüyor.",
    descEN:
      "In our indoor sports hall, students grow up with sports through gymnastics and movement training from an early age.",
  },
  {
    icon: Medal,
    image: "/images/building-playground.webp",
    levelTR: "İlkokul & Ortaokul",
    levelEN: "Primary & Middle School",
    titleTR: "Basketbol ve Takım Sporları",
    titleEN: "Basketball & Team Sports",
    descTR:
      "Okul takımlarımız basketbol ve takım sporlarında dostluk maçları ve okul içi turnuvalarla sahada ter döküyor.",
    descEN:
      "Our school teams compete in friendly matches and in-school tournaments in basketball and team sports.",
  },
  {
    icon: Palette,
    image: "/images/art-room-new-1.webp",
    levelTR: "Tüm Kademeler",
    levelEN: "All Levels",
    titleTR: "Görsel Sanatlar Sergileri",
    titleEN: "Visual Arts Exhibitions",
    descTR:
      "Görsel sanatlar atölyemizde üretilen eserler, yıl sonu sergilerimizde velilerimizle buluşuyor.",
    descEN:
      "Artworks created in our visual arts studio meet parents at our year-end exhibitions.",
  },
  {
    icon: Music,
    image: "/images/music-studio.jpg",
    levelTR: "Tüm Kademeler",
    levelEN: "All Levels",
    titleTR: "Müzik Dinletileri",
    titleEN: "Music Recitals",
    descTR:
      "Müzik atölyemizde enstrümanla tanışan öğrencilerimiz, özel gün ve törenlerde sahne alıyor.",
    descEN:
      "Students who meet instruments in our music studio perform on special days and ceremonies.",
  },
  {
    icon: Star,
    image: "/images/playgroup-2.webp",
    levelTR: "Anaokulu & Oyun Grubu",
    levelEN: "Preschool & Play Group",
    titleTR: "Yıl Sonu Gösterileri",
    titleEN: "Year-End Performances",
    descTR:
      "Miniklerimiz dans, müzik ve drama gösterileriyle yıl boyu öğrendiklerini sahnede sergiliyor.",
    descEN:
      "Our little ones showcase what they've learned all year with dance, music and drama performances.",
  },
  {
    icon: GraduationCap,
    image: "/images/school-flag.webp",
    levelTR: "Tüm Kademeler",
    levelEN: "All Levels",
    titleTR: "Milli Bayram Törenleri",
    titleEN: "National Day Ceremonies",
    descTR:
      "23 Nisan ve 29 Ekim gibi milli bayramlarda öğrencilerimiz şiir, marş ve gösterileriyle coşkuyu yaşatıyor.",
    descEN:
      "On national holidays such as April 23 and October 29, our students bring the celebration to life with poems, anthems and performances.",
  },
];
