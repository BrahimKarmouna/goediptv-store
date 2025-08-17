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
    <section className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Choose <span className="text-blue-400">Our IPTV Service</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Experience the future of television with our cutting-edge IPTV technology and unmatched content library.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800 transition-colors">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-blue-600/20 rounded-full">
                    <feature.icon className="w-8 h-8 text-blue-400" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
