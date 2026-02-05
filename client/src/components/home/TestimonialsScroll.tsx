import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    text: "Çocuğumun akademik başarısının yanında sosyal gelişimine de verdikleri önem bizi çok etkiledi. Öğretmenlerin ilgisi harika.",
    author: "Ayşe Yılmaz",
    role: "Veli (5. Sınıf)"
  },
  {
    text: "Robotik kodlama dersleri sayesinde mühendislik okumaya karar verdim. Okulum bana vizyon kattı.",
    author: "Can Demir",
    role: "Mezun (2024)"
  },
  {
    text: "Yabancı dil eğitimi gerçekten dünya standartlarında. Kızım İngilizceyi ana dili gibi konuşuyor.",
    author: "Mehmet Öz",
    role: "Veli (3. Sınıf)"
  }
];

export function TestimonialsScroll() {
  const scrollRef = useRef(null);

  return (
    <div className="py-24 bg-muted/30 overflow-hidden">
      <div className="container px-4 mb-12 text-center">
        <h2 className="font-display text-4xl font-bold text-primary mb-4">Veli ve Öğrenci Görüşleri</h2>
        <p className="text-muted-foreground">Boğaziçi İlgi ailesinin deneyimleri bizim için en büyük referanstır.</p>
      </div>

      <div className="flex gap-6 animate-scroll-left hover:pause">
        {[...TESTIMONIALS, ...TESTIMONIALS].map((item, i) => (
          <div 
            key={i} 
            className="flex-shrink-0 w-[350px] md:w-[450px] p-8 bg-background rounded-3xl border border-border shadow-sm hover:shadow-md transition-shadow"
          >
            <Quote className="w-10 h-10 text-accent mb-6 opacity-50" />
            <p className="text-lg text-foreground/80 mb-6 font-medium leading-relaxed">"{item.text}"</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">
                {item.author[0]}
              </div>
              <div>
                <div className="font-bold text-primary">{item.author}</div>
                <div className="text-sm text-muted-foreground">{item.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <style>{`
        .pause:hover {
          animation-play-state: paused;
        }
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-left {
          animation: scroll-left 40s linear infinite;
          width: max-content;
        }
      `}</style>
    </div>
  );
}
