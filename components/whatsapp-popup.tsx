"use client";

import { useState, useEffect } from 'react';
import { X, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface WhatsAppPopupProps {
  onClose: () => void;
}

export function WhatsAppPopup({ onClose }: WhatsAppPopupProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const message = 'Hallo, ik wil graag een proefperiode starten met StreamPro IPTV.';
  const whatsappUrl = `https://api.whatsapp.com/send/?phone=3197010270035&text=${encodeURIComponent(message)}&type=phone_number&app_absent=0`;

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  const closePopup = () => {
    setIsVisible(false);
    // Wait for the fade-out animation to complete before calling onClose
    setTimeout(() => {
      onClose();
    }, 200);
  };

  // Initialize popup as open when component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 10);
    
    return () => clearTimeout(timer);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group cursor-pointer"
          aria-label="Contact us on WhatsApp"
        >
          <MessageCircle className="w-8 h-8" />
          <span className="absolute -top-2 -right-2 bg-primary text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative">!</span>
          </span>
        </a>
      </div>

      {/* Popup Overlay */}
      {isOpen && (
        <div 
          className={`fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 transition-opacity duration-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
          onClick={closePopup}
        >
          <div 
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden transform transition-all duration-300 scale-100"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary to-primary/90 p-6 text-white">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  <div className="bg-white/20 p-2 rounded-full">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold">Start Your Free Trial</h3>
                </div>
                <button 
                  onClick={closePopup}
                  className="text-white/80 hover:text-white transition-colors cursor-pointer"
                  aria-label="Close"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="text-center mb-6">
                <h4 className="text-2xl font-bold text-foreground mb-2">Get Your Free Trial Now!</h4>
                <p className="text-muted-foreground">Contact us on WhatsApp to start your 7-day free trial</p>
              </div>
              
              <div className="bg-muted/30 rounded-xl p-4 mb-6">
                <div className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm">
                  <div className="flex items-center space-x-3">
                    <div className="bg-[#25D366] rounded-full p-2">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">WhatsApp Support</p>
                      <p className="text-sm text-muted-foreground">We'll respond quickly</p>
                    </div>
                  </div>
                  <a 
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#25D366] hover:bg-[#128C7E] text-white px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap"
                    onClick={onClose}
                  >
                    Open WhatsApp
                  </a>
                </div>
              </div>

              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-4">Or copy our WhatsApp number:</p>
                <div className="flex items-center justify-center space-x-2">
                  <div className="bg-muted/50 px-4 py-2 rounded-lg font-mono text-foreground">
                    +31 970 102 7003
                  </div>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText('+319701027003');
                      // You might want to add a toast notification here
                    }}
                    className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                    title="Copy to clipboard"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="bg-muted/30 p-4 text-center">
              <p className="text-xs text-muted-foreground">Available 24/7 • Response within 5 minutes</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
