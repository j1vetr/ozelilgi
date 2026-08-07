import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Play, ChevronDown, Trophy, Star } from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "wouter";
import { useLanguage } from "@/lib/i18n";
import { T } from "@/lib/translations";

type LGSStudent = {
  name: string;
  nameTR: string;
  nameEN: string;
  labelTR: string;
  labelEN: string;
  descTR: string;
  descEN: string;
  quoteTR: string;
  quoteEN: string;
  objectPosition?: string;
};

type HeroSlide = {
  image: string;
  duration: number;
  titleTR?: string;
  titleEN?: string;
  lgsStudent?: LGSStudent;
};

const heroSlides: HeroSlide[] = [
  {
    image: "/images/hero-slide1.jpg",
    titleTR: "Her Çocuk Özel İlgiyi Hak Eder",
    titleEN: "Every Child Deserves Special Attention",
    duration: 12000,
  },
  {
    image: "/images/lgs-burcu-beril-kaya.webp",
    duration: 8000,
    lgsStudent: {
      name: "Burcu Beril Kaya",
      nameTR: "Burcu Beril Kaya",
      nameEN: "Burcu Beril Kaya",
      labelTR: "LGS Başarı Öğrencisi",
      labelEN: "LGS Success Graduate",
      descTR: "Ortaokul yıllarında aldığı güçlü akademik temel ve bireysel koçluk desteğiyle hayallerini gerçeğe dönüştürdü.",
      descEN: "With the strong academic foundation and individual coaching support she received in middle school, she turned her dreams into reality.",
      quoteTR: "\"Öğretmenlerim her zaman yanımdaydı. Başarım onların emeğiyle mümkün oldu.\"",
      quoteEN: "\"My teachers were always by my side. My success was possible thanks to their dedication.\"",
    },
  },
  {
    image: "/images/lgs-kaan-ege-alp.webp",
    duration: 8000,
    lgsStudent: {
      name: "Kaan Ege Alp",
      nameTR: "Kaan Ege Alp",
      nameEN: "Kaan Ege Alp",
      labelTR: "LGS Başarı Öğrencisi",
      labelEN: "LGS Success Graduate",
      descTR: "Kodlama, robotik ve güçlü akademik programla donandı; LGS'de harika bir başarı elde etti.",
      descEN: "Equipped with coding, robotics and a strong academic program, he achieved great success in LGS.",
      quoteTR: "\"Boğaziçi İlgi'de sadece ders değil, düşünmeyi öğrendim.\"",
      quoteEN: "\"At Boğaziçi İlgi, I didn't just learn lessons — I learned to think.\"",
    },
  },
  { image: "/images/building-drone-1.webp", duration: 5000 },
  { image: "/images/music-room-1.webp", duration: 5000 },
  { image: "/images/wall-mural-nature.webp", duration: 5000 },
];

function preloadImages() {
  heroSlides.slice(1).forEach((slide) => {
    const img = new Image();
    img.src = slide.image;
  });
}

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

/* ─── LGS Slide Content ─────────────────────────────────────── */
function LGSSlideContent({ student, lang }: { student: LGSStudent; lang: string }) {
  const name  = lang === "tr" ? student.nameTR  : student.nameEN;
  const label = lang === "tr" ? student.labelTR : student.labelEN;
  const desc  = lang === "tr" ? student.descTR  : student.descEN;
  const quote = lang === "tr" ? student.quoteTR : student.quoteEN;
  const ctaLabel = lang === "tr" ? "Ön Kayıt Yap" : "Pre-Register";
  const subCtaLabel = lang === "tr" ? "Başarılarımız" : "Our Achievements";

  return (
    /* Full-height flex — text aligned LEFT, taking ~50% of width */
    <div className="relative h-full w-full flex items-center">
      <div className="container px-6 md:px-12">
        {/* Left column — max half the viewport */}
        <motion.div
          key={student.name}
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.6 }}
          className="max-w-[52%] md:max-w-[46%]"
        >
          {/* School badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary px-4 py-2 rounded-full text-xs md:text-sm font-bold mb-5 shadow-sm"
          >
            <Trophy className="w-3.5 h-3.5 text-brand-orange shrink-0" />
            Boğaziçi İlgi Koleji · {label}
          </motion.div>

          {/* Student name — large & bold */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl font-display font-black text-primary leading-tight mb-3"
            style={{ textShadow: "0 1px 3px rgba(0,0,0,0.06)" }}
          >
            {name}
          </motion.h2>

          {/* Gold star row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex gap-1 mb-5"
          >
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-brand-orange text-brand-orange" />
            ))}
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="text-sm md:text-base text-gray-700 leading-relaxed mb-5"
          >
            {desc}
          </motion.p>

          {/* Quote */}
          <motion.blockquote
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="border-l-4 border-brand-orange pl-4 mb-8 text-sm md:text-base text-gray-600 italic leading-relaxed"
          >
            {quote}
          </motion.blockquote>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <Link href="/kayit/on-kayit">
              <Button
                size="default"
                className="h-12 px-7 rounded-full bg-brand-orange hover:bg-brand-orange/90 text-white font-bold shadow-lg shadow-brand-orange/30 justify-center"
              >
                {ctaLabel} <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link href="/basarilar">
              <Button
                size="default"
                variant="outline"
                className="h-12 px-7 rounded-full border-2 border-primary/30 text-primary hover:bg-primary/5 font-semibold justify-center"
              >
                {subCtaLabel}
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

/* ─── Default Slide Content ──────────────────────────────────── */
function DefaultSlideContent({ slide, lang }: { slide: HeroSlide; lang: string }) {
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
          {lang === "tr"
            ? (slide.titleTR ?? T("hero.title", lang))
            : (slide.titleEN ?? T("hero.title", lang))}
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
            #herçocuközelilgiyihakerder
          </motion.span>
        </motion.div>
      </div>
    </div>
  );
}

