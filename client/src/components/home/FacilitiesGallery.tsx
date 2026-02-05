import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const facilities = [
  // Bina - Drone görünümleri
  { id: 1, image: "/images/building-drone-1.jpg", title: "Okul Binası - Ön Cephe", category: "Bina" },
  { id: 2, image: "/images/building-drone-2.jpg", title: "Okul Binası - Yan Görünüm", category: "Bina" },
  { id: 3, image: "/images/building-drone-3.jpg", title: "Modern Cam Cephe", category: "Bina" },
  { id: 4, image: "/images/building-drone-4.jpg", title: "Bina Panorama", category: "Bina" },
  { id: 5, image: "/images/building-playground.jpg", title: "Oyun Alanı ve Bina", category: "Bina" },
  { id: 6, image: "/images/building-exterior.jpg", title: "Bina Dış Cephe", category: "Bina" },
  
  // Giriş alanları
  { id: 7, image: "/images/outdoor-entrance-ataturk.jpg", title: "Atatürk Köşesi", category: "Giriş" },
  { id: 8, image: "/images/outdoor-vr-billboard.jpg", title: "Teknoloji Panosu", category: "Giriş" },
  { id: 9, image: "/images/entrance-stairs.jpg", title: "Hoş Geldiniz Merdiveni", category: "Giriş" },
  { id: 10, image: "/images/entrance-lobby.jpg", title: "Giriş Holü", category: "Giriş" },
  { id: 11, image: "/images/welcome-stairs.jpg", title: "Karşılama Alanı", category: "Giriş" },
  
  // Spor tesisleri
  { id: 12, image: "/images/sports-hall-1.jpg", title: "Spor Salonu - Basketbol", category: "Spor" },
  { id: 13, image: "/images/sports-hall-2.jpg", title: "Spor Salonu - Voleybol", category: "Spor" },
  { id: 14, image: "/images/sports-court.jpg", title: "Açık Spor Alanı", category: "Spor" },
  
  // Müzik odaları
  { id: 15, image: "/images/music-room-1.jpg", title: "Müzik Odası - Enstrümanlar", category: "Müzik" },
  { id: 16, image: "/images/music-room-2.jpg", title: "Müzik Odası - Perküsyon", category: "Müzik" },
  { id: 17, image: "/images/music-room-3.jpg", title: "Müzik Odası - Davul Set", category: "Müzik" },
  { id: 18, image: "/images/music-studio.jpg", title: "Müzik Stüdyosu", category: "Müzik" },
  { id: 19, image: "/images/music-mural.jpg", title: "Müzik Duvar Resmi", category: "Müzik" },
  
  // Sanat atölyeleri
  { id: 20, image: "/images/art-room-1.jpg", title: "Sanat Atölyesi", category: "Sanat" },
  { id: 21, image: "/images/art-room-2.jpg", title: "Resim Atölyesi", category: "Sanat" },
  { id: 22, image: "/images/hallway-art.jpg", title: "Sanat Koridoru", category: "Sanat" },
  
  // Sınıflar
  { id: 23, image: "/images/classroom-smartboard.jpg", title: "Akıllı Tahta Sınıfı", category: "Sınıf" },
  { id: 24, image: "/images/classroom-blue-1.jpg", title: "Mavi Temalı Sınıf", category: "Sınıf" },
  { id: 25, image: "/images/classroom-blue-2.jpg", title: "Mavi Sınıf - 2", category: "Sınıf" },
  { id: 26, image: "/images/classroom-orange-new-1.jpg", title: "Turuncu Sınıf", category: "Sınıf" },
  { id: 27, image: "/images/classroom-orange-new-2.jpg", title: "Turuncu Sınıf - 2", category: "Sınıf" },
  { id: 28, image: "/images/classroom-orange-2.jpg", title: "Turuncu Temalı Sınıf", category: "Sınıf" },
  { id: 29, image: "/images/classroom-yellow.jpg", title: "Sarı Temalı Sınıf", category: "Sınıf" },
  { id: 30, image: "/images/classroom-bright.jpg", title: "Aydınlık Sınıf", category: "Sınıf" },
  
  // Anaokulu
  { id: 31, image: "/images/kindergarten-kitchen.jpg", title: "Oyuncak Mutfak", category: "Anaokulu" },
  { id: 32, image: "/images/kindergarten-numbers-1.jpg", title: "Sayılarla Öğrenme", category: "Anaokulu" },
  { id: 33, image: "/images/kindergarten-numbers-2.jpg", title: "Eğlenceli Sayılar", category: "Anaokulu" },
  
  // Oyun alanları
  { id: 34, image: "/images/playground-slide-1.jpg", title: "Kaydırak Alanı", category: "Oyun Alanı" },
  { id: 35, image: "/images/playground-slide-2.jpg", title: "Oyun Parkı", category: "Oyun Alanı" },
  { id: 36, image: "/images/playground-mural.jpg", title: "Renkli Oyun Alanı", category: "Oyun Alanı" },
  { id: 37, image: "/images/hopscotch.jpg", title: "Seksek Alanı", category: "Oyun Alanı" },
  
  // Koridorlar
  { id: 38, image: "/images/hallway-underwater.jpg", title: "Sualtı Temalı Koridor", category: "Koridor" },
  { id: 39, image: "/images/hallway-classroom.jpg", title: "Sınıf Koridoru", category: "Koridor" },
  
  // Kütüphane
  { id: 40, image: "/images/library-1.jpg", title: "Modern Kütüphane", category: "Kütüphane" },
  { id: 41, image: "/images/library-2.jpg", title: "Okuma Köşesi", category: "Kütüphane" },
  
  // Laboratuvar
  { id: 42, image: "/images/science-room-1.jpg", title: "Bilim Laboratuvarı", category: "Laboratuvar" },
  { id: 43, image: "/images/science-room-2.jpg", title: "Deney Alanı", category: "Laboratuvar" },
  
  // Yemekhane
  { id: 44, image: "/images/cafeteria-1.jpg", title: "Yemekhane", category: "Yemekhane" },
  { id: 45, image: "/images/cafeteria-2.jpg", title: "Yemek Salonu", category: "Yemekhane" },
];

