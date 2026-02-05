import { motion } from "framer-motion";
import { Music, Palette, Dumbbell, BookOpen, Utensils, Microscope } from "lucide-react";

const features = [
  {
    icon: Music,
    title: "Müzik Eğitimi",
    description: "Piyano, davul, perküsyon ve daha fazlası ile müzik yeteneklerini geliştiriyoruz.",
    image: "/images/music-room-1.jpg",
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: Palette,
    title: "Sanat Atölyesi",
    description: "Resim, heykel ve el sanatları ile yaratıcılığı keşfediyoruz.",
    image: "/images/art-room-1.jpg",
    color: "from-pink-500 to-pink-600"
  },
  {
    icon: Dumbbell,
    title: "Spor Salonu",
    description: "Basketbol, voleybol ve jimnastik için tam donanımlı spor alanı.",
    image: "/images/sports-hall-1.jpg",
    color: "from-orange-500 to-orange-600"
  },
  {
    icon: BookOpen,
    title: "Kütüphane",
    description: "Zengin kitap koleksiyonu ve sessiz çalışma alanları.",
    image: "/images/library-1.jpg",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: Microscope,
    title: "Fen Laboratuvarı",
    description: "Deneylerle öğrenme ve bilimsel keşif imkanı.",
    image: "/images/science-room-1.jpg",
    color: "from-green-500 to-green-600"
  },
  {
    icon: Utensils,
    title: "Yemekhane",
    description: "Hijyenik ortamda hazırlanan sağlıklı ve lezzetli öğünler.",
    image: "/images/cafeteria-1.jpg",
    color: "from-amber-500 to-amber-600"
  }
];

export function FeaturesShowcase() {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Blurry Gradient Background */}
      <div className="absolute inset-0 bg-white" />
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-brand-yellow/8 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-brand-blue/8 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-green/5 rounded-full blur-3xl" />

      <div className="container relative">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-xl mx-auto mb-10"
        >
          <h2 data-testid="features-section-title" className="text-2xl md:text-3xl font-display font-bold text-primary mb-2">
            En İyisini Sunuyoruz
          </h2>
          <p data-testid="features-section-description" className="text-sm text-muted-foreground">
            Öğrencilerimizin çok yönlü gelişimi için özel tasarlanmış alanlar.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              data-testid={`feature-card-${i}`}
              className="group bg-white/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
            >
              {/* Image */}
              <div className="relative h-36 overflow-hidden">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${feature.color} opacity-0 group-hover:opacity-30 transition-opacity duration-300`} />
                
                {/* Icon */}
                <div className={`absolute bottom-3 right-3 w-9 h-9 bg-gradient-to-br ${feature.color} rounded-lg flex items-center justify-center shadow-md transform transition-transform duration-300 group-hover:scale-105`}>
                  <feature.icon className="w-4 h-4 text-white" />
                </div>
              </div>
              
              {/* Content */}
              <div className="p-4">
                <h3 className="text-base font-bold text-primary mb-1">{feature.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
