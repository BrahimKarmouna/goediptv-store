import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Check, Shield, Tv, Smartphone, Zap, Clock, Award, Users, ThumbsUp } from 'lucide-react';

export const metadata: Metadata = {
  title: 'IPTV Kopen - Complete Gids 2024 | Betrouwbare IPTV Nederland',
  description: 'Alles wat je moet weten over IPTV kopen in 2024. Onze uitgebreide gids helpt je bij het kiezen van de beste IPTV-aanbieder voor Nederlandse kijkers.',
  keywords: ['iptv kopen', 'beste iptv nederland', 'goedkope iptv', 'iptv abonnement', 'nederlandse iptv'],
  alternates: {
    canonical: 'https://streampro-iptv.com/iptv-kopen-gids'
  },
  openGraph: {
    title: 'IPTV Kopen - Complete Gids 2024 | Betrouwbare IPTV Nederland',
    description: 'Leer hoe je de beste IPTV-service kiest en waar je op moet letten bij het afsluiten van een abonnement.',
    type: 'article',
    locale: 'nl_NL',
    url: 'https://streampro-iptv.com/iptv-kopen-gids',
    siteName: 'StreamPro IPTV',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IPTV Kopen - Complete Gids 2024',
    description: 'Ontdek waar je op moet letten bij het kopen van een IPTV-abonnement in Nederland.',
  }
};

const steps = [
  {
    number: '01',
    title: 'Kies een betrouwbare aanbieder',
    description: 'Selecteer een geverifieerde IPTV-aanbieder met positieve reviews en een goede klantenservice in het Nederlands.'
  },
  {
    number: '02',
    title: 'Controleer de zenderpakketten',
    description: 'Zorg ervoor dat je favoriete Nederlandse en internationale zenders in het pakket zitten.'
  },
  {
    number: '03',
    title: 'Test de kwaliteit',
    description: 'Maak gebruik van een gratis proefperiode om de streamkwaliteit en betrouwbaarheid te testen.'
  },
  {
    number: '04',
    title: 'Kies je abonnement',
    description: 'Selecteer een abonnementsduur die bij je past, met de juiste balans tussen prijs en flexibiliteit.'
  },
  {
    number: '05',
    title: 'Installeer en geniet',
    description: 'Download de benodigde app of gebruik een compatibel apparaat om direct te beginnen met kijken.'
  }
];

const features = [
  {
    icon: <Tv className="w-6 h-6" />,
    title: '10.000+ kanalen',
    description: 'Inclusief alle Nederlandse zenders in HD-kwaliteit'
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Directe activatie',
    description: 'Binnen enkele minuten klaar voor gebruik'
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Veilig betalen',
    description: 'Veilige betaling via iDeal, creditcard of PayPal'
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: '24/7 ondersteuning',
    description: 'Nederlandstalige klantenservice altijd beschikbaar'
  }
];

const providers = [
  {
    name: 'StreamPro IPTV',
    rating: '9.5/10',
    price: 'Vanaf €19,99/maand',
    pros: [
      'Meer dan 10.000 kanalen',
      'Nederlandse zenders in HD',
      '7 dagen geld-terug-garantie',
      'Werkt op alle apparaten'
    ],
    link: '/#pricing'
  },
  {
    name: 'IPTV Nederland',
    rating: '9.0/10',
    price: 'Vanaf €34,99/maand',
    pros: [
      '8.500+ kanalen',
      'Uitgebreide sportselectie',
      'Ondersteuning voor opnemen',
      '24/7 klantenservice'
    ],
    link: '#iptv-nederland'
  },
  {
    name: 'Dutch TV Plus',
    rating: '8.7/10',
    price: 'Vanaf €49,99/maand',
    pros: [
      '7.000+ kanalen',
      'Goede prijs-kwaliteitverhouding',
      'Eenvoudige installatie',
      '24/7 klantenservice'
    ],
    link: '#dutch-tv-plus'
  }
];

