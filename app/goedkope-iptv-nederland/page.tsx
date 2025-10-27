'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Check, Euro, Tv, Smartphone, Zap, Shield, Clock, Award, Crown, Star, Sparkles, Info, MessageSquareText } from 'lucide-react';
import { WhatsAppPopup } from '@/components/whatsapp-popup';

const plans = [
  {
    name: "1 Jaar",
    originalPrice: "€89,98",
    discountedPrice: "€69,99",
    period: "1 jaar",
    periodLabel: "1jr/€69,99",
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
    originalPrice: "€57,94",
    discountedPrice: "€49,99",
    period: "6 maanden",
    periodLabel: "6mnd/€49,99",
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
    originalPrice: "€39,97",
    discountedPrice: "€34,99",
    period: "3 maanden",
    periodLabel: "3mnd/€34,99",
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
    name: "1 Uur",
    originalPrice: "€29,99",
    discountedPrice: "€19,99",
    period: "1 uur",
    periodLabel: "1uur/€19,99",
    description: "Probeer eerst",
    icon: Sparkles,
    features: [
      "Werkt op alle apparaten",
      "+75.000 films & series",
      "24/7 Nederlandse klantenservice",
      "HD & Full HD kwaliteit",
      "Internationaal pakket met +21.000 IPTV kanalen"
    ],
    cta: "Nu starten"
  }
];

const features = [
  {
    icon: <Euro className="w-8 h-8 text-primary" />,
    title: 'Betaalbaar',
    description: 'Kwaliteit IPTV tegen de beste prijs in Nederland'
  },
  {
    icon: <Tv className="w-8 h-8 text-primary" />,
    title: '10.000+ Kanalen',
    description: 'Inclusief alle Nederlandse zenders in HD-kwaliteit'
  },
  {
    icon: <Zap className="w-8 h-8 text-primary" />,
    title: 'Directe activatie',
    description: 'Binnen enkele minuten klaar voor gebruik'
  },
  {
    icon: <Shield className="w-8 h-8 text-primary" />,
    title: 'Veilig betalen',
    description: 'Veilige betaling via iDeal, creditcard of PayPal'
  },
  {
    icon: <Clock className="w-8 h-8 text-primary" />,
    title: '24/7 Ondersteuning',
    description: 'Nederlandstalige klantenservice altijd beschikbaar'
  },
  {
    icon: <Award className="w-8 h-8 text-primary" />,
    title: 'Geld-terug-garantie',
    description: 'Niet tevreden? Geld terug binnen 7-30 dagen'
  }
];

