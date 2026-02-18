import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "wouter";
import { Button } from "../ui/button";
import { useLanguage } from "@/lib/i18n";
import { T, getNewsTranslated } from "@/lib/translations";
import {
  Calendar,
  ArrowRight,
  Bell,
  Megaphone,
  ChevronRight,
  Newspaper,
  Clock,
} from "lucide-react";

const categoryColors: Record<string, string> = {
  "Kayıt": "bg-brand-orange/15 text-brand-orange border-brand-orange/30",
  "Toplantı": "bg-brand-blue/15 text-brand-blue border-brand-blue/30",
  "Bilgilendirme": "bg-brand-green/15 text-brand-green border-brand-green/30",
  "Etkinlik": "bg-brand-yellow/15 text-yellow-700 border-brand-yellow/30",
  "Program": "bg-purple-100 text-purple-700 border-purple-200",
  "Enrollment": "bg-brand-orange/15 text-brand-orange border-brand-orange/30",
  "Meeting": "bg-brand-blue/15 text-brand-blue border-brand-blue/30",
  "Information": "bg-brand-green/15 text-brand-green border-brand-green/30",
  "Event": "bg-brand-yellow/15 text-yellow-700 border-brand-yellow/30",
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

export function AnnouncementsSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });
  const { lang, t } = useLanguage();
  const newsData = getNewsTranslated(lang);

  return (
    <section ref={sectionRef} className="py-14 bg-muted/30 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-72 h-72 bg-brand-blue/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-orange/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      <div className="container px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-1.5 bg-brand-orange/10 text-brand-orange px-3 py-1 rounded-full text-xs font-semibold mb-3">
            <Bell className="w-3.5 h-3.5" />
            {t("Güncel Bilgiler", "Latest Updates")}
          </div>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
            {T("announcements.title", lang)} & {T("announcements.news", lang)}
          </h2>
          <p className="text-muted-foreground mt-2 max-w-md mx-auto text-sm">
            {t("Okulumuzla ilgili en son gelişmeleri ve duyuruları takip edin.", "Follow the latest developments and announcements about our school.")}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-6 items-stretch">
          <div className="lg:col-span-3 flex flex-col">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="flex items-center gap-2 mb-3"
            >
              <Megaphone className="w-4 h-4 text-primary" />
              <h3 className="font-display text-base font-bold text-foreground">{T("announcements.title", lang)}</h3>
            </motion.div>

            <div className="space-y-2 flex-1 flex flex-col">
              {newsData.announcements.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.2 + index * 0.06 }}
                  data-testid={`announcement-card-${item.id}`}
                  className={`group relative bg-white rounded-lg border transition-all duration-300 hover:shadow-sm hover:border-primary/20 ${
                    item.isImportant ? "border-brand-orange/40 ring-1 ring-brand-orange/10" : "border-border"
                  }`}
                >
                  {item.isImportant && (
                    <div className="absolute -top-1.5 right-3 bg-brand-orange text-white text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                      {t("Yeni", "New")}
                    </div>
                  )}
                  <div className="px-3 py-2.5 flex items-center gap-3">
                    <div className="hidden sm:flex flex-col items-center min-w-[40px]">
                      <span className="text-[10px] text-muted-foreground font-medium uppercase leading-none">
                        {lang === "tr"
                          ? (monthMap[item.date.split(".")[1]] || "")
                          : (monthMapEn[item.date.split("/")[0]] || "")}
                      </span>
                      <span className="text-lg font-bold text-primary leading-tight">
                        {lang === "tr" ? item.date.split(".")[0] : item.date.split("/")[1]}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5 mb-0.5">
                        <span className={`text-[10px] font-semibold px-1.5 py-0 rounded-full border ${categoryColors[item.category] || "bg-gray-100 text-gray-600 border-gray-200"}`}>
                          {item.category}
                        </span>
                        <span className="sm:hidden text-[10px] text-muted-foreground flex items-center gap-0.5">
                          <Clock className="w-2.5 h-2.5" />{item.date}
                        </span>
                      </div>
                      <h4 className="font-medium text-[13px] text-foreground group-hover:text-primary transition-colors leading-snug">
                        {item.title}
                      </h4>
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 text-muted-foreground/30 group-hover:text-primary transition-colors shrink-0" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 flex flex-col">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="flex items-center gap-2 mb-3"
            >
              <Newspaper className="w-4 h-4 text-primary" />
              <h3 className="font-display text-base font-bold text-foreground">{t("Son Haberler", "Latest News")}</h3>
            </motion.div>

            <div className="flex-1 flex flex-col gap-2.5">
              {newsData.news.map((news, index) => (
                <motion.div
                  key={news.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.08 }}
                  className="flex-1 flex"
                >
                  <Link href={`/haberler/${news.slug}`} className="flex-1 flex">
                    <div
                      data-testid={`news-card-${news.id}`}
                      className="group bg-white rounded-lg border border-border overflow-hidden hover:shadow-sm hover:border-primary/20 transition-all duration-300 flex-1 flex flex-row"
                    >
                      <div className="w-24 sm:w-28 shrink-0 overflow-hidden">
                        <img
                          src={news.image}
                          alt={news.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                      <div className="p-2.5 flex-1 flex flex-col justify-center min-w-0">
                        <div className="flex items-center gap-1.5 mb-1">
                          <span className="text-[10px] font-semibold text-brand-blue bg-brand-blue/10 px-1.5 py-0 rounded-full">
                            {news.category}
                          </span>
                          <span className="text-[10px] text-muted-foreground flex items-center gap-0.5">
                            <Calendar className="w-2.5 h-2.5" />{news.date}
                          </span>
                        </div>
                        <h4 className="font-medium text-[13px] text-foreground group-hover:text-primary transition-colors leading-snug line-clamp-2">
                          {news.title}
                        </h4>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.7 }}
          className="text-center mt-8"
        >
          <Link href="/haberler">
            <Button
              data-testid="button-all-announcements"
              variant="outline"
              size="sm"
              className="border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 px-6 text-xs"
            >
              {T("announcements.all_announcements", lang)} & {T("announcements.news", lang)} <ArrowRight className="ml-1.5 w-3.5 h-3.5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
