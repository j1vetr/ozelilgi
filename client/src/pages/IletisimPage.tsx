import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { PageHeader } from "@/components/ui/PageHeader";
import { useLanguage } from "@/lib/i18n";
import { T } from "@/lib/translations";
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

export default function IletisimPage() {
  const { lang, t } = useLanguage();
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactCards = [
    {
      icon: MapPin,
      title: T("contact.info.address", lang),
      content: SCHOOL_INFO.address,
      color: "from-blue-500 to-indigo-500",
      action: null
    },
    {
      icon: Phone,
      title: T("contact.info.phone", lang),
      content: SCHOOL_INFO.phone,
      color: "from-green-500 to-emerald-500",
      action: `tel:${SCHOOL_INFO.phone.replace(/\s/g, '')}`
    },
    {
      icon: Mail,
      title: T("contact.info.email", lang),
      content: SCHOOL_INFO.email,
      color: "from-orange-500 to-rose-500",
      action: `mailto:${SCHOOL_INFO.email}`
    },
    {
      icon: Clock,
      title: T("contact.info.hours", lang),
      content: T("contact.info.hours_detail", lang),
      color: "from-purple-500 to-pink-500",
      action: null
    }
  ];

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
        title: T("contact.form.success", lang),
        description: T("contact.form.success_desc", lang),
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: t("Hata", "Error"),
        description: t("Mesajınız gönderilemedi. Lütfen tekrar deneyiniz.", "Your message could not be sent. Please try again."),
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
        title={T("contact.title", lang)} 
        subtitle={T("contact.subtitle", lang)}
        breadcrumbs={[{ label: T("contact.title", lang), href: "/iletisim" }]}
      />

      <div className="container py-12 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {[
            { icon: Clock, text: t("Hızlı Yanıt", "Quick Response") },
            { icon: Shield, text: t("Güvenli İletişim", "Secure Communication") },
            { icon: MessageSquare, text: t("7/24 Destek", "24/7 Support") }
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">
              <item.icon className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-gray-700">{item.text}</span>
            </div>
          ))}
        </motion.div>

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
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-5 space-y-6"
            >
              <div className="bg-white rounded-2xl p-3 border border-gray-100 shadow-lg overflow-hidden">
                <div className="rounded-xl overflow-hidden h-64">
                  <LazyMap src={SCHOOL_INFO.mapEmbed} title={T("contact.map.title", lang)} />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-900 mb-1 flex items-center gap-2">
                    <Building className="w-4 h-4 text-primary" />
                    {t("Kampüsümüz", "Our Campus")}
                  </h3>
                  <p className="text-gray-500 text-sm">{SCHOOL_INFO.address}</p>
                  <a 
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SCHOOL_INFO.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" size="sm" className="mt-3 w-full rounded-lg">
                      <MapPin className="w-4 h-4 mr-2" />
                      {t("Yol Tarifi Al", "Get Directions")}
                    </Button>
                  </a>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary to-blue-700 rounded-2xl p-6 text-white shadow-lg">
                <Phone className="w-10 h-10 mb-3 opacity-80" />
                <h3 className="font-bold text-lg mb-1">{t("Hemen Arayın", "Call Now")}</h3>
                <p className="text-white/80 text-sm mb-4">{t("Eğitim danışmanlarımız sorularınızı yanıtlamak için hazır.", "Our education consultants are ready to answer your questions.")}</p>
                <a href={`tel:${SCHOOL_INFO.phone.replace(/\s/g, '')}`}>
                  <Button size="lg" className="w-full bg-white text-primary hover:bg-white/90 rounded-xl font-bold shadow-lg">
                    <Phone className="w-4 h-4 mr-2" />
                    {SCHOOL_INFO.phone}
                  </Button>
                </a>
              </div>

              <div className="bg-gradient-to-br from-orange-500 to-rose-500 rounded-2xl p-6 text-white shadow-lg">
                <h3 className="font-bold text-lg mb-1">{t("Kayıt Olmak mı İstiyorsunuz?", "Want to Enroll?")}</h3>
                <p className="text-white/80 text-sm mb-4">{t("Ön kayıt formunu doldurun, sizi arayalım.", "Fill out the pre-registration form and we'll call you.")}</p>
                <Link href="/kayit/on-kayit">
                  <Button size="sm" className="w-full bg-white text-orange-600 hover:bg-white/90 rounded-xl font-bold">
                    {T("preregister.title", lang)}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </motion.div>

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
                  <h2 className="text-3xl font-display font-bold mb-4">{T("contact.form.success", lang)}</h2>
                  <p className="text-white/90 mb-8 max-w-md">
                    {T("contact.form.success_desc", lang)}
                  </p>
                  <Button 
                    variant="secondary" 
                    size="lg" 
                    className="rounded-xl font-bold"
                    onClick={() => setIsSubmitted(false)}
                  >
                    {t("Yeni Mesaj Gönder", "Send New Message")}
                  </Button>
                </div>
              ) : (
                <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center shadow-lg">
                      <Send className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h2 className="text-xl font-display font-bold text-gray-900">{t("Bize Yazın", "Write to Us")}</h2>
                      <p className="text-gray-500 text-sm">{t("Tüm sorularınız için buradayız", "We are here for all your questions")}</p>
                    </div>
                  </div>

                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-7 h-7 rounded-lg bg-blue-100 flex items-center justify-center">
                            <User className="w-3.5 h-3.5 text-blue-600" />
                          </div>
                          <span className="font-semibold text-gray-900 text-sm">{t("Kişisel Bilgiler", "Personal Information")}</span>
                        </div>
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>{T("contact.form.name", lang)}</FormLabel>
                              <FormControl>
                                <Input placeholder={T("contact.form.name", lang)} className="h-11 rounded-xl" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>{T("contact.form.email", lang)}</FormLabel>
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
                              <FormLabel>{T("contact.form.phone", lang)}</FormLabel>
                              <FormControl>
                                <Input placeholder="05XX XXX XX XX" className="h-11 rounded-xl" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-7 h-7 rounded-lg bg-green-100 flex items-center justify-center">
                            <MessageSquare className="w-3.5 h-3.5 text-green-600" />
                          </div>
                          <span className="font-semibold text-gray-900 text-sm">{T("contact.form.message", lang)}</span>
                        </div>
                        <FormField
                          control={form.control}
                          name="subject"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>{T("contact.form.subject", lang)}</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger className="h-11 rounded-xl">
                                    <SelectValue placeholder={t("Konu seçiniz", "Select a subject")} />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="genel">{t("Genel Bilgi", "General Information")}</SelectItem>
                                  <SelectItem value="kayit">{t("Kayıt İşlemleri", "Enrollment")}</SelectItem>
                                  <SelectItem value="ziyaret">{t("Kampüs Ziyareti", "Campus Visit")}</SelectItem>
                                  <SelectItem value="akademik">{t("Akademik Bilgi", "Academic Information")}</SelectItem>
                                  <SelectItem value="ik">{t("İnsan Kaynakları", "Human Resources")}</SelectItem>
                                  <SelectItem value="diger">{t("Diğer", "Other")}</SelectItem>
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
                            <FormLabel>{T("contact.form.message", lang)}</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder={t("Sorularınız veya iletmek istedikleriniz...", "Your questions or what you'd like to share...")} 
                                className="min-h-[120px] rounded-xl resize-none"
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="pt-2">
                        <Button 
                          type="submit" 
                          className="w-full h-14 text-lg font-bold rounded-xl bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-700 shadow-lg shadow-primary/25"
                          disabled={mutation.isPending}
                        >
                          {mutation.isPending ? (
                            <>
                              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                              {T("contact.form.sending", lang)}
                            </>
                          ) : (
                            <>
                              <Send className="w-5 h-5 mr-2" />
                              {T("contact.form.submit", lang)}
                            </>
                          )}
                        </Button>
                        <p className="text-xs text-gray-400 text-center mt-4 flex items-center justify-center gap-2">
                          <Shield className="w-3 h-3" />
                          {t("Kişisel verileriniz KVKK kapsamında korunmaktadır.", "Your personal data is protected under KVKK.")}
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
