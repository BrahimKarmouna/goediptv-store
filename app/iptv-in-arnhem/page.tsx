import { AdvancedSeoPageLayout } from "@/components/advanced-seo-page-layout";
import { generateSlug } from "@/lib/utils";

const relatedKeywords = [
  "IPTV in Nijmegen",
  "IPTV in Enschede",
  "IPTV in Utrecht",
  "IPTV met Duitse Zenders",
  "Betrouwbare IPTV"
];

const relatedLinks = relatedKeywords.map(keyword => ({
  title: keyword,
  href: `/${generateSlug(keyword)}`
}));

export default function IptvInArnhemPage() {
  return (
    <AdvancedSeoPageLayout 
      title="IPTV in Arnhem: Stabiel en Compleet voor de Rijnstad"
      relatedLinks={relatedLinks}
    >
      <p>
        Voor de inwoners van de prachtige stad Arnhem bieden wij een complete en betrouwbare IPTV-oplossing. Geniet van een haarscherp beeld, een stabiele verbinding en een zenderpakket dat perfect is afgestemd op de regio, inclusief alle wedstrijden van Vitesse.
      </p>
      <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">Een Dienst die Past bij Arnhem</h2>
      <p>
        Arnhem, gelegen aan de Rijn en dicht bij de Duitse grens, heeft een uniek karakter. Onze zenderlijst speelt hierop in met een solide aanbod van zowel Nederlandse als Duitse kanalen. Onze service is krachtig genoeg om de hele stad, van noord tot zuid, van perfecte TV te voorzien.
      </p>
      <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">Waarom Arnhemmers voor Ons Kiezen</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Stabiele streaming, essentieel voor het volgen van live sport.</li>
        <li>Goed aanbod van Duitse zenders vanwege de nabijheid van de grens.</li>
        <li>Inclusief de lokale zender RTV Arnhem.</li>
        <li>Snelle, digitale levering en uitstekende service.</li>
      </ul>
    </AdvancedSeoPageLayout>
  );
}
