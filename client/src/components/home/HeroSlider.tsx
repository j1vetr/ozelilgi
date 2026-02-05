import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "wouter";

const SLIDES = [
  {
    id: 1,
    image: "/images/building-drone-1.jpg",
    title: "Her Öğrenci Özel İlgiyi Hak Eder",
    subtitle: "Anaokulu, İlkokul ve Ortaokul kademelerinde çocuğunuzun potansiyelini keşfediyoruz.",
    cta: "Kampüsü Keşfet",
    link: "/kampus",
    color: "bg-brand-blue"
  },
  {
    id: 2,
    image: "/images/sports-hall-1.jpg",
    title: "Spor ve Hareketle Gelişim",
    subtitle: "Modern spor salonumuzda basketbol, voleybol ve jimnastik eğitimi.",
    cta: "Eğitim Modelimiz",
    link: "/akademik",
    color: "bg-brand-orange"
  },
  {
    id: 3,
    image: "/images/music-room-1.jpg",
    title: "Sanat ve Müzikle Yaratıcılık",
    subtitle: "Müzik odamızda piyano, davul ve perküsyon dersleri.",
    cta: "Ön Kayıt Yap",
    link: "/kayit/on-kayit",
    color: "bg-brand-yellow"
  },
  {
    id: 4,
    image: "/images/building-playground.jpg",
    title: "Eğlenerek Öğreniyoruz",
    subtitle: "Renkli oyun alanları ve yaratıcı etkinliklerle gelişim.",
    cta: "Anaokulu",
    link: "/akademik/anaokulu",
    color: "bg-brand-green"
  },
  {
    id: 5,
    image: "/images/classroom-smartboard.jpg",
    title: "Modern Eğitim Ortamları",
    subtitle: "Akıllı tahta ve teknoloji destekli sınıflarımızda interaktif öğrenme.",
    cta: "Bizi Ziyaret Edin",
    link: "/iletisim",
    color: "bg-brand-blue"
  }
];

export function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPlaying]);

  const next = () => setCurrent((prev) => (prev + 1) % SLIDES.length);
  const prev = () => setCurrent((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);

  return (
    <div className="relative h-[75vh] min-h-[500px] max-h-[700px] w-full overflow-hidden bg-primary">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <img
            src={SLIDES[current].image}
            alt={SLIDES[current].title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="container relative z-10 h-full flex items-center">
        <div className="max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={`text-${current}`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div data-testid="hero-badge" className={`inline-flex items-center gap-3 px-5 py-2.5 rounded-full ${SLIDES[current].color} text-white text-sm font-bold tracking-wider uppercase mb-8 shadow-xl`}>
                <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                Anaokulu • İlkokul • Ortaokul
              </div>

              <h1 data-testid="hero-title" className="font-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-[1.1] mb-6 tracking-tight">
                {SLIDES[current].title}
              </h1>
              
              <p data-testid="hero-subtitle" className="text-lg md:text-xl text-white/85 mb-8 max-w-xl font-light leading-relaxed">
                {SLIDES[current].subtitle}
              </p>
              
              <div className="flex flex-wrap items-center gap-4">
                <Link href={SLIDES[current].link}>
                  <Button 
                    size="lg" 
                    data-testid="hero-cta-button"
                    className={`h-12 px-8 rounded-full text-base font-semibold text-white shadow-xl hover:scale-105 transition-all duration-300 ${SLIDES[current].color} border-none`}
                  >
                    {SLIDES[current].cta} 
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                
                <div className="flex gap-2 ml-4">
                   <button 
                     onClick={prev} 
                     data-testid="hero-prev-button"
                     className="w-14 h-14 rounded-full border-2 border-white/30 bg-white/10 hover:bg-white/25 flex items-center justify-center text-white transition-all backdrop-blur-sm"
                   >
                      <ChevronLeft className="w-6 h-6" />
                   </button>
                   <button 
                     onClick={next} 
                     data-testid="hero-next-button"
                     className="w-14 h-14 rounded-full border-2 border-white/30 bg-white/10 hover:bg-white/25 flex items-center justify-center text-white transition-all backdrop-blur-sm"
                   >
                      <ChevronRight className="w-6 h-6" />
                   </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom Controls */}
      <div className="absolute bottom-6 left-0 right-0 z-20 container">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {SLIDES.map((slide, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                data-testid={`hero-slide-indicator-${idx}`}
                className="group relative py-4 px-1"
              >
                <div className={`h-1.5 rounded-full transition-all duration-500 ${
                  current === idx 
                    ? `w-20 ${slide.color}` 
                    : "w-10 bg-white/40 group-hover:bg-white/60"
                }`} />
              </button>
            ))}
            <button 
               onClick={() => setIsPlaying(!isPlaying)}
               data-testid="hero-play-pause-button"
               className="ml-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/70 hover:text-white transition-all backdrop-blur-sm"
            >
               {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </button>
          </div>
          
          <div className="hidden md:flex items-center gap-6 text-white/50 text-sm font-medium">
            <span>2026-2027 Kayıtları Açık</span>
            <span className="w-px h-4 bg-white/30" />
            <span className="font-mono">{String(current + 1).padStart(2, '0')} / {String(SLIDES.length).padStart(2, '0')}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
