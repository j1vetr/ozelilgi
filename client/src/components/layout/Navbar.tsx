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
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden fixed inset-0 top-[80px] bg-white z-40 overflow-y-auto"
          >
            <div className="container px-6 py-10 flex flex-col gap-6">
              {NAVIGATION.map((item, i) => (
                <motion.div 
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="flex flex-col gap-3"
                >
                  <Link 
                    href={item.href}
                    data-testid={`mobile-nav-link-${i}`}
                    className="text-2xl font-display font-bold text-primary flex items-center justify-between py-2 border-b border-gray-100"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.title}
                    {item.items && <ChevronDown className="w-5 h-5 opacity-40" />}
                  </Link>
                  {item.items && (
                    <div className="pl-4 flex flex-col gap-2 ml-2">
                      {item.items.map((subItem, subIdx) => (
                        <Link 
                          key={subItem.title} 
                          href={subItem.href}
                          data-testid={`mobile-dropdown-link-${i}-${subIdx}`}
                          className="text-base text-gray-500 font-medium py-2 hover:text-primary transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
              <div className="mt-10 grid gap-4">
                <Link href="/iletisim" onClick={() => setIsOpen(false)}>
                  <Button size="lg" data-testid="mobile-contact-button" className="w-full bg-brand-orange rounded-xl h-14 text-lg font-bold" asChild>
                    <span>
                      <Phone className="w-5 h-5 mr-2" />
                      İletişime Geç
                    </span>
                  </Button>
                </Link>
                <Link href="/kayit/on-kayit" onClick={() => setIsOpen(false)}>
                  <Button size="lg" variant="outline" data-testid="mobile-preregister-button" className="w-full rounded-xl h-14 text-lg" asChild>
                    <span>Ön Kayıt</span>
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
