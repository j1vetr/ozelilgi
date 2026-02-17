import { motion } from "framer-motion";
import { Link } from "wouter";
import { PageHeader } from "@/components/ui/PageHeader";
import { Button } from "@/components/ui/button";
import { 
  ClipboardList, Phone, Calendar, FileCheck, CheckCircle, 
  ArrowRight, FileText, Clock, Users, Building, CreditCard,
  BookOpen, Heart, Shield
} from "lucide-react";
import { SCHOOL_INFO } from "@/lib/constants";

const processSteps = [
  {
    step: 1,
    title: "Online Ön Kayıt",
    subtitle: "5 Dakika",
    desc: "Web sitemizden veya telefonla ön kayıt formunu doldurun. Eğitim danışmanlarımız en geç 24 saat içinde sizi arayacaktır.",
    icon: ClipboardList,
    color: "#F97316",
    details: [
      "Öğrenci ve veli bilgileri",
      "İletişim tercihleri",
      "Aday sınıf seçimi"
    ]
  },
  {
    step: 2,
    title: "Tanışma Görüşmesi",
    subtitle: "Telefon veya Yüz Yüze",
    desc: "Uzman eğitim danışmanımız sizinle iletişime geçerek okulumuz hakkında detaylı bilgi verir ve sorularınızı yanıtlar.",
    icon: Phone,
    color: "#3B82F6",
    details: [
      "Eğitim programı bilgilendirme",
      "Ücret ve ödeme seçenekleri",
      "Kampüs ziyaret randevusu"
    ]
  },
  {
    step: 3,
    title: "Okul Ziyareti",
    subtitle: "Kampüs Turu",
    desc: "Ailenizle birlikte kampüsümüzü ziyaret edin, sınıfları ve tesisleri görün, öğretmenlerimizle tanışın.",
    icon: Building,
    color: "#10B981",
    details: [
      "Sınıf ve laboratuvar gezisi",
      "Öğretmenlerle tanışma",
      "Eğitim ortamını deneyimleme"
    ]
  },
  {
    step: 4,
    title: "Evrak Teslimi",
    subtitle: "Kayıt Dosyası",
    desc: "Gerekli evrakları hazırlayın ve kayıt ofisinize teslim edin. Eksik evrak durumunda size rehberlik edeceğiz.",
    icon: FileText,
    color: "#8B5CF6",
    details: [
      "Nüfus cüzdanı fotokopisi",
      "Öğrenci belgesi / Nakil belgesi",
      "4 adet vesikalık fotoğraf"
    ]
  },
  {
    step: 5,
    title: "Kayıt Tamamlama",
    subtitle: "Hoş Geldiniz!",
    desc: "Kayıt ücretinin ödenmesi ve sözleşmenin imzalanmasıyla kayıt işleminiz tamamlanır. Artık ailemizin bir parçasısınız!",
    icon: FileCheck,
    color: "#EC4899",
    details: [
      "Kayıt sözleşmesi imzası",
      "Ödeme planı belirleme",
      "Oryantasyon programı bilgisi"
    ]
  }
];

const documents = [
  { name: "Nüfus Cüzdanı Fotokopisi", desc: "Öğrenci ve veli için" },
  { name: "Öğrenci Belgesi", desc: "Mevcut okuldan alınacak" },
  { name: "Nakil Belgesi", desc: "Nakil durumunda gerekli" },
  { name: "4 Adet Vesikalık Fotoğraf", desc: "Son 6 ay içinde çekilmiş" },
  { name: "Aşı Kartı Fotokopisi", desc: "Anaokulu kayıtları için" },
  { name: "Sağlık Raporu", desc: "Tam teşekküllü hastaneden" }
];

const faqs = [
  {
    q: "Kayıt için randevu almam gerekiyor mu?",
    a: "Evet, kampüs ziyareti ve kayıt işlemleri için önceden randevu almanızı öneriyoruz. Böylece size özel zaman ayırabiliyoruz."
  },
  {
    q: "Taksitli ödeme seçeneği var mı?",
    a: "Evet, peşin ödeme, 2 taksit, 4 taksit ve 10 taksit seçeneklerimiz mevcuttur. Detaylar için danışmanlarımızla görüşebilirsiniz."
  },
  {
    q: "Nakil işlemleri nasıl yapılıyor?",
    a: "Mevcut okulunuzdan nakil belgesi almanız yeterli. Diğer tüm işlemler kayıt ofisimiz tarafından takip edilir."
  }
];

