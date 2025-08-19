import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Michael Johnson",
    location: "New York, USA",
    rating: 5,
    text: "Best IPTV service I've ever used! Crystal clear quality and never any buffering. The sports channels are incredible.",
    avatar: "/professional-man-avatar.png",
  },
  {
    name: "Sarah Williams",
    location: "London, UK",
    rating: 5,
    text: "Amazing value for money. I get all my favorite UK and international channels at a fraction of cable TV cost.",
    avatar: "/professional-woman-avatar.png",
  },
  {
    name: "Carlos Rodriguez",
    location: "Madrid, Spain",
    rating: 5,
    text: "The Spanish and Latin American content is fantastic. My whole family loves it and the customer support is excellent.",
    avatar: "/hispanic-man-avatar.png",
  },
  {
    name: "Emma Thompson",
    location: "Toronto, Canada",
    rating: 5,
    text: "Setup was incredibly easy and the 4K quality is stunning. I can watch on all my devices seamlessly.",
    avatar: "/canadian-woman-avatar.png",
  },
  {
    name: "Ahmed Hassan",
    location: "Dubai, UAE",
    rating: 5,
    text: "Perfect for international viewers. I get channels from my home country plus premium sports and movies.",
    avatar: "/middle-eastern-man-avatar.png",
  },
  {
    name: "Lisa Chen",
    location: "Sydney, Australia",
    rating: 5,
    text: "The Asian content library is impressive and the streaming quality is consistently excellent. Highly recommend!",
    avatar: "/asian-woman-avatar.png",
  },
]

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 bg-muted/20 w-full overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
            What Our <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">Customers Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Join thousands of satisfied customers who have made the switch to our premium IPTV service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="bg-card/50 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg group"
            >
              <CardContent className="p-8 h-full flex flex-col">
                <div className="flex items-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-muted-foreground/20 fill-muted-foreground/10'} transition-colors`} 
                    />
                  ))}
                </div>

                <p className="text-foreground/90 mb-8 leading-relaxed flex-grow relative">
                  <span className="absolute -top-6 -left-2 text-7xl text-primary/10 font-serif leading-none">"</span>
                  <span className="relative z-10">{testimonial.text}</span>
                </p>

                <div className="flex items-center pt-4 border-t border-border/30">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-full -m-0.5 group-hover:opacity-100 opacity-0 transition-opacity"></div>
                    <img
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full relative z-10 border-2 border-background"
                    />
                  </div>
                  <div className="ml-4">
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
