import { AdvancedSeoPageLayout } from "@/components/advanced-seo-page-layout";
import { generateSlug } from "@/lib/utils";

const relatedKeywords = [
  "IPTV op Android",
  "IPTV op Apple TV",
  "IPTV op Chromecast",
  "IPTV op Firestick",
  "IPTV op PC"
];

const relatedLinks = relatedKeywords.map(keyword => ({
  title: keyword,
  href: `/${generateSlug(keyword)}`
}));

export default function IptvOnSmartTvPage() {
  return (
    <AdvancedSeoPageLayout 
      title="IPTV op Smart TV: De Ultieme Handleiding"
      relatedLinks={relatedLinks}
    >
      <p>
        Het installeren en gebruiken van IPTV op uw Smart TV is een van de makkelijkste manieren om te genieten van duizenden zenders in hoge kwaliteit. Of u nu een Samsung, LG, Sony of een ander merk Smart TV heeft, er is altijd een geschikte app beschikbaar.
      </p>
      <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">Hoe IPTV op uw Smart TV installeren?</h2>
      <p>
        De meest populaire app voor Smart TV's is de 'Smart IPTV' of 'SET IPTV' app, die u direct vanuit de app store van uw televisie kunt downloaden. Na installatie ontvangt u van ons een M3U-link die u eenvoudig kunt koppelen aan de app. Binnen enkele minuten bent u klaar om te kijken.
      </p>
      <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">Voordelen van IPTV op een Smart TV</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Geen extra kastjes of kabels nodig.</li>
        <li>Bediening met uw eigen vertrouwde afstandsbediening.</li>
        <li>Ondersteuning for 4K en Full HD beeldkwaliteit.</li>
        <li>Directe toegang tot een EPG (Elektronische Programmagids).</li>
      </ul>
    </AdvancedSeoPageLayout>
  );
}
