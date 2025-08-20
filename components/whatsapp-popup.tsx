"use client";

import { useState, useEffect } from 'react';
import { X, MessageCircle, Copy } from 'lucide-react';

interface WhatsAppPopupProps {
  isOpen: boolean;
  onClose: () => void;
  planName?: string;
  period?: string;
  devices?: number;
  isTrial?: boolean;
}

export function WhatsAppPopup({ 
  isOpen = false, 
  onClose, 
  planName = 'Starter',
  period = '1 maand',
  devices = 1,
  isTrial = true
}: WhatsAppPopupProps) {
  const [copied, setCopied] = useState(false);
  const [message, setMessage] = useState('');
  
  useEffect(() => {
    if (isTrial) {
      setMessage(`Hallo, ik wil graag een gratis proefperiode starten met IPTV Kopen.\n\nAantal apparaten: ${devices} apparaat${devices > 1 ? 'en' : ''}`);
    } else {
      setMessage(`Hallo, ik wil graag het volgende bestellen:\n\n- Abonnement: ${planName}\n- Aantal apparaten: ${devices} apparaat${devices > 1 ? 'en' : ''}\n\nKunt u mij hier meer over vertellen?`);
    }
  }, [planName, period, devices, isTrial]);
  
  const whatsappUrl = `https://wa.me/3197010270035?text=${encodeURIComponent(message)}`;
  const phoneNumber = '+31 970 102 7003';
  const rawPhoneNumber = '+319701027003';

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleCopyNumber = () => {
    navigator.clipboard.writeText(rawPhoneNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 10001,
      padding: '1rem',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      backdropFilter: 'blur(4px)',
      opacity: isOpen ? 1 : 0,
      pointerEvents: isOpen ? 'auto' : 'none',
      transition: 'opacity 300ms ease-in-out'
    }}>
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1
        }}
        onClick={handleBackdropClick}
        aria-hidden="true"
      />
      <div style={{
        position: 'relative',
        zIndex: 2,
        width: '100%',
        maxWidth: '32rem',
        backgroundColor: 'hsl(var(--background))',
        borderRadius: '1rem',
        overflow: 'hidden',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        transform: 'translateY(0)',
        opacity: 1,
        transition: 'opacity 300ms ease-in-out, transform 300ms ease-in-out',
        margin: 'auto',
        display: 'flex',
        flexDirection: 'column',
        maxHeight: '90vh',
        overflowY: 'auto'
      }}>
        {/* Popup Header */}
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-foreground">Start Your Free Trial</h3>
            <div 
              className="absolute right-4 top-4 p-1 rounded-full hover:bg-foreground/5 transition-colors cursor-pointer"
              onClick={onClose}
              aria-label="Close"
            >
              <X className="w-5 h-5 text-foreground/70 hover:text-foreground" />
            </div>
          </div>
          
          <p className="text-muted-foreground mb-6">
            {isTrial 
              ? 'Contact ons op WhatsApp om je gratis proefperiode te starten'
              : `Bevestig je ${planName} abonnement`
            }
          </p>
          
          <div className="bg-muted/30 rounded-xl p-4 mb-6 space-y-2">
            <p className="text-sm text-muted-foreground">{message}</p>
            {!isTrial && (
              <div className="mt-2 space-y-1">
                <p className="text-xs text-muted-foreground">• Abonnement: {planName}</p>
                <p className="text-xs text-muted-foreground">• Looptijd: {period}</p>
                <p className="text-xs text-muted-foreground">• Aantal apparaten: {devices}</p>
              </div>
            )}
          </div>
          
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 mb-6"
            onClick={onClose}
          >
            <MessageCircle className="w-5 h-5" />
            <span>Open WhatsApp</span>
          </a>

          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-3">Of kopieer ons WhatsApp-nummer:</p>
            <div className="flex items-center justify-center space-x-2">
              <div className="bg-muted/50 px-4 py-2 rounded-lg font-mono text-foreground">
                {phoneNumber}
              </div>
              <button
                type="button"
                onClick={handleCopyNumber}
                className="p-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer relative group"
                title="Kopieer nummer"
                aria-label="Kopieer telefoonnummer"
              >
                <Copy className={`w-5 h-5 transition-all duration-200 ${copied ? 'scale-0 absolute' : 'scale-100'}`} />
                <div 
                  className={`absolute inset-0 flex items-center justify-center text-green-500 transition-all duration-200 ${copied ? 'scale-100' : 'scale-0'}`}
                  style={{ width: '1.25rem', height: '1.25rem' }}
                >
                  ✓
                </div>
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-foreground text-background text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  {copied ? 'Gekopieerd!' : 'Klik om te kopiëren'}
                </div>
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
