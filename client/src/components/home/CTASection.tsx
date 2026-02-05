import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "../ui/button";
import { ArrowRight, Phone, MapPin, Clock } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-14 relative overflow-hidden">
      {/* Blurry Gradient Background */}
      <div className="absolute inset-0 bg-white" />
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-brand-yellow/8 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] bg-brand-orange/8 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/3 w-[300px] h-[300px] bg-brand-green/5 rounded-full blur-3xl" />

      <div className="container max-w-5xl relative">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left - Image Collage */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            data-testid="cta-image-collage"
            className="relative"
          >
            <div className="grid grid-cols-2 gap-2.5">
              <div className="space-y-2.5">
                <img 
                  src="/images/music-room-2.jpg" 
                  alt="Müzik Odası"
                  data-testid="cta-image-1"
                  className="rounded-lg shadow-md w-full h-28 object-cover"
                />
                <img 
                  src="/images/art-room-1.jpg" 
                  alt="Sanat Atölyesi"
                  data-testid="cta-image-2"
                  className="rounded-lg shadow-md w-full h-36 object-cover"
                />
              </div>
              <div className="space-y-2.5 pt-5">
                <img 
                  src="/images/sports-hall-1.jpg" 
                  alt="Spor Salonu"
                  data-testid="cta-image-3"
                  className="rounded-lg shadow-md w-full h-36 object-cover"
                />
                <img 
                  src="/images/outdoor-entrance-ataturk.jpg" 
                  alt="Okul Girişi"
                  data-testid="cta-image-4"
                  className="rounded-lg shadow-md w-full h-28 object-cover"
                />
              </div>
            </div>
            
            {/* Floating Badge */}
            <div data-testid="cta-floating-badge" className="absolute -bottom-3 -right-3 bg-brand-orange text-white p-3 rounded-lg shadow-lg">
              <div data-testid="cta-floating-badge-year" className="text-xl font-bold">2026</div>
              <div data-testid="cta-floating-badge-text" className="text-[10px] opacity-90">Kayıtlar Açık</div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:pl-4"
          >
            <span data-testid="cta-section-badge" className="inline-block px-3 py-1 bg-brand-orange/10 text-brand-orange font-medium rounded-full text-xs tracking-wider uppercase mb-3">
              Hemen başvurun
            </span>
            <h2 data-testid="cta-section-title" className="text-2xl md:text-3xl font-display font-bold text-primary mb-3 leading-tight">
              Ailemize <span className="text-brand-orange">katılın</span>
            </h2>
            <p data-testid="cta-section-description" className="text-sm text-muted-foreground leading-relaxed mb-5">
              Çocuğunuzun eğitim yolculuğuna birlikte başlayalım. Kampüsümüzü ziyaret edin, öğretmenlerimizle tanışın.
            </p>

            {/* Contact Info */}
            <div className="space-y-2.5 mb-5">
              <div data-testid="cta-contact-phone" className="flex items-center gap-3 text-muted-foreground">
                <div className="w-9 h-9 rounded-lg bg-brand-blue/10 flex items-center justify-center">
                  <Phone className="w-4 h-4 text-brand-blue" />
                </div>
                <div>
                  <div className="text-[10px] text-muted-foreground">Bizi arayın</div>
                  <div className="text-sm font-semibold text-primary">0216 XXX XX XX</div>
                </div>
              </div>
              <div data-testid="cta-contact-address" className="flex items-center gap-3 text-muted-foreground">
                <div className="w-9 h-9 rounded-lg bg-brand-green/10 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-brand-green" />
                </div>
                <div>
                  <div className="text-[10px] text-muted-foreground">Adresimiz</div>
                  <div className="text-sm font-semibold text-primary">Çekmeköy, İstanbul</div>
                </div>
              </div>
              <div data-testid="cta-contact-hours" className="flex items-center gap-3 text-muted-foreground">
                <div className="w-9 h-9 rounded-lg bg-brand-orange/10 flex items-center justify-center">
                  <Clock className="w-4 h-4 text-brand-orange" />
                </div>
                <div>
                  <div className="text-[10px] text-muted-foreground">Çalışma saatleri</div>
                  <div className="text-sm font-semibold text-primary">Pzt-Cuma: 08:30 - 17:30</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-2.5">
              <Link href="/kayit/on-kayit">
                <Button data-testid="cta-preregister-button" className="h-9 px-5 rounded-lg bg-brand-orange hover:bg-brand-orange/90 text-sm font-semibold shadow-md">
                  Ön kayıt formu
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </Button>
              </Link>
              <Link href="/iletisim">
                <Button variant="outline" data-testid="cta-contact-button" className="h-9 px-5 rounded-lg text-sm font-semibold">
                  Kampüsü ziyaret et
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
