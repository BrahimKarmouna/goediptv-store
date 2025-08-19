'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Tv, Smartphone, Headphones, ShieldCheck, Check, Crown, Star, Zap, Sparkles, Info, MessageCircle } from 'lucide-react';
import { WhatsAppPopup } from '@/components/whatsapp-popup';

// Metadata is now in metadata.ts

const plans = [
  {
    name: "1 Jaar",
    originalPrice: "€79.98",
    discountedPrice: "€59.99",
    period: "1 jaar",
    periodLabel: "1jr/€59,99",
    description: "Beste keuze!",
    icon: Crown,
    features: [
      "Werkt op alle apparaten",
      "+75.000 films & series",
      "24/7 Nederlandse klantenservice",
      "4K, Full HD, HD & SD kwaliteit",
      "Internationaal pakket met +21.000 IPTV kanalen",
      "Gratis updates gedurende je abonnement"
    ],
    popular: true,
    cta: "Nu starten",
    bestValue: true
  },
  {
    name: "6 Maanden",
    originalPrice: "€47.94",
    discountedPrice: "€39.99",
    period: "6 maanden",
    periodLabel: "6mnd/€39,99",
    description: "Voordelige keuze",
    icon: Star,
    features: [
      "Werkt op alle apparaten",
      "+75.000 films & series",
      "24/7 Nederlandse klantenservice",
      "4K, Full HD, HD & SD kwaliteit",
      "Internationaal pakket met +21.000 IPTV kanalen",
      "Gratis updates gedurende je abonnement"
    ],
    popular: false,
    cta: "Nu starten"
  },
  {
    name: "3 Maanden",
    originalPrice: "€29.97",
    discountedPrice: "€24.99",
    period: "3 maanden",
    periodLabel: "3mnd/€24,99",
    description: "Flexibel abonnement",
    icon: Zap,
    features: [
      "Werkt op alle apparaten",
      "+75.000 films & series",
      "24/7 Nederlandse klantenservice",
      "4K, Full HD, HD & SD kwaliteit",
      "Internationaal pakket met +21.000 IPTV kanalen",
      "Gratis updates gedurende je abonnement"
    ],
    popular: false,
    cta: "Nu starten"
  },
  {
    name: "Gratis Proef",
    price: "Gratis",
    period: "1 uur",
    periodLabel: "Gratis Proef",
    description: "Probeer eerst",
    icon: Sparkles,
    features: [
      "Werkt op alle apparaten",
      "Toegang tot alle kanalen",
      "24/7 Nederlandse klantenservice",
      "HD & Full HD kwaliteit",
      "Geen creditcard nodig"
    ],
    cta: "Nu proberen"
  }
];

const features = [
  {
    icon: <Tv className="w-8 h-8 text-primary" />,
    title: 'HD Kwaliteit',
    description: 'Geniet van kristalheldere beelden in Full HD en 4K kwaliteit voor de ultieme kijkervaring.'
  },
  {
    icon: <Smartphone className="w-8 h-8 text-primary" />,
    title: 'Multi-device',
    description: 'Kijk op al je apparaten, van smart-tv tot smartphone, overal en altijd.'
  },
  {
    icon: <Headphones className="w-8 h-8 text-primary" />,
    title: 'Nederlandse klantenservice',
    description: 'Ons team staat 24/7 voor je klaar met deskundige hulp in het Nederlands.'
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-primary" />,
    title: 'Veilig & Betrouwbaar',
    description: 'Veilige betalingen en betrouwbare service met de beste beveiliging.'
  }
];

