import { SectionShell } from "@/components/layout/SectionShell";
import { SEOHead } from "@/components/SEOHead";
import { useLanguage } from "@/lib/i18n";

type Localized = { tr: string; en: string };

const TITLE: Localized = { tr: "YABANCI DİL EĞİTİMİ YAKLAŞIMIMIZ", en: "Our Approach to Foreign Language Education" };
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

const CONT_TITLE: Localized = { tr: "Anaokulundan Ortaokula Süreklilik", en: "Continuity from Kindergarten to Middle School" };

const COMM_TITLE: Localized = { tr: "İletişim Odaklı İngilizce Eğitimi", en: "Communication-Focused English Education" };
const COMM_TEXT: Localized = {
  tr: "Temel hedefimiz, öğrencilerimizin İngilizceyi yalnızca bilmeleri değil, etkili ve özgüvenli biçimde kullanabilmeleridir. Dinleme, konuşma, okuma ve yazmayı birbirini tamamlayan beceriler olarak ele alıyor; etkileşim, araştırma, sunum ve üretim odaklı öğrenme deneyimlerine değer veriyoruz.",
  en: "Our main goal is for our students not only to know English but to use it effectively and confidently. We treat listening, speaking, reading and writing as complementary skills and value learning experiences focused on interaction, research, presentation and production.",
};

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

const CONT_TEXT: Localized = {
  tr: "Anaokulunda oyun, şarkı, hikâye ve günlük iletişimle İngilizceye olumlu bir başlangıç yapmayı; ilkokulda dinleme, konuşma, okuma ve yazma becerilerini geliştirmeyi; ortaokulda ise anlama, yorumlama, sunum yapma ve yazılı-sözlü ifade becerilerini derinleştirmeyi hedefliyoruz.",
  en: "In kindergarten we aim to make a positive start to English through play, songs, stories and daily communication. In primary school we aim to develop listening, speaking, reading and writing skills. In middle school we aim to deepen comprehension, interpretation, presentation and written and oral expression skills.",
};
const SECTIONS: { title: Localized; text: Localized }[] = [
  { title: BILIVA_TITLE, text: BILIVA_TEXT },
  { title: CONT_TITLE, text: CONT_TEXT },
  { title: COMM_TITLE, text: COMM_TEXT },
  ...THREE,
  { title: END_TITLE, text: END_TEXT },
];

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
      <SectionShell group="model" title={t("Yabancı Dil Eğitimi", "Foreign Language Education")}>
        <article className="max-w-3xl mx-auto" data-testid="page-yabanci-dil">
          <h1 className="text-3xl md:text-4xl font-display font-bold text-primary mb-3">{L(TITLE)}</h1>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-5">{L(SUBTITLE)}</p>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-5">{L(LEAD_SHORT)} {L(LEAD_REST)}</p>
          {SECTIONS.map((sec, i) => (
            <section key={i}>
              <h2 className="text-2xl font-display font-bold text-primary mt-10 mb-4">{L(sec.title)}</h2>
              <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-5">{L(sec.text)}</p>
            </section>
          ))}
        </article>
      </SectionShell>
    </div>
  );
}
