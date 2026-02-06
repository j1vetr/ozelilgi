import { useState } from "react";
import { motion } from "framer-motion";
import { Music, Palette, Dumbbell, BookOpen, Utensils, Microscope, ArrowRight } from "lucide-react";

const features = [
  {
    icon: Music,
    title: "Müzik Eğitimi",
    description: "Piyano, davul, perküsyon ve daha fazlası ile müzik yeteneklerini geliştiriyoruz.",
    image: "/images/music-room-1.webp",
    color: "from-purple-500 to-violet-600",
    bgColor: "bg-purple-500"
  },
  {
    icon: Palette,
    title: "Sanat Atölyesi",
    description: "Resim, heykel ve el sanatları ile yaratıcılığı keşfediyoruz.",
    image: "/images/art-room-1.webp",
    color: "from-pink-500 to-rose-600",
    bgColor: "bg-pink-500"
  },
  {
    icon: Dumbbell,
    title: "Spor Salonu",
    description: "Basketbol, voleybol ve jimnastik için tam donanımlı spor alanı.",
    image: "/images/sports-hall-1.webp",
    color: "from-orange-500 to-amber-600",
    bgColor: "bg-orange-500"
  },
  {
    icon: BookOpen,
    title: "Kütüphane",
    description: "Zengin kitap koleksiyonu ve sessiz çalışma alanları.",
    image: "/images/library-1.jpg",
    color: "from-blue-500 to-indigo-600",
    bgColor: "bg-blue-500"
  },
  {
    icon: Microscope,
    title: "Fen Laboratuvarı",
    description: "Deneylerle öğrenme ve bilimsel keşif imkanı.",
    image: "/images/science-room-1.webp",
    color: "from-emerald-500 to-teal-600",
    bgColor: "bg-emerald-500"
  },
  {
    icon: Utensils,
    title: "Yemekhane",
    description: "Hijyenik ortamda hazırlanan sağlıklı ve lezzetli öğünler.",
    image: "/images/cafeteria-1.jpg",
    color: "from-amber-500 to-yellow-600",
    bgColor: "bg-amber-500"
  }
];

export function FeaturesShowcase() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-20 relative overflow-hidden bg-primary">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-brand-blue/20 via-transparent to-transparent" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-brand-orange/20 via-transparent to-transparent" />
      </div>

      <div className="container relative">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 bg-white/10 text-white/80 font-medium rounded-full text-xs tracking-wider uppercase mb-4"
          >
            Olanaklarımız
          </motion.span>
          <h2 data-testid="features-section-title" className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            En İyisini Sunuyoruz
          </h2>
          <p data-testid="features-section-description" className="text-white/60 leading-relaxed">
            Öğrencilerimizin çok yönlü gelişimi için özel tasarlanmış modern alanlar.
          </p>
        </motion.div>

        {/* Features Grid - Bento Style */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 lg:gap-4">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              data-testid={`feature-card-${i}`}
              className={`relative rounded-2xl overflow-hidden cursor-pointer group ${
                i === 0 || i === 3 ? 'col-span-2 row-span-2' : 'col-span-1 row-span-1'
              }`}
              style={{ minHeight: i === 0 || i === 3 ? '320px' : '160px' }}
            >
              {/* Background Image */}
              <motion.img 
                src={feature.image} 
                alt={feature.title}
                className="absolute inset-0 w-full h-full object-cover"
                animate={{ scale: hoveredIndex === i ? 1.1 : 1 }}
                transition={{ duration: 0.6 }}
              />
              
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t ${feature.color} opacity-60 group-hover:opacity-80 transition-opacity duration-300`} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              {/* Content */}
              <div className="absolute inset-0 p-4 flex flex-col justify-end">
                {/* Icon */}
                <motion.div 
                  className={`w-10 h-10 ${feature.bgColor} rounded-xl flex items-center justify-center mb-3 shadow-lg`}
                  animate={{ 
                    y: hoveredIndex === i ? -5 : 0,
                    rotate: hoveredIndex === i ? 5 : 0
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <feature.icon className="w-5 h-5 text-white" />
                </motion.div>
                
                {/* Title */}
                <h3 className="text-white font-bold text-base mb-1">{feature.title}</h3>
                
                {/* Description - Only show on larger cards */}
                {(i === 0 || i === 3) && (
                  <motion.p 
                    className="text-white/80 text-sm leading-relaxed mb-3"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: hoveredIndex === i ? 1 : 0.7, y: 0 }}
                  >
                    {feature.description}
                  </motion.p>
                )}
                
                {/* Arrow indicator on hover */}
                <motion.div
                  className="flex items-center gap-1 text-white/80 text-xs font-medium"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ 
                    opacity: hoveredIndex === i ? 1 : 0,
                    x: hoveredIndex === i ? 0 : -10
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <span>Keşfet</span>
                  <ArrowRight className="w-3 h-3" />
                </motion.div>
              </div>

              {/* Shine effect on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                initial={{ x: '-100%' }}
                animate={{ x: hoveredIndex === i ? '200%' : '-100%' }}
                transition={{ duration: 0.6 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
