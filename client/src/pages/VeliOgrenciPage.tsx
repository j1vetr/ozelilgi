import { PageHeader } from "@/components/ui/PageHeader";
import { useLanguage } from "@/lib/i18n";
import { T } from "@/lib/translations";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { FileText, Truck, Info, Utensils } from "lucide-react";

export default function VeliOgrenciPage() {
  const { lang, t } = useLanguage();

  return (
    <div className="bg-background min-h-screen">
      <PageHeader 
        title={T("parent_student.title", lang)} 
        breadcrumbs={[{ label: T("parent_student.title", lang), href: "/veli-ogrenci" }]}
      />

      <div className="container py-16 px-4">
        <div className="grid lg:grid-cols-2 gap-12">
            
            <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                    <div className="p-2 bg-orange-100 text-orange-600 rounded-lg">
                        <Utensils className="w-6 h-6" />
                    </div>
                    <div>
                        <CardTitle>{t("Haftalık Yemek Listesi", "Weekly Lunch Menu")}</CardTitle>
                        <p className="text-sm text-muted-foreground">{t("05-09 Şubat 2026", "February 05-09, 2026")}</p>
                    </div>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>{t("Gün", "Day")}</TableHead>
                                <TableHead>{t("Öğle Yemeği", "Lunch")}</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell className="font-medium">{t("Pazartesi", "Monday")}</TableCell>
                                <TableCell>{t("Mercimek Çorbası, Tavuk Sote, Pilav, Ayran", "Lentil Soup, Chicken Stew, Rice, Ayran")}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium">{t("Salı", "Tuesday")}</TableCell>
                                <TableCell>{t("Domates Çorbası, İzmir Köfte, Makarna, Salata", "Tomato Soup, İzmir Meatballs, Pasta, Salad")}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium">{t("Çarşamba", "Wednesday")}</TableCell>
                                <TableCell>{t("Ezogelin Çorbası, Taze Fasulye, Bulgur Pilavı, Cacık", "Ezogelin Soup, Green Beans, Bulgur Pilaf, Cacık")}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium">{t("Perşembe", "Thursday")}</TableCell>
                                <TableCell>{t("Yayla Çorbası, Etli Nohut, Pirinç Pilavı, Turşu", "Yayla Soup, Chickpeas with Meat, Rice Pilaf, Pickles")}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium">{t("Cuma", "Friday")}</TableCell>
                                <TableCell>{t("Tarhana Çorbası, Fırın Balık, Roka Salata, Helva", "Tarhana Soup, Baked Fish, Arugula Salad, Halva")}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>

            <div className="space-y-8">
                <Card>
                    <CardHeader className="flex flex-row items-center gap-4">
                        <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                            <Truck className="w-6 h-6" />
                        </div>
                        <CardTitle>{t("Servis Bilgileri", "Transportation Information")}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground mb-4">
                            {t(
                              "Okul servislerimiz Gürsel Turizm güvencesiyle hizmet vermektedir. Servis kayıtları ve güzergah bilgisi için ulaşım ofisimizle iletişime geçebilirsiniz.",
                              "Our school buses operate under the guarantee of Gürsel Tourism. You can contact our transportation office for service registrations and route information."
                            )}
                        </p>
                        <div className="bg-muted p-4 rounded-lg text-sm">
                            <span className="font-bold">{t("Ulaşım Sorumlusu:", "Transportation Manager:")}</span> Mehmet Demir <br/>
                            <span className="font-bold">{t("Tel:", "Phone:")}</span> 0532 123 45 67
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center gap-4">
                        <div className="p-2 bg-red-100 text-red-600 rounded-lg">
                            <Info className="w-6 h-6" />
                        </div>
                        <CardTitle>{t("Okul Kuralları", "School Rules")}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0"/>
                                {t(
                                  "Ders zili çaldığında tüm öğrenciler sınıflarında hazır bulunmalıdır.",
                                  "All students must be ready in their classrooms when the bell rings."
                                )}
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0"/>
                                {t(
                                  "Okul kıyafet yönetmeliğine uyulması zorunludur.",
                                  "Compliance with the school dress code is mandatory."
                                )}
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0"/>
                                {t(
                                  "Cep telefonları ders saatlerinde kapalı tutulmalıdır.",
                                  "Cell phones must be turned off during class hours."
                                )}
                            </li>
                        </ul>
                    </CardContent>
                </Card>
            </div>
        </div>
      </div>
    </div>
  );
}
