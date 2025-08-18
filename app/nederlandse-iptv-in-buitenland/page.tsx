import { AdvancedSeoPageLayout } from "@/components/advanced-seo-page-layout";
import { generateSlug } from "@/lib/utils";

const relatedKeywords = [
  "IPTV voor Buitenland",
  "IPTV voor op vakantie",
  "IPTV met Nederlandse Zenders",
  "IPTV Kopen",
  "Beste IPTV Aanbieder"
];

const relatedLinks = relatedKeywords.map(keyword => ({
  title: keyword,
  href: `/${generateSlug(keyword)}`
}));

export default function NederlandseIptvInBuitenlandPage() {
  return (
    <AdvancedSeoPageLayout 
      title="Nederlandse IPTV in Buitenland: Voel u Thuis, Waar u ook Woont"
      relatedLinks={relatedLinks}
    >
      <p>
        Woont u als expat in het buitenland en mist u het Nederlandse nieuws, de talkshows en de vertrouwde series? Met Nederlandse IPTV haalt u een stukje thuis in huis, waar ter wereld u ook bent. Blijf verbonden met de Nederlandse taal en cultuur.
      </p>
      <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">De Oplossing voor Expats</h2>
      <p>
        Voor Nederlanders die permanent of voor langere tijd in het buitenland wonen, is IPTV de ideale oplossing. U bent niet langer afhankelijk van wat lokale providers aanbieden. U krijgt direct toegang tot het volledige Nederlandse zenderaanbod in hoge kwaliteit.
      </p>
      <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">Waarom Kiezen Expats voor IPTV?</h2>
      <ul className="list-disc pl-6 space-y-2 mt-4">
        <li><strong>Compleet Nederlands Aanbod:</strong> Alle NPO, RTL, en SBS zenders, plus regionale en kinderzenders.</li>
        <li><strong>Taal en Cultuur:</strong> Houd de voeling met Nederland en zorg ervoor dat uw kinderen de Nederlandse taal blijven horen.</li>
        <li><strong>Geen Schotel Nodig:</strong> Een eenvoudige, esthetische oplossing die overal werkt met alleen een internetverbinding.</li>
        <li><strong>Wereldwijde Dekking:</strong> Of u nu in Spanje, de VS of Australië woont, onze dienst werkt overal.</li>
      </ul>
    </AdvancedSeoPageLayout>
  );
}
