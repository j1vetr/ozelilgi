import { Link } from "wouter";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useEffect } from "react";
import { SCHOOL_INFO } from "@/lib/constants";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: { label: string; href: string }[];
  backgroundImage?: string;
}

export function PageHeader({ title, subtitle, breadcrumbs, backgroundImage }: PageHeaderProps) {
  
  useEffect(() => {
    document.title = `${title} | ${SCHOOL_INFO.name}`;
  }, [title]);

  return (
    <div className="relative bg-primary pt-28 md:pt-32 pb-16 md:pb-20 overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
      
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <img src={backgroundImage} alt={title} className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-primary/80 mix-blend-multiply" />
        </div>
      )}

      <div className="container relative z-10 px-4 text-center">
        {breadcrumbs && (
          <nav className="flex justify-center items-center text-sm text-white/60 mb-6 space-x-2">
            <Link href="/"><a className="hover:text-white transition-colors">Anasayfa</a></Link>
            {breadcrumbs.map((crumb, index) => (
              <div key={index} className="flex items-center">
                <ChevronRight className="w-4 h-4 mx-1" />
                {crumb.href ? (
                  <Link href={crumb.href}><a className="hover:text-white transition-colors">{crumb.label}</a></Link>
                ) : (
                  <span className="text-accent">{crumb.label}</span>
                )}
              </div>
            ))}
          </nav>
        )}
        
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-md animate-in slide-in-from-bottom-5 fade-in duration-700">
          {title}
        </h1>
        
        {subtitle && (
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto font-light leading-relaxed animate-in slide-in-from-bottom-5 fade-in duration-700 delay-150">
            {subtitle}
          </p>
        )}
      </div>
      
      {/* Decorative curve at bottom */}
      <div className="absolute -bottom-1 left-0 right-0 h-12 bg-background rounded-t-[50%] scale-x-150 translate-y-1/2"></div>
    </div>
  );
}
