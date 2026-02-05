import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "../ui/button";
import { ArrowRight, Phone, MapPin, Mail, Calendar } from "lucide-react";
import { SCHOOL_INFO } from "@/lib/constants";

export function CTASection() {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/90" />
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-brand-orange/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-brand-yellow/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl" />

      <div className="container relative">
        <div className="grid lg:grid-cols-5 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full mb-4"
            >
              <Calendar className="w-4 h-4 text-brand-yellow" />
              <span className="text-white/90 text-sm font-medium">2025-2026 Kayıtları Açık</span>
            </motion.div>
            
            <h2 data-testid="cta-section-title" className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-white mb-4 leading-tight">
              Çocuğunuzun Geleceğine <br className="hidden sm:block" />
              <span className="text-brand-yellow">Birlikte Başlayalım</span>
            </h2>
            
            <p data-testid="cta-section-description" className="text-white/70 text-sm md:text-base leading-relaxed mb-6 max-w-lg mx-auto lg:mx-0">
              Kampüsümüzü ziyaret edin, eğitim programlarımızı inceleyin ve ailemize katılın.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <Link href="/kayit/on-kayit">
                <Button 
                  data-testid="cta-preregister-button" 
                  className="h-11 px-6 rounded-full bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold shadow-lg shadow-brand-orange/30"
                >
                  Hemen Ön Kayıt Yap
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="/iletisim">
                <Button 
                  variant="outline" 
                  data-testid="cta-contact-button" 
                  className="h-11 px-6 rounded-full border-2 border-white/30 text-white hover:bg-white/10 font-semibold backdrop-blur-sm"
                >
                  Kampüsü Ziyaret Et
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10">
              <h3 className="text-white font-semibold text-lg mb-5">İletişim Bilgileri</h3>
              
              <div className="space-y-4">
                <a 
                  href={`tel:${SCHOOL_INFO.phone.replace(/\s/g, '')}`}
                  data-testid="cta-contact-phone" 
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-orange/20 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-orange/30 transition-colors">
                    <Phone className="w-5 h-5 text-brand-orange" />
                  </div>
                  <div>
                    <div className="text-white/50 text-xs mb-0.5">Telefon</div>
                    <div className="text-white font-semibold group-hover:text-brand-yellow transition-colors">{SCHOOL_INFO.phone}</div>
                  </div>
                </a>

                <a 
                  href={`mailto:${SCHOOL_INFO.email}`}
                  data-testid="cta-contact-email" 
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-yellow/20 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-yellow/30 transition-colors">
                    <Mail className="w-5 h-5 text-brand-yellow" />
                  </div>
                  <div>
                    <div className="text-white/50 text-xs mb-0.5">E-posta</div>
                    <div className="text-white font-semibold text-sm group-hover:text-brand-yellow transition-colors">{SCHOOL_INFO.email}</div>
                  </div>
                </a>

                <div 
                  data-testid="cta-contact-address" 
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-green/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-brand-green" />
                  </div>
                  <div>
                    <div className="text-white/50 text-xs mb-0.5">Adres</div>
                    <div className="text-white font-semibold text-sm leading-snug">{SCHOOL_INFO.address}</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
