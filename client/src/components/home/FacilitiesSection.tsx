import { motion, useInView } from "framer-motion";
import { Link } from "wouter";
import { Button } from "../ui/button";
import { useRef, useEffect, useState } from "react";
import { 
  ArrowRight, Palette, Music, Code, FlaskConical, Dumbbell, 
  BookOpen, UtensilsCrossed, Users, Building2, TreePine, 
  GraduationCap, Shield
} from "lucide-react";

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1800;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count.toLocaleString("tr-TR")}{suffix}
    </span>
  );
}

const bentoItems = [
  {
    id: "kapali-alan",
    title: "Kapalı Eğitim Alanı",
    value: 2000,
    suffix: "m²",
    desc: "Derslikler, laboratuvarlar ve atölyeler dahil toplam kapalı alan",
    icon: Building2,
    gradient: "from-blue-600 via-blue-700 to-indigo-800",
    span: "md:col-span-2 md:row-span-2",
    size: "large"
  },
  {
    id: "bahce",
    title: "Yeşil Bahçe",
    value: 600,
    suffix: "m²",
    desc: "Oyun ve açık hava etkinlik alanı",
    icon: TreePine,
    gradient: "from-emerald-500 to-green-600",
    span: "md:col-span-1 md:row-span-1",
    size: "small"
  },
  {
    id: "sinif",
    title: "Anaokulu Sınıfı",
    value: 4,
    suffix: " Adet",
    desc: "Yaş grubuna özel tasarım",
    icon: GraduationCap,
    gradient: "from-violet-500 to-purple-600",
    span: "md:col-span-1 md:row-span-1",
    size: "small"
  },
  {
    id: "spor",
    title: "Kapalı Spor Salonu",
    value: 100,
    suffix: "m²",
    desc: "Basketbol, voleybol ve jimnastik",
    icon: Dumbbell,
    gradient: "from-orange-500 to-red-500",
    span: "md:col-span-1 md:row-span-1",
    size: "small"
  },
  {
    id: "guvenlik",
    title: "Güvenli Kampüs",
    value: 24,
    suffix: " Saat",
    desc: "Kameralı izleme ve güvenlik",
    icon: Shield,
    gradient: "from-cyan-500 to-blue-500",
    span: "md:col-span-1 md:row-span-1",
    size: "small"
  }
];

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

export function FacilitiesSection() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/80 to-white" />

      <div className="container relative px-4">
        {/* Header */}
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
            Öğrencilerimizin potansiyelini en üst düzeyde ortaya çıkaran modern eğitim ortamı
          </p>
        </motion.div>

        {/* Scrolling Facility Ribbon */}
        <div className="relative mb-12 -mx-4 overflow-hidden">
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

        {/* Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-5xl mx-auto mb-10">
          {bentoItems.map((item, i) => {
            const isLarge = item.size === "large";
            
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className={`${item.span} group`}
              >
                <div className={`relative bg-gradient-to-br ${item.gradient} rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-full ${isLarge ? 'min-h-[280px] md:min-h-[320px]' : 'min-h-[140px] md:min-h-[155px]'}`}>
                  {/* Decorative Elements */}
                  <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full group-hover:scale-150 transition-transform duration-700" />
                    <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-white/5 rounded-full" />
                    {isLarge && (
                      <>
                        <div className="absolute top-1/2 right-8 w-24 h-24 bg-white/5 rounded-full" />
                        <div className="absolute bottom-12 right-1/3 w-16 h-16 bg-white/8 rounded-full" />
                      </>
                    )}
                  </div>

                  {/* Content */}
                  <div className={`relative z-10 flex flex-col justify-between h-full ${isLarge ? 'p-6 md:p-8' : 'p-4 md:p-5'}`}>
                    <div>
                      <div className={`${isLarge ? 'w-14 h-14 md:w-16 md:h-16' : 'w-10 h-10'} rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-3 group-hover:scale-110 group-hover:bg-white/30 transition-all duration-300`}>
                        <item.icon className={`${isLarge ? 'w-7 h-7 md:w-8 md:h-8' : 'w-5 h-5'} text-white`} />
                      </div>
                      {isLarge && (
                        <p className="text-white/60 text-xs md:text-sm max-w-[200px] mb-4 hidden md:block">{item.desc}</p>
                      )}
                    </div>

                    <div>
                      <div className={`${isLarge ? 'text-4xl md:text-6xl' : 'text-2xl md:text-3xl'} font-bold text-white leading-none mb-1`}>
                        <AnimatedCounter target={item.value} suffix={item.suffix} />
                      </div>
                      <div className={`${isLarge ? 'text-sm md:text-base' : 'text-xs'} font-semibold text-white/80`}>
                        {item.title}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
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