export default function GoedkopeIptvNederland() {
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
          <div className="inline-block bg-yellow-100 text-yellow-800 text-sm font-medium px-3 py-1 rounded-full mb-4">
            Beste prijs-kwaliteitverhouding van 2024
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Goedkope IPTV in Nederland
          </h1>
          <p className="text-sm text-muted-foreground text-center mb-8">
            Alle prijzen zijn inclusief BTW. Geen verborgen kosten. Start vanaf €19,99 per maand.
          </p>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Meer dan 10.000 kanalen, inclusief alle Nederlandse zenders in HD-kwaliteit.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90"
              onClick={() => handleWhatsAppClick('1 Maand')}
            >
              Start vanaf €19,99 / maand
              <Zap className="ml-2 w-4 h-4" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => {
                const pricingSection = document.getElementById('prijzen');
                if (pricingSection) {
                  pricingSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Bekijk onze abonnementen
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="prijzen" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Kies het perfecte IPTV-abonnement</h2>
            <p className="text-lg text-muted-foreground">
              Kies de looptijd die bij je past. Directe activatie, geen contracten, 24/7 support.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              Geen verborgen kosten - Wat je ziet is wat je betaalt, zonder extra kosten voor HD of meerkijken.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {plans.map((plan, index) => {
              const Icon = plan.icon;
              const isFreeTrial = false;
              
              return (
                <div
                  key={plan.name}
                  className={`relative bg-card rounded-xl p-6 border transition-all duration-300 hover:shadow-lg ${
                    plan.popular 
                      ? 'border-primary shadow-md scale-[1.02]' 
                      : 'border-border hover:border-primary/50'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-semibold py-1.5 px-4 rounded-full whitespace-nowrap shadow-md">
                      <Star className="inline w-3.5 h-3.5 mr-1 -mt-0.5" />
                      Meest populair
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <div className="flex justify-center mb-3">
                      <div className={`p-3 rounded-full ${
                        plan.popular 
                          ? 'bg-primary/10 text-primary' 
                          : 'bg-muted/30 text-foreground/80'
                      }`}>
                        <Icon className="w-7 h-7" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-1 text-foreground">{plan.name}</h3>
                    {plan.description && (
                      <p className="text-sm text-muted-foreground">{plan.description}</p>
                    )}
                  </div>

                  <div className="text-center mb-6">
                    <div className="flex items-baseline justify-center gap-2">
                      <span className="text-4xl font-bold text-foreground">
                        {plan.discountedPrice}
                      </span>
                      {plan.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">
                          {plan.originalPrice}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      {plan.period}
                    </p>
                    {plan.periodLabel && (
                      <span className="inline-block mt-1 text-xs font-medium bg-muted/40 text-foreground/80 px-2 py-0.5 rounded-full">
                        {plan.periodLabel}
                      </span>
                    )}
                  </div>

                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="w-5 h-5 text-green-500 mr-2.5 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-foreground/90">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full h-12 text-base font-semibold ${
                      plan.popular 
                        ? 'bg-primary hover:bg-primary/90 shadow-md'
                        : 'bg-foreground hover:bg-foreground/90 text-background'
                    }`}
                    size="lg"
                    onClick={() => handleWhatsAppClick(plan.name)}
                  >
                    Nu starten
                    <Zap className="ml-2 w-4 h-4" />
                  </Button>
                  
                  <Button
                    variant="outline"
                    className="w-full h-10 text-sm text-muted-foreground hover:text-foreground mt-3"
                    onClick={() => {
                      const featuresSection = document.getElementById('features');
                      if (featuresSection) {
                        featuresSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    <Info className="w-4 h-4 mr-2" />
                    Meer informatie
                  </Button>
                </div>
              );
            })}
          </div>
          
          <div className="mt-8 text-center text-sm text-muted-foreground">
            <p>Geen verborgen kosten · Geen verplichtingen · Altijd opzegbaar</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Waarom kiezen voor onze goedkope IPTV?</h2>
            <p className="text-xl text-muted-foreground mb-12">
              Goedkoop betekent bij ons niet minder kwaliteit. Wij bieden de beste IPTV-ervaring 
              tegen een betaalbare prijs, zonder in te leveren op betrouwbaarheid of ondersteuning.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="bg-card p-6 rounded-lg">
                <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-primary/10 rounded-full">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-center">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Save */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <span className="inline-block bg-primary/10 text-primary text-sm font-medium px-4 py-1 rounded-full mb-4">
              KostenefficiÃ«nt
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Hoe bespaar je geld met IPTV?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ontdek hoe je honderden euro's per jaar kunt besparen op je tv-kosten zonder in te leveren op kwaliteit of keuze.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: 'Geen dure abonnementen',
                content: 'Betaal niet langer honderden euro\'s per jaar voor een traditioneel tv-abonnement. Met IPTV krijg je meer kanalen en content voor een fractie van de prijs.',
                icon: <Euro className="w-6 h-6 text-primary" />
              },
              {
                title: 'Geen installatiekosten',
                content: 'Geen dure installatie of extra apparatuur nodig. Je kunt direct beginnen op je bestaande apparaten zoals smart-tv, telefoon of tablet.',
                icon: <Tv className="w-6 h-6 text-primary" />
              },
              {
                title: 'Geen verborgen kosten',
                content: 'Wij hanteren transparante prijzen zonder verrassingen. Wat je ziet is wat je betaalt, zonder extra kosten voor HD of meerkijken.',
                icon: <Shield className="w-6 h-6 text-primary" />
              },
              {
                title: 'Geen vaste contracten',
                content: 'Geen verplichtingen of opzegtermijnen. Je kunt maandelijks opzeggen als je dat wilt, zonder boetes of extra kosten.',
                icon: <Clock className="w-6 h-6 text-primary" />
              }
            ].map((item, index) => (
              <div 
                key={index} 
                className="group bg-card p-6 rounded-xl border border-border hover:border-primary/30 transition-colors duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">{item.title}</h3>
                    <p className="text-muted-foreground">{item.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Wat zeggen onze klanten?</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: 'Jan de Vries',
                location: 'Amsterdam',
                rating: 5,
                comment: 'Al maanden tevreden klant. Nooit problemen met de verbinding en een geweldige klantenservice!'
              },
              {
                name: 'Sanne Jansen',
                location: 'Rotterdam',
                rating: 5,
                comment: 'Beste prijs-kwaliteitverhouding die ik kon vinden. Werkt perfect op al mijn apparaten.'
              },
              {
                name: 'Thomas Meijer',
                location: 'Utrecht',
                rating: 4,
                comment: 'Soms wat buffering tijdens piekuren, maar voor deze prijs absoluut top!'
              }
            ].map((review, index) => (
              <div key={index} className="bg-card p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400 mr-2">
                    {[...Array(review.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-muted-foreground italic mb-4">"{review.comment}"</p>
                <div className="font-medium text-foreground">{review.name}</div>
                <div className="text-sm text-muted-foreground">{review.location}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IPTV Comparison */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Vergelijk de beste IPTV-aanbieders in Nederland</h2>
            <p className="text-lg text-muted-foreground">
              Ontdek waarom duizenden Nederlanders kiezen voor onze betrouwbare IPTV-service
            </p>
          </div>
          
          <div className="bg-card rounded-xl p-6 max-w-5xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left pb-4 pr-6 font-semibold text-foreground">Kenmerk</th>
                    <th className="text-center pb-4 px-6 font-semibold text-foreground">IPTV Nederland</th>
                    <th className="text-center pb-4 px-6 font-semibold text-muted-foreground">Andere aanbieders</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    { feature: 'Aantal kanalen', value: '10.000+', other: '2.000-5.000' },
                    { feature: 'Nederlandse zenders', value: 'Allemaal inbegrepen', other: 'Vaak beperkt' },
                    { feature: '4K & HD kwaliteit', value: '✓ Inbegrepen', other: 'Vaak extra kosten' },
                    { feature: 'Maandprijs', value: 'Vanaf €4,99/maand', other: '€15-€30/maand' },
                    { feature: 'Apparaten', value: 'Onbeperkt', other: '1-3 apparaten' },
                    { feature: 'Opzeggen', value: 'Altijd mogelijk', other: 'Vaak vast contract' },
                    { feature: 'Ondersteuning', value: '24/7 Nederlands', other: 'Beperkt of Engels' }
                  ].map((row, index) => (
                    <tr key={index} className="hover:bg-muted/20">
                      <td className="py-4 pr-6 font-medium text-foreground/90">{row.feature}</td>
                      <td className="py-4 px-6 text-center font-semibold text-primary">{row.value}</td>
                      <td className="py-4 px-6 text-center text-muted-foreground">{row.other}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90"
                onClick={() => handleWhatsAppClick('Vergelijking')}
              >
                Vraag nu advies
                <MessageSquareText className="ml-2 w-4 h-4" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => {
                  const pricingSection = document.getElementById('prijzen');
                  if (pricingSection) {
                    pricingSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Bekijk onze prijzen
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary/90 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Bespaar vandaag nog op je tv-abonnement</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Sluit je aan bij duizenden tevreden klanten en geniet van de beste IPTV-ervaring tegen een scherpe prijs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
              <Link href="/proefabonnement">
                Start met 7 dagen gratis
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              <a href="tel:+31850000000">
                Bel voor advies
              </a>
            </Button>
          </div>
          <p className="text-sm mt-6 opacity-80">
            Geen creditcard nodig · Geen verplichtingen · Altijd opzegbaar
          </p>
        </div>
      </section>
      
      {/* WhatsApp Popup */}
      <WhatsAppPopup 
        isOpen={showWhatsAppPopup} 
        onClose={() => setShowWhatsAppPopup(false)}
        planName={selectedPlan}
      />
    </div>
  );
}
