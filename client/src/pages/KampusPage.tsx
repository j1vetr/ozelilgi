import { useState, useEffect, useRef } from "react";
import { useRoute, useLocation } from "wouter";
import { PageHeader } from "@/components/ui/PageHeader";
import { CAMPUS_FACILITIES, CAMPUS_GALLERY } from "@/lib/page-content";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { 
  Building2, TreePine, Calendar, Users, ChevronLeft, ChevronRight, X,
  Palette, Music, Code, FlaskConical, Dumbbell, BookOpen, Utensils, HeartHandshake,
  Shield, Wifi, Cctv, Leaf
} from "lucide-react";

const facilityIcons: Record<string, any> = {
  "sanat": Palette,
  "muzik": Music,
  "kodlama": Code,
  "fen": FlaskConical,
  "spor": Dumbbell,
  "kutuphane": BookOpen,
  "yemekhane": Utensils,
  "rehberlik": HeartHandshake
};

const facilityColors: Record<string, { gradient: string; light: string; primary: string }> = {
  "sanat": { gradient: "from-rose-500 to-pink-500", light: "bg-rose-50", primary: "#F43F5E" },
  "muzik": { gradient: "from-violet-500 to-purple-500", light: "bg-violet-50", primary: "#8B5CF6" },
  "kodlama": { gradient: "from-cyan-500 to-blue-500", light: "bg-cyan-50", primary: "#06B6D4" },
  "fen": { gradient: "from-emerald-500 to-teal-500", light: "bg-emerald-50", primary: "#10B981" },
  "spor": { gradient: "from-orange-500 to-amber-500", light: "bg-orange-50", primary: "#F97316" },
  "kutuphane": { gradient: "from-blue-500 to-indigo-500", light: "bg-blue-50", primary: "#3B82F6" },
  "yemekhane": { gradient: "from-yellow-500 to-orange-500", light: "bg-yellow-50", primary: "#EAB308" },
  "rehberlik": { gradient: "from-pink-500 to-rose-500", light: "bg-pink-50", primary: "#EC4899" }
};

