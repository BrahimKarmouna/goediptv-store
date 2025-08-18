import { AdvancedSeoPageLayout } from "@/components/advanced-seo-page-layout";
import { generateSlug } from "@/lib/utils";

const relatedKeywords = [
  "IPTV met Turkse Zenders",
  "IPTV Zenderlijst",
  "Beste IPTV Aanbieder",
  "IPTV voor Buitenland",
  "IPTV Kopen"
];

const relatedLinks = relatedKeywords.map(keyword => ({
  title: keyword,
  href: `/${generateSlug(keyword)}`
}));

export default function IptvMetMarokkaanseZendersPage() {
  return (
    <AdvancedSeoPageLayout 
      title="IPTV met Marokkaanse Zenders: Alle Kanalen uit Marokko"
      relatedLinks={relatedLinks}
    >
      <p>
        Blijf verbonden met Marokko via ons uitgebreide pakket Marokkaanse tv-zenders. Met IPTV ontvangt u alle populaire kanalen uit Marokko en de Arabische wereld direct op uw tv in Nederland of België, zonder schotel.
      </p>
      <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">Het Beste van Marokkaanse Televisie</h2>
      <p>
        Ons pakket bevat alle belangrijke Marokkaanse zenders zoals 2M, Al Aoula, Arryadia, en Tamazight. Daarnaast bieden we een breed scala aan nieuws-, entertainment- en religieuze zenders uit het Midden-Oosten. Volg het laatste nieuws, uw favoriete series en belangrijke sportevenementen.
      </p>
      <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">Voordelen van Marokkaanse TV via IPTV</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Compleet Pakket:</strong> Een brede selectie van Marokkaanse en Arabische zenders.</li>
        <li><strong>Stabiele HD-Kwaliteit:</strong> Geniet van een helder en stabiel beeld zonder storingen.</li>
        <li><strong>Video on Demand:</strong> Krijg toegang tot een bibliotheek met Arabische films en series.</li>
        <li><strong>Betaalbaar en Gemakkelijk:</strong> Alles wat u wilt zien in één voordelig abonnement.</li>
      </ul>
    </AdvancedSeoPageLayout>
  );
}
