import { PageHeader } from "@/components/ui/PageHeader";
import { useLanguage } from "@/lib/i18n";
import { T, getNewsTranslated } from "@/lib/translations";
import { Badge } from "@/components/ui/badge";
import { Calendar, ChevronRight, ArrowLeft, Megaphone, Clock, Newspaper } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useRoute } from "wouter";

const categoryColors: Record<string, string> = {
    "Kayıt": "bg-brand-orange/15 text-brand-orange border-brand-orange/30",
    "Enrollment": "bg-brand-orange/15 text-brand-orange border-brand-orange/30",
    "Toplantı": "bg-brand-blue/15 text-brand-blue border-brand-blue/30",
    "Meeting": "bg-brand-blue/15 text-brand-blue border-brand-blue/30",
    "Bilgilendirme": "bg-brand-green/15 text-brand-green border-brand-green/30",
    "Information": "bg-brand-green/15 text-brand-green border-brand-green/30",
    "Etkinlik": "bg-brand-yellow/15 text-yellow-700 border-brand-yellow/30",
    "Event": "bg-brand-yellow/15 text-yellow-700 border-brand-yellow/30",
    "Program": "bg-purple-100 text-purple-700 border-purple-200",
    "Gelişme": "bg-brand-green/15 text-brand-green border-brand-green/30",
    "Development": "bg-brand-green/15 text-brand-green border-brand-green/30",
    "Spor": "bg-brand-orange/15 text-brand-orange border-brand-orange/30",
    "Sports": "bg-brand-orange/15 text-brand-orange border-brand-orange/30",
};

const monthMap: Record<string, string> = {
    "01": "Oca", "02": "Şub", "03": "Mar", "04": "Nis",
    "05": "May", "06": "Haz", "07": "Tem", "08": "Ağu",
    "09": "Eyl", "10": "Eki", "11": "Kas", "12": "Ara",
};

const monthMapEn: Record<string, string> = {
    "01": "Jan", "02": "Feb", "03": "Mar", "04": "Apr",
    "05": "May", "06": "Jun", "07": "Jul", "08": "Aug",
    "09": "Sep", "10": "Oct", "11": "Nov", "12": "Dec",
};

