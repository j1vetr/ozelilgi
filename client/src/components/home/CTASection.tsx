import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "../ui/button";
import { ArrowRight, Phone, MapPin, Clock } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-28 bg-gray-50 relative overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image Collage */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            data-testid="cta-image-collage"
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img 
                  src="/images/kindergarten-numbers-2.jpg" 
                  alt="Anaokulu Sınıfı"
                  data-testid="cta-image-1"
                  className="rounded-2xl shadow-xl w-full h-48 object-cover"
                />
                <img 
                  src="/images/playground-slide-2.jpg" 
                  alt="Oyun Parkı"
                  data-testid="cta-image-2"
                  className="rounded-2xl shadow-xl w-full h-64 object-cover"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img 
                  src="/images/classroom-blue-1.jpg" 
                  alt="Modern Sınıf"
                  data-testid="cta-image-3"
                  className="rounded-2xl shadow-xl w-full h-64 object-cover"
                />
                <img 
                  src="/images/welcome-stairs.jpg" 
                  alt="Hoş Geldiniz"
                  data-testid="cta-image-4"
                  className="rounded-2xl shadow-xl w-full h-48 object-cover"
                />
              </div>
            </div>
            
            {/* Floating Badge */}
            <div data-testid="cta-floating-badge" className="absolute -bottom-6 -right-6 bg-brand-orange text-white p-6 rounded-2xl shadow-2xl">
              <div data-testid="cta-floating-badge-year" className="text-4xl font-bold">2026</div>
              <div data-testid="cta-floating-badge-text" className="text-sm opacity-90">Kayıtlar Açık</div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:pl-8"
          >
            <span data-testid="cta-section-badge" className="inline-block px-4 py-2 bg-brand-orange/10 text-brand-orange font-bold rounded-full text-sm tracking-wider uppercase mb-4">
              Hemen Başvurun
            </span>
            <h2 data-testid="cta-section-title" className="text-4xl md:text-5xl font-display font-bold text-primary mb-6 leading-tight">
              Ailemize <br/>
              <span className="text-brand-orange">Katılın</span>
            </h2>
            <p data-testid="cta-section-description" className="text-xl text-muted-foreground leading-relaxed mb-8">
              Çocuğunuzun eğitim yolculuğuna birlikte başlayalım. 
              Kampüsümüzü ziyaret edin, öğretmenlerimizle tanışın ve 
              farkı yerinde görün.
            </p>

            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              <div data-testid="cta-contact-phone" className="flex items-center gap-4 text-muted-foreground">
                <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-brand-blue" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Bizi Arayın</div>
                  <div className="font-semibold text-primary">0216 XXX XX XX</div>
                </div>
              </div>
              <div data-testid="cta-contact-address" className="flex items-center gap-4 text-muted-foreground">
                <div className="w-12 h-12 rounded-xl bg-brand-green/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-brand-green" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Adresimiz</div>
                  <div className="font-semibold text-primary">Çekmeköy, İstanbul</div>
                </div>
              </div>
              <div data-testid="cta-contact-hours" className="flex items-center gap-4 text-muted-foreground">
                <div className="w-12 h-12 rounded-xl bg-brand-orange/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-brand-orange" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Çalışma Saatleri</div>
                  <div className="font-semibold text-primary">Pzt-Cuma: 08:30 - 17:30</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/kayit/on-kayit">
                <Button size="lg" data-testid="cta-preregister-button" className="h-14 px-8 rounded-xl bg-brand-orange hover:bg-brand-orange/90 text-lg font-bold shadow-lg shadow-brand-orange/25">
                  Ön Kayıt Formu
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/iletisim">
                <Button size="lg" variant="outline" data-testid="cta-contact-button" className="h-14 px-8 rounded-xl text-lg font-bold">
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
