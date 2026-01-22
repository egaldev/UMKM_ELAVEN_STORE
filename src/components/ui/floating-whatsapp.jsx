import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function FloatingWhatsApp() {
    return (
        <div className="fixed bottom-6 right-6 z-50">
            <Button
                size="icon"
                className="h-14 w-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg"
                onClick={() => window.open("https://wa.me/6289636775660", "_blank")}
            >
                <MessageCircle className="h-8 w-8 text-white" />
            </Button>
        </div>
    )
}
