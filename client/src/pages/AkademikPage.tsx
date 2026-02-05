import { useRoute } from "wouter";
import { PageHeader } from "@/components/ui/PageHeader";
import { PAGE_CONTENT } from "@/lib/page-content";
import { Button } from "@/components/ui/button";
import { CheckCircle2, GraduationCap, BookOpen, Users } from "lucide-react";
import { Link } from "wouter";

export default function AkademikPage() {
  const [match, params] = useRoute("/akademik/:slug");
  const slug = params?.slug as keyof typeof PAGE_CONTENT.akademik;
  const content = slug && PAGE_CONTENT.akademik[slug];

  // Default to overview if no slug or invalid slug
  if (!content) {
      return (
          <div className="bg-background min-h-screen">
             <PageHeader title="Akademik" breadcrumbs={[{ label: "Akademik", href: "/akademik" }]} />
             <div className="container py-16 px-4">
                 <div className="grid md:grid-cols-3 gap-8">
                     {Object.entries(PAGE_CONTENT.akademik).map(([key, item]) => (
                         <div key={key} className="group bg-card rounded-xl overflow-hidden border border-border hover:shadow-xl transition-all hover:-translate-y-1">
                             <div className="h-48 bg-muted flex items-center justify-center text-primary/20 group-hover:bg-primary/5 transition-colors">
                                 {/* Placeholder Image */}
                                 <GraduationCap className="w-16 h-16" />
                             </div>
                             <div className="p-6">
                                 <h3 className="text-2xl font-display font-bold text-primary mb-2">{item.title}</h3>
                                 <p className="text-muted-foreground mb-4 line-clamp-2">{item.subtitle}</p>
                                 <Link href={`/akademik/${key}`}>
                                     <Button variant="outline" className="w-full">İncele</Button>
                                 </Link>
                             </div>
                         </div>
                     ))}
                 </div>
             </div>
          </div>
      )
  }

  return (
    <div className="bg-background min-h-screen">
      <PageHeader 
        title={content.title} 
        subtitle={content.subtitle}
        breadcrumbs={[
          { label: "Akademik", href: "/akademik" },
          { label: content.title, href: `/akademik/${slug}` }
        ]}
      />

      <div className="container py-16 px-4">
        <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 space-y-12">
                <div className="prose prose-lg max-w-none text-foreground/80">
                    <div dangerouslySetInnerHTML={{ __html: content.content }} />
                </div>

                {/* Features Grid */}
                <div className="grid sm:grid-cols-2 gap-6">
                    <div className="bg-muted/30 p-6 rounded-xl border border-border">
                        <BookOpen className="w-8 h-8 text-primary mb-4" />
                        <h4 className="font-bold text-lg mb-2">Zengin Müfredat</h4>
                        <p className="text-sm text-muted-foreground">MEB müfredatına ek olarak zenginleştirilmiş akademik içerik.</p>
                    </div>
                    <div className="bg-muted/30 p-6 rounded-xl border border-border">
                        <Users className="w-8 h-8 text-primary mb-4" />
                        <h4 className="font-bold text-lg mb-2">Bireysel Takip</h4>
                        <p className="text-sm text-muted-foreground">Her öğrenci için özel danışmanlık ve akademik takip sistemi.</p>
                    </div>
                </div>
            </div>

            {/* Sidebar CTA */}
            <div className="lg:col-span-4 space-y-8">
                <div className="sticky top-24">
                    <div className="bg-card border border-border rounded-xl shadow-lg p-6">
                        <h3 className="font-display text-xl font-bold mb-4">Erken Kayıt Fırsatı</h3>
                        <p className="text-sm text-muted-foreground mb-6">
                            2026-2027 Eğitim Öğretim yılı için erken kayıt avantajlarından yararlanın.
                        </p>
                        <Link href="/kayit/on-kayit">
                            <Button className="w-full bg-primary text-white hover:bg-primary/90 font-bold shadow-lg shadow-primary/20">
                                Ön Kayıt Formu
                            </Button>
                        </Link>
                    </div>

                    <div className="mt-8">
                        <h4 className="font-bold text-muted-foreground uppercase tracking-wider text-xs mb-4">Diğer Kademeler</h4>
                        <div className="space-y-2">
                             {Object.entries(PAGE_CONTENT.akademik).filter(([key]) => key !== slug).map(([key, item]) => (
                                 <Link key={key} href={`/akademik/${key}`}>
                                     <a className="block p-3 bg-muted/50 hover:bg-muted rounded-lg transition-colors text-sm font-medium">
                                         {item.title}
                                     </a>
                                 </Link>
                             ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
