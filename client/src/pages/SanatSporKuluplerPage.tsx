import { SectionShell } from "@/components/layout/SectionShell";
import { SEOHead } from "@/components/SEOHead";
import { useLanguage } from "@/lib/i18n";

type Localized = { tr: string; en: string };

const SCHOOL: Localized = { tr: "ÖZEL BOĞAZİÇİ İLGİ OKULLARI", en: "ÖZEL BOĞAZİÇİ İLGİ SCHOOLS" };
const TITLE: Localized = { tr: "SANAT, SPOR VE ÖĞRENCİ KULÜPLERİMİZ", en: "Our Art, Sports and Student Clubs" };
const SUBTITLE: Localized = { tr: "Yeteneklerini Keşfet, Tutkularınla Geleceğe Yön Ver", en: "Discover Your Talents, Shape the Future with Your Passions" };
const QUOTE: Localized = { tr: "Her çocuğun keşfedilmeyi bekleyen bir yeteneği, gelişmeyi bekleyen bir tutkusu vardır.", en: "Every child has a talent waiting to be discovered and a passion waiting to develop." };
const INTRO: Localized[] = [
  {
    tr: "Özel Boğaziçi İlgi Okulları olarak eğitimi yalnızca sınıfta ve ders kitaplarında gerçekleşen bir süreç olarak görmüyoruz. Öğrencilerimizin akademik gelişimleri kadar sanatsal, sportif, kültürel, teknolojik ve sosyal yönlerinin de desteklenmesi gerektiğine inanıyoruz.",
    en: "At Özel Boğaziçi İlgi Schools, we do not see education as a process that takes place only in the classroom and in textbooks. We believe that our students' artistic, athletic, cultural, technological and social sides need to be supported as much as their academic development.",
  },
  {
    tr: "Bu anlayışla sanat, spor ve öğrenci kulüplerini eğitimimizin tamamlayıcı etkinlikleri değil, bütüncül eğitim modelimizin vazgeçilmez parçaları olarak değerlendiriyoruz. Amacımız, her öğrencimizin ilgi alanlarını keşfetmesine, yeteneklerini geliştirmesine ve kendisini farklı yollarla ifade etmesine fırsat sunmaktır.",
    en: "With this understanding, we regard art, sports and student clubs not as supplementary activities of our education but as indispensable parts of our holistic education model. Our aim is to give each of our students the opportunity to discover their interests, develop their talents and express themselves in different ways.",
  },
];

const BILIVA_TITLE: Localized = { tr: "BİLİVA ile Keşfet, Geliştir ve Üret", en: "Discover, Develop and Create with BİLİVA" };
const BILIVA_TEXT: Localized[] = [
  {
    tr: "BİLİVA Eğitim Modelimizin “İlgiyle Keşfet”, “Liderlik Et” ve “Araştır ve Üret” ilkeleri, sanat, spor ve kulüp çalışmalarımıza yön verir.",
    en: "The “Discover with Interest”, “Lead” and “Research and Create” principles of our BİLİVA Education Model guide our art, sports and club activities.",
  },
  {
    tr: "Çünkü her çocuğun başarısı aynı alanda ortaya çıkmaz. Kimi öğrencimiz bir müzik aletinin başında, kimi resim atölyesinde, kimi spor sahasında, kimi satranç tahtasında, kimi de bir robotik kodlama projesinde kendi potansiyelini keşfeder.",
    en: "Because every child's success does not emerge in the same field. Some of our students discover their potential at a musical instrument, some in the painting studio, some on the sports field, some at the chessboard and some in a robotic coding project.",
  },
];

