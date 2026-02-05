import { useState } from "react";
import { useRoute, Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { PageHeader } from "@/components/ui/PageHeader";
import { PAGE_CONTENT } from "@/lib/page-content";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Target, Eye, Lightbulb, BookOpen, Building2, Users, GraduationCap } from "lucide-react";

const tabs = [
  { id: "hakkimizda", label: "Hakkımızda", icon: Building2 },
  { id: "kurucu-mesaji", label: "Kurucu Mesajı", icon: Users },
  { id: "vizyon-misyon", label: "Vizyon & Misyon", icon: Target },
  { id: "egitim-yaklasimimiz", label: "Eğitim Yaklaşımımız", icon: Lightbulb },
];

export default function KurumsalPage() {
  const [match, params] = useRoute("/kurumsal/:slug");
  const slug = (params?.slug || "hakkimizda") as keyof typeof PAGE_CONTENT.kurumsal;
  const [activeTab, setActiveTab] = useState(slug);

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId as keyof typeof PAGE_CONTENT.kurumsal);
  };

  return (
    <div className="bg-background min-h-screen">
      <PageHeader 
        title="Kurumsal" 
        subtitle="Özel Boğaziçi İlgi Koleji Çekmeköy"
        breadcrumbs={[{ label: "Kurumsal", href: "/kurumsal/hakkimizda" }]}
      />

      <div className="container py-10 px-4">
        {/* Tab Navigation */}
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

        {/* Content Area */}
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
  const content = PAGE_CONTENT.kurumsal["hakkimizda"] as any;
  
  return (
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-display font-bold text-primary mb-2">{content.title}</h2>
        <p className="text-muted-foreground">{content.subtitle}</p>
      </div>

      {/* Stats Grid */}
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

      {/* Description */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-8">
        <p className="text-gray-600 leading-relaxed text-sm md:text-base">{content.content}</p>
      </div>

      {/* Facilities Grid */}
      <div>
        <h3 className="text-lg font-semibold text-primary mb-4 text-center">Kampüs İmkanları</h3>
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
  const content = PAGE_CONTENT.kurumsal["kurucu-mesaji"] as any;
  
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-6">
        <h2 className="text-2xl md:text-3xl font-display font-bold text-primary mb-2">{content.title}</h2>
        <p className="text-muted-foreground text-sm">{content.subtitle}</p>
      </div>

      {/* Video Embed */}
      <div className="relative rounded-2xl overflow-hidden shadow-xl mb-8 bg-gray-900">
        <div className="aspect-[9/16] max-w-xs mx-auto">
          <iframe
            src={`https://www.youtube.com/embed/${content.videoId}?autoplay=0`}
            title="Kurucu Mesajı"
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>

      {/* Message Text */}
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
  const content = PAGE_CONTENT.kurumsal["vizyon-misyon"] as any;
  
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-display font-bold text-primary mb-2">{content.title}</h2>
        <p className="text-muted-foreground text-sm">{content.subtitle}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {/* Vision */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-gradient-to-br from-brand-blue/10 to-brand-blue/5 rounded-2xl p-6 border border-brand-blue/20"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-brand-blue/20 flex items-center justify-center">
              <Eye className="w-5 h-5 text-brand-blue" />
            </div>
            <h3 className="text-lg font-bold text-brand-blue">Vizyonumuz</h3>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">{content.vision}</p>
        </motion.div>

        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-gradient-to-br from-brand-green/10 to-brand-green/5 rounded-2xl p-6 border border-brand-green/20"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-brand-green/20 flex items-center justify-center">
              <Target className="w-5 h-5 text-brand-green" />
            </div>
            <h3 className="text-lg font-bold text-brand-green">Misyonumuz</h3>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">{content.mission}</p>
        </motion.div>
      </div>
    </div>
  );
}

function EgitimYaklasimiContent() {
  const content = PAGE_CONTENT.kurumsal["egitim-yaklasimimiz"] as any;
  
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-display font-bold text-primary mb-2">{content.title}</h2>
        <p className="text-muted-foreground text-sm">{content.subtitle}</p>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6">
        <p className="text-gray-600 leading-relaxed text-sm md:text-base">{content.content}</p>
      </div>

      <h3 className="text-lg font-semibold text-primary mb-4 text-center">Temel İlkelerimiz</h3>
      <div className="grid md:grid-cols-2 gap-3">
        {content.principles.map((principle: any, i: number) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-gradient-to-br from-brand-orange/5 to-brand-yellow/5 rounded-xl p-4 border border-brand-orange/10"
          >
            <h4 className="font-semibold text-primary text-sm mb-1">{principle.title}</h4>
            <p className="text-gray-500 text-xs leading-relaxed">{principle.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
