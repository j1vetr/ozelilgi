import { useState } from "react";
import { motion } from "framer-motion";
import { Instagram, X } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { T } from "@/lib/translations";

const REELS = [
  { code: "DaDQzmQA8qH", label: "Okul Kareler" },
  { code: "DZ9EcMSI7BU", label: "Okul Kareler" },
  { code: "DZu8eW6IGpA", label: "Okul Kareler" },
  { code: "DZr1VnQAJ38", label: "Okul Kareler" },
  { code: "DZog9enIOpB", label: "Okul Kareler" },
  { code: "DZX5_A1Agj4", label: "Okul Kareler" },
  { code: "DXwCDUoAafz", label: "Okul Kareler" },
  { code: "DXjdzJ5iFpD", label: "Okul Kareler" },
  { code: "DYJZhSvIkOW", label: "Okul Kareler" },
];

// Gradient palettes — one per reel, cycles
const GRADIENTS = [
  "from-violet-600 via-purple-500 to-pink-500",
  "from-pink-500 via-rose-500 to-orange-400",
  "from-orange-400 via-amber-400 to-yellow-300",
  "from-emerald-500 via-teal-500 to-cyan-500",
  "from-blue-600 via-indigo-500 to-violet-500",
  "from-rose-500 via-pink-500 to-fuchsia-500",
  "from-amber-500 via-orange-500 to-red-500",
  "from-cyan-500 via-sky-500 to-blue-500",
  "from-fuchsia-500 via-violet-500 to-purple-600",
];

function ReelCard({ reel, index, onClick }: { reel: typeof REELS[0]; index: number; onClick: () => void }) {
  return (
    <div
      data-testid={`reel-card-${index}`}
      className="flex-shrink-0 w-[160px] cursor-pointer group"
      onClick={onClick}
    >
      <div className={`relative aspect-[9/16] rounded-2xl overflow-hidden shadow-xl bg-gradient-to-b ${GRADIENTS[index % GRADIENTS.length]}`}>
        {/* Decorative pattern */}
        <div className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "radial-gradient(circle at 30% 20%, white 1px, transparent 1px), radial-gradient(circle at 70% 60%, white 1px, transparent 1px), radial-gradient(circle at 50% 80%, white 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />

        {/* Instagram badge */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-black/40 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-1 rounded-full">
          <Instagram className="w-3 h-3" />
          Reel
        </div>

        {/* Center play button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.95 }}
            className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/60 flex items-center justify-center shadow-xl group-hover:bg-white/30 transition-colors"
          >
            <Instagram className="w-6 h-6 text-white" />
          </motion.div>
        </div>

        {/* Bottom label */}
        <div className="absolute bottom-0 inset-x-0 px-3 py-3 bg-gradient-to-t from-black/60 to-transparent">
          <p className="text-white text-[11px] font-semibold truncate">Özel Boğaziçi İlgi</p>
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
