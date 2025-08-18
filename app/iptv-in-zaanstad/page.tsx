import { AdvancedSeoPageLayout } from "@/components/advanced-seo-page-layout";
import { generateSlug } from "@/lib/utils";

const relatedKeywords = [
  "IPTV in Amsterdam",
  "IPTV in Haarlem",
  "IPTV in Alkmaar", // Assuming Alkmaar is a relevant nearby city
  "IPTV in Amersfoort",
  "Goedkope IPTV"
];

const relatedLinks = relatedKeywords.map(keyword => ({
  title: keyword,
  href: `/${generateSlug(keyword)}`
}));

export default function IptvInZaanstadPage() {
  return (
    <AdvancedSeoPageLayout 
      title="IPTV in Zaanstad: Betaalbaar en Compleet voor de Hele Zaanstreek"
      relatedLinks={relatedLinks}
    >
      <p>
        Voor alle inwoners van Zaanstad, van Zaandam tot Krommenie, bieden wij een complete en betaalbare IPTV-oplossing. Geniet van een enorm zenderaanbod met een stabiele verbinding, perfect voor elk huishouden in de Zaanstreek.
      </p>
      <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">Een Dienst voor de Hele Regio</h2>
      <p>
        Wij begrijpen de diversiteit van Zaanstad en bieden daarom een zenderpakket dat iedereen aanspreekt. Van sport en nieuws tot kinderprogramma's en internationale zenders, onze service is de perfecte keuze voor de hele familie. En dat alles voor een scherpe, eerlijke prijs.
      </p>
      <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">Waarom Inwoners van Zaanstad voor Ons Kiezen</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Voordelige prijzen en pakketten voor het hele gezin.</li>
        <li>Stabiele verbinding in de hele Zaanstreek.</li>
        <li>Inclusief de lokale zender ZaanTV.</li>
        <li>Eenvoudige installatie op elk apparaat.</li>
      </ul>
    </AdvancedSeoPageLayout>
  );
}
