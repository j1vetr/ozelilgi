import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const STATS = [
  { value: "25", label: "Yıllık Tecrübe", suffix: "+" },
  { value: "1500", label: "Mezun", suffix: "+" },
  { value: "100", label: "Üniversite Başarısı", suffix: "%" },
  { value: "12", label: "Öğrenci/Öğretmen", suffix: "" },
];

export function StatsTicker() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <div ref={containerRef} className="bg-primary text-white py-24 overflow-hidden relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
        backgroundSize: "40px 40px"
      }}></div>

      <div className="container px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {STATS.map((stat, i) => (
            <div key={i} className="text-center relative">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
              >
                <div className="flex items-center justify-center font-display font-bold text-5xl md:text-7xl mb-2 text-accent">
                  {stat.value}
                  <span className="text-3xl md:text-5xl ml-1 text-white/50">{stat.suffix}</span>
                </div>
                <div className="text-white/60 font-medium uppercase tracking-widest text-sm">
                  {stat.label}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
