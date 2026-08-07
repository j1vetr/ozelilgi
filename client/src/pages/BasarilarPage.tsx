import { PageHeader } from "@/components/ui/PageHeader";
import { SEOHead } from "@/components/SEOHead";
import { useLanguage } from "@/lib/i18n";
import { T } from "@/lib/translations";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Award, Star, Quote } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";

export default function BasarilarPage() {
  const { lang, t } = useLanguage();

  const ACHIEVEMENTS = [
    {
      title: t("TÜBİTAK 2204 Bölge Birinciliği", "TÜBİTAK 2204 Regional Championship"),
      category: t("Akademik", "Academic"),
      categoryKey: "academic",
      year: "2025",
      description: t(
        "Fen Lisesi öğrencilerimiz Biyoloji alanında geliştirdikleri projeyle Marmara bölge birincisi oldular.",
        "Our Science High School students became Marmara regional champions with their project in Biology."
      ),
      icon: Trophy
    },
    {
      title: t("İstanbul Liseler Arası Basketbol Şampiyonluğu", "Istanbul Inter-High School Basketball Championship"),
      category: t("Spor", "Sports"),
      categoryKey: "sports",
      year: "2025",
      description: t(
        "Erkek Basketbol takımımız il genelinde şampiyon olarak Türkiye şampiyonasına katılmaya hak kazandı.",
        "Our Men's Basketball team won the provincial championship and qualified for the Turkey championship."
      ),
      icon: Award
    },
    {
      title: t("Uluslararası Robotik Yarışması Bronz Madalya", "International Robotics Competition Bronze Medal"),
      category: t("Teknoloji", "Technology"),
      categoryKey: "academic",
      year: "2024",
      description: t(
        "Robotik takımımız Japonya'da düzenlenen yarışmada ülkemizi başarıyla temsil etti.",
        "Our robotics team successfully represented our country in the competition held in Japan."
      ),
      icon: Star
    },
    {
      title: t("YKS Türkiye 56.sı", "YKS Turkey 56th Place"),
      category: t("Akademik", "Academic"),
      categoryKey: "academic",
      year: "2024",
      description: t(
        "Öğrencimiz Ahmet Yılmaz, YKS sayısal alanda Türkiye 56.sı olarak Tıp Fakültesine yerleşti.",
        "Our student Ahmet Yılmaz placed 56th in Turkey in the YKS quantitative field and was admitted to Medical School."
      ),
      icon: Trophy
    }
  ];

  return (
    <div className="bg-background min-h-screen">
      <SEOHead
        titleTR="Başarılarımız | LGS ve Akademik Başarılar | Boğaziçi İlgi Koleji Çekmeköy"
        titleEN="Our Achievements | LGS & Academic Success | Boğaziçi İlgi Koleji Çekmeköy"
        descriptionTR="Boğaziçi İlgi Koleji Çekmeköy öğrencilerinin LGS dereceleri, TÜBİTAK proje ödülleri ve sportif başarıları. Çekmeköy'ün başarı odaklı özel okulu."
        descriptionEN="LGS rankings, TÜBİTAK project awards and sports achievements of Boğaziçi İlgi Koleji Çekmeköy students."
        canonical="/basarilar"
      />
      <PageHeader 
        title={T("achievements.title", lang)} 
        subtitle={T("achievements.subtitle", lang)}
        breadcrumbs={[{ label: T("achievements.title", lang), href: "/basarilar" }]}
      />

      <div className="container py-16 px-4">
        <Tabs defaultValue="akademik" className="w-full">
            <div className="flex justify-center mb-8">
                <TabsList>
                    <TabsTrigger value="akademik">{t("Akademik", "Academic")}</TabsTrigger>
                    <TabsTrigger value="spor">{t("Spor & Sanat", "Sports & Arts")}</TabsTrigger>
                    <TabsTrigger value="mezunlar">{t("Mezunlarımız", "Our Graduates")}</TabsTrigger>
                </TabsList>
            </div>

            <TabsContent value="akademik" className="mt-0">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {ACHIEVEMENTS.filter(a => a.categoryKey === "academic").map((item, i) => (
                        <AchievementCard key={i} item={item} />
                    ))}
                </div>
            </TabsContent>

            <TabsContent value="spor" className="mt-0">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {ACHIEVEMENTS.filter(a => a.categoryKey === "sports").map((item, i) => (
                        <AchievementCard key={i} item={item} />
                    ))}
                </div>
            </TabsContent>

            <TabsContent value="mezunlar" className="mt-0">
                <LGSGraduates />
            </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

function LGSGraduates() {
  const { lang, t } = useLanguage();
  const graduates = [
    {
      name: "Burcu Beril Kaya",
      image: "/images/lgs-burcu-beril-kaya.webp",
      labelTR: "LGS Başarı Öğrencisi",
      labelEN: "LGS Success Graduate",
      descTR: "Ortaokul yıllarında aldığı güçlü akademik temel ve bireysel koçluk desteğiyle hayallerini gerçeğe dönüştürdü.",
      descEN: "With the strong academic foundation and individual coaching she received in middle school, she turned her dreams into reality.",
      quoteTR: "\"Öğretmenlerim her zaman yanımdaydı. Başarım onların emeğiyle mümkün oldu.\"",
      quoteEN: "\"My teachers were always by my side. My success was possible thanks to their dedication.\"",
    },
    {
      name: "Kaan Ege Alp",
      image: "/images/lgs-kaan-ege-alp.webp",
      labelTR: "LGS Başarı Öğrencisi",
      labelEN: "LGS Success Graduate",
      descTR: "Kodlama, robotik ve güçlü akademik programla donandı; LGS'de harika bir başarı elde etti.",
      descEN: "Equipped with coding, robotics and a strong academic program, he achieved great success in LGS.",
      quoteTR: "\"Boğaziçi İlgi'de sadece ders değil, düşünmeyi öğrendim.\"",
      quoteEN: "\"At Boğaziçi İlgi, I didn't just learn lessons — I learned to think.\"",
    },
  ];

  return (
    <div className="py-4">
      <p className="text-center text-muted-foreground mb-10 max-w-xl mx-auto text-sm md:text-base">
        {t(
          "Boğaziçi İlgi Koleji'nden mezun olan başarılı öğrencilerimizle gurur duyuyoruz.",
          "We are proud of our successful graduates from Boğaziçi İlgi Koleji."
        )}
      </p>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {graduates.map((g, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-lg hover:shadow-xl transition-all"
          >
            <div className="relative h-56 overflow-hidden">
              <img
                src={g.image}
                alt={g.name}
                className="w-full h-full object-cover object-right"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white/50 via-white/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-primary/80 to-transparent">
                <span className="text-xs font-bold text-white/90 uppercase tracking-wide block mb-1">
                  {lang === "tr" ? g.labelTR : g.labelEN}
                </span>
                <h3 className="text-xl font-display font-black text-white">{g.name}</h3>
              </div>
            </div>
            <div className="p-5">
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {lang === "tr" ? g.descTR : g.descEN}
              </p>
              <div className="flex gap-2 items-start bg-primary/5 rounded-xl p-4">
                <Quote className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                <p className="text-gray-700 text-sm italic leading-relaxed">
                  {lang === "tr" ? g.quoteTR : g.quoteEN}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function AchievementCard({ item }: { item: any }) {
    const Icon = item.icon;
    return (
        <Card className="hover:shadow-lg transition-shadow border-t-4 border-t-accent">
            <CardHeader className="flex flex-row items-start justify-between pb-2">
                <div className="bg-primary/5 p-2 rounded-lg text-primary">
                    <Icon className="w-6 h-6" />
                </div>
                <span className="text-sm font-bold text-accent px-2 py-1 bg-accent/10 rounded">
                    {item.year}
                </span>
            </CardHeader>
            <CardContent>
                <CardTitle className="font-display text-lg mb-2">{item.title}</CardTitle>
                <p className="text-sm text-muted-foreground">{item.description}</p>
            </CardContent>
        </Card>
    );
}
