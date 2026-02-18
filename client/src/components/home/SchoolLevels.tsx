import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Palette, BookOpen, GraduationCap, Star, Users, Award } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { T } from "@/lib/translations";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

export function SchoolLevels() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { lang, t } = useLanguage();

  const levels = [
    {
      id: "anaokulu",
      title: T("levels.preschool", lang),
      subtitle: t("Okul öncesi eğitim", "Preschool education"),
      ages: T("levels.preschool.ages", lang),
      description: T("levels.preschool.desc", lang),
      image: "/images/anaokulu-sinif.webp",
      color: "#F97316",
      colorLight: "rgba(249, 115, 22, 0.12)",
      colorMid: "rgba(249, 115, 22, 0.25)",
      gradient: "from-orange-500 to-amber-500",
      icon: Palette,
      features: t(
        "Oyun Odaklı Eğitim,Drama & Müzik,Erken Okuma Yazma,Sosyal Beceriler",
        "Play-Based Learning,Drama & Music,Early Literacy,Social Skills"
      ).split(","),
      stat: { icon: Star, label: t("Mutlu Öğrenci", "Happy Students"), value: "150+" }
    },
    {
      id: "ilkokul",
      title: T("levels.primary", lang),
      subtitle: t("Temel eğitim", "Basic education"),
      ages: T("levels.primary.ages", lang),
      description: T("levels.primary.desc", lang),
      image: "/images/classroom-smartboard.webp",
      color: "#3B82F6",
      colorLight: "rgba(59, 130, 246, 0.12)",
      colorMid: "rgba(59, 130, 246, 0.25)",
      gradient: "from-blue-500 to-indigo-500",
      icon: BookOpen,
      features: t(
        "Cambridge İngilizce,Kodlama Eğitimi,STEM Projeleri,Matematik Atölyesi",
        "Cambridge English,Coding Education,STEM Projects,Math Workshop"
      ).split(","),
      stat: { icon: Users, label: t("Uzman Öğretmen", "Expert Teachers"), value: "25+" }
    },
    {
      id: "ortaokul",
      title: T("levels.middle", lang),
      subtitle: t("Ortaöğretime hazırlık", "High school preparation"),
      ages: T("levels.middle.ages", lang),
      description: T("levels.middle.desc", lang),
      image: "/images/science-room-1.webp",
      color: "#10B981",
      colorLight: "rgba(16, 185, 129, 0.12)",
      colorMid: "rgba(16, 185, 129, 0.25)",
      gradient: "from-emerald-500 to-teal-500",
      icon: GraduationCap,
      features: t(
        "LGS Hazırlık,2. Yabancı Dil,Proje Bazlı Öğrenme,Kariyer Rehberliği",
        "Exam Preparation,2nd Foreign Language,Project-Based Learning,Career Counseling"
      ).split(","),
      stat: { icon: Award, label: t("Yıllık Tecrübe", "Years of Experience"), value: "25+" }
    }
  ];

  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-orange-100/40 blur-3xl" />
        <div className="absolute top-1/2 -left-20 w-60 h-60 rounded-full bg-blue-100/40 blur-3xl" />
        <div className="absolute -bottom-20 right-1/4 w-72 h-72 rounded-full bg-emerald-100/30 blur-3xl" />
      </div>

      <div className="container relative px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14 md:mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wider uppercase mb-4"
          >
            {t("Eğitim Programlarımız", "Our Education Programs")}
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-4">
            {T("levels.title", lang)}
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            {T("levels.desc", lang)}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto"
        >
          {levels.map((level, index) => {
            const Icon = level.icon;
            const StatIcon = level.stat.icon;
            const isHovered = hoveredIndex === index;

            return (
              <motion.div
                key={level.id}
                variants={cardVariants}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative"
                data-testid={`card-level-${level.id}`}
              >
                <div className="relative bg-white rounded-3xl overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)] transition-all duration-500 h-full flex flex-col border border-gray-100/80">
                  <div className="relative h-52 md:h-56 overflow-hidden">
                    <motion.img
                      src={level.image}
                      alt={level.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                      animate={{ scale: isHovered ? 1.08 : 1 }}
                      transition={{ duration: 0.7, ease: "easeOut" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                    <motion.div
                      className="absolute top-4 right-4 w-12 h-12 rounded-2xl flex items-center justify-center backdrop-blur-md shadow-lg"
                      style={{ backgroundColor: `${level.color}dd` }}
                      animate={{ rotate: isHovered ? 12 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </motion.div>

                    <div className="absolute bottom-0 left-0 right-0 p-5 pb-4">
                      <motion.div
                        className="inline-block px-3 py-1 rounded-full text-white text-[11px] font-bold tracking-wide uppercase mb-2"
                        style={{ backgroundColor: `${level.color}cc`, backdropFilter: "blur(8px)" }}
                      >
                        {level.ages}
                      </motion.div>
                      <h3 className="text-2xl md:text-[1.65rem] font-display font-bold text-white leading-tight">
                        {level.title}
                      </h3>
                      <p className="text-white/70 text-xs font-medium mt-0.5">{level.subtitle}</p>
                    </div>
                  </div>

                  <div className="p-5 md:p-6 flex flex-col flex-1">
                    <p className="text-gray-600 text-sm leading-relaxed mb-5">
                      {level.description}
                    </p>

                    <div className="grid grid-cols-2 gap-2 mb-5">
                      {level.features.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          className="flex items-center gap-2 px-2.5 py-2 rounded-xl transition-colors duration-300"
                          style={{ backgroundColor: isHovered ? level.colorLight : "rgb(248,250,252)" }}
                        >
                          <div
                            className="w-1.5 h-1.5 rounded-full shrink-0"
                            style={{ backgroundColor: level.color }}
                          />
                          <span className="text-gray-600 text-xs font-medium leading-tight">{feature}</span>
                        </motion.div>
                      ))}
                    </div>

                    <div
                      className="flex items-center gap-3 px-4 py-3 rounded-2xl mb-5 transition-colors duration-300"
                      style={{ backgroundColor: isHovered ? level.colorMid : level.colorLight }}
                    >
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center"
                        style={{ backgroundColor: level.color }}
                      >
                        <StatIcon className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <div className="text-lg font-bold text-gray-900 leading-none">{level.stat.value}</div>
                        <div className="text-[11px] text-gray-500 font-medium">{level.stat.label}</div>
                      </div>
                    </div>

                    <div className="mt-auto">
                      <Link href={`/akademik/${level.id}`}>
                        <motion.div
                          className="flex items-center justify-center gap-2 w-full py-3 rounded-2xl text-white text-sm font-semibold cursor-pointer transition-shadow duration-300"
                          style={{ 
                            background: `linear-gradient(135deg, ${level.color}, ${level.color}dd)`,
                            boxShadow: isHovered ? `0 8px 25px ${level.color}40` : `0 4px 15px ${level.color}20`
                          }}
                          whileHover={{ y: -2 }}
                          whileTap={{ scale: 0.98 }}
                          data-testid={`link-detail-${level.id}`}
                        >
                          {T("levels.details", lang)}
                          <motion.span
                            animate={{ x: isHovered ? 4 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <ArrowRight className="w-4 h-4" />
                          </motion.span>
                        </motion.div>
                      </Link>
                    </div>
                  </div>

                  <motion.div
                    className="absolute top-0 left-0 right-0 h-1"
                    style={{ background: `linear-gradient(90deg, ${level.color}, ${level.color}88)` }}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
