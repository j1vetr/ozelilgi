import { motion } from "framer-motion";

const photos = [
  { src: "/images/school-exterior-1.webp", alt: "Okul Dış Cephesi" },
  { src: "/images/building-drone-1.webp", alt: "Drone Görünümü" },
  { src: "/images/sports-hall-1.webp", alt: "Spor Salonu" },
  { src: "/images/anaokulu-sinif.webp", alt: "Anaokulu Sınıfı" },
  { src: "/images/classroom-smartboard.webp", alt: "Akıllı Tahta Sınıfı" },
  { src: "/images/science-room-1.webp", alt: "Fen Bilgisi Laboratuvarı" },
  { src: "/images/art-room-1.webp", alt: "Sanat Atölyesi" },
  { src: "/images/music-room-1.webp", alt: "Müzik Atölyesi" },
  { src: "/images/hallway-underwater.webp", alt: "Koridor" },
  { src: "/images/building-playground.webp", alt: "Bahçe ve Oyun Alanı" },
  { src: "/images/school-exterior-2.webp", alt: "Okul Binası" },
  { src: "/images/sports-court.jpg", alt: "Spor Sahası" },
];

export function PhotoGallery() {
  return (
    <section className="py-14 overflow-hidden bg-white">
      <div className="container px-4 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wider uppercase mb-4">
            Fotoğraf Galerisi
          </span>
          <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-2">
            Okul Hayatından Kareler
          </h2>
          <p className="text-gray-500 text-sm md:text-base max-w-xl mx-auto">
            Kampüsümüz, sınıflarımız ve öğrencilerimizden kesitler
          </p>
        </motion.div>
      </div>

      {/* Scrolling strip */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex gap-4 animate-gallery-scroll hover:[animation-play-state:paused]">
          {[...photos, ...photos].map((photo, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-60 h-44 md:w-72 md:h-52 rounded-2xl overflow-hidden shadow-md"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes gallery-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-gallery-scroll {
          animation: gallery-scroll 40s linear infinite;
          width: max-content;
        }
      `}</style>
    </section>
  );
}
