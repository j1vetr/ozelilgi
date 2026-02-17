import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RotateCcw, Play, X, Move, Smartphone, ArrowLeft, ArrowRight, ArrowUp, ArrowDown } from "lucide-react";

export function Campus360() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleClose = useCallback(() => {
    setIsPlaying(false);
    document.body.style.overflow = "";
  }, []);

  const handleOpen = useCallback(() => {
    setIsPlaying(true);
    document.body.style.overflow = "hidden";
  }, []);

  useEffect(() => {
    if (!isPlaying) return;
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [isPlaying, handleClose]);

  return (
    <>
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
              <div
                className="absolute inset-0 cursor-pointer group"
                onClick={handleOpen}
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
                    Tıklayarak tam ekranda başlatın
                  </p>
                </div>

                <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 bg-white/90 backdrop-blur-sm text-primary text-xs font-semibold px-3 py-1.5 rounded-full shadow-md">
                  <RotateCcw className="w-3 h-3" />
                  360°
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {isPlaying && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[9999] bg-black flex flex-col"
          >
            <div className="absolute top-0 left-0 right-0 z-[10000] flex items-center justify-between px-4 py-3 bg-gradient-to-b from-black/70 to-transparent pointer-events-none">
              <div className="pointer-events-auto bg-white/10 backdrop-blur-md text-white text-xs font-semibold px-4 py-2 rounded-full border border-white/20 flex items-center gap-2">
                <RotateCcw className="w-3.5 h-3.5" />
                360° Sanal Tur
              </div>
              <button
                onClick={handleClose}
                className="pointer-events-auto w-10 h-10 bg-white/10 hover:bg-white/25 backdrop-blur-md text-white rounded-full flex items-center justify-center transition-all duration-300 border border-white/20 hover:border-white/40"
                data-testid="button-close-360"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <iframe
              data-testid="iframe-360-tour"
              src="https://www.youtube.com/embed/ls1m1Ot8DIM?autoplay=1&enablejsapi=1&rel=0&modestbranding=1&showinfo=0&controls=1&playsinline=1"
              title="Özel Boğaziçi İlgi Koleji 360° sanal tur"
              className="w-full flex-1"
              style={{ border: 0 }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; xr-spatial-tracking"
              allowFullScreen
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute bottom-6 left-1/2 -translate-x-1/2 z-[10000] pointer-events-none tour-hint"
            >
              <div className="bg-black/70 backdrop-blur-xl border border-white/15 rounded-xl px-5 py-3 text-center shadow-2xl">
                <div className="flex items-center justify-center gap-2 mb-1.5">
                  <div className="hidden md:flex items-center gap-1">
                    <div className="w-6 h-6 rounded bg-white/15 flex items-center justify-center">
                      <ArrowLeft className="w-3 h-3 text-white/80" />
                    </div>
                    <div className="w-6 h-6 rounded bg-white/15 flex items-center justify-center">
                      <ArrowUp className="w-3 h-3 text-white/80" />
                    </div>
                    <div className="w-6 h-6 rounded bg-white/15 flex items-center justify-center">
                      <ArrowDown className="w-3 h-3 text-white/80" />
                    </div>
                    <div className="w-6 h-6 rounded bg-white/15 flex items-center justify-center">
                      <ArrowRight className="w-3 h-3 text-white/80" />
                    </div>
                  </div>
                  <div className="md:hidden flex items-center gap-2">
                    <Smartphone className="w-4 h-4 text-white/80" />
                    <Move className="w-4 h-4 text-white/80" />
                  </div>
                </div>
                <p className="text-white/90 text-xs font-medium">
                  <span className="hidden md:inline">Fareyi basılı tutup sürükleyerek etrafınıza bakın</span>
                  <span className="md:hidden">Parmağınızla kaydırarak etrafınıza bakın</span>
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .tour-hint {
          animation: hintFadeOut 8s ease-in-out forwards;
        }
        @keyframes hintFadeOut {
          0%, 60% { opacity: 1; }
          100% { opacity: 0; }
        }
      `}</style>
    </>
  );
}