const ART_TITLE: Localized = { tr: "Müzik ve Sanatla Kendini İfade Et", en: "Express Yourself with Music and Art" };
const ART_INTRO: Localized = {
  tr: "Sanat eğitimi öğrencilerimizin yaratıcılıklarını, hayal güçlerini, estetik duyarlılıklarını ve özgün düşünme becerilerini geliştiren önemli bir öğrenme alanı olarak görüyoruz.",
  en: "We see art education as an important area of learning that develops our students' creativity, imagination, aesthetic sensitivity and original thinking skills.",
};
const ART_CARDS: { title: Localized; text: Localized }[] = [
  {
    title: { tr: "Piyano ve Gitar", en: "Piano and Guitar" },
    text: {
      tr: "Okulumuzda yürütülen piyano ve gitar çalışmaları, öğrencilerimizin müzikal yeteneklerini keşfetmelerine, ritim ve dinleme becerilerini geliştirmelerine ve müzikle güçlü bir bağ kurmalarına olanak tanır.",
      en: "The piano and guitar work carried out in our school allows our students to discover their musical talents, develop their rhythm and listening skills and build a strong bond with music.",
    },
  },
  {
    title: { tr: "Resim ve Drama", en: "Painting and Drama" },
    text: {
      tr: "Resim çalışmalarımızla gözlem, hayal gücü ve görsel ifade becerilerini; drama çalışmalarımızla iletişim, empati, özgüven ve yaratıcı düşünme becerilerini destekliyoruz. Bizim için sanatın değeri yalnızca ortaya çıkan eserde değil, öğrencinin kendisini keşfettiği süreçte saklıdır.",
      en: "With our painting work, we support observation, imagination and visual expression skills, and with our drama work, communication, empathy, self-confidence and creative thinking skills. For us, the value of art lies not only in the finished work but in the process in which the student discovers themselves.",
    },
  },
];

const SPORT_TITLE: Localized = { tr: "Sporla Güçlenen Beden, Karakter ve Takım Ruhu", en: "Body, Character and Team Spirit Strengthened by Sports" };
const SPORT_TEXT: Localized[] = [
  {
    tr: "Sporu yalnızca fiziksel gelişimi destekleyen bir etkinlik olarak değil; disiplin, dayanıklılık, sorumluluk, özgüven, centilmenlik ve iş birliği kazandıran önemli bir eğitim alanı olarak değerlendiriyoruz.",
    en: "We regard sports not only as an activity that supports physical development but as an important area of education that instills discipline, endurance, responsibility, self-confidence, sportsmanship and cooperation.",
  },
  {
    tr: "Okulumuzda futbol, basketbol ve voleybol çalışmaları aktif olarak yürütülmektedir. Özellikle kız ve erkek futbol takımlarımız, kendi kategorilerinde okullar arası müsabakalara katılarak okulumuzu temsil etmektedir.",
    en: "Football, basketball and volleyball activities are actively carried out in our school. In particular, our girls' and boys' football teams represent our school by taking part in inter-school competitions in their own categories.",
  },
  {
    tr: "Öğrencilerimizin takım arkadaşlarına güvenmeyi, ortak hedefler için emek vermeyi, kurallara saygı göstermeyi, kazanmayı ve kaybetmeyi olgunlukla karşılamayı öğrenmelerini önemsiyoruz. Bizim için sportif başarı, skor kadar kazanılan karakter ve takım ruhuyla da anlam kazanır.",
    en: "We care that our students learn to trust their teammates, work hard for common goals, respect the rules and meet winning and losing with maturity. For us, athletic success gains meaning as much through the character and team spirit gained as through the score.",
  },
];

