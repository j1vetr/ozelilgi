import { motion } from "framer-motion";
import { ArrowRight, Play, ChevronDown } from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "wouter";
import { useLanguage, type Language } from "@/lib/i18n";
import { T } from "@/lib/translations";

const VIDEO_ID = "hFKbWg6j204";

const marqueeItems = [
  "Anaokulu",
  "Oyun Grubu",
  "İlkokul",
  "Ortaokul",
  "Görsel Sanatlar Atölyesi",
  "Müzik Atölyesi",
  "Kodlama Atölyesi",
  "Fen Bilgisi Laboratuvarı",
  "Kütüphane",
  "Yemekhane",
];

/* ─── Default Slide Content ──────────────────────────────────── */
function DefaultSlideContent({ lang }: { lang: Language }) {
  return (
    <div className="relative h-full container flex flex-col justify-center items-center text-center px-4">
      <div className="max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          data-testid="hero-title"
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white leading-snug mb-5"
        >
          {T("hero.title", lang)}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          data-testid="hero-subtitle"
          className="text-sm sm:text-base lg:text-lg text-white/80 mb-8 leading-relaxed max-w-xl mx-auto"
        >
          {T("hero.subtitle", lang)}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col items-center justify-center gap-3"
        >
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <Link href="/kayit/on-kayit">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Button
                  size="default"
                  data-testid="hero-cta-button"
                  className="h-11 w-48 rounded-full bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold shadow-lg shadow-brand-orange/25 justify-center"
                >
                  {T("cta.register", lang)}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </motion.div>
            </Link>
            <Link href="/kampus">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Button
                  size="default"
                  variant="outline"
                  className="h-11 w-48 rounded-full border-2 border-white/30 text-white hover:bg-white/10 font-semibold backdrop-blur-sm justify-center"
                >
                  <Play className="mr-2 w-4 h-4" />
                  {T("hero.cta", lang)}
                </Button>
              </motion.div>
            </Link>
          </div>
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="inline-block text-sm font-semibold tracking-wide text-white bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full border border-brand-orange"
          >
            #boğaziçivizyonuylageleceğe
          </motion.span>
        </motion.div>
      </div>
    </div>
  );
}

/* ─── Main HeroSlider ────────────────────────────────────────── */
export function HeroSlider() {
  const { lang } = useLanguage();
  const src = `https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1&mute=1&loop=1&playlist=${VIDEO_ID}&controls=0&playsinline=1&modestbranding=1&rel=0&iv_load_policy=3&disablekb=1`;

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">

      {/* Background Video */}
      <div className="absolute inset-0 pointer-events-none">
        <iframe
          src={src}
          title="Özel Boğaziçi İlgi Koleji tanıtım videosu"
          allow="autoplay; encrypted-media; picture-in-picture"
          referrerPolicy="strict-origin-when-cross-origin"
          tabIndex={-1}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-0 w-[max(100vw,177.78vh)] h-[max(56.25vw,100vh)]"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10 pointer-events-none" />

      {/* Content */}
      <div className="absolute inset-0 flex">
        <DefaultSlideContent lang={lang} />
      </div>

      {/* Marquee Strip */}
      <div className="absolute bottom-16 left-0 right-0 overflow-hidden z-10">
        <div className="bg-white/10 backdrop-blur-md border-y border-white/10 py-3">
          <motion.div
            animate={{ x: [0, -1920] }}
            transition={{ x: { duration: 30, repeat: Infinity, ease: "linear" } }}
            className="flex gap-8 whitespace-nowrap"
          >
            {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
              <div key={i} className="flex items-center gap-6">
                <span className="font-medium text-sm text-white">{item}</span>
                <span className="text-white/30">|</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-white/50"
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
