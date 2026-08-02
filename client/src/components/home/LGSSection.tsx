import { motion } from "framer-motion";
import { Trophy, Medal, Star, Award } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

const students = [
  {
    image: "/images/lgs-1.jpg",
    name: "Zeynep Arslan",
    score: "498",
    rank: "TR 1.",
    badge: "🥇",
    badgeColor: "from-yellow-400 to-amber-500",
    borderColor: "border-yellow-400",
    glowColor: "shadow-yellow-300/40",
    highlight: true,
  },
  {
    image: "/images/lgs-2.jpg",
    name: "Ahmet Yıldız",
    score: "496",
    rank: "TR 3.",
    badge: "🥈",
    badgeColor: "from-slate-400 to-slate-500",
    borderColor: "border-slate-400",
    glowColor: "shadow-slate-300/30",
    highlight: false,
  },
  {
    image: "/images/lgs-3.jpg",
    name: "Elif Kaya",
    score: "494",
    rank: "TR 7.",
    badge: "🥉",
    badgeColor: "from-orange-400 to-amber-600",
    borderColor: "border-orange-400",
    glowColor: "shadow-orange-300/30",
    highlight: false,
  },
  {
    image: "/images/lgs-4.jpg",
    name: "Mert Demir",
    score: "492",
    rank: "İl 1.",
    badge: "🏅",
    badgeColor: "from-brand-blue to-blue-600",
    borderColor: "border-blue-400",
    glowColor: "shadow-blue-300/30",
    highlight: false,
  },
];

export function LGSSection() {
  const { t } = useLanguage();

  return (
    <section className="relative py-16 sm:py-20 overflow-hidden bg-white">
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #0B2755 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Top accent bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-blue via-brand-orange to-yellow-400" />

      <div className="container px-4 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-12"
        >
          {/* Trophy icon row */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px flex-1 max-w-[80px] bg-gradient-to-r from-transparent to-yellow-400/60" />
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center shadow-lg shadow-yellow-300/30">
              <Trophy className="w-5 h-5 text-white" />
            </div>
            <div className="h-px flex-1 max-w-[80px] bg-gradient-to-l from-transparent to-yellow-400/60" />
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B2755] leading-tight">
            {t("LGS'de Derece Yapan", "LGS Top Achievers")}{" "}
            <span className="text-brand-orange">
              {t("Öğrencilerimiz", "Our Students")}
            </span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-500 max-w-xl mx-auto">
            {t(
              "Boğaziçi İlgi Koleji öğrencileri, LGS sınavında Türkiye genelinde derece yaparak gurur kaynağımız oldu.",
              "Boğaziçi İlgi Koleji students ranked among the top in the nationwide LGS exam, making us proud."
            )}
          </p>
          {/* Underline accent */}
          <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-brand-orange to-yellow-400" />
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {students.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-2xl sm:rounded-3xl overflow-hidden bg-white border-2 ${s.borderColor} shadow-xl ${s.glowColor} ${
                s.highlight ? "ring-2 ring-yellow-400/50 ring-offset-2" : ""
              } group hover:-translate-y-1 transition-transform duration-300`}
            >
              {/* Rank badge — top left */}
              <div className="absolute top-3 left-3 z-20">
                <div
                  className={`bg-gradient-to-br ${s.badgeColor} text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow-md leading-none`}
                >
                  {s.rank}
                </div>
              </div>

              {/* Emoji badge — top right */}
              <div className="absolute top-2.5 right-2.5 z-20 text-xl sm:text-2xl drop-shadow-md select-none">
                {s.badge}
              </div>

              {/* Photo */}
              <div className="relative overflow-hidden aspect-[3/4] sm:aspect-[4/5]">
                <img
                  src={s.image}
                  alt={s.name}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                {/* Bottom gradient for text legibility */}
                <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                {/* Score pill over photo */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10">
                  <div className="flex items-center gap-1.5 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1 shadow-lg border border-gray-100">
                    <Star className="w-3 h-3 text-yellow-400 fill-yellow-400 shrink-0" />
                    <span className="text-[12px] font-extrabold text-[#0B2755] leading-none">
                      {s.score}
                    </span>
                    <span className="text-[10px] text-gray-400 leading-none">
                      puan
                    </span>
                  </div>
                </div>
              </div>

              {/* Name */}
              <div className="px-3 py-3 text-center bg-white">
                <p className="text-[13px] sm:text-sm font-bold text-[#0B2755] leading-tight truncate">
                  {s.name}
                </p>
                <p className="text-[11px] text-gray-400 mt-0.5">
                  {t("2025-2026 Mezunu", "Class of 2025-2026")}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="mt-10 sm:mt-12 grid grid-cols-3 gap-4 max-w-lg mx-auto"
        >
          {[
            { icon: Trophy, value: "12", label: t("LGS Derecesi", "LGS Rankings"), color: "text-yellow-500" },
            { icon: Medal, value: "498", label: t("En Yüksek Puan", "Highest Score"), color: "text-brand-orange" },
            { icon: Award, value: "%94", label: t("Lise Yerleşme", "High School Placement"), color: "text-brand-blue" },
          ].map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={i}
                className="text-center bg-gray-50 rounded-2xl py-4 px-3 border border-gray-100"
              >
                <Icon className={`w-5 h-5 mx-auto mb-1.5 ${stat.color}`} />
                <p className="text-xl sm:text-2xl font-extrabold text-[#0B2755]">
                  {stat.value}
                </p>
                <p className="text-[11px] text-gray-500 mt-0.5 leading-tight">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
    </section>
  );
}
