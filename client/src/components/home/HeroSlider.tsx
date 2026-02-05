import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Play, ChevronDown } from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "wouter";

const heroSlides = [
  {
    image: "/images/building-drone-1.jpg",
  },
  {
    image: "/images/sports-hall-1.jpg",
  },
  {
    image: "/images/music-room-1.jpg",
  },
  {
    image: "/images/hallway-underwater.jpg",
  },
];

const marqueeItems = [
  "Anaokulu",
  "İlkokul",
  "Ortaokul",
  "Yabancı Dil",
  "Fen Laboratuvarı",
  "Müzik Atölyesi",
  "Sanat Atölyesi",
  "Spor Salonu",
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
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
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
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10" />

      {/* Content */}
      <div className="relative h-full container flex flex-col justify-center items-center text-center px-4">
        <div className="max-w-3xl">
          {/* Static Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            data-testid="hero-title"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white leading-snug mb-5"
          >
            Her Çocuk{" "}
            <span className="relative inline-block px-2 sm:px-3 py-1 bg-brand-orange text-white rounded-lg shadow-lg whitespace-nowrap">
              Özel İlgiyi
            </span>{" "}
            <span className="block sm:inline">Hak Eder</span>
          </motion.h1>

          {/* Static Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            data-testid="hero-subtitle"
            className="text-sm sm:text-base lg:text-lg text-white/80 mb-8 leading-relaxed max-w-xl mx-auto"
          >
            Anaokulu, İlkokul ve Ortaokul kademelerinde çocuğunuzun potansiyelini keşfediyoruz.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <Link href="/kayit/on-kayit">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Button
                  size="default"
                  data-testid="hero-cta-button"
                  className="h-11 w-48 rounded-full bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold shadow-lg shadow-brand-orange/25 justify-center"
                >
                  Ön Kayıt Yap
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
                  Kampüsü Keşfet
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </div>

        {/* Slide Indicators - Right Side */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-2">
          {heroSlides.map((_, idx) => (
            <motion.button
              key={idx}
              onClick={() => setActiveSlide(idx)}
              whileHover={{ scale: 1.2 }}
              data-testid={`hero-slide-indicator-${idx}`}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-500 ${
                activeSlide === idx
                  ? "bg-brand-orange scale-110"
                  : "bg-white/40 hover:bg-white/60"
              }`}
            />
          ))}
        </div>

        {/* Bottom Slide Indicators - Mobile */}
        <div className="absolute bottom-32 left-1/2 -translate-x-1/2 flex gap-2 lg:hidden">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveSlide(idx)}
              data-testid={`hero-slide-indicator-mobile-${idx}`}
              className={`h-1 rounded-full transition-all duration-500 ${
                activeSlide === idx ? "w-6 bg-brand-orange" : "w-2.5 bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Marquee Strip */}
      <div className="absolute bottom-16 left-0 right-0 overflow-hidden">
        <div className="bg-white/10 backdrop-blur-md border-y border-white/10 py-3">
          <motion.div
            animate={{ x: [0, -1920] }}
            transition={{ 
              x: { duration: 30, repeat: Infinity, ease: "linear" }
            }}
            className="flex gap-8 whitespace-nowrap"
          >
            {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
              <div key={i} className="flex items-center gap-6">
                <span className="text-white font-medium text-sm">{item}</span>
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
        className="absolute bottom-4 left-1/2 -translate-x-1/2"
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
