import { Card, CardContent } from "@/components/ui/card"
import { Globe, Shield, Smartphone, Tv, Users, Zap } from "lucide-react"

const features = [
  {
    icon: Tv,
    title: "20,000+ Channels",
    description: "Access live TV channels from over 100 countries including premium sports, news, and entertainment.",
  },
  {
    icon: Zap,
    title: "Zero Buffering",
    description: "Our advanced streaming technology ensures smooth playback with anti-freeze protection.",
  },
  {
    icon: Smartphone,
    title: "Multi-Device Support",
    description: "Watch on any device - Smart TV, phone, tablet, computer, or streaming device.",
  },
  {
    icon: Globe,
    title: "Global Content",
    description: "International channels in multiple languages with content from every continent.",
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description: "Your viewing is completely private with encrypted connections and no logging.",
  },
  {
    icon: Users,
    title: "Family Friendly",
    description: "Parental controls and family packages with content suitable for all ages.",
  },
]

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
            Why Choose <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">Our IPTV</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Experience the future of television with our cutting-edge IPTV technology and unmatched content library.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group bg-card/50 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg overflow-hidden"
            >
              <CardContent className="p-8 text-center h-full flex flex-col">
                <div className="flex justify-center mb-6">
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 group-hover:from-primary/20 group-hover:to-primary/10 transition-all duration-300">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-2xl font-serif font-bold text-foreground mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed flex-grow">{feature.description}</p>
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="h-0.5 w-12 bg-gradient-to-r from-primary to-transparent mx-auto"></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
