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
const TITLE: Localized = { tr: "Psikolojik Danışmanlık ve Rehberlik Yaklaşımımız", en: "Our Approach to Psychological Counseling and Guidance" };
const SUBTITLE: Localized = { tr: "Her Çocuğu Tanıyan, Her Gelişime Değer Veren Rehberlik", en: "Guidance That Knows Every Child and Values Every Development" };
const QUOTE: Localized = { tr: "Her çocuk anlaşılmayı, değer görmeyi ve kendi potansiyelini keşfetmeyi hak eder.", en: "Every child deserves to be understood, valued and to discover their own potential." };
const INTRO: Localized = {
  tr: "Özel Boğaziçi İlgi Okulları olarak rehberliği, yalnızca bir güçlük ortaya çıktığında başvurulan bir hizmet değil; öğrencinin okula başladığı ilk günden eğitim yolculuğunun sonuna kadar gelişimini destekleyen bütüncül bir süreç olarak görüyoruz. Akademik gelişim kadar sosyal, duygusal ve bireysel farklılıkları da önemseyerek her öğrencimizi yakından tanımayı hedefliyoruz.",
  en: "At Özel Boğaziçi İlgi Schools, we see guidance not as a service sought only when a difficulty arises but as a holistic process that supports the student's development from the first day they start school to the end of their educational journey. By caring about social, emotional and individual differences as much as academic development, we aim to get to know each of our students closely.",
};

const BILIVA_TITLE: Localized = { tr: "BİLİVA ile İlgiye Dayalı Rehberlik", en: "Interest-Based Guidance with BİLİVA" };
const BILIVA_TEXT: Localized = {
  tr: "BİLİVA Eğitim Modelimizin “İlgiyle Keşfet” ve “Bilimsel Düşün” ilkeleri rehberlik çalışmalarımıza yön verir. Öğrencilerimizin güçlü yönlerini, ilgi alanlarını ve desteklenmesi gereken becerilerini anlamak için bireysel görüşmeleri, öğretmen gözlemlerini, aile iş birliğini ve uygun değerlendirme araçlarını birlikte ele alıyoruz.",
  en: "The “Discover with Interest” and “Think Scientifically” principles of our BİLİVA Education Model guide our guidance work. To understand our students' strengths, interests and the skills that need support, we consider individual interviews, teacher observations, cooperation with families and appropriate assessment tools together.",
};

const PAIR: { title: Localized; text: Localized; color: string }[] = [
  {
    title: { tr: "Bireysel Görüşmeler ve Sürekli Gelişim Takibi", en: "Individual Interviews and Continuous Development Tracking" },
    text: {
      tr: "Öğrencilerimizle bireysel görüşmeler gerçekleştiriyor; okul uyumlarını, öğrenme alışkanlıklarını, dikkat ve bilişsel becerilerini, arkadaşlık ilişkilerini ve sosyal-duygusal gelişimlerini süreç içinde takip ediyoruz. Değerlendirmeleri öğrencinin yaşına, gelişim dönemine ve ihtiyacına uygun biçimde planlıyor; tek bir test puanına dayalı etiketlemelerden kaçınıyoruz.",
      en: "We hold individual interviews with our students and follow their adjustment to school, learning habits, attention and cognitive skills, friendships and social-emotional development over time. We plan assessments to suit the student's age, developmental stage and needs, and we avoid labeling based on a single test score.",
    },
    color: "border-t-brand-blue",
  },
  {
    title: { tr: "Sosyal-Duygusal Gelişim ve Güvenli Okul İklimi", en: "Social-Emotional Development and a Safe School Climate" },
    text: {
      tr: "Öğrencilerimizin öz farkındalık, duygu düzenleme, empati, sağlıklı iletişim, sorumluluk ve problem çözme becerilerini geliştirmelerini önemsiyoruz. Kendilerini güvende ve değerli hissettikleri, farklılıklara saygının esas olduğu bir okul ortamını destekliyoruz.",
      en: "We care that our students develop self-awareness, emotion regulation, empathy, healthy communication, responsibility and problem-solving skills. We support a school environment in which they feel safe and valued and in which respect for differences is fundamental.",
    },
    color: "border-t-brand-green",
  },
];

