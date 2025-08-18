import { AdvancedSeoPageLayout } from "@/components/advanced-seo-page-layout";
import { generateSlug } from "@/lib/utils";

const relatedKeywords = [
  "Hoe werkt IPTV",
  "Voordelen van IPTV",
  "Is IPTV legaal",
  "IPTV Kopen",
  "Beste IPTV Aanbieder"
];

const relatedLinks = relatedKeywords.map(keyword => ({
  title: keyword,
  href: `/${generateSlug(keyword)}`
}));

export default function WatIsIptvPage() {
  return (
    <AdvancedSeoPageLayout 
      title="Wat is IPTV? De Toekomst van Televisie Kijken"
      relatedLinks={relatedLinks}
    >
      <p>
        IPTV is een afkorting voor <strong>Internet Protocol Television</strong>. Het is een moderne manier van televisiekijken waarbij het tv-signaal via het internet wordt geleverd, in plaats van via een traditionele kabel- of satellietverbinding. Dit biedt een ongekende flexibiliteit en een veel groter aanbod.
      </p>
      <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">De Belangrijkste Voordelen van IPTV</h2>
      <p>
        IPTV is meer dan alleen een alternatief voor traditionele TV; het biedt een reeks voordelen die de kijkervaring aanzienlijk verbeteren.
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Enorm Zender- en Filmaanbod:</strong> Ontvang duizenden zenders van over de hele wereld en een gigantische bibliotheek met films en series.</li>
        <li><strong>Kijk Overal:</strong> Het enige wat u nodig heeft is internet. Kijk thuis op uw tv, of onderweg op uw laptop, tablet of smartphone.</li>
        <li><strong>Kostenbesparend:</strong> IPTV is vaak aanzienlijk goedkoper dan traditionele tv-abonnementen met vergelijkbare (of minder) content.</li>
        <li><strong>Interactieve Functies:</strong> Profiteer van moderne functies zoals terugkijken (catch-up), opnemen in de cloud en een interactieve programmagids (EPG).</li>
      </ul>
    </AdvancedSeoPageLayout>
  );
}
