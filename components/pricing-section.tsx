"use client";

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Check, Crown, Star, Zap, X, MessageCircle, Sparkles, Tv, Smartphone, Tablet, Monitor } from "lucide-react"

const DeviceToggle = ({ devices, activeDevice, onDeviceChange }) => {
  return (
    <div className="flex items-center justify-center mb-12 bg-muted/30 p-1 rounded-full w-fit mx-auto">
      {devices.map((device) => (
        <button
          key={device.id}
          onClick={() => onDeviceChange(device.id)}
          className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 flex items-center cursor-pointer ${
            activeDevice === device.id
              ? 'bg-background text-foreground shadow-md'
              : 'text-muted-foreground hover:text-foreground/80'
          }`}
        >
          <device.icon className={`w-5 h-5 mr-2 ${activeDevice === device.id ? 'text-primary' : ''}`} />
          {device.label}
        </button>
      ))}
    </div>
  );
};

const plans = [
  {
    name: "1 Jaar",
    originalPrice: "€59.99",
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
    originalPrice: "€79.98",
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
    originalPrice: "€49.98",
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
      "Geen creditcard nodig",
      "Directe activatie"
    ],
    popular: false,
    cta: "Probeer nu 1 uur gratis",
    isTrial: true
  }
]

function WhatsAppPopup({ onClose, planName }: { onClose: () => void, planName: string }) {
  const message = `Hallo, ik wil graag het ${planName} abonnement afnemen. Kunt u me hier meer over vertellen?`;
  const whatsappUrl = `https://api.whatsapp.com/send/?phone=3197010270035&text=${encodeURIComponent(message)}&type=phone_number&app_absent=0`;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 transition-all duration-300 animate-fadeIn">
      <div className="bg-gradient-to-br from-background to-muted/10 border border-border/50 rounded-2xl shadow-2xl overflow-hidden w-full max-w-md transform transition-all duration-300 scale-95 hover:scale-[0.98] hover:shadow-xl">
        {/* Header */}
        <div className="relative overflow-hidden p-8 bg-gradient-to-r from-primary/90 to-primary/70">
          {/* Animated background elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-white/20 animate-pulse"></div>
            <div className="absolute -left-20 -bottom-20 w-48 h-48 rounded-full bg-white/10"></div>
          </div>
          
          <div className="relative z-10">
            <div className="flex justify-between items-start">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white font-serif">Start Your {planName} Plan</h3>
                  <p className="text-white/80 text-sm mt-1">Exclusive offer just for you</p>
                </div>
              </div>
              <button 
                onClick={onClose}
                className="p-2 rounded-full hover:bg-white/10 transition-all duration-200 text-white/80 hover:text-white active:scale-95 cursor-pointer"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="text-center mb-8">
            <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 flex items-center justify-center border border-primary/20">
              <div className="p-4 rounded-xl bg-primary/10">
                <MessageCircle className="w-12 h-12 text-primary" />
              </div>
            </div>
            <h4 className="text-2xl font-bold text-foreground font-serif mb-3">Ready to Get Started?</h4>
            <p className="text-muted-foreground">Click below to contact us on WhatsApp and begin your {planName} experience today!</p>
          </div>
          
          <div className="space-y-6">
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="group relative flex items-center justify-center w-full px-6 py-4 rounded-xl font-semibold text-center transition-all duration-300 overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-600 group-hover:from-green-600 group-hover:to-green-700 transition-all duration-300"></div>
              <div className="absolute inset-0.5 bg-gradient-to-r from-green-500 to-green-600 rounded-xl group-hover:from-green-600 group-hover:to-green-700 transition-all duration-300"></div>
              <div className="absolute inset-0.5 bg-gradient-to-r from-green-600 to-green-700 rounded-xl group-hover:from-green-700 group-hover:to-green-800 transition-all duration-300 flex items-center justify-center space-x-2 text-white">
                <span>Chat on WhatsApp</span>
                <svg className="w-5 h-5 text-white transition-transform duration-300 group-hover:translate-x-1" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.05 4.91a9.816 9.816 0 00-7.02-2.91A9.855 9.855 0 002.1 12c0 1.74.45 3.36 1.24 4.79l-1.3 3.95 4.05-1.3c1.38.75 2.93 1.18 4.56 1.18h.01c5.47 0 9.92-4.43 9.92-9.91 0-2.65-1.03-5.14-2.9-7.01z"></path>
                  <path fill="#fff" d="M12 20.5c-1.5 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.27 8.27 0 01-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.17 8.17 0 012.4 5.83c.01 4.54-3.69 8.25-8.23 8.25zm4.52-6.1c-.25-.13-1.47-.72-1.69-.8-.23-.08-.39-.12-.56.12-.17.25-.64.8-.78.97-.14.17-.29.19-.54.06-.25-.13-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43s.17-.25.25-.42c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.4-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.42 1.41.54.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.07-.1-.23-.16-.48-.27z"></path>
                </svg>
              </div>
            </a>
            
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-4">Available 24/7 • Response within minutes</p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                {[
                  { text: 'No setup fees', icon: '✓' },
                  { text: 'Cancel anytime', icon: '✓' },
                  { text: 'Secure payment', icon: '✓' }
                ].map((item, i) => (
                  <div key={i} className="flex items-center text-sm text-muted-foreground bg-muted/30 px-3 py-1.5 rounded-full">
                    <span className="text-green-500 mr-1.5">{item.icon}</span>
                    {item.text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <div className="border-t border-border/50 px-6 py-4 bg-muted/20">
          <p className="text-xs text-center text-muted-foreground">
            By proceeding, you agree to our{' '}
            <a href="/privacy-policy" className="text-primary hover:underline font-medium cursor-pointer">Privacy Policy</a> and{' '}
            <a href="/terms" className="text-primary hover:underline font-medium cursor-pointer">Terms of Service</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default function PricingSection() {
  const [showWhatsAppPopup, setShowWhatsAppPopup] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");
  const [activeDevice, setActiveDevice] = useState('single');
  const [isYearly, setIsYearly] = useState(true);

  const handleWhatsAppClick = (planName: string) => {
    setSelectedPlan(planName);
    setShowWhatsAppPopup(true);
  };

  const closeWhatsAppPopup = () => {
    setShowWhatsAppPopup(false);
  };

  // Close popup when clicking outside
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeWhatsAppPopup();
    }
  };

  // Close popup when pressing Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeWhatsAppPopup();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  const devices = [
    { id: 'all', label: 'Alle apparaten', icon: Monitor },
    { id: 'smart-tv', label: 'Smart TV', icon: Tv },
    { id: 'phone', label: 'Telefoon', icon: Smartphone },
    { id: 'tablet', label: 'Tablet', icon: Tablet },
  ];

  const getPrice = (plan) => {
    if (plan.isTrial) return plan.price;
    
    let price = parseFloat(plan.discountedPrice.replace('€', '').replace(',', '.'));
    
    // Apply device multiplier
    if (activeDevice === 'smart-tv') {
      price = price * 1.2;
    } else if (activeDevice === 'phone') {
      price = price * 1.1;
    } else if (activeDevice === 'tablet') {
      price = price * 1.3;
    }
    
    return `€${price.toFixed(2).replace('.', ',')}`;
  };

  const getPeriodLabel = (plan) => {
    if (plan.isTrial) return plan.periodLabel;
    
    let label = '';
    if (activeDevice === 'all') {
      label = `Alle apparaten • ${plan.period}`;
    } else if (activeDevice === 'smart-tv') {
      label = `Smart TV • ${plan.period}`;
    } else if (activeDevice === 'phone') {
      label = `Telefoon • ${plan.period}`;
    } else {
      label = `Tablet • ${plan.period}`;
    }
    
    return label;
  };

  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-background to-muted/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
            Kies je abonnement
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Flexibele prijzen die bij je passen. Geen verborgen kosten. Annuleer wanneer je wilt.
          </p>
        </div>

        {/* Device Toggle */}
        <DeviceToggle 
          devices={devices} 
          activeDevice={activeDevice} 
          onDeviceChange={setActiveDevice} 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative group ${plan.bestValue ? 'lg:-mt-4' : ''}`}
            >
              {plan.bestValue && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-amber-400 to-amber-500 text-foreground text-xs font-semibold px-4 py-1 rounded-full whitespace-nowrap shadow-lg shadow-amber-500/20 z-10">
                  Beste waarde
                </div>
              )}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-primary to-primary/80 text-white text-xs font-semibold px-4 py-1 rounded-full whitespace-nowrap shadow-lg shadow-primary/20 z-10">
                  Meest populair
                </div>
              )}
              <Card 
                className={`h-full flex flex-col transition-all duration-300 ${
                  plan.bestValue 
                    ? 'border-2 border-amber-400 shadow-lg shadow-amber-500/10' 
                    : plan.popular 
                      ? 'border-2 border-primary shadow-lg shadow-primary/10' 
                      : 'border border-border/50 hover:border-primary/30'
                } hover:shadow-xl`}
              >
                <CardHeader className="pb-4 pt-8">
                  <div className="flex justify-center mb-4">
                    <div className={`p-3 rounded-xl ${
                      plan.bestValue 
                        ? 'bg-amber-500/10 text-amber-500' 
                        : plan.popular 
                          ? 'bg-primary/10 text-primary' 
                          : 'bg-muted text-muted-foreground'
                    }`}>
                      <plan.icon className="w-6 h-6" />
                    </div>
                  </div>
                  <CardTitle className={`text-center text-2xl font-bold ${
                    plan.bestValue ? 'text-amber-500' : plan.popular ? 'text-primary' : 'text-foreground'
                  }`}>
                    {plan.name}
                  </CardTitle>
                  {!plan.isTrial && (
                    <div className="flex items-end justify-center mt-4 space-x-1">
                      <span className="text-4xl font-bold text-foreground">
                        {getPrice(plan)}
                      </span>
                      <span className="text-muted-foreground text-sm mb-1.5">
                        /{plan.period.split(' ')[0]}
                      </span>
                    </div>
                  )}
                  {plan.isTrial ? (
                    <p className="text-2xl font-bold text-foreground text-center mt-2">
                      {plan.price}
                    </p>
                  ) : (
                    <p className="text-sm text-muted-foreground text-center mb-8">
                      Probeer 1 uur gratis uit. Geen creditcard nodig. Geen verplichtingen.
                    </p>
                  )}
                  {plan.description && (
                    <p className={`text-sm text-center mt-2 ${
                      plan.bestValue ? 'text-amber-500 font-medium' : 'text-primary font-medium'
                    }`}>
                      {plan.description}
                    </p>
                  )}
                </CardHeader>
                <CardContent className="px-6 py-2 flex-grow">
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 mr-2 ${
                          plan.bestValue ? 'text-amber-500' : plan.popular ? 'text-primary' : 'text-muted-foreground'
                        }`} />
                        <span className="text-foreground/90 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button 
                    onClick={() => handleWhatsAppClick(plan.name)}
                    className={`w-full group relative overflow-hidden h-14 text-base font-medium transition-all duration-300 cursor-pointer ${
                      plan.bestValue 
                        ? 'bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white hover:shadow-lg hover:shadow-amber-500/20'
                        : plan.popular 
                          ? 'bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white hover:shadow-lg hover:shadow-primary/20'
                          : 'bg-foreground text-background hover:bg-foreground/90 hover:shadow-md'
                    }`}
                  >
                    <span className="relative z-10 flex items-center justify-center w-full h-full group-active:scale-95 transition-transform duration-150">
                      {plan.cta}
                      <svg 
                        className={`ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 ${
                          plan.bestValue ? 'text-amber-200' : plan.popular ? 'text-primary-200' : 'text-muted-foreground'
                        }`} 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                    {plan.bestValue && (
                      <span className="absolute inset-0 flex items-center justify-center text-white/20">
                        <svg width="100%" height="100%" className="opacity-10 absolute inset-0">
                          <pattern id="pattern-circles" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse" patternContentUnits="userSpaceOnUse">
                            <circle id="pattern-circle" cx="20" cy="20" r="1" fill="currentColor"></circle>
                          </pattern>
                          <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)"></rect>
                        </svg>
                      </span>
                    )}
                  </Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground text-sm">
            Heb je een aangepast plan nodig voor meer apparaten?{' '}
            <a href="#contact" className="text-primary hover:underline font-medium">
              Neem contact op met onze verkoopafdeling
            </a>
          </p>
        </div>
      </div>
      
      {/* WhatsApp Popup */}
      {showWhatsAppPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Semi-transparent overlay that doesn't block interaction with the background */}
          <div 
            className="fixed inset-0 bg-black/30 backdrop-blur-sm"
            onClick={handleBackdropClick}
          />
          {/* Popup content */}
          <div className="relative z-50 w-full max-w-lg">
            <WhatsAppPopup onClose={closeWhatsAppPopup} planName={selectedPlan} />
          </div>
        </div>
      )}
    </section>
  )
}
