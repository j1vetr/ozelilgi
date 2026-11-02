import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

type Localized = { tr: string; en: string };

const BILIVA: { letter: string; label: Localized; color: string }[] = [
  { letter: "B", label: { tr: "Bilimsel Düşün", en: "Think Scientifically" }, color: "bg-brand-blue" },
  { letter: "İ", label: { tr: "İlgiyle Keşfet", en: "Discover with Interest" }, color: "bg-brand-orange" },
  { letter: "L", label: { tr: "Liderlik Et", en: "Lead" }, color: "bg-brand-green" },
  { letter: "İ", label: { tr: "İlişkilendir", en: "Connect" }, color: "bg-brand-blue" },
  { letter: "V", label: { tr: "Vizyon Geliştir", en: "Develop Vision" }, color: "bg-brand-orange" },
  { letter: "A", label: { tr: "Araştır ve Üret", en: "Research and Create" }, color: "bg-brand-green" },
];

const CARDS: { title: Localized; desc: Localized; href: string; image: string; tag: string }[] = [
  {
    title: { tr: "Bütüncül Eğitim Modelimiz", en: "Our Holistic Education Model" },
    desc: { tr: "Her çocuğu zihinsel, sosyal, duygusal, fiziksel ve kültürel yönleriyle bir bütün olarak görüyoruz.", en: "We see every child as a whole in their mental, social, emotional, physical and cultural dimensions." },
    href: "/kurumsal/butuncul-egitim-modelimiz",
    image: "/images/koridor-duvar-resmi.webp",
    tag: "bg-brand-blue",
  },
  {
    title: { tr: "Akademik Zenginleştirme (ZEP)", en: "Academic Enrichment (ZEP)" },
    desc: { tr: "İlgi alanlarını ve güçlü yönleri dikkate alan bireysel gelişim ve zenginleşme programı.", en: "An individual development and enrichment program that considers interests and strengths." },
    href: "/akademik/zenginlestirme-birimi",
    image: "/images/science-lab-new.webp",
    tag: "bg-brand-orange",
  },
  {
    title: { tr: "Psikolojik Danışmanlık ve Rehberlik", en: "Psychological Counseling and Guidance" },
    desc: { tr: "Her çocuğu tanıyan, her gelişime değer veren rehberlik anlayışı.", en: "Guidance that knows every child and values every development." },
    href: "/akademik/rehberlik-birimi",
    image: "/images/koridor-posterler.webp",
    tag: "bg-brand-green",
  },
  {
    title: { tr: "Yabancı Dil Eğitimi", en: "Foreign Language Education" },
    desc: { tr: "İngilizce, Almanca, Cambridge sınavları ve uluslararası öğrenci değişim programları.", en: "English, German, Cambridge exams and international student exchange programs." },
    href: "/akademik/yabanci-dil-egitimi",
    image: "/images/merdiven-ingilizce.webp",
    tag: "bg-brand-blue",
  },
  {
    title: { tr: "BİLİVA'da Sanat, Spor ve Kulüpler", en: "Art, Sports and Clubs at BİLİVA" },
    desc: { tr: "Müzik, resim, drama, spor, satranç, robotik kodlama ve öğrenci kulüpleri.", en: "Music, painting, drama, sports, chess, robotic coding and student clubs." },
    href: "/kurumsal/biliva-sanat-spor-kulupler",
    image: "/images/spor-salonu-1.webp",
    tag: "bg-brand-orange",
  },
  {
    title: { tr: "Eğitim Yaklaşımımız", en: "Our Approach to Education" },
    desc: { tr: "Akademik başarıyı kişisel gelişimle bütünleştiren sekiz ilke.", en: "Eight principles that integrate academic success with personal development." },
    href: "/kurumsal/egitim-yaklasimimiz",
    image: "/images/vitrin-bilgi-5-harf.webp",
    tag: "bg-brand-green",
  },
];

