"use client"

import { Button } from "@/components/ui/button"
import { Play, Tv, Check } from "lucide-react"
import { NavLink } from "./ui/nav-link"

export function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-background to-muted/10 pt-24 pb-16 min-h-[90vh]">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle background image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://i.ibb.co/B2jH9n35/TV.png')`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        >
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
            <div className="inline-flex items-center gap-3 rounded-full border border-border/60 bg-background/70 backdrop-blur px-4 py-2 text-sm sm:text-base text-muted-foreground mb-5 shadow-sm">
              <span className="inline-flex items-center gap-1 text-primary"><Tv className="w-4 h-4" /> 31.000+ zenders</span>
              <span className="w-px h-4 bg-border/50" />
              <span>4K/Full HD</span>
              <span className="w-px h-4 bg-border/50" />
              <span>Direct actief</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-5 leading-tight">
              Premium IPTV, direct actief
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-7 max-w-xl">
              Kijk sport, films en series zonder haperingen op elk apparaat. Geen contracten, geen gedoe.
            </p>
            <ul className="mb-9 grid grid-cols-1 sm:grid-cols-2 gap-3 text-base text-foreground/90">
              {[
                '15.000+ kanalen + VOD',
                'Werkt op TV, mobiel, tablet',
                'Eenvoudig installeren',
                'Nederlandse klantenservice',
              ].map((t, i) => (
                <li key={i} className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-4 max-w-xl">
              <NavLink href="/#pricing" targetId="#pricing" className="w-full sm:w-auto">
                <Button 
                  size="lg"
                  className="w-full text-lg h-14 px-8 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground hover:from-primary/95 hover:to-primary/80 shadow-lg hover:shadow-primary/30 transition cursor-pointer group"
                >
                  <Play className="w-5 h-5 mr-2 transition-transform group-hover:translate-x-0.5" /> Bestel nu
                </Button>
              </NavLink>
              <NavLink href="/#pricing" targetId="#pricing" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full text-lg h-14 px-8 border-2 border-border/60 hover:border-primary/60 bg-background/60 backdrop-blur hover:bg-background/80 shadow-sm transition cursor-pointer group"
                >
                  <span className="transition-transform group-hover:translate-x-0.5">Bekijk prijzen</span>
                </Button>
              </NavLink>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-green-500" /> 24/7 support</span>
              <span className="w-px h-4 bg-border/50" />
              <span>Veilig betalen</span>
              <span className="w-px h-4 bg-border/50" />
              <span>Annuleer wanneer je wilt</span>
            </div>
          </div>
          {/* Right column */}
          <div className="hidden md:block">
            <div className="relative rounded-2xl border border-border/60 bg-background/50 backdrop-blur p-7 shadow-lg">
              <div className="grid grid-cols-3 gap-4">
                {[
                  { label: '12 maanden', price: '€69,99' },
                  { label: '6 maanden', price: '€49,99' },
                  { label: '3 maanden', price: '€34,99' },
                ].map((p, i) => (
                  <NavLink key={i} href="/#pricing" targetId="#pricing" className="block">
                    <div className="rounded-xl border border-border/50 bg-background/70 hover:border-primary/60 hover:shadow-md transition p-5 cursor-pointer">
                      <p className="text-sm text-muted-foreground">{p.label}</p>
                      <p className="text-xl font-semibold text-foreground">{p.price}</p>
                    </div>
                  </NavLink>
                ))}
              </div>
              <NavLink href="/#pricing" targetId="#pricing" className="block">
                <div className="mt-6 rounded-xl border border-border/50 bg-background/80 p-5 hover:border-primary/60 hover:bg-background/90 hover:shadow-md transition cursor-pointer">
                  <p className="text-sm text-muted-foreground">Populaire keuze</p>
                  <p className="text-3xl font-bold text-foreground">1 jaar • €69,99</p>
                  <p className="text-sm text-muted-foreground mt-1">Directe activatie • HD/4K • 24/7 support</p>
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      

      {/* Decorative bottom spacer */}
    </section>
  )
}
