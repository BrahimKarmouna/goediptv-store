import { AdvancedSeoPageLayout } from "@/components/advanced-seo-page-layout";
import { generateSlug } from "@/lib/utils";

const relatedKeywords = [
  "IPTV Installeren",
  "IPTV Handleiding",
  "Wat is de beste IPTV box",
  "IPTV op Smart TV",
  "Beste IPTV Aanbieder"
];

const relatedLinks = relatedKeywords.map(keyword => ({
  title: keyword,
  href: `/${generateSlug(keyword)}`
}));

export default function HulpBijIptvInstallatiePage() {
  return (
    <AdvancedSeoPageLayout 
      title="Hulp bij IPTV Installatie: Wij Helpen u op Weg"
      relatedLinks={relatedLinks}
    >
      <p>
        Vindt u de installatie van IPTV een beetje spannend? Geen zorgen, u staat er niet alleen voor. Hoewel het proces meestal heel eenvoudig is, begrijpen we dat niet iedereen even technisch is. Wij bieden op verschillende manieren hulp bij de installatie.
      </p>
      <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">Stap 1: Raadpleeg Onze Handleidingen</h2>
      <p>
        De eerste en snelste stap is om onze uitgebreide handleidingen te raadplegen. We hebben stapsgewijze instructies voor de meest populaire apparaten.
      </p>
      <ul className="list-disc pl-6 space-y-2 mt-4">
        <li><a href="/iptv-handleiding" className="text-primary hover:underline">Overzicht van alle handleidingen</a></li>
        <li><a href="/iptv-installeren" className="text-primary hover:underline">Algemene installatiegids</a></li>
        <li><a href="/iptv-op-smart-tv" className="text-primary hover:underline">Specifieke gids voor Smart TV's</a></li>
      </ul>
      <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">Stap 2: Persoonlijke Hulp van Onze Klantenservice</h2>
      <p>
        Komt u er met de handleidingen niet uit? Dan staat ons deskundige supportteam voor u klaar. Neem contact met ons op via e-mail of de contactpagina en we loodsen u persoonlijk door het proces heen. We zorgen ervoor dat u binnen de kortste keren kunt genieten van uw IPTV-abonnement.
      </p>
    </AdvancedSeoPageLayout>
  );
}
