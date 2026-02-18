import { SCHOOL_INFO } from "@/lib/constants";
import { Link } from "wouter";
import { Facebook, Instagram, Linkedin, MapPin, Phone, Mail } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { getFooterLinksTranslated, T } from "@/lib/translations";

export function Footer() {
  const { lang } = useLanguage();
  const footerLinks = getFooterLinksTranslated(lang);

  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center">
              <img src="/images/footer-logo.png" alt="Özel Boğaziçi İlgi Okulları" className="object-contain" style={{ width: "280px", height: "auto" }} />
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed max-w-xs">
              {T("school.slogan", lang)}. {T("school.description", lang)}
            </p>
            <div className="space-y-3">
              <a href={`tel:${SCHOOL_INFO.phone.replace(/\s/g, '')}`} className="flex items-center gap-3 text-sm text-primary-foreground/70 hover:text-white transition-colors">
                <Phone className="w-4 h-4 shrink-0 text-accent" />
                <span data-testid="footer-phone">{SCHOOL_INFO.phone}</span>
              </a>
              <a href={`mailto:${SCHOOL_INFO.email}`} className="flex items-center gap-3 text-sm text-primary-foreground/70 hover:text-white transition-colors">
                <Mail className="w-4 h-4 shrink-0 text-accent" />
                <span data-testid="footer-email">{SCHOOL_INFO.email}</span>
              </a>
              <div className="flex items-start gap-3 text-sm text-primary-foreground/70">
                <MapPin className="w-4 h-4 shrink-0 text-accent mt-0.5" />
                <span data-testid="footer-address">{SCHOOL_INFO.address}</span>
              </div>
            </div>
            <div className="flex gap-3 pt-2">
              <a href={SCHOOL_INFO.social.instagram} target="_blank" rel="noopener noreferrer" data-testid="footer-social-instagram" className="p-2.5 bg-white/5 rounded-full hover:bg-accent hover:text-accent-foreground transition-colors"><Instagram className="w-4 h-4" /></a>
              <a href={SCHOOL_INFO.social.facebook} target="_blank" rel="noopener noreferrer" data-testid="footer-social-facebook" className="p-2.5 bg-white/5 rounded-full hover:bg-accent hover:text-accent-foreground transition-colors"><Facebook className="w-4 h-4" /></a>
              <a href={SCHOOL_INFO.social.linkedin} target="_blank" rel="noopener noreferrer" data-testid="footer-social-linkedin" className="p-2.5 bg-white/5 rounded-full hover:bg-accent hover:text-accent-foreground transition-colors"><Linkedin className="w-4 h-4" /></a>
            </div>
          </div>

          <div>
            <h3 className="font-display text-base font-semibold mb-5 text-accent">{T("footer.corporate", lang)}</h3>
            <ul className="space-y-2.5">
              {footerLinks.kurumsal.map((link, idx) => (
                <li key={idx}>
                  <Link 
                    href={link.href}
                    data-testid={`footer-kurumsal-link-${idx}`}
                    className="text-sm text-primary-foreground/60 hover:text-white transition-colors flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-accent/50" />
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-base font-semibold mb-5 text-accent">{T("footer.academic", lang)}</h3>
            <ul className="space-y-2.5">
              {footerLinks.akademik.map((link, idx) => (
                <li key={idx}>
                  <Link 
                    href={link.href}
                    data-testid={`footer-akademik-link-${idx}`}
                    className="text-sm text-primary-foreground/60 hover:text-white transition-colors flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-accent/50" />
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-base font-semibold mb-5 text-accent">{T("footer.enrollment_contact", lang)}</h3>
            <ul className="space-y-2.5">
              {footerLinks.kayit.map((link, idx) => (
                <li key={idx}>
                  <Link 
                    href={link.href}
                    data-testid={`footer-kayit-link-${idx}`}
                    className="text-sm text-primary-foreground/60 hover:text-white transition-colors flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-accent/50" />
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-primary-foreground/50">
          <p>&copy; {new Date().getFullYear()} {SCHOOL_INFO.name} | {T("footer.rights", lang)}</p>
          <p>{T("footer.developer", lang)} : <a href="https://toov.com.tr" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/70 hover:text-white transition-colors font-medium">TOOV</a></p>
        </div>
      </div>
    </footer>
  );
}
