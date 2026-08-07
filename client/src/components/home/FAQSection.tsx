import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

const faqsTR = [
  {
    q: "Kayıt için hangi belgeler gereklidir?",
    a: "Kayıt için nüfus cüzdanı fotokopisi, 4 adet vesikalık fotoğraf, sağlık raporu ve önceki okul belgesi (varsa) yeterlidir. Detaylı bilgi için 0216 642 8 642 numaralı hattımızı arayabilirsiniz."
  },
  {
    q: "Kaç yaşından itibaren kayıt yaptırılabilir?",
    a: "Oyun grubumuz 2 yaşından itibaren, anaokulumuz 3-6 yaş arası çocukları kabul etmektedir. İlkokul 1. sınıf için ise Milli Eğitim Bakanlığı'nın belirlediği yaş kriterleri geçerlidir."
  },
  {
    q: "Servis imkânı var mı, hangi güzergâhları kapsıyor?",
    a: "Çekmeköy ve çevre ilçelere (Ümraniye, Sancaktepe, Sultanbeyli, Pendik) servis hizmeti sunulmaktadır. Servis güzergâhları her yıl güncellenmektedir. Kendi güzergâhınız için okul idaresiyle iletişime geçmenizi öneririz."
  },
  {
    q: "LGS hazırlık süreci nasıl yürütülüyor?",
    a: "8. sınıf öğrencilerimize özel danışman öğretmen atanır. Okulumuz bünyesinde düzenli deneme sınavları, etüt programları ve birebir koçluk seansları ile öğrencilerimiz herhangi bir dershaneye ihtiyaç duymadan LGS'ye hazırlanır."
  },
  {
    q: "Yabancı dil eğitimi nasıl verilmektedir?",
    a: "Anaokulundan itibaren İngilizce, hayatın doğal bir parçası olarak öğretilmektedir. Cambridge tabanlı, iletişim odaklı yöntemlerle desteklenen programımızda öğrenciler İngilizceyi bir 'ders' olarak değil 'yaşayan bir dil' olarak deneyimler. Ortaokulda Almanca ikinci yabancı dil olarak eklenmektedir."
  },
  {
    q: "Okul öğle yemeği veriyor mu, menüler nasıl hazırlanıyor?",
    a: "Evet, okulumuzda öğle yemeği hizmeti verilmektedir. Menüler, diyetisyen gözetiminde çocukların gelişim ihtiyaçlarına uygun şekilde hazırlanmakta; aylık menüler velilerimizle paylaşılmaktadır."
  },
  {
    q: "Psikolojik Danışmanlık ve Rehberlik (PDR) hizmeti sunuluyor mu?",
    a: "Tüm kademelerimizde tam zamanlı PDR uzmanlarımız görev yapmaktadır. Öğrencilerin akademik, sosyal ve duygusal gelişimleri bireysel görüşmeler ve grup çalışmalarıyla düzenli olarak takip edilmektedir."
  },
  {
    q: "Kulüp ve atölye çalışmaları nelerdir?",
    a: "Robotik ve Kodlama, Görsel Sanatlar, Müzik, Drama, Basketbol, Voleybol, Satranç, Eko-Okul, Doğa ve Bilim kulüpleri gibi pek çok seçenek mevcuttur. Her öğrencinin en az bir sanat ve bir spor dalıyla ilgilenmesi teşvik edilmektedir."
  },
  {
    q: "Veliler çocuklarının gelişimini nasıl takip edebiliyor?",
    a: "Öğrenci takip sistemi üzerinden akademik ve sosyal gelişim anlık olarak paylaşılmaktadır. Dönemsel veli toplantıları, bireysel görüşmeler ve Boğaziçi İlgi Ebeveyn Akademisi kapsamında düzenlenen seminerler aracılığıyla velilerimizle sürekli iletişim halindeyiz."
  },
  {
    q: "Ücretler ve ödeme seçenekleri hakkında bilgi alabilir miyim?",
    a: "Ücret tarifesi ve ödeme seçenekleri için lütfen 0216 642 8 642 numaralı hattımızı arayın veya info@ozelbogaziciilgiokullari.k12.tr adresine e-posta gönderin. Erken kayıt döneminde özel avantajlardan yararlanabilirsiniz."
  }
];

