import { MapPin, Award, Tag, Truck } from "lucide-react"
import MotionWrapper from "@/components/ui/motion-wrapper"

export default function Values() {
    const values = [
        {
            icon: <MapPin className="h-10 w-10 text-primary" />,
            title: "Bahan Produk Impor Asli",
            description: "Produk impor asli dari berbagai negara.",
        },
        {
            icon: <Award className="h-10 w-10 text-primary" />,
            title: "Kualitas Bahan Premium",
            description: "Menggunakan bahan pilihan terbaik untuk menjamin kepuasan Anda.",
        },
        {
            icon: <Tag className="h-10 w-10 text-primary" />,
            title: "Harga Terjangkau",
            description: "Kualitas bintang lima dengan harga yang tetap terjangkau.",
        },
        {
            icon: <Truck className="h-10 w-10 text-primary" />,
            title: "Pengiriman Cepat",
            description: "Siap mengirim ke seluruh pelosok Indonesia dengan aman.",
        },
    ]

    return (
        <section id="about" className="py-20 bg-secondary/30">
            <div className="container px-4 md:px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold tracking-tight mb-4">Mengapa Memilih Kami?</h2>
                    <p className="text-muted-foreground">
                        Kami berkomitmen memberikan yang terbaik bagi pelanggan melalui standar kualitas yang tinggi.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {values.map((item, index) => (
                        <MotionWrapper key={index} delay={index * 0.1}>
                            <div className="flex flex-col items-center text-center p-6 bg-background rounded-lg shadow-sm border hover:shadow-md transition-shadow h-full">
                                <div className="mb-4 bg-primary/10 p-3 rounded-full">
                                    {item.icon}
                                </div>
                                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                                <p className="text-sm text-muted-foreground">{item.description}</p>
                            </div>
                        </MotionWrapper>
                    ))}
                </div>
            </div>
        </section>
    )
}
