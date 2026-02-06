import { PageHeader } from "@/components/ui/PageHeader";
import { NEWS_CONTENT, ANNOUNCEMENTS } from "@/lib/mock-news";
import { Badge } from "@/components/ui/badge";
import { Calendar, ChevronRight, ArrowLeft, Megaphone, Clock, Newspaper } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useRoute } from "wouter";

const categoryColors: Record<string, string> = {
    "Kayıt": "bg-brand-orange/15 text-brand-orange border-brand-orange/30",
    "Toplantı": "bg-brand-blue/15 text-brand-blue border-brand-blue/30",
    "Bilgilendirme": "bg-brand-green/15 text-brand-green border-brand-green/30",
    "Etkinlik": "bg-brand-yellow/15 text-yellow-700 border-brand-yellow/30",
    "Program": "bg-purple-100 text-purple-700 border-purple-200",
};

const monthMap: Record<string, string> = {
    "01": "Oca", "02": "Şub", "03": "Mar", "04": "Nis",
    "05": "May", "06": "Haz", "07": "Tem", "08": "Ağu",
    "09": "Eyl", "10": "Eki", "11": "Kas", "12": "Ara",
};

export default function HaberlerPage() {
    const [match, params] = useRoute("/haberler/:slug");
    const slug = params?.slug;
    const newsItem = slug ? NEWS_CONTENT.find(n => n.slug === slug) : null;

    if (slug && newsItem) {
        return (
            <div className="bg-background min-h-screen">
                <PageHeader
                    title={newsItem.title}
                    breadcrumbs={[
                        { label: "Haberler", href: "/haberler" },
                        { label: "Detay", href: `/haberler/${slug}` }
                    ]}
                />
                <div className="container py-10 px-4 max-w-3xl">
                    <Link href="/haberler">
                        <Button variant="ghost" size="sm" className="mb-4 pl-0 hover:bg-transparent text-muted-foreground text-xs">
                            <ArrowLeft className="mr-1.5 w-3.5 h-3.5" /> Tüm Haberlere Dön
                        </Button>
                    </Link>

                    <article>
                        <div className="mb-5 rounded-lg overflow-hidden shadow-md">
                            <img src={newsItem.image} alt={newsItem.title} className="w-full h-auto object-cover max-h-[360px]" loading="lazy" decoding="async" />
                        </div>

                        <div className="flex items-center gap-3 mb-4">
                            <Badge variant="secondary" className="text-[11px] px-2 py-0.5 bg-brand-blue/10 text-brand-blue border-0">{newsItem.category}</Badge>
                            <span className="text-muted-foreground flex items-center text-xs">
                                <Calendar className="w-3 h-3 mr-1" /> {newsItem.date}
                            </span>
                        </div>

                        <h1 className="font-display text-xl md:text-2xl font-bold text-foreground mb-4 leading-snug">
                            {newsItem.title}
                        </h1>
                        
                        <div className="prose prose-sm prose-blue max-w-none text-sm leading-relaxed text-muted-foreground">
                            <div dangerouslySetInnerHTML={{ __html: newsItem.content }} />
                            <p>{newsItem.summary}</p>
                        </div>

                        <div className="mt-8 pt-6 border-t border-border">
                            <h3 className="font-display text-sm font-bold text-foreground mb-3">Diğer Haberler</h3>
                            <div className="space-y-2">
                                {NEWS_CONTENT.filter(n => n.slug !== slug).map((news) => (
                                    <Link key={news.id} href={`/haberler/${news.slug}`}>
                                        <div className="group flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors">
                                            <div className="w-16 h-12 rounded overflow-hidden shrink-0">
                                                <img src={news.image} alt={news.title} className="w-full h-full object-cover" loading="lazy" decoding="async" />
                                            </div>
                                            <div className="min-w-0">
                                                <h4 className="text-xs font-medium text-foreground group-hover:text-primary transition-colors line-clamp-1">{news.title}</h4>
                                                <span className="text-[10px] text-muted-foreground">{news.date}</span>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-background min-h-screen">
            <PageHeader
                title="Haberler & Duyurular"
                breadcrumbs={[{ label: "Haberler", href: "/haberler" }]}
            />

            <div className="container py-10 px-4">
                <div className="grid lg:grid-cols-5 gap-6">
                    <div className="lg:col-span-3">
                        <div className="flex items-center gap-2 mb-4">
                            <Newspaper className="w-4 h-4 text-primary" />
                            <h2 className="font-display text-lg font-bold text-foreground">Güncel Haberler</h2>
                        </div>
                        
                        <div className="space-y-2.5">
                            {NEWS_CONTENT.map((news) => (
                                <Link key={news.id} href={`/haberler/${news.slug}`}>
                                    <div
                                        data-testid={`news-list-card-${news.id}`}
                                        className="group bg-white rounded-lg border border-border overflow-hidden hover:shadow-sm hover:border-primary/20 transition-all duration-300 flex flex-row h-[100px]"
                                    >
                                        <div className="w-28 sm:w-36 shrink-0 overflow-hidden">
                                            <img 
                                                src={news.image} 
                                                alt={news.title} 
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                                loading="lazy"
                                                decoding="async"
                                            />
                                        </div>
                                        <div className="p-2.5 flex-1 flex flex-col justify-center min-w-0">
                                            <div className="flex items-center gap-2 mb-0.5">
                                                <Badge variant="secondary" className="text-[10px] px-1.5 py-0 bg-brand-blue/10 text-brand-blue border-0">
                                                    {news.category}
                                                </Badge>
                                                <span className="text-[10px] text-muted-foreground flex items-center gap-0.5">
                                                    <Calendar className="w-2.5 h-2.5" />{news.date}
                                                </span>
                                            </div>
                                            <h3 className="font-semibold text-[13px] text-foreground group-hover:text-primary transition-colors leading-snug mb-0.5">
                                                {news.title}
                                            </h3>
                                            <p className="text-[11px] text-muted-foreground line-clamp-1 hidden sm:block">{news.summary}</p>
                                            <span className="text-[10px] text-primary font-medium flex items-center gap-0.5 group-hover:gap-1.5 transition-all mt-0.5">
                                                Devamını Oku <ChevronRight className="w-3 h-3" />
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-2 mb-4">
                            <Megaphone className="w-4 h-4 text-primary" />
                            <h2 className="font-display text-lg font-bold text-foreground">Duyurular</h2>
                        </div>

                        <div className="bg-white rounded-lg border border-border overflow-hidden">
                            <div className="bg-primary px-3 py-2">
                                <span className="text-white text-[11px] font-semibold tracking-wide uppercase">Son Duyurular</span>
                            </div>
                            <div className="divide-y divide-border">
                                {ANNOUNCEMENTS.map((announcement) => (
                                    <div
                                        key={announcement.id}
                                        data-testid={`announcement-list-${announcement.id}`}
                                        className={`px-3 py-2 hover:bg-muted/40 transition-colors ${announcement.isImportant ? "bg-brand-orange/5" : ""}`}
                                    >
                                        <div className="flex items-center gap-2.5">
                                            <div className="hidden sm:flex flex-col items-center min-w-[32px]">
                                                <span className="text-[9px] text-muted-foreground font-medium uppercase leading-none">
                                                    {monthMap[announcement.date.split(".")[1]] || ""}
                                                </span>
                                                <span className="text-sm font-bold text-primary leading-tight">
                                                    {announcement.date.split(".")[0]}
                                                </span>
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-center gap-1.5 mb-0.5">
                                                    <span className={`text-[9px] font-semibold px-1.5 py-0 rounded-full border ${categoryColors[announcement.category] || "bg-gray-100 text-gray-600 border-gray-200"}`}>
                                                        {announcement.category}
                                                    </span>
                                                    {announcement.isImportant && (
                                                        <span className="text-[9px] font-bold text-brand-orange bg-brand-orange/15 px-1.5 py-0 rounded-full">Yeni</span>
                                                    )}
                                                    <span className="sm:hidden text-[9px] text-muted-foreground flex items-center gap-0.5">
                                                        <Clock className="w-2.5 h-2.5" />{announcement.date}
                                                    </span>
                                                </div>
                                                <h4 className="font-medium text-[12px] text-foreground leading-snug">{announcement.title}</h4>
                                                <p className="text-[11px] text-muted-foreground mt-0.5 line-clamp-1">{announcement.summary}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