export default function KampusPage() {
  const [match, params] = useRoute("/kampus/:tab?");
  const [, setLocation] = useLocation();
  const tabFromUrl = (params?.tab || "imkanlar") as "imkanlar" | "galeri";
  const [activeTab, setActiveTab] = useState<"imkanlar" | "galeri">(tabFromUrl);

  useEffect(() => {
    setActiveTab(tabFromUrl);
  }, [tabFromUrl]);

  const handleTabChange = (tab: "imkanlar" | "galeri") => {
    setActiveTab(tab);
    setLocation(`/kampus/${tab}`);
  };
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const nextImage = () => setLightboxIndex((prev) => (prev + 1) % CAMPUS_GALLERY.length);
  const prevImage = () => setLightboxIndex((prev) => (prev - 1 + CAMPUS_GALLERY.length) % CAMPUS_GALLERY.length);

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
      <PageHeader
        title="Kampüsümüz"
        subtitle="Modern ve Güvenli Eğitim Ortamı"
        breadcrumbs={[{ label: "Kampüs", href: "/kampus" }]}
      />

      <div className="container py-12 px-4">
        {/* Campus Overview - Premium Design */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto mb-16"
        >
          {/* Main Stats Showcase */}
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary via-blue-600 to-indigo-700 shadow-2xl">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -translate-y-1/2 translate-x-1/3" />
              <div className="absolute bottom-0 left-0 w-72 h-72 bg-white rounded-full translate-y-1/3 -translate-x-1/4" />
            </div>

            <div className="relative p-8 md:p-12">
              <div className="text-center mb-10">
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="inline-block bg-white/15 backdrop-blur-sm text-white/90 text-xs font-semibold px-4 py-1.5 rounded-full border border-white/20 mb-4"
                >
                  KAMPÜS OLANAKLARI
                </motion.span>
                <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">
                  Rakamlarla Kampüsümüz
                </h2>
                <p className="text-white/70 text-sm max-w-lg mx-auto">
                  Modern altyapı ve donanımıyla öğrencilerimize en iyi eğitim ortamını sunuyoruz
                </p>
              </div>

              {/* Big Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {[
                  { icon: Building2, label: "Kapalı Alan", value: "2.000", unit: "m²", desc: "Toplam eğitim alanı" },
                  { icon: TreePine, label: "Açık Alan", value: "600", unit: "m²", desc: "Yeşil bahçe alanı" },
                  { icon: Calendar, label: "Kuruluş", value: "2013", unit: "", desc: "Yılından bu yana" },
                  { icon: Users, label: "Anaokulu", value: "4", unit: "Sınıf", desc: "Ayrı anaokulu sınıfı" }
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="relative group"
                  >
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 md:p-6 border border-white/15 hover:bg-white/20 transition-all duration-300 text-center h-full">
                      <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                        <stat.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex items-baseline justify-center gap-1 mb-1">
                        <span className="text-3xl md:text-4xl font-bold text-white">{stat.value}</span>
                        {stat.unit && <span className="text-sm font-medium text-white/70">{stat.unit}</span>}
                      </div>
                      <div className="text-sm font-semibold text-white/90 mb-0.5">{stat.label}</div>
                      <div className="text-xs text-white/50">{stat.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Feature Badges Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
            {[
              { icon: Shield, title: "Güvenli Kampüs", desc: "24 saat güvenlik", gradient: "from-emerald-500 to-teal-600" },
              { icon: Wifi, title: "Akıllı Kampüs", desc: "Tam dijital altyapı", gradient: "from-blue-500 to-cyan-600" },
              { icon: Cctv, title: "Kamera Sistemi", desc: "Tüm alanlarda izleme", gradient: "from-orange-500 to-amber-600" },
              { icon: Leaf, title: "Yeşil Kampüs", desc: "Çevre dostu tasarım", gradient: "from-green-500 to-emerald-600" }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.08 }}
                className="group"
              >
                <div className={`bg-gradient-to-br ${feature.gradient} rounded-2xl p-4 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full`}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <feature.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-bold text-sm leading-tight">{feature.title}</h4>
                      <p className="text-white/70 text-xs">{feature.desc}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tab Buttons */}
        <div className="flex justify-center gap-2 mb-10">
          {[
            { id: "imkanlar", label: "Fiziki İmkanlar" },
            { id: "galeri", label: "Fotoğraf Galerisi" }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabChange(tab.id as "imkanlar" | "galeri")}
              className={`px-6 py-3 rounded-xl font-medium transition-all ${
                activeTab === tab.id
                  ? "bg-primary text-white shadow-lg shadow-primary/20"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          {activeTab === "imkanlar" && (
            <motion.div
              key="imkanlar"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-6xl mx-auto"
            >
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {CAMPUS_FACILITIES.map((facility, index) => {
                  const Icon = facilityIcons[facility.id] || Building2;
                  const color = facilityColors[facility.id] || facilityColors.sanat;

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="group relative bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
                    >
                      {/* Image */}
                      <div className="relative h-40 overflow-hidden">
                        <img
                          src={facility.image}
                          alt={facility.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                        
                        {/* Icon Badge */}
                        <div className={`absolute top-3 right-3 w-10 h-10 rounded-xl bg-gradient-to-br ${color.gradient} flex items-center justify-center shadow-lg`}>
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-4">
                        <h3 className="font-bold text-gray-900 mb-1 text-sm">{facility.title}</h3>
                        <p className="text-gray-500 text-xs">{facility.desc}</p>
                      </div>

                      {/* Color Bar */}
                      <div 
                        className="h-1 w-full transition-all duration-300 group-hover:h-1.5"
                        style={{ backgroundColor: color.primary }}
                      />
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}

          {activeTab === "galeri" && (
            <motion.div
              key="galeri"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-6xl mx-auto"
            >
              {/* Masonry Grid */}
              <div className="columns-2 md:columns-3 lg:columns-4 gap-3">
                {CAMPUS_GALLERY.map((img, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.03 }}
                    className="break-inside-avoid mb-3"
                  >
                    <div 
                      className="relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all cursor-pointer group"
                      onClick={() => openLightbox(i)}
                    >
                      <img 
                        src={img} 
                        alt={`Kampüs - ${i + 1}`}
                        className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <div className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
                          <svg className="w-5 h-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Prev Button */}
            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Image */}
            <motion.img
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              src={CAMPUS_GALLERY[lightboxIndex]}
              alt={`Kampüs - ${lightboxIndex + 1}`}
              className="max-w-full max-h-[85vh] rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Next Button */}
            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/10 rounded-full px-4 py-2 text-white text-sm">
              {lightboxIndex + 1} / {CAMPUS_GALLERY.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
