import { AdvancedSeoPageLayout } from "@/components/advanced-seo-page-layout";
import { generateSlug } from "@/lib/utils";

const relatedKeywords = [
  "IPTV Met Opnemen",
  "IPTV Zenderlijst",
  "Beste IPTV Aanbieder",
  "IPTV met EPG gids",
  "Hoe werkt IPTV"
];

const relatedLinks = relatedKeywords.map(keyword => ({
  title: keyword,
  href: `/${generateSlug(keyword)}`
}));

export default function IptvMetTerugkijkenPage() {
  return (
    <AdvancedSeoPageLayout 
      title="IPTV Met Terugkijken: Kijk Programma's Terug Wanneer het U Uitkomt"
      relatedLinks={relatedLinks}
    >
      <p>
        Een programma gemist? Geen probleem! Met de terugkijk-functie (ook wel catch-up of replay TV genoemd) op veel van onze zenders, kunt u programma's tot wel 7 dagen na de uitzending eenvoudig terugkijken. U heeft geen opname-apparaat nodig.
      </p>
      <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">Het Gemak van Terugkijken</h2>
      <p>
        De terugkijk-functie is geïntegreerd in onze EPG (Elektronische Programmagids). U bladert simpelweg terug in de tijd in de programmagids, selecteert het programma dat u wilt zien, en drukt op play. Het is de ultieme vorm van flexibel TV kijken.
      </p>
      <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">Hoe Werkt Terugkijken?</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Geen Extra Hardware Nodig:</strong> De programma's worden op onze servers bewaard, u hoeft zelf niets op te slaan.</li>
        <li><strong>Direct Beschikbaar:</strong> Programma's zijn vaak al kort na de live-uitzending beschikbaar om terug te kijken.</li>
        <li><strong>Beschikbaar op Veel Zenders:</strong> Een groot deel van de populaire Nederlandse en internationale zenders ondersteunt deze functie.</li>
        <li><strong>Gebruiksvriendelijk:</strong> Selecteer en speel af direct vanuit de EPG.</li>
      </ul>
    </AdvancedSeoPageLayout>
  );
}
