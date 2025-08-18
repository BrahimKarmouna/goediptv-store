import { AdvancedSeoPageLayout } from "@/components/advanced-seo-page-layout";
import { generateSlug } from "@/lib/utils";

const relatedKeywords = [
  "IPTV Kopen",
  "Goedkope IPTV",
  "Beste IPTV Aanbieder",
  "IPTV Proefperiode",
  "IPTV Betalen"
];

const relatedLinks = relatedKeywords.map(keyword => ({
  title: keyword,
  href: `/${generateSlug(keyword)}`
}));

export default function IptvAbonnementPage() {
  return (
    <AdvancedSeoPageLayout 
      title="IPTV Abonnement: Kies het Pakket dat bij U Past"
      relatedLinks={relatedLinks}
    >
      <p>
        Op zoek naar een flexibel IPTV abonnement? Wij bieden diverse pakketten die zijn afgestemd op uw kijkgedrag en budget. Of u nu een maandelijkse, driemaandelijkse, of jaarlijkse optie zoekt, wij hebben een abonnement dat bij u past.
      </p>
      <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">Vind uw Perfecte Abonnement</h2>
      <p>
        Een goed IPTV abonnement geeft u de vrijheid om te kijken wat u wilt, wanneer u wilt. Onze abonnementen zijn eenvoudig te beheren en te verlengen. U zit nergens aan vast en kunt uw pakket op elk moment aanpassen aan uw wensen.
      </p>
      <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">Wat Krijgt u met een Abonnement?</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Flexibele Looptijden:</strong> Kies uit 1, 3, 6, of 12 maanden.</li>
        <li><strong>Geen Verborgen Kosten:</strong> U betaalt eenmalig voor de gekozen periode.</li>
        <li><strong>Compleet Aanbod:</strong> Toegang tot alle zenders, films en series binnen uw pakket.</li>
        <li><strong>Eenvoudig Verlengen:</strong> <a href="/hoe-iptv-abonnement-verlengen" className="text-primary hover:underline">Verleng uw abonnement</a> met een paar klikken.</li>
      </ul>
    </AdvancedSeoPageLayout>
  );
}
