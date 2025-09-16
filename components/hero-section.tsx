"use client"

import { Button } from "@/components/ui/button"
import { Tv, ShieldCheck, Zap, Headphones, Clapperboard, Globe2 } from "lucide-react"
import { NavLink } from "./ui/nav-link"

export function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-background to-muted/10 pt-24 pb-16 min-h-[90vh]">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Background video */}
        <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
          <iframe
            className="w-full h-full scale-[1.25] origin-center"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/6f-_gL4_NNg?autoplay=1&mute=1&loop=1&playlist=6f-_gL4_NNg&controls=0&modestbranding=1&rel=0&playsinline=1"
            title="YouTube video player"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
          {/* Gradient overlays for readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-background/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background/30" />
        </div>
        {/* Faint grid on top */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.04] pointer-events-none" />
      </div>

      {/* Content */
      }
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left column */}
          <div className="w-full max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-6 leading-tight">
              Goed IPTV, direct actief
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl">
              Kijk sport, films en series zonder haperingen op elk apparaat. Geen contracten, geen gedoe.
            </p>
            <div className="mb-8 flex flex-wrap items-center gap-4">
              {[
                { icon: <ShieldCheck className="w-5 h-5" />, label: 'Betrouwbaar' },
                { icon: <Zap className="w-5 h-5" />, label: 'Direct actief' },
                { icon: <Tv className="w-5 h-5" />, label: 'HD/4K' },
                { icon: <Headphones className="w-5 h-5" />, label: '24/7 support' },
              ].map((item, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-border/60 bg-background/70 text-base text-foreground/90 backdrop-blur"
                >
                  {item.icon}
                  {item.label}
                </span>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-5 max-w-2xl">
              <NavLink href="/#pricing" targetId="#pricing" className="w-full sm:w-auto">
                <Button 
                  size="lg"
                  className="w-full text-xl h-16 px-10 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground hover:from-primary/95 hover:to-primary/80 shadow-xl hover:shadow-primary/30 transition cursor-pointer"
                >
                  Bestel nu
                </Button>
              </NavLink>
              <NavLink href="/#pricing" targetId="#pricing" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full text-xl h-16 px-10 border-2 border-border/60 hover:border-primary/60 bg-background/60 backdrop-blur hover:bg-background/80 shadow-md transition cursor-pointer"
                >
                  Bekijk prijzen
                </Button>
              </NavLink>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
              <span>24/7 support</span>
              <span className="w-px h-4 bg-border/50" />
              <span>Veilig betalen</span>
              <span className="w-px h-4 bg-border/50" />
              <span>Annuleer wanneer je wilt</span>
            </div>
          </div>
          {/* Right column */}
          <div className="hidden md:block">
            <div className="relative rounded-2xl border border-border/60 bg-background/50 backdrop-blur p-8 shadow-xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    icon: <Tv className="w-8 h-8 text-primary" />, 
                    title: '31.000+ Premium Kanalen',
                    desc: 'Inclusief alle Nederlandse & internationale zenders in HD/4K'
                  },
                  {
                    icon: <Clapperboard className="w-8 h-8 text-primary" />, 
                    title: '50.000+ Films & Series',
                    desc: 'De nieuwste blockbusters en exclusieve series'
                  },
                  {
                    icon: <Globe2 className="w-8 h-8 text-primary" />, 
                    title: '50+ Landen',
                    desc: 'Wereldwijde content in meerdere talen'
                  },
                  {
                    icon: <ShieldCheck className="w-8 h-8 text-primary" />, 
                    title: '24/7 Premium Support',
                    desc: 'Altijd persoonlijke hulp beschikbaar'
                  },
                ].map((f, i) => (
                  <div key={i} className="rounded-2xl border border-border/60 bg-background/70 p-6 hover:border-primary/60 hover:shadow-xl transition-all">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        {f.icon}
                      </div>
                      <h3 className="text-lg md:text-xl font-semibold text-foreground leading-snug">{f.title}</h3>
                    </div>
                    <p className="text-base text-muted-foreground leading-relaxed">{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      

      {/* Decorative bottom spacer */}
    </section>
  )
}
