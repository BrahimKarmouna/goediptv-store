import { AdvancedSeoPageLayout } from "@/components/advanced-seo-page-layout";
import { generateSlug } from "@/lib/utils";

const relatedKeywords = [
  "IPTV Kopen",
  "IPTV Abonnement",
  "Betrouwbare IPTV",
  "Hoe IPTV abonnement verlengen",
  "Beste IPTV Aanbieder"
];

const relatedLinks = relatedKeywords.map(keyword => ({
  title: keyword,
  href: `/${generateSlug(keyword)}`
}));

export default function IptvBetalenMetIdealPage() {
  return (
    <AdvancedSeoPageLayout 
      title="IPTV Betalen met iDEAL: Veilig en Vertrouwd"
      relatedLinks={relatedLinks}
    >
      <p>
        Wilt u uw IPTV-abonnement veilig, snel en eenvoudig betalen? Bij ons kunt u vanzelfsprekend betalen met iDEAL, de meest gebruikte en vertrouwde online betaalmethode van Nederland. Dit garandeert een veilige en herkenbare transactie.
      </p>
      <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">Waarom Betalen met iDEAL?</h2>
      <ul className="list-disc pl-6 space-y-2 mt-4">
        <li><strong>Veiligheid:</strong> U rekent af in de vertrouwde online bankieromgeving van uw eigen bank.</li>
        <li><strong>Gemak:</strong> De betaling is direct verwerkt, waardoor uw abonnement meteen geactiveerd kan worden.</li>
        <li><strong>Betrouwbaarheid:</strong> iDEAL is een bewezen en betrouwbaar systeem dat door alle grote Nederlandse banken wordt ondersteund.</li>
        <li><strong>Geen Extra Kosten:</strong> Wij rekenen geen transactiekosten voor betalingen met iDEAL.</li>
      </ul>
      <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">Het Betaalproces</h2>
      <p>
        Wanneer u op onze <a href="/iptv-kopen" className="text-primary hover:underline">bestelpagina</a> een abonnement kiest, selecteert u simpelweg iDEAL als uw betaalmethode. Vervolgens kiest u uw bank en wordt u veilig doorgestuurd om de betaling af te ronden. Na een succesvolle betaling ontvangt u direct uw bestelgegevens per e-mail.
      </p>
    </AdvancedSeoPageLayout>
  );
}
