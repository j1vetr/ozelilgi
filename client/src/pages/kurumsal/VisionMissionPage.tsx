import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import {
  MISSION_CLOSING, MISSION_SLOGAN, MISSION_TEXT, MISSION_TITLE, STUDENT_TITLE, STUDENT_TRAITS,
  VISION_PARAS, VISION_SLOGAN, VISION_TITLE,
} from "./missionContent";

const fade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5 },
};

/* İki büyük renk bloğu: Misyon (lacivert) ve Vizyon (yeşil) */
export function VizyonMisyonContent() {
  const { lang } = useLanguage();
  const L = (x: { tr: string; en: string }) => x[lang];

  return (
    <div className="max-w-5xl mx-auto space-y-8 md:space-y-12" data-testid="page-vizyon-misyon">
      <motion.section {...fade} className="bg-primary text-white rounded-3xl p-6 md:p-12" data-testid="block-misyon">
        <p className="text-brand-orange font-semibold tracking-widest text-sm mb-3">01</p>
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">{L(MISSION_TITLE)}</h2>
        <p className="text-lg md:text-2xl leading-relaxed font-display">{L(MISSION_TEXT)}</p>

        <div className="mt-10 bg-white rounded-2xl p-5 md:p-8 text-primary">
          <h3 className="text-xl md:text-2xl font-display font-bold mb-5 uppercase tracking-wide">{L(STUDENT_TITLE)}</h3>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {STUDENT_TRAITS.map((t, i) => (
              <li key={i} className="flex items-start gap-3 bg-gray-50 rounded-xl p-4">
                <span className="shrink-0 w-6 h-6 rounded-full bg-brand-green text-white flex items-center justify-center mt-0.5">
                  <Check className="w-4 h-4" />
                </span>
                <span className="text-gray-800 font-medium leading-snug">{L(t)}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 space-y-4 text-base md:text-lg leading-relaxed text-white/90">
          {MISSION_CLOSING.map((p, i) => <p key={i} className="font-bold text-white">{L(p)}</p>)}
        </div>
        <p className="mt-6 text-brand-orange font-display font-bold text-lg">{L(MISSION_SLOGAN)}</p>
      </motion.section>

      <motion.section {...fade} className="bg-brand-green text-white rounded-3xl p-6 md:p-12" data-testid="block-vizyon">
        <p className="text-white/80 font-semibold tracking-widest text-sm mb-3">02</p>
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">{L(VISION_TITLE)}</h2>
        <div className="space-y-5">
          {VISION_PARAS.map((p, i) => (
            <p key={i} className={i === 0 ? "text-lg md:text-2xl leading-relaxed font-display" : "text-base md:text-lg leading-relaxed"}>{L(p)}</p>
          ))}
        </div>
        <p className="mt-8 font-display font-bold text-lg md:text-xl">{L(VISION_SLOGAN)}</p>
      </motion.section>
    </div>
  );
}
