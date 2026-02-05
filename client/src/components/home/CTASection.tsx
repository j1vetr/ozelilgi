import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "../ui/button";
import { ArrowRight, Phone, MapPin, Clock } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-16 bg-gray-50 relative overflow-hidden">
      <div className="container max-w-5xl">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left - Image Collage */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            data-testid="cta-image-collage"
            className="relative"
          >
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-3">
                <img 
                  src="/images/music-room-2.jpg" 
                  alt="Müzik Odası"
                  data-testid="cta-image-1"
                  className="rounded-xl shadow-lg w-full h-32 object-cover"
                />
                <img 
                  src="/images/art-room-1.jpg" 
                  alt="Sanat Atölyesi"
                  data-testid="cta-image-2"
                  className="rounded-xl shadow-lg w-full h-44 object-cover"
                />
              </div>
              <div className="space-y-3 pt-6">
                <img 
                  src="/images/sports-hall-1.jpg" 
                  alt="Spor Salonu"
                  data-testid="cta-image-3"
                  className="rounded-xl shadow-lg w-full h-44 object-cover"
                />
                <img 
                  src="/images/outdoor-entrance-ataturk.jpg" 
                  alt="Okul Girişi"
                  data-testid="cta-image-4"
                  className="rounded-xl shadow-lg w-full h-32 object-cover"
                />
              </div>
            </div>
            
            {/* Floating Badge */}
            <div data-testid="cta-floating-badge" className="absolute -bottom-4 -right-4 bg-brand-orange text-white p-4 rounded-xl shadow-xl">
              <div data-testid="cta-floating-badge-year" className="text-2xl font-bold">2026</div>
              <div data-testid="cta-floating-badge-text" className="text-xs opacity-90">Kayıtlar Açık</div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:pl-6"
          >
            <span data-testid="cta-section-badge" className="inline-block px-3 py-1.5 bg-brand-orange/10 text-brand-orange font-semibold rounded-full text-xs tracking-wider uppercase mb-3">
              Hemen Başvurun
            </span>
            <h2 data-testid="cta-section-title" className="text-2xl md:text-3xl font-display font-bold text-primary mb-4 leading-tight">
              Ailemize <span className="text-brand-orange">Katılın</span>
            </h2>
            <p data-testid="cta-section-description" className="text-base text-muted-foreground leading-relaxed mb-6">
              Çocuğunuzun eğitim yolculuğuna birlikte başlayalım. Kampüsümüzü ziyaret edin, öğretmenlerimizle tanışın.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div data-testid="cta-contact-phone" className="flex items-center gap-3 text-muted-foreground">
                <div className="w-10 h-10 rounded-lg bg-brand-blue/10 flex items-center justify-center">
                  <Phone className="w-4 h-4 text-brand-blue" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Bizi Arayın</div>
                  <div className="text-sm font-semibold text-primary">0216 XXX XX XX</div>
                </div>
              </div>
              <div data-testid="cta-contact-address" className="flex items-center gap-3 text-muted-foreground">
                <div className="w-10 h-10 rounded-lg bg-brand-green/10 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-brand-green" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Adresimiz</div>
                  <div className="text-sm font-semibold text-primary">Çekmeköy, İstanbul</div>
                </div>
              </div>
              <div data-testid="cta-contact-hours" className="flex items-center gap-3 text-muted-foreground">
                <div className="w-10 h-10 rounded-lg bg-brand-orange/10 flex items-center justify-center">
                  <Clock className="w-4 h-4 text-brand-orange" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Çalışma Saatleri</div>
                  <div className="text-sm font-semibold text-primary">Pzt-Cuma: 08:30 - 17:30</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/kayit/on-kayit">
                <Button data-testid="cta-preregister-button" className="h-10 px-6 rounded-lg bg-brand-orange hover:bg-brand-orange/90 text-sm font-semibold shadow-md">
                  Ön Kayıt Formu
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="/iletisim">
                <Button variant="outline" data-testid="cta-contact-button" className="h-10 px-6 rounded-lg text-sm font-semibold">
                  Kampüsü Ziyaret Et
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
