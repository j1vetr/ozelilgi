import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "../ui/button";

export function HeroModern() {
  return (
    <div className="relative min-h-[90vh] w-full overflow-hidden bg-background flex items-center justify-center pt-20">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-primary/5 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-[-20%] left-0 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[100px]" />
      </div>

      <div className="container relative z-20 flex flex-col items-center text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent-foreground text-sm font-semibold mb-8 border border-accent/20 backdrop-blur-sm mx-auto">
             <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
             <span>2026-2027 Eğitim Dönemi Kayıtları Başladı</span>
          </div>
          
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-8 text-primary tracking-tight">
            Geleceği <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-800 to-accent">
              Bugünden Tasarla.
            </span>
          </h1>
          
          <p className="text-lg md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Özel Boğaziçi İlgi Koleji olarak, her öğrencinin potansiyelini keşfediyor, onları sadece sınavlara değil hayata hazırlıyoruz.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/kayit/on-kayit">
              <Button size="lg" className="h-16 px-10 text-lg rounded-full bg-primary hover:bg-primary/90 text-white shadow-xl shadow-primary/25 transition-all hover:scale-105 ring-4 ring-primary/5">
                Hemen Başvur <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/kampus">
              <Button variant="outline" size="lg" className="h-16 px-10 text-lg rounded-full border-2 border-primary/10 hover:bg-primary/5 hover:border-primary/30 group bg-white/50 backdrop-blur-sm">
                <Play className="w-4 h-4 mr-2 fill-current group-hover:text-primary transition-colors" /> Kampüsü Keşfet
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Floating Visuals - Centered below text */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-20 w-full max-w-6xl relative"
        >
           {/* Main Hero Image with Parallax feel */}
           <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white/50 aspect-[16/9] md:aspect-[21/9]">
              <img 
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2000&auto=format&fit=crop" 
                alt="Campus Life" 
                className="w-full h-full object-cover transform scale-105 hover:scale-100 transition-transform duration-[2s]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 text-white text-left">
                  <div className="text-sm md:text-base uppercase tracking-widest font-semibold opacity-80 mb-2">Başarı Hikayesi</div>
                  <div className="text-2xl md:text-4xl font-bold font-display">TÜBİTAK Bölge Birinciliği</div>
              </div>
           </div>

           {/* Floating Cards */}
           <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-12 -right-4 md:right-12 bg-white p-6 rounded-2xl shadow-xl border border-border/50 hidden md:block"
           >
              <div className="flex items-center gap-4">
                 <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent-foreground font-bold text-xl">A+</div>
                 <div>
                    <div className="font-bold text-primary text-lg">Akademik Başarı</div>
                    <div className="text-sm text-muted-foreground">İstikrarlı Yükseliş</div>
                 </div>
              </div>
           </motion.div>

           <motion.div 
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-12 -left-4 md:left-12 bg-primary text-white p-6 rounded-2xl shadow-xl hidden md:block"
           >
              <div className="text-4xl font-bold mb-1">1500+</div>
              <div className="text-white/70 text-sm">Mezun Öğrenci</div>
           </motion.div>

        </motion.div>
      </div>
    </div>
  );
}
