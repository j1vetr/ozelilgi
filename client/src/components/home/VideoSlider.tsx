import { useState } from "react";
import { motion } from "framer-motion";
import { Instagram, X } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { T } from "@/lib/translations";

const REELS = [
  { code: "DaDQzmQA8qH", thumb: "/images/sergi-frida-pano-1.webp" },
  { code: "DZ9EcMSI7BU", thumb: "/images/sergi-tablo-sehpa-1.webp" },
  { code: "DZu8eW6IGpA", thumb: "/images/sergi-salon-genel.webp" },
  { code: "DZr1VnQAJ38", thumb: "/images/art-room-new-1.webp" },
  { code: "DZog9enIOpB", thumb: "/images/sergi-frida-pano-2.webp" },
  { code: "DZX5_A1Agj4", thumb: "/images/sports-hall-1.webp" },
  { code: "DXwCDUoAafz", thumb: "/images/primary-class-1.webp" },
  { code: "DXjdzJ5iFpD", thumb: "/images/sergi-tablo-sehpa-2.webp" },
  { code: "DYJZhSvIkOW", thumb: "/images/music-room-1.webp" },
];

function ReelCard({ reel, index, onClick }: { reel: typeof REELS[0]; index: number; onClick: () => void }) {
  return (
    <div
      data-testid={`reel-card-${index}`}
      className="flex-shrink-0 w-[160px] cursor-pointer group"
      onClick={onClick}
    >
      <div className="relative aspect-[9/16] rounded-2xl overflow-hidden shadow-xl bg-gray-800">
        {/* School photo thumbnail */}
        <img
          src={reel.thumb}
          alt="Okul Reeli"
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Dark scrim */}
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300" />

        {/* Instagram badge top-left */}
        <div className="absolute top-3 left-3 flex items-center gap-1 bg-black/50 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-1 rounded-full">
          <Instagram className="w-3 h-3" />
          Reel
        </div>

        {/* Center play button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.95 }}
            className="w-12 h-12 rounded-full bg-white/25 backdrop-blur-sm border-2 border-white/70 flex items-center justify-center shadow-xl group-hover:bg-white/40 transition-colors"
          >
            <Instagram className="w-5 h-5 text-white" />
          </motion.div>
        </div>

        {/* Bottom label */}
        <div className="absolute bottom-0 inset-x-0 px-3 py-3 bg-gradient-to-t from-black/70 to-transparent">
          <p className="text-white text-[11px] font-semibold leading-tight">Özel Boğaziçi İlgi</p>
        </div>
      </div>
    </div>
  );
}

export function VideoSlider() {
  const [activeCode, setActiveCode] = useState<string | null>(null);
  const { lang } = useLanguage();

  const duplicated = [...REELS, ...REELS];

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-brand-orange/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-brand-blue/10 rounded-full blur-3xl" />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 text-white/80 font-medium rounded-full text-xs tracking-wider uppercase mb-4"
          >
            <Instagram className="w-3.5 h-3.5" />
            Instagram Reels
          </motion.span>
          <h2
            data-testid="video-section-title"
            className="text-3xl md:text-4xl font-display font-bold text-white mb-4"
          >
            {T("video.title", lang)}
          </h2>
          <p
            data-testid="video-section-description"
            className="text-white/60 leading-relaxed"
          >
            {T("video.desc", lang)}
          </p>
        </motion.div>

        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-900 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-900 to-transparent z-10 pointer-events-none" />

          <div
            className="flex gap-5 py-4 animate-marquee hover:[animation-play-state:paused]"
            style={{ width: "max-content" }}
          >
            {duplicated.map((reel, i) => (
              <ReelCard
                key={`${reel.code}-${i}`}
                reel={reel}
                index={i % REELS.length}
                onClick={() => setActiveCode(reel.code)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox modal with Instagram embed */}
      {activeCode && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setActiveCode(null)}
          data-testid="video-modal"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl bg-black"
            style={{ width: "min(400px, 90vw)", aspectRatio: "9/16", maxHeight: "88vh" }}
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={`https://www.instagram.com/reel/${activeCode}/embed/`}
              title="Instagram Reel"
              className="w-full h-full border-0"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              allowFullScreen
            />
          </motion.div>

          <button
            onClick={() => setActiveCode(null)}
            className="absolute top-6 right-6 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors"
            data-testid="video-modal-close"
          >
            <X className="w-6 h-6" />
          </button>
        </motion.div>
      )}

      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 32s linear infinite;
        }
      `}</style>
    </section>
  );
}
