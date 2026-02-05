import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { NAVIGATION } from "@/lib/constants";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
              "relative w-44 h-16 md:w-56 md:h-[72px] rounded-lg p-2 transition-all duration-300 group-hover:scale-[1.02]",
              "bg-white"
            )}>
              <img src="/images/logo.png" alt="Boğaziçi İlgi Koleji Logo" className="w-full h-full object-contain" />
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
                  location.startsWith(item.href) 
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
              className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-30"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Menu Panel */}
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="lg:hidden fixed right-0 top-0 bottom-0 w-[280px] bg-white z-40 shadow-2xl flex flex-col h-screen overflow-hidden"
            >
              {/* Close Button */}
              <div className="flex items-center justify-between p-3 border-b border-gray-100 shrink-0">
                <span className="font-display font-bold text-primary text-sm">Menü</span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-3 flex flex-col flex-1 overflow-hidden">
                {NAVIGATION.map((item, i) => (
                  <div key={item.title} className="flex flex-col">
                    <Link 
                      href={item.href}
                      data-testid={`mobile-nav-link-${i}`}
                      className="text-sm font-semibold text-gray-800 flex items-center justify-between py-2 px-2 rounded-lg hover:bg-gray-50 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.title}
                      {item.items && <ChevronDown className="w-4 h-4 text-gray-400" />}
                    </Link>
                    {item.items && (
                      <div className="ml-2 pl-2 border-l-2 border-gray-100 flex flex-col">
                        {item.items.map((subItem, subIdx) => (
                          <Link 
                            key={subItem.title} 
                            href={subItem.href}
                            data-testid={`mobile-dropdown-link-${i}-${subIdx}`}
                            className="text-xs text-gray-500 font-medium py-1.5 px-2 rounded-lg hover:bg-gray-50 hover:text-primary transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            {subItem.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                {/* CTA Buttons - at bottom */}
                <div className="mt-auto pt-3 border-t border-gray-100 grid gap-2 shrink-0">
                  <Link href="/iletisim" onClick={() => setIsOpen(false)}>
                    <Button size="sm" data-testid="mobile-contact-button" className="w-full bg-brand-orange rounded-lg h-10 font-semibold text-sm" asChild>
                      <span>
                        <Phone className="w-4 h-4 mr-2" />
                        İletişime Geç
                      </span>
                    </Button>
                  </Link>
                  <Link href="/kayit/on-kayit" onClick={() => setIsOpen(false)}>
                    <Button size="sm" variant="outline" data-testid="mobile-preregister-button" className="w-full rounded-lg h-10 font-medium text-sm" asChild>
                      <span>Ön Kayıt</span>
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
