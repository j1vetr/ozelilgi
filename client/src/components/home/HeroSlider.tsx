import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Play, Phone, MapPin } from "lucide-react";
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

export function HeroSlider() {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen w-full bg-primary relative overflow-hidden">
      {/* Bento Grid Layout */}
      <div className="h-screen grid grid-cols-12 grid-rows-6 gap-2 p-2">
        
        {/* Main Large Image - Left Side */}
        <motion.div 
          className="col-span-12 lg:col-span-7 row-span-6 relative rounded-3xl overflow-hidden"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={activeImage}
              src={heroImages[activeImage]}
              alt="Okul"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="w-full h-full object-cover"
            />
          </AnimatePresence>
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
          
          {/* Main Content */}
          <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-10">
            {/* Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              data-testid="hero-badge"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 w-fit mb-4"
            >
              <span className="w-2 h-2 bg-brand-green rounded-full animate-pulse" />
              <span className="text-white text-sm font-medium">2026-2027 Kayıtları Açık</span>
            </motion.div>
            
            {/* Title */}
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              data-testid="hero-title"
              className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-[1.1] mb-4"
            >
              Her Çocuk <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow via-brand-orange to-brand-green">
                Özel İlgiyi Hak Eder
              </span>
            </motion.h1>
            
            {/* Subtitle */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              data-testid="hero-subtitle"
              className="text-white/80 text-base lg:text-lg max-w-lg mb-6 leading-relaxed"
            >
              Anaokulu, İlkokul ve Ortaokul kademelerinde çocuğunuzun potansiyelini keşfediyoruz.
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-3"
            >
              <Link href="/kayit/on-kayit">
                <Button 
                  size="lg"
                  data-testid="hero-cta-button"
                  className="h-12 px-6 rounded-full bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold shadow-lg shadow-brand-orange/30"
                >
                  Ön Kayıt Yap
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/kampus">
                <Button 
                  size="lg"
                  variant="outline"
                  className="h-12 px-6 rounded-full border-white/30 text-white hover:bg-white/10 font-semibold backdrop-blur-sm"
                >
                  <Play className="mr-2 w-4 h-4" />
                  Kampüsü Keşfet
                </Button>
              </Link>
            </motion.div>

            {/* Image indicators */}
            <div className="flex gap-2 mt-6">
              {heroImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  data-testid={`hero-slide-indicator-${idx}`}
                  className={`h-1 rounded-full transition-all duration-500 ${
                    activeImage === idx ? 'w-8 bg-brand-orange' : 'w-4 bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Side Bento Grid - Only visible on large screens */}
        <div className="hidden lg:grid col-span-5 row-span-6 grid-rows-6 gap-2">
          
          {/* School Levels Card */}
          <motion.div 
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="row-span-2 bg-gradient-to-br from-brand-blue to-brand-blue/80 rounded-3xl p-6 flex flex-col justify-between relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div>
              <h3 className="text-white font-bold text-xl mb-1">Eğitim Kademeleri</h3>
              <p className="text-white/70 text-sm">3-14 yaş arası</p>
            </div>
            <div className="flex gap-2">
              {["Anaokulu", "İlkokul", "Ortaokul"].map((level, i) => (
                <span key={i} className="bg-white/20 text-white text-xs px-3 py-1.5 rounded-full font-medium">
                  {level}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Two Small Image Cards */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="row-span-2 grid grid-cols-2 gap-2"
          >
            <div className="relative rounded-3xl overflow-hidden group">
              <img 
                src="/images/music-room-2.jpg" 
                alt="Müzik" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <span className="absolute bottom-3 left-3 text-white font-semibold text-sm">Müzik</span>
            </div>
            <div className="relative rounded-3xl overflow-hidden group">
              <img 
                src="/images/sports-hall-2.jpg" 
                alt="Spor" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <span className="absolute bottom-3 left-3 text-white font-semibold text-sm">Spor</span>
            </div>
          </motion.div>

          {/* Third Image Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="row-span-1 relative rounded-3xl overflow-hidden group"
          >
            <img 
              src="/images/art-room-1.jpg" 
              alt="Sanat" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <span className="absolute bottom-3 left-3 text-white font-semibold text-sm">Sanat Atölyesi</span>
          </motion.div>

          {/* Contact Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="row-span-1 bg-gradient-to-r from-brand-green to-brand-green/80 rounded-3xl p-4 flex items-center gap-4"
          >
            <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
              <Phone className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-white/70 text-xs">Hemen Arayın</div>
              <div className="text-white font-bold">0216 XXX XX XX</div>
            </div>
            <Link href="/iletisim" className="ml-auto">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                <ArrowRight className="w-5 h-5 text-brand-green" />
              </div>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/50 text-xs tracking-widest uppercase">Keşfet</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
        >
          <div className="w-1.5 h-3 bg-white/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
