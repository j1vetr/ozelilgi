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
              {SCHOOL_INFO.slogan}. Eğitimde mükemmellik, karakterde erdem, gelecekte başarı.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-accent hover:text-accent-foreground transition-colors"><Instagram className="w-4 h-4" /></a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-accent hover:text-accent-foreground transition-colors"><Facebook className="w-4 h-4" /></a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-accent hover:text-accent-foreground transition-colors"><Linkedin className="w-4 h-4" /></a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-6 text-accent">Hızlı Erişim</h3>
            <ul className="space-y-3">
              {NAVIGATION.slice(0, 4).map((item) => (
                <li key={item.title}>
                  <Link href={item.href}>
                    <a className="text-sm text-primary-foreground/70 hover:text-white transition-colors flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-accent/50" />
                      {item.title}
                    </a>
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
                <span>{SCHOOL_INFO.address}</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/70">
                <Phone className="w-5 h-5 shrink-0 text-accent" />
                <span>{SCHOOL_INFO.phone}</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/70">
                <Mail className="w-5 h-5 shrink-0 text-accent" />
                <span>{SCHOOL_INFO.email}</span>
              </li>
            </ul>
          </div>

          {/* Newsletter / Map */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-6 text-accent">Konum</h3>
            <div className="w-full h-48 bg-white/5 rounded-lg overflow-hidden border border-white/10 relative group">
               {/* Placeholder for Map */}
               <div className="absolute inset-0 flex items-center justify-center bg-muted/20 group-hover:bg-muted/30 transition-colors">
                  <span className="text-xs text-white/50">Google Maps Embed</span>
               </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-primary-foreground/50">
          <p>&copy; {new Date().getFullYear()} {SCHOOL_INFO.name}. Tüm hakları saklıdır.</p>
          <div className="flex gap-6">
            <Link href="/gizlilik"><a className="hover:text-white">Gizlilik Politikası</a></Link>
            <Link href="/kvkk"><a className="hover:text-white">KVKK</a></Link>
            <Link href="/kullanim-sartlari"><a className="hover:text-white">Kullanım Şartları</a></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
