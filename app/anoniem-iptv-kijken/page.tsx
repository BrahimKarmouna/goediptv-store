import { AdvancedSeoPageLayout } from "@/components/advanced-seo-page-layout";
import { generateSlug } from "@/lib/utils";

const relatedKeywords = [
  "IPTV met VPN gebruiken",
  "Is IPTV legaal",
  "Betrouwbare IPTV",
  "Voordelen van IPTV",
  "Beste IPTV Aanbieder"
];

const relatedLinks = relatedKeywords.map(keyword => ({
  title: keyword,
  href: `/${generateSlug(keyword)}`
}));

export default function AnoniemIptvKijkenPage() {
  return (
    <AdvancedSeoPageLayout 
      title="Anoniem IPTV Kijken: Bescherm uw Privacy"
      relatedLinks={relatedLinks}
    >
      <p>
        Privacy is een belangrijk goed. Veel gebruikers vragen zich af in hoeverre hun kijkgedrag anoniem is bij het gebruik van IPTV. We hechten veel waarde aan de privacy van onze klanten en leggen hier uit hoe u anoniem TV kunt kijken.
      </p>
      <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">Ons Privacybeleid</h2>
      <p>
        Wij slaan geen logs op van wat u kijkt. Uw kijkgedrag is uw eigen zaak. We verzamelen alleen de noodzakelijke gegevens om uw abonnement te beheren, zoals uw e-mailadres en de geldigheidsduur van uw abonnement.
      </p>
      <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">Volledige Anonimiteit met een VPN</h2>
      <p>
        Hoewel wij uw kijkgedrag niet monitoren, kan uw internetprovider (Ziggo, KPN, etc.) wel zien dát u verbinding maakt met een IPTV-server. Ze kunnen niet zien wát u kijkt, maar wel de verbinding zelf. Voor gebruikers die volledige anonimiteit wensen, is het gebruik van een VPN de oplossing.
      </p>
      <p className="mt-4">
        Een VPN versleutelt al uw internetverkeer en leidt het om via een externe server. Hierdoor kan niemand, ook uw internetprovider niet, zien wat u online doet. Lees meer op onze pagina over <a href="/iptv-met-vpn-gebruiken" className="text-primary hover:underline">IPTV met een VPN gebruiken</a>.
      </p>
    </AdvancedSeoPageLayout>
  );
}
