import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const facilities = [
  { id: 1, image: "/images/building-drone-1.jpg", title: "Okul Binası Drone Görünümü", category: "Bina" },
  { id: 2, image: "/images/building-drone-3.jpg", title: "Modern Cam Cephe", category: "Bina" },
  { id: 3, image: "/images/building-playground.jpg", title: "Oyun Alanı ve Bina", category: "Bina" },
  { id: 4, image: "/images/outdoor-entrance-ataturk.jpg", title: "Atatürk Köşesi ve Giriş", category: "Giriş" },
  { id: 5, image: "/images/outdoor-vr-billboard.jpg", title: "Teknoloji Köşesi", category: "Giriş" },
  { id: 6, image: "/images/entrance-stairs.jpg", title: "Hoş Geldiniz Merdiveni", category: "Giriş" },
  { id: 7, image: "/images/sports-hall-1.jpg", title: "Spor Salonu - Basketbol", category: "Spor" },
  { id: 8, image: "/images/sports-hall-2.jpg", title: "Spor Salonu - Voleybol", category: "Spor" },
  { id: 9, image: "/images/music-room-1.jpg", title: "Müzik Odası - Enstrümanlar", category: "Müzik" },
  { id: 10, image: "/images/music-room-2.jpg", title: "Müzik Odası - Perküsyon", category: "Müzik" },
  { id: 11, image: "/images/music-studio.jpg", title: "Müzik Stüdyosu", category: "Müzik" },
  { id: 12, image: "/images/art-room-1.jpg", title: "Sanat Atölyesi", category: "Sanat" },
  { id: 13, image: "/images/art-room-2.jpg", title: "Resim Atölyesi", category: "Sanat" },
  { id: 14, image: "/images/hallway-underwater.jpg", title: "Sualtı Temalı Koridor", category: "Koridor" },
  { id: 15, image: "/images/classroom-smartboard.jpg", title: "Akıllı Tahta Sınıfı", category: "Sınıf" },
  { id: 16, image: "/images/classroom-blue-1.jpg", title: "Mavi Temalı Sınıf", category: "Sınıf" },
  { id: 17, image: "/images/classroom-orange-new-1.jpg", title: "Turuncu Temalı Sınıf", category: "Sınıf" },
  { id: 18, image: "/images/kindergarten-kitchen.jpg", title: "Oyuncak Mutfak Köşesi", category: "Anaokulu" },
  { id: 19, image: "/images/kindergarten-numbers-1.jpg", title: "Sayılarla Öğrenme", category: "Anaokulu" },
  { id: 20, image: "/images/library-1.jpg", title: "Modern Kütüphane", category: "Kütüphane" },
];

const categories = ["Tümü", "Bina", "Giriş", "Spor", "Müzik", "Sanat", "Sınıf", "Anaokulu", "Koridor", "Kütüphane"];

export function FacilitiesGallery() {
  const [activeCategory, setActiveCategory] = useState("Tümü");
  const [selectedImage, setSelectedImage] = useState<typeof facilities[0] | null>(null);

  const filteredFacilities = activeCategory === "Tümü" 
    ? facilities 
    : facilities.filter(f => f.category === activeCategory);

  return (
    <section className="py-16 bg-white relative">
      <div className="container max-w-6xl">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <span data-testid="facilities-section-badge" className="inline-block px-3 py-1.5 bg-brand-green/10 text-brand-green font-semibold rounded-full text-xs tracking-wider uppercase mb-3">
            Kampüsümüz
          </span>
          <h2 data-testid="facilities-section-title" className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-primary mb-4 leading-tight">
            Öğrenmeye İlham Veren <span className="text-brand-green">Mekanlar</span>
          </h2>
          <p data-testid="facilities-section-description" className="text-base text-muted-foreground leading-relaxed">
            Modern mimari ve çocuk dostu tasarımlarla oluşturulmuş eğitim ortamlarımızı keşfedin.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              data-testid={`gallery-filter-${category}`}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-primary text-white shadow-md"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredFacilities.slice(0, 10).map((facility, i) => (
              <motion.div
                key={facility.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: i * 0.03 }}
                data-testid={`gallery-item-${facility.id}`}
                className={`relative group cursor-pointer overflow-hidden rounded-xl ${
                  i === 0 ? 'col-span-2 row-span-2' : ''
                }`}
                onClick={() => setSelectedImage(facility)}
              >
                <div className="aspect-square">
                  <img 
                    src={facility.image} 
                    alt={facility.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-white/70 text-xs font-medium">{facility.category}</span>
                  <h4 className="text-white font-semibold text-sm">{facility.title}</h4>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            data-testid="lightbox-overlay"
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
              data-testid="lightbox-close-button"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="max-w-5xl max-h-[85vh] relative"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedImage.image} 
                alt={selectedImage.title}
                data-testid="lightbox-image"
                className="w-full h-full object-contain rounded-2xl"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent rounded-b-2xl">
                <span className="text-white/70 text-sm font-medium">{selectedImage.category}</span>
                <h4 className="text-white font-bold text-2xl">{selectedImage.title}</h4>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
