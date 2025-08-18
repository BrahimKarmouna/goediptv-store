import { AdvancedSeoPageLayout } from "@/components/advanced-seo-page-layout";
import { generateSlug } from "@/lib/utils";

const relatedKeywords = [
  "IPTV Kopen",
  "IPTV Abonnement",
  "IPTV Vergelijken",
  "Stabiele IPTV",
  "IPTV Reviews"
];

const relatedLinks = relatedKeywords.map(keyword => ({
  title: keyword,
  href: `/${generateSlug(keyword)}`
}));

export default function BesteIptvAanbiederPage() {
  return (
    <AdvancedSeoPageLayout 
      title="Beste IPTV Aanbieder van Nederland: Waarom U voor Ons Moet Kiezen"
      relatedLinks={relatedLinks}
    >
      <p>
        Op zoek naar de beste IPTV aanbieder? De keuze kan overweldigend zijn. Op onze pagina over <a href="/iptv-vergelijken" className="text-primary hover:underline">IPTV vergelijken</a> leggen we uit waar u op moet letten. Wij onderscheiden ons door een compromisloze focus op kwaliteit, stabiliteit en klantenservice. Ontdek waarom duizenden Nederlanders en Belgen voor ons kiezen.
      </p>
      <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">Wat Maakt Ons de Beste Keuze?</h2>
      <p>
        In tegenstelling tot veel andere aanbieders, investeren wij continu in onze serverinfrastructuur. Dit resulteert in een stabiele, haperingsvrije kijkervaring, zelfs tijdens de meest populaire live-evenementen. Wij zijn geen hobbyisten; wij zijn professionals.
      </p>
      <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">Onze Kwaliteitsgaranties</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>99.9% Uptime Garantie:</strong> Onze servers zijn altijd online wanneer u wilt kijken.</li>
        <li><strong>Krachtige Servers:</strong> Geen overbelasting, geen haperingen, geen buffering.</li>
        <li><strong>Uitgebreid en Actueel Aanbod:</strong> We voegen constant nieuwe zenders, films en series toe.</li>
        <li><strong>Deskundige Klantenservice:</strong> Ons team heeft verstand van zaken en helpt u écht verder.</li>
      </ul>
    </AdvancedSeoPageLayout>
  );
}
