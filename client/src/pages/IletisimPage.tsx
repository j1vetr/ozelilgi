import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { PageHeader } from "@/components/ui/PageHeader";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { SCHOOL_INFO } from "@/lib/constants";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "İsim en az 2 karakter olmalıdır"),
  email: z.string().email("Geçerli bir e-posta adresi giriniz"),
  phone: z.string().min(10, "Geçerli bir telefon numarası giriniz"),
  subject: z.string().min(1, "Konu seçiniz"),
  message: z.string().min(10, "Mesajınız en az 10 karakter olmalıdır"),
});

export default function IletisimPage() {
  const { toast } = useToast();
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

  function onSubmit(values: z.infer<typeof formSchema>) {
    // In a real app, this would be an API call
    console.log(values);
    toast({
      title: "Mesajınız Alındı",
      description: "En kısa sürede sizinle iletişime geçeceğiz.",
    });
    form.reset();
  }

  return (
    <div className="bg-background min-h-screen">
      <PageHeader 
        title="İletişim" 
        subtitle="Sorularınız ve görüşleriniz için bize ulaşın."
        breadcrumbs={[{ label: "İletişim", href: "/iletisim" }]}
      />

      <div className="container py-16 px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="grid gap-6">
                <Card className="border-l-4 border-l-accent">
                    <CardContent className="p-6 flex items-start gap-4">
                        <div className="bg-primary/10 p-3 rounded-full text-primary">
                            <MapPin className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg mb-1">Adres</h3>
                            <p className="text-muted-foreground">{SCHOOL_INFO.address}</p>
                        </div>
                    </CardContent>
                </Card>
                <Card className="border-l-4 border-l-primary">
                    <CardContent className="p-6 flex items-start gap-4">
                        <div className="bg-primary/10 p-3 rounded-full text-primary">
                            <Phone className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg mb-1">Telefon</h3>
                            <p className="text-muted-foreground">{SCHOOL_INFO.phone}</p>
                        </div>
                    </CardContent>
                </Card>
                <Card className="border-l-4 border-l-accent">
                    <CardContent className="p-6 flex items-start gap-4">
                        <div className="bg-primary/10 p-3 rounded-full text-primary">
                            <Mail className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg mb-1">E-posta</h3>
                            <p className="text-muted-foreground">{SCHOOL_INFO.email}</p>
                        </div>
                    </CardContent>
                </Card>
                <Card className="border-l-4 border-l-primary">
                    <CardContent className="p-6 flex items-start gap-4">
                        <div className="bg-primary/10 p-3 rounded-full text-primary">
                            <Clock className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg mb-1">Çalışma Saatleri</h3>
                            <p className="text-muted-foreground">Pazartesi - Cuma: 08:30 - 17:30</p>
                            <p className="text-muted-foreground">Cumartesi: 09:00 - 13:00</p>
                        </div>
                    </CardContent>
                </Card>
            </div>
            
            {/* Map Placeholder */}
            <div className="h-64 bg-muted rounded-xl border border-border flex items-center justify-center relative overflow-hidden group">
                 <div className="absolute inset-0 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=41.0,29.0&zoom=13&size=600x300&sensor=false')] bg-cover bg-center opacity-50 grayscale hover:grayscale-0 transition-all"></div>
                 <Button variant="secondary" className="relative z-10 shadow-lg pointer-events-none">Haritada Göster</Button>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="shadow-lg border-t-4 border-t-primary">
              <CardHeader>
                <CardTitle className="font-display text-2xl">Bize Yazın</CardTitle>
                <CardDescription>
                  Formu doldurun, eğitim danışmanlarımız size dönüş yapsın.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Ad Soyad</FormLabel>
                          <FormControl>
                            <Input placeholder="Adınız Soyadınız" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div className="grid md:grid-cols-2 gap-4">
                        <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>E-posta</FormLabel>
                            <FormControl>
                                <Input placeholder="ornek@email.com" {...field} />
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
                                <Input placeholder="0555 555 55 55" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Konu</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Konu seçiniz" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="genel">Genel Bilgi</SelectItem>
                              <SelectItem value="kayit">Kayıt İşlemleri</SelectItem>
                              <SelectItem value="ik">İnsan Kaynakları</SelectItem>
                              <SelectItem value="diger">Diğer</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Mesajınız</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Sorularınız veya iletmek istedikleriniz..." 
                              className="min-h-[120px]"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" className="w-full font-bold text-lg h-12">Gönder</Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
