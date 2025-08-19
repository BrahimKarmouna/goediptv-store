"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone } from 'lucide-react';
import { NavLink } from './ui/nav-link';
import { WhatsAppPopup } from './whatsapp-popup';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showWhatsAppPopup, setShowWhatsAppPopup] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("Free Trial");

  const closeWhatsAppPopup = () => {
    setShowWhatsAppPopup(false);
  };

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      if (isMenuOpen) {
        setIsMenuOpen(false);
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 300);
      }
    }
  };

  const handleMenuBackdropClick = (e: React.MouseEvent) => {
    if (isMenuOpen && e.target === e.currentTarget) {
      setIsMenuOpen(false);
      document.body.style.overflow = '';
    }
  };

  const handleWhatsAppBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeWhatsAppPopup();
    }
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
        document.body.style.overflow = '';
      }
    };

    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleEscape);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/20 backdrop-blur-xl border-b border-white/10 shadow-sm w-full overflow-hidden">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
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
              { name: 'Handleiding', href: '/handleiding', targetId: null },
            ].map((item) => (
              item.isDropdown ? (
                <div key={item.name} className="relative group">
                  <button className="flex items-center px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors rounded-full">
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
                          href={dropdownItem.href}
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
                  href={item.href}
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
              className="flex items-center space-x-2 text-sm font-medium bg-white/5 hover:bg-white/10 transition-all px-4 py-2 rounded-full border border-white/10 hover:border-white/20 cursor-pointer"
            >
              <Phone className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
              <span className="text-foreground/80 group-hover:text-foreground transition-colors">24/7 Support</span>
            </a>
            <NavLink 
              href="#pricing"
              targetId="#pricing"
              className="hidden md:flex items-center gap-2 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary/80 text-white px-6 py-2.5 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5"
            >
              Start Free Trial
              <span className="w-5 h-5 flex items-center justify-center bg-white/20 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </span>
            </NavLink>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden relative z-50">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative w-10 h-10 flex items-center justify-center group z-50"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <span className={`absolute block w-6 h-0.5 bg-foreground transition-all duration-300 ${isMenuOpen ? 'rotate-45' : 'translate-y-[-6px]'}`}></span>
              <span className={`absolute block w-6 h-0.5 bg-foreground transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`absolute block w-6 h-0.5 bg-foreground transition-all duration-300 ${isMenuOpen ? '-rotate-45' : 'translate-y-[6px]'}`}></span>
              <span className="absolute inset-0 rounded-full bg-foreground/0 transition-colors duration-200 group-hover:bg-foreground/5"></span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Overlay */}
        {isMenuOpen && (
          <div 
            className="fixed inset-0 z-40 bg-black/80 backdrop-blur-sm"
            onClick={handleMenuBackdropClick}
          >
            <div 
              className="absolute top-20 left-0 right-0 bg-white dark:bg-gray-900 shadow-2xl"
              data-mobile-menu
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col py-2">
                {[
                  { name: 'Home', href: '/' },
                  { name: 'Nederlandse IPTV', href: '/beste-nederlandse-iptv-aanbieders' },
                  { name: 'Prijzen', href: '/#pricing' },
                  { name: 'Kenmerken', href: '/#features' },
                  { name: 'Beoordelingen', href: '/#testimonials' },
                  { name: 'Veelgestelde vragen', href: '/#faq' },
                  { name: 'Contact', href: '/#contact' },
                  { name: 'Handleiding', href: '/handleiding' },
                ].map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      setIsMenuOpen(false);
                      if (item.href.startsWith('#')) {
                        const target = document.querySelector(item.href);
                        if (target) {
                          target.scrollIntoView({ behavior: 'smooth' });
                        }
                      } else {
                        window.location.href = item.href;
                      }
                    }}
                    className="px-6 py-4 text-gray-900 dark:text-white text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    {item.name}
                  </a>
                ))}
                <a
                  href="#pricing"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsMenuOpen(false);
                    const target = document.querySelector('#pricing');
                    if (target) {
                      target.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="mx-4 my-2 px-4 py-3 bg-primary text-white rounded-lg font-medium flex items-center justify-between hover:bg-primary/90 transition-colors"
                >
                  Start Free Trial
                  <span className="ml-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* WhatsApp Popup */}
      <div 
        className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-300 ${showWhatsAppPopup ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={handleWhatsAppBackdropClick}
      >
        <div className="fixed inset-0 bg-black/30" />
        <div className="relative z-50 w-full max-w-lg">
          <WhatsAppPopup 
            isOpen={showWhatsAppPopup}
            onClose={closeWhatsAppPopup}
            planName={selectedPlan}
          />
        </div>
      </div>
    </nav>
  );
}
