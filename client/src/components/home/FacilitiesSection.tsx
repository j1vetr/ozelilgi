import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "../ui/button";
import { useState, useEffect, useRef } from "react";
import { 
  ArrowRight, Palette, Music, Code, FlaskConical, Dumbbell, 
  BookOpen, UtensilsCrossed, Users
} from "lucide-react";

const facilityStrip = [
  { icon: Palette, name: "Sanat Atölyesi" },
  { icon: Music, name: "Müzik Atölyesi" },
  { icon: Code, name: "Kodlama Lab." },
  { icon: FlaskConical, name: "Fen Lab." },
  { icon: Dumbbell, name: "Spor Salonu" },
  { icon: BookOpen, name: "Kütüphane" },
  { icon: UtensilsCrossed, name: "Yemekhane" },
  { icon: Users, name: "Rehberlik" },
  { icon: Palette, name: "Sanat Atölyesi" },
  { icon: Music, name: "Müzik Atölyesi" },
  { icon: Code, name: "Kodlama Lab." },
  { icon: FlaskConical, name: "Fen Lab." },
  { icon: Dumbbell, name: "Spor Salonu" },
  { icon: BookOpen, name: "Kütüphane" },
  { icon: UtensilsCrossed, name: "Yemekhane" },
  { icon: Users, name: "Rehberlik" },
];

const facilities = [
  {
    icon: Palette,
    title: "Görsel Sanatlar Atölyesi",
    desc: "Resim, heykel ve seramik çalışmaları için profesyonel atölye",
    gradient: "from-rose-500 to-pink-600",
    lightBg: "bg-rose-50",
    accent: "text-rose-500",
    features: ["Profesyonel Malzemeler", "Sergi Alanı"]
  },
  {
    icon: Music,
    title: "Müzik Atölyesi",
    desc: "Bireysel ve toplu müzik eğitimi için ses yalıtımlı stüdyo",
    gradient: "from-violet-500 to-purple-600",
    lightBg: "bg-violet-50",
    accent: "text-violet-500",
    features: ["Ses Yalıtımı", "Enstrüman Çeşitliliği"]
  },
  {
    icon: Code,
    title: "Kodlama & Robotik Lab.",
    desc: "STEM eğitimi için donanımlı teknoloji laboratuvarı",
    gradient: "from-blue-500 to-cyan-600",
    lightBg: "bg-blue-50",
    accent: "text-blue-500",
    features: ["3D Yazıcı", "Robot Kitleri"]
  },
  {
    icon: FlaskConical,
    title: "Fen Bilimleri Lab.",
    desc: "Deney ve gözlem için tam donanımlı bilim laboratuvarı",
    gradient: "from-emerald-500 to-teal-600",
    lightBg: "bg-emerald-50",
    accent: "text-emerald-500",
    features: ["Deney Setleri", "Güvenlik Ekipmanı"]
  },
  {
    icon: Dumbbell,
    title: "Kapalı Spor Salonu",
    desc: "Basketbol, voleybol ve jimnastik imkanı",
    gradient: "from-orange-500 to-red-500",
    lightBg: "bg-orange-50",
    accent: "text-orange-500",
    features: ["Çok Amaçlı", "Modern Donanım"]
  },
  {
    icon: BookOpen,
    title: "Kütüphane & Okuma Salonu",
    desc: "Binlerce kitap ve sessiz çalışma alanıyla donatılmış kütüphane",
    gradient: "from-indigo-500 to-blue-600",
    lightBg: "bg-indigo-50",
    accent: "text-indigo-500",
    features: ["Zengin Arşiv", "Sessiz Çalışma Alanı"]
  },
];

export function FacilitiesSection() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (isPaused) return;
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % facilities.length);
    }, 2500);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused]);

  const handleMouseEnter = (i: number) => {
    setIsPaused(true);
    setActiveIndex(i);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/80 to-white" />

      <div className="container relative px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 data-testid="facilities-section-title" className="text-2xl md:text-4xl font-display font-bold text-gray-900 mb-3">
            Kampüs
            <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent"> Olanaklarımız</span>
          </h2>
          <p className="text-sm md:text-base text-gray-500 max-w-lg mx-auto">
            Öğrencilerimizin potansiyelini en üst düzeyde ortaya çıkaran modern eğitim ortamı.
          </p>
        </motion.div>

        <div className="relative mb-14 -mx-4 overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />
          
          <motion.div
            animate={{ x: [0, -1280] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex gap-3 w-max"
          >
            {facilityStrip.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2.5 bg-white px-5 py-3 rounded-full border border-gray-100 shadow-sm shrink-0 hover:shadow-md hover:border-primary/20 transition-all"
              >
                <item.icon className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-gray-700 whitespace-nowrap">{item.name}</span>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="max-w-5xl mx-auto mb-12">
          <div className="grid md:grid-cols-3 gap-4">
            {facilities.map((facility, i) => {
              const isActive = activeIndex === i;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07, duration: 0.5 }}
                  onMouseEnter={() => handleMouseEnter(i)}
                  onMouseLeave={handleMouseLeave}
                  className="group relative"
                >
                  <div className={`relative rounded-2xl overflow-hidden transition-all duration-500 ${isActive ? 'shadow-2xl -translate-y-2' : 'shadow-md'}`}>
                    <div className={`absolute inset-0 bg-gradient-to-br ${facility.gradient} transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-0'}`} />
                    <div className={`absolute inset-0 ${facility.lightBg} border border-gray-100 rounded-2xl transition-opacity duration-500 ${isActive ? 'opacity-0' : 'opacity-100'}`} />

                    <div className={`absolute -top-8 -right-8 w-32 h-32 bg-white/10 rounded-full transition-all duration-700 ${isActive ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`} />
                    <div className={`absolute -bottom-6 -left-6 w-24 h-24 bg-white/5 rounded-full transition-all duration-700 delay-100 ${isActive ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`} />

                    <div className="relative z-10 p-6">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-all duration-500 ${
                        isActive 
                          ? 'bg-white/20 backdrop-blur-sm shadow-lg scale-110' 
                          : `bg-gradient-to-br ${facility.gradient} shadow-lg`
                      }`}>
                        <facility.icon className="w-7 h-7 text-white" />
                      </div>

                      <h3 className={`font-bold text-lg mb-2 transition-colors duration-500 ${isActive ? 'text-white' : 'text-gray-900'}`}>
                        {facility.title}
                      </h3>

                      <p className={`text-sm mb-4 transition-colors duration-500 leading-relaxed ${isActive ? 'text-white/80' : 'text-gray-500'}`}>
                        {facility.desc}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {facility.features.map((feat, fi) => (
                          <span 
                            key={fi}
                            className={`text-xs font-medium px-3 py-1 rounded-full transition-all duration-500 ${
                              isActive 
                                ? 'bg-white/20 text-white border border-white/20' 
                                : `bg-white ${facility.accent} border border-gray-100`
                            }`}
                          >
                            {feat}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link href="/kampus/galeri">
            <Button className="h-12 px-8 rounded-full bg-primary hover:bg-primary/90 text-white font-semibold shadow-lg shadow-primary/20 text-base">
              Kampüsü Keşfet
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
