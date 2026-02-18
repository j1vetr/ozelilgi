import { motion } from "framer-motion";
import { Link } from "wouter";
import { PageHeader } from "@/components/ui/PageHeader";
import { useLanguage } from "@/lib/i18n";
import { T } from "@/lib/translations";
import { Button } from "@/components/ui/button";
import { 
  ClipboardList, Phone, Calendar, FileCheck, CheckCircle, 
  ArrowRight, FileText, Clock, Users, Building, CreditCard,
  BookOpen, Heart, Shield
} from "lucide-react";
import { SCHOOL_INFO } from "@/lib/constants";

export default function KayitSureciPage() {
  const { lang, t } = useLanguage();

  const processSteps = [
    {
      step: 1,
      title: t("Online Ön Kayıt", "Online Pre-Registration"),
      subtitle: t("5 Dakika", "5 Minutes"),
      desc: t("Web sitemizden veya telefonla ön kayıt formunu doldurun. Eğitim danışmanlarımız en geç 24 saat içinde sizi arayacaktır.", "Fill out the pre-registration form on our website or by phone. Our education consultants will call you within 24 hours."),
      icon: ClipboardList,
      color: "#F97316",
      details: [
        t("Öğrenci ve veli bilgileri", "Student and parent information"),
        t("İletişim tercihleri", "Contact preferences"),
        t("Aday sınıf seçimi", "Grade selection")
      ]
    },
    {
      step: 2,
      title: t("Tanışma Görüşmesi", "Introduction Meeting"),
      subtitle: t("Telefon veya Yüz Yüze", "Phone or In Person"),
      desc: t("Uzman eğitim danışmanımız sizinle iletişime geçerek okulumuz hakkında detaylı bilgi verir ve sorularınızı yanıtlar.", "Our expert education consultant will contact you, provide detailed information about our school, and answer your questions."),
      icon: Phone,
      color: "#3B82F6",
      details: [
        t("Eğitim programı bilgilendirme", "Education program information"),
        t("Ücret ve ödeme seçenekleri", "Fees and payment options"),
        t("Kampüs ziyaret randevusu", "Campus visit appointment")
      ]
    },
    {
      step: 3,
      title: t("Okul Ziyareti", "School Visit"),
      subtitle: t("Kampüs Turu", "Campus Tour"),
      desc: t("Ailenizle birlikte kampüsümüzü ziyaret edin, sınıfları ve tesisleri görün, öğretmenlerimizle tanışın.", "Visit our campus with your family, see the classrooms and facilities, meet our teachers."),
      icon: Building,
      color: "#10B981",
      details: [
        t("Sınıf ve laboratuvar gezisi", "Classroom and laboratory tour"),
        t("Öğretmenlerle tanışma", "Meet the teachers"),
        t("Eğitim ortamını deneyimleme", "Experience the learning environment")
      ]
    },
    {
      step: 4,
      title: t("Evrak Teslimi", "Document Submission"),
      subtitle: t("Kayıt Dosyası", "Registration File"),
      desc: t("Gerekli evrakları hazırlayın ve kayıt ofisinize teslim edin. Eksik evrak durumunda size rehberlik edeceğiz.", "Prepare the required documents and submit them to our registration office. We will guide you in case of missing documents."),
      icon: FileText,
      color: "#8B5CF6",
      details: [
        t("Nüfus cüzdanı fotokopisi", "Copy of ID card"),
        t("Öğrenci belgesi / Nakil belgesi", "Student certificate / Transfer certificate"),
        t("4 adet vesikalık fotoğraf", "4 passport photos")
      ]
    },
    {
      step: 5,
      title: t("Kayıt Tamamlama", "Complete Registration"),
      subtitle: t("Hoş Geldiniz!", "Welcome!"),
      desc: t("Kayıt ücretinin ödenmesi ve sözleşmenin imzalanmasıyla kayıt işleminiz tamamlanır. Artık ailemizin bir parçasısınız!", "Your registration is completed with the payment of the registration fee and signing the contract. You are now part of our family!"),
      icon: FileCheck,
      color: "#EC4899",
      details: [
        t("Kayıt sözleşmesi imzası", "Registration contract signing"),
        t("Ödeme planı belirleme", "Payment plan setup"),
        t("Oryantasyon programı bilgisi", "Orientation program information")
      ]
    }
  ];

  const documents = [
    { name: t("Nüfus Cüzdanı Fotokopisi", "Copy of ID Card"), desc: t("Öğrenci ve veli için", "For student and parent") },
    { name: t("Öğrenci Belgesi", "Student Certificate"), desc: t("Mevcut okuldan alınacak", "To be obtained from current school") },
    { name: t("Nakil Belgesi", "Transfer Certificate"), desc: t("Nakil durumunda gerekli", "Required for transfers") },
    { name: t("4 Adet Vesikalık Fotoğraf", "4 Passport Photos"), desc: t("Son 6 ay içinde çekilmiş", "Taken within the last 6 months") },
    { name: t("Aşı Kartı Fotokopisi", "Copy of Vaccination Card"), desc: t("Anaokulu kayıtları için", "For preschool enrollment") },
    { name: t("Sağlık Raporu", "Health Report"), desc: t("Tam teşekküllü hastaneden", "From a fully equipped hospital") }
  ];

  const faqs = [
    {
      q: t("Kayıt için randevu almam gerekiyor mu?", "Do I need an appointment for enrollment?"),
      a: t("Evet, kampüs ziyareti ve kayıt işlemleri için önceden randevu almanızı öneriyoruz. Böylece size özel zaman ayırabiliyoruz.", "Yes, we recommend scheduling an appointment for campus visits and enrollment. This way, we can dedicate time specifically for you.")
    },
    {
      q: t("Taksitli ödeme seçeneği var mı?", "Are installment payment options available?"),
      a: t("Evet, peşin ödeme, 2 taksit, 4 taksit ve 10 taksit seçeneklerimiz mevcuttur. Detaylar için danışmanlarımızla görüşebilirsiniz.", "Yes, we have cash, 2 installment, 4 installment, and 10 installment options. Contact our consultants for details.")
    },
    {
      q: t("Nakil işlemleri nasıl yapılıyor?", "How are transfer procedures handled?"),
      a: t("Mevcut okulunuzdan nakil belgesi almanız yeterli. Diğer tüm işlemler kayıt ofisimiz tarafından takip edilir.", "You just need to get a transfer certificate from your current school. All other procedures are handled by our registration office.")
    }
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
      <PageHeader 
        title={T("enrollment_process.title", lang)} 
        subtitle={T("enrollment_process.subtitle", lang)}
        breadcrumbs={[
          { label: T("nav.enrollment", lang), href: "/kayit" },
          { label: T("enrollment_process.title", lang), href: "/kayit/kayit-sureci" }
        ]}
      />

      <div className="container py-12 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap justify-center gap-6 mb-12"
        >
          {[
            { icon: Clock, text: t("24 Saat İçinde Dönüş", "Response Within 24 Hours") },
            { icon: Shield, text: t("KVKK Uyumlu", "KVKK Compliant") },
            { icon: Heart, text: t("Kişisel Danışmanlık", "Personal Counseling") }
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">
              <item.icon className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-gray-700">{item.text}</span>
            </div>
          ))}
        </motion.div>

        <div className="max-w-4xl mx-auto mb-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-2">{t("Adım Adım Kayıt Süreci", "Step by Step Enrollment Process")}</h2>
            <p className="text-gray-500">{t("Her adımda yanınızdayız", "We are with you at every step")}</p>
          </div>

          <div className="relative">
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
                  <div className={`flex-1 ${isLeft ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-lg hover:shadow-xl transition-shadow">
                      <div className={`flex items-center gap-3 mb-4 ${isLeft ? 'md:flex-row-reverse' : ''}`}>
                        <div 
                          className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg shrink-0"
                          style={{ backgroundColor: step.color }}
                        >
                          <step.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className={isLeft ? 'md:text-right' : ''}>
                          <span className="text-xs font-bold uppercase tracking-wider" style={{ color: step.color }}>
                            {t("Adım", "Step")} {step.step}
                          </span>
                          <h3 className="font-bold text-gray-900 text-lg">{step.title}</h3>
                        </div>
                      </div>

                      <p className="text-gray-500 text-sm mb-4">{step.desc}</p>

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

                  <div 
                    className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full ring-4 ring-white z-10 hidden md:block"
                    style={{ backgroundColor: step.color }}
                  />

                  <div className="hidden md:block flex-1" />
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl font-display font-bold text-gray-900 mb-2">{t("Gerekli Evraklar", "Required Documents")}</h2>
            <p className="text-gray-500 text-sm">{t("Kayıt için hazırlamanız gereken belgeler", "Documents you need to prepare for enrollment")}</p>
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-16"
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl font-display font-bold text-gray-900 mb-2">{t("Sıkça Sorulan Sorular", "Frequently Asked Questions")}</h2>
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-gradient-to-br from-primary to-blue-700 rounded-3xl p-8 text-center text-white shadow-2xl">
            <BookOpen className="w-12 h-12 mx-auto mb-4 opacity-80" />
            <h3 className="text-xl font-display font-bold mb-2">{t("Hemen Başvurun", "Apply Now")}</h3>
            <p className="text-white/80 mb-6 text-sm">
              {t("2026-2027 eğitim öğretim yılı kayıtları devam ediyor.", "2026-2027 academic year enrollment is ongoing.")}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/kayit/on-kayit">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 rounded-xl font-bold shadow-lg w-full sm:w-auto">
                  {T("preregister.title", lang)}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <a href={`tel:${SCHOOL_INFO.phone.replace(/\s/g, '')}`}>
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 rounded-xl font-bold w-full sm:w-auto">
                  <Phone className="w-4 h-4 mr-2" />
                  {t("Bizi Arayın", "Call Us")}
                </Button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
