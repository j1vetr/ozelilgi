import { useRoute } from "wouter";
import { PageHeader } from "@/components/ui/PageHeader";
import { PAGE_CONTENT } from "@/lib/page-content";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText } from "lucide-react";
import { Link } from "wouter";

export default function KurumsalPage() {
  const [match, params] = useRoute("/kurumsal/:slug");
  const slug = params?.slug as keyof typeof PAGE_CONTENT.kurumsal;
  const content = slug && PAGE_CONTENT.kurumsal[slug];

  if (!content) {
    return (
      <div>
         <PageHeader title="Kurumsal" breadcrumbs={[{ label: "Kurumsal", href: "/kurumsal" }]} />
         <div className="container py-20 px-4 text-center">
            <h2 className="text-2xl font-bold mb-4">Sayfa Bulunamadı</h2>
            <Link href="/"><Button>Anasayfaya Dön</Button></Link>
         </div>
      </div>
    );
  }

  return (
    <div className="bg-background min-h-screen">
      <PageHeader 
        title={content.title} 
        breadcrumbs={[
          { label: "Kurumsal", href: "/kurumsal" },
          { label: content.title, href: `/kurumsal/${slug}` }
        ]}
      />

      <div className="container py-16 px-4">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-8">
            <Card className="border-none shadow-lg overflow-hidden">
              <CardContent className="p-8 md:p-12 prose prose-lg prose-blue max-w-none">
                 {/* Safe HTML rendering for content */}
                 <div dangerouslySetInnerHTML={{ __html: content.content }} />
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-muted/30 p-6 rounded-xl border border-border">
              <h3 className="font-display text-xl font-bold text-primary mb-4 border-b border-primary/10 pb-2">
                Kurumsal
              </h3>
              <nav className="flex flex-col space-y-2">
                {Object.entries(PAGE_CONTENT.kurumsal).map(([key, item]) => (
                  <Link key={key} href={`/kurumsal/${key}`}>
                    <a className={`flex items-center justify-between p-3 rounded-md transition-all ${key === slug ? "bg-primary text-white shadow-md" : "hover:bg-background hover:shadow-sm"}`}>
                      <span>{item.title}</span>
                      {key === slug && <ArrowRight className="w-4 h-4" />}
                    </a>
                  </Link>
                ))}
              </nav>
            </div>

            <div className="bg-primary text-white p-8 rounded-xl shadow-xl relative overflow-hidden">
               <div className="relative z-10">
                 <h3 className="font-display text-2xl font-bold mb-4">Bilgi Alın</h3>
                 <p className="text-white/80 mb-6">Detaylı bilgi için bizimle iletişime geçebilirsiniz.</p>
                 <Link href="/iletisim">
                   <Button variant="secondary" className="w-full font-bold">İletişime Geç</Button>
                 </Link>
               </div>
               <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
