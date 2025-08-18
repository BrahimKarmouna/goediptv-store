import { AdvancedSeoPageLayout } from "@/components/advanced-seo-page-layout";
import { generateSlug } from "@/lib/utils";

const relatedKeywords = [
  "IPTV in Amsterdam",
  "IPTV in Utrecht",
  "IPTV in Zaanstad",
  "IPTV in Amersfoort",
  "Stabiele IPTV"
];

const relatedLinks = relatedKeywords.map(keyword => ({
  title: keyword,
  href: `/${generateSlug(keyword)}`
}));

export default function IptvInAlmerePage() {
  return (
    <AdvancedSeoPageLayout 
      title="IPTV in Almere: Modern, Snel en Betrouwbaar"
      relatedLinks={relatedLinks}
    >
      <p>
        In de jonge en moderne stad Almere hoort een even moderne TV-oplossing. Wij bieden een high-performance IPTV-service die perfect past bij de snelle glasvezelnetwerken en de dynamische bevolking van Almere. Geniet van alle wedstrijden van Almere City FC en duizenden andere zenders.
      </p>
      <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">Een Dienst Gebouwd voor de Toekomst</h2>
      <p>
        Almere staat bekend om zijn moderne architectuur en infrastructuur. Onze IPTV-dienst sluit hier naadloos op aan. We maken gebruik van de nieuwste technologieën om een stabiele en haarscherpe kijkervaring te garanderen, klaar voor de toekomst van televisie.
      </p>
      <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">Waarom Almeerders voor Ons Kiezen</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Perfecte prestaties op de snelle internetnetwerken in Almere.</li>
        <li>Een enorm zenderaanbod voor een diverse en jonge bevolking.</li>
        <li>Inclusief Omroep Flevoland en andere regionale zenders.</li>
        <li>Snelle, digitale levering en uitstekende klantenondersteuning.</li>
      </ul>
    </AdvancedSeoPageLayout>
  );
}
