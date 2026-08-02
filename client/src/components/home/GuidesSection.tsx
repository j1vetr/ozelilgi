import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, BookOpen, Clock } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { GUIDES } from "@/lib/guide-content";

const FEATURED_SLUGS = [
  "cekmekoy-ozel-okul-secerken-nelere-dikkat-edilmeli",
  "cekmekoy-anaokulu-kayit-rehberi",
  "lgs-hazirlikta-dogru-ortaokul-secimi",
  "cekmekoy-ozel-okul-fiyatlari-rehberi",
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function GuidesSection() {
  const { t } = useLanguage();

  const featured = FEATURED_SLUGS.map((slug) =>
    GUIDES.find((g) => g.slug === slug)
  ).filter((g): g is NonNullable<typeof g> => Boolean(g));

  return (
    <section className="py-20 md:py-24 relative overflow-hidden bg-white">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 left-1/4 w-72 h-72 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-blue-100/40 blur-3xl" />
      </div>

      <div className="container relative px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wider uppercase mb-4">
            {t("Veli Rehberi", "Parent Guides")}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-4">
            {t("Doğru Okul Kararı İçin Rehberler", "Guides for the Right School Decision")}
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            {t(
              "Okul seçiminden kayıt sürecine, anaokulundan LGS hazırlığına kadar velilerin en çok merak ettiği konuları uzman bakışıyla derledik.",
              "From school selection to enrollment, from preschool to exam preparation — expert guides covering what parents ask most."
            )}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 max-w-6xl mx-auto"
        >
          {featured.map((guide) => (
            <motion.div key={guide.slug} variants={cardVariants} className="h-full">
              <Link href={`/rehber/${guide.slug}`}>
                <div
                  className="group h-full flex flex-col bg-slate-50 hover:bg-white border border-gray-100 hover:border-primary/20 rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1"
                  data-testid={`card-guide-${guide.slug}`}
                >
                  <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-semibold tracking-wide uppercase text-primary mb-2">
                    {guide.category}
                  </span>
                  <h3 className="text-base font-display font-bold text-gray-900 leading-snug mb-3 group-hover:text-primary transition-colors duration-300">
                    {guide.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 mb-5">
                    {guide.metaDescription}
                  </p>
                  <div className="mt-auto flex items-center justify-between text-xs text-gray-400">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {guide.readingMinutes} {t("dk okuma", "min read")}
                    </span>
                    <span className="flex items-center gap-1 font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {t("Oku", "Read")}
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <Link href="/rehber">
            <span
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-primary text-primary-foreground text-sm font-semibold cursor-pointer shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-300"
              data-testid="link-all-guides"
            >
              {t("Tüm Rehberler", "All Guides")}
              <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
