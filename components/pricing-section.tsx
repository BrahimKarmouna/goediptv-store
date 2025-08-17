import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Crown, Star, Zap } from "lucide-react"

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

export default function PricingSection() {
  return (
    <section className="py-20 bg-slate-900">
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
                  className={`w-full py-3 font-semibold rounded-full ${
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
