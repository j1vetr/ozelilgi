import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../ui/button";

const levels = [
  {
    id: "anaokulu",
    title: "Anaokulu",
    ages: "3-6 Yaş",
    description: "Oyun temelli öğrenme ile merak duygusunu besliyor, sosyal gelişimi destekliyoruz.",
    image: "/images/kindergarten-kitchen.jpg",
    color: "#F97316",
    features: ["Oyun Odaklı Eğitim", "Drama & Müzik", "Erken Okuma", "Sosyal Beceriler"]
  },
  {
    id: "ilkokul",
    title: "İlkokul",
    ages: "1-4. Sınıf",
    description: "Akademik temelleri güçlendirirken, eleştirel düşünme becerilerini geliştiriyoruz.",
    image: "/images/classroom-smartboard.jpg",
    color: "#3B82F6",
    features: ["Cambridge İngilizce", "Kodlama Eğitimi", "STEM Projeleri", "Matematik Atölyesi"]
  },
  {
    id: "ortaokul",
    title: "Ortaokul",
    ages: "5-8. Sınıf",
    description: "LGS hazırlığı ile öğrencilerimizi geleceğin liderleri olarak yetiştiriyoruz.",
    image: "/images/science-room-1.jpg",
    color: "#10B981",
    features: ["LGS Hazırlık", "2. Yabancı Dil", "Proje Bazlı Öğrenme", "Kariyer Rehberliği"]
  }
];

export function SchoolLevels() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % levels.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const goTo = (index: number) => {
    setActiveIndex(index);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 10000);
  };

  const goNext = () => goTo((activeIndex + 1) % levels.length);
  const goPrev = () => goTo((activeIndex - 1 + levels.length) % levels.length);

  return (
    <section className="py-16 md:py-20 relative overflow-hidden bg-gray-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)`
        }} />
      </div>

      <div className="container relative px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-white mb-3">
            Eğitim Kademeleri
          </h2>
          <p className="text-white/60 text-sm md:text-base max-w-lg mx-auto">
            Her yaş grubuna özel tasarlanmış eğitim programlarımız
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="relative max-w-5xl mx-auto">
          {/* Cards Container */}
          <div 
            className="relative h-[480px] md:h-[400px]"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <AnimatePresence mode="wait">
              {levels.map((level, index) => (
                index === activeIndex && (
                  <motion.div
                    key={level.id}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="absolute inset-0"
                  >
                    <div className="grid md:grid-cols-2 gap-6 h-full">
                      {/* Image Side */}
                      <div className="relative rounded-3xl overflow-hidden group">
                        <img 
                          src={level.image}
                          alt={level.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                        
                        {/* Floating Age Badge */}
                        <motion.div 
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.3, type: "spring" }}
                          className="absolute top-4 left-4 px-4 py-2 rounded-full text-white text-sm font-bold shadow-lg"
                          style={{ backgroundColor: level.color }}
                        >
                          {level.ages}
                        </motion.div>

                        {/* Title on Image */}
                        <div className="absolute bottom-6 left-6 right-6">
                          <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-2">
                            {level.title}
                          </h3>
                        </div>
                      </div>

                      {/* Content Side */}
                      <div className="flex flex-col justify-center p-2 md:p-6">
                        <p className="text-white/80 text-sm md:text-base leading-relaxed mb-6">
                          {level.description}
                        </p>

                        {/* Features */}
                        <div className="grid grid-cols-2 gap-2 mb-6">
                          {level.features.map((feature, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.2 + idx * 0.1 }}
                              className="flex items-center gap-2"
                            >
                              <div 
                                className="w-2 h-2 rounded-full"
                                style={{ backgroundColor: level.color }}
                              />
                              <span className="text-white/70 text-xs md:text-sm">{feature}</span>
                            </motion.div>
                          ))}
                        </div>

                        {/* Stats */}
                        <div className="flex gap-4 mb-6">
                          {[
                            { label: "Tecrübe", value: "25 Yıl" },
                            { label: "Öğretmen", value: "+25" },
                            { label: "Memnuniyet", value: "%100" }
                          ].map((stat, idx) => (
                            <div key={idx} className="text-center">
                              <div className="text-lg md:text-xl font-bold text-white">{stat.value}</div>
                              <div className="text-[10px] text-white/50">{stat.label}</div>
                            </div>
                          ))}
                        </div>

                        {/* CTA Button */}
                        <Link href={`/akademik/${level.id}`}>
                          <Button 
                            className="w-full md:w-auto h-11 px-6 rounded-full text-white font-semibold shadow-lg"
                            style={{ backgroundColor: level.color }}
                          >
                            Detaylı Bilgi
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            {/* Prev Button */}
            <button
              onClick={goPrev}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {levels.map((level, idx) => (
                <button
                  key={idx}
                  onClick={() => goTo(idx)}
                  className="group relative"
                >
                  <div 
                    className={`h-2 rounded-full transition-all duration-500 ${
                      idx === activeIndex ? 'w-8' : 'w-2'
                    }`}
                    style={{ 
                      backgroundColor: idx === activeIndex ? level.color : 'rgba(255,255,255,0.3)'
                    }}
                  />
                  {/* Tooltip */}
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-white rounded text-xs font-medium text-gray-800 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {level.title}
                  </div>
                </button>
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={goNext}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