const ROWS: { word: Localized; title: Localized; text: Localized[] }[] = [
  {
    word: { tr: "Satranç", en: "Chess" },
    title: { tr: "Satrançla Stratejik Düşünme", en: "Strategic Thinking with Chess" },
    text: [{
      tr: "Satranç çalışmalarımız, öğrencilerimizin dikkat, sabır, planlama, problem çözme ve farklı olasılıkları değerlendirme becerilerini destekler. Öğrencilerimizin hamlelerini sonuçlarını düşünmelerini, strateji geliştirmelerini ve kararlarının sorumluluğunu almalarını teşvik ediyoruz.",
      en: "Our chess work supports our students' attention, patience, planning, problem solving and ability to evaluate different possibilities. We encourage our students to think about the consequences of their moves, develop strategies and take responsibility for their decisions.",
    }],
  },
  {
    word: { tr: "Robotik", en: "Robotics" },
    title: { tr: "Robotik Kodlama ile Geleceği Tasarlayan Nesiller", en: "Generations Designing the Future with Robotic Coding" },
    text: [
      {
        tr: "Robotik kodlama, okulumuzun önem verdiği ve öğrencilerimizin gelişimini güçlü biçimde desteklediğimiz alanlardan biridir.",
        en: "Robotic coding is one of the areas our school values and in which we strongly support our students' development.",
      },
      {
        tr: "Robotik kodlama çalışmalarımızda öğrencilerimizin teknolojiyi yalnızca kullanan değil; teknolojinin çalışma mantığını anlayan, tasarlayan ve üreten bireyler olarak gelişmelerini hedefliyoruz. Algoritmik düşünme, problem çözme, tasarım, yaratıcılık ve iş birliği becerilerini destekliyoruz.",
        en: "In our robotic coding work, we aim for our students to develop not merely as users of technology but as individuals who understand how technology works, and who design and create it. We support algorithmic thinking, problem solving, design, creativity and collaboration skills.",
      },
      {
        tr: "Deneme, hata yapma, yeniden düşünme ve çözüm geliştirme süreçlerini öğrenmenin doğal parçaları olarak değerlendiriyoruz. BİLİVA Eğitim Modelimizin “Bilimsel Düşün”, “İlişkilendir” ve “Araştır ve Üret” ilkeleri bu çalışmalarımıza yön verir.",
        en: "We regard the processes of trying, making mistakes, rethinking and developing solutions as natural parts of learning. The “Think Scientifically”, “Connect” and “Research and Create” principles of our BİLİVA Education Model guide this work.",
      },
    ],
  },
];

const CLUB_TITLE: Localized = { tr: "Öğrenci Kulüpleri ile İlgi Alanlarını Keşfetme", en: "Discovering Interests with Student Clubs" };
const CLUB_TEXT: Localized[] = [
  {
    tr: "Öğrenci kulüplerimizi, çocuklarımızın farklı alanlarda kendilerini deneyebildikleri, ortak ilgi alanlarına sahip arkadaşlarıyla buluşabildikleri ve yeni sorumluluklar üstlenebildikleri değerli öğrenme ortamları olarak görüyoruz.",
    en: "We see our student clubs as valuable learning environments in which our children can try themselves in different areas, meet friends with shared interests and take on new responsibilities.",
  },
  {
    tr: "Sanat, müzik, spor, satranç ve robotik kodlama gibi alanlardaki kulüp çalışmalarımız, öğrencilerimizin iletişim, ekip çalışması, liderlik ve ortak hedefler doğrultusunda hareket etme becerilerini destekler.",
    en: "Our club activities in areas such as art, music, sports, chess and robotic coding support our students' communication, teamwork, leadership and ability to act toward common goals.",
  },
];

