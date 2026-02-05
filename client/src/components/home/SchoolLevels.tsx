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
    image: "/images/science-room-3.jpg",
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
    image: "/images/classroom-green-2.jpg",
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
    image: "/images/classroom-orange-1.jpg",
    color: "bg-brand-orange",
    textColor: "text-brand-orange",
    features: ["Sınav Hazırlık", "2. Yabancı Dil", "Proje Bazlı Öğrenme"]
  }
];

export function SchoolLevels() {
  return (
    <section className="py-28 bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>
      
      <div className="container relative">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span data-testid="school-levels-section-badge" className="inline-block px-4 py-2 bg-white/10 text-white font-bold rounded-full text-sm tracking-wider uppercase mb-4">
            Eğitim Kademelerimiz
          </span>
          <h2 data-testid="school-levels-section-title" className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight">
            Her Yaşa Uygun <br/>
            <span className="text-brand-yellow">Özel Programlar</span>
          </h2>
          <p data-testid="school-levels-section-description" className="text-xl text-white/70 leading-relaxed">
            3 yaşından 14 yaşına kadar, çocuğunuzun gelişim dönemine özel 
            hazırlanmış eğitim programlarıyla yanınızdayız.
          </p>
        </motion.div>

        {/* Levels Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {levels.map((level, i) => (
            <motion.div
              key={level.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group"
            >
              <div className="bg-white rounded-[2rem] overflow-hidden shadow-2xl h-full flex flex-col transform transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-3xl">
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={level.image} 
                    alt={level.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  {/* Badge */}
                  <div className={`absolute top-4 left-4 ${level.color} text-white px-4 py-2 rounded-full font-bold text-sm`}>
                    {level.subtitle}
                  </div>
                  
                  {/* Icon */}
                  <div className={`absolute bottom-4 right-4 w-16 h-16 ${level.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                    <level.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-2xl font-display font-bold text-primary mb-3">
                    {level.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6 flex-1">
                    {level.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {level.features.map((feature, idx) => (
                      <span 
                        key={idx}
                        className={`px-3 py-1 ${level.color}/10 ${level.textColor} rounded-lg text-sm font-medium`}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link href={`/akademik/${level.id}`}>
                    <Button 
                      variant="outline" 
                      data-testid={`school-level-button-${level.id}`}
                      className={`w-full group/btn border-2 hover:${level.color} hover:text-white hover:border-transparent transition-all`}
                    >
                      Detaylı Bilgi
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
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
