import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "wouter";

const SLIDES = [
  {
    id: 1,
    image: "/images/school-exterior-1.jpg",
    title: "Gelecek Burada Başlıyor",
    subtitle: "Modern kampüsümüz ve yenilikçi eğitim modelimizle tanışın.",
    cta: "Okulumuzu Keşfet",
    link: "/kampus",
    color: "bg-brand-blue"
  },
  {
    id: 2,
    image: "/images/school-exterior-2.jpg",
    title: "Akademik Mükemmellik",
    subtitle: "Her öğrencinin potansiyelini en üst düzeye çıkarıyoruz.",
    cta: "Eğitim Modelimiz",
    link: "/akademik",
    color: "bg-brand-green"
  },
  {
    id: 3,
    image: "/images/school-exterior-3.jpg",
    title: "Mutlu Kampüs, Başarılı Nesiller",
    subtitle: "Sanat, spor ve bilimle iç içe bir eğitim ortamı.",
    cta: "Erken Kayıt",
    link: "/kayit/on-kayit",
    color: "bg-brand-orange"
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
    <div className="relative h-[90vh] min-h-[700px] w-full overflow-hidden bg-primary">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <img
            src={SLIDES[current].image}
            alt={SLIDES[current].title}
            className="h-full w-full object-cover"
          />
          {/* Enhanced Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80" />
        </motion.div>
      </AnimatePresence>

      <div className="container relative z-10 h-full flex items-center px-4 md:px-8">
        <div className="max-w-3xl">
          <motion.div
            key={`text-${current}`}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${SLIDES[current].color} bg-opacity-90 text-white text-sm font-bold tracking-wide mb-6 backdrop-blur-sm shadow-lg`}>
              <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
              2026-2027 EĞİTİM DÖNEMİ
            </div>

            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.1] mb-6 tracking-tight drop-shadow-lg">
              {SLIDES[current].title}
            </h1>
            
            <p className="text-lg md:text-2xl text-white/90 mb-10 max-w-xl font-light leading-relaxed drop-shadow-md">
              {SLIDES[current].subtitle}
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link href={SLIDES[current].link}>
                <Button 
                  size="lg" 
                  className={`h-16 px-10 rounded-full text-lg font-bold text-white shadow-xl hover:scale-105 transition-transform ${SLIDES[current].color} border-none`}
                >
                  {SLIDES[current].cta} <ArrowRight className="ml-2 w-6 h-6" />
                </Button>
              </Link>
              <div className="flex gap-2">
                 <button onClick={prev} className="w-14 h-16 rounded-full border border-white/20 bg-white/5 hover:bg-white/20 flex items-center justify-center text-white transition-colors backdrop-blur-sm">
                    <ChevronLeft className="w-6 h-6" />
                 </button>
                 <button onClick={next} className="w-14 h-16 rounded-full border border-white/20 bg-white/5 hover:bg-white/20 flex items-center justify-center text-white transition-colors backdrop-blur-sm">
                    <ChevronRight className="w-6 h-6" />
                 </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Progress Indicators */}
      <div className="absolute bottom-10 left-0 right-0 z-20 container px-4 md:px-8 flex justify-between items-end">
        <div className="flex items-center gap-4">
          {SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className="group relative py-4"
            >
               <div className={`h-1 transition-all duration-500 rounded-full ${current === idx ? "w-16 bg-white" : "w-8 bg-white/30 group-hover:bg-white/50"}`} />
            </button>
          ))}
          <button 
             onClick={() => setIsPlaying(!isPlaying)}
             className="ml-4 text-white/50 hover:text-white transition-colors"
          >
             {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
          </button>
        </div>
        
        <div className="hidden md:block text-white/40 font-mono text-sm">
           {current + 1} / {SLIDES.length}
        </div>
      </div>
    </div>
  );
}
