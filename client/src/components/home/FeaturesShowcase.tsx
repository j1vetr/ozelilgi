import { motion } from "framer-motion";
import { BookOpen, Palette, Users, Brain, Shield, Heart } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Zengin Kütüphane",
    description: "Binlerce kitap, bireysel çalışma alanları ve okuma köşeleriyle donatılmış modern kütüphanemiz.",
    image: "/images/library-1.jpg",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: Brain,
    title: "Bilim & Keşif",
    description: "Uzay temalı laboratuvarlarımızda deneyler yaparak öğrenme fırsatı.",
    image: "/images/science-room-1.jpg",
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: Palette,
    title: "Sanat & Yaratıcılık",
    description: "Resim, müzik ve el sanatları atölyelerinde yetenekleri keşfetme.",
    image: "/images/art-room-1.jpg",
    color: "from-pink-500 to-pink-600"
  },
  {
    icon: Users,
    title: "Sosyal Gelişim",
    description: "Grup aktiviteleri ve kulüp çalışmalarıyla sosyal becerileri güçlendiriyoruz.",
    image: "/images/music-room-1.jpg",
    color: "from-green-500 to-green-600"
  },
  {
    icon: Heart,
    title: "Sağlıklı Beslenme",
    description: "Hijyenik mutfağımızda hazırlanan dengeli ve lezzetli öğünler.",
    image: "/images/cafeteria-1.jpg",
    color: "from-orange-500 to-orange-600"
  },
  {
    icon: Shield,
    title: "Güvenli Ortam",
    description: "7/24 kamera sistemi ve kontrollü giriş-çıkış ile tam güvenlik.",
    image: "/images/building-drone-3.jpg",
    color: "from-teal-500 to-teal-600"
  }
];

export function FeaturesShowcase() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-orange/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      
      <div className="container relative">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span data-testid="features-section-badge" className="inline-block px-4 py-2 bg-brand-blue/10 text-brand-blue font-bold rounded-full text-sm tracking-wider uppercase mb-4">
            Ayrıcalıklarımız
          </span>
          <h2 data-testid="features-section-title" className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary mb-6 leading-tight">
            Çocuğunuz İçin <br/>
            <span className="bg-gradient-to-r from-brand-blue via-brand-green to-brand-orange bg-clip-text text-transparent">
              En İyisini Sunuyoruz
            </span>
          </h2>
          <p data-testid="features-section-description" className="text-xl text-muted-foreground leading-relaxed">
            Anaokulu'ndan Ortaokul'a kadar her yaş grubuna özel, modern eğitim ortamlarımızla 
            çocuklarınızın potansiyelini ortaya çıkarıyoruz.
          </p>
        </motion.div>

        {/* Features Grid - Bento Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              data-testid={`feature-card-${i}`}
              className={`group relative rounded-3xl overflow-hidden ${
                i === 0 ? 'lg:col-span-2 lg:row-span-2' : ''
              }`}
            >
              {/* Background Image */}
              <div className={`absolute inset-0 ${i === 0 ? 'h-full' : 'h-full'}`}>
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${feature.color} opacity-60 group-hover:opacity-70 transition-opacity`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>

              {/* Content */}
              <div className={`relative z-10 p-8 flex flex-col justify-end ${i === 0 ? 'min-h-[500px] lg:min-h-[600px]' : 'min-h-[300px]'}`}>
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className={`w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4 ${i === 0 ? 'w-16 h-16' : ''}`}>
                    <feature.icon className={`text-white ${i === 0 ? 'w-8 h-8' : 'w-6 h-6'}`} />
                  </div>
                  <h3 className={`font-display font-bold text-white mb-3 ${i === 0 ? 'text-3xl md:text-4xl' : 'text-2xl'}`}>
                    {feature.title}
                  </h3>
                  <p className={`text-white/90 leading-relaxed ${i === 0 ? 'text-lg max-w-lg' : 'text-base'}`}>
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