const faqsEN = [
  {
    q: "What documents are required for enrollment?",
    a: "A copy of ID, 4 passport-size photos, a health report, and previous school documents (if applicable) are sufficient. Please call us at 0216 642 8 642 for detailed information."
  },
  {
    q: "From what age can children be enrolled?",
    a: "Our play group accepts children from age 2, and our preschool accepts children aged 3-6. For primary school 1st grade, the age criteria set by the Ministry of National Education apply."
  },
  {
    q: "Is there a school bus service, and which routes are covered?",
    a: "Transportation service is provided to Çekmeköy and surrounding districts (Ümraniye, Sancaktepe, Sultanbeyli, Pendik). Routes are updated each year. We recommend contacting the school administration for your specific route."
  },
  {
    q: "How is the LGS (High School Entrance Exam) preparation process managed?",
    a: "8th grade students are assigned a personal advisor teacher. Regular mock exams, study programs, and one-on-one coaching sessions within our school ensure students are fully prepared for LGS without needing any external tutoring center."
  },
  {
    q: "How is foreign language education provided?",
    a: "From preschool onwards, English is taught as a natural part of life. Supported by Cambridge-based, communication-focused methods, students experience English as a 'living language' rather than a 'lesson'. German is added as a second foreign language in middle school."
  },
  {
    q: "Does the school provide lunch? How are menus prepared?",
    a: "Yes, lunch service is provided at our school. Menus are prepared under the supervision of a dietitian to meet children's developmental needs, and monthly menus are shared with parents."
  },
  {
    q: "Is Psychological Counseling and Guidance (PCG) service available?",
    a: "Full-time PCG specialists work at all our levels. Students' academic, social, and emotional development is regularly monitored through individual sessions and group activities."
  },
  {
    q: "What clubs and workshops are available?",
    a: "We offer many options including Robotics & Coding, Visual Arts, Music, Drama, Basketball, Volleyball, Chess, Eco-School, and Nature & Science clubs. Each student is encouraged to be involved in at least one art and one sports activity."
  },
  {
    q: "How can parents track their child's development?",
    a: "Academic and social development is shared instantly through the student tracking system. We maintain continuous communication with parents through periodic parent meetings, individual interviews, and seminars under the Boğaziçi İlgi Parent Academy."
  },
  {
    q: "Can I get information about fees and payment options?",
    a: "Please call 0216 642 8 642 or email info@ozelbogaziciilgiokullari.k12.tr for fee schedules and payment options. Special advantages are available during the early enrollment period."
  }
];

export function FAQSection() {
  const { lang, t } = useLanguage();
  const faqs = lang === "tr" ? faqsTR : faqsEN;
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container px-4 max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <HelpCircle className="w-4 h-4" />
            {t("En Çok Merak Edilenler", "Frequently Asked Questions")}
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-3">
            {t("Velilerimizin Sorduğu 10 Soru", "10 Questions Parents Ask")}
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            {t(
              "Okul tercih sürecinde en çok merak edilen soruları sizin için yanıtladık.",
              "We've answered the most frequently asked questions during the school selection process."
            )}
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left hover:bg-primary/5 transition-colors"
              >
                <span className="flex items-center gap-3 font-semibold text-gray-800 text-sm md:text-base">
                  <span className="shrink-0 w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                  {faq.q}
                </span>
                <ChevronDown
                  className={`shrink-0 w-5 h-5 text-primary transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    key="answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 pt-1 text-gray-600 text-sm md:text-base leading-relaxed border-t border-gray-100 ml-6">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
