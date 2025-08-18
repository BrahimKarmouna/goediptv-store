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
    <section id="testimonials" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Our <span className="text-blue-400">Customers Say</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Join thousands of satisfied customers who have made the switch to our premium IPTV service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-slate-800 border-slate-700">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <p className="text-slate-300 mb-6 leading-relaxed">"{testimonial.text}"</p>

                <div className="flex items-center">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-slate-400">{testimonial.location}</div>
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
