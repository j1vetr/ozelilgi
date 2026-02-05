import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "../ui/button";
import { ArrowRight, Palette, Music, Code, FlaskConical, Dumbbell, BookOpen, UtensilsCrossed, Users } from "lucide-react";

const facilities = [
  { icon: Palette, name: "Görsel Sanatlar Atölyesi", desc: "Yaratıcılığı geliştiren" },
  { icon: Music, name: "Müzik Atölyesi", desc: "Enstrüman eğitimi" },
  { icon: Code, name: "Kodlama Atölyesi", desc: "Teknoloji ve yazılım" },
  { icon: FlaskConical, name: "Fen Bilgisi Laboratuvarı", desc: "Deneysel öğrenme" },
  { icon: Dumbbell, name: "100m² Kapalı Spor Salonu", desc: "Fiziksel gelişim" },
  { icon: BookOpen, name: "Kütüphane", desc: "Okuma sevgisi" },
  { icon: UtensilsCrossed, name: "Yemekhane", desc: "Sağlıklı beslenme" },
  { icon: Users, name: "Rehberlik Odası", desc: "Bireysel destek" },
];

export function FacilitiesSection() {
  return (
    <section className="py-14 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/50 to-white" />
      <div className="absolute -top-40 -left-40 w-[400px] h-[400px] bg-brand-blue/3 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -right-40 w-[400px] h-[400px] bg-brand-green/3 rounded-full blur-3xl" />

      <div className="container relative px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 data-testid="facilities-section-title" className="text-2xl md:text-3xl font-display font-bold text-primary mb-2">
            Kampüs Olanaklarımız
          </h2>
          <p className="text-sm text-muted-foreground max-w-lg mx-auto">
            2000m² kapalı alan ve 600m² bahçemizle modern eğitim ortamı sunuyoruz.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {facilities.map((facility, i) => {
            const Icon = facility.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md hover:border-gray-200 transition-all group cursor-pointer"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/5 group-hover:bg-primary/10 flex items-center justify-center mb-3 transition-colors">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-sm text-gray-800 mb-0.5 leading-tight">{facility.name}</h3>
                <p className="text-xs text-gray-400">{facility.desc}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center">
          <Link href="/kampus/galeri">
            <Button variant="outline" className="h-10 px-5 rounded-full text-sm font-medium">
              Tüm Kampüsü Keşfet
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
