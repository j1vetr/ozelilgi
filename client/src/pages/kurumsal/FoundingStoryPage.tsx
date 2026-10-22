import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n";
import {
  CHAPTERS, FOUNDER_NAME_LINE, FOUNDING_BACKGROUND, FOUNDING_CLOSING_Q, FOUNDING_OPENING,
  FOUNDING_QUESTIONS, FOUNDING_QUOTE, FOUNDING_SIGNATURE, FOUNDING_TITLE, SLOGAN,
} from "./storyContent";

const fade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5 },
};

/* Dikey hikâye akışı: soldaki çizgi üzerinde bölümler ilerler */
export function KurulusHikayesiContent() {
  const { lang } = useLanguage();
  const L = (x: { tr: string; en: string }) => x[lang];

  return (
    <article className="max-w-3xl mx-auto" data-testid="page-kurulus-hikayesi">
      <header className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-3">{L(FOUNDING_TITLE)}</h2>
        <p className="inline-block text-brand-orange font-semibold tracking-wide">{L(SLOGAN)}</p>
      </header>

      <motion.div {...fade} className="mb-10">
        {FOUNDING_OPENING.map((p, i) => (
          <p
            key={i}
            className={i === 0 ? "text-xl md:text-2xl font-display font-semibold text-primary leading-snug mb-5" : "text-gray-700 leading-relaxed text-base md:text-lg"}
          >
            {L(p)}
          </p>
        ))}
      </motion.div>

      <motion.div {...fade} className="bg-primary text-white rounded-2xl px-6 py-8 md:px-10 md:py-10 mb-10">
        <p className="text-sm uppercase tracking-widest text-brand-orange mb-2 font-semibold">Aziz Akten</p>
        <p className="text-2xl md:text-3xl font-display font-bold">{L(FOUNDER_NAME_LINE)}</p>
      </motion.div>

      <div className="space-y-5 mb-10">
        {FOUNDING_BACKGROUND.map((p, i) => (
          <motion.p key={i} {...fade} className="text-gray-700 leading-relaxed text-base md:text-lg">{L(p)}</motion.p>
        ))}
      </div>

      <motion.blockquote {...fade} className="border-l-4 border-brand-orange pl-5 md:pl-8 py-2 mb-10 text-xl md:text-2xl font-display font-semibold text-primary leading-snug">
        {L(FOUNDING_QUOTE)}
      </motion.blockquote>

      <ol className="space-y-4 mb-8">
        {FOUNDING_QUESTIONS.map((q, i) => (
          <motion.li key={i} {...fade} className="flex gap-4 bg-gray-50 border border-gray-100 rounded-xl p-5">
            <span className="shrink-0 w-9 h-9 rounded-full bg-brand-orange text-white font-bold flex items-center justify-center">{i + 1}</span>
            <span className="text-gray-800 leading-relaxed">{L(q)}</span>
          </motion.li>
        ))}
      </ol>
      <motion.p {...fade} className="font-semibold text-primary text-lg mb-16">{L(FOUNDING_CLOSING_Q)}</motion.p>

      <div className="relative pl-8 md:pl-12 border-l-2 border-primary/20 space-y-16">
        {CHAPTERS.map((ch, ci) => (
          <section key={ci} className="relative">
            <span className="absolute -left-[41px] md:-left-[57px] top-1 w-5 h-5 rounded-full bg-brand-orange border-4 border-white" />
            <motion.h3 {...fade} className="text-2xl md:text-3xl font-display font-bold text-primary mb-6">{L(ch.title)}</motion.h3>
            <div className="space-y-4">
              {ch.paragraphs.map((p, i) =>
                ch.quoteIndex === i ? (
                  <motion.blockquote key={i} {...fade} className="bg-brand-green/10 border-l-4 border-brand-green rounded-r-xl px-5 py-4 text-lg font-display font-semibold text-primary">
                    {L(p)}
                  </motion.blockquote>
                ) : (
                  <motion.p key={i} {...fade} className="text-gray-700 leading-relaxed text-base md:text-lg">{L(p)}</motion.p>
                ),
              )}
            </div>
          </section>
        ))}
      </div>

      <motion.footer {...fade} className="mt-16 text-center bg-primary text-white rounded-2xl py-10 px-6">
        <p className="font-display font-bold tracking-wide text-lg md:text-xl mb-2">{L(FOUNDING_SIGNATURE)}</p>
        <p className="text-brand-orange font-semibold">{L(SLOGAN)}.</p>
      </motion.footer>
    </article>
  );
}
