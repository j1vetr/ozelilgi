import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

const facilities = [
  // Bina Dış Görünüm
  { id: 1, image: "/images/building-drone-1.jpg", title: "Okul Binası Ön Cephe", category: "Bina" },
  { id: 2, image: "/images/building-drone-2.jpg", title: "Okul Binası Yan Görünüm", category: "Bina" },
  { id: 3, image: "/images/building-drone-3.jpg", title: "Modern Cam Cephe", category: "Bina" },
  { id: 4, image: "/images/building-drone-4.jpg", title: "Okul Panoramik Görünüm", category: "Bina" },
  { id: 5, image: "/images/building-playground.jpg", title: "Oyun Parkı ve Bina", category: "Bina" },
  { id: 6, image: "/images/building-exterior.jpg", title: "Bina Dış Cephe", category: "Bina" },
  { id: 7, image: "/images/school-exterior-1.jpg", title: "Okul Genel Görünüm", category: "Bina" },
  { id: 8, image: "/images/school-exterior-2.jpg", title: "Okul Cadde Görünümü", category: "Bina" },
  { id: 9, image: "/images/school-exterior-3.jpg", title: "Okul ve Çevresi", category: "Bina" },
  
  // Giriş ve Dış Mekan
  { id: 10, image: "/images/outdoor-entrance-ataturk.jpg", title: "Atatürk Köşesi ve Okul Girişi", category: "Giriş" },
  { id: 11, image: "/images/outdoor-vr-billboard.jpg", title: "Teknoloji Eğitimi Panosu", category: "Giriş" },
  { id: 12, image: "/images/entrance-stairs.jpg", title: "Çok Dilli Hoş Geldiniz Merdiveni", category: "Giriş" },
  { id: 13, image: "/images/entrance-lobby.jpg", title: "Ana Giriş Holü", category: "Giriş" },
  { id: 14, image: "/images/welcome-stairs.jpg", title: "Renkli Karşılama Alanı", category: "Giriş" },
  
  // Spor Salonu
  { id: 15, image: "/images/sports-hall-1.jpg", title: "Spor Salonu - Basketbol Sahası", category: "Spor" },
  { id: 16, image: "/images/sports-hall-2.jpg", title: "Spor Salonu - Voleybol Sahası", category: "Spor" },
  { id: 17, image: "/images/sports-court.jpg", title: "Açık Hava Spor Alanı", category: "Spor" },
  
  // Müzik Odası
  { id: 18, image: "/images/music-room-1.jpg", title: "Müzik Odası - Piyano ve Davullar", category: "Müzik" },
  { id: 19, image: "/images/music-room-2.jpg", title: "Müzik Odası - Perküsyon Enstrümanları", category: "Müzik" },
  { id: 20, image: "/images/music-room-3.jpg", title: "Müzik Odası - Elektronik Davul Seti", category: "Müzik" },
  { id: 21, image: "/images/music-studio.jpg", title: "Müzik Stüdyosu - Kayıt Alanı", category: "Müzik" },
  { id: 22, image: "/images/music-mural.jpg", title: "Müzik Koridoru - Gitarist Duvar Resmi", category: "Müzik" },
  
  // Sanat Atölyesi
  { id: 23, image: "/images/art-room-1.jpg", title: "Sanat Atölyesi - Resim Masaları", category: "Sanat" },
  { id: 24, image: "/images/art-room-2.jpg", title: "Sanat Atölyesi - Palet Duvar Süsü", category: "Sanat" },
  { id: 25, image: "/images/hallway-art.jpg", title: "Sanat Sergisi Koridoru", category: "Sanat" },
  
  // Sınıflar
  { id: 26, image: "/images/classroom-smartboard.jpg", title: "Akıllı Tahtalı Modern Sınıf", category: "Sınıf" },
  { id: 27, image: "/images/classroom-blue-1.jpg", title: "Mavi Temalı Sınıf", category: "Sınıf" },
  { id: 28, image: "/images/classroom-blue-2.jpg", title: "Mavi Sınıf - Öğrenci Sıraları", category: "Sınıf" },
  { id: 29, image: "/images/classroom-orange-new-1.jpg", title: "Turuncu Temalı Sınıf", category: "Sınıf" },
  { id: 30, image: "/images/classroom-orange-new-2.jpg", title: "Turuncu Sınıf - Tahta Görünümü", category: "Sınıf" },
  { id: 31, image: "/images/classroom-yellow.jpg", title: "Sarı Temalı Neşeli Sınıf", category: "Sınıf" },
  { id: 32, image: "/images/classroom-bright.jpg", title: "Aydınlık ve Ferah Sınıf", category: "Sınıf" },
  
  // Anaokulu
  { id: 33, image: "/images/kindergarten-kitchen.jpg", title: "Anaokulu Oyuncak Mutfak Köşesi", category: "Anaokulu" },
  { id: 34, image: "/images/kindergarten-numbers-1.jpg", title: "Anaokulu Sayı Öğrenme Sınıfı", category: "Anaokulu" },
  { id: 35, image: "/images/kindergarten-numbers-2.jpg", title: "Anaokulu Renkli Öğrenme Alanı", category: "Anaokulu" },
  
  // Oyun Alanları
  { id: 36, image: "/images/playground-slide-1.jpg", title: "Renkli Kaydırak", category: "Oyun Alanı" },
  { id: 37, image: "/images/playground-slide-2.jpg", title: "Çocuk Oyun Parkı", category: "Oyun Alanı" },
  { id: 38, image: "/images/playground-mural.jpg", title: "Duvar Resimli Oyun Alanı", category: "Oyun Alanı" },
  { id: 39, image: "/images/hopscotch.jpg", title: "Seksek Oyun Alanı", category: "Oyun Alanı" },
  
  // Koridorlar
  { id: 40, image: "/images/hallway-underwater.jpg", title: "Sualtı Temalı Koridor - Balık ve Dalgıç", category: "Koridor" },
  { id: 41, image: "/images/hallway-classroom.jpg", title: "Sınıflar Arası Koridor", category: "Koridor" },
  
  // Kütüphane
  { id: 42, image: "/images/library-1.jpg", title: "Kütüphane - Kitaplık Rafları", category: "Kütüphane" },
  { id: 43, image: "/images/library-2.jpg", title: "Kütüphane - Okuma Köşesi", category: "Kütüphane" },
  
  // Laboratuvar
  { id: 44, image: "/images/science-room-1.jpg", title: "Fen Bilgisi Laboratuvarı", category: "Laboratuvar" },
  { id: 45, image: "/images/science-room-2.jpg", title: "Deney Masaları", category: "Laboratuvar" },
  
  // Yemekhane
  { id: 46, image: "/images/cafeteria-1.jpg", title: "Yemekhane - Yemek Servisi", category: "Yemekhane" },
  { id: 47, image: "/images/cafeteria-2.jpg", title: "Yemekhane - Oturma Alanı", category: "Yemekhane" },
];

