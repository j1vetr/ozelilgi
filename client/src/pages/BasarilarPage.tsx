import { PageHeader } from "@/components/ui/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Award, Star } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ACHIEVEMENTS = [
  {
    title: "TÜBİTAK 2204 Bölge Birinciliği",
    category: "Akademik",
    year: "2025",
    description: "Fen Lisesi öğrencilerimiz Biyoloji alanında geliştirdikleri projeyle Marmara bölge birincisi oldular.",
    icon: Trophy
  },
  {
    title: "İstanbul Liseler Arası Basketbol Şampiyonluğu",
    category: "Spor",
    year: "2025",
    description: "Erkek Basketbol takımımız il genelinde şampiyon olarak Türkiye şampiyonasına katılmaya hak kazandı.",
    icon: Award
  },
  {
    title: "Uluslararası Robotik Yarışması Bronz Madalya",
    category: "Teknoloji",
    year: "2024",
    description: "Robotik takımımız Japonya'da düzenlenen yarışmada ülkemizi başarıyla temsil etti.",
    icon: Star
  },
  {
    title: "YKS Türkiye 56.sı",
    category: "Akademik",
    year: "2024",
    description: "Öğrencimiz Ahmet Yılmaz, YKS sayısal alanda Türkiye 56.sı olarak Tıp Fakültesine yerleşti.",
    icon: Trophy
  }
];

export default function BasarilarPage() {
  return (
    <div className="bg-background min-h-screen">
      <PageHeader 
        title="Başarılarımız" 
        subtitle="Azim, disiplin ve çalışmanın getirdiği gurur tablolarımız."
        breadcrumbs={[{ label: "Başarılar", href: "/basarilar" }]}
      />

      <div className="container py-16 px-4">
        <Tabs defaultValue="akademik" className="w-full">
            <div className="flex justify-center mb-8">
                <TabsList>
                    <TabsTrigger value="akademik">Akademik</TabsTrigger>
                    <TabsTrigger value="spor">Spor & Sanat</TabsTrigger>
                    <TabsTrigger value="mezunlar">Mezunlarımız</TabsTrigger>
                </TabsList>
            </div>

            <TabsContent value="akademik" className="mt-0">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {ACHIEVEMENTS.filter(a => a.category === "Akademik" || a.category === "Teknoloji").map((item, i) => (
                        <AchievementCard key={i} item={item} />
                    ))}
                </div>
            </TabsContent>

            <TabsContent value="spor" className="mt-0">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {ACHIEVEMENTS.filter(a => a.category === "Spor").map((item, i) => (
                        <AchievementCard key={i} item={item} />
                    ))}
                </div>
            </TabsContent>

            <TabsContent value="mezunlar" className="mt-0">
                <div className="text-center py-12">
                    <p className="text-muted-foreground">Mezun listemiz güncellenmektedir.</p>
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
