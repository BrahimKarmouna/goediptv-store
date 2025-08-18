"use client"

import { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Play, Shield, Tv } from "lucide-react"
import { NavLink } from "./ui/nav-link"
import { WhatsAppPopup } from "./whatsapp-popup"

export function HeroSection() {
  const [showWhatsAppPopup, setShowWhatsAppPopup] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("Free Trial");

  const closeWhatsAppPopup = () => {
    setShowWhatsAppPopup(false);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeWhatsAppPopup();
    }
  };
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background to-muted/20 pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-110 transition-transform duration-1000 ease-in-out hover:scale-100"
          style={{
            backgroundImage: `url('https://i.ibb.co/B2jH9n35/TV.png')`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-background/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/90 mb-6 leading-[1.1]">
            Premium IPTV
            <span className="block font-serif font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">Subscriptions</span>
          </h1>
          <p className="text-xl md:text-2xl text-foreground/90 mb-10 leading-relaxed max-w-3xl font-sans">
            Stream over <span className="font-semibold text-primary">20,000+ live channels</span> in stunning 4K quality. 
            From sports to movies, news to entertainment — all in one place. Start your <span className="font-semibold">7-day free trial</span> today.
          </p>

          {/* Features highlights */}
          <div className="flex flex-wrap gap-6 mb-10">
            {[
              { icon: <Tv className="w-6 h-6" />, text: '20,000+ Channels' },
              { icon: <Play className="w-6 h-6" />, text: '4K Ultra HD' },
              { icon: <Shield className="w-6 h-6" />, text: '7-Day Free Trial' },
              { icon: <div className="w-6 h-6 flex items-center justify-center">⏱️</div>, text: 'Catch-up TV' },
              { icon: <div className="w-6 h-6 flex items-center justify-center">📱</div>, text: 'Multi-Device' }
            ].map((feature, index) => (
              <div 
                key={index}
                className="flex items-center gap-2 px-4 py-2 bg-background/50 backdrop-blur-sm rounded-lg border border-border/50 hover:border-primary/30 transition-all duration-300"
              >
                <span className="text-primary">{feature.icon}</span>
                <span className="text-sm font-medium">{feature.text}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 max-w-md">
            <Button 
              size="lg" 
              onClick={() => setShowWhatsAppPopup(true)}
              className="w-full sm:w-auto text-lg px-8 py-7 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary/80 shadow-lg hover:shadow-primary/30 hover:scale-[1.02] transition-all duration-300 group"
            >
              <Play className="w-6 h-6 mr-2 group-hover:translate-x-1 transition-transform" />
              Start Free Trial
            </Button>
            <NavLink href="/#pricing" targetId="#pricing" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="w-full text-lg px-8 py-7 border-2 border-border/50 hover:border-primary/50 bg-background/50 backdrop-blur-sm hover:bg-background/80 transition-all duration-300 group"
              >
                <span className="group-hover:translate-x-1 transition-transform">View Pricing</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 group-hover:translate-x-1 transition-transform">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </Button>
            </NavLink>
          </div>
          
          {/* Trust indicators */}
          <div className="mt-12 flex flex-col sm:flex-row items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-primary/10 border-2 border-background flex items-center justify-center text-xs font-bold">
                    {i === 4 ? '+' : i}
                  </div>
                ))}
              </div>
              <span>Trusted by 10,000+ users</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-border/50" />
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-500/10 text-green-500">
                ✓
              </div>
              <span>24/7 Customer Support</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* WhatsApp Popup */}
      {showWhatsAppPopup && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={handleBackdropClick}
        >
          <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" />
          <div className="relative z-50 w-full max-w-lg">
            <WhatsAppPopup onClose={closeWhatsAppPopup} planName={selectedPlan} />
          </div>
        </div>
      )}

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}