export default function HaberlerPage() {
    const { lang, t } = useLanguage();
    const newsData = getNewsTranslated(lang);
    const NEWS_CONTENT = newsData.news;
    const ANNOUNCEMENTS = newsData.announcements;
    const months = lang === "tr" ? monthMap : monthMapEn;

    const [match, params] = useRoute("/haberler/:slug");
    const slug = params?.slug;
    const newsItem = slug ? NEWS_CONTENT.find((n: any) => n.slug === slug) : null;

    if (slug && newsItem) {
        return (
            <div className="bg-background min-h-screen">
                <PageHeader
                    title={(newsItem as any).title}
                    breadcrumbs={[
                        { label: T("news.title", lang), href: "/haberler" },
                        { label: t("Detay", "Detail"), href: `/haberler/${slug}` }
                    ]}
                />
                <div className="container py-10 px-4 max-w-3xl">
                    <Link href="/haberler">
                        <Button variant="ghost" size="sm" className="mb-4 pl-0 hover:bg-transparent text-muted-foreground text-xs">
                            <ArrowLeft className="mr-1.5 w-3.5 h-3.5" /> {T("news.back", lang)}
                        </Button>
                    </Link>

                    <article>
                        <div className="mb-5 rounded-lg overflow-hidden shadow-md">
                            <img src={(newsItem as any).image} alt={(newsItem as any).title} className="w-full h-auto object-cover max-h-[360px]" loading="lazy" decoding="async" />
                        </div>

                        <div className="flex items-center gap-3 mb-4">
                            <Badge variant="secondary" className="text-[11px] px-2 py-0.5 bg-brand-blue/10 text-brand-blue border-0">{(newsItem as any).category}</Badge>
                            <span className="text-muted-foreground flex items-center text-xs">
                                <Calendar className="w-3 h-3 mr-1" /> {(newsItem as any).date}
                            </span>
                        </div>

                        <h1 className="font-display text-xl md:text-2xl font-bold text-foreground mb-4 leading-snug">
                            {(newsItem as any).title}
                        </h1>
                        
                        <div className="prose prose-sm prose-blue max-w-none text-sm leading-relaxed text-muted-foreground">
                            <div dangerouslySetInnerHTML={{ __html: (newsItem as any).content }} />
                            <p>{(newsItem as any).summary}</p>
                        </div>

                        <div className="mt-8 pt-6 border-t border-border">
                            <h3 className="font-display text-sm font-bold text-foreground mb-3">{t("Diğer Haberler", "Other News")}</h3>
                            <div className="space-y-2">
                                {NEWS_CONTENT.filter((n: any) => n.slug !== slug).map((news: any) => (
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
                title={T("news.title", lang)}
                breadcrumbs={[{ label: T("news.title", lang), href: "/haberler" }]}
            />

            <div className="container py-10 px-4">
                <div className="grid lg:grid-cols-5 gap-6 items-stretch">
                    <div className="lg:col-span-3 flex flex-col">
                        <div className="flex items-center gap-2 mb-4">
                            <Newspaper className="w-4 h-4 text-primary" />
                            <h2 className="font-display text-lg font-bold text-foreground">{T("news.tab.news", lang)}</h2>
                        </div>
                        
                        <div className="flex flex-col gap-3 flex-1">
                            {NEWS_CONTENT.map((news: any) => (
                                <Link key={news.id} href={`/haberler/${news.slug}`}>
                                    <div
                                        data-testid={`news-list-card-${news.id}`}
                                        className="group bg-white rounded-lg border border-border overflow-hidden hover:shadow-md hover:border-primary/20 transition-all duration-300 flex flex-row h-full"
                                    >
                                        <div className="w-36 sm:w-44 shrink-0 overflow-hidden">
                                            <img 
                                                src={news.image} 
                                                alt={news.title} 
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                                loading="lazy"
                                                decoding="async"
                                            />
                                        </div>
                                        <div className="p-3 sm:p-4 flex-1 flex flex-col justify-center min-w-0">
                                            <div className="flex items-center gap-2 mb-1">
                                                <Badge variant="secondary" className="text-[10px] sm:text-[11px] px-2 py-0.5 bg-brand-blue/10 text-brand-blue border-0">
                                                    {news.category}
                                                </Badge>
                                                <span className="text-[10px] sm:text-[11px] text-muted-foreground flex items-center gap-0.5">
                                                    <Calendar className="w-3 h-3" />{news.date}
                                                </span>
                                            </div>
                                            <h3 className="font-semibold text-sm sm:text-[15px] text-foreground group-hover:text-primary transition-colors leading-snug mb-1">
                                                {news.title}
                                            </h3>
                                            <p className="text-xs text-muted-foreground line-clamp-2 hidden sm:block">{news.summary}</p>
                                            <span className="text-[11px] text-primary font-medium flex items-center gap-0.5 group-hover:gap-1.5 transition-all mt-1">
                                                {T("announcements.read_more", lang)} <ChevronRight className="w-3.5 h-3.5" />
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="lg:col-span-2 flex flex-col">
                        <div className="flex items-center gap-2 mb-4">
                            <Megaphone className="w-4 h-4 text-primary" />
                            <h2 className="font-display text-lg font-bold text-foreground">{T("news.tab.announcements", lang)}</h2>
                        </div>

                        <div className="bg-white rounded-lg border border-border overflow-hidden flex-1 flex flex-col">
                            <div className="bg-primary px-3 py-2">
                                <span className="text-white text-[11px] font-semibold tracking-wide uppercase">{t("Son Duyurular", "Latest Announcements")}</span>
                            </div>
                            <div className="divide-y divide-border flex-1">
                                {ANNOUNCEMENTS.map((announcement: any) => (
                                    <div
                                        key={announcement.id}
                                        data-testid={`announcement-list-${announcement.id}`}
                                        className={`px-3 py-3 hover:bg-muted/40 transition-colors ${announcement.isImportant ? "bg-brand-orange/5" : ""}`}
                                    >
                                        <div className="flex items-center gap-2.5">
                                            <div className="hidden sm:flex flex-col items-center min-w-[36px]">
                                                <span className="text-[9px] text-muted-foreground font-medium uppercase leading-none">
                                                    {months[announcement.date.split(".")[1] || announcement.date.split("/")[0]] || ""}
                                                </span>
                                                <span className="text-base font-bold text-primary leading-tight">
                                                    {announcement.date.split(".")[0] || announcement.date.split("/")[1]}
                                                </span>
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-center gap-1.5 mb-0.5">
                                                    <span className={`text-[10px] font-semibold px-1.5 py-0 rounded-full border ${categoryColors[announcement.category] || "bg-gray-100 text-gray-600 border-gray-200"}`}>
                                                        {announcement.category}
                                                    </span>
                                                    {announcement.isImportant && (
                                                        <span className="text-[9px] font-bold text-brand-orange bg-brand-orange/15 px-1.5 py-0 rounded-full">{t("Yeni", "New")}</span>
                                                    )}
                                                    <span className="sm:hidden text-[9px] text-muted-foreground flex items-center gap-0.5">
                                                        <Clock className="w-2.5 h-2.5" />{announcement.date}
                                                    </span>
                                                </div>
                                                <h4 className="font-medium text-[13px] text-foreground leading-snug">{announcement.title}</h4>
                                                <p className="text-[11px] text-muted-foreground mt-0.5 line-clamp-2">{announcement.summary}</p>
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
