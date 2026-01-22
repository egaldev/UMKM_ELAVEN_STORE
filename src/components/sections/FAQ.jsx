import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import MotionWrapper from "@/components/ui/motion-wrapper"

export default function FAQ() {
    const faqs = [
        {
            question: "Apakah produk ini ready stock?",
            answer: "Sebagian besar produk kami ready stock. Namun untuk produk tertentu, mungkin memerlukan waktu pre-order 3-5 hari."
        },
        {
            question: "Bagaimana cara pemesanannya?",
            answer: "Anda bisa langsung klik tombol WhatsApp yang tersedia. Tim admin kami akan membantu proses pemesanan dengan cepat."
        },
        {
            question: "Apakah bisa kirim ke luar kota?",
            answer: "Ya, kami melayani pengiriman ke seluruh Indonesia menggunakan ekspedisi terpercaya (JNE, J&T, SiCepat)."
        },
        {
            question: "Apakah ada garansi jika barang rusak?",
            answer: "Tentu. Jika barang diterima dalam keadaan rusak, kami akan ganti baru. Syaratnya cukup kirimkan video unboxing."
        },
    ]

    return (
        <section id="faq" className="py-20 bg-secondary/30">
            <div className="container max-w-3xl px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight mb-4">Pertanyaan Umum</h2>
                    <p className="text-muted-foreground">Jawaban untuk pertanyaan yang sering diajukan pelanggan.</p>
                </div>

                <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, index) => (
                        <MotionWrapper key={index} delay={index * 0.1}>
                            <AccordionItem value={`item-${index}`}>
                                <AccordionTrigger>{faq.question}</AccordionTrigger>
                                <AccordionContent>
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        </MotionWrapper>
                    ))}
                </Accordion>
            </div>
        </section>
    )
}
