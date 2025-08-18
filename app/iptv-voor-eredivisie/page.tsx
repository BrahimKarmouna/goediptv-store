import { AdvancedSeoPageLayout } from "@/components/advanced-seo-page-layout";
import { generateSlug } from "@/lib/utils";

const relatedKeywords = [
  "IPTV met ESPN",
  "IPTV met Ziggo Sport",
  "IPTV voor Formule 1",
  "Beste IPTV voor sport",
  "Stabiele IPTV"
];

const relatedLinks = relatedKeywords.map(keyword => ({
  title: keyword,
  href: `/${generateSlug(keyword)}`
}));

export default function IptvVoorEredivisiePage() {
  return (
    <AdvancedSeoPageLayout 
      title="IPTV voor Eredivisie: Volg Alle Wedstrijden Live"
      relatedLinks={relatedLinks}
    >
      <p>
        Mis geen minuut van de Nederlandse Eredivisie! Met ons IPTV-pakket kijkt u alle wedstrijden van uw favoriete club, van Ajax en Feyenoord tot PSV en alle andere teams. Volg de volledige competitie, de beker en de play-offs live.
      </p>
      <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">Alle Eredivisie-zenders in één Pakket</h2>
      <p>
        Wij bieden alle kanalen van ESPN Compleet, de officiële uitzendgemachtigde van de Eredivisie. U hoeft geen enkele wedstrijd te missen. Kijk naar de live-wedstrijden, de voor- en nabeschouwingen en de samenvattingen, allemaal in de hoogste kwaliteit.
      </p>
      <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">Waarom Eredivisie Kijken via IPTV?</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Alle Wedstrijden:</strong> Toegang tot alle ESPN-kanalen, dus u mist nooit een wedstrijd.</li>
        <li><strong>Stabiele Streams:</strong> Onze servers zijn geoptimaliseerd voor live sport, wat zorgt voor een vloeiende kijkervaring zonder haperingen.</li>
        <li><strong>Uitstekende Beeldkwaliteit:</strong> Beleef de sfeer van het stadion in haarscherp HD.</li>
        <li><strong>Kijk Overal:</strong> Volg de wedstrijden op uw TV, laptop, of smartphone, thuis en onderweg.</li>
      </ul>
    </AdvancedSeoPageLayout>
  );
}
