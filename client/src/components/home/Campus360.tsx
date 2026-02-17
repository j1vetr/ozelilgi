import { useState } from "react";
import { motion } from "framer-motion";
import { RotateCcw, Play, X } from "lucide-react";

export function Campus360() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-gray-50 to-white">
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
            360° Sanal Tur
          </div>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
            Kampüsümüzü Keşfedin
          </h2>
          <p className="text-muted-foreground text-sm max-w-lg mx-auto">
            Sanal tur ile okulumuzun her köşesini yakından inceleyin.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-200/50 aspect-video">
            {!isPlaying ? (
              <div
                className="absolute inset-0 cursor-pointer group"
                onClick={() => setIsPlaying(true)}
                data-testid="button-play-360"
              >
                <img
                  src="/images/building-drone-1.webp"
                  alt="Özel Boğaziçi İlgi Koleji kampüsü"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/10 group-hover:from-black/50 group-hover:via-black/15 transition-all duration-500" />

                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-2xl mb-4 group-hover:bg-white transition-colors duration-300"
                  >
                    <Play className="w-8 h-8 md:w-10 md:h-10 text-primary ml-1" fill="currentColor" />
                  </motion.div>
                  <p className="text-white font-display font-bold text-lg md:text-xl drop-shadow-lg">
                    360° Sanal Tur
                  </p>
                  <p className="text-white/80 text-sm mt-1 drop-shadow">
                    Tıklayarak turu başlatın
                  </p>
                </div>

                <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 bg-white/90 backdrop-blur-sm text-primary text-xs font-semibold px-3 py-1.5 rounded-full shadow-md">
                  <RotateCcw className="w-3 h-3" />
                  360°
                </div>
              </div>
            ) : (
              <div className="relative w-full h-full">
                <button
                  onClick={() => setIsPlaying(false)}
                  className="absolute top-3 right-3 z-20 w-8 h-8 bg-black/60 hover:bg-black/80 text-white rounded-full flex items-center justify-center transition-colors"
                  data-testid="button-close-360"
                >
                  <X className="w-4 h-4" />
                </button>
                <iframe
                  data-testid="iframe-360-tour"
                  src="https://www.youtube.com/embed/ls1m1Ot8DIM?autoplay=1&rel=0&modestbranding=1&showinfo=0"
                  title="Özel Boğaziçi İlgi Koleji 360° sanal tur"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
                  allowFullScreen
                />
              </div>
            )}
          </div>
          <p className="text-center text-xs text-muted-foreground mt-3">
            Fareyi sürükleyerek veya mobilde parmağınızla 360° etrafı keşfedebilirsiniz.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
