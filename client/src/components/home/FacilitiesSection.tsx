import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "../ui/button";
import { useState, useEffect, useRef } from "react";
import { 
  ArrowRight, Palette, Music, Code, FlaskConical, Dumbbell, 
  BookOpen, UtensilsCrossed, Users
} from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { T } from "@/lib/translations";

export function FacilitiesSection() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const { lang, t } = useLanguage();

  const facilityStrip = [
    { icon: Palette, name: t("Sanat Atölyesi", "Art Workshop") },
    { icon: Music, name: t("Müzik Atölyesi", "Music Workshop") },
    { icon: Code, name: t("Kodlama Lab.", "Coding Lab") },
    { icon: FlaskConical, name: t("Fen Lab.", "Science Lab") },
    { icon: Dumbbell, name: t("Spor Salonu", "Sports Hall") },
    { icon: BookOpen, name: t("Kütüphane", "Library") },
    { icon: UtensilsCrossed, name: t("Yemekhane", "Cafeteria") },
    { icon: Users, name: t("Rehberlik", "Counseling") },
    { icon: Palette, name: t("Sanat Atölyesi", "Art Workshop") },
    { icon: Music, name: t("Müzik Atölyesi", "Music Workshop") },
    { icon: Code, name: t("Kodlama Lab.", "Coding Lab") },
    { icon: FlaskConical, name: t("Fen Lab.", "Science Lab") },
    { icon: Dumbbell, name: t("Spor Salonu", "Sports Hall") },
    { icon: BookOpen, name: t("Kütüphane", "Library") },
    { icon: UtensilsCrossed, name: t("Yemekhane", "Cafeteria") },
    { icon: Users, name: t("Rehberlik", "Counseling") },
  ];

  const facilities = [
    {
      icon: Palette,
      title: t("Görsel Sanatlar Atölyesi", "Visual Arts Workshop"),
      desc: t("Resim, heykel ve seramik çalışmaları için profesyonel atölye", "Professional workshop for painting, sculpture, and ceramics"),
      gradient: "from-rose-500 to-pink-600",
      lightBg: "bg-rose-50",
      accent: "text-rose-500",
      features: [t("Profesyonel Malzemeler", "Professional Materials"), t("Sergi Alanı", "Exhibition Area")]
    },
    {
      icon: Music,
      title: t("Müzik Atölyesi", "Music Workshop"),
      desc: t("Bireysel ve toplu müzik eğitimi için ses yalıtımlı stüdyo", "Soundproof studio for individual and group music education"),
      gradient: "from-violet-500 to-purple-600",
      lightBg: "bg-violet-50",
      accent: "text-violet-500",
      features: [t("Ses Yalıtımı", "Sound Insulation"), t("Enstrüman Çeşitliliği", "Instrument Variety")]
    },
    {
      icon: Code,
      title: t("Kodlama & Robotik Lab.", "Coding & Robotics Lab"),
      desc: t("STEM eğitimi için donanımlı teknoloji laboratuvarı", "Equipped technology laboratory for STEM education"),
      gradient: "from-blue-500 to-cyan-600",
      lightBg: "bg-blue-50",
      accent: "text-blue-500",
      features: [t("3D Yazıcı", "3D Printer"), t("Robot Kitleri", "Robot Kits")]
    },
    {
      icon: FlaskConical,
      title: t("Fen Bilimleri Lab.", "Science Laboratory"),
      desc: t("Deney ve gözlem için tam donanımlı bilim laboratuvarı", "Fully equipped science laboratory for experiments and observation"),
      gradient: "from-emerald-500 to-teal-600",
      lightBg: "bg-emerald-50",
      accent: "text-emerald-500",
      features: [t("Deney Setleri", "Experiment Kits"), t("Güvenlik Ekipmanı", "Safety Equipment")]
    },
    {
      icon: Dumbbell,
      title: t("Kapalı Spor Salonu", "Indoor Sports Hall"),
      desc: t("Basketbol, voleybol ve jimnastik imkanı", "Basketball, volleyball, and gymnastics facilities"),
      gradient: "from-orange-500 to-red-500",
      lightBg: "bg-orange-50",
      accent: "text-orange-500",
      features: [t("Çok Amaçlı", "Multi-Purpose"), t("Modern Donanım", "Modern Equipment")]
    },
    {
      icon: BookOpen,
      title: t("Kütüphane & Okuma Salonu", "Library & Reading Room"),
      desc: t("Binlerce kitap ve sessiz çalışma alanıyla donatılmış kütüphane", "Library equipped with thousands of books and quiet study areas"),
      gradient: "from-indigo-500 to-blue-600",
      lightBg: "bg-indigo-50",
      accent: "text-indigo-500",
      features: [t("Zengin Arşiv", "Rich Archive"), t("Sessiz Çalışma Alanı", "Quiet Study Area")]
    },
  ];

  useEffect(() => {
    if (isPaused) return;
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % facilities.length);
    }, 2500);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused, facilities.length]);

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
            {T("facilities.title", lang)}
          </h2>
          <p className="text-sm md:text-base text-gray-500 max-w-lg mx-auto">
            {T("facilities.desc", lang)}
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
              {T("facilities.explore", lang)}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
