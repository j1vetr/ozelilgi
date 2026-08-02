import { motion, type Variants } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Info, Target, MessageSquare, BookOpenCheck } from "lucide-react";

const cards = [
  {
    title: "Hakkımızda",
    desc: "25 yıllık köklü geçmişimiz, modern kampüsümüz ve öğrenci odaklı yaklaşımımız hakkında bilgi edinin.",
    href: "/kurumsal/hakkimizda",
    icon: Info,
    color: "#3B82F6",
    colorLight: "rgba(59,130,246,0.10)",
  },
  {
    title: "Vizyon – Misyon",
    desc: "Geleceğin liderlerini yetiştirme vizyonumuz ve eğitimdeki temel misyonumuzu keşfedin.",
    href: "/kurumsal/vizyon-misyon",
    icon: Target,
    color: "#10B981",
    colorLight: "rgba(16,185,129,0.10)",
  },
  {
    title: "Kurucu Mesajı",
    desc: "Kurucumuzun öğrencilere, ailelere ve eğitim camiasına yönelik değerli mesajını okuyun.",
    href: "/kurumsal/kurucu-mesaji",
    icon: MessageSquare,
    color: "#F97316",
    colorLight: "rgba(249,115,22,0.10)",
  },
  {
    title: "Eğitim Politikamız",
    desc: "Öğrenci başarısını merkeze alan, özgün ve bütünsel eğitim anlayışımızı inceleyin.",
    href: "/kurumsal/egitim-politikamiz",
    icon: BookOpenCheck,
    color: "#8B5CF6",
    colorLight: "rgba(139,92,246,0.10)",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export function WhyBogaziciSection() {
  return (
    <section className="py-20 md:py-24 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute -top-32 -left-32 w-72 h-72 rounded-full bg-blue-100/40 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-64 h-64 rounded-full bg-purple-100/30 blur-3xl pointer-events-none" />

      <div className="container px-4 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wider uppercase mb-4">
            Kurumsal
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-4">
            Neden Boğaziçi İlgi Okulları?
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Değerlerimiz, vizyonumuz ve eğitim anlayışımızla çocuğunuzun geleceğine yatırım yapıyoruz.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto"
        >
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <motion.div key={card.href} variants={cardVariants} className="group">
                <Link href={card.href}>
                  <div
                    className="relative h-full bg-white rounded-3xl p-6 border border-gray-100 shadow-[0_4px_24px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.10)] transition-all duration-400 cursor-pointer flex flex-col gap-4 overflow-hidden"
                  >
                    {/* Top color accent */}
                    <div
                      className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ background: card.color }}
                    />

                    {/* Icon */}
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                      style={{ backgroundColor: card.colorLight }}
                    >
                      <Icon className="w-6 h-6" style={{ color: card.color }} />
                    </div>

                    {/* Text */}
                    <div className="flex-1">
                      <h3 className="text-lg font-display font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-200">
                        {card.title}
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed">
                        {card.desc}
                      </p>
                    </div>

                    {/* Arrow */}
                    <div className="flex items-center gap-1.5 text-sm font-semibold transition-colors duration-200" style={{ color: card.color }}>
                      <span>İncele</span>
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
