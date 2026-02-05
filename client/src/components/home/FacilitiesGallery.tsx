import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const facilities = [
  { id: 1, image: "/images/library-1.jpg", title: "Modern Kütüphane", category: "Kütüphane" },
  { id: 2, image: "/images/bookshelf.jpg", title: "Zengin Kitap Koleksiyonu", category: "Kütüphane" },
  { id: 3, image: "/images/study-area.jpg", title: "Bireysel Çalışma Alanları", category: "Kütüphane" },
  { id: 4, image: "/images/science-room-1.jpg", title: "Bilim Atölyesi", category: "Laboratuvar" },
  { id: 5, image: "/images/classroom-green-new-1.jpg", title: "Modern Sınıflar", category: "Sınıf" },
  { id: 6, image: "/images/classroom-green-new-4.jpg", title: "Akıllı Tahta Sistemleri", category: "Sınıf" },
  { id: 7, image: "/images/classroom-orange-blue.jpg", title: "Ortaokul Sınıfları", category: "Sınıf" },
  { id: 8, image: "/images/cafeteria-1.jpg", title: "Hijyenik Yemekhane", category: "Yemekhane" },
  { id: 9, image: "/images/kindergarten-blue-1.jpg", title: "Anaokulu Mavi Sınıf", category: "Anaokulu" },
  { id: 10, image: "/images/kindergarten-orange-1.jpg", title: "Anaokulu Turuncu Sınıf", category: "Anaokulu" },
  { id: 11, image: "/images/kindergarten-colorful.jpg", title: "Oyun Odası", category: "Anaokulu" },
  { id: 12, image: "/images/playroom-ballpit-1.jpg", title: "Top Havuzu Alanı", category: "Anaokulu" },
  { id: 13, image: "/images/hallway-mural.jpg", title: "İlham Veren Koridorlar", category: "Genel" },
  { id: 14, image: "/images/wall-art-caterpillar.jpg", title: "Duvar Sanatı", category: "Genel" },
  { id: 15, image: "/images/staircase-safety.jpg", title: "Güvenli Merdivenler", category: "Genel" },
  { id: 16, image: "/images/kindergarten-cabinets.jpg", title: "Çocuk Dostu Dolaplar", category: "Anaokulu" },
];

const categories = ["Tümü", "Anaokulu", "Sınıf", "Kütüphane", "Laboratuvar", "Yemekhane", "Genel"];

export function FacilitiesGallery() {
  const [activeCategory, setActiveCategory] = useState("Tümü");
  const [selectedImage, setSelectedImage] = useState<typeof facilities[0] | null>(null);

  const filteredFacilities = activeCategory === "Tümü" 
    ? facilities 
    : facilities.filter(f => f.category === activeCategory);

  return (
    <section className="py-28 bg-white relative">
      <div className="container">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span data-testid="facilities-section-badge" className="inline-block px-4 py-2 bg-brand-green/10 text-brand-green font-bold rounded-full text-sm tracking-wider uppercase mb-4">
            Kampüsümüz
          </span>
          <h2 data-testid="facilities-section-title" className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary mb-6 leading-tight">
            Öğrenmeye İlham Veren <br/>
            <span className="text-brand-green">Mekanlar</span>
          </h2>
          <p data-testid="facilities-section-description" className="text-xl text-muted-foreground leading-relaxed">
            Modern mimari ve çocuk dostu tasarımlarla oluşturulmuş 
            eğitim ortamlarımızı keşfedin.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              data-testid={`gallery-filter-${category}`}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? "bg-primary text-white shadow-lg"
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
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredFacilities.map((facility, i) => (
              <motion.div
                key={facility.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                data-testid={`gallery-item-${facility.id}`}
                className={`relative group cursor-pointer overflow-hidden rounded-2xl ${
                  i === 0 ? 'col-span-2 row-span-2' : ''
                }`}
                onClick={() => setSelectedImage(facility)}
              >
                <div className={`${i === 0 ? 'aspect-square' : 'aspect-square'}`}>
                  <img 
                    src={facility.image} 
                    alt={facility.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-white/70 text-sm font-medium">{facility.category}</span>
                  <h4 className="text-white font-bold text-lg">{facility.title}</h4>
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
