import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n";
import {
  APPROACH_INTRO, APPROACH_SIGNATURE, APPROACH_SLOGAN, APPROACH_TITLE, PRINCIPLES,
} from "./missionContent";

const fade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5 },
};

const ACCENTS = ["bg-brand-blue", "bg-brand-orange", "bg-brand-green", "bg-primary"];

/* Numaralı kart ızgarası: sekiz ilke, büyük numara rozetli */
export function EgitimYaklasimiContent() {
  const { lang } = useLanguage();
  const L = (x: { tr: string; en: string }) => x[lang];

  return (
    <div className="max-w-6xl mx-auto" data-testid="page-egitim-yaklasimimiz">
      <header className="text-center max-w-3xl mx-auto mb-10">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-primary mb-3">{L(APPROACH_TITLE)}</h2>
      </header>

      <motion.div {...fade} className="bg-gray-50 border border-gray-100 rounded-2xl p-6 md:p-10 max-w-4xl mx-auto mb-12 space-y-4">
        {APPROACH_INTRO.map((p, i) => (
          <p key={i} className={i === 2 ? "text-lg md:text-xl font-display font-semibold text-primary leading-snug" : "text-gray-700 leading-relaxed text-base md:text-lg"}>{L(p)}</p>
        ))}
      </motion.div>

      <div className="grid md:grid-cols-2 gap-5 md:gap-6">
        {PRINCIPLES.map((pr, i) => (
          <motion.article
            key={i}
            {...fade}
            className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 flex flex-col"
            data-testid={`principle-${i + 1}`}
          >
            <div className="flex items-start gap-4 mb-4">
              <span className={`shrink-0 w-2 self-stretch rounded-full ${ACCENTS[i % ACCENTS.length]}`} />
              <h3 className="text-xl md:text-2xl font-display font-bold text-primary leading-snug pt-0.5">{L(pr.title)}</h3>
            </div>
            <div className="space-y-3">
              {pr.paragraphs.map((p, j) => (
                <p key={j} className="text-gray-700 leading-relaxed">{L(p)}</p>
              ))}
            </div>
          </motion.article>
        ))}
      </div>

    </div>
  );
}
