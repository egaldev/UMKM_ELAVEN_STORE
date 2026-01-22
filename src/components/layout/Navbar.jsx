import { useState, useEffect } from "react"
import { Menu, X, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const navLinks = [
        { name: "Beranda", href: "#home" },
        { name: "Tentang Kami", href: "#about" },
        { name: "Produk", href: "#products" },
        { name: "Testimoni", href: "#testimonials" },
    ]

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled
                    ? "bg-background/80 backdrop-blur-md border-b shadow-sm py-2"
                    : "bg-transparent py-4"
            )}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                {/* Logo */}
                <a href="#" className={cn("flex items-center gap-2 text-xl font-bold transition-colors", isScrolled ? "text-primary" : "text-white")}>
                    <ShoppingBag className="h-6 w-6" />
                    <span>Elaven Store</span>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className={cn(
                                "text-sm font-medium transition-colors",
                                isScrolled ? "text-muted-foreground hover:text-primary" : "text-white/90 hover:text-white"
                            )}
                        >
                            {link.name}
                        </a>
                    ))}
                    <Button onClick={() => window.open("https://wa.me/6289636775660", "_blank")}>
                        Hubungi Kami
                    </Button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className={cn("md:hidden p-2 transition-colors", isScrolled ? "text-foreground" : "text-white")}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b shadow-lg p-4 flex flex-col gap-4 animate-in slide-in-from-top-5">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-base font-medium text-foreground py-2 border-b border-border/50"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                    <Button className="w-full" onClick={() => window.open("https://wa.me/6289636775660", "_blank")}>
                        Hubungi Kami
                    </Button>
                </div>
            )}
        </nav>
    )
}
