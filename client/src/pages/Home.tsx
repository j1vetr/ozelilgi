import { HeroModern } from "@/components/home/HeroModern";
import { BentoGrid } from "@/components/home/BentoGrid";
import { StatsTicker } from "@/components/home/StatsTicker";
import { TestimonialsScroll } from "@/components/home/TestimonialsScroll";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/animations";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      
      {/* 1. Modern Hero */}
      <HeroModern />

      {/* 2. Introduction & Mission */}
      <section className="py-24 container px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
              Eğitimde <span className="text-accent">Yenilikçi</span> <br/>
              Yaklaşım
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Geleneksel eğitim metotlarını modern teknolojilerle harmanlayarak, öğrencilerimize 21. yüzyıl yetkinliklerini kazandırıyoruz. Sorgulayan, üreten ve kendine güvenen bireyler yetiştirmek önceliğimizdir.
            </p>
            <ul className="space-y-4 mb-8">
              {['Bireysel Öğrenme Planı', 'Çift Dilli Eğitim', 'Robotik ve Kodlama', 'Sanat ve Spor Akademileri'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-foreground font-medium">
                  <CheckCircle2 className="w-5 h-5 text-accent" />
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/kurumsal/egitim-yaklasimimiz">
              <Button variant="outline" className="rounded-full border-primary text-primary hover:bg-primary hover:text-white px-8 h-12">
                Eğitim Modelimizi İnceleyin
              </Button>
            </Link>
          </FadeIn>
          
          <div className="relative">
             <div className="absolute inset-0 bg-gradient-to-tr from-accent to-primary rounded-[2rem] transform rotate-6 opacity-20"></div>
             <img 
               src="https://images.unsplash.com/photo-1577896334614-529858534699?q=80&w=800&auto=format&fit=crop" 
               alt="Classroom" 
               className="relative rounded-[2rem] shadow-2xl object-cover w-full h-[500px]" 
             />
          </div>
        </div>
      </section>

      {/* 3. Stats Ticker */}
      <StatsTicker />

      {/* 4. Programs (Bento Grid) */}
      <section className="py-32 bg-secondary/30">
        <div className="container px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent font-bold uppercase tracking-widest text-sm mb-2 block">Keşfet</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-4">Eğitim Programlarımız</h2>
            <p className="text-muted-foreground text-lg">
              Akademik başarıyı sosyal ve kültürel gelişimle destekleyen bütüncül bir program sunuyoruz.
            </p>
          </div>
          
          <BentoGrid />
        </div>
      </section>

      {/* 5. Testimonials (Infinite Scroll) */}
      <TestimonialsScroll />

      {/* 6. CTA Section */}
      <section className="py-32 container px-4">
        <div className="bg-primary rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden group">
          {/* Animated Background */}
          <div className="absolute inset-0 opacity-20">
             <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_var(--accent),transparent_70%)] animate-pulse" style={{ animationDuration: '4s' }}></div>
          </div>
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-8">
              Geleceğin Lideri Olmaya <br/> Hazır mısın?
            </h2>
            <p className="text-white/70 text-xl mb-12">
              Sınırlı kontenjan ve erken kayıt avantajlarından yararlanmak için hemen başvurun.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/kayit/on-kayit">
                <Button className="h-16 px-10 rounded-full bg-accent text-primary font-bold text-lg hover:bg-white hover:scale-105 transition-all shadow-xl shadow-accent/20">
                  Ön Kayıt Oluştur <ArrowRight className="ml-2" />
                </Button>
              </Link>
              <Link href="/iletisim">
                <Button variant="outline" className="h-16 px-10 rounded-full border-white/20 text-white hover:bg-white/10 text-lg">
                  Bize Ulaşın
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
