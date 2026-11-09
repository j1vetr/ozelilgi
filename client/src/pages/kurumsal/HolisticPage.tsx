import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n";

type Localized = { tr: string; en: string };

const fade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5 },
};

const SCHOOL: Localized = { tr: "ÖZEL BOĞAZİÇİ İLGİ OKULLARI", en: "ÖZEL BOĞAZİÇİ İLGİ SCHOOLS" };
const TITLE: Localized = { tr: "Bütüncül Eğitim Modelimiz", en: "Our Holistic Education Model" };
const SLOGAN: Localized = { tr: "Boğaziçi Vizyonuyla Geleceğe", en: "Towards the Future with the Boğaziçi Vision" };

/* Çocuğun bir bütün olarak geliştiği beş yön */
const DIMENSIONS: { label: Localized; color: string }[] = [
  { label: { tr: "Zihinsel", en: "Mental" }, color: "bg-brand-blue" },
  { label: { tr: "Sosyal", en: "Social" }, color: "bg-brand-orange" },
  { label: { tr: "Duygusal", en: "Emotional" }, color: "bg-brand-green" },
  { label: { tr: "Fiziksel", en: "Physical" }, color: "bg-brand-orange" },
  { label: { tr: "Kültürel", en: "Cultural" }, color: "bg-brand-blue" },
];

const LEAD: Localized = {
  tr: "Özel Boğaziçi İlgi Okulları olarak eğitimi, yalnızca akademik başarıya ulaşma süreci değil; çocuğun zihinsel, sosyal, duygusal, fiziksel ve kültürel yönden bir bütün olarak geliştiği yaşam boyu bir yolculuk olarak görüyoruz.",
  en: "At Özel Boğaziçi İlgi Schools, we see education not only as a process of reaching academic success, but as a lifelong journey in which the child develops as a whole mentally, socially, emotionally, physically and culturally.",
};
const CENTER: Localized = {
  tr: "Eğitim anlayışımızın merkezinde, her çocuğun kendine özgü yetenekleri, ilgi alanları, öğrenme biçimi ve keşfedilmeyi bekleyen potansiyeli vardır. Amacımız, öğrencilerimizin yalnızca bilgiyi edinmesini değil; düşünmesini, sorgulamasını, kendisini tanımasını, özgüven kazanmasını ve öğrendiklerini yaşamla ilişkilendirmesini sağlamaktır.",
  en: "At the center of our approach to education are every child's unique talents, interests, way of learning and potential waiting to be discovered. Our aim is for our students not only to acquire knowledge but to think, question, know themselves, gain self-confidence and relate what they learn to life.",
};

const CARDS: { tag: Localized; text: Localized; color: string }[] = [
  {
    tag: { tr: "BİLİVA ile Güçlenen Akademik Temel", en: "An Academic Foundation Strengthened by BİLİVA" },
    text: {
      tr: "BİLİVA Eğitim Modelimizden güç alan bütüncül eğitim yaklaşımımız, güçlü akademik temelleri bilimsel düşünce, bireysel ilgi, özgür ifade ve çok yönlü gelişimle buluşturur. Öğrencilerimizin araştıran, üreten, çözüm geliştiren ve öğrenmeyi yaşamın doğal bir parçası hâline getiren bireyler olarak yetişmesini hedefleriz.",
      en: "Drawing strength from our BİLİVA Education Model, our holistic approach brings strong academic foundations together with scientific thought, individual interest, free expression and multifaceted development. We aim for our students to grow up as individuals who research, create, develop solutions and make learning a natural part of life.",
    },
    color: "border-t-brand-blue",
  },
  {
    tag: { tr: "Sosyal ve Duygusal Gelişim", en: "Social and Emotional Development" },
    text: {
      tr: "Çocuklarımızın sosyal ve duygusal gelişimini de akademik gelişimleri kadar önemseriz. Kendilerini güvenle ifade edebilen, farklılıklara saygı duyan, empati kurabilen, sorumluluk üstlenen ve sağlıklı ilişkiler geliştirebilen bireyler yetiştirmeyi eğitimimizin ayrılmaz bir parçası olarak görürüz.",
      en: "We care about our children's social and emotional development as much as their academic development. We see raising individuals who can express themselves with confidence, respect differences, empathize, take responsibility and build healthy relationships as an inseparable part of our education.",
    },
    color: "border-t-brand-orange",
  },
  {
    tag: { tr: "Sanat, Spor, Kültür, Doğa ve Keşif", en: "Art, Sports, Culture, Nature and Discovery" },
    text: {
      tr: "Sanat, spor, kültür, doğa ve keşif odaklı öğrenme deneyimlerini çocuklarımızın yaratıcılığını, estetik duyarlılığını, fiziksel gelişimini ve dünyaya bakış açısını zenginleştiren önemli alanlar olarak değerlendiririz. Akademik öğrenmeyle bu alanlar arasında kurulan bağın, öğrencilerimizin çok yönlü gelişimini desteklediğine inanırız.",
      en: "We regard learning experiences focused on art, sports, culture, nature and discovery as important areas that enrich our children's creativity, aesthetic sensitivity, physical development and view of the world. We believe that the bond built between academic learning and these areas supports our students' multifaceted development.",
    },
    color: "border-t-brand-green",
  },
  {
    tag: { tr: "Anaokulundan Ortaokula", en: "From Kindergarten to Middle School" },
    text: {
      tr: "Anaokulundan ortaokula uzanan eğitim yolculuğumuzda, her gelişim döneminin ihtiyaçlarını gözeten öğrencilerimizin merakını, öğrenme sevgisini ve bireysel potansiyelini merkeze alırız.",
      en: "On our educational journey from kindergarten to middle school, we place our students' curiosity, love of learning and individual potential at the center, taking into account the needs of every developmental stage.",
    },
    color: "border-t-yellow-400",
  },
];

