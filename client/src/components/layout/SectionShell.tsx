import { useState, type ReactNode } from "react";
import { Link, useLocation } from "wouter";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { getNavigationTranslated } from "@/lib/translations";

type Group = "kurumsal" | "model";

const GROUP_HREF: Record<Group, string> = {
  kurumsal: "/kurumsal",
  model: "/kurumsal/egitim-yaklasimimiz",
};

/* Beyaz sayfa başlığı + sol menü (logo, menü başlığı, sayfa listesi) + içerik */
export function SectionShell({ group, title, children }: { group: Group; title: string; children: ReactNode }) {
  const { lang } = useLanguage();
  const [location] = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const items = getNavigationTranslated(lang).find((n) => n.href === GROUP_HREF[group])?.items ?? [];
  const label =
    group === "kurumsal"
      ? lang === "tr" ? "Kurumsal Menü" : "Corporate Menu"
      : lang === "tr" ? "Eğitim Modelimiz" : "Our Education Model";

  return (
    <>
      <div className="pt-32 md:pt-40 pb-8 md:pb-10 bg-white border-b border-gray-100">
        <div className="container px-4 text-center">
          <h1 className="font-display text-3xl md:text-5xl font-bold text-primary" data-testid="section-page-title">{title}</h1>
        </div>
      </div>

      <div className="container py-10 px-4">
        <div className="grid lg:grid-cols-[260px_1fr] gap-8 lg:gap-12 items-start">
          <div className="lg:sticky lg:top-28">
            <div className="hidden lg:block mb-4 text-center">
              <p className="font-display font-bold text-primary text-lg mb-3">{label}</p>
              <img src="/images/bogazici-logo-yuvarlak.png" alt="Özel Boğaziçi İlgi Okulları" className="w-28 h-28 rounded-full object-contain mx-auto" data-testid="section-sidebar-logo" />
            </div>
            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              className="lg:hidden w-full flex items-center justify-between bg-primary text-white font-semibold rounded-xl px-5 py-4"
              data-testid="section-menu-toggle"
            >
              {label}
              <ChevronDown className={`w-5 h-5 transition-transform ${menuOpen ? "rotate-180" : ""}`} />
            </button>
            <nav className={`${menuOpen ? "block" : "hidden"} lg:block mt-2 lg:mt-0 bg-white border-2 border-primary rounded-2xl overflow-hidden`} data-testid="section-sidebar">
              {items.map((it) => {
                const active = location === it.href;
                return (
                  <Link
                    key={it.href}
                    href={it.href}
                    onClick={() => setMenuOpen(false)}
                    className={`block px-6 py-4 text-base border-b border-primary/15 last:border-b-0 transition-colors ${active ? "font-bold bg-primary text-white" : "font-medium text-primary hover:bg-primary/10"}`}
                  >
                    {it.title}
                  </Link>
                );
              })}
            </nav>
          </div>
          <div className="min-w-0">{children}</div>
        </div>
      </div>
    </>
  );
}
