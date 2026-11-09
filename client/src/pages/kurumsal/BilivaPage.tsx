import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n";
import {
  BILIVA_FOUR, BILIVA_FOUR_TITLE, BILIVA_INTRO, BILIVA_JOURNEY, BILIVA_JOURNEY_CLOSING, BILIVA_JOURNEY_INTRO,
  BILIVA_JOURNEY_TITLE, BILIVA_LEAD, BILIVA_MORE, BILIVA_MORE_CLOSING, BILIVA_MORE_TITLE,
  BILIVA_SCHOOL, BILIVA_SIX, BILIVA_SIX_CLOSING, BILIVA_SIX_TITLE, BILIVA_TAGLINE, BILIVA_TITLE,
} from "./missionContent";

const fade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5 },
};

const LETTER_COLORS = ["bg-brand-blue", "bg-brand-orange", "bg-brand-green", "bg-brand-orange", "bg-brand-blue", "bg-brand-green"];

/* BİLİVA Eğitim Modeli: Vizyon bloğunun altında üçüncü bölüm */
export function BilivaContent() {
  const { lang } = useLanguage();
  const L = (x: { tr: string; en: string }) => x[lang];

  return (
    <article className="max-w-5xl mx-auto" data-testid="page-biliva">
      <header className="text-center mb-12">
        <p className="text-primary/70 font-semibold tracking-widest text-sm mb-2">{L(BILIVA_SCHOOL)}</p>
        <h2 className="text-3xl md:text-5xl font-display font-bold text-primary mb-6">{L(BILIVA_TITLE)}</h2>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-left mb-8">
          {BILIVA_SIX.map((x, i) => (
            <li key={i} className={`rounded-2xl p-5 text-white ${LETTER_COLORS[i]}`}>
              <span className="block text-5xl font-display font-bold leading-none mb-3">{x.letter}</span>
              <span className="block font-display font-bold uppercase tracking-wide">{L(x.title)}</span>
              <span className="block text-white/90 text-sm leading-snug mt-1">{L(x.text)}</span>
            </li>
          ))}
        </ul>
        <p className="text-brand-orange font-display font-bold text-lg md:text-xl">{L(BILIVA_TAGLINE)}</p>
      </header>

      <p className="text-xl md:text-2xl font-display font-semibold text-primary leading-snug mb-5">{L(BILIVA_LEAD)}</p>
      <div className="space-y-4 text-gray-700 leading-relaxed text-base md:text-lg">
        {BILIVA_INTRO.map((p, i) => <p key={i}>{L(p)}</p>)}
      </div>

      <h3 className="text-2xl md:text-3xl font-display font-bold text-primary mt-12 mb-6">{L(BILIVA_FOUR_TITLE)}</h3>
      <div className="grid md:grid-cols-2 gap-5">
        {BILIVA_FOUR.map((item, i) => (
          <motion.div key={i} {...fade} className="bg-gray-50 border border-gray-100 rounded-2xl p-6">
            <h4 className="text-xl font-display font-bold text-primary mb-3">{L(item.title)}</h4>
            <div className="space-y-3 text-gray-700 leading-relaxed">
              {item.paragraphs.map((p, j) => <p key={j}>{L(p)}</p>)}
              <p className="font-semibold text-primary">{L(item.closing)}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <h3 className="text-2xl md:text-3xl font-display font-bold text-primary mt-12 mb-4">{L(BILIVA_JOURNEY_TITLE)}</h3>
      <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-5">{L(BILIVA_JOURNEY_INTRO)}</p>
      <div className="grid md:grid-cols-3 gap-4 mb-5">
        {BILIVA_JOURNEY.map((s, i) => (
          <motion.div key={i} {...fade} className="bg-primary text-white rounded-2xl p-5">
            <p className="text-brand-orange font-bold uppercase tracking-wide text-sm mb-2">{L(s.label)}</p>
            <p className="leading-relaxed">{L(s.text)}</p>
          </motion.div>
        ))}
      </div>
      <p className="text-gray-700 leading-relaxed text-base md:text-lg">{L(BILIVA_JOURNEY_CLOSING)}</p>

      <h3 className="text-2xl md:text-3xl font-display font-bold text-primary mt-12 mb-5">{L(BILIVA_MORE_TITLE)}</h3>
      <div className="space-y-4 text-gray-700 leading-relaxed text-base md:text-lg">
        {BILIVA_MORE.map((p, i) => <p key={i}>{L(p)}</p>)}
        <p className="font-semibold text-primary">{L(BILIVA_MORE_CLOSING)}</p>
      </div>

      <h3 className="text-2xl md:text-3xl font-display font-bold text-primary mt-12 mb-5">{L(BILIVA_SIX_TITLE)}</h3>
      <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {BILIVA_SIX.map((x, i) => (
          <li key={i} className="flex items-start gap-4 bg-gray-50 border border-gray-100 rounded-2xl p-4">
            <span className={`shrink-0 w-12 h-12 rounded-xl text-white text-2xl font-display font-bold flex items-center justify-center ${LETTER_COLORS[i]}`}>{x.letter}</span>
            <span>
              <span className="block font-display font-bold text-primary">{L(x.title)}</span>
              <span className="block text-gray-700 text-sm leading-snug mt-1">{L(x.text)}</span>
            </span>
          </li>
        ))}
      </ul>
      <p className="text-gray-700 leading-relaxed text-base md:text-lg">{L(BILIVA_SIX_CLOSING)}</p>
    </article>
  );
}
