"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone } from 'lucide-react';
import { NavLink } from './ui/nav-link';
import { WhatsAppPopup } from './whatsapp-popup';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showWhatsAppPopup, setShowWhatsAppPopup] = useState(false);
  const [isNlIptvOpen, setIsNlIptvOpen] = useState(true);
  const [selectedPlan, setSelectedPlan] = useState({
    name: "1 Maand",
    period: "1 maand",
    devices: 1,
    isTrial: false
  });

  const closeWhatsAppPopup = () => {
    setShowWhatsAppPopup(false);
  };

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    const element = document.querySelector(targetId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      // Close mobile menu if open
      if (isMenuOpen) {
        setIsMenuOpen(false)
        // Wait for the menu to close before scrolling
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" })
        }, 300)
      }
    }
  }

  // Close menu when clicking outside
  const handleMenuBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setIsMenuOpen(false);
    }
  };

  // Handle WhatsApp popup backdrop click
  const handleWhatsAppBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeWhatsAppPopup();
    }
  };

  // Close menu when pressing Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/20 backdrop-blur-xl border-b border-white/10 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="cursor-pointer group">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                IPTV<span className="text-foreground">Kopen</span>
                <span className="block h-0.5 bg-gradient-to-r from-primary to-transparent w-0 group-hover:w-full transition-all duration-300"></span>
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 hover:border-white/20 transition-colors">
            {[
              { name: 'Home', href: '/', targetId: null },
              { 
                name: 'Nl iptv', 
                isDropdown: true,
                items: [
                  { name: 'Beste Nederlandse IPTV', href: '/beste-nederlandse-iptv-aanbieders' },
                  { name: 'IPTV Kopen Gids', href: '/iptv-kopen-gids' },
                  { name: 'Goedkope IPTV', href: '/goedkope-iptv-nederland' },
                ]
              },
              { name: 'Pricing', href: '/#pricing', targetId: '#pricing' },
              { name: 'Features', href: '/#features', targetId: '#features' },
              { name: 'Reviews', href: '/#testimonials', targetId: '#testimonials' },
              { name: 'FAQ', href: '/#faq', targetId: '#faq' },
              { name: 'Contact', href: '/#contact', targetId: '#contact' },
              { name: 'IPTV Kopen', href: '/iptv-kopen', targetId: null },
            ].map((item) => (
              item.isDropdown ? (
                <div key={item.name} className="relative group">
                  <button className="flex items-center px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors rounded-full hover:bg-foreground/5">
                    {item.name}
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className="absolute left-0 mt-2 w-56 rounded-lg bg-card shadow-lg border border-border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="py-1">
                      {item.items.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          href={dropdownItem.href ?? "/"}
                          className="block px-4 py-2 text-sm text-foreground/80 hover:bg-foreground/5 hover:text-primary transition-colors"
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : item.targetId ? (
                <NavLink 
                  key={item.name} 
                  href={item.href} 
                  targetId={item.targetId}
                  className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors rounded-full hover:bg-foreground/5"
                >
                  {item.name}
                </NavLink>
              ) : (
                <Link 
                  key={item.name}
                  href={item.href ?? "/"}
                  className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors rounded-full hover:bg-foreground/5"
                >
                  {item.name}
                </Link>
              )
            ))}
          </div>

          {/* Contact and CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="https://wa.me/3197010270035" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-sm font-medium bg-white/5 hover:bg-white/10 transition-all px-4 py-2 rounded-full border border-white/10 hover:border-white/20 cursor-pointer group"
            >
              <Phone className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
              <span className="text-foreground/80 group-hover:text-foreground transition-colors">24/7 Support</span>
            </a>
            <NavLink 
              href="#pricing"
              targetId="#pricing"
              className="hidden md:flex items-center gap-2 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary/80 text-white px-6 py-2.5 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5"
            >
              Nu starten
              <span className="w-5 h-5 flex items-center justify-center bg-white/20 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </span>
            </NavLink>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-3 rounded-full text-foreground hover:text-primary hover:bg-foreground/5 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-8 w-8" aria-hidden="true" />
              ) : (
                <Menu className="block h-8 w-8" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Overlay */}
        <div 
          className={`fixed inset-0 bg-black/80 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
          onClick={handleMenuBackdropClick}
        >
          <div 
            className={`absolute top-20 left-0 right-0 bg-background/95 backdrop-blur-xl border-t border-white/10 shadow-2xl transform transition-all duration-300 ${isMenuOpen ? 'translate-y-0' : '-translate-y-2'}`}
            data-mobile-menu
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {[
                { name: 'Home', href: '/', targetId: null },
                { 
                  name: 'Nl iptv', 
                  isDropdown: true,
                  items: [
                    { name: 'Beste Nederlandse IPTV', href: '/beste-nederlandse-iptv-aanbieders' },
                    { name: 'IPTV Kopen Gids', href: '/iptv-kopen-gids' },
                    { name: 'Goedkope IPTV', href: '/goedkope-iptv-nederland' },
                  ]
                },
                { name: 'Pricing', href: '/#pricing', targetId: '#pricing' },
                { name: 'Features', href: '/#features', targetId: '#features' },
                { name: 'Reviews', href: '/#testimonials', targetId: '#testimonials' },
                { name: 'FAQ', href: '/#faq', targetId: '#faq' },
                { name: 'Contact', href: '/#contact', targetId: '#contact' },
                { name: 'IPTV Kopen', href: '/iptv-kopen', targetId: null },
              ].map((item) => (
                <div key={item.name} className="border-b border-border/20 last:border-0">
                  {item.isDropdown ? (
                    <div className="space-y-1">
                      <div className="flex items-center">
                        <Link 
                          href="/beste-nederlandse-iptv-aanbieders"
                          className="flex-1 px-4 py-3 text-foreground/80 hover:text-primary rounded-lg transition-colors text-left"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <span className="font-medium">{item.name}</span>
                        </Link>
                        <button 
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setIsNlIptvOpen(!isNlIptvOpen);
                          }}
                          className="p-2 text-foreground/60 hover:text-primary transition-colors"
                          aria-label="Toggle submenu"
                        >
                          <svg 
                            className={`w-4 h-4 transition-transform ${isNlIptvOpen ? 'rotate-180' : ''}`} 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                      </div>
                      <div className={`pl-4 space-y-1 overflow-hidden transition-all duration-200 ${isNlIptvOpen ? 'max-h-96' : 'max-h-0'}`}>
                        {item.items.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.href ?? "/"}
                            className="block px-4 py-2 text-sm text-foreground/70 hover:text-primary hover:bg-foreground/5 rounded-lg transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : item.targetId ? (
                    <div onClick={(e) => {
                      e.preventDefault();
                      setIsMenuOpen(false);
                      setTimeout(() => {
                        const element = document.querySelector(item.targetId as string);
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                          window.history.pushState({}, '', item.targetId as string);
                        }
                      }, 200);
                    }}>
                      <div 
                        className="block px-4 py-3 text-foreground/80 hover:text-primary hover:bg-foreground/5 rounded-lg transition-colors cursor-pointer"
                      >
                        {item.name}
                      </div>
                    </div>
                  ) : (
                    <Link 
                      href={item.href ?? "/"}
                      className="block px-4 py-3 text-foreground/80 hover:text-primary hover:bg-foreground/5 rounded-lg transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4 px-4">
                <NavLink 
                  href="#pricing"
                  targetId="#pricing"
                  className="w-full justify-between group flex items-center px-4 py-2 text-sm font-medium hover:bg-muted/50 rounded-md transition-colors"
                >
                  Nu starten
                  <span className="w-5 h-5 flex items-center justify-center bg-primary/10 text-primary rounded-full group-hover:bg-primary/20 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </span>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      
{/* WhatsApp Popup */}
      {showWhatsAppPopup && (
        <WhatsAppPopup 
          isOpen={showWhatsAppPopup}
          onClose={closeWhatsAppPopup}
          planName={selectedPlan.name}
          period={selectedPlan.period}
          devices={selectedPlan.devices}
          isTrial={selectedPlan.isTrial}
        />
      )}
    </nav>
  )
}
