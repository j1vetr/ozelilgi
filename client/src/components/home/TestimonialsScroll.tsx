import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const TESTIMONIALS = [
  {
    text: "Kızımız anaokulu'ndan beri burada. Öğretmenlerin sevgisi ve ilgisi gerçekten farklı. Her gün mutlu gidiyor okula.",
    author: "Zeynep Kaya",
    role: "Anaokulu Velisi",
    rating: 5
  },
  {
    text: "İlkokulda Cambridge İngilizce programı sayesinde oğlum İngilizceyi çok sevdi. Şimdi yurtdışı kamplarına katılıyor.",
    author: "Ahmet Yıldırım",
    role: "İlkokul 3. Sınıf Velisi",
    rating: 5
  },
  {
    text: "Ortaokul'daki STEM projeleri çocuğumun teknolojiye olan ilgisini artırdı. Robotik kulübü favorisi oldu.",
    author: "Selin Demir",
    role: "Ortaokul 6. Sınıf Velisi",
    rating: 5
  },
  {
    text: "Yemekhane çok hijyenik ve yemekler lezzetli. Beslenme konusunda endişemiz kalmadı.",
    author: "Murat Özcan",
    role: "İlkokul 2. Sınıf Velisi",
    rating: 5
  },
  {
    text: "Kütüphane ve okuma saatleri çocuğumun kitap sevgisini geliştirdi. Artık evde de sürekli okuyor.",
    author: "Elif Arslan",
    role: "İlkokul 4. Sınıf Velisi",
    rating: 5
  }
];

export function TestimonialsScroll() {
  return (
    <section className="py-28 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <span data-testid="testimonials-section-badge" className="inline-block px-4 py-2 bg-brand-yellow/10 text-brand-yellow font-bold rounded-full text-sm tracking-wider uppercase mb-4">
            Velilerimiz Ne Diyor?
          </span>
          <h2 data-testid="testimonials-section-title" className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary mb-6 leading-tight">
            Güvenin Adresi <br/>
            <span className="text-brand-yellow">Boğaziçi İlgi</span>
          </h2>
          <p data-testid="testimonials-section-description" className="text-xl text-muted-foreground leading-relaxed">
            Ailemizin bir parçası olan velilerimizin deneyimleri.
          </p>
        </motion.div>
      </div>

      {/* Scrolling Testimonials */}
      <div className="relative">
        <div className="flex gap-6 animate-scroll-left hover:[animation-play-state:paused]">
          {[...TESTIMONIALS, ...TESTIMONIALS].map((item, i) => (
            <div 
              key={i} 
              data-testid={`testimonial-card-${i}`}
              className="flex-shrink-0 w-[380px] md:w-[420px] p-8 bg-white rounded-3xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: item.rating }).map((_, idx) => (
                  <Star key={idx} className="w-5 h-5 fill-brand-yellow text-brand-yellow" />
                ))}
              </div>
              
              <Quote className="w-10 h-10 text-brand-blue/20 mb-4" />
              
              <p data-testid={`testimonial-text-${i}`} className="text-lg text-gray-700 mb-8 font-medium leading-relaxed">
                "{item.text}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-blue to-brand-green flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  {item.author[0]}
                </div>
                <div>
                  <div data-testid={`testimonial-author-${i}`} className="font-bold text-primary text-lg">{item.author}</div>
                  <div data-testid={`testimonial-role-${i}`} className="text-sm text-muted-foreground">{item.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Gradient Fades */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />
      </div>
      
      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-left {
          animation: scroll-left 35s linear infinite;
          width: max-content;
        }
      `}</style>
    </section>
  );
}
