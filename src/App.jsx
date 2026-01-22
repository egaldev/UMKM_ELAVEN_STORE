import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import Hero from "@/components/sections/Hero"
import Values from "@/components/sections/Values"
import Products from "@/components/sections/Products"
import Testimonials from "@/components/sections/Testimonials"
import FAQ from "@/components/sections/FAQ"
import FloatingWhatsApp from "@/components/ui/floating-whatsapp"

function App() {
  return (
    <div className="min-h-screen font-sans bg-background text-foreground">
      <Navbar />
      <Hero />
      <Values />
      <Products />
      <Testimonials />
      <FAQ />
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}

export default App
