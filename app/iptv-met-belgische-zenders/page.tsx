import { AdvancedSeoPageLayout } from "@/components/advanced-seo-page-layout";
import { generateSlug } from "@/lib/utils";

const relatedKeywords = [
  "IPTV Zenderlijst",
  "Beste IPTV Aanbieder",
  "IPTV voor Buitenland",
  "IPTV Kopen",
  "IPTV Vergelijken"
];

const relatedLinks = relatedKeywords.map(keyword => ({
  title: keyword,
  href: `/${generateSlug(keyword)}`
}));

export default function IptvMetBelgischeZendersPage() {
  return (
    <AdvancedSeoPageLayout 
      title="IPTV met Belgische Zenders: VRT, VTM en Meer"
      relatedLinks={relatedLinks}
    >
      <p>
        Wilt u als Nederlander genieten van de Vlaamse televisie, of bent u een Belg die op zoek is naar een compleet zenderpakket? Met ons IPTV-abonnement ontvangt u alle belangrijke Belgische (Vlaamse en Waalse) zenders in hoge kwaliteit.
      </p>
      <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">Het Complete Belgische Aanbod</h2>
      <p>
        Ons pakket bevat alle essentiële zenders uit België. Kijk naar VRT 1, VTM, Play4, en Canvas voor het beste Vlaamse entertainment en nieuws. Daarnaast bieden we ook de belangrijkste Waalse zenders. Perfect voor het volgen van programma's als 'De Mol' of het Belgische voetbal.
      </p>
      <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">Voordelen van Belgische TV via IPTV</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Alle Populaire Zenders:</strong> Mis niets van de Vlaamse en Waalse televisie.</li>
        <li><strong>Geen Geografische Restricties:</strong> Kijk Belgische tv in Nederland of waar dan ook ter wereld.</li>
        <li><strong>Stabiele HD-Kwaliteit:</strong> Geniet van een perfecte beeld- en geluidskwaliteit.</li>
        <li><strong>Voordelig:</strong> Een compleet Belgisch pakket als onderdeel van uw totale IPTV-abonnement.</li>
      </ul>
    </AdvancedSeoPageLayout>
  );
}
