import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { PageHeader } from "@/components/ui/PageHeader";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle2, Loader2 } from "lucide-react";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { useMutation } from "@tanstack/react-query";

const formSchema = z.object({
  parentName: z.string().min(2, "Veli Adı en az 2 karakter olmalıdır"),
  studentName: z.string().min(2, "Öğrenci Adı en az 2 karakter olmalıdır"),
  phone: z.string().min(10, "Geçerli bir telefon numarası giriniz"),
  email: z.string().email("Geçerli bir e-posta adresi giriniz"),
  grade: z.string().min(1, "Sınıf seviyesi seçiniz"),
  notes: z.string().optional(),
});

export default function OnKayitPage() {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);

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
        title: "Ön Kayıt Talebi Alındı",
        description: "Eğitim danışmanlarımız en kısa sürede sizinle iletişime geçecektir.",
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Hata",
        description: "Başvurunuz gönderilemedi. Lütfen tekrar deneyiniz.",
        variant: "destructive",
      });
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    mutation.mutate(values);
  }

  return (
    <div className="bg-background min-h-screen">
      <PageHeader 
        title="Ön Kayıt" 
        subtitle="Sınırlı kontenjan avantajlarından yararlanmak için formu doldurun."
        breadcrumbs={[
            { label: "Kayıt", href: "/kayit" },
            { label: "Ön Kayıt", href: "/kayit/on-kayit" }
        ]}
      />

      <div className="container py-16 px-4 max-w-4xl">
        {isSubmitted ? (
            <Card className="border-none shadow-xl bg-primary text-white p-12 text-center">
                <div className="flex justify-center mb-6">
                    <CheckCircle2 className="w-20 h-20 text-accent" />
                </div>
                <h2 className="text-3xl font-display font-bold mb-4">Başvurunuz Alındı!</h2>
                <p className="text-lg text-white/80 max-w-lg mx-auto mb-8">
                    Ön kayıt talebiniz başarıyla sistemimize ulaşmıştır. Eğitim danışmanlarımız en kısa sürede sizinle iletişime geçerek randevu oluşturacaktır.
                </p>
                <Button variant="secondary" size="lg" onClick={() => setIsSubmitted(false)}>
                    Yeni Başvuru Yap
                </Button>
            </Card>
        ) : (
            <div className="grid md:grid-cols-12 gap-8">
                <div className="md:col-span-4 space-y-6">
                    <div className="bg-muted/50 p-6 rounded-xl border border-border">
                        <h3 className="font-bold text-lg mb-4">Kayıt Süreci</h3>
                        <ol className="space-y-4 relative border-l border-primary/20 ml-2">
                            <li className="pl-6 relative">
                                <span className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-primary" />
                                <h4 className="font-semibold text-primary">Ön Başvuru</h4>
                                <p className="text-sm text-muted-foreground">Online formu doldurun.</p>
                            </li>
                            <li className="pl-6 relative">
                                <span className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-accent" />
                                <h4 className="font-semibold text-primary">Tanışma Randevusu</h4>
                                <p className="text-sm text-muted-foreground">Okul ziyareti ve bilgilendirme.</p>
                            </li>
                            <li className="pl-6 relative">
                                <span className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-muted-foreground" />
                                <h4 className="font-semibold text-primary">Kesin Kayıt</h4>
                                <p className="text-sm text-muted-foreground">Evrak teslimi ve kayıt işlemleri.</p>
                            </li>
                        </ol>
                    </div>
                </div>

                <div className="md:col-span-8">
                    <Card className="shadow-lg border-t-4 border-t-accent">
                        <CardContent className="p-8">
                            <h2 className="text-2xl font-display font-bold text-primary mb-6">Öğrenci Bilgileri</h2>
                            <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <FormField
                                    control={form.control}
                                    name="studentName"
                                    render={({ field }) => (
                                        <FormItem>
                                        <FormLabel>Öğrenci Adı Soyadı</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Öğrencinin Adı" {...field} />
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
                                        <FormLabel>Aday Sınıf</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Sınıf Seçiniz" />
                                            </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                            <SelectItem value="anaokulu">Anaokulu</SelectItem>
                                            <SelectItem value="1">1. Sınıf</SelectItem>
                                            <SelectItem value="2">2. Sınıf</SelectItem>
                                            <SelectItem value="3">3. Sınıf</SelectItem>
                                            <SelectItem value="4">4. Sınıf</SelectItem>
                                            <SelectItem value="5">5. Sınıf</SelectItem>
                                            <SelectItem value="6">6. Sınıf</SelectItem>
                                            <SelectItem value="7">7. Sınıf</SelectItem>
                                            <SelectItem value="8">8. Sınıf</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                        </FormItem>
                                    )}
                                    />
                                </div>

                                <div className="space-y-4">
                                    <h3 className="font-bold text-lg border-b pb-2 mt-4">Veli İletişim Bilgileri</h3>
                                    <FormField
                                        control={form.control}
                                        name="parentName"
                                        render={({ field }) => (
                                            <FormItem>
                                            <FormLabel>Veli Adı Soyadı</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Velinin Adı" {...field} />
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
                                                <FormLabel>Cep Telefonu</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="05XX XXX XX XX" {...field} />
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
                                                <FormLabel>E-posta</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="veli@email.com" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                    
                                    <FormField
                                        control={form.control}
                                        name="notes"
                                        render={({ field }) => (
                                            <FormItem>
                                            <FormLabel>Eklemek İstedikleriniz (Opsiyonel)</FormLabel>
                                            <FormControl>
                                                <Textarea placeholder="Varsa belirtmek istediğiniz özel durumlar..." {...field} />
                                            </FormControl>
                                            <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                
                                <Button 
                                  type="submit" 
                                  className="w-full text-lg h-12 font-bold shadow-lg shadow-primary/10"
                                  disabled={mutation.isPending}
                                >
                                  {mutation.isPending ? (
                                    <>
                                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                      Gönderiliyor...
                                    </>
                                  ) : (
                                    "Ön Kayıt Başvurusu Gönder"
                                  )}
                                </Button>
                                <p className="text-xs text-muted-foreground text-center mt-4">
                                    Kişisel verileriniz KVKK kapsamında korunmaktadır.
                                </p>
                            </form>
                            </Form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        )}
      </div>
    </div>
  );
}
