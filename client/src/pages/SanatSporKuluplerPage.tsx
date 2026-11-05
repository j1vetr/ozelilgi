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
const TITLE: Localized = { tr: "Sanat, Spor ve Öğrenci Kulüplerimiz", en: "Our Art, Sports and Student Clubs" };
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
const ART_CARDS: { title: Localized; text: Localized; color: string }[] = [
  {
    title: { tr: "Piyano ve Gitar", en: "Piano and Guitar" },
    text: {
      tr: "Okulumuzda yürütülen piyano ve gitar çalışmaları, öğrencilerimizin müzikal yeteneklerini keşfetmelerine, ritim ve dinleme becerilerini geliştirmelerine ve müzikle güçlü bir bağ kurmalarına olanak tanır.",
      en: "The piano and guitar work carried out in our school allows our students to discover their musical talents, develop their rhythm and listening skills and build a strong bond with music.",
    },
    color: "border-t-brand-orange",
  },
  {
    title: { tr: "Resim ve Drama", en: "Painting and Drama" },
    text: {
      tr: "Resim çalışmalarımızla gözlem, hayal gücü ve görsel ifade becerilerini; drama çalışmalarımızla iletişim, empati, özgüven ve yaratıcı düşünme becerilerini destekliyoruz. Bizim için sanatın değeri yalnızca ortaya çıkan eserde değil, öğrencinin kendisini keşfettiği süreçte saklıdır.",
      en: "With our painting work, we support observation, imagination and visual expression skills, and with our drama work, communication, empathy, self-confidence and creative thinking skills. For us, the value of art lies not only in the finished work but in the process in which the student discovers themselves.",
    },
    color: "border-t-brand-blue",
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
const SPORTS: Localized[] = [
  { tr: "Futbol", en: "Football" },
  { tr: "Basketbol", en: "Basketball" },
  { tr: "Voleybol", en: "Volleyball" },
];

const ROWS: { image?: string; word: Localized; title: Localized; text: Localized[]; color: string }[] = [
  {
    word: { tr: "Satranç", en: "Chess" },
    title: { tr: "Satrançla Stratejik Düşünme", en: "Strategic Thinking with Chess" },
    text: [{
      tr: "Satranç çalışmalarımız, öğrencilerimizin dikkat, sabır, planlama, problem çözme ve farklı olasılıkları değerlendirme becerilerini destekler. Öğrencilerimizin hamlelerini sonuçlarını düşünmelerini, strateji geliştirmelerini ve kararlarının sorumluluğunu almalarını teşvik ediyoruz.",
      en: "Our chess work supports our students' attention, patience, planning, problem solving and ability to evaluate different possibilities. We encourage our students to think about the consequences of their moves, develop strategies and take responsibility for their decisions.",
    }],
    color: "bg-brand-blue",
  },
  {
    image: "/images/kodlama-atolyesi-yeni.webp",
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
    color: "bg-brand-green",
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
const CLUBS: Localized[] = [
  { tr: "Sanat", en: "Art" },
  { tr: "Müzik", en: "Music" },
  { tr: "Spor", en: "Sports" },
  { tr: "Satranç", en: "Chess" },
  { tr: "Robotik Kodlama", en: "Robotic Coding" },
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
      <PageHeader
        title={t("Kurumsal", "About Us")}
        subtitle={t("Boğaziçi Vizyonuyla Geleceğe", "Towards the Future with the Boğaziçi Vision")}
        breadcrumbs={[{ label: t("Kurumsal", "About Us"), href: "/kurumsal" }]}
      />

      <div className="container py-10 px-4">
        <article className="max-w-5xl mx-auto" data-testid="page-sanat-spor-kulupler">
          <header className="text-center mb-10">
            <p className="text-primary/70 font-semibold tracking-widest text-sm mb-2">{L(SCHOOL)}</p>
            <h1 className="text-3xl md:text-5xl font-display font-bold text-primary mb-4">{L(TITLE)}</h1>
            <p className="text-brand-orange font-display font-bold text-lg md:text-xl">{L(SUBTITLE)}</p>
          </header>

          <motion.blockquote {...fade} className="border-l-8 border-yellow-400 bg-yellow-50 rounded-r-2xl px-6 py-5 md:px-10 md:py-7 mb-8">
            <p className="text-xl md:text-3xl font-display font-bold text-primary leading-snug">{L(QUOTE)}</p>
          </motion.blockquote>

          <motion.div {...fade} className="space-y-4 max-w-4xl mx-auto mb-14 text-gray-700 leading-relaxed text-base md:text-lg">
            {INTRO.map((p, i) => <p key={i}>{L(p)}</p>)}
          </motion.div>

          <motion.section {...fade} className="bg-gray-50 border border-gray-100 rounded-3xl p-6 md:p-10 mb-14">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-primary mb-4">{L(BILIVA_TITLE)}</h2>
            <div className="space-y-3 text-gray-700 leading-relaxed max-w-4xl">
              {BILIVA_TEXT.map((p, i) => <p key={i}>{L(p)}</p>)}
            </div>
          </motion.section>

          <section className="mb-14">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-primary mb-3">{L(ART_TITLE)}</h2>
            <p className="text-gray-700 leading-relaxed mb-6 max-w-4xl">{L(ART_INTRO)}</p>
            <div className="grid md:grid-cols-2 gap-5">
              {ART_CARDS.map((c, i) => (
                <motion.div key={i} {...fade} className={`bg-white border-x border-b border-gray-200 border-t-4 ${c.color} rounded-2xl p-6 md:p-7`}>
                  <h3 className="font-display font-bold text-primary text-xl mb-3">{L(c.title)}</h3>
                  <p className="text-gray-700 leading-relaxed">{L(c.text)}</p>
                </motion.div>
              ))}
            </div>
          </section>

          <motion.section {...fade} className="bg-primary text-white rounded-3xl p-6 md:p-10 mb-14">
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">{L(SPORT_TITLE)}</h2>
            <div className="space-y-4 text-white/90 leading-relaxed mb-6 max-w-4xl">
              {SPORT_TEXT.map((p, i) => <p key={i}>{L(p)}</p>)}
            </div>
            <img src="/images/spor-salonu-1.webp" alt={t("Kapalı spor salonu", "Indoor sports hall")} className="w-full rounded-2xl mb-6 aspect-[16/9] object-cover" loading="lazy" />
            <ul className="flex flex-wrap gap-3">
              {SPORTS.map((x, i) => (
                <li key={i} className="rounded-full bg-white text-primary font-display font-bold px-5 py-2">{L(x)}</li>
              ))}
            </ul>
          </motion.section>

          <div className="space-y-5 mb-14">
            {ROWS.map((r, i) => (
              <motion.div key={i} {...fade} className="grid md:grid-cols-[200px_1fr] bg-white border border-gray-200 rounded-2xl overflow-hidden">
                <div className={`${r.color} text-white font-display font-bold text-3xl md:text-4xl flex flex-col items-center justify-center gap-4 py-6 px-4`}>
                  {L(r.word)}
                  {r.image && <img src={r.image} alt={L(r.title)} className="w-full max-w-[180px] rounded-xl aspect-[2/3] object-cover" loading="lazy" />}
                </div>
                <div className="p-6 md:p-8">
                  <h3 className="font-display font-bold text-primary text-xl md:text-2xl mb-3">{L(r.title)}</h3>
                  <div className="space-y-3 text-gray-700 leading-relaxed">
                    {r.text.map((p, j) => <p key={j}>{L(p)}</p>)}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.section {...fade} className="bg-brand-green text-white rounded-3xl p-6 md:p-10 mb-14">
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">{L(CLUB_TITLE)}</h2>
            <div className="space-y-4 leading-relaxed mb-6 max-w-4xl">
              {CLUB_TEXT.map((p, i) => <p key={i}>{L(p)}</p>)}
            </div>
            <ul className="flex flex-wrap gap-3">
              {CLUBS.map((x, i) => (
                <li key={i} className="rounded-full bg-white text-primary font-display font-bold px-5 py-2">{L(x)}</li>
              ))}
            </ul>
          </motion.section>

          <motion.section {...fade} className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-display font-bold text-primary mb-5">{L(END_TITLE)}</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed text-base md:text-lg">
              {END_TEXT.map((p, i) => <p key={i}>{L(p)}</p>)}
            </div>
            <p className="mt-8 border-l-8 border-yellow-400 bg-yellow-50 rounded-r-2xl px-6 py-5 text-left font-display font-bold text-primary text-lg leading-snug">{L(END_QUOTE)}</p>
            <p className="text-brand-orange font-display font-bold mt-8">{L(SIGN)}</p>
          </motion.section>
        </article>
      </div>
    </div>
  );
}