const CLOSING: Localized = {
  tr: "Bizim için bütüncül eğitim; yalnızca bugünün başarılı öğrencilerini değil, yarının özgür düşünen, güçlü karakterli, kültürlü, üretken ve topluma değer katan bireylerini yetiştirmektir.",
  en: "For us, holistic education means raising not only today's successful students but tomorrow's free-thinking, strong-charactered, cultured, productive individuals who add value to society.",
};
const FOOTER_LABEL: Localized = { tr: "BİLİVA | Bütüncül Eğitim Modelimiz", en: "BİLİVA | Our Holistic Education Model" };

/* Beş yönlü çember: ortada çocuk, çevresinde beş gelişim alanı */
function DimensionWheel({ L }: { L: (x: Localized) => string }) {
  const size = 340;
  const radius = 126;
  const node = 84;
  return (
    <div className="relative mx-auto shrink-0" style={{ width: size, height: size }} aria-hidden="true">
      <div className="absolute rounded-full border-2 border-dashed border-gray-300" style={{ inset: size / 2 - radius, }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full bg-yellow-400 flex items-center justify-center text-center text-primary font-display font-bold leading-tight text-sm px-3">
        {L({ tr: "Her çocuk bir bütün", en: "Every child is a whole" })}
      </div>
      {DIMENSIONS.map((d, i) => {
        const angle = (-90 + i * 72) * (Math.PI / 180);
        const x = size / 2 + radius * Math.cos(angle) - node / 2;
        const y = size / 2 + radius * Math.sin(angle) - node / 2;
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15 * i, duration: 0.4 }}
            className={`absolute rounded-full flex items-center justify-center text-white font-display font-bold text-sm ${d.color}`}
            style={{ width: node, height: node, left: x, top: y }}
          >
            {L(d.label)}
          </motion.div>
        );
      })}
    </div>
  );
}

export function ButunculEgitimContent() {
  const { lang } = useLanguage();
  const L = (x: Localized) => x[lang];

  return (
    <article className="max-w-5xl mx-auto" data-testid="page-butuncul-egitim">
      <header className="text-center mb-10">
        <p className="text-primary/70 font-semibold tracking-widest text-sm mb-2">{L(SCHOOL)}</p>
        <h2 className="text-3xl md:text-5xl font-display font-bold text-primary mb-3">{L(TITLE)}</h2>
      </header>

      <section className="grid md:grid-cols-[340px_1fr] gap-10 items-center mb-14">
        <DimensionWheel L={L} />
        <motion.p {...fade} className="text-xl md:text-2xl font-display font-semibold text-primary leading-snug">
          {L(LEAD)}
        </motion.p>
      </section>

      <motion.p {...fade} className="bg-gray-50 border border-gray-100 rounded-2xl p-6 md:p-8 text-gray-700 leading-relaxed text-base md:text-lg mb-10">
        {L(CENTER)}
      </motion.p>

      <div className="grid md:grid-cols-2 gap-5 mb-10">
        {CARDS.map((c, i) => (
          <motion.div key={i} {...fade} className={`bg-white border-x border-b border-gray-200 border-t-4 ${c.color} rounded-2xl p-6 md:p-7`}>
            <h3 className="font-display font-bold text-primary text-lg mb-3">{L(c.tag)}</h3>
            <p className="text-gray-700 leading-relaxed">{L(c.text)}</p>
          </motion.div>
        ))}
      </div>

      <motion.div {...fade} className="bg-primary text-white rounded-3xl p-8 md:p-12 text-center">
        <p className="text-xl md:text-2xl font-display font-semibold leading-snug max-w-3xl mx-auto">{L(CLOSING)}</p>
      </motion.div>

      <p className="text-center text-gray-500 text-sm font-semibold tracking-wide mt-6">{L(FOOTER_LABEL)}</p>
    </article>
  );
}
