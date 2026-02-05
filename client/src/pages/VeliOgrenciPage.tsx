import { PageHeader } from "@/components/ui/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { FileText, Truck, Info, Utensils } from "lucide-react";

export default function VeliOgrenciPage() {
  return (
    <div className="bg-background min-h-screen">
      <PageHeader 
        title="Veli & Öğrenci" 
        breadcrumbs={[{ label: "Veli & Öğrenci", href: "/veli-ogrenci" }]}
      />

      <div className="container py-16 px-4">
        <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Lunch Menu */}
            <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                    <div className="p-2 bg-orange-100 text-orange-600 rounded-lg">
                        <Utensils className="w-6 h-6" />
                    </div>
                    <div>
                        <CardTitle>Haftalık Yemek Listesi</CardTitle>
                        <p className="text-sm text-muted-foreground">05-09 Şubat 2026</p>
                    </div>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Gün</TableHead>
                                <TableHead>Öğle Yemeği</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell className="font-medium">Pazartesi</TableCell>
                                <TableCell>Mercimek Çorbası, Tavuk Sote, Pilav, Ayran</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium">Salı</TableCell>
                                <TableCell>Domates Çorbası, İzmir Köfte, Makarna, Salata</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium">Çarşamba</TableCell>
                                <TableCell>Ezogelin Çorbası, Taze Fasulye, Bulgur Pilavı, Cacık</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium">Perşembe</TableCell>
                                <TableCell>Yayla Çorbası, Etli Nohut, Pirinç Pilavı, Turşu</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium">Cuma</TableCell>
                                <TableCell>Tarhana Çorbası, Fırın Balık, Roka Salata, Helva</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>

            {/* Service & Rules */}
            <div className="space-y-8">
                <Card>
                    <CardHeader className="flex flex-row items-center gap-4">
                        <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                            <Truck className="w-6 h-6" />
                        </div>
                        <CardTitle>Servis Bilgileri</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground mb-4">
                            Okul servislerimiz Gürsel Turizm güvencesiyle hizmet vermektedir. Servis kayıtları ve güzergah bilgisi için ulaşım ofisimizle iletişime geçebilirsiniz.
                        </p>
                        <div className="bg-muted p-4 rounded-lg text-sm">
                            <span className="font-bold">Ulaşım Sorumlusu:</span> Mehmet Demir <br/>
                            <span className="font-bold">Tel:</span> 0532 123 45 67
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center gap-4">
                        <div className="p-2 bg-red-100 text-red-600 rounded-lg">
                            <Info className="w-6 h-6" />
                        </div>
                        <CardTitle>Okul Kuralları</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0"/>
                                Ders zili çaldığında tüm öğrenciler sınıflarında hazır bulunmalıdır.
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0"/>
                                Okul kıyafet yönetmeliğine uyulması zorunludur.
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0"/>
                                Cep telefonları ders saatlerinde kapalı tutulmalıdır.
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