/* ─── Main HeroSlider ────────────────────────────────────────── */
export function HeroSlider() {
  const [activeSlide, setActiveSlide] = useState(0);
  const { lang } = useLanguage();

  useEffect(() => {
    const idleTimeout = setTimeout(preloadImages, 2000);
    const timer = setTimeout(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, heroSlides[activeSlide].duration);
    return () => { clearTimeout(timer); clearTimeout(idleTimeout); };
  }, [activeSlide]);

  const currentSlide = heroSlides[activeSlide];
  const isLGS = !!currentSlide.lgsStudent;

  return (
    <section className="relative h-screen w-full overflow-hidden">

      {/* Background Images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSlide}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <img
            src={currentSlide.image}
            alt="Hero"
            className={`w-full h-full object-cover ${
              activeSlide === 0 ? "object-[72%_center] md:object-center" : ""
            } ${isLGS ? "object-right md:object-right" : ""}`}
            loading={activeSlide === 0 ? "eager" : "lazy"}
            fetchPriority={activeSlide === 0 ? "high" : "auto"}
            decoding={activeSlide === 0 ? "sync" : "async"}
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlay — dark for regular slides, light for LGS slides */}
      {isLGS ? (
        /* Light left gradient so text is readable, right stays clear */
        <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-white/20 to-transparent pointer-events-none" />
      ) : (
        <>
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10 pointer-events-none" />
        </>
      )}

      {/* Slide Content */}
      <AnimatePresence mode="wait">
        {isLGS ? (
          <motion.div
            key={`lgs-${activeSlide}`}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <LGSSlideContent student={currentSlide.lgsStudent!} lang={lang} />
          </motion.div>
        ) : (
          <motion.div
            key={`default-${activeSlide}`}
            className="absolute inset-0 flex"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <DefaultSlideContent slide={currentSlide} lang={lang} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Slide Indicators - Right Side (desktop) */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-2 z-10">
        {heroSlides.map((_, idx) => (
          <motion.button
            key={idx}
            onClick={() => setActiveSlide(idx)}
            whileHover={{ scale: 1.2 }}
            data-testid={`hero-slide-indicator-${idx}`}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-500 ${
              activeSlide === idx
                ? "bg-brand-orange scale-110"
                : isLGS
                  ? "bg-gray-400/60 hover:bg-gray-500/80"
                  : "bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>

      {/* Slide Indicators - Bottom (mobile) */}
      <div className="absolute bottom-32 left-1/2 -translate-x-1/2 flex gap-2 lg:hidden z-10">
        {heroSlides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveSlide(idx)}
            data-testid={`hero-slide-indicator-mobile-${idx}`}
            className={`h-1 rounded-full transition-all duration-500 ${
              activeSlide === idx
                ? "w-6 bg-brand-orange"
                : isLGS ? "w-2.5 bg-gray-400/60" : "w-2.5 bg-white/40"
            }`}
          />
        ))}
      </div>

      {/* Marquee Strip */}
      <div className="absolute bottom-16 left-0 right-0 overflow-hidden z-10">
        <div className={`${isLGS ? "bg-white/70 border-y border-gray-200" : "bg-white/10 backdrop-blur-md border-y border-white/10"} py-3`}>
          <motion.div
            animate={{ x: [0, -1920] }}
            transition={{ x: { duration: 30, repeat: Infinity, ease: "linear" } }}
            className="flex gap-8 whitespace-nowrap"
          >
            {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
              <div key={i} className="flex items-center gap-6">
                <span className={`font-medium text-sm ${isLGS ? "text-gray-700" : "text-white"}`}>{item}</span>
                <span className={isLGS ? "text-gray-400" : "text-white/30"}>|</span>
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
          className={isLGS ? "text-gray-500/70" : "text-white/50"}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
