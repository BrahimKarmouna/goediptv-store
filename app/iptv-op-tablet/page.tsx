import { AdvancedSeoPageLayout } from "@/components/advanced-seo-page-layout";
import { generateSlug } from "@/lib/utils";

const relatedKeywords = [
  "IPTV op Smartphone",
  "IPTV op Laptop",
  "IPTV op Android",
  "IPTV op Apple TV",
  "IPTV met Films"
];

const relatedLinks = relatedKeywords.map(keyword => ({
  title: keyword,
  href: `/${generateSlug(keyword)}`
}));

export default function IptvOnTabletPage() {
  return (
    <AdvancedSeoPageLayout 
      title="IPTV op Tablet: Het Beste van Twee Werelden"
      relatedLinks={relatedLinks}
    >
      <p>
        Een tablet is het perfecte apparaat voor IPTV. Het biedt een groot, comfortabel scherm voor een meeslepende kijkervaring, gecombineerd met de draagbaarheid van een mobiel apparaat. Ideaal voor op de bank, in bed, of om mee te nemen op reis.
      </p>
      <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">Apps voor iPad en Android Tablets</h2>
      <p>
        Of u nu een iPad of een Android-tablet heeft, er is een breed scala aan apps beschikbaar. Voor de iPad zijn apps als 'iPlayTV' zeer aan te raden. Voor Android-tablets zijn 'TiviMate' en 'IPTV Smarters Pro' uitstekende keuzes. Deze apps maken optimaal gebruik van het grotere scherm voor een prettige navigatie en kijkervaring.
      </p>
      <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">Waarom een Tablet ideaal is voor IPTV</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Groot scherm voor een comfortabele kijkervaring, overal in huis.</li>
        <li>Licht en draagbaar, makkelijk mee te nemen.</li>
        <li>Lange batterijduur, ideaal voor het kijken van films en series.</li>
        <li>Intuïtieve bediening via het touchscreen.</li>
      </ul>
    </AdvancedSeoPageLayout>
  );
}
