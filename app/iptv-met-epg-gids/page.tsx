import { AdvancedSeoPageLayout } from "@/components/advanced-seo-page-layout";
import { generateSlug } from "@/lib/utils";

const relatedKeywords = [
  "IPTV Zenderlijst",
  "Hoe werkt IPTV",
  "IPTV Handleiding",
  "Voordelen van IPTV",
  "Beste IPTV Aanbieder"
];

const relatedLinks = relatedKeywords.map(keyword => ({
  title: keyword,
  href: `/${generateSlug(keyword)}`
}));

export default function IptvMetEpgGidsPage() {
  return (
    <AdvancedSeoPageLayout 
      title="IPTV met EPG Gids: Uw TV-Gids voor de Toekomst"
      relatedLinks={relatedLinks}
    >
      <p>
        Wat is een EPG en waarom is het zo belangrijk voor uw IPTV-ervaring? EPG staat voor Electronic Program Guide, oftewel een elektronische tv-gids. Het is een onmisbare functie die het traditionele tv-kijken nabootst en verbetert. Voor een dieper inzicht in de techniek, lees onze gids over <a href="/hoe-werkt-iptv" className="text-primary hover:underline">hoe IPTV werkt</a>.
      </p>
      <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">Wat Doet een EPG?</h2>
      <p>
        De EPG-gids geeft u een overzicht van wat er nu en in de komende dagen op elke zender wordt uitgezonden. U kunt door de tijd en de zenders bladeren om te zien welke programma's er op tv zijn. Precies zoals u gewend bent van uw traditionele tv-provider.
      </p>
      <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">De Voordelen van een Goede EPG</h2>
      <ul className="list-disc pl-6 space-y-2 mt-4">
        <li><strong>Overzicht:</strong> Zie in één oogopslag wat er speelt op honderden zenders.</li>
        <li><strong>Programma-informatie:</strong> Krijg meer details over een film of serie, zoals een korte beschrijving, acteurs en uitzendtijd.</li>
        <li><strong>Navigatiegemak:</strong> Maakt het navigeren door het enorme zenderaanbod eenvoudig en intuïtief.</li>
        <li><strong>Functies voor Terugkijken en Opnemen:</strong> De EPG is vaak geïntegreerd met functies als terugkijken en opnemen, zodat u programma's direct vanuit de gids kunt selecteren.</li>
      </ul>
      <p className="mt-6">
        Onze dienst levert een volledige en actuele EPG voor de meeste zenders, zodat u een comfortabele en gebruiksvriendelijke kijkervaring heeft.
      </p>
    </AdvancedSeoPageLayout>
  );
}
