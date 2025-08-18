import { AdvancedSeoPageLayout } from "@/components/advanced-seo-page-layout";
import { generateSlug } from "@/lib/utils";

const relatedKeywords = [
  "Hoe IPTV abonnement verlengen",
  "IPTV Abonnement",
  "Betrouwbare IPTV",
  "IPTV Kopen",
  "Beste IPTV Aanbieder"
];

const relatedLinks = relatedKeywords.map(keyword => ({
  title: keyword,
  href: `/${generateSlug(keyword)}`
}));

export default function HoeIptvOpzeggenPage() {
  return (
    <AdvancedSeoPageLayout 
      title="Hoe IPTV Opzeggen: Geen Verborgen Verplichtingen"
      relatedLinks={relatedLinks}
    >
      <p>
        Bij ons staat flexibiliteit en transparantie voorop. U zit nergens aan vast. Het opzeggen van uw IPTV-abonnement is dan ook heel eenvoudig: u hoeft namelijk niets te doen.
      </p>
      <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">Geen Automatische Verlenging</h2>
      <p>
        Wij werken niet met automatische incasso's of stilzwijgende verlengingen. Uw abonnement is een prepaid periode. Als deze periode afloopt, stopt de dienst vanzelf. U ontvangt geen facturen en er wordt nooit ongevraagd geld afgeschreven.
      </p>
      <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">Hoe het Werkt</h2>
      <ul className="list-disc pl-6 space-y-2 mt-4">
        <li><strong>U betaalt vooraf:</strong> U kiest een periode (bv. 3, 6 of 12 maanden) en betaalt hiervoor.</li>
        <li><strong>Abonnement verloopt:</strong> Na afloop van de betaalde periode stopt de service automatisch.</li>
        <li><strong>Zelf verlengen:</strong> Als u tevreden bent en door wilt gaan, kunt u zelf actief kiezen om uw abonnement te <a href="/hoe-iptv-abonnement-verlengen" className="text-primary hover:underline">verlengen</a>.</li>
      </ul>
      <p className="mt-6">
        U heeft dus de volledige controle. Geen opzegtermijn, geen verborgen kosten, geen gedoe. Dat is de eerlijke en transparante service waar wij voor staan.
      </p>
    </AdvancedSeoPageLayout>
  );
}