export default function KayitSureciPage() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
      <PageHeader 
        title="Kayıt Süreci" 
        subtitle="Basit, şeffaf ve güvenilir kayıt adımları"
        breadcrumbs={[
          { label: "Kayıt", href: "/kayit" },
          { label: "Kayıt Süreci", href: "/kayit/kayit-sureci" }
        ]}
      />

      <div className="container py-12 px-4">
        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap justify-center gap-6 mb-12"
        >
          {[
            { icon: Clock, text: "24 Saat İçinde Dönüş" },
            { icon: Shield, text: "KVKK Uyumlu" },
            { icon: Heart, text: "Kişisel Danışmanlık" }
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">
              <item.icon className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-gray-700">{item.text}</span>
            </div>
          ))}
        </motion.div>

        {/* Process Timeline */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-2">Adım Adım Kayıt Süreci</h2>
            <p className="text-gray-500">Her adımda yanınızdayız</p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500 via-blue-500 to-pink-500 hidden md:block" />
            
            {processSteps.map((step, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`relative flex items-start gap-6 mb-8 ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Content Card */}
                  <div className={`flex-1 ${isLeft ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-lg hover:shadow-xl transition-shadow">
                      {/* Header */}
                      <div className={`flex items-center gap-3 mb-4 ${isLeft ? 'md:flex-row-reverse' : ''}`}>
                        <div 
                          className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg shrink-0"
                          style={{ backgroundColor: step.color }}
                        >
                          <step.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className={isLeft ? 'md:text-right' : ''}>
                          <span className="text-xs font-bold uppercase tracking-wider" style={{ color: step.color }}>
                            Adım {step.step}
                          </span>
                          <h3 className="font-bold text-gray-900 text-lg">{step.title}</h3>
                        </div>
                      </div>

                      <p className="text-gray-500 text-sm mb-4">{step.desc}</p>

                      {/* Details */}
                      <div className={`space-y-2 ${isLeft ? 'md:text-right' : ''}`}>
                        {step.details.map((detail, idx) => (
                          <div key={idx} className={`flex items-center gap-2 ${isLeft ? 'md:flex-row-reverse' : ''}`}>
                            <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                            <span className="text-xs text-gray-600">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div 
                    className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full ring-4 ring-white z-10 hidden md:block"
                    style={{ backgroundColor: step.color }}
                  />

                  {/* Spacer */}
                  <div className="hidden md:block flex-1" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Required Documents */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl font-display font-bold text-gray-900 mb-2">Gerekli Evraklar</h2>
            <p className="text-gray-500 text-sm">Kayıt için hazırlamanız gereken belgeler</p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {documents.map((doc, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm hover:shadow-md transition-all flex items-start gap-3"
              >
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <FileText className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">{doc.name}</h4>
                  <p className="text-gray-500 text-xs">{doc.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-16"
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl font-display font-bold text-gray-900 mb-2">Sıkça Sorulan Sorular</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm"
              >
                <h4 className="font-bold text-gray-900 mb-2">{faq.q}</h4>
                <p className="text-gray-500 text-sm">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-gradient-to-br from-primary to-blue-700 rounded-3xl p-8 text-center text-white shadow-2xl">
            <BookOpen className="w-12 h-12 mx-auto mb-4 opacity-80" />
            <h3 className="text-xl font-display font-bold mb-2">Hemen Başvurun</h3>
            <p className="text-white/80 mb-6 text-sm">
              2026-2027 eğitim öğretim yılı kayıtları devam ediyor.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/kayit/on-kayit">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 rounded-xl font-bold shadow-lg w-full sm:w-auto">
                  Ön Kayıt Formu
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <a href={`tel:${SCHOOL_INFO.phone.replace(/\s/g, '')}`}>
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 rounded-xl font-bold w-full sm:w-auto">
                  <Phone className="w-4 h-4 mr-2" />
                  Bizi Arayın
                </Button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