export default function IptvKopenGids() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary/10 to-background py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              IPTV Kopen - Complete Gids 2024
            </h1>
            <p className="text-sm text-muted-foreground text-center mb-8">
              Alle prijzen zijn inclusief BTW. Geen verborgen kosten. Start vanaf €19,99 per maand.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="#stappenplan">
                  Start nu voor €19,99
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#stappenplan">
                  Bekijk ons stappenplan
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { icon: <Tv className="w-8 h-8 mx-auto mb-2 text-primary" />, number: '10.000+', label: 'Kanalen' },
              { icon: <Users className="w-8 h-8 mx-auto mb-2 text-primary" />, number: '50.000+', label: 'Tevreden klanten' },
              { icon: <Award className="w-8 h-8 mx-auto mb-2 text-primary" />, number: '9.5/10', label: 'Gemiddelde beoordeling' },
              { icon: <ThumbsUp className="w-8 h-8 mx-auto mb-2 text-primary" />, number: '98%', label: 'Uitstekende service' },
            ].map((stat, index) => (
              <div key={index} className="p-6 bg-card rounded-lg">
                <div className="mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-foreground">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Step by Step Guide */}
      <section id="stappenplan" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Hoeveel kost IPTV in Nederland?</h2>
          <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto mb-12">
            De prijzen voor IPTV-abonnementen variëren per aanbieder en pakket. Reken voor kwalitatieve diensten op 
            ongeveer €19,99 per maand voor een basispakket, tot €34,99–€49,99 voor uitgebreidere pakketten met extra functies.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { name: 'Basis', price: '€19,99/maand', features: ['5.000+ kanalen', 'Nederlandse zenders', 'HD kwaliteit', '24/7 support'], popular: false },
              { 
                name: 'Standaard', 
                price: '€34,99/maand', 
                features: ['10.000+ kanalen', 'Nederlandse & internationale zenders', 'Full HD kwaliteit', 'EPG TV-gids', 'Ondersteuning voor opnemen'], 
                popular: true 
              },
              { name: 'Premium', price: '€49,99/maand', features: ['15.000+ kanalen', 'Alle zenders in HD', '4K beschikbaar', 'Multiroom optie', 'Geen reclame', 'VIP support'], popular: false },
            ].map((plan, index) => (
              <div 
                key={index} 
                className={`relative bg-card rounded-xl p-8 border ${
                  plan.popular ? 'border-primary ring-2 ring-primary/20' : 'border-border'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-sm font-medium py-1 px-4 rounded-full">
                    Meest populair
                  </div>
                )}
                <h3 className="text-2xl font-bold text-center mb-2">{plan.name}</h3>
                <div className="text-3xl font-bold text-primary text-center mb-6">{plan.price}</div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="w-full" size="lg">
                  <Link href="#stappenplan">
                    Nu starten
                  </Link>
                </Button>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-bold text-center mb-12">Stappenplan: IPTV kopen in 2024</h2>
          <div className="max-w-3xl mx-auto space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex">
                <div className="flex flex-col items-center mr-6">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground text-lg font-bold">
                    {step.number}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-0.5 h-full bg-border my-2"></div>
                  )}
                </div>
                <div className="pt-1">
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beste IPTV-aanbieders */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Beste IPTV-aanbieders van Nederland</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {providers.map((provider, index) => (
              <div 
                key={provider.name}
                className={`bg-card rounded-xl p-6 shadow-lg border ${
                  index === 0 ? 'border-primary ring-2 ring-primary/20' : 'border-border'
                }`}
              >
                {index === 0 && (
                  <div className="bg-primary text-primary-foreground text-sm font-medium py-1 px-3 rounded-full inline-block mb-4">
                    Aanbevolen
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{provider.name}</h3>
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400 mr-2">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-muted-foreground">{provider.rating}</span>
                </div>
                <div className="text-2xl font-bold text-primary mb-2">{provider.price}</div>
                <p className="text-sm text-muted-foreground mb-4">Directe activatie · Geen contracten · 24/7 support</p>
                <ul className="space-y-3 mb-8">
                  {provider.pros.map((pro, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>{pro}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="w-full" size="lg">
                  <Link href={provider.link}>
                    {index === 0 ? 'Nu starten' : 'Meer informatie'}
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Waar moet je op letten bij het kopen van IPTV?</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: 'Kanaalaanbod',
                description: 'Controleer of de belangrijkste Nederlandse zenders zoals NPO, RTL en SBS in het pakket zitten, evenals eventuele internationale zenders die je wilt ontvangen.'
              },
              {
                title: 'Kwaliteit van de streams',
                description: 'Kies voor een aanbieder die HD- of 4K-streams aanbiedt met minimale buffering en een stabiele verbinding.'
              },
              {
                title: 'Apparaten en compatibiliteit',
                description: 'Zorg ervoor dat de IPTV-service werkt op je gewenste apparaten, zoals smart-tv, smartphone, tablet of computer.'
              },
              {
                title: 'Klantenservice',
                description: 'Een betrouwbare aanbieder biedt goede klantenondersteuning in het Nederlands en is bereikbaar bij problemen.'
              },
              {
                title: 'Proefperiode',
                description: 'Maak gebruik van een gratis proefperiode om de service te testen voordat je een langdurig abonnement afsluit.'
              },
              {
                title: 'Betaling en facturering',
                description: 'Kies voor een aanbieder met duidelijke prijzen, geen verborgen kosten en flexibele betalingsmogelijkheden zoals iDeal of creditcard.'
              }
            ].map((item, index) => (
              <div key={index} className="bg-card p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary/90 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Klaar om te beginnen met IPTV?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Kies voor de beste IPTV-ervaring in Nederland. Probeer nu risicovrij met onze 7-dagen geld-terug-garantie.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
              <Link href="/proefabonnement">
                Start nu met kijken
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              <a href="tel:+31850000000">
                Bel voor advies
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
