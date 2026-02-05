import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const TESTIMONIALS = [
  {
    text: "Kızımız anaokulu'ndan beri burada. Öğretmenlerin sevgisi ve ilgisi gerçekten farklı.",
    author: "Zeynep K.",
    role: "Anaokulu Velisi",
    rating: 5
  },
  {
    text: "Cambridge İngilizce programı sayesinde oğlum İngilizceyi çok sevdi.",
    author: "Ahmet Y.",
    role: "İlkokul Velisi",
    rating: 5
  },
  {
    text: "STEM projeleri çocuğumun teknolojiye olan ilgisini artırdı.",
    author: "Selin D.",
    role: "Ortaokul Velisi",
    rating: 5
  },
  {
    text: "Yemekhane çok hijyenik ve yemekler lezzetli. Beslenme konusunda güvendeyiz.",
    author: "Murat Ö.",
    role: "İlkokul Velisi",
    rating: 5
  },
  {
    text: "Okuma saatleri çocuğumun kitap sevgisini geliştirdi. Artık sürekli okuyor.",
    author: "Elif A.",
    role: "İlkokul Velisi",
    rating: 5
  }
];

export function TestimonialsScroll() {
  return (
    <section className="py-14 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container mb-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 data-testid="testimonials-section-title" className="text-2xl md:text-3xl font-display font-bold text-primary mb-2">
            Velilerimiz Ne Diyor?
          </h2>
          <p data-testid="testimonials-section-description" className="text-sm text-muted-foreground">
            Ailemizin bir parçası olan velilerimizin deneyimleri.
          </p>
        </motion.div>
      </div>

      <div className="relative">
        <div className="flex gap-4 animate-scroll-left hover:[animation-play-state:paused]">
          {[...TESTIMONIALS, ...TESTIMONIALS].map((item, i) => (
            <div 
              key={i} 
              data-testid={`testimonial-card-${i}`}
              className="flex-shrink-0 w-[280px] p-5 bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: item.rating }).map((_, idx) => (
                  <Star key={idx} className="w-3.5 h-3.5 fill-brand-yellow text-brand-yellow" />
                ))}
              </div>
              
              <Quote className="w-6 h-6 text-brand-blue/20 mb-2" />
              
              <p data-testid={`testimonial-text-${i}`} className="text-sm text-gray-600 mb-4 leading-relaxed line-clamp-3">
                "{item.text}"
              </p>
              
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-brand-blue to-brand-green flex items-center justify-center text-white font-bold text-sm">
                  {item.author[0]}
                </div>
                <div>
                  <div data-testid={`testimonial-author-${i}`} className="font-semibold text-primary text-sm">{item.author}</div>
                  <div data-testid={`testimonial-role-${i}`} className="text-xs text-muted-foreground">{item.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />
      </div>
      
      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-left {
          animation: scroll-left 25s linear infinite;
          width: max-content;
        }
      `}</style>
    </section>
  );
}
