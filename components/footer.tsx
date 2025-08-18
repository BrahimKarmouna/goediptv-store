"use client"

import { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Instagram, Youtube, Phone, Mail, MapPin, MessageCircle } from "lucide-react"
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
    <footer id="contact" className="bg-gradient-to-b from-muted/10 to-muted/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
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
              <span className="text-3xl font-serif font-black bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                StreamPro IPTV
              </span>
            </a>
            <p className="text-muted-foreground leading-relaxed">
              Premium IPTV subscriptions with 20,000+ channels worldwide. Your gateway to unlimited entertainment in crystal clear quality.
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
                      { name: 'IPTV Kopen', href: '/informatie/iptv-kopen' },
                      { name: 'Beste IPTV Aanbieder', href: '/beste-iptv-aanbieder' },
                      { name: 'Betrouwbare IPTV', href: '/betrouwbare-iptv' },
                      { name: 'IPTV Abonnement', href: '/informatie/iptv-abonnement' }, 
                      { name: 'IPTV Kopen', href: '/iptv-kopen' },
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
                      { name: 'Voetbal', href: '/beste-iptv-voor-sport' },
                      { name: 'Formule 1', href: '/iptv-met-espn' },
                      { name: 'Wielrennen', href: '/beste-iptv-voor-sport' },
                      { name: 'Tennis', href: '/beste-iptv-voor-sport' },
                      { name: 'Wintersport', href: '/beste-iptv-voor-sport' },
                      { name: 'Basketbal', href: '/beste-iptv-voor-sport' },
                      { name: 'Alle Sporten', href: '/beste-iptv-voor-sport' },
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
                      { name: 'Smart TV', href: '/iptv-op-smart-tv' },
                      { name: 'Android', href: '/iptv-voor-android' },
                      { name: 'Apple TV', href: '/iptv-voor-apple-tv' },
                      { name: 'VLC Player', href: '/iptv-met-vlc-player' },
                      { name: 'EPG Gids', href: '/iptv-met-epg-gids' },
                      { name: 'Handleiding', href: '/iptv-handleiding' },
                      { name: 'Storing Oplossen', href: '/hulp-bij-iptv-installatie' },
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
              Contact Us
              <span className="absolute -bottom-1 left-0 w-10 h-0.5 bg-primary"></span>
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 p-3 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Phone Support</p>
                  <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 p-3 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Email Us</p>
                  <p className="text-sm text-muted-foreground">support@streamproiptv.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 p-3 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Global Support</p>
                  <p className="text-sm text-muted-foreground">Available Worldwide</p>
                  <p className="text-sm text-muted-foreground">24/7 Customer Support</p>
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
                View All Plans & Pricing
              </Button>
              <Button 
                variant="outline" 
                className="flex-1 border-primary text-primary hover:bg-primary/10 cursor-pointer"
                onClick={handleWhatsAppClick}
              >
                Start Free Trial
              </Button>
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
              View All Plans & Pricing
            </Button>
            <Button 
              variant="outline"
              onClick={handleWhatsAppClick}
              className="px-6 py-3 border border-primary/20 text-primary rounded-full font-medium hover:bg-primary/5 transition-all cursor-pointer"
            >
              Start Free Trial
            </Button>
          </div>
          <p className="text-sm text-muted-foreground pt-4">
            © {new Date().getFullYear()} StreamPro IPTV. All rights res
            erved. | Premium IPTV Subscriptions Worldwide
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
            <WhatsAppPopup onClose={closeWhatsAppPopup} planName={selectedPlan} />
          </div>
        </div>
      )}
    </footer>
  )
}