const SCI_TITLE: Localized = { tr: "Bilimsel Değerlendirme ve Dikkat Becerileri", en: "Scientific Assessment and Attention Skills" };
const SCI_TEXT: Localized = {
  tr: "Dikkat ve Bilişsel Becerileri Değerlendirme Programımız kapsamında uygun öğrenciler için aşamalı test uygulamaları planlanabilir. BZ ve D2 Dikkat Testleri ile CAS Bilişsel Değerlendirme Sistemi’nin dikkat alanları veya Stroop Testi, yetkin uzmanların değerlendirmesine ve testlerin yaş grubu koşullarına göre kullanılabilecektir. Amaç, dikkate ilişkin farklı beceri alanlarını daha iyi anlamak ve ihtiyaç duyulan desteği belirlemektir.",
  en: "Within our Attention and Cognitive Skills Assessment Program, phased test applications may be planned for suitable students. The BZ and D2 Attention Tests, the attention areas of the CAS Cognitive Assessment System, or the Stroop Test may be used according to the evaluation of competent specialists and the age group conditions of the tests. The aim is to better understand the different skill areas related to attention and to determine the support needed.",
};
const TESTS = ["BZ", "D2", "CAS", "Stroop"];

const AGE_TITLE: Localized = { tr: "Her Yaşa Uygun Destek", en: "Support Suited to Every Age" };
const AGE_TEXT: Localized = {
  tr: "Anaokulunda uyum, güven ve temel sosyal beceriler; ilkokulda öz güven, dikkat, çalışma alışkanlıkları ve arkadaşlık ilişkileri; ortaokulda ise öz farkındalık, akademik motivasyon, sınav sürecine ilişkin duygular ve gelecek hedeflerini yaşa uygun biçimde ele alıyoruz.",
  en: "In kindergarten we address adjustment, trust and basic social skills. In primary school we address self-confidence, attention, study habits and friendships. In middle school we address self-awareness, academic motivation, feelings about the exam process and future goals, all in an age-appropriate way.",
};

const ETHICS_TITLE: Localized = { tr: "Aile İş Birliği, Gizlilik ve Etik Yaklaşım", en: "Family Cooperation, Confidentiality and Ethical Approach" };
const ETHICS_TEXT: Localized = {
  tr: "Değerlendirme bulgularını öğrencinin yararını gözeterek ebeveynler veya yasal temsilcilerle güvenli biçimde paylaşıyoruz. Öğrencilerimizin kişisel verilerini ve test sonuçlarını gizlilik ilkeleri doğrultusunda koruyor; uygulamalarımızı bilgilendirme, gerekli izinler, uzman yetkinliği ve ilgili mevzuat çerçevesinde yürütmeyi esas alıyoruz.",
  en: "We share assessment findings securely with parents or legal guardians, keeping the student's benefit in mind. We protect our students' personal data and test results in line with confidentiality principles, and we base our practices on information, necessary permissions, specialist competence and the relevant legislation.",
};
const ETHICS_NOTE: Localized = { tr: "Testler tek başına klinik tanı amacı taşımaz.", en: "Tests alone are not intended for clinical diagnosis." };

const FUTURE_TITLE: Localized = { tr: "Geleceğe Güvenle", en: "Towards the Future with Confidence" };
const FUTURE_TEXT: Localized = {
  tr: "Hedefimiz; kendisini tanıyan, öğrenme süreçlerine sahip çıkan, duygularını ifade edebilen, sağlıklı ilişkiler kurabilen ve potansiyelini güvenle geliştiren bireyler yetiştirmektir.",
  en: "Our goal is to raise individuals who know themselves, take ownership of their learning processes, can express their emotions, can build healthy relationships and develop their potential with confidence.",
};
const SIGN1: Localized = { tr: "Özel Boğaziçi İlgi Okulları — Boğaziçi Vizyonuyla Geleceğe.", en: "Özel Boğaziçi İlgi Schools — Towards the Future with the Boğaziçi Vision." };
const SIGN2: Localized = { tr: "Özel Boğaziçi İlgi Okulları  •  Boğaziçi Vizyonuyla Geleceğe", en: "Özel Boğaziçi İlgi Schools  •  Towards the Future with the Boğaziçi Vision" };

