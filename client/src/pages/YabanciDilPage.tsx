import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
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
const TITLE: Localized = { tr: "Yabancı Dil Eğitimi Yaklaşımımız", en: "Our Approach to Foreign Language Education" };
const SUBTITLE: Localized = { tr: "Dil Öğrenmekten Dünyayı Keşfetmeye", en: "From Learning a Language to Discovering the World" };
const LEAD_SHORT: Localized = { tr: "Bir dil öğrenmek, dünyaya yeni bir pencere açmaktır.", en: "Learning a language opens a new window to the world." };
const LEAD_REST: Localized = {
  tr: "Özel Boğaziçi İlgi Okulları olarak yabancı dil eğitimini yalnızca kelime öğrenmek, dil bilgisi kurallarını bilmek veya sınavlarda başarılı olmakla sınırlı görmüyoruz. Bizim için yabancı dil; öğrencilerimizin dünyayla iletişim kurmasını, farklı kültürleri tanımasını ve kendilerini özgüvenle ifade etmesini sağlayan önemli bir yaşam becerisidir.",
  en: "At Özel Boğaziçi İlgi Schools, we do not limit foreign language education to learning words, knowing grammar rules or succeeding in exams. For us, a foreign language is an important life skill that enables our students to communicate with the world, get to know different cultures and express themselves with confidence.",
};

const BILIVA_TITLE: Localized = { tr: "BİLİVA ile Dil, Kültür ve Keşif", en: "Language, Culture and Discovery with BİLİVA" };
const BILIVA_TEXT: Localized = {
  tr: "BİLİVA Eğitim Modelimizin “İlgiyle Keşfet”, “İlişkilendir” ve “Vizyon Geliştir” ilkeleri yabancı dil yaklaşımımıza yön verir. Öğrencilerimizin dili kendi ilgi alanlarıyla ilişkilendirmelerini, günlük yaşamda kullanmalarını ve farklı kültürlere merakla yaklaşmalarını önemsiyoruz.",
  en: "The “Discover with Interest”, “Connect” and “Develop Vision” principles of our BİLİVA Education Model guide our approach to foreign languages. We care that our students relate the language to their own interests, use it in daily life and approach different cultures with curiosity.",
};
const BILIVA_CHIPS: { letter: string; label: Localized; color: string }[] = [
  { letter: "İ", label: { tr: "İlgiyle Keşfet", en: "Discover with Interest" }, color: "bg-brand-orange" },
  { letter: "İ", label: { tr: "İlişkilendir", en: "Connect" }, color: "bg-brand-blue" },
  { letter: "V", label: { tr: "Vizyon Geliştir", en: "Develop Vision" }, color: "bg-brand-green" },
];

const CONT_TITLE: Localized = { tr: "Anaokulundan Ortaokula Süreklilik", en: "Continuity from Kindergarten to Middle School" };
const STAGES: { level: Localized; text: Localized; color: string }[] = [
  { level: { tr: "Anaokulu", en: "Kindergarten" }, text: { tr: "Oyun, şarkı, hikâye ve günlük iletişimle İngilizceye olumlu bir başlangıç yapmayı hedefliyoruz.", en: "We aim to make a positive start to English through play, songs, stories and daily communication." }, color: "bg-brand-orange" },
  { level: { tr: "İlkokul", en: "Primary School" }, text: { tr: "Dinleme, konuşma, okuma ve yazma becerilerini geliştirmeyi hedefliyoruz.", en: "We aim to develop listening, speaking, reading and writing skills." }, color: "bg-brand-blue" },
  { level: { tr: "Ortaokul", en: "Middle School" }, text: { tr: "Anlama, yorumlama, sunum yapma ve yazılı-sözlü ifade becerilerini derinleştirmeyi hedefliyoruz.", en: "We aim to deepen comprehension, interpretation, presentation and written and oral expression skills." }, color: "bg-brand-green" },
];

const COMM_TITLE: Localized = { tr: "İletişim Odaklı İngilizce Eğitimi", en: "Communication-Focused English Education" };
const COMM_TEXT: Localized = {
  tr: "Temel hedefimiz, öğrencilerimizin İngilizceyi yalnızca bilmeleri değil, etkili ve özgüvenli biçimde kullanabilmeleridir. Dinleme, konuşma, okuma ve yazmayı birbirini tamamlayan beceriler olarak ele alıyor; etkileşim, araştırma, sunum ve üretim odaklı öğrenme deneyimlerine değer veriyoruz.",
  en: "Our main goal is for our students not only to know English but to use it effectively and confidently. We treat listening, speaking, reading and writing as complementary skills and value learning experiences focused on interaction, research, presentation and production.",
};
const SKILLS: { label: Localized; color: string }[] = [
  { label: { tr: "Dinleme", en: "Listening" }, color: "bg-brand-blue" },
  { label: { tr: "Konuşma", en: "Speaking" }, color: "bg-brand-orange" },
  { label: { tr: "Okuma", en: "Reading" }, color: "bg-brand-green" },
  { label: { tr: "Yazma", en: "Writing" }, color: "bg-yellow-400 !text-primary" },
];

