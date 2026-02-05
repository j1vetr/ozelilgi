import { useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

const videos = [
  { id: "SJeP83A84XQ", title: "Okul Tanıtım 1" },
  { id: "KLEZBuGadRY", title: "Okul Tanıtım 2" },
  { id: "aLE-xYzRMHE", title: "Okul Tanıtım 3" },
  { id: "FwogUEMN5CI", title: "Okul Tanıtım 4" },
  { id: "lzzAzJBksWY", title: "Okul Tanıtım 5" },
  { id: "may2-Acc_tk", title: "Okul Tanıtım 6" },
  { id: "JQbvVAVHupQ", title: "Okul Tanıtım 7" },
];

const getThumbnail = (videoId: string) => {
  return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
};

function VideoCard({ video, index, onClick }: { video: typeof videos[0]; index: number; onClick: () => void }) {
  return (
    <div
      data-testid={`video-card-${index}`}
      className="flex-shrink-0 w-[180px] cursor-pointer group"
      onClick={onClick}
    >
      <div className="relative aspect-[9/16] rounded-2xl overflow-hidden shadow-xl bg-gray-800">
        <img
          src={getThumbnail(video.id)}
          alt={video.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;
          }}
        />
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:bg-white transition-colors"
          >
            <Play className="w-5 h-5 text-primary ml-0.5" fill="currentColor" />
          </motion.div>
        </div>
        <div className="absolute top-3 left-3 bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded">
          SHORTS
        </div>
      </div>
    </div>
  );
}

export function VideoSlider() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const duplicatedVideos = [...videos, ...videos];

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
            <Play className="w-3 h-3" />
            Videolarımız
          </motion.span>
          <h2 data-testid="video-section-title" className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Okulumuzdan Anlar
          </h2>
          <p data-testid="video-section-description" className="text-white/60 leading-relaxed">
            Kampüsümüzde yaşanan eğlenceli ve öğretici anları keşfedin.
          </p>
        </motion.div>

        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-900 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-900 to-transparent z-10 pointer-events-none" />
          
          <div 
            className="flex gap-5 py-4 animate-marquee hover:[animation-play-state:paused]"
            style={{
              width: 'max-content',
            }}
          >
            {duplicatedVideos.map((video, i) => (
              <VideoCard 
                key={`${video.id}-${i}`} 
                video={video} 
                index={i % videos.length}
                onClick={() => setActiveVideo(video.id)} 
              />
            ))}
          </div>
        </div>
      </div>

      {activeVideo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setActiveVideo(null)}
          data-testid="video-modal"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative w-full max-w-sm aspect-[9/16] rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1&loop=1`}
              title="YouTube video"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </motion.div>
          
          <button
            onClick={() => setActiveVideo(null)}
            className="absolute top-6 right-6 text-white/70 hover:text-white text-3xl font-light"
            data-testid="video-modal-close"
          >
            ×
          </button>
        </motion.div>
      )}

      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
}
