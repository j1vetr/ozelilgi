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
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="container">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <h2 data-testid="features-section-title" className="text-3xl md:text-4xl font-display font-bold text-primary mb-3">
            En İyisini Sunuyoruz
          </h2>
          <p data-testid="features-section-description" className="text-muted-foreground">
            Öğrencilerimizin çok yönlü gelişimi için özel tasarlanmış alanlar
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              data-testid={`feature-card-${i}`}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${feature.color} opacity-0 group-hover:opacity-40 transition-opacity duration-300`} />
                
                {/* Icon */}
                <div className={`absolute bottom-4 right-4 w-12 h-12 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center shadow-lg transform transition-transform duration-300 group-hover:scale-110`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              
              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-primary mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
