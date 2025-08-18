import { AdvancedSeoPageLayout } from "@/components/advanced-seo-page-layout";
import { generateSlug } from "@/lib/utils";

const relatedKeywords = [
  "Wat is IPTV",
  "IPTV Vergelijken",
  "Goedkope IPTV",
  "Beste IPTV Aanbieder",
  "IPTV Kopen"
];

const relatedLinks = relatedKeywords.map(keyword => ({
  title: keyword,
  href: `/${generateSlug(keyword)}`
}));

export default function VoordelenVanIptvPage() {
  return (
    <AdvancedSeoPageLayout 
      title="De Voordelen van IPTV: Waarom Overstappen?"
      relatedLinks={relatedLinks}
    >
      <p>
        Twijfelt u nog om over te stappen op IPTV? De voordelen ten opzichte van traditionele kabel- of satelliettelevisie zijn talrijk. Hier zetten we de belangrijkste voordelen voor u op een rij.
      </p>
      <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">De Top 5 Voordelen van IPTV</h2>
      <ul className="list-decimal pl-6 space-y-4">
        <li>
          <strong>Ongekend Aanbod:</strong> Krijg toegang tot duizenden zenders wereldwijd, plus een enorme bibliotheek met films en series on demand. Dit is onvergelijkbaar met het beperkte aanbod van traditionele providers.
        </li>
        <li>
          <strong>Kostenbesparing:</strong> Voor een fractie van de prijs van een all-in-one kabelabonnement, krijgt u een veel groter en diverser aanbod. U bespaart maandelijks aanzienlijk op uw tv-kosten.
        </li>
        <li>
          <strong>Flexibiliteit en Mobiliteit:</strong> Kijk wat u wilt, waar u wilt. Het enige dat u nodig heeft is een internetverbinding. Neem uw tv-abonnement mee op vakantie, naar vrienden, of kijk in de trein op uw tablet.
        </li>
        <li>
          <strong>Interactieve Functies:</strong> Moderne IPTV-diensten bieden standaard geavanceerde functies zoals programma's terugkijken (catch-up), opnemen, en een gebruiksvriendelijke elektronische programmagids (EPG).
        </li>
        <li>
          <strong>Geen Schotel of Extra Kastjes:</strong> U heeft geen lelijke schotelantenne aan uw gevel nodig. IPTV werkt via een simpele app op uw bestaande apparaten zoals een Smart TV, wat zorgt voor een strak en opgeruimd interieur.
        </li>
      </ul>
    </AdvancedSeoPageLayout>
  );
}
