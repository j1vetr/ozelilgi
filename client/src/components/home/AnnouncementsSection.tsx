import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "wouter";
import { Button } from "../ui/button";
import { ANNOUNCEMENTS, NEWS_CONTENT } from "@/lib/mock-news";
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
};

export function AnnouncementsSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section ref={sectionRef} className="py-20 bg-muted/30 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-72 h-72 bg-brand-blue/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-orange/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      <div className="container px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-brand-orange/10 text-brand-orange px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            <Bell className="w-4 h-4" />
            Güncel Bilgiler
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Duyurular & Haberler
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            Okulumuzla ilgili en son gelişmeleri, etkinlikleri ve duyuruları takip edin.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-2 mb-5"
            >
              <Megaphone className="w-5 h-5 text-primary" />
              <h3 className="font-display text-xl font-bold text-foreground">Duyurular</h3>
            </motion.div>

            <div className="space-y-3">
              {ANNOUNCEMENTS.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.08 }}
                  data-testid={`announcement-card-${item.id}`}
                  className={`group relative bg-white rounded-xl border transition-all duration-300 hover:shadow-md hover:border-primary/20 ${
                    item.isImportant ? "border-brand-orange/40 ring-1 ring-brand-orange/10" : "border-border"
                  }`}
                >
                  {item.isImportant && (
                    <div className="absolute -top-2 right-4 bg-brand-orange text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                      Yeni
                    </div>
                  )}
                  <div className="p-4 flex items-start gap-4">
                    <div className="hidden sm:flex flex-col items-center min-w-[52px] py-1">
                      <span className="text-[11px] text-muted-foreground font-medium uppercase">
                        {item.date.split(".")[1] === "01" ? "Oca" :
                         item.date.split(".")[1] === "02" ? "Şub" :
                         item.date.split(".")[1] === "03" ? "Mar" :
                         item.date.split(".")[1] === "04" ? "Nis" :
                         item.date.split(".")[1] === "05" ? "May" :
                         item.date.split(".")[1] === "06" ? "Haz" :
                         item.date.split(".")[1] === "07" ? "Tem" :
                         item.date.split(".")[1] === "08" ? "Ağu" :
                         item.date.split(".")[1] === "09" ? "Eyl" :
                         item.date.split(".")[1] === "10" ? "Eki" :
                         item.date.split(".")[1] === "11" ? "Kas" : "Ara"}
                      </span>
                      <span className="text-2xl font-bold text-primary leading-none">
                        {item.date.split(".")[0]}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full border ${categoryColors[item.category] || "bg-gray-100 text-gray-600 border-gray-200"}`}>
                          {item.category}
                        </span>
                        <span className="sm:hidden text-[11px] text-muted-foreground flex items-center gap-1">
                          <Clock className="w-3 h-3" />{item.date}
                        </span>
                      </div>
                      <h4 className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors leading-snug mb-1">
                        {item.title}
                      </h4>
                      <p className="text-xs text-muted-foreground line-clamp-1">{item.summary}</p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-muted-foreground/40 group-hover:text-primary transition-colors mt-3 shrink-0" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-2 mb-5"
            >
              <Newspaper className="w-5 h-5 text-primary" />
              <h3 className="font-display text-xl font-bold text-foreground">Son Haberler</h3>
            </motion.div>

            <div className="space-y-4">
              {NEWS_CONTENT.map((news, index) => (
                <motion.div
                  key={news.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                >
                  <Link href={`/haberler/${news.slug}`}>
                    <div
                      data-testid={`news-card-${news.id}`}
                      className="group bg-white rounded-xl border border-border overflow-hidden hover:shadow-md hover:border-primary/20 transition-all duration-300"
                    >
                      <div className="aspect-[16/9] overflow-hidden">
                        <img
                          src={news.image}
                          alt={news.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                      <div className="p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-[11px] font-semibold text-brand-blue bg-brand-blue/10 px-2 py-0.5 rounded-full">
                            {news.category}
                          </span>
                          <span className="text-[11px] text-muted-foreground flex items-center gap-1">
                            <Calendar className="w-3 h-3" />{news.date}
                          </span>
                        </div>
                        <h4 className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors leading-snug mb-1.5">
                          {news.title}
                        </h4>
                        <p className="text-xs text-muted-foreground line-clamp-2">{news.summary}</p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-10"
        >
          <Link href="/haberler">
            <Button
              data-testid="button-all-announcements"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 px-8"
            >
              Tüm Duyurular & Haberler <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