const LINKS: { title: Localized; href: string; color: string }[] = [
  { title: { tr: "Kuruluş Hikâyesi", en: "Our Founding Story" }, href: "/kurumsal/kurulus-hikayesi", color: "bg-brand-blue" },
  { title: { tr: "Vizyon ve Misyon", en: "Vision and Mission" }, href: "/kurumsal/vizyon-misyon", color: "bg-brand-orange" },
  { title: { tr: "Logomuzun Hikâyesi", en: "The Story of Our Logo" }, href: "/kurumsal/logomuzun-hikayesi", color: "bg-brand-green" },
  { title: { tr: "BİLİVA Eğitim Modeli", en: "The BİLİVA Education Model" }, href: "/kurumsal/biliva-egitim-modeli", color: "bg-primary" },
];

export function EducationModelSection() {
  const { lang, t } = useLanguage();
  const L = (x: Localized) => x[lang];

  return (
    <section className="py-16 md:py-24 bg-white" data-testid="section-education-model">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-[1fr_1.1fr] gap-8 lg:gap-12 items-stretch mb-14"
        >
          <div className="bg-primary text-white rounded-3xl p-8 md:p-10 flex flex-col justify-between">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-white text-primary text-xs font-bold tracking-wider uppercase mb-5">
                {t("Eğitim Modelimiz", "Our Education Model")}
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 leading-tight">
                {t("BİLİVA ile Boğaziçi Vizyonuyla Geleceğe", "Towards the Future with the Boğaziçi Vision through BİLİVA")}
              </h2>
              <p className="text-white/85 leading-relaxed">
                {t(
                  "Boğaziçi'nin bilimsel düşünce, özgürlük, araştırma ve kültürel zenginlik anlayışından ilham alarak anaokulundan ortaokula uzanan, akademik başarıyı kişisel gelişimle bütünleştiren bir eğitim yolculuğu hedefliyoruz.",
                  "Inspired by Boğaziçi's understanding of scientific thought, freedom, research and cultural richness, we aim for an educational journey from kindergarten to middle school that integrates academic success with personal development."
                )}
              </p>
            </div>
            <Link href="/kurumsal/biliva-egitim-modeli">
              <span className="inline-flex items-center gap-2 mt-8 rounded-full bg-yellow-400 text-primary font-bold px-6 py-3 cursor-pointer w-fit" data-testid="link-biliva">
                {t("BİLİVA'yı Keşfedin", "Explore BİLİVA")}
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 content-center">
            {BILIVA.map((b, i) => (
              <div key={i} className={`${b.color} text-white rounded-2xl p-4 flex flex-col justify-between aspect-[4/3] sm:aspect-square`}>
                <span className="text-5xl md:text-6xl font-display font-bold leading-none">{b.letter}</span>
                <span className="font-display font-bold leading-tight">{L(b.label)}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CARDS.map((c, i) => (
            <motion.div
              key={c.href}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
            >
              <Link href={c.href}>
                <div className="group h-full bg-white border border-gray-200 rounded-3xl overflow-hidden cursor-pointer flex flex-col" data-testid={`card-model-${i}`}>
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img src={c.image} alt={L(c.title)} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <span className={`absolute left-0 bottom-0 h-1.5 w-1/3 ${c.tag}`} />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-lg font-display font-bold text-primary mb-2">{L(c.title)}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed flex-1">{L(c.desc)}</p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-brand-orange">
                      {t("İncele", "Explore")}
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <nav className="mt-16" aria-label={t("Kurumsal bağlantılar", "About us links")}>
          <h3 className="text-center text-2xl md:text-3xl font-display font-bold text-primary mb-8">
            {t("Bizi Daha Yakından Tanıyın", "Get to Know Us Better")}
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {LINKS.map((l, i) => (
              <Link key={l.href} href={l.href}>
                <div className={`group h-full min-h-[190px] rounded-3xl p-7 md:p-8 cursor-pointer flex flex-col justify-between text-white ${l.color}`} data-testid={`link-about-${i}`}>
                  <span className="text-5xl font-display font-bold leading-none opacity-40">{`0${i + 1}`}</span>
                  <div className="flex items-end justify-between gap-4 mt-10">
                    <span className="text-xl font-display font-bold leading-snug">{L(l.title)}</span>
                    <span className="shrink-0 w-11 h-11 rounded-full bg-white text-primary flex items-center justify-center">
                      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </section>
  );
}