const END_TITLE: Localized = { tr: "Çok Yönlü Gelişim, Güçlü Bir Gelecek", en: "Multifaceted Development, a Strong Future" };
const END_TEXT: Localized[] = [
  {
    tr: "Özel Boğaziçi İlgi Okulları’nda öğrencilerimizin yalnızca akademik başarılarıyla değil; sanatla, sporla, bilimle, teknolojiyle ve sosyal yaşamla kurdukları ilişkilerle de gelişmelerini önemsiyoruz.",
    en: "At Özel Boğaziçi İlgi Schools, we care that our students develop not only through their academic achievements but also through the relationships they build with art, sports, science, technology and social life.",
  },
  {
    tr: "Hedefimiz; yeteneklerini tanıyan, kendisini özgüvenle ifade eden, takım çalışmasına değer veren, yaratıcı düşünen, sağlıklı yaşam alışkanlıkları geliştiren ve farklı alanlarda üretme cesareti gösteren bireyler yetiştirmektir.",
    en: "Our goal is to raise individuals who know their talents, express themselves with confidence, value teamwork, think creatively, develop healthy living habits and show the courage to create in different fields.",
  },
];
const END_QUOTE: Localized = {
  tr: "Çünkü biliyoruz ki bir çocuğun geleceğini şekillendiren başarılar bazen bir piyano tuşunda, bazen bir resim fırçasında, bazen bir futbol sahasında, bazen bir satranç hamlesinde, bazen de küçük bir robotik tasarımda başlar.",
  en: "Because we know that the achievements that shape a child's future sometimes begin on a piano key, sometimes with a paintbrush, sometimes on a football field, sometimes with a chess move and sometimes in a small robotic design.",
};
const SIGN: Localized = { tr: "Özel Boğaziçi İlgi Okulları | Boğaziçi Vizyonuyla Geleceğe.", en: "Özel Boğaziçi İlgi Schools | Towards the Future with the Boğaziçi Vision." };

const SECTIONS: { title: Localized; paras: Localized[] }[] = [
  { title: BILIVA_TITLE, paras: BILIVA_TEXT },
  { title: ART_TITLE, paras: [ART_INTRO, ART_CARDS[0].text, ART_CARDS[1].text] },
  { title: SPORT_TITLE, paras: SPORT_TEXT },
  { title: ROWS[0].title, paras: ROWS[0].text },
  { title: ROWS[1].title, paras: ROWS[1].text },
  { title: CLUB_TITLE, paras: CLUB_TEXT },
  { title: END_TITLE, paras: [...END_TEXT, END_QUOTE] },
];

export default function SanatSporKuluplerPage() {
  const { lang, t } = useLanguage();
  const L = (x: Localized) => x[lang];

  return (
    <div className="bg-background min-h-screen">
      <SEOHead
        titleTR="Sanat, Spor ve Öğrenci Kulüpleri | Özel Boğaziçi İlgi Koleji Çekmeköy"
        titleEN="Art, Sports and Student Clubs | Özel Boğaziçi İlgi Koleji Çekmeköy"
        descriptionTR="BİLİVA ile müzik, resim, drama, futbol, basketbol, voleybol, satranç, robotik kodlama ve öğrenci kulüpleriyle çok yönlü gelişim."
        descriptionEN="Multifaceted development with BİLİVA through music, painting, drama, football, basketball, volleyball, chess, robotic coding and student clubs."
        canonical="/kurumsal/biliva-sanat-spor-kulupler"
      />
      <SectionShell group="model" title={t("Sanat ve Spor Öğrenci Kulüplerimiz", "Art and Sports Student Clubs")}>
        <article className="max-w-3xl mx-auto" data-testid="page-sanat-spor-kulupler">
          <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-5">{L(SCHOOL)}</p>
          <h1 className="text-3xl md:text-4xl font-display font-bold text-primary mb-3">{L(TITLE)}</h1>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-5">{L(SUBTITLE)}</p>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-5">{L(QUOTE)}</p>
          {INTRO.map((x, i) => <p key={i} className="text-gray-700 leading-relaxed text-base md:text-lg mb-5">{L(x)}</p>)}
          {SECTIONS.map((sec, i) => (
            <section key={i}>
              <h2 className="text-2xl font-display font-bold text-primary mt-10 mb-4">{L(sec.title)}</h2>
              {sec.paras.map((x, j) => <p key={j} className="text-gray-700 leading-relaxed text-base md:text-lg mb-5">{L(x)}</p>)}
            </section>
          ))}
        </article>
      </SectionShell>
    </div>
  );
}
