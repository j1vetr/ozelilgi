import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Play, ChevronDown } from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "wouter";

const heroSlides = [
  {
    image: "/images/building-drone-1.jpg",
    title: "Geleceği Birlikte İnşa Ediyoruz",
    subtitle: "Modern eğitim anlayışımızla öğrencilerimizi hayata hazırlıyoruz"
  },
  {
    image: "/images/sports-hall-1.jpg",
    title: "Spor ve Hareketle Büyüyoruz",
    subtitle: "Basketbol, voleybol ve jimnastik ile sağlıklı nesiller yetiştiriyoruz"
  },
  {
    image: "/images/music-room-1.jpg",
    title: "Sanatla Kendini İfade Et",
    subtitle: "Müzik ve resim atölyelerimizde yetenekler keşfediliyor"
  },
  {
    image: "/images/hallway-underwater.jpg",
    title: "Hayal Gücünü Serbest Bırak",
    subtitle: "Renkli ve ilham verici öğrenme ortamlarımızla"
  },
];

const educationLevels = [
  { name: "Anaokulu", ages: "3-6 yaş", color: "from-brand-yellow to-amber-500" },
  { name: "İlkokul", ages: "6-10 yaş", color: "from-brand-green to-emerald-600" },
  { name: "Ortaokul", ages: "10-14 yaş", color: "from-brand-blue to-blue-700" },
];

export function HeroSlider() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0"
        >
          <img
            src={heroSlides[activeSlide].image}
            alt="Hero"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

      {/* Content */}
      <div className="relative h-full container flex flex-col justify-center">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2.5 mb-6"
            data-testid="hero-badge"
          >
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-2.5 h-2.5 bg-brand-green rounded-full"
            />
            <span className="text-white font-medium">2026-2027 Kayıtları Açık</span>
          </motion.div>

          {/* Title */}
          <AnimatePresence mode="wait">
            <motion.h1
              key={`title-${activeSlide}`}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              data-testid="hero-title"
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-white leading-[1.1] mb-6"
            >
              {heroSlides[activeSlide].title}
            </motion.h1>
          </AnimatePresence>

          {/* Subtitle */}
          <AnimatePresence mode="wait">
            <motion.p
              key={`subtitle-${activeSlide}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              data-testid="hero-subtitle"
              className="text-xl lg:text-2xl text-white/80 mb-8 leading-relaxed max-w-2xl"
            >
              {heroSlides[activeSlide].subtitle}
            </motion.p>
          </AnimatePresence>

          {/* Education Levels */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-3 mb-10"
          >
            {educationLevels.map((level, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className={`bg-gradient-to-r ${level.color} px-5 py-2.5 rounded-full cursor-pointer shadow-lg`}
              >
                <span className="text-white font-bold">{level.name}</span>
                <span className="text-white/80 ml-2 text-sm">{level.ages}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <Link href="/kayit/on-kayit">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  data-testid="hero-cta-button"
                  className="h-14 px-8 rounded-full bg-brand-orange hover:bg-brand-orange/90 text-white text-lg font-semibold shadow-xl shadow-brand-orange/30"
                >
                  Ön Kayıt Yap
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </motion.div>
            </Link>
            <Link href="/kampus">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-14 px-8 rounded-full border-2 border-white/40 text-white hover:bg-white/10 text-lg font-semibold backdrop-blur-sm"
                >
                  <Play className="mr-2 w-5 h-5" />
                  Kampüsü Keşfet
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </div>

        {/* Slide Indicators - Right Side */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-3">
          {heroSlides.map((_, idx) => (
            <motion.button
              key={idx}
              onClick={() => setActiveSlide(idx)}
              whileHover={{ scale: 1.2 }}
              data-testid={`hero-slide-indicator-${idx}`}
              className={`w-3 h-3 rounded-full transition-all duration-500 ${
                activeSlide === idx
                  ? "bg-brand-orange scale-125"
                  : "bg-white/40 hover:bg-white/60"
              }`}
            />
          ))}
        </div>

        {/* Bottom Slide Indicators - Mobile */}
        <div className="absolute bottom-28 left-1/2 -translate-x-1/2 flex gap-2 lg:hidden">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveSlide(idx)}
              data-testid={`hero-slide-indicator-mobile-${idx}`}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                activeSlide === idx ? "w-8 bg-brand-orange" : "w-3 bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-white/60"
        >
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      </motion.div>
    </section>
  );
}
