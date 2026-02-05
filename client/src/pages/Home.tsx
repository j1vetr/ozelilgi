import { HeroSlider } from "@/components/home/HeroSlider";
import { FeatureGrid } from "@/components/home/FeatureGrid";
import { StatsTicker } from "@/components/home/StatsTicker";
import { TestimonialsScroll } from "@/components/home/TestimonialsScroll";
import { Button } from "@/components/ui/button";
import { ArrowRight, Instagram, Facebook, Twitter, Linkedin } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden font-sans">
      
      {/* 1. Full Screen Hero Slider */}
      <HeroSlider />

      {/* 2. Features Grid */}
      <FeatureGrid />

      {/* 3. Stats Section */}
      <StatsTicker />

      {/* 4. About Preview Section (Split Layout) */}
      <section className="py-24 bg-muted/20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
               <div className="absolute -inset-4 bg-brand-orange/10 rounded-[2.5rem] rotate-3"></div>
               <img 
                 src="/images/school-exterior-2.jpg" 
                 alt="Campus Life" 
                 className="relative rounded-[2rem] shadow-2xl object-cover w-full h-[500px]" 
               />
               <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl border border-border/50 hidden md:block animate-bounce-slow">
                  <div className="flex items-center gap-4">
                     <div className="w-12 h-12 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green font-bold text-xl">
                        A+
                     </div>
                     <div>
                        <div className="font-bold text-primary text-lg">Eğitimde Kalite</div>
                        <div className="text-sm text-muted-foreground">Uluslararası Standartlar</div>
                     </div>
                  </div>
               </div>
            </div>
            
            <div className="space-y-8">
               <div className="inline-block px-3 py-1 bg-brand-blue/10 text-brand-blue font-bold rounded-lg text-sm">
                  BOĞAZİÇİ İLGİ KOLEJİ
               </div>
               <h2 className="text-4xl md:text-5xl font-display font-bold text-primary leading-tight">
                  Her Öğrenci <br/>
                  <span className="text-brand-orange">Özeldir.</span>
               </h2>
               <p className="text-lg text-muted-foreground leading-relaxed">
                  Eğitim felsefemizin temelinde, her çocuğun biricik olduğu gerçeği yatar. Öğrencilerimizin akademik başarılarını desteklerken, onların duygusal ve sosyal gelişimlerini de önemsiyoruz.
               </p>
               <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Link href="/kurumsal/hakkimizda">
                     <Button className="h-14 px-8 rounded-full bg-primary text-white hover:bg-primary/90 text-lg">
                        Hakkımızda <ArrowRight className="ml-2 w-5 h-5" />
                     </Button>
                  </Link>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Testimonials */}
      <TestimonialsScroll />

      {/* 6. Big CTA / Footer Pre-roll */}
      <section className="py-32 container px-4">
        <div className="bg-primary rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden group">
          {/* Animated Background Blobs */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
             <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-brand-blue rounded-full blur-[100px]" />
             <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-brand-orange rounded-full blur-[100px]" />
          </div>
          
          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-8">
              Büyük Ailemize <br/> Katılmaya Hazır Mısınız?
            </h2>
            <p className="text-white/70 text-xl mb-12 max-w-2xl mx-auto">
              Erken kayıt avantajları ve bursluluk sınavı başvuruları için formu doldurun, sizi arayalım.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/kayit/on-kayit">
                <Button className="h-16 px-12 rounded-full bg-brand-orange text-white font-bold text-lg hover:bg-white hover:text-primary transition-all shadow-xl shadow-brand-orange/20">
                  Başvuru Yap
                </Button>
              </Link>
              <div className="flex gap-4 items-center justify-center mt-6 sm:mt-0">
                 <a href="#" className="p-4 bg-white/10 rounded-full hover:bg-white/20 text-white transition-colors"><Instagram className="w-6 h-6" /></a>
                 <a href="#" className="p-4 bg-white/10 rounded-full hover:bg-white/20 text-white transition-colors"><Facebook className="w-6 h-6" /></a>
                 <a href="#" className="p-4 bg-white/10 rounded-full hover:bg-white/20 text-white transition-colors"><Twitter className="w-6 h-6" /></a>
                 <a href="#" className="p-4 bg-white/10 rounded-full hover:bg-white/20 text-white transition-colors"><Linkedin className="w-6 h-6" /></a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
