import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function DutchLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  )
}
