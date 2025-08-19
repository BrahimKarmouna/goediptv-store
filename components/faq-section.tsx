import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What is IPTV and how does it work?",
    answer:
      "IPTV (Internet Protocol Television) delivers television content over the internet instead of traditional cable or satellite. You simply need a stable internet connection to stream thousands of channels in high quality.",
  },
  {
    question: "What devices are compatible with your service?",
    answer:
      "Our service works on Smart TVs, Android/iOS devices, computers, tablets, Amazon Fire Stick, Roku, Apple TV, MAG boxes, and most streaming devices. We provide easy setup guides for all platforms.",
  },
  {
    question: "Do you offer a free trial?",
    answer:
      "Yes! We offer a 7-day free trial for all new customers. No credit card required for the trial period. You can test our full service before making any commitment.",
  },
  {
    question: "What internet speed do I need?",
    answer:
      "For HD streaming, we recommend at least 10 Mbps. For 4K content, 25 Mbps is ideal. Our adaptive streaming technology adjusts quality based on your connection speed.",
  },
  {
    question: "Can I watch on multiple devices simultaneously?",
    answer:
      "Yes! Depending on your plan, you can stream on 2-5 devices simultaneously. Our Ultimate plan offers unlimited device connections for large families.",
  },
  {
    question: "Is your service legal and safe?",
    answer:
      "Absolutely. We operate as a legitimate IPTV provider with proper licensing agreements. All streams are encrypted and your privacy is completely protected.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, PayPal, cryptocurrency, and various international payment methods. All transactions are secure and encrypted.",
  },
  {
    question: "Do you provide customer support?",
    answer:
      "Yes! We offer 24/7 customer support via live chat, email, and phone. Our technical team is always ready to help with setup and troubleshooting.",
  },
]

export default function FAQSection() {
  return (
    <section id="faq" className="py-24 bg-gradient-to-b from-background to-muted/10 w-full overflow-hidden">
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
            Frequently Asked <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground">Everything you need to know about our IPTV service</p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="group">
              <AccordionItem
                value={`item-${index}`}
                className="bg-card/50 border border-border/50 hover:border-primary/30 rounded-xl overflow-hidden transition-all duration-300 group-hover:shadow-lg"
              >
                <AccordionTrigger className="px-6 py-5 hover:no-underline [&[data-state=open]>svg]:rotate-180">
                  <div className="text-left">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary/80 group-hover:bg-primary transition-colors"></div>
                      <span className="text-lg font-medium text-foreground group-hover:text-primary transition-colors">
                        {faq.question}
                      </span>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 pt-2 text-muted-foreground leading-relaxed border-t border-border/30">
                  <div className="pl-6">
                    {faq.answer}
                  </div>
                </AccordionContent>
              </AccordionItem>
              <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
