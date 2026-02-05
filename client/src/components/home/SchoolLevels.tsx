import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Baby, BookOpen, GraduationCap, Users, Clock, Award } from "lucide-react";
import { Button } from "../ui/button";

const levels = [
  {
    id: "anaokulu",
    title: "Anaokulu",
    ages: "3-6 Yaş",
    color: "from-amber-400 to-orange-500",
    bgColor: "bg-gradient-to-br from-amber-50 to-orange-50",
    accentColor: "text-orange-600",
    borderColor: "border-orange-200",
    icon: Baby,
    description: "Oyun temelli öğrenme metoduyla çocuklarınızın merak duygusunu besliyor, sosyal ve duygusal gelişimlerini destekliyoruz.",
    image: "/images/kindergarten-kitchen.jpg",
    features: ["Oyun Odaklı Eğitim", "Drama & Müzik", "Erken Okuma", "Sosyal Beceriler"],
    stats: { experience: "25 Yıl", teachers: "+25", satisfaction: "%100" }
  },
  {
    id: "ilkokul",
    title: "İlkokul",
    ages: "1-4. Sınıf",
    color: "from-blue-400 to-indigo-500",
    bgColor: "bg-gradient-to-br from-blue-50 to-indigo-50",
    accentColor: "text-blue-600",
    borderColor: "border-blue-200",
    icon: BookOpen,
    description: "Akademik temelleri sağlamlaştırırken, eleştirel düşünme ve problem çözme becerilerini geliştiriyoruz.",
    image: "/images/classroom-smartboard.jpg",
    features: ["Cambridge İngilizce", "Kodlama Eğitimi", "STEM Projeleri", "Matematik Atölyesi"],
    stats: { experience: "25 Yıl", teachers: "+25", satisfaction: "%100" }
  },
  {
    id: "ortaokul",
    title: "Ortaokul",
    ages: "5-8. Sınıf",
    color: "from-emerald-400 to-teal-500",
    bgColor: "bg-gradient-to-br from-emerald-50 to-teal-50",
    accentColor: "text-emerald-600",
    borderColor: "border-emerald-200",
    icon: GraduationCap,
    description: "Lise ve üniversite yolculuğuna hazırlık yaparak, öğrencilerimizi geleceğin liderleri olarak yetiştiriyoruz.",
    image: "/images/science-room-1.jpg",
    features: ["LGS Hazırlık", "2. Yabancı Dil", "Proje Bazlı Öğrenme", "Kariyer Rehberliği"],
    stats: { experience: "25 Yıl", teachers: "+25", satisfaction: "%100" }
  }
];

export function SchoolLevels() {
  const [activeLevel, setActiveLevel] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const currentLevel = levels[activeLevel];
  const Icon = currentLevel.icon;

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveLevel((prev) => (prev + 1) % levels.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    <section className="py-16 md:py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50" />
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-brand-green/5 rounded-full blur-3xl" />
      
      <div className="container relative px-4">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <h2 data-testid="school-levels-section-title" className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-primary mb-3">
            Eğitim Kademeleri
          </h2>
          <p data-testid="school-levels-section-description" className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            3 yaşından 14 yaşına kadar, çocuğunuzun gelişim dönemine özel hazırlanmış eğitim programları.
          </p>
        </motion.div>

        {/* Level Cards - Horizontal on Desktop, Vertical on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {levels.map((level, i) => {
            const LevelIcon = level.icon;
            const isActive = activeLevel === i;
            
            return (
              <motion.button
                key={level.id}
                onClick={() => { setActiveLevel(i); setIsPaused(true); }}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className={`relative p-5 rounded-2xl text-left transition-all duration-300 border-2 ${
                  isActive 
                    ? `${level.bgColor} ${level.borderColor} shadow-lg` 
                    : 'bg-white border-gray-100 hover:border-gray-200 hover:shadow-md'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${level.color} flex items-center justify-center shadow-lg flex-shrink-0`}>
                    <LevelIcon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className={`font-bold text-lg ${isActive ? level.accentColor : 'text-gray-900'}`}>
                      {level.title}
                    </h3>
                    <p className="text-sm text-gray-500">{level.ages}</p>
                  </div>
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className={`w-2 h-2 rounded-full bg-gradient-to-r ${level.color}`}
                    />
                  )}
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Active Level Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeLevel}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className={`rounded-3xl overflow-hidden ${currentLevel.bgColor} border-2 ${currentLevel.borderColor} shadow-xl`}
          >
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image Side */}
              <div className="relative h-64 md:h-auto md:min-h-[400px]">
                <img 
                  src={currentLevel.image}
                  alt={currentLevel.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/40 to-transparent" />
                
                {/* Stats Overlay */}
                <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 flex gap-3">
                  {[
                    { icon: Award, label: "Tecrübe", value: currentLevel.stats.experience },
                    { icon: Users, label: "Uzman Öğretmen", value: currentLevel.stats.teachers },
                    { icon: Clock, label: "Veli Memnuniyeti", value: currentLevel.stats.satisfaction },
                  ].map((stat, idx) => (
                    <div key={idx} className="bg-white/90 backdrop-blur-sm rounded-xl px-3 py-2 flex-1 text-center">
                      <div className={`text-sm font-bold ${currentLevel.accentColor}`}>{stat.value}</div>
                      <div className="text-[10px] text-gray-500">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Content Side */}
              <div className="p-6 md:p-8 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${currentLevel.color} flex items-center justify-center shadow-md`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className={`text-xl md:text-2xl font-display font-bold ${currentLevel.accentColor}`}>
                      {currentLevel.title}
                    </h3>
                    <span className="text-xs text-gray-500">{currentLevel.ages}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
                  {currentLevel.description}
                </p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {currentLevel.features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + idx * 0.05 }}
                      className="flex items-center gap-2"
                    >
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${currentLevel.color}`} />
                      <span className="text-xs md:text-sm text-gray-700">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                <Link href={`/akademik/${currentLevel.id}`}>
                  <Button 
                    data-testid={`school-level-button-${currentLevel.id}`}
                    className={`w-full sm:w-auto h-11 px-6 rounded-full bg-gradient-to-r ${currentLevel.color} hover:opacity-90 text-white font-semibold shadow-lg`}
                  >
                    Detaylı Bilgi Al
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
