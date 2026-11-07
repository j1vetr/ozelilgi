import { PageHeader } from "@/components/ui/PageHeader";
import { SEOHead } from "@/components/SEOHead";
import { useLanguage } from "@/lib/i18n";

type Localized = { tr: string; en: string };

const SCHOOL: Localized = { tr: "ÖZEL BOĞAZİÇİ İLGİ OKULLARI", en: "ÖZEL BOĞAZİÇİ İLGİ SCHOOLS" };
const TITLE: Localized = { tr: "PSİKOLOJİK DANIŞMANLIK VE REHBERLİK YAKLAŞIMIMIZ", en: "Our Approach to Psychological Counseling and Guidance" };
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

const PAIR: { title: Localized; text: Localized }[] = [
  {
    title: { tr: "Bireysel Görüşmeler ve Sürekli Gelişim Takibi", en: "Individual Interviews and Continuous Development Tracking" },
    text: {
      tr: "Öğrencilerimizle bireysel görüşmeler gerçekleştiriyor; okul uyumlarını, öğrenme alışkanlıklarını, dikkat ve bilişsel becerilerini, arkadaşlık ilişkilerini ve sosyal-duygusal gelişimlerini süreç içinde takip ediyoruz. Değerlendirmeleri öğrencinin yaşına, gelişim dönemine ve ihtiyacına uygun biçimde planlıyor; tek bir test puanına dayalı etiketlemelerden kaçınıyoruz.",
      en: "We hold individual interviews with our students and follow their adjustment to school, learning habits, attention and cognitive skills, friendships and social-emotional development over time. We plan assessments to suit the student's age, developmental stage and needs, and we avoid labeling based on a single test score.",
    }
  },
  {
    title: { tr: "Sosyal-Duygusal Gelişim ve Güvenli Okul İklimi", en: "Social-Emotional Development and a Safe School Climate" },
    text: {
      tr: "Öğrencilerimizin öz farkındalık, duygu düzenleme, empati, sağlıklı iletişim, sorumluluk ve problem çözme becerilerini geliştirmelerini önemsiyoruz. Kendilerini güvende ve değerli hissettikleri, farklılıklara saygının esas olduğu bir okul ortamını destekliyoruz.",
      en: "We care that our students develop self-awareness, emotion regulation, empathy, healthy communication, responsibility and problem-solving skills. We support a school environment in which they feel safe and valued and in which respect for differences is fundamental.",
    }
  },
];

const SCI_TITLE: Localized = { tr: "Bilimsel Değerlendirme ve Dikkat Becerileri", en: "Scientific Assessment and Attention Skills" };
const SCI_TEXT: Localized = {
  tr: "Dikkat ve Bilişsel Becerileri Değerlendirme Programımız kapsamında uygun öğrenciler için aşamalı test uygulamaları planlanabilir. BZ ve D2 Dikkat Testleri ile CAS Bilişsel Değerlendirme Sistemi’nin dikkat alanları veya Stroop Testi, yetkin uzmanların değerlendirmesine ve testlerin yaş grubu koşullarına göre kullanılabilecektir. Amaç, dikkate ilişkin farklı beceri alanlarını daha iyi anlamak ve ihtiyaç duyulan desteği belirlemektir.",
  en: "Within our Attention and Cognitive Skills Assessment Program, phased test applications may be planned for suitable students. The BZ and D2 Attention Tests, the attention areas of the CAS Cognitive Assessment System, or the Stroop Test may be used according to the evaluation of competent specialists and the age group conditions of the tests. The aim is to better understand the different skill areas related to attention and to determine the support needed.",
};

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

const SECTIONS: { title: Localized; text: Localized }[] = [
  { title: BILIVA_TITLE, text: BILIVA_TEXT },
  { title: PAIR[0].title, text: PAIR[0].text },
  { title: SCI_TITLE, text: SCI_TEXT },
  { title: PAIR[1].title, text: PAIR[1].text },
  { title: AGE_TITLE, text: AGE_TEXT },
  { title: ETHICS_TITLE, text: { tr: ETHICS_TEXT.tr + " " + ETHICS_NOTE.tr, en: ETHICS_TEXT.en + " " + ETHICS_NOTE.en } },
  { title: FUTURE_TITLE, text: FUTURE_TEXT },
];

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
        <article className="max-w-3xl mx-auto" data-testid="page-rehberlik">
          <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-5">{L(SCHOOL)}</p>
          <h1 className="text-3xl md:text-4xl font-display font-bold text-primary mb-3">{L(TITLE)}</h1>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-5">{L(SUBTITLE)}</p>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-5">{L(QUOTE)}</p>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-5">{L(INTRO)}</p>
          {SECTIONS.map((sec, i) => (
            <section key={i}>
              <h2 className="text-2xl font-display font-bold text-primary mt-10 mb-4">{L(sec.title)}</h2>
              <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-5">{L(sec.text)}</p>
            </section>
          ))}
          <p className="text-gray-700 leading-relaxed text-base md:text-lg mt-10 mb-5">{L(SIGN1)}</p>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-5 whitespace-pre">{L(SIGN2)}</p>
        </article>
      </div>
    </div>
  );
}
