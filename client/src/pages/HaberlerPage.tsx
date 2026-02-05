import { PageHeader } from "@/components/ui/PageHeader";
import { NEWS_CONTENT, ANNOUNCEMENTS } from "@/lib/mock-news";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, ChevronRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useRoute } from "wouter";

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
                <div className="container py-16 px-4 max-w-4xl">
                    <Link href="/haberler">
                        <Button variant="ghost" className="mb-6 pl-0 hover:bg-transparent text-muted-foreground">
                            <ArrowLeft className="mr-2 w-4 h-4" /> Tüm Haberlere Dön
                        </Button>
                    </Link>

                    <article className="prose prose-lg prose-blue max-w-none">
                        <div className="not-prose mb-8 rounded-xl overflow-hidden shadow-lg">
                            <img src={newsItem.image} alt={newsItem.title} className="w-full h-auto object-cover max-h-[500px]" loading="lazy" decoding="async" />
                        </div>
                        <div className="flex items-center gap-4 mb-6 not-prose">
                            <Badge className="bg-accent text-primary font-bold">{newsItem.category}</Badge>
                            <span className="text-muted-foreground flex items-center text-sm">
                                <Calendar className="w-4 h-4 mr-1" /> {newsItem.date}
                            </span>
                        </div>
                        
                        <div dangerouslySetInnerHTML={{ __html: newsItem.content }} />
                        <p>{newsItem.summary}</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </article>
                </div>
            </div>
        )
    }

    return (
        <div className="bg-background min-h-screen">
            <PageHeader
                title="Haberler & Duyurular"
                breadcrumbs={[{ label: "Haberler", href: "/haberler" }]}
            />

            <div className="container py-16 px-4">
                <div className="grid lg:grid-cols-12 gap-12">
                    {/* Main News Feed */}
                    <div className="lg:col-span-8 space-y-8">
                        <h2 className="font-display text-3xl font-bold text-primary border-b border-border pb-4 mb-8">
                            Güncel Haberler
                        </h2>
                        
                        {NEWS_CONTENT.map((news) => (
                            <Card key={news.id} className="overflow-hidden group flex flex-col md:flex-row gap-0 hover:shadow-lg transition-shadow">
                                <div className="md:w-1/3 aspect-video md:aspect-auto overflow-hidden">
                                    <img 
                                        src={news.image} 
                                        alt={news.title} 
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        loading="lazy"
                                        decoding="async"
                                    />
                                </div>
                                <div className="md:w-2/3 flex flex-col">
                                    <CardHeader>
                                        <div className="flex items-center gap-3 mb-2">
                                            <Badge variant="secondary" className="bg-accent/20 text-accent-foreground border-accent/20">
                                                {news.category}
                                            </Badge>
                                            <div className="flex items-center text-xs text-muted-foreground">
                                                <Calendar className="w-3 h-3 mr-1" />
                                                {news.date}
                                            </div>
                                        </div>
                                        <CardTitle className="font-display text-xl group-hover:text-primary transition-colors">
                                            <Link href={`/haberler/${news.slug}`}>{news.title}</Link>
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-muted-foreground text-sm line-clamp-2">{news.summary}</p>
                                    </CardContent>
                                    <CardFooter className="mt-auto pt-0">
                                        <Link href={`/haberler/${news.slug}`}>
                                            <Button variant="link" className="px-0 text-primary font-semibold">
                                                Devamını Oku <ChevronRight className="ml-1 w-4 h-4" />
                                            </Button>
                                        </Link>
                                    </CardFooter>
                                </div>
                            </Card>
                        ))}
                    </div>

                    {/* Sidebar Announcements */}
                    <div className="lg:col-span-4 space-y-8">
                        <Card>
                            <CardHeader className="bg-primary text-white rounded-t-xl">
                                <CardTitle>Duyurular</CardTitle>
                            </CardHeader>
                            <CardContent className="p-0">
                                <div className="divide-y divide-border">
                                    {ANNOUNCEMENTS.map((announcement) => (
                                        <div key={announcement.id} className="p-4 hover:bg-muted/50 transition-colors">
                                            <div className="text-xs text-muted-foreground mb-1 font-mono">{announcement.date}</div>
                                            <h4 className="font-medium text-sm leading-snug">
                                                <Link href="/duyurular"><a className="hover:text-primary hover:underline">{announcement.title}</a></Link>
                                            </h4>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                            <CardFooter className="bg-muted/30 p-4 border-t border-border">
                                <Link href="/duyurular">
                                    <Button variant="outline" className="w-full text-xs">Tüm Duyurular</Button>
                                </Link>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}
