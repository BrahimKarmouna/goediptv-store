"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Crown, Star, Zap, X, MessageCircle } from "lucide-react"

const plans = [
  {
    name: "Basic",
    price: "$9.99",
    period: "/month",
    description: "Perfect for casual viewers",
    icon: Zap,
    features: [
      "5,000+ Live Channels",
      "HD Quality Streaming",
      "2 Device Connections",
      "24/7 Customer Support",
      "7-Day Free Trial",
    ],
    popular: false,
  },
  {
    name: "Premium",
    price: "$19.99",
    period: "/month",
    description: "Most popular choice",
    icon: Star,
    features: [
      "15,000+ Live Channels",
      "4K Ultra HD Quality",
      "5 Device Connections",
      "Premium Sports Channels",
      "Movie Library Access",
      "Anti-Freeze Technology",
      "24/7 Priority Support",
    ],
    popular: true,
  },
  {
    name: "Ultimate",
    price: "$29.99",
    period: "/month",
    description: "For the ultimate experience",
    icon: Crown,
    features: [
      "20,000+ Live Channels",
      "8K Quality Available",
      "Unlimited Devices",
      "All Premium Sports",
      "Complete Movie Library",
      "Adult Content Access",
      "VIP Customer Support",
      "Free VPN Included",
    ],
    popular: false,
  },
]

function WhatsAppPopup({ onClose, planName }: { onClose: () => void, planName: string }) {
  const message = `Hallo, ik wil graag het ${planName} abonnement afnemen. Kunt u me hier meer over vertellen?`;
  const whatsappUrl = `https://api.whatsapp.com/send/?phone=3197010270035&text=${encodeURIComponent(message)}&type=phone_number&app_absent=0`;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 transition-opacity duration-300 animate-fadeIn">
      <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-2xl overflow-hidden w-full max-w-md transform transition-all duration-300 scale-95 hover:scale-100">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute -right-10 -top-10 w-32 h-32 rounded-full bg-white/10"></div>
          <div className="absolute -left-10 -bottom-10 w-24 h-24 rounded-full bg-white/10"></div>
          
          <div className="relative z-10">
            <div className="flex justify-between items-start">
              <div className="flex items-center space-x-4">
                <div className="bg-white/20 p-3 rounded-xl backdrop-blur-sm">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Start Your {planName} Plan</h3>
                  <p className="text-blue-100 text-sm mt-1">Exclusive offer just for you</p>
                </div>
              </div>
              <button 
                onClick={onClose}
                className="p-1.5 rounded-full hover:bg-white/10 transition-colors duration-200 text-white/80 hover:text-white"
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
            <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-green-100 to-green-50 flex items-center justify-center">
              <div className="bg-green-500/10 p-3 rounded-xl">
                <MessageCircle className="w-10 h-10 text-green-600" />
              </div>
            </div>
            <h4 className="text-2xl font-bold text-gray-900 mb-2">Ready to Get Started?</h4>
            <p className="text-gray-600">Click below to contact us on WhatsApp and begin your {planName} experience today!</p>
          </div>
          
          <div className="space-y-4">
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-4 rounded-xl font-semibold text-center transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-green-200 flex items-center justify-center space-x-2"
              onClick={onClose}
            >
              <span>Chat on WhatsApp</span>
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
              </svg>
            </a>
            
            <div className="text-center mt-6">
              <p className="text-sm text-gray-500">Available 24/7 • Response within minutes</p>
              <div className="mt-4 flex items-center justify-center space-x-4">
                <div className="flex items-center text-sm text-gray-500">
                  <svg className="w-4 h-4 mr-1.5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  No setup fees
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <svg className="w-4 h-4 mr-1.5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Cancel anytime
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <div className="bg-gray-50 border-t border-gray-100 px-6 py-4">
          <p className="text-xs text-center text-gray-500">By proceeding, you agree to our <a href="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</a> and <a href="/terms" className="text-blue-600 hover:underline">Terms of Service</a>.</p>
        </div>
      </div>
    </div>
  );
}

export default function PricingSection() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  return (
    <section id="pricing" className="py-20 bg-slate-900">
      {selectedPlan && (
        <WhatsAppPopup 
          planName={selectedPlan} 
          onClose={() => setSelectedPlan(null)} 
        />
      )}
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Choose Your <span className="text-blue-400">Perfect Plan</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            All plans include our premium features with no hidden fees. Cancel anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative bg-slate-800 border-slate-700 ${plan.popular ? "ring-2 ring-blue-500 scale-105" : ""}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                </div>
              )}

              <CardHeader className="text-center pb-8">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-blue-600/20 rounded-full">
                    <plan.icon className="w-8 h-8 text-blue-400" />
                  </div>
                </div>
                <CardTitle className="text-2xl font-bold text-white mb-2">{plan.name}</CardTitle>
                <p className="text-slate-400 mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-slate-400 ml-1">{plan.period}</span>
                </div>
              </CardHeader>

              <CardContent>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-slate-300">
                      <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={() => setSelectedPlan(plan.name)}
                  className={`w-full py-3 font-semibold rounded-full cursor-pointer ${
                    plan.popular
                      ? "bg-blue-600 hover:bg-blue-700 text-white"
                      : "bg-slate-700 hover:bg-slate-600 text-white"
                  }`}
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-slate-400 mb-4">All plans include 7-day money-back guarantee</p>
          <div className="flex justify-center gap-8 text-sm text-slate-500">
            <span>✓ No Setup Fees</span>
            <span>✓ Cancel Anytime</span>
            <span>✓ 24/7 Support</span>
          </div>
        </div>
      </div>
    </section>
  )
}