export default function RehberlikBirimiPage() {
  const { lang, t } = useLanguage();
  const L = (x: Localized) => x[lang];

  return (
    <div className="bg-background min-h-screen">
      <SEOHead
        titleTR="Psikolojik Danışmanlık ve Rehberlik Birimi | Özel Boğaziçi İlgi Koleji Çekmeköy"
        titleEN="Psychological Counseling and Guidance Unit | Özel Boğaziçi İlgi Koleji Çekmeköy"
        descriptionTR="Her çocuğu tanıyan, her gelişime değer veren rehberlik: bireysel görüşmeler, sürekli gelişim takibi, sosyal-duygusal gelişim ve aile iş birliği."
        descriptionEN="Guidance that knows every child and values every development: individual interviews, continuous development tracking, social-emotional development and family cooperation."
        canonical="/akademik/rehberlik-birimi"
      />
      <PageHeader
        title={t("Akademik", "Academics")}
        subtitle={t("Boğaziçi Vizyonuyla Geleceğe", "Towards the Future with the Boğaziçi Vision")}
        breadcrumbs={[{ label: t("Akademik", "Academics"), href: "/akademik" }]}
      />

      <div className="container py-10 px-4">
        <article className="max-w-5xl mx-auto" data-testid="page-rehberlik">
          <header className="text-center mb-10">
            <p className="text-primary/70 font-semibold tracking-widest text-sm mb-2">{L(SCHOOL)}</p>
            <h1 className="text-3xl md:text-5xl font-display font-bold text-primary mb-4">{L(TITLE)}</h1>
            <p className="text-brand-orange font-display font-bold text-lg md:text-xl">{L(SUBTITLE)}</p>
          </header>

          <motion.blockquote {...fade} className="border-l-8 border-yellow-400 bg-yellow-50 rounded-r-2xl px-6 py-5 md:px-10 md:py-7 mb-8">
            <p className="text-xl md:text-3xl font-display font-bold text-primary leading-snug">{L(QUOTE)}</p>
          </motion.blockquote>

          <motion.section {...fade} className="grid md:grid-cols-[1fr_300px] gap-8 items-center mb-14">
            <p className="text-gray-700 leading-relaxed text-base md:text-lg">{L(INTRO)}</p>
            <img src="/images/koridor-duvar-resmi.webp" alt={t("Her öğrenci özel ilgiyi hak eder yazılı koridor duvar resmi", "Corridor mural reading every student deserves special attention")} className="w-full rounded-2xl aspect-[3/4] object-cover" loading="lazy" />
          </motion.section>

          <motion.section {...fade} className="bg-gray-50 border border-gray-100 rounded-3xl p-6 md:p-10 mb-10">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-primary mb-4">{L(BILIVA_TITLE)}</h2>
            <p className="text-gray-700 leading-relaxed">{L(BILIVA_TEXT)}</p>
          </motion.section>

          <div className="grid md:grid-cols-2 gap-5 mb-10">
            {PAIR.map((c, i) => (
              <motion.div key={i} {...fade} className={`bg-white border-x border-b border-gray-200 border-t-4 ${c.color} rounded-2xl p-6 md:p-7`}>
                <h3 className="font-display font-bold text-primary text-xl mb-3">{L(c.title)}</h3>
                <p className="text-gray-700 leading-relaxed">{L(c.text)}</p>
              </motion.div>
            ))}
          </div>

          <motion.section {...fade} className="bg-primary text-white rounded-3xl p-6 md:p-10 mb-10">
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">{L(SCI_TITLE)}</h2>
            <p className="text-white/90 leading-relaxed mb-6">{L(SCI_TEXT)}</p>
            <ul className="flex flex-wrap gap-3">
              {TESTS.map((x) => (
                <li key={x} className="rounded-full bg-white text-primary font-display font-bold px-5 py-2">{x}</li>
              ))}
            </ul>
          </motion.section>

          <motion.section {...fade} className="mb-10">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-primary mb-4">{L(AGE_TITLE)}</h2>
            <p className="text-gray-700 leading-relaxed text-base md:text-lg">{L(AGE_TEXT)}</p>
          </motion.section>

          <motion.section {...fade} className="bg-brand-green text-white rounded-3xl p-6 md:p-10 mb-10">
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">{L(ETHICS_TITLE)}</h2>
            <p className="leading-relaxed mb-5">{L(ETHICS_TEXT)}</p>
            <p className="inline-block bg-white text-primary font-display font-bold rounded-xl px-5 py-3">{L(ETHICS_NOTE)}</p>
          </motion.section>

          <motion.section {...fade} className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-display font-bold text-primary mb-4">{L(FUTURE_TITLE)}</h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-display">{L(FUTURE_TEXT)}</p>
            <p className="text-brand-orange font-display font-bold mt-8">{L(SIGN1)}</p>
            <p className="text-gray-500 text-sm font-semibold tracking-wide mt-4 whitespace-pre">{L(SIGN2)}</p>
          </motion.section>
        </article>
      </div>
    </div>
  );
}