const categories = ["Tümü", "Bina", "Giriş", "Spor", "Müzik", "Sanat", "Sınıf", "Anaokulu", "Oyun Alanı", "Koridor", "Kütüphane", "Laboratuvar", "Yemekhane"];

export function FacilitiesGallery() {
  const [activeCategory, setActiveCategory] = useState("Tümü");
  const [selectedImage, setSelectedImage] = useState<typeof facilities[0] | null>(null);
  const [showAll, setShowAll] = useState(false);

  const filteredFacilities = activeCategory === "Tümü" 
    ? facilities 
    : facilities.filter(f => f.category === activeCategory);

  const displayedFacilities = showAll ? filteredFacilities : filteredFacilities.slice(0, 15);

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
    <section className="py-16 relative overflow-hidden">
      {/* Blurry Gradient Background */}
      <div className="absolute inset-0 bg-white" />
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-brand-orange/6 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-brand-green/6 rounded-full blur-3xl" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-brand-blue/5 rounded-full blur-3xl" />
      
      <div className="container relative">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-xl mx-auto mb-8"
        >
          <h2 data-testid="facilities-section-title" className="text-2xl md:text-3xl font-display font-bold text-primary mb-2">
            Kampüsümüzü keşfedin
          </h2>
          <p data-testid="facilities-section-description" className="text-sm text-muted-foreground">
            Modern ve çocuk dostu tasarımlarla hazırlanmış eğitim alanlarımız
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="mb-6 overflow-x-auto pb-2 -mx-4 px-4">
          <div className="flex gap-1.5 min-w-max justify-start md:justify-center">
            {categories.map((category) => {
              const count = category === "Tümü" ? facilities.length : facilities.filter(f => f.category === category).length;
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => { setActiveCategory(category); setShowAll(false); }}
                  data-testid={`gallery-filter-${category}`}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 whitespace-nowrap ${
                    isActive
                      ? "bg-primary text-white shadow-md"
                      : "bg-gray-100/80 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {category} ({count})
                </button>
              );
            })}
          </div>
        </div>

        {/* Masonry Gallery */}
        <motion.div 
          layout
          className="columns-2 sm:columns-3 lg:columns-4 xl:columns-5 gap-2.5 space-y-2.5"
        >
          <AnimatePresence>
            {displayedFacilities.map((facility, i) => (
              <motion.div
                key={facility.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.25, delay: i * 0.015 }}
                data-testid={`gallery-item-${facility.id}`}
                className="break-inside-avoid group cursor-pointer relative rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
                onClick={() => setSelectedImage(facility)}
              >
                <img 
                  src={facility.image} 
                  alt={facility.title}
                  loading="lazy"
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Zoom icon */}
                <div className="absolute top-2 right-2 w-6 h-6 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0">
                  <ZoomIn className="w-3 h-3 text-gray-700" />
                </div>
                
                {/* Title */}
                <div className="absolute bottom-0 left-0 right-0 p-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-brand-yellow text-[10px] font-medium">{facility.category}</span>
                  <h4 className="text-white font-semibold text-xs leading-tight">{facility.title}</h4>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Show More Button */}
        {filteredFacilities.length > 15 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mt-10"
          >
            <button
              onClick={() => setShowAll(!showAll)}
              data-testid="gallery-show-more"
              className="px-8 py-3 bg-primary text-white font-semibold rounded-full hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              {showAll ? "Daha Az Göster" : `Tüm Fotoğrafları Gör (+${filteredFacilities.length - 15})`}
            </button>
          </motion.div>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            data-testid="lightbox-overlay"
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-4 right-4 z-10 text-white/70 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
              data-testid="lightbox-close-button"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </button>

            {currentIndex > 0 && (
              <button
                onClick={(e) => { e.stopPropagation(); goToPrev(); }}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white/70 hover:text-white p-3 rounded-full bg-black/30 hover:bg-black/50 transition-colors"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
            )}
            
            {currentIndex < filteredFacilities.length - 1 && (
              <button
                onClick={(e) => { e.stopPropagation(); goToNext(); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white/70 hover:text-white p-3 rounded-full bg-black/30 hover:bg-black/50 transition-colors"
              >
                <ChevronRight className="w-8 h-8" />
              </button>
            )}

            <motion.div
              key={selectedImage.id}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-5xl max-h-[90vh] mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedImage.image} 
                alt={selectedImage.title}
                data-testid="lightbox-image"
                className="max-w-full max-h-[80vh] object-contain rounded-lg mx-auto"
              />
              <div className="text-center mt-4">
                <span className="text-brand-yellow text-sm">{selectedImage.category}</span>
                <h4 className="text-white font-bold text-xl">{selectedImage.title}</h4>
                <span className="text-white/50 text-sm">{currentIndex + 1} / {filteredFacilities.length}</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
