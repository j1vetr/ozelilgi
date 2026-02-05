import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { SCHOOL_INFO } from "@/lib/constants";
import { 
  MapPin, Phone, Mail, Clock, Loader2, CheckCircle, 
  Send, MessageSquare, User, ArrowRight, Shield, Building
} from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { Link } from "wouter";

function LazyMap({ src, title }: { src: string; title: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.disconnect(); } },
      { rootMargin: "200px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="w-full h-full">
      {isVisible ? (
        <iframe
          src={src}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={title}
        />
      ) : (
        <div className="w-full h-full bg-gray-100 animate-pulse rounded-xl flex items-center justify-center">
          <MapPin className="w-8 h-8 text-gray-300" />
        </div>
      )}
    </div>
  );
}

const formSchema = z.object({
  name: z.string().min(2, "İsim en az 2 karakter olmalıdır"),
  email: z.string().email("Geçerli bir e-posta adresi giriniz"),
  phone: z.string().min(10, "Geçerli bir telefon numarası giriniz"),
  subject: z.string().min(1, "Konu seçiniz"),
  message: z.string().min(10, "Mesajınız en az 10 karakter olmalıdır"),
});

const contactCards = [
  {
    icon: MapPin,
    title: "Adres",
    content: SCHOOL_INFO.address,
    color: "from-blue-500 to-indigo-500",
    action: null
  },
  {
    icon: Phone,
    title: "Telefon",
    content: SCHOOL_INFO.phone,
    color: "from-green-500 to-emerald-500",
    action: `tel:${SCHOOL_INFO.phone.replace(/\s/g, '')}`
  },
  {
    icon: Mail,
    title: "E-posta",
    content: SCHOOL_INFO.email,
    color: "from-orange-500 to-rose-500",
    action: `mailto:${SCHOOL_INFO.email}`
  },
  {
    icon: Clock,
    title: "Çalışma Saatleri",
    content: "Pzt-Cum: 08:30-17:30 | Cmt: 09:00-13:00",
    color: "from-purple-500 to-pink-500",
    action: null
  }
];