const THREE: { title: Localized; text: Localized }[] = [
  {
    title: { tr: "İkinci Yabancı Dil: Almanca", en: "Second Foreign Language: German" },
    text: {
      tr: "Okulumuzda İngilizcenin yanında ikinci yabancı dil olarak Almanca eğitimi sunuyoruz. Almanca öğrenimini, öğrencilerimizin çok dillilik farkındalığını ve farklı kültürlerle iletişim kurma becerilerini geliştiren önemli bir fırsat olarak görüyoruz.",
      en: "In our school, alongside English, we offer German education as a second foreign language. We see learning German as an important opportunity that develops our students' multilingual awareness and their skills of communicating with different cultures.",
    },
  },
  {
    title: { tr: "Cambridge İngilizce Sınavları", en: "Cambridge English Exams" },
    text: {
      tr: "Öğrencilerimizin yaşlarına ve dil yeterliliklerine uygun Cambridge English sınavlarına katılmalarını sağlıyoruz. Bu sınavları yalnızca bir belge edinme süreci değil; dil gelişimini uluslararası ölçütlerle değerlendirme ve sınav deneyimi kazanma fırsatı olarak ele alıyoruz.",
      en: "We enable our students to take Cambridge English exams suited to their ages and language proficiency. We treat these exams not merely as a process of obtaining a certificate but as an opportunity to evaluate language development against international standards and gain exam experience.",
    },
  },
  {
    title: { tr: "Uluslararası Öğrenci Değişim Programları", en: "International Student Exchange Programs" },
    text: {
      tr: "Uluslararası öğrenci değişim programlarımızla öğrencilerimizin farklı ülkelerden akranlarıyla iletişim kurmalarını, farklı kültürleri tanımalarını ve yabancı dil becerilerini gerçek yaşam ortamlarında kullanmalarını destekliyoruz. Bu deneyimlerin özgüven, bağımsızlık ve kültürler arası anlayışın gelişimine katkı sağlamasını amaçlıyoruz.",
      en: "Through our international student exchange programs, we support our students in communicating with peers from different countries, getting to know different cultures and using their foreign language skills in real-life settings. We aim for these experiences to contribute to the development of self-confidence, independence and intercultural understanding.",
    },
  },
];

const END_TITLE: Localized = { tr: "Yabancı Dilde Özgüven, Dünyaya Açık Bir Vizyon", en: "Confidence in a Foreign Language, a Vision Open to the World" };
const END_TEXT: Localized = {
  tr: "Hedefimiz; İngilizce ve Almanca öğrenen, farklı kültürlere saygı duyan, uluslararası deneyimlere açık ve kendisini farklı ortamlarda ifade etme cesaretine sahip bireyler yetiştirmektir. Öğrencilerimizin yalnızca dil öğrenmelerini değil, öğrendikleri dillerle dünyayı keşfetmelerini istiyoruz.",
  en: "Our goal is to raise individuals who learn English and German, respect different cultures, are open to international experiences and have the courage to express themselves in different settings. We want our students not only to learn languages but to discover the world with the languages they learn.",
};
const SIGN: Localized = { tr: "Özel Boğaziçi İlgi Okulları", en: "Özel Boğaziçi İlgi Schools" };
const SLOGAN: Localized = { tr: "Boğaziçi Vizyonuyla Geleceğe.", en: "Towards the Future with the Boğaziçi Vision." };

