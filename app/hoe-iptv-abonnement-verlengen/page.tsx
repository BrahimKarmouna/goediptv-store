import { AdvancedSeoPageLayout } from "@/components/advanced-seo-page-layout";
import { generateSlug } from "@/lib/utils";

const relatedKeywords = [
  "IPTV Abonnement",
  "IPTV Kopen",
  "IPTV betalen met iDEAL",
  "Beste IPTV Aanbieder",
  "Hoe IPTV opzeggen"
];

const relatedLinks = relatedKeywords.map(keyword => ({
  title: keyword,
  href: `/${generateSlug(keyword)}`
}));

export default function HoeIptvAbonnementVerlengenPage() {
  return (
    <AdvancedSeoPageLayout 
      title="Hoe IPTV Abonnement Verlengen: Eenvoudig en Snel"
      relatedLinks={relatedLinks}
    >
      <p>
        Is uw IPTV-abonnement bijna verlopen en wilt u blijven genieten van onze service? Het verlengen van uw abonnement is heel eenvoudig. We leggen de stappen hieronder uit.
      </p>
      <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">Het Verlengingsproces</h2>
      <p>
        U hoeft niet te wachten tot uw abonnement is verlopen. U kunt op elk moment een nieuwe abonnementsperiode aanschaffen. Deze wordt automatisch geactiveerd zodra uw huidige periode afloopt. U zit dus nooit zonder beeld.
      </p>
      <ol className="list-decimal pl-6 space-y-4 mt-4">
        <li>
          <strong>Kies uw Nieuwe Periode:</strong> Ga naar onze <a href="/iptv-kopen" className="text-primary hover:underline">bestelpagina</a> en kies de gewenste abonnementsduur (bijvoorbeeld 3, 6 of 12 maanden).
        </li>
        <li>
          <strong>Gebruik Hetzelfde E-mailadres:</strong> Het is belangrijk dat u bij het bestellen hetzelfde e-mailadres gebruikt als bij uw oorspronkelijke bestelling. Ons systeem herkent u dan automatisch.
        </li>
        <li>
          <strong>Reken Veilig Af:</strong> Voltooi de betaling via een van onze veilige betaalmethoden, zoals iDEAL.
        </li>
        <li>
          <strong>Klaar!</strong> Uw verlenging is verwerkt. U ontvangt een bevestiging en uw abonnement loopt naadloos door. U hoeft niets opnieuw in te stellen op uw apparaat.
        </li>
      </ol>
      <p className="mt-6">
        Heeft u vragen over uw verlenging? Neem gerust contact op met onze klantenservice. We helpen u graag verder.
      </p>
    </AdvancedSeoPageLayout>
  );
}
