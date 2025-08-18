import { AdvancedSeoPageLayout } from "@/components/advanced-seo-page-layout";
import { generateSlug } from "@/lib/utils";

const relatedKeywords = [
  "IPTV Installeren",
  "IPTV Kopen",
  "IPTV versus schotel",
  "Hoe werkt IPTV",
  "Betrouwbare IPTV"
];

const relatedLinks = relatedKeywords.map(keyword => ({
  title: keyword,
  href: `/${generateSlug(keyword)}`
}));

export default function IptvZonderSchotelPage() {
  return (
    <AdvancedSeoPageLayout 
      title="IPTV Zonder Schotel: TV Kijken via het Internet"
      relatedLinks={relatedLinks}
    >
      <p>
        Wilt u genieten van duizenden zenders zonder een lelijke schotel aan uw gevel? Met IPTV is dat mogelijk. IPTV, of Internet Protocol Televisie, levert het TV-signaal direct via uw internetverbinding. Geen schotel, geen extra kabels, alleen uw internet.
      </p>
      <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">De Voordelen van TV Kijken Zonder Schotel</h2>
      <p>
        Het traditionele TV kijken via een schotelantenne heeft zijn nadelen. Slecht weer kan het signaal verstoren en niet iedereen wil of mag een schotel installeren. IPTV lost deze problemen op.
      </p>
      <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">Waarom Kiezen voor IPTV?</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Geen Installatie aan de Gevel:</strong> U hoeft geen schotel te monteren. Perfect voor appartementen of huizen waar dit niet is toegestaan.</li>
        <li><strong>Weerbestendig:</strong> Omdat het signaal via het internet komt, heeft u geen last van storingen door regen, sneeuw of harde wind.</li>
        <li><strong>Eenvoudige Installatie:</strong> Het enige wat u nodig heeft is een internetverbinding en een geschikt apparaat.</li>
        <li><strong>Overal te Gebruiken:</strong> Neem uw TV-abonnement mee op vakantie of gebruik het in een tweede huis.</li>
      </ul>
    </AdvancedSeoPageLayout>
  );
}
