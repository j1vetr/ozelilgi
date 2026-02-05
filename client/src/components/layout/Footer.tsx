import { SCHOOL_INFO, NAVIGATION } from "@/lib/constants";
import { Link } from "wouter";
import { Facebook, Instagram, Linkedin, Twitter, Youtube, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="bg-white/10 p-2 rounded-lg">
                 <img src="/images/logo.png" alt="Logo" className="w-10 h-10 object-contain brightness-0 invert" />
              </div>
              <h2 className="font-display text-xl font-bold">{SCHOOL_INFO.shortName}</h2>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed max-w-xs">
              {SCHOOL_INFO.slogan}. Anaokulu, İlkokul ve Ortaokul kademelerinde kaliteli eğitim.
            </p>
            <div className="flex gap-4">
              <a href="#" data-testid="footer-social-instagram" className="p-2 bg-white/5 rounded-full hover:bg-accent hover:text-accent-foreground transition-colors"><Instagram className="w-4 h-4" /></a>
              <a href="#" data-testid="footer-social-facebook" className="p-2 bg-white/5 rounded-full hover:bg-accent hover:text-accent-foreground transition-colors"><Facebook className="w-4 h-4" /></a>
              <a href="#" data-testid="footer-social-linkedin" className="p-2 bg-white/5 rounded-full hover:bg-accent hover:text-accent-foreground transition-colors"><Linkedin className="w-4 h-4" /></a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-6 text-accent">Hızlı Erişim</h3>
            <ul className="space-y-3">
              {NAVIGATION.slice(0, 4).map((item, idx) => (
                <li key={item.title}>
                  <Link 
                    href={item.href}
                    data-testid={`footer-nav-link-${idx}`}
                    className="text-sm text-primary-foreground/70 hover:text-white transition-colors flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-accent/50" />
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-6 text-accent">İletişim</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-primary-foreground/70">
                <MapPin className="w-5 h-5 shrink-0 text-accent" />
                <span data-testid="footer-address">{SCHOOL_INFO.address}</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/70">
                <Phone className="w-5 h-5 shrink-0 text-accent" />
                <span data-testid="footer-phone">{SCHOOL_INFO.phone}</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/70">
                <Mail className="w-5 h-5 shrink-0 text-accent" />
                <span data-testid="footer-email">{SCHOOL_INFO.email}</span>
              </li>
            </ul>
          </div>

          {/* Newsletter / Map */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-6 text-accent">Konum</h3>
            <div data-testid="footer-map-container" className="w-full h-48 bg-white/5 rounded-lg overflow-hidden border border-white/10">
               <iframe
                  src={SCHOOL_INFO.mapEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Okul Konumu"
               />
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-primary-foreground/50">
          <p>&copy; {new Date().getFullYear()} {SCHOOL_INFO.name}. Tüm hakları saklıdır.</p>
          <div className="flex gap-6">
            <Link href="/gizlilik" data-testid="footer-privacy-link" className="hover:text-white">Gizlilik Politikası</Link>
            <Link href="/kvkk" data-testid="footer-kvkk-link" className="hover:text-white">KVKK</Link>
            <Link href="/kullanim-sartlari" data-testid="footer-terms-link" className="hover:text-white">Kullanım Şartları</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
