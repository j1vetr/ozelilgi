import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Play, Phone, GraduationCap, Palette, Music, Dumbbell } from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "wouter";

const heroImages = [
  "/images/building-drone-1.jpg",
  "/images/building-drone-3.jpg",
  "/images/sports-hall-1.jpg",
  "/images/music-room-1.jpg",
  "/images/art-room-1.jpg",
  "/images/hallway-underwater.jpg",
];

const educationLevels = [
  { name: "Anaokulu", ages: "3-6 yaş", color: "bg-brand-yellow", icon: "🎨" },
  { name: "İlkokul", ages: "6-10 yaş", color: "bg-brand-green", icon: "📚" },
  { name: "Ortaokul", ages: "10-14 yaş", color: "bg-brand-blue", icon: "🔬" },
];

const miniCards = [
  { image: "/images/music-room-1.jpg", label: "Müzik", icon: Music },
  { image: "/images/art-room-1.jpg", label: "Sanat", icon: Palette },
  { image: "/images/sports-hall-1.jpg", label: "Spor", icon: Dumbbell },
  { image: "/images/library-1.jpg", label: "Kütüphane", icon: GraduationCap },
];

export function HeroSlider() {
  const [activeImage, setActiveImage] = useState(0);
  const [isHovered, setIsHovered] = useState<number | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen w-full bg-gradient-to-br from-primary via-primary to-primary/90 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-20 -right-20 w-96 h-96 bg-brand-yellow/10 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-brand-green/10 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 right-1/4 w-64 h-64 bg-brand-orange/10 rounded-full blur-3xl"
        />
      </div>

      {/* Bento Grid Layout */}
      <div className="h-screen grid grid-cols-12 gap-3 p-3 lg:p-4">
        
        {/* Main Large Image - Left Side */}
        <motion.div 
          className="col-span-12 lg:col-span-7 relative rounded-3xl overflow-hidden shadow-2xl"
          initial={{ opacity: 0, x: -100, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={activeImage}
              src={heroImages[activeImage]}
              alt="Okul"
              initial={{ opacity: 0, scale: 1.2 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 1.2 }}
              className="w-full h-full object-cover"
            />
          </AnimatePresence>
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
          
          {/* Main Content */}
          <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-10">
            {/* Badge */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 120 }}
              data-testid="hero-badge"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 w-fit mb-4"
            >
              <motion.span 
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-2 h-2 bg-brand-green rounded-full"
              />
              <span className="text-white text-sm font-medium">2026-2027 Kayıtları Açık</span>
            </motion.div>
            
            {/* Title */}
            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, type: "spring", stiffness: 80 }}
              data-testid="hero-title"
              className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-[1.1] mb-4"
            >
              <motion.span
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                Her Çocuk
              </motion.span>
              <br/>
              <motion.span 
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
                className="text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow via-brand-orange to-brand-green"
              >
                Özel İlgiyi Hak Eder
              </motion.span>
            </motion.h1>
            
            {/* Subtitle */}
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              data-testid="hero-subtitle"
              className="text-white/80 text-base lg:text-lg max-w-lg mb-6 leading-relaxed"
            >
              Anaokulu, İlkokul ve Ortaokul kademelerinde çocuğunuzun potansiyelini keşfediyoruz.
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-3"
            >
              <Link href="/kayit/on-kayit">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    size="lg"
                    data-testid="hero-cta-button"
                    className="h-12 px-6 rounded-full bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold shadow-lg shadow-brand-orange/30"
                  >
                    Ön Kayıt Yap
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </motion.div>
              </Link>
              <Link href="/kampus">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    size="lg"
                    variant="outline"
                    className="h-12 px-6 rounded-full border-white/30 text-white hover:bg-white/10 font-semibold backdrop-blur-sm"
                  >
                    <Play className="mr-2 w-4 h-4" />
                    Kampüsü Keşfet
                  </Button>
                </motion.div>
              </Link>
            </motion.div>

            {/* Image indicators */}
            <div className="flex gap-2 mt-6">
              {heroImages.map((_, idx) => (
                <motion.button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  whileHover={{ scale: 1.2 }}
                  data-testid={`hero-slide-indicator-${idx}`}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    activeImage === idx ? 'w-10 bg-brand-orange' : 'w-4 bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Side Bento Grid */}
        <div className="hidden lg:flex col-span-5 flex-col gap-3">
          
          {/* Education Levels - Animated Cards */}
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
            className="bg-white/95 backdrop-blur-sm rounded-3xl p-5 shadow-xl"
          >
            <div className="flex items-center gap-2 mb-4">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                <GraduationCap className="w-6 h-6 text-primary" />
              </motion.div>
              <h3 className="text-primary font-bold text-lg">Eğitim Kademeleri</h3>
            </div>
            <div className="flex gap-2">
              {educationLevels.map((level, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className={`flex-1 ${level.color} rounded-2xl p-3 text-center cursor-pointer transition-shadow hover:shadow-lg`}
                >
                  <motion.span 
                    className="text-2xl block mb-1"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                  >
                    {level.icon}
                  </motion.span>
                  <span className="text-white font-bold text-sm block">{level.name}</span>
                  <span className="text-white/80 text-xs">{level.ages}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Mini Image Cards Grid */}
          <div className="grid grid-cols-2 gap-3 flex-1">
            {miniCards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8, rotate: i % 2 === 0 ? -5 : 5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ delay: 0.4 + i * 0.1, type: "spring", stiffness: 120 }}
                whileHover={{ scale: 1.03, zIndex: 10 }}
                onHoverStart={() => setIsHovered(i)}
                onHoverEnd={() => setIsHovered(null)}
                className="relative rounded-2xl overflow-hidden shadow-lg cursor-pointer group"
              >
                <motion.img 
                  src={card.image} 
                  alt={card.label}
                  animate={{ scale: isHovered === i ? 1.1 : 1 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Icon */}
                <motion.div 
                  className="absolute top-3 right-3 w-9 h-9 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center"
                  animate={{ 
                    rotate: isHovered === i ? [0, -10, 10, 0] : 0,
                    scale: isHovered === i ? 1.1 : 1
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <card.icon className="w-4 h-4 text-white" />
                </motion.div>
                
                {/* Label */}
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 p-3"
                  initial={{ y: 10, opacity: 0.8 }}
                  animate={{ y: isHovered === i ? 0 : 5, opacity: 1 }}
                >
                  <span className="text-white font-bold text-sm">{card.label}</span>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Contact Card */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, type: "spring", stiffness: 100 }}
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-r from-brand-green to-brand-green/80 rounded-3xl p-5 flex items-center gap-4 shadow-xl cursor-pointer group"
          >
            <motion.div 
              className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 4 }}
            >
              <Phone className="w-6 h-6 text-white" />
            </motion.div>
            <div className="flex-1">
              <div className="text-white/80 text-sm">Hemen Arayın</div>
              <div className="text-white font-bold text-xl">0216 XXX XX XX</div>
            </div>
            <Link href="/iletisim">
              <motion.div 
                className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg"
                whileHover={{ scale: 1.15, rotate: 45 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowRight className="w-5 h-5 text-brand-green" />
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.span 
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-white/50 text-xs tracking-widest uppercase"
        >
          Keşfet
        </motion.span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
        >
          <motion.div 
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-3 bg-white/50 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
