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
  const ctaLabel    = lang === "tr" ? "Ön Kayıt Yap"  : "Pre-Register";
  const subCtaLabel = lang === "tr" ? "Başarılarımız" : "Our Achievements";

  return (
    /* Mobile: bottom-anchored text over dark overlay. Desktop: left column. */
    <div className="relative h-full w-full flex items-center">
      <div className="container px-5 md:px-12">
        <motion.div
          key={student.name}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="w-full md:max-w-[48%]"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/25 text-white px-3 py-1.5 rounded-full text-xs font-bold mb-3 shadow-sm"
          >
            <Trophy className="w-3 h-3 text-brand-orange shrink-0" />
            Özel Boğaziçi İlgi Koleji · {label}
          </motion.div>

          {/* Student name */}
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-6xl font-display font-black text-white leading-tight mb-2 md:mb-3"
            style={{ textShadow: "0 2px 8px rgba(0,0,0,0.4)" }}
          >
            {name}
          </motion.h2>

          {/* Stars */}
          <div className="flex items-center gap-1.5 mb-3 md:mb-5">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0, rotate: -20 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ delay: 0.28 + i * 0.07, type: "spring", stiffness: 300, damping: 15 }}
              >
                <Star className="w-5 h-5 md:w-6 md:h-6 fill-amber-400 text-amber-400 drop-shadow-[0_1px_4px_rgba(251,191,36,0.7)]" />
              </motion.div>
            ))}
            <motion.span
              initial={{ opacity: 0, x: -6 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.65 }}
              className="ml-1 text-xs md:text-sm font-bold text-white/80 tracking-wide"
            >
              LGS
            </motion.span>
          </div>

          {/* Description — desktop only */}
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="hidden md:block text-sm md:text-base text-white/85 leading-relaxed mb-4"
          >
            {desc}
          </motion.p>

          {/* Quote — desktop only */}
          <motion.blockquote
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.42 }}
            className="hidden md:block border-l-4 border-brand-orange pl-4 mb-7 text-sm md:text-base text-white/75 italic leading-relaxed"
          >
            {quote}
          </motion.blockquote>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-row gap-2 md:gap-3"
          >
            <Link href="/kayit/on-kayit">
              <Button
                size="default"
                className="h-10 md:h-12 px-5 md:px-7 rounded-full bg-brand-orange hover:bg-brand-orange/90 text-white font-bold shadow-lg shadow-black/30 justify-center text-sm md:text-base"
              >
                {ctaLabel} <ArrowRight className="ml-1.5 w-3.5 h-3.5 md:w-4 md:h-4" />
              </Button>
            </Link>
            <Link href="/basarilar">
              <Button
                size="default"
                variant="outline"
                className="h-10 md:h-12 px-5 md:px-7 rounded-full border-2 border-white/40 text-white hover:bg-white/15 backdrop-blur-sm font-semibold justify-center text-sm md:text-base"
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
            #herçocuközelilgiyihakeder
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
            } ${isLGS ? "object-[70%_20%] md:object-right" : ""}`}
            loading={activeSlide === 0 ? "eager" : "lazy"}
            fetchPriority={activeSlide === 0 ? "high" : "auto"}
            decoding={activeSlide === 0 ? "sync" : "async"}
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlay */}
      {isLGS ? (
        <>
          {/* Desktop: dark left band so white text is readable, right stays relatively clear */}
          <div className="absolute inset-0 hidden md:block bg-gradient-to-r from-black/75 via-black/45 to-black/10 pointer-events-none" />
          {/* Mobile: dark gradient from bottom so text at bottom is readable, student visible above */}
          <div className="absolute inset-0 md:hidden bg-gradient-to-t from-black/85 via-black/50 to-black/20 pointer-events-none" />
        </>
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
          className={isLGS ? "text-gray-500/70" : "text-white/50"}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
