import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { PageHeader } from "@/components/ui/PageHeader";
import { useLanguage } from "@/lib/i18n";
import { T } from "@/lib/translations";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle, Loader2, Shield, Clock, Phone, User, Mail, BookOpen, MessageSquare, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { useMutation } from "@tanstack/react-query";
import { SCHOOL_INFO } from "@/lib/constants";
import { Link } from "wouter";

const formSchema = z.object({
  parentName: z.string().min(2, "Veli Adı en az 2 karakter olmalıdır"),
  studentName: z.string().min(2, "Öğrenci Adı en az 2 karakter olmalıdır"),
  phone: z.string().min(10, "Geçerli bir telefon numarası giriniz"),
  email: z.string().email("Geçerli bir e-posta adresi giriniz"),
  grade: z.string().min(1, "Sınıf seviyesi seçiniz"),
  notes: z.string().optional(),
});

export default function OnKayitPage() {
  const { lang, t } = useLanguage();
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const trustBadges = [
    { icon: Shield, text: t("KVKK Uyumlu", "KVKK Compliant") },
    { icon: Clock, text: t("24 Saat İçinde Dönüş", "Response Within 24 Hours") },
    { icon: CheckCircle, text: t("Ücretsiz Danışmanlık", "Free Consultation") }
  ];

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      parentName: "",
      studentName: "",
      phone: "",
      email: "",
      grade: "",
      notes: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (values: z.infer<typeof formSchema>) => {
      const response = await fetch("/api/pre-registrations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      
      if (!response.ok) {
        throw new Error("Başvuru gönderilemedi");
      }
      
      return response.json();
    },
    onSuccess: () => {
      setIsSubmitted(true);
      toast({
        title: T("preregister.success", lang),
        description: T("preregister.success_desc", lang),
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: t("Hata", "Error"),
        description: t("Başvurunuz gönderilemedi. Lütfen tekrar deneyiniz.", "Your application could not be sent. Please try again."),
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
        title={T("preregister.title", lang)} 
        subtitle={T("preregister.subtitle", lang)}
        breadcrumbs={[
          { label: T("nav.enrollment", lang), href: "/kayit" },
          { label: T("preregister.title", lang), href: "/kayit/on-kayit" }
        ]}
      />

      <div className="container py-12 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap justify-center gap-4 mb-10"
        >
          {trustBadges.map((badge, i) => (
            <div key={i} className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">
              <badge.icon className="w-4 h-4 text-green-500" />
              <span className="text-sm font-medium text-gray-700">{badge.text}</span>
            </div>
          ))}
        </motion.div>

        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-lg mx-auto"
          >
            <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl p-10 text-center text-white shadow-2xl">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <CheckCircle className="w-12 h-12 text-white" />
              </motion.div>
              <h2 className="text-3xl font-display font-bold mb-4">{T("preregister.success", lang)}</h2>
              <p className="text-white/90 mb-8">
                {T("preregister.success_desc", lang)}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button 
                  variant="secondary" 
                  size="lg" 
                  className="rounded-xl font-bold"
                  onClick={() => setIsSubmitted(false)}
                >
                  {t("Yeni Başvuru Yap", "Make New Application")}
                </Button>
                <Link href="/">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="rounded-xl font-bold border-white/30 text-white hover:bg-white/10"
                  >
                    {t("Ana Sayfaya Dön", "Return to Home")}
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        ) : (
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-8">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="lg:col-span-4 space-y-6"
              >
                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-lg">
                  <h3 className="font-bold text-lg text-gray-900 mb-5 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-primary" />
                    {T("enrollment_process.title", lang)}
                  </h3>
                  <ol className="space-y-4 relative">
                    <li className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-sm shadow-lg">1</div>
                        <div className="w-0.5 h-full bg-gray-200 mt-2" />
                      </div>
                      <div className="pb-4">
                        <h4 className="font-semibold text-gray-900">{t("Ön Başvuru", "Pre-Application")}</h4>
                        <p className="text-xs text-gray-500">{t("Bu formu doldurun", "Fill out this form")}</p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-sm shadow-lg">2</div>
                        <div className="w-0.5 h-full bg-gray-200 mt-2" />
                      </div>
                      <div className="pb-4">
                        <h4 className="font-semibold text-gray-900">{t("Görüşme", "Interview")}</h4>
                        <p className="text-xs text-gray-500">{t("Sizi arayacağız", "We will call you")}</p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-bold text-sm shadow-lg">3</div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{t("Kesin Kayıt", "Final Registration")}</h4>
                        <p className="text-xs text-gray-500">{t("Kampüs ziyareti ve kayıt", "Campus visit and enrollment")}</p>
                      </div>
                    </li>
                  </ol>
                </div>

                <div className="bg-gradient-to-br from-primary to-blue-700 rounded-2xl p-6 text-white shadow-lg">
                  <h3 className="font-bold mb-3">{t("Sorularınız mı Var?", "Have Questions?")}</h3>
                  <p className="text-white/80 text-sm mb-4">{t("Hemen bizi arayın, yardımcı olalım.", "Call us now, let us help you.")}</p>
                  <a href={`tel:${SCHOOL_INFO.phone.replace(/\s/g, '')}`}>
                    <Button size="sm" className="w-full bg-white text-primary hover:bg-white/90 rounded-lg font-bold">
                      <Phone className="w-4 h-4 mr-2" />
                      {SCHOOL_INFO.phone}
                    </Button>
                  </a>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="lg:col-span-8"
              >
                <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div>
                        <div className="flex items-center gap-2 mb-4">
                          <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center">
                            <User className="w-4 h-4 text-orange-600" />
                          </div>
                          <h3 className="font-bold text-gray-900">{t("Öğrenci Bilgileri", "Student Information")}</h3>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                          <FormField
                            control={form.control}
                            name="studentName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>{T("preregister.student_name", lang)}</FormLabel>
                                <FormControl>
                                  <Input placeholder={t("Öğrencinin adı ve soyadı", "Student's full name")} className="h-11 rounded-xl" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="grade"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>{T("preregister.grade", lang)}</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <FormControl>
                                    <SelectTrigger className="h-11 rounded-xl">
                                      <SelectValue placeholder={T("preregister.select_grade", lang)} />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <SelectItem value="anaokulu-3">{t("Anaokulu (3 Yaş)", "Preschool (Age 3)")}</SelectItem>
                                    <SelectItem value="anaokulu-4">{t("Anaokulu (4 Yaş)", "Preschool (Age 4)")}</SelectItem>
                                    <SelectItem value="anaokulu-5">{t("Anaokulu (5 Yaş)", "Preschool (Age 5)")}</SelectItem>
                                    <SelectItem value="anaokulu-6">{t("Anaokulu (6 Yaş)", "Preschool (Age 6)")}</SelectItem>
                                    <SelectItem value="1">{t("1. Sınıf", "Grade 1")}</SelectItem>
                                    <SelectItem value="2">{t("2. Sınıf", "Grade 2")}</SelectItem>
                                    <SelectItem value="3">{t("3. Sınıf", "Grade 3")}</SelectItem>
                                    <SelectItem value="4">{t("4. Sınıf", "Grade 4")}</SelectItem>
                                    <SelectItem value="5">{t("5. Sınıf", "Grade 5")}</SelectItem>
                                    <SelectItem value="6">{t("6. Sınıf", "Grade 6")}</SelectItem>
                                    <SelectItem value="7">{t("7. Sınıf", "Grade 7")}</SelectItem>
                                    <SelectItem value="8">{t("8. Sınıf", "Grade 8")}</SelectItem>
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center gap-2 mb-4">
                          <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
                            <Phone className="w-4 h-4 text-blue-600" />
                          </div>
                          <h3 className="font-bold text-gray-900">{t("Veli İletişim Bilgileri", "Parent Contact Information")}</h3>
                        </div>
                        <div className="space-y-4">
                          <FormField
                            control={form.control}
                            name="parentName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>{T("preregister.parent_name", lang)}</FormLabel>
                                <FormControl>
                                  <Input placeholder={t("Velinin adı ve soyadı", "Parent's full name")} className="h-11 rounded-xl" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <div className="grid md:grid-cols-2 gap-4">
                            <FormField
                              control={form.control}
                              name="phone"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>{T("preregister.parent_phone", lang)}</FormLabel>
                                  <FormControl>
                                    <Input placeholder="05XX XXX XX XX" className="h-11 rounded-xl" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={form.control}
                              name="email"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>{T("preregister.parent_email", lang)}</FormLabel>
                                  <FormControl>
                                    <Input placeholder="ornek@email.com" className="h-11 rounded-xl" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center gap-2 mb-4">
                          <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center">
                            <MessageSquare className="w-4 h-4 text-green-600" />
                          </div>
                          <h3 className="font-bold text-gray-900">{t("Ek Bilgiler", "Additional Information")} <span className="font-normal text-gray-400">({t("Opsiyonel", "Optional")})</span></h3>
                        </div>
                        <FormField
                          control={form.control}
                          name="notes"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Textarea 
                                  placeholder={t("Belirtmek istediğiniz özel durumlar, sorular veya talepler...", "Special situations, questions, or requests you'd like to mention...")} 
                                  className="min-h-[100px] rounded-xl resize-none"
                                  {...field} 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="pt-4">
                        <Button 
                          type="submit" 
                          className="w-full h-14 text-lg font-bold rounded-xl bg-gradient-to-r from-orange-500 to-rose-500 hover:from-orange-600 hover:to-rose-600 shadow-lg shadow-orange-500/25"
                          disabled={mutation.isPending}
                        >
                          {mutation.isPending ? (
                            <>
                              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                              {T("preregister.sending", lang)}
                            </>
                          ) : (
                            <>
                              {T("preregister.submit", lang)}
                              <ArrowRight className="w-5 h-5 ml-2" />
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
              </motion.div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
