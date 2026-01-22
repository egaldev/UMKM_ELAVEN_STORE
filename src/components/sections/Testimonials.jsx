import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import MotionWrapper from "@/components/ui/motion-wrapper"

export default function Testimonials() {
    const reviews = [
        {
            name: "Tri Syhanda Ade Lia",
            role: "UI/UX, Jakarta",
            comment: "Bajunya bagus banget nyaman dipakai, dibawa kerja juga enak bahan nya adem",
            rating: 5,
            image: "/Person_1.jpg"
        },
        {
            name: "Egal",
            role: "Software Engineer, Jakarta",
            comment: "Kemeja nya cocok dipakai buat meeting, bisa dipakai formal dan untuk main juga bisa",
            rating: 5,
            image: "/Person_2.jpeg"
        },
        {
            name: "Salsabila",
            role: "Graphic Desainer, Jakarta",
            comment: "Admin ramah banget. kaosnya asli, sudah saya cek. Recommended seller!",
            rating: 4,
            image: "/Person_3.jpeg"
        },
    ]

    return (
        <section id="testimonials" className="py-20">
            <div className="container px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight mb-4">Apa Kata Mereka?</h2>
                    <p className="text-muted-foreground">Testimoni jujur dari pelanggan setia kami.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <Card key={index} className="bg-muted/50 border-none shadow-none">
                            <CardContent className="p-6">

                                {/* HEADER */}
                                <div className="flex flex-col items-center text-center gap-3 mb-4">

                                    {/* Image */}
                                    <img
                                        src={review.image}
                                        alt={review.name}
                                        className="w-28 h-28 rounded-full object-cover border-2 border-primary/20"
                                    />

                                    {/* review name dan role */}
                                    <div>
                                        <h4 className="font-semibold text-lg">{review.name}</h4>
                                        <p className="text-sm text-muted-foreground">
                                            {review.role}
                                        </p>
                                    </div>
                                </div>

                                {/* RATING */}
                                <div className="flex mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className={`w-5 h-5 ${i < review.rating
                                                ? "text-yellow-400 fill-yellow-400"
                                                : "text-gray-300"
                                                }`}
                                        />
                                    ))}
                                </div>

                                {/* COMMENT */}
                                <p className="italic text-foreground">
                                    "{review.comment}"
                                </p>

                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
