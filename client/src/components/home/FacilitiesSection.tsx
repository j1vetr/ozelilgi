import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "../ui/button";
import { ArrowRight, Palette, Music, Code, FlaskConical, Dumbbell, BookOpen, UtensilsCrossed, Users, Sparkles } from "lucide-react";

const facilities = [
  { icon: Palette, name: "Görsel Sanatlar Atölyesi", color: "from-pink-500 to-rose-500", bg: "bg-pink-50" },
  { icon: Music, name: "Müzik Atölyesi", color: "from-violet-500 to-purple-500", bg: "bg-violet-50" },
  { icon: Code, name: "Kodlama Atölyesi", color: "from-blue-500 to-cyan-500", bg: "bg-blue-50" },
  { icon: FlaskConical, name: "Fen Bilgisi Laboratuvarı", color: "from-emerald-500 to-teal-500", bg: "bg-emerald-50" },
  { icon: Dumbbell, name: "100m² Kapalı Spor Salonu", color: "from-orange-500 to-amber-500", bg: "bg-orange-50" },
  { icon: BookOpen, name: "Kütüphane", color: "from-indigo-500 to-blue-500", bg: "bg-indigo-50" },
  { icon: UtensilsCrossed, name: "Yemekhane", color: "from-yellow-500 to-orange-500", bg: "bg-yellow-50" },
  { icon: Users, name: "Rehberlik Odası", color: "from-teal-500 to-green-500", bg: "bg-teal-50" },
];

export function FacilitiesSection() {
  return (
    <section className="py-16 md:py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50" />
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-brand-green/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-orange/3 rounded-full blur-3xl" />

      <div className="container relative px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/5 text-primary font-medium rounded-full text-xs tracking-wider uppercase mb-4"
          >
            <Sparkles className="w-3 h-3" />
            Modern Kampüs
          </motion.span>
          <h2 data-testid="facilities-section-title" className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-primary mb-3">
            Kampüs Olanaklarımız
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
            2000m² kapalı alan ve 600m² bahçemizle öğrencilerimize en modern eğitim ortamını sunuyoruz.
          </p>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-10"
        >
          {[
            { value: "2000m²", label: "Kapalı Alan" },
            { value: "600m²", label: "Bahçe" },
            { value: "2013", label: "Kuruluş Yılı" },
            { value: "4", label: "Anaokulu Sınıfı" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl px-6 py-4 shadow-sm border border-gray-100 text-center min-w-[120px]"
            >
              <div className="text-xl md:text-2xl font-bold text-primary">{stat.value}</div>
              <div className="text-xs text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {facilities.map((facility, i) => {
            const Icon = facility.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className={`${facility.bg} rounded-2xl p-5 shadow-sm border border-white hover:shadow-lg transition-all duration-300 group cursor-pointer relative overflow-hidden`}
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${facility.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                <div className={`relative z-10`}>
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${facility.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-sm text-gray-800 leading-tight">{facility.name}</h3>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link href="/kampus/galeri">
            <Button className="h-11 px-6 rounded-full bg-primary hover:bg-primary/90 text-white font-semibold shadow-lg shadow-primary/20">
              Kampüs Galerisin Keşfet
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
