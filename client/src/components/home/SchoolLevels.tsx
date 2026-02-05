import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Sparkles, BookOpen, GraduationCap } from "lucide-react";
import { Button } from "../ui/button";

const levels = [
  {
    id: "anaokulu",
    title: "Anaokulu",
    ages: "3-6 Yaş",
    description: "Oyun temelli öğrenme metoduyla çocuklarınızın merak duygusunu besliyor, sosyal ve duygusal gelişimlerini destekliyoruz.",
    image: "/images/kindergarten-kitchen.jpg",
    secondaryImage: "/images/hallway-underwater.jpg",
    features: ["Oyun Odaklı Eğitim", "Drama & Müzik", "Erken Okuma", "Sosyal Beceriler"],
    stats: { students: "120+", teachers: "12", years: "15+" }
  },
  {
    id: "ilkokul",
    title: "İlkokul",
    ages: "1-4. Sınıf",
    description: "Akademik temelleri sağlamlaştırırken, eleştirel düşünme ve problem çözme becerilerini geliştiriyoruz.",
    image: "/images/classroom-smartboard.jpg",
    secondaryImage: "/images/library-1.jpg",
    features: ["Cambridge İngilizce", "Kodlama Eğitimi", "STEM Projeleri", "Matematik Atölyesi"],
    stats: { students: "200+", teachers: "18", years: "15+" }
  },
  {
    id: "ortaokul",
    title: "Ortaokul",
    ages: "5-8. Sınıf",
    description: "Lise ve üniversite yolculuğuna hazırlık yaparak, öğrencilerimizi geleceğin liderleri olarak yetiştiriyoruz.",
    image: "/images/science-room-1.jpg",
    secondaryImage: "/images/sports-hall-1.jpg",
    features: ["LGS Hazırlık", "2. Yabancı Dil", "Proje Bazlı Öğrenme", "Kariyer Rehberliği"],
    stats: { students: "180+", teachers: "20", years: "15+" }
  }
];

export function SchoolLevels() {
  const [activeLevel, setActiveLevel] = useState(0);

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Blurry Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-50" />
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-brand-blue/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-brand-orange/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-green/3 rounded-full blur-3xl" />
      
      <div className="container relative">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/5 text-primary font-medium rounded-full text-xs tracking-wider uppercase mb-4"
          >
            <Sparkles className="w-3 h-3" />
            Eğitim Kademeleri
          </motion.span>
          <h2 data-testid="school-levels-section-title" className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
            Her Yaşa Özel Program
          </h2>
          <p data-testid="school-levels-section-description" className="text-muted-foreground leading-relaxed">
            3 yaşından 14 yaşına kadar, çocuğunuzun gelişim dönemine özel hazırlanmış eğitim programları.
          </p>
        </motion.div>

        {/* Level Selector Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-white rounded-2xl p-1.5 shadow-lg shadow-black/5 border border-gray-100">
            {levels.map((level, i) => (
              <motion.button
                key={level.id}
                onClick={() => setActiveLevel(i)}
                className={`relative px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                  activeLevel === i 
                    ? 'text-white' 
                    : 'text-gray-600 hover:text-primary'
                }`}
                whileHover={{ scale: activeLevel === i ? 1 : 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {activeLevel === i && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-to-r from-primary to-primary/90 rounded-xl shadow-md"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  {i === 0 && <Sparkles className="w-4 h-4" />}
                  {i === 1 && <BookOpen className="w-4 h-4" />}
                  {i === 2 && <GraduationCap className="w-4 h-4" />}
                  {level.title}
                </span>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Level Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeLevel}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid lg:grid-cols-2 gap-8 items-center"
          >
            {/* Left - Images */}
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
                className="relative rounded-3xl overflow-hidden shadow-2xl"
              >
                <img 
                  src={levels[activeLevel].image}
                  alt={levels[activeLevel].title}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                
                {/* Age Badge */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                  <span className="text-primary font-bold text-sm">{levels[activeLevel].ages}</span>
                </div>
              </motion.div>
              
              {/* Secondary Image */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="absolute -bottom-6 -right-6 w-40 h-40 rounded-2xl overflow-hidden shadow-xl border-4 border-white hidden md:block"
              >
                <img 
                  src={levels[activeLevel].secondaryImage}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-brand-yellow/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-brand-blue/20 rounded-full blur-2xl" />
            </div>

            {/* Right - Content */}
            <div className="lg:pl-8">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15 }}
              >
                <h3 className="text-2xl md:text-3xl font-display font-bold text-primary mb-2">
                  {levels[activeLevel].title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {levels[activeLevel].description}
                </p>

                {/* Features Grid */}
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {levels[activeLevel].features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + idx * 0.05 }}
                      className="flex items-center gap-2 bg-white rounded-xl px-4 py-3 shadow-sm border border-gray-100"
                    >
                      <div className="w-2 h-2 bg-brand-green rounded-full" />
                      <span className="text-sm font-medium text-gray-700">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA */}
                <Link href={`/akademik/${levels[activeLevel].id}`}>
                  <Button 
                    data-testid={`school-level-button-${levels[activeLevel].id}`}
                    className="h-12 px-8 rounded-full bg-primary hover:bg-primary/90 text-white font-semibold shadow-lg shadow-primary/20"
                  >
                    Detaylı Bilgi Al
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
