import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Hero() {
    return (
        <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/banner_toko_baju.jpg"
                    alt="Background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />
            </div>

            <div className="container relative z-10 px-4 text-center text-white">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
                        Kualitas Terbaik <br />
                        <span className="text-primary-foreground/90">Produk Impor Asli</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                        Kami menggunakan produk impor asli dengan standar kualitas tinggi untuk melengkapi kebutuhan sehari hari anda
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button size="lg" className="h-12 px-8 text-lg" onClick={() => window.open("https://wa.me/6289636775660?text=Halo%20Admin,%20saya%20tertarik%20dengan%20produk%20Anda", "_blank")}>
                            Pesan Sekarang <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="h-12 px-8 text-lg bg-transparent text-white border-white hover:bg-white hover:text-black"
                            onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            Lihat Katalog
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
