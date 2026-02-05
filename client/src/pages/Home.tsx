import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SCHOOL_INFO, MOCK_CONTENT } from "@/lib/constants";
import { ArrowRight, BookOpen, Trophy, Users, Star, GraduationCap } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  const { hero, stats, features } = MOCK_CONTENT.home;

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background - In production, use a real image or video */}
        <div className="absolute inset-0 z-0 bg-primary">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/40 z-10" />
           {/* Abstract shapes/grain can be added here via CSS or SVG */}
           <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
        </div>

        <div className="container relative z-20 px-4 pt-20">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-accent/20 border border-accent/30 backdrop-blur-sm">
                <span className="text-accent font-medium text-sm tracking-wide uppercase">2026-2027 Kayıt Dönemi Başladı</span>
              </div>
              <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.1] mb-6 drop-shadow-lg">
                Geleceğe <br/>
                <span className="text-accent italic">Güvenle.</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-xl leading-relaxed font-light">
                {hero.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/kayit/on-kayit">
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary font-bold text-lg h-14 px-8 rounded-full shadow-xl shadow-accent/10 transition-all hover:scale-105">
                    {hero.cta}
                  </Button>
                </Link>
                <Link href="/akademik">
                  <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 h-14 px-8 rounded-full backdrop-blur-sm">
                    Akademik Programlar
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 z-20"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-accent to-transparent"></div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary text-white py-12 border-t border-white/5 relative z-20 -mt-10 rounded-t-[3rem] shadow-[0_-20px_40px_rgba(0,0,0,0.2)]">
        <div className="container px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="font-display text-4xl md:text-5xl font-bold text-accent mb-2">{stat.value}</div>
                <div className="text-sm md:text-base text-white/60 font-medium tracking-wide uppercase">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features / Introduction */}
      <section className="py-24 bg-background">
        <div className="container px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-4">Neden {SCHOOL_INFO.shortName}?</h2>
            <p className="text-muted-foreground text-lg">
              Öğrencilerimizi sadece sınavlara değil, hayata hazırlıyoruz. Bütünsel eğitim modelimizle her çocuğun potansiyelini en üst düzeye çıkarıyoruz.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group p-8 rounded-2xl bg-white border border-border/50 hover:border-accent/50 shadow-sm hover:shadow-xl hover:shadow-accent/5 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/5 flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-accent transition-all duration-300">
                  {index === 0 && <Users className="w-7 h-7" />}
                  {index === 1 && <Trophy className="w-7 h-7" />}
                  {index === 2 && <Star className="w-7 h-7" />}
                </div>
                <h3 className="font-display text-xl font-bold text-primary mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Levels Preview */}
      <section className="py-24 bg-muted/30">
        <div className="container px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <span className="text-accent font-bold uppercase tracking-widest text-sm">Akademik Birimler</span>
              <h2 className="font-display text-4xl font-bold text-primary mt-2">Eğitim Yolculuğu</h2>
            </div>
            <Link href="/akademik">
              <Button variant="ghost" className="group text-primary">
                Tüm Programları İncele <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Anaokulu", desc: "Keşfeden, sorgulayan minik zihinler.", bg: "bg-blue-100" },
              { title: "İlkokul", desc: "Temel beceriler ve güçlü akademik altyapı.", bg: "bg-orange-100" },
              { title: "Ortaokul", desc: "Liselere hazırlık ve kariyer planlama.", bg: "bg-emerald-100" },
            ].map((level, i) => (
              <div key={i} className="relative group overflow-hidden rounded-2xl aspect-[4/5] md:aspect-[3/4] cursor-pointer">
                {/* Placeholder background - replace with image */}
                <div className={`absolute inset-0 ${level.bg} transition-transform duration-700 group-hover:scale-105`}>
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent" />
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-display text-3xl font-bold text-white mb-2">{level.title}</h3>
                  <p className="text-white/80 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {level.desc}
                  </p>
                  <span className="inline-flex items-center text-accent font-medium text-sm group-hover:underline">
                    Detaylı Bilgi <ArrowRight className="ml-1 w-3 h-3" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 translate-x-1/4" />
        <div className="container px-4 relative z-10 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
            Aramıza Katılmaya Hazır mısınız?
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-10">
            Erken kayıt avantajlarından yararlanmak ve okulumuzu yakından tanımak için ön başvuru formunu doldurun.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Link href="/kayit/on-kayit">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-bold h-14 px-8 rounded-full">
                Ön Kayıt Oluştur
              </Button>
            </Link>
            <Link href="/iletisim">
              <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 h-14 px-8 rounded-full">
                Bize Ulaşın
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
