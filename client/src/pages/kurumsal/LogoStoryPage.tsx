import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n";
import { LOGO_PARAGRAPHS, LOGO_SLOGAN_TEXT, LOGO_SWATCHES, LOGO_TITLE } from "./storyContent";

/* Logo merkezli düzen: büyük logo solda sabit, anlatım kartları sağda */
export function LogomuzunHikayesiContent() {
  const { lang } = useLanguage();
  const L = (x: { tr: string; en: string }) => x[lang];

  return (
    <article className="max-w-5xl mx-auto" data-testid="page-logomuzun-hikayesi">
      <header className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-primary">{L(LOGO_TITLE)}</h2>
      </header>

      <div className="grid lg:grid-cols-[minmax(0,380px)_1fr] gap-10 lg:gap-14 items-start">
        <div className="lg:sticky lg:top-32">
          <motion.img
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            src="/images/bogazici-logo-yuvarlak.png"
            alt="Özel Boğaziçi İlgi Okulları"
            className="w-64 h-64 md:w-80 md:h-80 lg:w-full lg:h-auto object-contain mx-auto"
          />
          <ul className="mt-8 grid grid-cols-2 gap-3">
            {LOGO_SWATCHES.map((s, i) => (
              <li key={i} className="flex items-center gap-3 text-sm font-medium text-gray-700">
                <span className={`w-6 h-6 rounded-full shrink-0 ${s.color}`} />
                {L(s.label)}
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-5">
          {LOGO_PARAGRAPHS.map((p, i) => {
            const accents = ["border-brand-blue", "border-yellow-400", "border-brand-orange", "border-brand-green"];
            return (
              <motion.p
                key={i}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
                className={`bg-white border-2 ${accents[i % accents.length]} rounded-xl p-6 text-gray-700 leading-relaxed text-base md:text-lg`}
              >
                {L(p)}
              </motion.p>
            );
          })}

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-primary text-white rounded-2xl p-6 md:p-8 text-lg md:text-xl font-display font-semibold leading-snug"
          >
            {L(LOGO_SLOGAN_TEXT)}
          </motion.p>
        </div>
      </div>
    </article>
  );
}
