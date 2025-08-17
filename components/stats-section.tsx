import { Card } from "@/components/ui/card"
import { Users, Film, Tv, Globe } from "lucide-react"

export function StatsSection() {
  const stats = [
    {
      icon: Users,
      value: "50M+",
      label: "Active Users",
      description: "Streaming worldwide",
    },
    {
      icon: Film,
      value: "25K+",
      label: "Movies",
      description: "In our library",
    },
    {
      icon: Tv,
      value: "15K+",
      label: "TV Shows",
      description: "Episodes available",
    },
    {
      icon: Globe,
      value: "190+",
      label: "Countries",
      description: "Global coverage",
    },
  ]

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-black text-foreground mb-4">Trusted by Millions</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join the global community enjoying premium entertainment
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="bg-card border-border p-6 text-center hover:border-primary/50 transition-colors"
            >
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div className="text-3xl font-serif font-black text-foreground mb-2">{stat.value}</div>
              <div className="text-lg font-semibold text-card-foreground mb-1">{stat.label}</div>
              <div className="text-sm text-muted-foreground">{stat.description}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