export default function IletisimPage() {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (values: z.infer<typeof formSchema>) => {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      
      if (!response.ok) {
        throw new Error("Mesaj gönderilemedi");
      }
      
      return response.json();
    },
    onSuccess: () => {
      setIsSubmitted(true);
      toast({
        title: "Mesajınız Alındı",
        description: "En kısa sürede sizinle iletişime geçeceğiz.",
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Hata",
        description: "Mesajınız gönderilemedi. Lütfen tekrar deneyiniz.",
        variant: "destructive",
      });
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    mutation.mutate(values);
  }

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
      <PageHeader 
        title="İletişim" 
        subtitle="Sorularınız İçin Her Zaman Yanınızdayız"
        breadcrumbs={[{ label: "İletişim", href: "/iletisim" }]}
      />

      <div className="container py-12 px-4">
        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {[
            { icon: Clock, text: "Hızlı Yanıt" },
            { icon: Shield, text: "Güvenli İletişim" },
            { icon: MessageSquare, text: "7/24 Destek" }
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">
              <item.icon className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-gray-700">{item.text}</span>
            </div>
          ))}
        </motion.div>

        {/* Contact Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12"
        >
          {contactCards.map((card, i) => {
            const CardWrapper = card.action ? 'a' : 'div';
            const cardProps = card.action ? { href: card.action } : {};
            
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <CardWrapper 
                  {...cardProps}
                  className={`bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-lg transition-all text-center group block h-full ${card.action ? 'cursor-pointer' : ''}`}
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center mx-auto mb-3 shadow-lg group-hover:scale-110 transition-transform`}>
                    <card.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-sm mb-1">{card.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{card.content}</p>
                </CardWrapper>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Map & Quick Actions */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-5 space-y-6"
            >
              {/* Google Maps */}
              <div className="bg-white rounded-2xl p-3 border border-gray-100 shadow-lg overflow-hidden">
                <div className="rounded-xl overflow-hidden h-64">
                  <LazyMap src={SCHOOL_INFO.mapEmbed} title="Okul Konumu" />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-900 mb-1 flex items-center gap-2">
                    <Building className="w-4 h-4 text-primary" />
                    Kampüsümüz
                  </h3>
                  <p className="text-gray-500 text-sm">{SCHOOL_INFO.address}</p>
                  <a 
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SCHOOL_INFO.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" size="sm" className="mt-3 w-full rounded-lg">
                      <MapPin className="w-4 h-4 mr-2" />
                      Yol Tarifi Al
                    </Button>
                  </a>
                </div>
              </div>

              {/* Quick Call CTA */}
              <div className="bg-gradient-to-br from-primary to-blue-700 rounded-2xl p-6 text-white shadow-lg">
                <Phone className="w-10 h-10 mb-3 opacity-80" />
                <h3 className="font-bold text-lg mb-1">Hemen Arayın</h3>
                <p className="text-white/80 text-sm mb-4">Eğitim danışmanlarımız sorularınızı yanıtlamak için hazır.</p>
                <a href={`tel:${SCHOOL_INFO.phone.replace(/\s/g, '')}`}>
                  <Button size="lg" className="w-full bg-white text-primary hover:bg-white/90 rounded-xl font-bold shadow-lg">
                    <Phone className="w-4 h-4 mr-2" />
                    {SCHOOL_INFO.phone}
                  </Button>
                </a>
              </div>

              {/* Registration CTA */}
              <div className="bg-gradient-to-br from-orange-500 to-rose-500 rounded-2xl p-6 text-white shadow-lg">
                <h3 className="font-bold text-lg mb-1">Kayıt Olmak mı İstiyorsunuz?</h3>
                <p className="text-white/80 text-sm mb-4">Ön kayıt formunu doldurun, sizi arayalım.</p>
                <Link href="/kayit/on-kayit">
                  <Button size="sm" className="w-full bg-white text-orange-600 hover:bg-white/90 rounded-xl font-bold">
                    Ön Kayıt Formu
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-7"
            >
              {isSubmitted ? (
                <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl p-10 text-center text-white shadow-2xl h-full flex flex-col items-center justify-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                    className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    <CheckCircle className="w-12 h-12 text-white" />
                  </motion.div>
                  <h2 className="text-3xl font-display font-bold mb-4">Mesajınız Alındı!</h2>
                  <p className="text-white/90 mb-8 max-w-md">
                    Talebiniz başarıyla iletildi. Eğitim danışmanlarımız en kısa sürede sizinle iletişime geçecektir.
                  </p>
                  <Button 
                    variant="secondary" 
                    size="lg" 
                    className="rounded-xl font-bold"
                    onClick={() => setIsSubmitted(false)}
                  >
                    Yeni Mesaj Gönder
                  </Button>
                </div>
              ) : (
                <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center shadow-lg">
                      <Send className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h2 className="text-xl font-display font-bold text-gray-900">Bize Yazın</h2>
                      <p className="text-gray-500 text-sm">Tüm sorularınız için buradayız</p>
                    </div>
                  </div>

                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                      {/* Name */}
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-7 h-7 rounded-lg bg-blue-100 flex items-center justify-center">
                            <User className="w-3.5 h-3.5 text-blue-600" />
                          </div>
                          <span className="font-semibold text-gray-900 text-sm">Kişisel Bilgiler</span>
                        </div>
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Ad Soyad</FormLabel>
                              <FormControl>
                                <Input placeholder="Adınız Soyadınız" className="h-11 rounded-xl" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      {/* Contact Info */}
                      <div className="grid md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>E-posta</FormLabel>
                              <FormControl>
                                <Input placeholder="ornek@email.com" className="h-11 rounded-xl" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Telefon</FormLabel>
                              <FormControl>
                                <Input placeholder="05XX XXX XX XX" className="h-11 rounded-xl" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      {/* Subject */}
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-7 h-7 rounded-lg bg-green-100 flex items-center justify-center">
                            <MessageSquare className="w-3.5 h-3.5 text-green-600" />
                          </div>
                          <span className="font-semibold text-gray-900 text-sm">Mesajınız</span>
                        </div>
                        <FormField
                          control={form.control}
                          name="subject"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Konu</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger className="h-11 rounded-xl">
                                    <SelectValue placeholder="Konu seçiniz" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="genel">Genel Bilgi</SelectItem>
                                  <SelectItem value="kayit">Kayıt İşlemleri</SelectItem>
                                  <SelectItem value="ziyaret">Kampüs Ziyareti</SelectItem>
                                  <SelectItem value="akademik">Akademik Bilgi</SelectItem>
                                  <SelectItem value="ik">İnsan Kaynakları</SelectItem>
                                  <SelectItem value="diger">Diğer</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Mesajınız</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Sorularınız veya iletmek istedikleriniz..." 
                                className="min-h-[120px] rounded-xl resize-none"
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* Submit */}
                      <div className="pt-2">
                        <Button 
                          type="submit" 
                          className="w-full h-14 text-lg font-bold rounded-xl bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-700 shadow-lg shadow-primary/25"
                          disabled={mutation.isPending}
                        >
                          {mutation.isPending ? (
                            <>
                              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                              Gönderiliyor...
                            </>
                          ) : (
                            <>
                              <Send className="w-5 h-5 mr-2" />
                              Mesaj Gönder
                            </>
                          )}
                        </Button>
                        <p className="text-xs text-gray-400 text-center mt-4 flex items-center justify-center gap-2">
                          <Shield className="w-3 h-3" />
                          Kişisel verileriniz KVKK kapsamında korunmaktadır.
                        </p>
                      </div>
                    </form>
                  </Form>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
