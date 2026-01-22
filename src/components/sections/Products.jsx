import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import MotionWrapper from "@/components/ui/motion-wrapper"

export default function Products() {
    const products = [
        {
            id: 1,
            name: "Kaos Hitam",
            price: "Rp 85.000",
            description: "Bahan kaos premium dengan desain yang menarik",
            image: "/Baju_1.jpg"
        },
        {
            id: 2,
            name: "Kaos Oblong Putih",
            price: "Rp 250.000",
            description: "Bahan kaos oblong premium dengan desain yang menarik",
            image: "Baju_2.jpg"
        },
        {
            id: 3,
            name: "Kemeja",
            price: "Rp 150.000",
            description: "Desain etnik modern, cocok untuk jalan-jalan santai, dan formal",
            image: "Baju_3.jpg"
        },
        {
            id: 4,
            name: "Kemeja Corak",
            price: "Rp 300.000",
            description: "Desain corak modern cocok untuk dipakai formal dan santai.",
            image: "Baju_4.jpg"
        },
    ]

    return (
        <section id="products" className="py-20">
            <div className="container px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight mb-4">Produk Unggulan</h2>
                    <p className="text-muted-foreground">Pilihan terbaik yang paling diminati pelanggan kami bulan ini.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {products.map((product, index) => (
                        <MotionWrapper key={product.id} delay={index * 0.1}>
                            <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                                <div className="aspect-square relative overflow-hidden">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <CardHeader className="p-4 pb-2">
                                    <CardTitle className="text-lg">{product.name}</CardTitle>
                                    <CardDescription className="text-primary font-bold mt-1 text-base">{product.price}</CardDescription>
                                </CardHeader>
                                <CardContent className="p-4 pt-0 text-sm text-muted-foreground flex-grow">
                                    {product.description}
                                </CardContent>
                                <CardFooter className="p-4 pt-0 mt-auto">
                                    <Button className="w-full text-xs md:text-sm" onClick={() => window.open(`https://wa.me/6289636775660?text=Halo%20Admin,%20saya%20mau%20pesan%20${product.name}`, "_blank")}>
                                        Pesan via WhatsApp
                                    </Button>
                                </CardFooter>
                            </Card>
                        </MotionWrapper>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Button variant="outline" size="lg" className="min-w-[200px]">Lihat Semua Produk</Button>
                </div>
            </div>
        </section>
    )
}
