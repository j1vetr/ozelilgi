import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Baby, BookOpen, GraduationCap } from "lucide-react";
import { Button } from "../ui/button";

const levels = [
  {
    id: "anaokulu",
    title: "Anaokulu",
    subtitle: "3-6 Yaş",
    description: "Oyun temelli öğrenme metoduyla çocuklarınızın merak duygusunu besliyor, sosyal ve duygusal gelişimlerini destekliyoruz.",
    icon: Baby,
    image: "/images/hallway-underwater.jpg",
    color: "bg-brand-yellow",
    textColor: "text-brand-yellow",
    features: ["Oyun Odaklı Eğitim", "Drama & Müzik", "Erken Okuma"]
  },
  {
    id: "ilkokul",
    title: "İlkokul",
    subtitle: "1-4. Sınıf",
    description: "Akademik temelleri sağlamlaştırırken, eleştirel düşünme ve problem çözme becerilerini geliştiriyoruz.",
    icon: BookOpen,
    image: "/images/classroom-smartboard.jpg",
    color: "bg-brand-green",
    textColor: "text-brand-green",
    features: ["Cambridge İngilizce", "Kodlama", "STEM"]
  },
  {
    id: "ortaokul",
    title: "Ortaokul",
    subtitle: "5-8. Sınıf",
    description: "Lise ve üniversite yolculuğuna hazırlık yaparak, öğrencilerimizi geleceğin liderleri olarak yetiştiriyoruz.",
    icon: GraduationCap,
    image: "/images/sports-hall-2.jpg",
    color: "bg-brand-orange",
    textColor: "text-brand-orange",
    features: ["Sınav Hazırlık", "2. Yabancı Dil", "Proje Bazlı Öğrenme"]
  }
];

export function SchoolLevels() {
  return (
    <section className="py-14 bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>
      
      {/* Blurry gradient accents */}
      <div className="absolute -top-32 -right-32 w-[400px] h-[400px] bg-brand-yellow/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] bg-brand-green/10 rounded-full blur-3xl" />
      
      <div className="container max-w-5xl relative">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-xl mx-auto mb-10"
        >
          <span data-testid="school-levels-section-badge" className="inline-block px-3 py-1 bg-white/10 text-white font-medium rounded-full text-xs tracking-wider uppercase mb-3">
            Eğitim Kademeleri
          </span>
          <h2 data-testid="school-levels-section-title" className="text-2xl md:text-3xl font-display font-bold text-white mb-3 leading-tight">
            Her Yaşa Uygun <span className="text-brand-yellow">Özel Programlar</span>
          </h2>
          <p data-testid="school-levels-section-description" className="text-sm text-white/70 leading-relaxed">
            3 yaşından 14 yaşına kadar, çocuğunuzun gelişim dönemine özel hazırlanmış eğitim programlarıyla yanınızdayız.
          </p>
        </motion.div>

        {/* Levels Cards */}
        <div className="grid lg:grid-cols-3 gap-5">
          {levels.map((level, i) => (
            <motion.div
              key={level.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-xl overflow-hidden shadow-lg h-full flex flex-col transform transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl">
                {/* Image */}
                <div className="relative h-32 overflow-hidden">
                  <img 
                    src={level.image} 
                    alt={level.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  
                  {/* Badge */}
                  <div className={`absolute top-2.5 left-2.5 ${level.color} text-white px-2.5 py-0.5 rounded-full font-semibold text-xs`}>
                    {level.subtitle}
                  </div>
                  
                  {/* Icon */}
                  <div className={`absolute bottom-2.5 right-2.5 w-8 h-8 ${level.color} rounded-lg flex items-center justify-center shadow-md`}>
                    <level.icon className="w-4 h-4 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 flex-1 flex flex-col">
                  <h3 className="text-base font-display font-bold text-primary mb-1.5">
                    {level.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-3 flex-1">
                    {level.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-1 mb-3">
                    {level.features.map((feature, idx) => (
                      <span 
                        key={idx}
                        className={`px-2 py-0.5 ${level.color}/10 ${level.textColor} rounded text-[10px] font-medium`}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link href={`/akademik/${level.id}`}>
                    <Button 
                      variant="outline" 
                      size="sm"
                      data-testid={`school-level-button-${level.id}`}
                      className={`w-full h-8 text-xs group/btn border hover:${level.color} hover:text-white hover:border-transparent transition-all`}
                    >
                      Detaylı Bilgi
                      <ArrowRight className="w-3 h-3 ml-1 transition-transform group-hover/btn:translate-x-0.5" />
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