const categories = ["Tümü", "Bina", "Giriş", "Spor", "Müzik", "Sanat", "Sınıf", "Anaokulu", "Oyun Alanı", "Koridor", "Kütüphane", "Laboratuvar", "Yemekhane"];

const categoryColors: Record<string, string> = {
  "Bina": "bg-blue-500",
  "Giriş": "bg-emerald-500",
  "Spor": "bg-orange-500",
  "Müzik": "bg-purple-500",
  "Sanat": "bg-pink-500",
  "Sınıf": "bg-cyan-500",
  "Anaokulu": "bg-yellow-500",
  "Oyun Alanı": "bg-green-500",
  "Koridor": "bg-indigo-500",
  "Kütüphane": "bg-amber-500",
  "Laboratuvar": "bg-violet-500",
  "Yemekhane": "bg-rose-500",
};

export function FacilitiesGallery() {
  const [activeCategory, setActiveCategory] = useState("Tümü");
  const [selectedImage, setSelectedImage] = useState<typeof facilities[0] | null>(null);
  const [showAll, setShowAll] = useState(false);

  const filteredFacilities = activeCategory === "Tümü" 
    ? facilities 
    : facilities.filter(f => f.category === activeCategory);

  const displayedFacilities = showAll ? filteredFacilities : filteredFacilities.slice(0, 12);

  const currentIndex = selectedImage ? filteredFacilities.findIndex(f => f.id === selectedImage.id) : -1;

  const goToPrev = () => {
    if (currentIndex > 0) {
      setSelectedImage(filteredFacilities[currentIndex - 1]);
    }
  };

  const goToNext = () => {
    if (currentIndex < filteredFacilities.length - 1) {
      setSelectedImage(filteredFacilities[currentIndex + 1]);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative">
      <div className="container">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span data-testid="facilities-section-badge" className="inline-block px-4 py-2 bg-gradient-to-r from-brand-green to-brand-blue text-white font-semibold rounded-full text-sm tracking-wider uppercase mb-4 shadow-lg">
            Kampüsümüz
          </span>
          <h2 data-testid="facilities-section-title" className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary mb-4 leading-tight">
            Öğrenmeye İlham Veren <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-brand-blue">Mekanlar</span>
          </h2>
          <p data-testid="facilities-section-description" className="text-lg text-muted-foreground leading-relaxed">
            Modern mimari ve çocuk dostu tasarımlarla oluşturulmuş {facilities.length} farklı eğitim ortamımızı keşfedin.
          </p>
        </motion.div>

        {/* Category Filter - Scrollable on mobile */}
        <div className="mb-10 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide">
          <div className="flex gap-2 min-w-max justify-center">
            {categories.map((category) => {
              const count = category === "Tümü" ? facilities.length : facilities.filter(f => f.category === category).length;
              return (
                <button
                  key={category}
                  onClick={() => { setActiveCategory(category); setShowAll(false); }}
                  data-testid={`gallery-filter-${category}`}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 whitespace-nowrap ${
                    activeCategory === category
                      ? "bg-primary text-white shadow-lg scale-105"
                      : "bg-white text-gray-600 hover:bg-gray-100 shadow-sm border border-gray-200"
                  }`}
                >
                  {category}
                  <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                    activeCategory === category ? "bg-white/20" : "bg-gray-100"
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Masonry-style Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3"
        >
          <AnimatePresence mode="popLayout">
            {displayedFacilities.map((facility, i) => (
              <motion.div
                key={facility.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: i * 0.02 }}
                data-testid={`gallery-item-${facility.id}`}
                className={`relative group cursor-pointer overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 ${
                  i === 0 && activeCategory === "Tümü" ? 'sm:col-span-2 sm:row-span-2' : ''
                }`}
                onClick={() => setSelectedImage(facility)}
              >
                <div className={`${i === 0 && activeCategory === "Tümü" ? 'aspect-square' : 'aspect-[4/3]'}`}>
                  <img 
                    src={facility.image} 
                    alt={facility.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Category badge */}
                <div className={`absolute top-2 left-2 ${categoryColors[facility.category] || 'bg-gray-500'} text-white text-xs font-medium px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                  {facility.category}
                </div>
                
                {/* Title on hover */}
                <div className="absolute bottom-0 left-0 right-0 p-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h4 className="text-white font-semibold text-sm leading-tight">{facility.title}</h4>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Show More/Less Button */}
        {filteredFacilities.length > 12 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mt-8"
          >
            <button
              onClick={() => setShowAll(!showAll)}
              data-testid="gallery-show-more"
              className="px-8 py-3 bg-primary text-white font-semibold rounded-full hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              {showAll ? "Daha Az Göster" : `Tümünü Gör (${filteredFacilities.length} Fotoğraf)`}
            </button>
          </motion.div>
        )}

        {/* Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { label: "Toplam Alan", value: "3.500 m²" },
            { label: "Sınıf Sayısı", value: "24+" },
            { label: "Özel Alan", value: "12" },
            { label: "Fotoğraf", value: `${facilities.length}` },
          ].map((stat, i) => (
            <div key={i} className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-100">
              <div className="text-2xl font-bold text-primary">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Enhanced Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            data-testid="lightbox-overlay"
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close button */}
            <button 
              className="absolute top-4 right-4 z-10 text-white/70 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
              data-testid="lightbox-close-button"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </button>

            {/* Navigation arrows */}
            {currentIndex > 0 && (
              <button
                onClick={(e) => { e.stopPropagation(); goToPrev(); }}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white/70 hover:text-white transition-colors p-3 rounded-full bg-black/30 hover:bg-black/50"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
            )}
            {currentIndex < filteredFacilities.length - 1 && (
              <button
                onClick={(e) => { e.stopPropagation(); goToNext(); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white/70 hover:text-white transition-colors p-3 rounded-full bg-black/30 hover:bg-black/50"
              >
                <ChevronRight className="w-8 h-8" />
              </button>
            )}

            {/* Image */}
            <motion.div
              key={selectedImage.id}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-6xl max-h-[85vh] relative"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedImage.image} 
                alt={selectedImage.title}
                data-testid="lightbox-image"
                className="w-full h-full object-contain rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent rounded-b-lg">
                <div className="flex items-center gap-3 mb-2">
                  <span className={`${categoryColors[selectedImage.category] || 'bg-gray-500'} text-white text-sm font-medium px-3 py-1 rounded-full`}>
                    {selectedImage.category}
                  </span>
                  <span className="text-white/60 text-sm">
                    {currentIndex + 1} / {filteredFacilities.length}
                  </span>
                </div>
                <h4 className="text-white font-bold text-2xl">{selectedImage.title}</h4>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
