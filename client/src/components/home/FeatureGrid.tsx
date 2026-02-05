import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, BookOpen, Users, Trophy, Star } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    title: "Akademik Başarı",
    desc: "Bireysel öğrenme stiline uygun modern eğitim modelleri.",
    icon: Trophy,
    color: "text-brand-blue",
    bg: "bg-brand-blue/10",
    border: "group-hover:border-brand-blue/50"
  },
  {
    title: "Yabancı Dil",
    desc: "Cambridge standartlarında İngilizce ve 2. yabancı dil.",
    icon: BookOpen,
    color: "text-brand-orange",
    bg: "bg-brand-orange/10",
    border: "group-hover:border-brand-orange/50"
  },
  {
    title: "Sosyal Gelişim",
    desc: "Sanat, spor ve kulüp etkinlikleriyle çok yönlü bireyler.",
    icon: Users,
    color: "text-brand-green",
    bg: "bg-brand-green/10",
    border: "group-hover:border-brand-green/50"
  },
  {
    title: "Geleceğin Teknolojisi",
    desc: "Kodlama, robotik ve STEM atölyeleri.",
    icon: Star,
    color: "text-brand-yellow",
    bg: "bg-brand-yellow/10",
    border: "group-hover:border-brand-yellow/50"
  }
];

export function FeatureGrid() {
  return (
    <div className="py-24 bg-white">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-brand-blue font-bold tracking-widest uppercase text-sm mb-2 block">Ayrıcalıklarımız</span>
          <h2 className="text-4xl font-display font-bold text-primary mb-4">Neden Boğaziçi İlgi?</h2>
          <p className="text-muted-foreground text-lg">Öğrencilerimizi sadece akademik olarak değil, hayata hazırlayan bütüncül bir eğitim anlayışı.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={cn(
                "group p-8 rounded-3xl border border-border bg-white hover:shadow-xl transition-all duration-500 cursor-pointer",
                feature.border
              )}
            >
              <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 duration-500", feature.bg, feature.color)}>
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {feature.desc}
              </p>
              <div className="flex items-center text-sm font-semibold text-primary/70 group-hover:text-primary transition-colors">
                İncele <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