export default function YabanciDilPage() {
  const { lang, t } = useLanguage();
  const L = (x: Localized) => x[lang];

  return (
    <div className="bg-background min-h-screen">
      <SEOHead
        titleTR="Yabancı Dil Eğitimi | Özel Boğaziçi İlgi Koleji Çekmeköy"
        titleEN="Foreign Language Education | Özel Boğaziçi İlgi Koleji Çekmeköy"
        descriptionTR="Anaokulundan ortaokula iletişim odaklı İngilizce, ikinci yabancı dil Almanca, Cambridge English sınavları ve uluslararası öğrenci değişim programları."
        descriptionEN="Communication-focused English from kindergarten to middle school, German as a second foreign language, Cambridge English exams and international student exchange programs."
        canonical="/akademik/yabanci-dil-egitimi"
      />
      <PageHeader
        title={t("Akademik", "Academics")}
        subtitle={t("Boğaziçi Vizyonuyla Geleceğe", "Towards the Future with the Boğaziçi Vision")}
        breadcrumbs={[{ label: t("Akademik", "Academics"), href: "/akademik" }]}
      />

      <div className="container py-10 px-4">
        <article className="max-w-5xl mx-auto" data-testid="page-yabanci-dil">
          <header className="text-center mb-10">
            <p className="text-primary/70 font-semibold tracking-widest text-sm mb-2">{L(SCHOOL)}</p>
            <h1 className="text-3xl md:text-5xl font-display font-bold text-primary mb-4">{L(TITLE)}</h1>
            <p className="text-brand-orange font-display font-bold text-lg md:text-xl">{L(SUBTITLE)}</p>
          </header>

          <motion.section {...fade} className="grid md:grid-cols-[1fr_1.2fr] gap-8 items-center mb-14">
            <div className="grid grid-cols-2 gap-3 aspect-square max-w-sm mx-auto w-full p-3 rounded-3xl border-8 border-primary bg-primary" aria-hidden="true">
              {SKILLS.map((s, i) => (
                <div key={i} className={`rounded-lg flex items-center justify-center text-white font-display font-bold text-lg ${s.color}`}>{L(s.label)}</div>
              ))}
            </div>
            <div>
              <p className="text-2xl md:text-4xl font-display font-bold text-primary leading-tight mb-5">{L(LEAD_SHORT)}</p>
              <p className="text-gray-700 leading-relaxed text-base md:text-lg">{L(LEAD_REST)}</p>
            </div>
          </motion.section>

          <motion.section {...fade} className="bg-gray-50 border border-gray-100 rounded-3xl p-6 md:p-10 mb-14">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-primary mb-4">{L(BILIVA_TITLE)}</h2>
            <p className="text-gray-700 leading-relaxed mb-6 max-w-4xl">{L(BILIVA_TEXT)}</p>
            <div className="grid sm:grid-cols-3 gap-4">
              {BILIVA_CHIPS.map((c, i) => (
                <div key={i} className={`flex items-center gap-3 rounded-2xl text-white p-4 ${c.color}`}>
                  <span className="text-4xl font-display font-bold leading-none">{c.letter}</span>
                  <span className="font-display font-bold leading-tight">{L(c.label)}</span>
                </div>
              ))}
            </div>
          </motion.section>

          <section className="mb-14">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-primary mb-6">{L(CONT_TITLE)}</h2>
            <div className="grid md:grid-cols-[1fr_auto_1fr_auto_1fr] gap-4 items-stretch">
              {STAGES.flatMap((s, i) => {
                const card = (
                  <motion.div key={`s${i}`} {...fade} className="rounded-2xl overflow-hidden border border-gray-200 bg-white">
                    <div className={`${s.color} text-white font-display font-bold text-xl px-6 py-4`}>{L(s.level)}</div>
                    <p className="p-6 text-gray-700 leading-relaxed">{L(s.text)}</p>
                  </motion.div>
                );
                return i < STAGES.length - 1
                  ? [card, <div key={`a${i}`} className="hidden md:flex items-center text-gray-400"><ArrowRight className="w-6 h-6" /></div>]
                  : [card];
              })}
            </div>
          </section>

          <motion.section {...fade} className="grid md:grid-cols-[1fr_280px] bg-primary text-white rounded-3xl overflow-hidden mb-14">
            <div className="p-6 md:p-10">
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">{L(COMM_TITLE)}</h2>
              <p className="text-white/90 leading-relaxed text-base md:text-lg">{L(COMM_TEXT)}</p>
            </div>
            <div className="relative min-h-[260px]"><img src="/images/merdiven-ingilizce.webp" alt={t("Okul merdivenlerinde İngilizce kelimeler", "English words on the school stairs")} className="absolute inset-0 w-full h-full object-cover" loading="lazy" /></div>
          </motion.section>

          <div className="space-y-5 mb-14">
            {THREE.map((c, i) => (
              <motion.div key={i} {...fade} className="grid md:grid-cols-[120px_1fr] bg-white border border-gray-200 rounded-2xl overflow-hidden">
                <div className="bg-yellow-400 text-primary font-display font-bold text-5xl md:text-6xl flex items-center justify-center py-4">{`0${i + 1}`}</div>
                <div className="p-6 md:p-8">
                  <h3 className="font-display font-bold text-primary text-xl md:text-2xl mb-3">{L(c.title)}</h3>
                  <p className="text-gray-700 leading-relaxed">{L(c.text)}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.section {...fade} className="bg-brand-green text-white rounded-3xl p-6 md:p-12 text-center">
            <h2 className="text-2xl md:text-4xl font-display font-bold mb-4">{L(END_TITLE)}</h2>
            <p className="text-lg leading-relaxed max-w-3xl mx-auto">{L(END_TEXT)}</p>
            <div className="flex justify-center gap-3 mt-6">
              {["English", "Deutsch"].map((x) => (
                <span key={x} className="rounded-full bg-white text-primary font-display font-bold px-5 py-2">{x}</span>
              ))}
            </div>
            <p className="font-display font-bold mt-8">{L(SIGN)}</p>
            <p className="font-display font-bold text-lg text-primary">{L(SLOGAN)}</p>
          </motion.section>
        </article>
      </div>
    </div>
  );
}
