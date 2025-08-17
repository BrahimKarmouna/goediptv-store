"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Play, Plus } from "lucide-react"

interface ContentItem {
  id: string
  title: string
  image: string
  rating: string
  year: string
  genre: string
}

interface ContentCarouselProps {
  title: string
  items: ContentItem[]
}

export function ContentCarousel({ title, items }: ContentCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 320 // Width of one card plus gap
      const newScrollLeft =
        direction === "left" ? scrollRef.current.scrollLeft - scrollAmount : scrollRef.current.scrollLeft + scrollAmount

      scrollRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      })
    }
  }

  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">{title}</h2>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll("left")}
              className="border-border hover:bg-card"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll("right")}
              className="border-border hover:bg-card"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide pb-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {items.map((item) => (
            <Card
              key={item.id}
              className="flex-shrink-0 w-72 bg-card border-border hover:border-primary/50 transition-all duration-300 group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={`/abstract-geometric-shapes.png?height=400&width=300&query=${item.title} movie poster`}
                  alt={item.title}
                  className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex gap-2">
                    <Button size="icon" className="bg-primary hover:bg-primary/90">
                      <Play className="w-4 h-4" />
                    </Button>
                    <Button size="icon" variant="outline" className="border-border hover:bg-card bg-transparent">
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-card-foreground mb-2 line-clamp-1">{item.title}</h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="bg-primary/20 text-primary px-2 py-1 rounded text-xs">{item.rating}</span>
                  <span>{item.year}</span>
                  <span>•</span>
                  <span>{item.genre}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
