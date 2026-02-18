import { PageHeader } from "@/components/ui/PageHeader";
import { useLanguage } from "@/lib/i18n";
import { T } from "@/lib/translations";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Award, Star } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
                <div className="text-center py-12">
                    <p className="text-muted-foreground">{t("Mezun listemiz güncellenmektedir.", "Our alumni list is being updated.")}</p>
                </div>
            </TabsContent>
        </Tabs>
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
