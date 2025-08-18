import { SeoPageLayout } from "@/components/seo-page-layout";
import { Star } from "lucide-react";

const TestimonialCard = ({ quote, author, rating }: { quote: string, author: string, rating: number }) => (
  <div className="bg-muted/30 p-8 rounded-xl border border-border flex flex-col justify-between h-full transform transition-transform hover:-translate-y-2">
    <div>
      <div className="flex items-center mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className={`w-5 h-5 ${i < rating ? 'text-primary fill-primary' : 'text-muted-foreground'}`} />
        ))}
      </div>
      <blockquote className="text-lg text-foreground italic">"{quote}"</blockquote>
    </div>
    <p className="mt-6 font-semibold text-right text-muted-foreground">- {author}</p>
  </div>
);

export default function GoedIptvExperiencePage() {
  const testimonials = [
    {
      quote: "Eindelijk een IPTV service die niet constant buffert. Beeld is haarscherp en het aanbod is gigantisch. Zeer tevreden!",
      author: "Jan V.",
      rating: 5,
    },
    {
      quote: "De klantenservice is top. Ik had een vraag over de installatie en werd binnen 5 minuten geholpen. Echt een aanrader.",
      author: "Linda de Boer",
      rating: 5,
    },
    {
      quote: "Ik was sceptisch, maar de proefperiode heeft me overtuigd. Stabiele streams, zelfs tijdens grote sportwedstrijden.",
      author: "Mark S.",
      rating: 4,
    },
     {
      quote: "Beste prijs-kwaliteitverhouding die ik kon vinden. Ik heb het jaarabonnement genomen en heb er geen seconde spijt van gehad.",
      author: "Fatima El Amrani",
      rating: 5,
    }
  ];

  return (
    <SeoPageLayout>
      <section className="py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground">
              Wat Onze Klanten Zeggen
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground">
              Echte ervaringen van tevreden gebruikers. Ontdek waarom wij de beste keuze zijn voor goed IPTV.
            </p>
          </div>
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-10">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>
    </SeoPageLayout>
  );
}
