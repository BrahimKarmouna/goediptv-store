"use client"

import { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Instagram, Youtube, Phone, Mail, MapPin, MessageCircle } from "lucide-react"
import { NavLink } from "./ui/nav-link"
import { WhatsAppPopup } from "./whatsapp-popup"

export function Footer() {
  const [showWhatsApp, setShowWhatsApp] = useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    const element = document.querySelector(targetId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const [selectedPlan, setSelectedPlan] = useState("Free Trial");

  const handleWhatsAppClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowWhatsApp(true);
  };

  const closeWhatsAppPopup = () => {
    setShowWhatsApp(false);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeWhatsAppPopup();
    }
  };

  return (
    <footer id="contact" className="bg-gradient-to-b from-muted/10 to-muted/30 border-t border-border w-full overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Navigation */}
          <div className="space-y-6 w-full md:w-[200px] flex-shrink-0">
            <a 
              href="/#home" 
              onClick={(e) => {
                e.preventDefault();
                window.location.href = '/';
              }}
              className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
            >
              <img
                src="/goed-iptv.png"
                alt="Goed IPTV"
                className="h-12 md:h-14 w-auto object-contain"
              />
            </a>
            <p className="text-muted-foreground leading-relaxed">
              Goed IPTV subscriptions with 20,000+ channels worldwide. Your gateway to unlimited entertainment in crystal clear quality.
            </p>
            <div className="flex space-x-3 pt-2">
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 hover:text-primary transition-all cursor-pointer group">
                <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-blue-400/10 hover:text-blue-400 transition-all cursor-pointer group">
                <Twitter className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-pink-500/10 hover:text-pink-500 transition-all cursor-pointer group">
                <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-red-500/10 hover:text-red-500 transition-all cursor-pointer group">
                <Youtube className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-foreground relative inline-block">
              Navigation
              <span className="absolute -bottom-1 left-0 w-10 h-0.5 bg-primary"></span>
            </h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', href: '#', target: 'body' },
                { name: 'Pricing', href: '#pricing', target: '#pricing' },
                { name: 'Features', href: '#features', target: '#features' },
                { name: 'Reviews', href: '#testimonials', target: '#testimonials' },
                { name: 'FAQ', href: '#faq', target: '#faq' },
                { name: 'Contact', href: '#contact', target: '#contact' }
              ].map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.href}
                    onClick={(e) => handleScroll(e, item.target)}
                    className="text-muted-foreground hover:text-primary transition-colors cursor-pointer flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/0 group-hover:bg-primary mr-3 transition-all duration-300"></span>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Important Pages - Separate Columns */}
          <div className="space-y-6 flex-1 min-w-0">
            <h4 className="text-lg font-semibold text-foreground relative pb-2">
              Belangrijke Pagina's
              <span className="absolute bottom-0 left-0 w-10 h-0.5 bg-primary"></span>
            </h4>
            
            <div className="flex flex-col sm:flex-row gap-8">
              {/* Informatie Column */}
              <div className="flex-1">
                <div className="space-y-4">
                  <h5 className="font-semibold text-foreground text-base border-b pb-2">Informatie</h5>
                  <ul className="space-y-3">
                    {[
                      { name: 'Wat is IPTV', href: '/informatie/wat-is-iptv' },
                      { name: 'Is IPTV Legaal?', href: '/informatie/is-iptv-legaal' },
                      { name: 'IPTV in het Buitenland', href: '/informatie/iptv-in-het-buitenland' },
                      { name: 'Goed IPTV', href: '/informatie/iptv-kopen' },
                      { name: 'Beste IPTV Aanbieder', href: '/beste-iptv-aanbieder' },
                      { name: 'Betrouwbare IPTV', href: '/betrouwbare-iptv' },
                      { name: 'IPTV Abonnement', href: '/informatie/iptv-abonnement' }, 
                      { name: 'Goed IPTV', href: '/iptv-kopen' },
                    ].map((item, index) => (
                      <li key={index} className="group">
                        <a 
                          href={item.href} 
                          className="text-muted-foreground hover:text-primary transition-colors cursor-pointer flex items-start group-hover:translate-x-1 transition-transform"
                        >
                          <span className="mr-2">•</span>
                          <span>{item.name}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Sport Column */}
              <div className="flex-1">
                <div className="space-y-4">
                  <h5 className="font-semibold text-foreground text-base border-b pb-2">Sport</h5>
                  <ul className="space-y-3">
                    {[
                      { name: 'IPTV Voetbal', href: '/iptv-kopen/sport/voetbal' },
                      { name: 'IPTV Formule 1', href: '/iptv-kopen/sport/formule-1' },
                      { name: 'IPTV Wielrennen', href: '/iptv-kopen/sport/wielrennen' },
                      { name: 'IPTV Tennis', href: '/iptv-kopen/sport/tennis' },
                      { name: 'IPTV Wintersport', href: '/iptv-kopen/sport/wintersport' },
                      { name: 'IPTV Basketbal', href: '/iptv-kopen/sport/basketbal' },
                      { name: 'Alle IPTV Sporten', href: '/iptv-kopen/sport/alle-sporten' },
                    ].map((item, index) => (
                      <li key={index} className="group">
                        <a 
                          href={item.href}
                          className="text-muted-foreground hover:text-primary transition-colors cursor-pointer flex items-start group-hover:translate-x-1 transition-transform"
                        >
                          <span className="mr-2">•</span>
                          <span>{item.name}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Platformen Column */}
              <div className="flex-1">
                <div className="space-y-4">
                  <h5 className="font-semibold text-foreground text-base border-b pb-2">Platformen</h5>
                  <ul className="space-y-3">
                    {[
                      { name: 'IPTV Smart TV', href: '/iptv-kopen/smart-tv' },
                      { name: 'IPTV Android', href: '/iptv-kopen/android' },
                      { name: 'IPTV Apple TV', href: '/iptv-kopen/apple-tv' },
                      { name: 'IPTV VLC Player', href: '/iptv-kopen/vlc-player' },
                      { name: 'IPTV EPG Gids', href: '/iptv-kopen/epg-gids' },
                      { name: 'IPTV Kopen', href: '/iptv-kopen' },
                      { name: 'IPTV Storing Oplossen', href: '/iptv-kopen/storing-oplossen' },
                    ].map((item, index) => (
                      <li key={index} className="group">
                        <a 
                          href={item.href} 
                          className="text-muted-foreground hover:text-primary transition-colors cursor-pointer flex items-start group-hover:translate-x-1 transition-transform"
                        >
                          <span className="mr-2">•</span>
                          <span>{item.name}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-6 w-full md:w-[250px] flex-shrink-0">
            <h4 className="text-lg font-semibold text-foreground relative inline-block">
              Contact
              <span className="absolute -bottom-1 left-0 w-10 h-0.5 bg-primary"></span>
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 p-3 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Telefonische support</p>
                  <p className="text-sm text-muted-foreground">+31 970 102 7003</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 p-3 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">E-mail</p>
                  <p className="text-sm text-muted-foreground">support@iptvkopen.nl</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 p-3 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Wereldwijde support</p>
                  <p className="text-sm text-muted-foreground">Wereldwijd beschikbaar</p>
                  <p className="text-sm text-muted-foreground">24/7 Klantenservice</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = '/#pricing';
                }}
                className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary transition-all"
              >
                Bekijk alle pakketten & prijzen
              </Button>
              <NavLink
                href="#pricing"
                targetId="#pricing"
                className="flex-1"
              >
                <Button 
                  variant="outline" 
                  className="w-full border-primary text-primary hover:bg-primary/10 cursor-pointer"
                >
                  Nu starten
                </Button>
              </NavLink>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center space-y-4">
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button 
              onClick={(e) => {
                e.preventDefault();
                window.location.href = '/#pricing';
              }}
              className="px-6 py-3 bg-gradient-to-r from-primary to-primary/90 text-white rounded-full font-medium hover:shadow-lg hover:shadow-primary/20 transition-all hover:-translate-y-0.5"
            >
              Bekijk alle pakketten & prijzen
            </Button>
            <NavLink
              href="#pricing"
              targetId="#pricing"
              className="block"
            >
              <Button 
                variant="outline"
                className="px-6 py-3 border border-primary/20 text-primary rounded-full font-medium hover:bg-primary/5 transition-all cursor-pointer"
              >
                Nu starten
              </Button>
            </NavLink>
          </div>
          <p className="text-sm text-muted-foreground pt-4">
            © {new Date().getFullYear()} Goed IPTV. All rights reserved. | Goed IPTV Subscriptions Worldwide
          </p>
          <div className="flex justify-center space-x-6 pt-4">
            <a href="/privacy-policy" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a>
            <span className="text-muted-foreground">•</span>
            <a href="/terms-of-service" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Terms of Service</a>
            <span className="text-muted-foreground">•</span>
            <a href="/refund-policy" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Refund Policy</a>
          </div>
        </div>
      </div>
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <a
          href="https://api.whatsapp.com/send/?phone=3197010270035&type=phone_number&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group cursor-pointer animate-bounce hover:animate-none"
          aria-label="Contact us on WhatsApp"
        >
          <MessageCircle className="w-8 h-8" />
          <span className="absolute -top-2 -right-2 bg-primary text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative">!</span>
          </span>
        </a>
      </div>
      {showWhatsApp && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={handleBackdropClick}
        >
          <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" />
          <div className="relative z-50 w-full max-w-lg">
            <WhatsAppPopup 
              isOpen={showWhatsApp} 
              onClose={closeWhatsAppPopup} 
              planName={selectedPlan} 
            />
          </div>
        </div>
      )}
    </footer>
  )
}
