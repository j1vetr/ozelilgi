import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { NAVIGATION, SCHOOL_INFO } from "@/lib/constants";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 text-xs md:text-sm">
        <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
          <div className="flex gap-4">
            <span className="flex items-center gap-1 opacity-90">
              <Phone className="w-3 h-3" /> {SCHOOL_INFO.phone}
            </span>
          </div>
          <div className="flex gap-4">
            <Link href="/kayit/on-kayit" className="hover:text-accent transition-colors font-medium">
              Ön Kayıt Formu
            </Link>
            <Link href="/iletisim" className="hover:text-accent transition-colors font-medium">
              Kampüs Ziyareti
            </Link>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300 border-b",
          scrolled
            ? "bg-background/95 backdrop-blur-md border-border shadow-sm py-2"
            : "bg-background border-transparent py-4"
        )}
      >
        <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
          {/* Logo */}
          <Link href="/">
            <a className="flex items-center gap-3 group">
              <div className="relative w-12 h-12 md:w-16 md:h-16 transition-transform group-hover:scale-105">
                 <img src="/images/logo.png" alt="Logo" className="w-full h-full object-contain" />
              </div>
              <div className="hidden md:block">
                <h1 className="font-display text-xl md:text-2xl font-bold text-primary leading-tight">
                  {SCHOOL_INFO.shortName}
                </h1>
                <p className="text-xs text-muted-foreground tracking-widest uppercase">
                  {SCHOOL_INFO.slogan}
                </p>
              </div>
            </a>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAVIGATION.map((item) => (
              <div key={item.title} className="relative group px-3 py-2">
                <Link href={item.href}>
                  <a className={cn(
                    "flex items-center gap-1 font-medium text-sm transition-colors hover:text-primary/80",
                     location.startsWith(item.href) ? "text-primary font-semibold" : "text-foreground/80"
                  )}>
                    {item.title}
                    {item.items && <ChevronDown className="w-3 h-3 opacity-50" />}
                  </a>
                </Link>
                
                {item.items && (
                  <div className="absolute top-full left-0 w-48 pt-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200">
                    <div className="bg-card border border-border rounded-lg shadow-xl p-2 flex flex-col gap-1">
                      {item.items.map((subItem) => (
                        <Link key={subItem.title} href={subItem.href}>
                          <a className="block px-3 py-2 text-sm text-foreground/80 hover:bg-muted hover:text-primary rounded-md transition-colors">
                            {subItem.title}
                          </a>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <div className="ml-4">
               <Link href="/kayit/on-kayit">
                <Button className="bg-primary hover:bg-primary/90 text-white font-medium px-6 shadow-lg shadow-primary/20 rounded-full">
                  Kayıt Ol
                </Button>
              </Link>
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="container px-4 py-6 flex flex-col gap-4">
              {NAVIGATION.map((item) => (
                <div key={item.title} className="flex flex-col gap-2">
                  <Link href={item.href}>
                    <a 
                      className="text-lg font-display font-medium text-foreground"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.title}
                    </a>
                  </Link>
                  {item.items && (
                    <div className="pl-4 flex flex-col gap-2 border-l-2 border-border/50">
                      {item.items.map((subItem) => (
                        <Link key={subItem.title} href={subItem.href}>
                          <a 
                            className="text-sm text-muted-foreground"
                            onClick={() => setIsOpen(false)}
                          >
                            {subItem.title}
                          </a>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="mt-4 pt-4 border-t border-border">
                <Button className="w-full" size="lg">Hemen Başvur</Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
