import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Play, Star, Clock } from "lucide-react"

export function FeaturedContent() {
  const featuredShows = [
    {
      id: "1",
      title: "Breaking Boundaries",
      description: "A thrilling sci-fi series that explores the limits of human potential in a dystopian future.",
      rating: "9.2",
      duration: "45 min",
      episodes: "8 episodes",
      image: "/sci-fi-series-poster-dark-futuristic.png",
    },
    {
      id: "2",
      title: "Ocean Depths",
      description: "Dive into the mysterious world beneath the waves in this stunning nature documentary.",
      rating: "8.8",
      duration: "60 min",
      episodes: "6 episodes",
      image: "/placeholder-0hlff.png",
    },
    {
      id: "3",
      title: "City Lights",
      description: "A romantic drama following the intertwined lives of strangers in a bustling metropolis.",
      rating: "8.5",
      duration: "50 min",
      episodes: "10 episodes",
      image: "/romantic-drama-poster-night-city.png",
    },
  ]

  return (
    <section className="py-16 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-black text-foreground mb-4">Featured This Week</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our handpicked selection of premium content, curated just for you
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredShows.map((show) => (
            <Card
              key={show.id}
              className="bg-card border-border overflow-hidden group hover:border-primary/50 transition-all duration-300"
            >
              <div className="relative">
                <img
                  src={show.image || "/placeholder.svg"}
                  alt={show.title}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center gap-1 text-yellow-400">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="text-sm font-semibold">{show.rating}</span>
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">{show.duration}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-white mb-1">{show.title}</h3>
                  <p className="text-sm text-gray-300">{show.episodes}</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-card-foreground mb-4 leading-relaxed">{show.description}</p>
                <Button className="w-full bg-primary hover:bg-primary/90">
                  <Play className="w-4 h-4 mr-2" />
                  Watch Now
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
