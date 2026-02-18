import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { T } from "@/lib/translations";

export function TestimonialsScroll() {
  const { lang, t } = useLanguage();

  const TESTIMONIALS = [
    {
      text: t("Kızımız anaokulu'ndan beri burada. Öğretmenlerin sevgisi ve ilgisi gerçekten farklı.", "Our daughter has been here since preschool. The love and attention of the teachers is truly special."),
      author: "Zeynep K.",
      role: t("Anaokulu Velisi", "Preschool Parent"),
      rating: 5
    },
    {
      text: t("Cambridge İngilizce programı sayesinde oğlum İngilizceyi çok sevdi.", "Thanks to the Cambridge English program, my son has grown to love English."),
      author: "Ahmet Y.",
      role: t("İlkokul Velisi", "Primary School Parent"),
      rating: 5
    },
    {
      text: t("STEM projeleri çocuğumun teknolojiye olan ilgisini artırdı.", "STEM projects have increased my child's interest in technology."),
      author: "Selin D.",
      role: t("Ortaokul Velisi", "Middle School Parent"),
      rating: 5
    },
    {
      text: t("Yemekhane çok hijyenik ve yemekler lezzetli. Beslenme konusunda güvendeyiz.", "The cafeteria is very hygienic and the food is delicious. We feel safe about nutrition."),
      author: "Murat Ö.",
      role: t("İlkokul Velisi", "Primary School Parent"),
      rating: 5
    },
    {
      text: t("Okuma saatleri çocuğumun kitap sevgisini geliştirdi. Artık sürekli okuyor.", "Reading hours have developed my child's love of books. Now they read constantly."),
      author: "Elif A.",
      role: t("İlkokul Velisi", "Primary School Parent"),
      rating: 5
    }
  ];

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
            {T("testimonials.title", lang)}
          </h2>
          <p data-testid="testimonials-section-description" className="text-sm text-muted-foreground">
            {T("testimonials.desc", lang)}
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
