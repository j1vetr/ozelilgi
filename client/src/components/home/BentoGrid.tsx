import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ArrowRight, Code, Globe, Palette, Calculator, FlaskConical, Trophy } from "lucide-react";
import { Link } from "wouter";

const programs = [
  {
    title: "Global Eğitim",
    desc: "Cambridge standartlarında yabancı dil",
    icon: Globe,
    color: "bg-blue-500",
    href: "/programlar/yabanci-dil",
    className: "md:col-span-2"
  },
  {
    title: "STEM & Kodlama",
    desc: "Geleceğin teknolojisi",
    icon: Code,
    color: "bg-purple-500",
    href: "/programlar/stem-robotik",
    className: "md:col-span-1"
  },
  {
    title: "Sanat Atölyeleri",
    desc: "Yaratıcı düşünce",
    icon: Palette,
    color: "bg-pink-500",
    href: "/programlar/sanat-muzik",
    className: "md:col-span-1"
  },
  {
    title: "Bilim Laboratuvarları",
    desc: "Deney ve gözlem",
    icon: FlaskConical,
    color: "bg-teal-500",
    href: "/akademik",
    className: "md:col-span-2"
  }
];

export function BentoGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto">
      {programs.map((item, index) => (
        <Link key={index} href={item.href}>
          <motion.div
            whileHover={{ scale: 0.98 }}
            className={cn(
              "group relative overflow-hidden rounded-3xl p-8 min-h-[240px] cursor-pointer bg-white border border-border shadow-sm hover:shadow-xl transition-all duration-300",
              item.className
            )}
          >
            <div className={cn(
              "absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-20 -mr-10 -mt-10 transition-transform group-hover:scale-150",
              item.color
            )} />
            
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div className={cn(
                "w-12 h-12 rounded-xl flex items-center justify-center text-white mb-4 shadow-lg",
                item.color
              )}>
                <item.icon className="w-6 h-6" />
              </div>
              
              <div>
                <h3 className="text-2xl font-display font-bold text-primary mb-2 group-hover:translate-x-1 transition-transform">
                  {item.title}
                </h3>
                <p className="text-muted-foreground font-medium group-hover:text-primary/70 transition-colors">
                  {item.desc}
                </p>
              </div>

              <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                <div className="bg-primary/5 p-3 rounded-full">
                  <ArrowRight className="w-5 h-5 text-primary" />
                </div>
              </div>
            </div>
          </motion.div>
        </Link>
      ))}
    </div>
  );
}
