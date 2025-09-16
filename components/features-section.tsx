import { Card, CardContent } from "@/components/ui/card"
import { Tv, Smartphone, Zap, Shield, Headphones, Award, Clock, Globe } from "lucide-react"

const features = [
  {
    icon: Tv,
    title: "10.000+ Kanalen",
    description: "Geniet van een uitgebreide selectie van internationale en Nederlandse zenders in HD en 4K kwaliteit.",
  },
  {
    icon: Zap,
    title: "Geen Vertraging",
    description: "Vloeiend kijken zonder bufferen dankzij ons geavanceerde netwerk en servers.",
  },
  {
    icon: Smartphone,
    title: "Multi-Apparaat",
    description: "Kijk op al je apparaten - Smart TV, telefoon, tablet of computer, allemaal tegelijk.",
  },
  {
    icon: Globe,
    title: "Wereldwijd Beschikbaar",
    description: "Overal terwijs toegang tot je favoriete zenders, waar je ook bent.",
  },
  {
    icon: Shield,
    title: "Veilig & Betrouwbaar",
    description: "Veilige verbinding met 256-bit encryptie voor al je kijkgedrag.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Ons Nederlandse supportteam staat dag en nacht voor je klaar.",
  },
  {
    icon: Award,
    title: "Premium Kwaliteit",
    description: "Scherp beeld in Full HD en 4K kwaliteit met uitstekend geluid.",
  },
  {
    icon: Clock,
    title: "Uitgebreide Terugkijker",
    description: "Kijk programma's tot 7 dagen terug met onze uitgebreide catch-up functionaliteit.",
  },
]

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-background w-full overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Waarom kiezen voor onze <span className="text-primary">Goed IPTV service</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ontdek de voordelen van de beste Goed IPTV-ervaring in Nederland
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card key={index} className="group hover:shadow-lg transition-shadow duration-300 border-border/50 hover:border-primary/30">
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-8">
            Meer dan 10.000 tevreden klanten in heel Nederland
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#pricing"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-200"
            >
              Bekijk onze abonnementen
            </a>
            <a
              href="#faq"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-full border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
            >
              Veelgestelde vragen
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
