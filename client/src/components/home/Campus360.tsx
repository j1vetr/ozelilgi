import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { RotateCcw, Play } from "lucide-react";

export function Campus360() {
  const [isLoaded, setIsLoaded] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-12 md:py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-xs font-semibold px-4 py-1.5 rounded-full mb-3">
            <RotateCcw className="w-3.5 h-3.5" />
            360° SANAL TUR
          </div>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
            Kampüsümüzü Keşfedin
          </h2>
          <p className="text-muted-foreground text-sm max-w-lg mx-auto">
            360 derece sanal tur ile okulumuzun her köşesini yakından inceleyin
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-200/50 bg-gray-900">
            {!isLoaded && (
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-gradient-to-br from-primary/90 to-blue-700/90">
                <button
                  data-testid="button-play-360"
                  onClick={() => setIsLoaded(true)}
                  className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/40 flex items-center justify-center hover:bg-white/30 hover:scale-110 transition-all duration-300 mb-4"
                >
                  <Play className="w-8 h-8 text-white ml-1" />
                </button>
                <p className="text-white font-semibold text-lg">360° Sanal Tur</p>
                <p className="text-white/70 text-sm mt-1">Başlatmak için tıklayın</p>
              </div>
            )}
            <div className="aspect-video">
              {(isVisible || isLoaded) && (
                <iframe
                  data-testid="iframe-360-tour"
                  src={isLoaded ? "https://www.youtube.com/embed/ls1m1Ot8DIM?autoplay=1&rel=0" : "about:blank"}
                  title="Özel Boğaziçi İlgi Koleji - 360° Sanal Tur"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
                  allowFullScreen
                  loading="lazy"
                />
              )}
            </div>
          </div>
          <p className="text-center text-xs text-muted-foreground mt-3">
            Fareyi sürükleyerek veya mobilde parmağınızla 360° etrafı keşfedebilirsiniz
          </p>
        </motion.div>
      </div>
    </section>
  );
}
