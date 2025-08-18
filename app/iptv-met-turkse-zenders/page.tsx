import { AdvancedSeoPageLayout } from "@/components/advanced-seo-page-layout";
import { generateSlug } from "@/lib/utils";

const relatedKeywords = [
  "IPTV met Marokkaanse Zenders",
  "IPTV Zenderlijst",
  "Beste IPTV Aanbieder",
  "IPTV voor Buitenland",
  "IPTV Kopen"
];

const relatedLinks = relatedKeywords.map(keyword => ({
  title: keyword,
  href: `/${generateSlug(keyword)}`
}));

export default function IptvMetTurkseZendersPage() {
  return (
    <AdvancedSeoPageLayout 
      title="IPTV met Turkse Zenders: Alle Kanalen uit Turkije"
      relatedLinks={relatedLinks}
    >
      <p>
        Wilt u alle populaire Turkse tv-zenders ontvangen in Nederland of België? Met ons IPTV-abonnement krijgt u toegang tot een zeer uitgebreid pakket met Turkse kanalen, van nieuws en sport tot films en series.
      </p>
      <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">Het Meest Complete Turkse Pakket</h2>
      <p>
        Ons Turkse zenderpakket is zorgvuldig samengesteld en bevat alle bekende kanalen zoals TRT, ATV, Kanal D, Show TV, Star TV en de belangrijkste sportzenders zoals beIN Sports. Volg het Turkse nieuws, uw favoriete series (dizi's) en de Süper Lig, allemaal live en in hoge kwaliteit.
      </p>
      <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">Waarom Turkse TV Kijken via IPTV?</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Uitgebreid Aanbod:</strong> Alle nieuws-, entertainment- en sportzenders uit Turkije.</li>
        <li><strong>Hoge Kwaliteit:</strong> Stabiele streams in HD zonder dat u een schotel nodig heeft.</li>
        <li><strong>Video on Demand:</strong> Toegang tot een bibliotheek met de nieuwste Turkse films en series.</li>
        <li><strong>Eenvoudig en Betaalbaar:</strong> Eén abonnement voor al uw favoriete Turkse content.</li>
      </ul>
    </AdvancedSeoPageLayout>
  );
}