export default function BesteNederlandseIptvAanbieders() {
  const [showWhatsAppPopup, setShowWhatsAppPopup] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('');
  const handleWhatsAppClick = (planName: string) => {
    setSelectedPlan(planName);
    setShowWhatsAppPopup(true);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary/10 to-background py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Beste Nederlandse IPTV-aanbieders van 2024
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Ontdek de meest betrouwbare en voordelige IPTV-aanbieders voor Nederlands publiek. 
            Kies uit onze topselectie, probeer 1 uur gratis en geniet van onbeperkt tv-plezier.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/proefabonnement">
                Probeer nu 1 uur gratis
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#vergelijking">
                Vergelijk alle aanbieders
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Waarom kiezen voor een Nederlandse IPTV-aanbieder?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-card rounded-lg">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-primary/10 rounded-full">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Kies je abonnement
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Kies het abonnement dat het beste bij je past. Probeer nu 1 uur gratis!
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-4">
            {plans.map((plan) => {
              const Icon = plan.icon;
              const isFreeTrial = plan.name === 'Gratis Proef';
              
              return (
                <div
                  key={plan.name}
                  className={`relative bg-gradient-to-b from-card to-card/80 rounded-2xl p-8 border-2 transition-all duration-300 hover:shadow-xl ${
                    plan.popular 
                      ? 'border-primary shadow-lg scale-[1.02] ring-2 ring-primary/20' 
                      : 'border-border hover:border-primary/30'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-primary/80 text-white text-xs font-semibold py-1.5 px-4 rounded-full whitespace-nowrap shadow-md">
                      <Star className="inline w-3.5 h-3.5 mr-1 -mt-0.5" />
                      Meest populair
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <div className="flex justify-center mb-3">
                      <div className={`p-3 rounded-full ${
                        plan.popular 
                          ? 'bg-primary/10 text-primary' 
                          : 'bg-muted/50 text-foreground/70'
                      }`}>
                        <Icon className="w-7 h-7" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-1">{plan.name}</h3>
                    {plan.description && (
                      <p className="text-sm text-muted-foreground font-medium">{plan.description}</p>
                    )}
                  </div>

                  <div className="text-center mb-8">
                    <div className="flex items-baseline justify-center gap-2">
                      {plan.discountedPrice ? (
                        <>
                          <span className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                            {plan.discountedPrice}
                          </span>
                          <span className="text-sm text-muted-foreground line-through">
                            {plan.originalPrice}
                          </span>
                        </>
                      ) : (
                        <span className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                          {plan.price}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      {plan.period}
                    </p>
                    {plan.periodLabel && (
                      <span className="inline-block mt-1 text-xs font-medium bg-muted/50 text-foreground/80 px-2 py-0.5 rounded-full">
                        {plan.periodLabel}
                      </span>
                    )}
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start group">
                        <Check className="w-5 h-5 text-green-500 mr-2.5 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                        <span className="text-sm text-foreground/90 group-hover:text-foreground transition-colors">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="space-y-3">
                    <Button
                      className={`w-full h-12 text-base font-semibold ${
                        plan.popular 
                          ? 'bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary/80 shadow-lg shadow-primary/20'
                          : 'bg-foreground hover:bg-foreground/90 text-background'
                      }`}
                      size="lg"
                      onClick={() => {
                        setSelectedPlan(plan.name);
                        setShowWhatsAppPopup(true);
                      }}
                    >
                      {isFreeTrial ? 'Nu proberen' : 'Nu starten'}
                      <Zap className="ml-2 w-4 h-4" />
                    </Button>
                    
                    {!isFreeTrial && (
                      <Button
                        variant="outline"
                        className="w-full h-10 text-sm text-muted-foreground hover:text-foreground"
                        onClick={() => {
                          // Scroll to features section
                          document.getElementById('features')?.scrollIntoView({
                            behavior: 'smooth'
                          });
                        }}
                      >
                        <Info className="w-4 h-4 mr-2" />
                        Meer informatie
                      </Button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 text-center text-sm text-muted-foreground">
            <p>Geen verborgen kosten · Geen verplichtingen · Altijd opzegbaar</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Veelgestelde vragen over IPTV in Nederland
          </h2>
          <div className="space-y-4">
            {[
              {
                question: 'Is IPTV legaal in Nederland?',
                answer: 'Ja, IPTV is volledig legaal in Nederland zolang je gebruikmaakt van een betrouwbare aanbieder met de juiste uitzendrechten. Wij werken uitsluitend samen met geverifieerde providers.'
              },
              {
                question: 'Hoe werkt IPTV in Nederland?',
                answer: 'IPTV werkt via je internetverbinding. Je hebt alleen een stabiele internetverbinding nodig en een compatibel apparaat zoals een smart-tv, smartphone, tablet of computer.'
              },
              {
                question: 'Kan ik Nederlandse zenders kijken in het buitenland?',
                answer: 'Ja, met onze IPTV-dienst kun je overal ter wereld Nederlandse zenders kijken, zolang je maar een internetverbinding hebt.'
              },
              {
                question: 'Hoe kan ik IPTV op mijn tv kijken?',
                answer: 'Je kunt IPTV op verschillende manieren bekijken: via een app op je smart-tv, via een streaming device zoals een Fire TV Stick of Apple TV, of door je laptop of computer op je tv aan te sluiten.'
              }
            ].map((item, index) => (
              <div key={index} className="border-b border-border pb-4">
                <h3 className="text-lg font-semibold mb-2">{item.question}</h3>
                <p className="text-muted-foreground">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Klaar om te beginnen met de beste IPTV-ervaring?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Sluit je aan bij duizenden tevreden klanten en geniet van onbeperkt entertainment tegen een scherpe prijs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90"
              onClick={() => handleWhatsAppClick('Gratis Proef')}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Vraag een gratis proef aan
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => {
                const pricingSection = document.getElementById('pricing');
                if (pricingSection) pricingSection.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <Tv className="w-5 h-5 mr-2" />
              Bekijk onze abonnementen
            </Button>
          </div>
          <p className="mt-4 text-sm text-white/80">
            Geen creditcard nodig · Direct starten · 24/7 support
          </p>
        </div>
      </section>

      <WhatsAppPopup 
        isOpen={showWhatsAppPopup} 
        onClose={() => setShowWhatsAppPopup(false)}
        planName={selectedPlan}
      />
      
      {/* Add a hidden anchor for the pricing section */}
      <div id="pricing" className="invisible h-0 -mt-20"></div>
    </div>
  );
}
