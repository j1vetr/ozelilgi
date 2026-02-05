import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "../ui/button";

export function HeroModern() {
  return (
    <div className="relative h-screen min-h-[800px] w-full overflow-hidden bg-background">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0)_0%,rgba(255,255,255,0.8)_100%)] z-10" />
      </div>

      <div className="container relative z-20 h-full flex flex-col justify-center px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent-foreground text-sm font-semibold mb-6 border border-accent/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              2026-2027 Kayıt Dönemi
            </div>
            
            <h1 className="font-display text-5xl md:text-7xl font-bold leading-[1.1] mb-6 text-primary">
              Geleceği <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Bugünden Tasarla.
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed">
              Özel Boğaziçi İlgi Koleji olarak, her öğrencinin potansiyelini keşfediyor, onları sadece sınavlara değil hayata hazırlıyoruz.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/kayit/on-kayit">
                <Button size="lg" className="h-14 px-8 text-lg rounded-full bg-primary hover:bg-primary/90 shadow-xl shadow-primary/20 transition-all hover:scale-105">
                  Hemen Başvur
                </Button>
              </Link>
              <Link href="/kampus">
                <Button variant="outline" size="lg" className="h-14 px-8 text-lg rounded-full border-primary/20 hover:bg-primary/5 group">
                  <Play className="w-4 h-4 mr-2 fill-current" /> Kampüsü Gez
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Right Side Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 grid grid-cols-2 gap-4">
               <motion.div 
                 animate={{ y: [0, -20, 0] }}
                 transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                 className="space-y-4 mt-12"
               >
                  <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                    <img src="https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=600&auto=format&fit=crop" alt="Student" className="w-full h-64 object-cover" />
                  </div>
                  <div className="bg-white p-6 rounded-3xl shadow-xl border border-border/50">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent-foreground font-bold">A+</div>
                      <div>
                        <div className="font-bold text-primary">Akademik Başarı</div>
                        <div className="text-xs text-muted-foreground">İstikrarlı yükseliş</div>
                      </div>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: "95%" }}
                        transition={{ duration: 2, delay: 1 }}
                        className="h-full bg-accent"
                      />
                    </div>
                  </div>
               </motion.div>
               
               <motion.div 
                 animate={{ y: [0, 20, 0] }}
                 transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                 className="space-y-4"
               >
                  <div className="bg-primary text-white p-6 rounded-3xl shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full blur-xl transform translate-x-10 -translate-y-10"></div>
                    <div className="text-4xl font-bold mb-1">1500+</div>
                    <div className="text-white/70 text-sm">Mezun Öğrenci</div>
                  </div>
                  <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform rotate-3 hover:rotate-0 transition-transform duration-500">
                    <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=600&auto=format&fit=crop" alt="School Life" className="w-full h-64 object-cover" />
                  </div>
               </motion.div>
            </div>
            
            {/* Decorative circles */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-primary/5 rounded-full z-0" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] border border-primary/10 rounded-full z-0" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
