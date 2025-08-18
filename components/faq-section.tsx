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
    <section id="faq" className="py-20 bg-slate-950">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Frequently Asked <span className="text-blue-400">Questions</span>
          </h2>
          <p className="text-xl text-slate-400">Everything you need to know about our IPTV service</p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-slate-800 border-slate-700 rounded-lg px-6"
            >
              <AccordionTrigger className="text-white hover:text-blue-400 text-left">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-slate-400 leading-relaxed">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
