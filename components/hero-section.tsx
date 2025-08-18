"use client"

import { Button } from "@/components/ui/button"
import { Play, Shield, Tv } from "lucide-react"
import { NavLink } from "./ui/nav-link"

export function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/abstract-digital-network.png')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-serif font-black text-foreground mb-6 leading-tight">
            Premium IPTV
            <span className="text-primary block">Subscriptions</span>
          </h1>
          <p className="text-xl md:text-2xl text-card-foreground mb-8 leading-relaxed">
            Access 20,000+ live channels from around the world. Sports, movies, news, and entertainment in crystal-clear
            4K quality. Start your 7-day free trial today.
          </p>

          {/* Features highlights */}
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="flex items-center text-muted-foreground">
              <Tv className="w-5 h-5 mr-2 text-primary" />
              <span>20,000+ Channels</span>
            </div>
            <div className="flex items-center text-muted-foreground">
              <Play className="w-5 h-5 mr-2 text-primary" />
              <span>4K Quality</span>
            </div>
            <div className="flex items-center text-muted-foreground">
              <Shield className="w-5 h-5 mr-2 text-primary" />
              <span>7-Day Free Trial</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <NavLink href="/#pricing" targetId="#pricing">
              <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 w-full sm:w-auto">
                <Play className="w-6 h-6 mr-2" />
                Start Free Trial
              </Button>
            </NavLink>
            <NavLink href="/#pricing" targetId="#pricing">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 border-border hover:bg-card bg-transparent w-full"
              >
                View Pricing
              </Button>
            </NavLink>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}
