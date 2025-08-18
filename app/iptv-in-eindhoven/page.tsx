import { AdvancedSeoPageLayout } from "@/components/advanced-seo-page-layout";
import { generateSlug } from "@/lib/utils";

const relatedKeywords = [
  "IPTV in Amsterdam",
  "IPTV in Tilburg",
  "IPTV in Breda",
  "IPTV in Utrecht",
  "Stabiele IPTV"
];

const relatedLinks = relatedKeywords.map(keyword => ({
  title: keyword,
  href: `/${generateSlug(keyword)}`
}));

export default function IptvInEindhovenPage() {
  return (
    <AdvancedSeoPageLayout 
      title="IPTV in Eindhoven: De Tech-Keuze voor de Brainport Regio"
      relatedLinks={relatedLinks}
    >
      <p>
        In de high-tech stad Eindhoven leveren wij een IPTV-service die voldoet aan de hoogste eisen. Onze dienst biedt superieure beeldkwaliteit en stabiliteit, perfect voor de veeleisende gebruiker in de Brainport regio. Geniet van alle PSV-wedstrijden en meer in 4K-kwaliteit.
      </p>
      <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">Een Slimme Keuze voor een Slimme Stad</h2>
      <p>
        Wij begrijpen dat inwoners van Eindhoven waarde hechten aan technologie en kwaliteit. Daarom maken we gebruik van de nieuwste streamingtechnologieën om een onberispelijke ervaring te garanderen. Onze service is compatibel met de meest geavanceerde Smart TV's, mediaspelers en andere slimme apparaten.
      </p>
      <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">Waarom Eindhovenaren voor Ons Kiezen</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Ondersteuning voor 4K en UHD-streaming voor de beste beeldkwaliteit.</li>
        <li>Uiterst stabiele service, zelfs tijdens de belangrijkste tech-events en sportwedstrijden.</li>
        <li>Inclusief alle lokale zenders zoals Studio040.</li>
        <li>Deskundige ondersteuning voor de meest complexe installaties.</li>
      </ul>
    </AdvancedSeoPageLayout>
  );
}
