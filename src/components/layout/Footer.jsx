import { ShoppingBag, Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
    return (
        <footer className="bg-primary text-primary-foreground py-12">
            <div className="container px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="md:col-span-1">
                        <a href="#" className="flex items-center gap-2 text-xl font-bold mb-4">
                            <ShoppingBag className="h-6 w-6" />
                            <span>Elaven Store</span>
                        </a>
                        <p className="text-primary-foreground/80 text-sm">
                            Jualan produk impor dari  Elaven Store
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Tautan</h3>
                        <ul className="space-y-2 text-sm text-primary-foreground/80">
                            <li><a href="#home" className="hover:text-white">Beranda</a></li>
                            <li><a href="#about" className="hover:text-white">Tentang Kami</a></li>
                            <li><a href="#products" className="hover:text-white">Produk</a></li>
                            <li><a href="#faq" className="hover:text-white">FAQ</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Hubungi Kami</h3>
                        <ul className="space-y-2 text-sm text-primary-foreground/80">
                            <li>WhatsApp: +62 896-3677-5660</li>
                            <li>Email: egalassegaf@gmail.com</li>
                            <li>Alamat: JL. Cempaka RT012, RW004, Kel. Cibubur, Kec. Ciracas, Jakarta Timur, 13720.</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Ikuti Kami</h3>
                        <div className="flex gap-4">
                            <a href="#" className="bg-primary-foreground/10 p-2 rounded-full hover:bg-primary-foreground/20 transition-colors">
                                <Instagram className="h-5 w-5" />
                            </a>
                            <a href="#" className="bg-primary-foreground/10 p-2 rounded-full hover:bg-primary-foreground/20 transition-colors">
                                <Facebook className="h-5 w-5" />
                            </a>
                            <a href="#" className="bg-primary-foreground/10 p-2 rounded-full hover:bg-primary-foreground/20 transition-colors">
                                <Twitter className="h-5 w-5" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-sm text-primary-foreground/60">
                    © 2026 Elaven Store. All rights reserved.
                </div>
            </div>
        </footer>
    )
}
