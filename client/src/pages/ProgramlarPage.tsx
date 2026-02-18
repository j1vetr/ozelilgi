import { PageHeader } from "@/components/ui/PageHeader";
import { useLanguage } from "@/lib/i18n";
import { T, getProgramsTranslated } from "@/lib/translations";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, Cpu, Code, Palette, Activity, Heart, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useRoute } from "wouter";
import { cn } from "@/lib/utils";

const icons = {
    Globe, Cpu, Code, Palette, Activity, Heart
};

export default function ProgramlarPage() {
    const { lang, t } = useLanguage();
    const PROGRAMS_CONTENT = getProgramsTranslated(lang);
    const [match, params] = useRoute("/programlar/:slug");
    const slug = params?.slug;
    const program = slug ? PROGRAMS_CONTENT[slug as keyof typeof PROGRAMS_CONTENT] : null;

    if (slug && program) {
        const Icon = icons[program.icon as keyof typeof icons] || Activity;
        return (
            <div className="bg-background min-h-screen">
                <PageHeader
                    title={program.title}
                    breadcrumbs={[
                        { label: T("programs.title", lang), href: "/programlar" },
                        { label: program.title, href: `/programlar/${slug}` }
                    ]}
                />
                <div className="container py-16 px-4">
                    <div className="grid lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-2 space-y-8">
                             <div className="flex items-center gap-4 mb-6">
                                <div className="p-4 bg-primary/10 rounded-2xl text-primary">
                                    <Icon className="w-10 h-10" />
                                </div>
                                <h2 className="text-3xl font-bold text-primary">{t("Program Detayı", "Program Details")}</h2>
                             </div>
                             <p className="text-lg text-muted-foreground leading-relaxed">
                                 {program.description}
                                 <br/><br/>
                                 {t(
                                   "Bu program kapsamında öğrencilerimiz, alanında uzman eğitmenler eşliğinde teorik bilgileri pratiğe dökme fırsatı bulurlar. Modern atölyelerimizde ve laboratuvarlarımızda gerçekleştirilen çalışmalar, öğrencilerimizin 21. yüzyıl becerilerini geliştirmeyi hedefler.",
                                   "Within this program, our students have the opportunity to put theoretical knowledge into practice with expert instructors. The work carried out in our modern workshops and laboratories aims to develop our students' 21st century skills."
                                 )}
                             </p>
                             
                             <div className="bg-muted/30 p-6 rounded-xl border border-border">
                                <h3 className="font-bold text-xl mb-4">{t("Kazanımlar", "Outcomes")}</h3>
                                <ul className="space-y-3">
                                    {[1, 2, 3, 4].map(i => (
                                        <li key={i} className="flex items-center gap-3">
                                            <CheckCircle className="w-5 h-5 text-accent" />
                                            <span>{t("Öğrencinin ilgili alanda yetkinlik kazanması.", "Student gaining competence in the relevant field.")}</span>
                                        </li>
                                    ))}
                                </ul>
                             </div>
                        </div>
                        
                        <div>
                             <Card className="sticky top-24">
                                <CardHeader>
                                    <CardTitle>{t("Tüm Programlar", "All Programs")}</CardTitle>
                                </CardHeader>
                                <CardContent className="grid gap-2">
                                    {Object.entries(PROGRAMS_CONTENT).map(([key, p]) => (
                                        <Link key={key} href={`/programlar/${key}`}>
                                            <a className={cn(
                                                "block p-3 rounded-lg transition-colors text-sm font-medium",
                                                key === slug ? "bg-primary text-white" : "hover:bg-muted"
                                            )}>
                                                {p.title}
                                            </a>
                                        </Link>
                                    ))}
                                </CardContent>
                             </Card>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-background min-h-screen">
            <PageHeader
                title={T("programs.title", lang)}
                subtitle={T("programs.subtitle", lang)}
                breadcrumbs={[{ label: T("programs.title", lang), href: "/programlar" }]}
            />

            <div className="container py-16 px-4">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {Object.entries(PROGRAMS_CONTENT).map(([key, program], index) => {
                        const Icon = icons[program.icon as keyof typeof icons] || Activity;
                        
                        return (
                            <Card key={key} className="group hover:border-primary/50 transition-colors">
                                <CardHeader>
                                    <div className="w-12 h-12 rounded-lg bg-primary/5 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                                        <Icon className="w-6 h-6" />
                                    </div>
                                    <CardTitle className="font-display text-2xl group-hover:text-primary transition-colors">{program.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground mb-6">
                                        {program.description}
                                    </p>
                                    <Link href={`/programlar/${key}`}>
                                        <Button variant="ghost" className="p-0 hover:bg-transparent text-primary font-medium">
                                            {t("Detaylı Bilgi", "Learn More")} <ArrowRight className="ml-2 w-4 h-4" />
                                        </Button>
                                    </Link>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
