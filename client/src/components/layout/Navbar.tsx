import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { SCHOOL_INFO } from "@/lib/constants";
import { Menu, X, ChevronDown, Phone, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/lib/i18n";
import { getNavigationTranslated, T, type NavSubItem } from "@/lib/translations";

function groupItems(items: NavSubItem[]) {
  const groups: { label?: string; items: NavSubItem[] }[] = [];
  items.forEach((it) => {
    const last = groups[groups.length - 1];
    if (last && last.label === it.group) last.items.push(it);
    else groups.push({ label: it.group, items: [it] });
  });
  return groups;
}

function RoundFlagTR() {
  return <img src="/flags/tr.svg" alt="" className="w-full h-full" draggable={false} />;
}

function RoundFlagGB() {
  return <img src="/flags/gb.svg" alt="" className="w-full h-full" draggable={false} />;
}

/* ── Dil değiştirici: iki yuvarlak bayrak ────────────────────── */
function LangToggle({ testId, className }: { scrolled?: boolean; testId?: string; className?: string }) {
  const { lang, setLang } = useLanguage();
  const items = [
    { code: "tr" as const, label: "Türkçe", flag: <RoundFlagTR /> },
    { code: "en" as const, label: "English", flag: <RoundFlagGB /> },
  ];
  return (
    <div role="group" aria-label="Language" data-testid={testId} className={cn("inline-flex items-center gap-2", className)}>
      {items.map((it) => {
        const active = lang === it.code;
        return (
          <button
            key={it.code}
            type="button"
            onClick={() => setLang(it.code)}
            aria-pressed={active}
            aria-label={it.label}
            title={it.label}
            className={cn(
              "w-8 h-8 rounded-full overflow-hidden cursor-pointer transition-all duration-200 focus:outline-none ring-2 ring-offset-1 ring-offset-transparent",
              active ? "ring-brand-orange opacity-100 scale-105" : "ring-gray-300 opacity-60 hover:opacity-100"
            )}
          >
            {it.flag}
          </button>
        );
      })}
    </div>
  );
}

/* ── Ana bileşen ───────────────────────────────────────────── */
export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});
  const [location] = useLocation();
  const { lang, setLang } = useLanguage();
  const NAVIGATION = getNavigationTranslated(lang);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const toggleSection = (title: string) =>
    setOpenSections(prev => ({ ...prev, [title]: !prev[title] }));

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "py-2 bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-100/50"
          : "py-4 bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center group ml-2 md:ml-0" data-testid="navbar-logo-link">
          <img
            src="/images/bogazici-logo-yuvarlak.png"
            alt="Özel Boğaziçi İlgi Okulları"
            className={cn(
              "rounded-full object-contain shadow-lg transition-all duration-300 group-hover:scale-105",
              scrolled ? "w-16 h-16 md:w-20 md:h-20" : "w-24 h-24 md:w-32 md:h-32"
            )}
            loading="eager"
            fetchPriority="high"
          />
        </Link>

        {/* Desktop nav */}
        <nav className={cn(
          "hidden lg:flex items-center gap-1 px-3 py-2 rounded-full transition-all duration-300",
          scrolled ? "bg-gray-50/80" : "bg-white/10 backdrop-blur-md border border-white/20"
        )}>
          {NAVIGATION.map((item, idx) => (
            <div key={idx} className="relative group">
              <Link
                href={item.href}
                data-testid={`navbar-nav-link-${idx}`}
                className={cn(
                  "px-3.5 xl:px-4 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-300 flex items-center gap-1.5",
                  (item.href === "/" ? location === "/" : item.matches ? item.matches.some((m) => location.startsWith(m)) : location.startsWith(item.href))
                    ? scrolled ? "bg-primary text-white shadow-md" : "bg-white text-primary shadow-md"
                    : scrolled ? "text-gray-700 hover:bg-gray-100 hover:text-primary" : "text-white hover:bg-white/20"
                )}
              >
                {item.title}
                {item.items && <ChevronDown className="w-3.5 h-3.5 opacity-60" />}
              </Link>
              {item.items && item.mega && (
                <div
                  data-testid="navbar-mega-menu"
                  className="absolute top-full left-0 pt-3 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto group-focus-within:opacity-100 group-focus-within:translate-y-0 group-focus-within:pointer-events-auto transition-all duration-300"
                >
                  <div className="relative bg-white rounded-3xl overflow-hidden w-[560px] xl:w-[640px] border border-gray-100 shadow-2xl">
                    <img
                      src="/images/bogazici-logo-yuvarlak.png"
                      alt=""
                      aria-hidden="true"
                      className="absolute -right-16 -bottom-16 w-80 h-80 object-contain opacity-10 pointer-events-none select-none"
                    />
                    <div className="relative z-10 grid grid-cols-2 gap-x-6 p-6">
                      {groupItems(item.items).map((g, gi) => (
                        <div key={gi} className="mb-3">
                          {g.label && (
                            <p className="px-3 pb-2 mb-1 text-xs font-bold uppercase tracking-wider text-brand-orange border-b border-gray-100">{g.label}</p>
                          )}
                          {g.items.map((subItem) => {
                            const subIdx = item.items!.indexOf(subItem);
                            return (
                              <Link
                                key={subIdx}
                                href={subItem.href}
                                data-testid={`navbar-dropdown-link-${idx}-${subIdx}`}
                                className={cn(
                                  "block px-3 py-2.5 text-[15px] font-semibold transition-colors rounded-xl hover:bg-gray-50",
                                  location === subItem.href ? "text-brand-orange" : "text-primary hover:text-brand-orange"
                                )}
                              >
                                {subItem.title}
                              </Link>
                            );
                          })}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              {item.items && !item.mega && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300">
                  <div className="bg-white rounded-2xl shadow-2xl p-2 min-w-[220px] border border-gray-100/80">
                    {item.items.map((subItem, subIdx) => (
                      <Link
                        key={subIdx}
                        href={subItem.href}
                        data-testid={`navbar-dropdown-link-${idx}-${subIdx}`}
                        className="block px-4 py-3 text-sm font-medium text-gray-600 hover:text-primary hover:bg-primary/5 rounded-xl transition-all"
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Desktop sağ — bayrak + iletişim */}
        <div className="hidden lg:flex items-center gap-4">
          <LangToggle scrolled={scrolled} testId="lang-switcher-desktop" />
          <Link href="/iletisim">
            <Button
              size="lg"
              data-testid="navbar-contact-button"
              className={cn(
                "rounded-full px-6 font-semibold transition-all duration-300 gap-2",
                scrolled
                  ? "bg-brand-orange hover:bg-brand-orange/90 text-white shadow-lg shadow-brand-orange/25"
                  : "bg-white text-primary hover:bg-white/90 shadow-xl"
              )}
              asChild
            >
              <span>
                <Phone className="w-4 h-4" />
                {T("nav.contact", lang)}
              </span>
            </Button>
          </Link>
        </div>

        {/* Mobil sağ — bayrak + hamburger */}
        <div className="flex items-center gap-3 lg:hidden">
          <LangToggle scrolled={scrolled} testId="lang-switcher-mobile" />
          <button
            data-testid="navbar-mobile-toggle"
            className={cn(
              "p-2.5 rounded-xl transition-all",
              scrolled
                ? "text-primary bg-gray-100 hover:bg-gray-200"
                : "text-white bg-white/10 hover:bg-white/20 backdrop-blur-md"
            )}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* ── Mobil Drawer ─────────────────────────────────────── */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="lg:hidden fixed inset-0 bg-black/40 z-30"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 300 }}
              className="lg:hidden fixed right-0 top-0 bottom-0 w-[85vw] max-w-[340px] bg-white z-40 flex flex-col h-screen overflow-hidden"
            >
              {/* Header — logo net, arka plan yok */}
              <div className="flex items-center justify-between px-5 pt-5 pb-4 border-b border-gray-100 shrink-0">
                <Link href="/" onClick={() => setIsOpen(false)}>
                  <img
                    src="/images/bogazici-logo-yuvarlak.png"
                    alt="Özel Boğaziçi İlgi Okulları"
                    className="h-14 w-14 object-contain"
                  />
                </Link>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors text-gray-500"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigasyon */}
              <div className="flex-1 overflow-y-auto py-3 px-3">
                {NAVIGATION.map((item, i) => (
                  <div key={i}>
                    {item.items ? (
                      <>
                        <button
                          data-testid={`mobile-nav-toggle-${i}`}
                          className={cn(
                            "flex items-center justify-between w-full py-3 px-4 rounded-xl font-semibold text-[15px] transition-colors",
                            location.startsWith(item.href)
                              ? "text-primary bg-primary/8"
                              : "text-gray-800 hover:bg-gray-50"
                          )}
                          onClick={() => toggleSection(item.title)}
                        >
                          <span>{item.title}</span>
                          <motion.div animate={{ rotate: openSections[item.title] ? 180 : 0 }} transition={{ duration: 0.2 }}>
                            <ChevronDown className="w-4 h-4 text-gray-400" />
                          </motion.div>
                        </button>

                        <AnimatePresence>
                          {openSections[item.title] && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.22 }}
                              className="overflow-hidden"
                            >
                              <div className="ml-4 pl-3 border-l-2 border-primary/20 py-1 space-y-0.5 mb-1">
                                <Link
                                  href={item.href}
                                  data-testid={`mobile-nav-link-${i}`}
                                  className={cn(
                                    "block py-2 px-3 rounded-lg text-sm font-medium transition-colors",
                                    location === item.href ? "text-primary" : "text-gray-500 hover:text-primary"
                                  )}
                                  onClick={() => setIsOpen(false)}
                                >
                                  {T("nav.overview", lang)}
                                </Link>
                                {item.items.map((subItem, subIdx) => (
                                  <div key={subIdx}>
                                    {subItem.group && subItem.group !== item.items![subIdx - 1]?.group && (
                                      <p className="px-3 pt-3 pb-1 text-[11px] font-bold uppercase tracking-wider text-brand-orange">{subItem.group}</p>
                                    )}
                                  <Link
                                    href={subItem.href}
                                    data-testid={`mobile-dropdown-link-${i}-${subIdx}`}
                                    className={cn(
                                      "block py-2 px-3 rounded-lg text-sm font-medium transition-colors",
                                      location === subItem.href ? "text-primary" : "text-gray-500 hover:text-primary"
                                    )}
                                    onClick={() => setIsOpen(false)}
                                  >
                                    {subItem.title}
                                  </Link>
                                  </div>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        data-testid={`mobile-nav-link-${i}`}
                        className={cn(
                          "flex items-center justify-between py-3 px-4 rounded-xl font-semibold text-[15px] transition-colors",
                          location === item.href
                            ? "text-primary bg-primary/8"
                            : "text-gray-800 hover:bg-gray-50"
                        )}
                        onClick={() => setIsOpen(false)}
                      >
                        <span>{item.title}</span>
                        <ArrowRight className="w-4 h-4 text-gray-300" />
                      </Link>
                    )}
                  </div>
                ))}
              </div>

              {/* Alt — butonlar + dil seçimi */}
              <div className="shrink-0 px-4 pb-6 pt-4 border-t border-gray-100 space-y-3">
                <Link href="/kayit/on-kayit" onClick={() => setIsOpen(false)} className="block">
                  <Button
                    data-testid="mobile-preregister-button"
                    className="w-full bg-gradient-to-r from-orange-500 to-rose-500 hover:from-orange-600 hover:to-rose-600 rounded-xl h-12 font-bold text-base shadow-md"
                  >
                    {T("nav.preregister", lang)}
                    <ArrowRight className="w-4 h-4 ml-1.5" />
                  </Button>
                </Link>
                <a href={`tel:${SCHOOL_INFO.phone.replace(/\s/g, "")}`} className="block">
                  <Button
                    variant="outline"
                    data-testid="mobile-contact-button"
                    className="w-full rounded-xl h-12 font-semibold text-base border-gray-200 text-gray-700"
                  >
                    <Phone className="w-4 h-4 mr-2 text-primary" />
                    {SCHOOL_INFO.phone}
                  </Button>
                </a>

                {/* Dil seçimi — bayrak + etiket */}
                <LangToggle className="self-center mx-auto flex w-fit" />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
