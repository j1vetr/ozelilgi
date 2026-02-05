import { PageHeader } from "@/components/ui/PageHeader";
import { FACILITIES } from "@/lib/mock-news";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useRoute } from "wouter";
import { motion } from "framer-motion";

export default function KampusPage() {
    const [match, params] = useRoute("/kampus/:tab?");
    const activeTab = params?.tab || "imkanlar";

    return (
        <div className="bg-background min-h-screen">
            <PageHeader
                title="Kampüsümüz"
                subtitle="Öğrencilerimizin her türlü ihtiyacına cevap veren modern ve güvenli bir eğitim ortamı."
                breadcrumbs={[{ label: "Kampüs", href: "/kampus" }]}
            />

            <div className="container py-16 px-4">
                <Tabs defaultValue={activeTab} className="w-full">
                    <div className="flex justify-center mb-12">
                        <TabsList className="grid w-full max-w-md grid-cols-2">
                            <TabsTrigger value="imkanlar">Fiziki İmkanlar</TabsTrigger>
                            <TabsTrigger value="galeri">Fotoğraf Galerisi</TabsTrigger>
                        </TabsList>
                    </div>

                    <TabsContent value="imkanlar">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {FACILITIES.map((facility, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Card className="overflow-hidden hover:shadow-xl transition-shadow h-full">
                                        <div className="aspect-video relative overflow-hidden group">
                                            <img
                                                src={facility.image}
                                                alt={facility.title}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                                                <span className="text-white font-bold text-lg">{facility.title}</span>
                                            </div>
                                        </div>
                                        <CardContent className="p-6">
                                            <h3 className="font-display text-xl font-bold mb-2 text-primary">{facility.title}</h3>
                                            <p className="text-sm text-muted-foreground">
                                                Öğrencilerimizin en iyi şartlarda eğitim alabilmesi için tasarlanmış modern alanlar.
                                            </p>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </TabsContent>

                    <TabsContent value="galeri">
                         <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
                            {[...FACILITIES, ...FACILITIES].map((item, i) => ( // Duplicating for grid effect
                                <div key={i} className="break-inside-avoid rounded-xl overflow-hidden mb-4 shadow-md hover:shadow-xl transition-all">
                                    <img src={item.image} alt={item.title} className="w-full h-auto" />
                                </div>
                            ))}
                         </div>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
}
