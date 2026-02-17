import { motion } from "framer-motion";
import { Link } from "wouter";
import { PageHeader } from "@/components/ui/PageHeader";
import { Button } from "@/components/ui/button";
import { 
  ClipboardList, FileCheck, Users, Phone, Calendar, ArrowRight, 
  CheckCircle, Shield, Award, Clock, Heart, Star
} from "lucide-react";
import { SCHOOL_INFO } from "@/lib/constants";

const features = [
  {
    icon: Shield,
    title: "Güvenli Süreç",
    desc: "KVKK uyumlu, şeffaf kayıt işlemleri",
    color: "from-blue-500 to-indigo-500"
  },
  {
    icon: Clock,
    title: "Hızlı Dönüş",
    desc: "24 saat içinde geri arama garantisi",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Heart,
    title: "Kişisel İlgi",
    desc: "Her aile için özel danışmanlık",
    color: "from-rose-500 to-pink-500"
  },
  {
    icon: Award,
    title: "25 Yıllık Tecrübe",
    desc: "Binlerce mutlu aile ve öğrenci",
    color: "from-amber-500 to-orange-500"
  }
];

const steps = [
  {
    step: 1,
    title: "Ön Kayıt Formu",
    desc: "Online formu doldurarak başvurunuzu oluşturun",
    icon: ClipboardList,
    color: "#F97316"
  },
  {
    step: 2,
    title: "Tanışma Görüşmesi",
    desc: "Eğitim danışmanımız sizi arayarak randevu oluşturur",
    icon: Phone,
    color: "#3B82F6"
  },
  {
    step: 3,
    title: "Kampüs Ziyareti",
    desc: "Okulumuzу yerinde görün, sorularınızı sorun",
    icon: Calendar,
    color: "#10B981"
  },
  {
    step: 4,
    title: "Kayıt Tamamlama",
    desc: "Evraklarınızı teslim edin, ailemize katılın",
    icon: FileCheck,
    color: "#8B5CF6"
  }
];

export default function KayitPage() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
      <PageHeader 
        title="Kayıt İşlemleri" 
        subtitle="Çocuğunuzun geleceğine yatırım yapın"
        breadcrumbs={[{ label: "Kayıt", href: "/kayit" }]}
      />

      <div className="container py-12 px-4">
        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-16"
        >
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-lg transition-all text-center group"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mx-auto mb-3 shadow-lg group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 text-sm mb-1">{feature.title}</h3>
              <p className="text-gray-500 text-xs">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Main CTA Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
          {/* Kayıt Süreci Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl transform rotate-1 group-hover:rotate-2 transition-transform" />
            <div className="relative bg-white rounded-3xl p-8 border border-gray-100 shadow-xl h-full flex flex-col">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-4 shadow-lg">
                <ClipboardList className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-2xl font-display font-bold text-gray-900 mb-3">Kayıt Süreci</h2>
              <p className="text-gray-500 mb-6 flex-1">
                Kayıt işlemlerinin nasıl ilerlediğini, gerekli evrakları ve önemli tarihleri öğrenin.
              </p>
              <Link href="/kayit/kayit-sureci">
                <Button className="w-full h-12 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold shadow-lg">
                  Süreci İncele
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Ön Kayıt Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-rose-500 rounded-3xl transform -rotate-1 group-hover:-rotate-2 transition-transform" />
            <div className="relative bg-white rounded-3xl p-8 border border-gray-100 shadow-xl h-full flex flex-col">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-rose-500 flex items-center justify-center mb-4 shadow-lg">
                <FileCheck className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-2xl font-display font-bold text-gray-900 mb-3">Ön Kayıt Formu</h2>
              <p className="text-gray-500 mb-6 flex-1">
                Hemen başvurunuzu yapın, eğitim danışmanlarımız 24 saat içinde sizi arasın.
              </p>
              <Link href="/kayit/on-kayit">
                <Button className="w-full h-12 rounded-xl bg-gradient-to-r from-orange-500 to-rose-500 hover:from-orange-600 hover:to-rose-600 text-white font-semibold shadow-lg">
                  Başvuru Yap
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Quick Steps Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl font-display font-bold text-gray-900 mb-2">Kayıt Adımları</h2>
            <p className="text-gray-500">Basit ve şeffaf süreç</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-all text-center relative overflow-hidden group"
              >
                {/* Step Number */}
                <div 
                  className="absolute -top-4 -right-4 w-16 h-16 rounded-full opacity-10 group-hover:opacity-20 transition-opacity"
                  style={{ backgroundColor: step.color }}
                />
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold text-lg shadow-lg"
                  style={{ backgroundColor: step.color }}
                >
                  {step.step}
                </div>
                <h3 className="font-bold text-gray-900 text-sm mb-1">{step.title}</h3>
                <p className="text-gray-500 text-xs">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 max-w-2xl mx-auto"
        >
          <div className="bg-gradient-to-br from-primary to-blue-700 rounded-3xl p-8 text-center text-white shadow-2xl">
            <Users className="w-12 h-12 mx-auto mb-4 opacity-80" />
            <h3 className="text-xl font-display font-bold mb-2">Sorularınız mı Var?</h3>
            <p className="text-white/80 mb-6 text-sm">
              Kayıt süreciyle ilgili tüm sorularınız için bizi arayabilirsiniz.
            </p>
            <a href={`tel:${SCHOOL_INFO.phone.replace(/\s/g, '')}`}>
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 rounded-xl font-bold shadow-lg">
                <Phone className="w-5 h-5 mr-2" />
                {SCHOOL_INFO.phone}
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
