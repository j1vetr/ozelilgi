import { useState, useEffect } from "react";
import { useRoute, Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { PageHeader } from "@/components/ui/PageHeader";
import { useLanguage } from "@/lib/i18n";
import { T, getPageContentTranslated } from "@/lib/translations";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, Target, Eye, Lightbulb, BookOpen, Building2, Users, 
  Heart, Zap, Layers, Cpu, Star, Shield, Sparkles, HandshakeIcon,
  CheckCircle
} from "lucide-react";

export default function KurumsalPage() {
  const { lang, t } = useLanguage();
  const PAGE_CONTENT = getPageContentTranslated(lang);
  const [match, params] = useRoute("/kurumsal/:slug");
  const slug = (params?.slug || "hakkimizda") as keyof typeof PAGE_CONTENT.kurumsal;
  const [activeTab, setActiveTab] = useState(slug);

  const tabs = [
    { id: "hakkimizda", label: T("nav.about.about", lang), icon: Building2 },
    { id: "kurucu-mesaji", label: T("nav.about.founder", lang), icon: Users },
    { id: "vizyon-misyon", label: T("nav.about.vision", lang), icon: Target },
    { id: "egitim-yaklasimimiz", label: T("nav.about.approach", lang), icon: Lightbulb },
  ];

  useEffect(() => {
    setActiveTab(slug);
  }, [slug]);

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId as keyof typeof PAGE_CONTENT.kurumsal);
  };

  return (
    <div className="bg-background min-h-screen">
      <PageHeader 
        title={T("nav.about", lang)} 
        subtitle={t("Özel Boğaziçi İlgi Koleji Çekmeköy", "Özel Boğaziçi İlgi College Çekmeköy")}
        breadcrumbs={[{ label: T("nav.about", lang), href: "/kurumsal/hakkimizda" }]}
      />

      <div className="container py-10 px-4">
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <Link key={tab.id} href={`/kurumsal/${tab.id}`}>
                <motion.button
                  onClick={() => handleTabChange(tab.id)}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-primary text-white shadow-lg shadow-primary/20'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                </motion.button>
              </Link>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === "hakkimizda" && <HakkimizdaContent />}
            {activeTab === "kurucu-mesaji" && <KurucuMesajiContent />}
            {activeTab === "vizyon-misyon" && <VizyonMisyonContent />}
            {activeTab === "egitim-yaklasimimiz" && <EgitimYaklasimiContent />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

function HakkimizdaContent() {
  const { lang, t } = useLanguage();
  const PAGE_CONTENT = getPageContentTranslated(lang);
  const content = PAGE_CONTENT.kurumsal["hakkimizda"] as any;
  
  return (
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-display font-bold text-primary mb-2">{content.title}</h2>
        <p className="text-muted-foreground">{content.subtitle}</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        {content.features.map((feature: any, i: number) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-4 text-center border border-primary/10"
          >
            <div className="text-xl md:text-2xl font-bold text-primary mb-1">{feature.value}</div>
            <div className="text-xs text-muted-foreground">{feature.label}</div>
          </motion.div>
        ))}
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-8">
        <p className="text-gray-600 leading-relaxed text-sm md:text-base">{content.content}</p>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-primary mb-4 text-center">{t("Kampüs İmkanları", "Campus Facilities")}</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {content.facilities.map((facility: string, i: number) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + i * 0.05 }}
              className="bg-white rounded-xl p-3 text-center shadow-sm border border-gray-100 hover:shadow-md hover:border-primary/20 transition-all"
            >
              <span className="text-sm text-gray-700">{facility}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function KurucuMesajiContent() {
  const { lang, t } = useLanguage();
  const PAGE_CONTENT = getPageContentTranslated(lang);
  const content = PAGE_CONTENT.kurumsal["kurucu-mesaji"] as any;
  
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-6">
        <h2 className="text-2xl md:text-3xl font-display font-bold text-primary mb-2">{content.title}</h2>
        <p className="text-muted-foreground text-sm">{content.subtitle}</p>
      </div>

      <div className="relative rounded-2xl overflow-hidden shadow-xl mb-8 bg-gray-900">
        <div className="aspect-[9/16] max-w-xs mx-auto relative">
          <div className="absolute top-0 left-0 right-0 h-14 bg-gradient-to-b from-black to-transparent z-10 pointer-events-none" />
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${content.videoId}?autoplay=0&modestbranding=1&rel=0&showinfo=0&controls=1&iv_load_policy=3&playsinline=1`}
            title={content.title}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <div className="prose prose-sm max-w-none">
          {content.content.split('\n\n').map((paragraph: string, i: number) => (
            <p key={i} className="text-gray-600 leading-relaxed mb-3 last:mb-0">{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

function VizyonMisyonContent() {
  const { lang, t } = useLanguage();
  const PAGE_CONTENT = getPageContentTranslated(lang);
  const content = PAGE_CONTENT.kurumsal["vizyon-misyon"] as any;
  
  const valueIcons: Record<string, any> = {
    "Saygı": Heart,
    "Respect": Heart,
    "Dürüstlük": Shield,
    "Honesty": Shield,
    "Yenilikçilik": Sparkles,
    "Innovation": Sparkles,
    "İşbirliği": HandshakeIcon,
    "Collaboration": HandshakeIcon,
    "Mükemmellik": Star,
    "Excellence": Star,
    "Sorumluluk": CheckCircle,
    "Responsibility": CheckCircle
  };
  
  return (
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4"
        >
          <Target className="w-4 h-4" />
          {t("Kurumsal Değerlerimiz", "Our Corporate Values")}
        </motion.div>
        <h2 className="text-2xl md:text-4xl font-display font-bold text-gray-900 mb-3">{content.title}</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">{content.subtitle}</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6 mb-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl transform rotate-1 group-hover:rotate-2 transition-transform" />
          <div className="relative bg-white rounded-3xl p-8 border border-gray-100 shadow-xl">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shrink-0 shadow-lg shadow-blue-500/30">
                <Eye className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-display font-bold text-gray-900 mb-3">{t("Vizyonumuz", "Our Vision")}</h3>
                <p className="text-gray-600 leading-relaxed">{content.vision}</p>
              </div>
            </div>
            <div className="absolute top-4 right-4 w-20 h-20 bg-blue-100 rounded-full opacity-50 blur-2xl" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-green-600 rounded-3xl transform -rotate-1 group-hover:-rotate-2 transition-transform" />
          <div className="relative bg-white rounded-3xl p-8 border border-gray-100 shadow-xl">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shrink-0 shadow-lg shadow-green-500/30">
                <Target className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-display font-bold text-gray-900 mb-3">{t("Misyonumuz", "Our Mission")}</h3>
                <p className="text-gray-600 leading-relaxed">{content.mission}</p>
              </div>
            </div>
            <div className="absolute top-4 right-4 w-20 h-20 bg-green-100 rounded-full opacity-50 blur-2xl" />
          </div>
        </motion.div>
      </div>

      <div className="text-center mb-6">
        <h3 className="text-xl font-display font-bold text-gray-900">{t("Temel Değerlerimiz", "Our Core Values")}</h3>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {content.values?.map((value: any, i: number) => {
          const Icon = valueIcons[value.title] || Star;
          const colors = [
            { bg: "from-orange-500 to-amber-500", light: "bg-orange-50", text: "text-orange-600" },
            { bg: "from-purple-500 to-violet-500", light: "bg-purple-50", text: "text-purple-600" },
            { bg: "from-cyan-500 to-blue-500", light: "bg-cyan-50", text: "text-cyan-600" },
            { bg: "from-rose-500 to-pink-500", light: "bg-rose-50", text: "text-rose-600" },
            { bg: "from-emerald-500 to-teal-500", light: "bg-emerald-50", text: "text-emerald-600" },
            { bg: "from-indigo-500 to-blue-500", light: "bg-indigo-50", text: "text-indigo-600" }
          ];
          const color = colors[i % colors.length];

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className={`${color.light} rounded-2xl p-5 border border-gray-100 hover:shadow-lg transition-all group`}
            >
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${color.bg} flex items-center justify-center mb-3 shadow-lg group-hover:scale-110 transition-transform`}>
                <Icon className="w-5 h-5 text-white" />
              </div>
              <h4 className={`font-bold ${color.text} mb-1`}>{value.title}</h4>
              <p className="text-gray-500 text-xs leading-relaxed">{value.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

function EgitimYaklasimiContent() {
  const { lang, t } = useLanguage();
  const PAGE_CONTENT = getPageContentTranslated(lang);
  const content = PAGE_CONTENT.kurumsal["egitim-yaklasimimiz"] as any;

  const principleIcons: Record<string, any> = {
    heart: Heart,
    zap: Zap,
    layers: Layers,
    cpu: Cpu
  };
  
  return (
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 bg-brand-orange/10 text-brand-orange px-4 py-2 rounded-full text-sm font-medium mb-4"
        >
          <Lightbulb className="w-4 h-4" />
          {t("Pedagojik Yaklaşım", "Pedagogical Approach")}
        </motion.div>
        <h2 className="text-2xl md:text-4xl font-display font-bold text-gray-900 mb-3">{content.title}</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">{content.subtitle}</p>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-6 md:p-8 border border-gray-100 shadow-sm mb-12"
      >
        <p className="text-gray-600 leading-relaxed text-base md:text-lg">{content.content}</p>
      </motion.div>

      <div className="mb-12">
        <div className="text-center mb-8">
          <h3 className="text-xl font-display font-bold text-gray-900">{t("Gelişim Tarihçemiz", "Our Development History")}</h3>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-brand-green to-brand-orange" />
          
          {content.timeline?.map((item: any, i: number) => {
            const isLeft = i % 2 === 0;
            const colors = [
              { bg: "bg-primary", ring: "ring-primary/20" },
              { bg: "bg-brand-green", ring: "ring-brand-green/20" },
              { bg: "bg-brand-orange", ring: "ring-brand-orange/20" },
              { bg: "bg-brand-blue", ring: "ring-brand-blue/20" },
              { bg: "bg-purple-500", ring: "ring-purple-500/20" },
              { bg: "bg-cyan-500", ring: "ring-cyan-500/20" }
            ];
            const color = colors[i % colors.length];

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative flex items-center gap-4 mb-6 ${
                  isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className={`flex-1 ml-12 md:ml-0 ${isLeft ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className={`inline-block ${color.bg} text-white text-xs font-bold px-3 py-1 rounded-full mb-2`}>
                      {item.year}
                    </div>
                    <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                    <p className="text-gray-500 text-sm">{item.desc}</p>
                  </div>
                </div>

                <div className={`absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 ${color.bg} rounded-full ring-4 ${color.ring} z-10`} />

                <div className="hidden md:block flex-1" />
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="text-center mb-6">
        <h3 className="text-xl font-display font-bold text-gray-900">{t("Temel İlkelerimiz", "Our Core Principles")}</h3>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {content.principles?.map((principle: any, i: number) => {
          const Icon = principleIcons[principle.icon] || Lightbulb;
          const colors = [
            { gradient: "from-rose-500 to-pink-500", bg: "bg-rose-50", border: "border-rose-100" },
            { gradient: "from-amber-500 to-orange-500", bg: "bg-amber-50", border: "border-amber-100" },
            { gradient: "from-violet-500 to-purple-500", bg: "bg-violet-50", border: "border-violet-100" },
            { gradient: "from-cyan-500 to-blue-500", bg: "bg-cyan-50", border: "border-cyan-100" }
          ];
          const color = colors[i % colors.length];

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`${color.bg} ${color.border} rounded-2xl p-6 border hover:shadow-lg transition-all group`}
            >
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color.gradient} flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">{principle.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{principle.desc}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
