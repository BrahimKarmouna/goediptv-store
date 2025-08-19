"use client";

import { useState, useEffect } from 'react';
import { X, MessageCircle, Copy } from 'lucide-react';

interface WhatsAppPopupProps {
  onClose: () => void;
  planName?: string;
}

export function WhatsAppPopup({ onClose, planName = 'Free Trial' }: WhatsAppPopupProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [copied, setCopied] = useState(false);
  const message = `Hallo, ik wil graag een proefperiode starten met StreamPro IPTV${planName ? ` voor het ${planName} abonnement` : ''}.`;
  const whatsappUrl = `https://api.whatsapp.com/send/?phone=3197010270035&text=${encodeURIComponent(message)}&type=phone_number&app_absent=0`;
  const phoneNumber = '+31 970 102 7003';
  const rawPhoneNumber = '+319701027003';

  // Initialize popup as visible when component mounts
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    // Wait for the fade-out animation to complete before calling onClose
    setTimeout(() => {
      onClose();
    }, 200);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  const handleCopyNumber = () => {
    navigator.clipboard.writeText(rawPhoneNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-200"
        onClick={handleBackdropClick}
        aria-hidden="true"
      />
      <div className="relative z-10 w-full max-w-md bg-background rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-300">
        {/* Popup Header */}
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-foreground">Start Your Free Trial</h3>
            <button
              type="button"
              onClick={handleClose}
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <p className="text-muted-foreground mb-6">
            Contact us on WhatsApp to start your {planName} free trial
          </p>
          
          <div className="bg-muted/30 rounded-xl p-4 mb-6">
            <p className="text-sm text-muted-foreground">
              {message}
            </p>
          </div>
          
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 mb-6"
            onClick={handleClose}
          >
            <MessageCircle className="w-5 h-5" />
            <span>Open WhatsApp</span>
          </a>

          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-3">Or copy our WhatsApp number:</p>
            <div className="flex items-center justify-center space-x-2">
              <div className="bg-muted/50 px-4 py-2 rounded-lg font-mono text-foreground">
                {phoneNumber}
              </div>
              <button
                type="button"
                onClick={handleCopyNumber}
                className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                title="Copy to clipboard"
                aria-label="Copy phone number"
              >
                <Copy className="w-5 h-5" />
                {copied && <span className="sr-only">Copied!</span>}
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
  );
}
