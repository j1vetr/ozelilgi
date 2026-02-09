import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { NAVIGATION, SCHOOL_INFO } from "@/lib/constants";
import { Menu, X, ChevronDown, Phone, Home } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const toggleSection = (title: string) => {
    setOpenSections(prev => ({ ...prev, [title]: !prev[title] }));
  };

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
        {/* Logo Section */}
        <Link href="/" className="flex items-center group" data-testid="navbar-logo-link">
          <div className="relative p-[3px] rounded-xl logo-border-animation">
            <div className={cn(
              "relative w-52 h-[72px] md:w-56 md:h-[72px] rounded-lg p-2 transition-all duration-300 group-hover:scale-[1.02]",
              "bg-white"
            )}>
              <img src="/images/navbar-logo.png" alt="Özel Boğaziçi İlgi Okulları" className="w-full h-full object-contain" loading="eager" fetchPriority="high" />
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className={cn(
          "hidden lg:flex items-center gap-1 px-3 py-2 rounded-full transition-all duration-300",
          scrolled 
            ? "bg-gray-50/80" 
            : "bg-white/10 backdrop-blur-md border border-white/20"
        )}>
          {NAVIGATION.map((item, idx) => (
            <div key={item.title} className="relative group">
              <Link 
                href={item.href}
                data-testid={`navbar-nav-link-${idx}`}
                className={cn(
                  "px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-1.5",
                  (item.href === "/" ? location === "/" : location.startsWith(item.href))
                    ? scrolled 
                      ? "bg-primary text-white shadow-md" 
                      : "bg-white text-primary shadow-md"
                    : scrolled 
                      ? "text-gray-700 hover:bg-gray-100 hover:text-primary" 
                      : "text-white hover:bg-white/20"
                )}
              >
                {item.title}
                {item.items && <ChevronDown className="w-3.5 h-3.5 opacity-60" />}
              </Link>
              
              {/* Dropdown */}
              {item.items && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300">
                  <div className="bg-white rounded-2xl shadow-2xl p-2 min-w-[220px] border border-gray-100/80">
                    {item.items.map((subItem, subIdx) => (
                      <Link 
                        key={subItem.title} 
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

        {/* Right Actions */}
        <div className="hidden lg:flex items-center gap-4">
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
                İletişim
              </span>
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          data-testid="navbar-mobile-toggle"
          className={cn(
            "lg:hidden p-3 rounded-xl transition-all",
            scrolled 
              ? "text-primary bg-gray-100 hover:bg-gray-200" 
              : "text-white bg-white/10 hover:bg-white/20 backdrop-blur-md"
          )}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="lg:hidden fixed inset-0 bg-black/30 backdrop-blur-sm z-30"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Menu Panel - Full Width */}
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="lg:hidden fixed right-0 top-0 bottom-0 w-full max-w-[360px] bg-white z-40 shadow-2xl flex flex-col h-screen"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-5 border-b border-gray-100 shrink-0">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <img src="/images/logo-sm.png" alt="Logo" className="w-7 h-7 object-contain" />
                  </div>
                  <span className="font-display font-bold text-primary text-base">Menü</span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2.5 rounded-xl bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Items */}
              <div className="flex-1 overflow-y-auto p-4 space-y-1">
                {NAVIGATION.map((item, i) => (
                  <div key={item.title}>
                    {item.items ? (
                      <>
                        {/* Collapsible Header */}
                        <button
                          data-testid={`mobile-nav-toggle-${i}`}
                          className={cn(
                            "flex items-center justify-between w-full py-3.5 px-4 rounded-xl font-semibold text-base transition-colors",
                            location.startsWith(item.href)
                              ? "bg-primary/10 text-primary"
                              : "text-gray-800 hover:bg-gray-50"
                          )}
                          onClick={() => toggleSection(item.title)}
                        >
                          <span>{item.title}</span>
                          <motion.div
                            animate={{ rotate: openSections[item.title] ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <ChevronDown className="w-5 h-5 text-gray-400" />
                          </motion.div>
                        </button>

                        {/* Collapsible Content */}
                        <AnimatePresence>
                          {openSections[item.title] && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25, ease: "easeInOut" }}
                              className="overflow-hidden"
                            >
                              <div className="ml-4 pl-4 border-l-2 border-primary/20 py-1 space-y-0.5">
                                {/* Main category link */}
                                <Link 
                                  href={item.href}
                                  data-testid={`mobile-nav-link-${i}`}
                                  className={cn(
                                    "block py-2.5 px-3 rounded-lg text-sm font-medium transition-colors",
                                    location === item.href
                                      ? "text-primary bg-primary/5"
                                      : "text-gray-500 hover:text-primary hover:bg-gray-50"
                                  )}
                                  onClick={() => setIsOpen(false)}
                                >
                                  Genel Bakış
                                </Link>
                                {item.items.map((subItem, subIdx) => (
                                  <Link 
                                    key={subItem.title} 
                                    href={subItem.href}
                                    data-testid={`mobile-dropdown-link-${i}-${subIdx}`}
                                    className={cn(
                                      "block py-2.5 px-3 rounded-lg text-sm font-medium transition-colors",
                                      location === subItem.href
                                        ? "text-primary bg-primary/5"
                                        : "text-gray-500 hover:text-primary hover:bg-gray-50"
                                    )}
                                    onClick={() => setIsOpen(false)}
                                  >
                                    {subItem.title}
                                  </Link>
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
                          "flex items-center gap-3 py-3.5 px-4 rounded-xl font-semibold text-base transition-colors",
                          location === item.href
                            ? "bg-primary/10 text-primary"
                            : "text-gray-800 hover:bg-gray-50"
                        )}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.title}
                      </Link>
                    )}
                  </div>
                ))}
              </div>

              {/* Bottom CTA */}
              <div className="p-4 border-t border-gray-100 shrink-0 space-y-3 bg-gray-50/50">
                <Link href="/kayit/on-kayit" onClick={() => setIsOpen(false)}>
                  <Button 
                    data-testid="mobile-preregister-button" 
                    className="w-full bg-gradient-to-r from-orange-500 to-rose-500 hover:from-orange-600 hover:to-rose-600 rounded-xl h-12 font-bold text-base shadow-lg"
                  >
                    Ön Kayıt Yap
                    <ChevronDown className="w-4 h-4 ml-1 -rotate-90" />
                  </Button>
                </Link>
                <a href={`tel:${SCHOOL_INFO.phone.replace(/\s/g, '')}`} className="block">
                  <Button 
                    variant="outline" 
                    data-testid="mobile-contact-button" 
                    className="w-full rounded-xl h-12 font-semibold text-base border-gray-200"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    {SCHOOL_INFO.phone}
                  </Button>
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
