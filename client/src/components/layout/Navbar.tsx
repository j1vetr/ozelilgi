import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { NAVIGATION } from "@/lib/constants";
import { Menu, X, ChevronDown } from "lucide-react";
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
          ? "py-3 bg-white/80 backdrop-blur-lg shadow-sm border-b border-gray-100"
          : "py-6 bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between">
        {/* Logo Section */}
        <Link href="/">
          <a className="flex items-center group">
            <div className="relative">
              {/* Rotating gradient border */}
              <div className={cn(
                "absolute -inset-1 rounded-full logo-ring",
                scrolled 
                  ? "bg-gradient-to-r from-brand-blue via-brand-green to-brand-orange opacity-70" 
                  : "bg-gradient-to-r from-brand-blue via-brand-yellow to-brand-orange opacity-90"
              )} />
              {/* Inner white circle with logo */}
              <div className={cn(
                "relative w-12 h-12 md:w-14 md:h-14 rounded-full p-2 transition-all duration-300 group-hover:scale-105",
                scrolled 
                  ? "bg-white shadow-md" 
                  : "bg-white shadow-xl"
              )}>
                <img src="/images/logo.png" alt="Boğaziçi İlgi Koleji Logo" className="w-full h-full object-contain" />
              </div>
              {/* Glow effect */}
              <div className={cn(
                "absolute -inset-2 rounded-full blur-md logo-glow pointer-events-none",
                scrolled 
                  ? "bg-brand-blue/20" 
                  : "bg-white/30"
              )} />
            </div>
          </a>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 bg-white/10 backdrop-blur-md px-2 py-1.5 rounded-full border border-white/20 shadow-lg">
          {NAVIGATION.map((item) => (
            <div key={item.title} className="relative group">
              <Link href={item.href}>
                <a className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-1",
                  location.startsWith(item.href) 
                    ? "bg-white text-primary shadow-sm" 
                    : scrolled 
                      ? "text-primary hover:bg-gray-100" 
                      : "text-white hover:bg-white/20"
                )}>
                  {item.title}
                  {item.items && <ChevronDown className="w-3 h-3 opacity-70" />}
                </a>
              </Link>
              
              {/* Dropdown */}
              {item.items && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300">
                  <div className="bg-white border border-gray-100 rounded-2xl shadow-xl p-2 min-w-[200px] overflow-hidden">
                    {item.items.map((subItem) => (
                      <Link key={subItem.title} href={subItem.href}>
                        <a className="block px-4 py-2.5 text-sm font-medium text-gray-600 hover:text-primary hover:bg-gray-50 rounded-xl transition-colors">
                          {subItem.title}
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="hidden lg:flex items-center gap-3">
          <Link href="/iletisim">
             <Button variant="ghost" className={cn(
               "font-medium transition-colors hover:bg-white/10",
               scrolled ? "text-primary hover:bg-gray-100" : "text-white"
             )}>
               İletişim
             </Button>
          </Link>
          <Link href="/kayit/on-kayit">
            <Button className="rounded-full px-6 bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold shadow-lg shadow-brand-orange/20 border-0">
              Kayıt Ol
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className={cn(
            "lg:hidden p-2 rounded-full transition-colors",
            scrolled ? "text-primary hover:bg-gray-100" : "text-white hover:bg-white/20"
          )}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden fixed inset-0 top-[60px] bg-background z-40 overflow-y-auto"
          >
            <div className="container px-4 py-8 flex flex-col gap-6">
              {NAVIGATION.map((item, i) => (
                <motion.div 
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col gap-3"
                >
                  <Link href={item.href}>
                    <a 
                      className="text-2xl font-display font-bold text-primary flex items-center justify-between"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.title}
                      {item.items && <ChevronDown className="w-5 h-5 opacity-50" />}
                    </a>
                  </Link>
                  {item.items && (
                    <div className="pl-4 flex flex-col gap-3 border-l-2 border-gray-100 ml-1">
                      {item.items.map((subItem) => (
                        <Link key={subItem.title} href={subItem.href}>
                          <a 
                            className="text-base text-muted-foreground font-medium py-1"
                            onClick={() => setIsOpen(false)}
                          >
                            {subItem.title}
                          </a>
                        </Link>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
              <div className="mt-8 grid gap-4">
                <Button size="lg" className="w-full bg-brand-orange rounded-xl">Hemen Başvur</Button>
                <Button size="lg" variant="outline" className="w-full rounded-xl">İletişime Geç</Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
