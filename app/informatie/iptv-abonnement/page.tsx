import { Metadata } from 'next';
import { AdvancedSeoPageLayout } from '@/components/advanced-seo-page-layout';

export const metadata: Metadata = {
  title: 'IPTV Abonnement | Kies het Juiste Abonnement voor Jouw Behoeften',
  description: 'Vergelijk verschillende IPTV-abonnementen en ontdek welk pakket het beste bij je past. Alles over prijzen, duur en wat er inbegrepen is.',
};

export default function IptvAbonnement() {
  return (
    <AdvancedSeoPageLayout
      title="IPTV Abonnement: Kies de Beste Optie"
      description="Vergelijk en kies het perfecte IPTV-abonnement voor jouw kijkgedrag"
    >
      <div className="prose prose-lg max-w-none">
        <h2>Soorten IPTV-abonnementen</h2>
        <p>Bij het kiezen van een IPTV-abonnement zijn er verschillende factoren om rekening mee te houden. Hieronder vind je een overzicht van de meest voorkomende opties.</p>
        
        <h3>1. Maandabonnement</h3>
        <p><strong>Voordelen:</strong></p>
        <ul>
          <li>Geen langdurige verplichting</li>
          <li>Flexibel opzegbaar</li>
          <li>Ideaal om de dienst uit te proberen</li>
        </ul>
        <p><strong>Nadelen:</strong></p>
        <ul>
          <li>Hogere maandelijkse kosten</li>
          <li>Minder voordelig op lange termijn</li>
        </ul>

        <h3>2. Driemaandelijks abonnement</h3>
        <p><strong>Voordelen:</strong></p>
        <ul>
          <li>Kortingsvoordeel t.o.v. maandabonnement</li>
          <li>Minder vaak betalen</li>
          <li>Goede middenweg</li>
        </ul>

        <h3>3. Halfjaarlijks abonnement</h3>
        <p><strong>Voordelen:</strong></p>
        <ul>
          <li>Aanzienlijke besparing t.o.v. maandabonnement</li>
          <li>Minder vaak betalen</li>
        </ul>

        <h3>4. Jaarabonnement</h3>
        <p><strong>Voordelen:</strong></p>
        <ul>
          <li>Hoogste korting</li>
          <li>Meest voordelige optie op lange termijn</li>
          <li>Vaak extra voordelen (extra schermen, premium kanalen)</li>
        </ul>
        <p><strong>Nadelen:</strong></p>
        <ul>
          <li>Langere verplichting</li>
          <li>Hogere eenmalige betaling</li>
        </ul>

        <h2>Waar moet je op letten bij het kiezen van een abonnement?</h2>
        <h3>1. Proefperiode</h3>
        <p>Kies een aanbieder die een proefperiode aanbiedt. Dit stelt je in staat om de kwaliteit van de dienst te testen voordat je een langdurig abonnement afsluit.</p>

        <h3>2. Opzegvoorwaarden</h3>
        <p>Controleer altijd de opzegvoorwaarden. Sommige aanbieders rekenen opzegkosten of bieden alleen restitutie voor ongebruikte maanden.</p>

        <h3>3. Aantal gelijktijdige streams</h3>
        <p>Let op hoeveel apparaten er tegelijk kunnen kijken. Voor gezinnen is het belangrijk dat meerdere personen tegelijk kunnen kijken.</p>

        <h3>4. Inclusieve functies</h3>
        <p>Controleer welke functies inbegrepen zijn:</p>
        <ul>
          <li>Terugkijken (catch-up TV)</li>
          <li>Opnemen (PVR-functionaliteit)</li>
          <li>EPG (Electronic Program Guide)</li>
          <li>VOD (Video on Demand)</li>
        </ul>

        <h2>Onze aanbeveling</h2>
        <p>Wij raden aan om te beginnen met een kortlopend abonnement of een proefperiode. Als je tevreden bent, kun je altijd nog overstappen op een langer abonnement met meer korting.</p>

        <h3>Onze abonnementsopties:</h3>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mt-8">
          <div className="border rounded-lg p-6">
            <h4 className="text-xl font-bold mb-2">1 Maand</h4>
            <p className="text-3xl font-bold mb-4">€19,99/maand</p>
            <ul className="space-y-2">
              <li>✓ 20.000+ kanalen</li>
              <li>✓ 100.000+ VOD</li>
              <li>✓ 1 gelijktijdige stream</li>
              <li>✓ 24/7 support</li>
            </ul>
          </div>
          <div className="border rounded-lg p-6 bg-primary/5">
            <div className="flex justify-between items-center mb-2">
              <h4 className="text-xl font-bold">3 Maanden</h4>
              <span className="bg-primary text-white text-xs font-medium px-2.5 py-0.5 rounded">Populair</span>
            </div>
            <p className="text-3xl font-bold mb-4">€34,99/maand</p>
            <p className="text-sm text-muted-foreground mb-4">Betaal €104,97 per 3 maanden</p>
            <ul className="space-y-2">
              <li>✓ 20.000+ kanalen</li>
              <li>✓ 100.000+ VOD</li>
              <li>✓ 2 gelijktijdige streams</li>
              <li>✓ 24/7 support</li>
              <li>✓ 7 dagen terugkijken</li>
            </ul>
          </div>
          <div className="border rounded-lg p-6">
            <h4 className="text-xl font-bold mb-2">6 Maanden</h4>
            <p className="text-3xl font-bold mb-4">€49,99/maand</p>
            <p className="text-sm text-muted-foreground mb-4">Betaal €299,94 per 6 maanden</p>
            <ul className="space-y-2">
              <li>✓ 20.000+ kanalen</li>
              <li>✓ 100.000+ VOD</li>
              <li>✓ 3 gelijktijdige streams</li>
              <li>✓ 24/7 support</li>
              <li>✓ 14 dagen terugkijken</li>
              <li>✓ 100 uur opname-opslag</li>
            </ul>
          </div>
          <div className="border rounded-lg p-6">
            <h4 className="text-xl font-bold mb-2">12 Maanden</h4>
            <p className="text-3xl font-bold mb-4">€69,99/maand</p>
            <p className="text-sm text-muted-foreground mb-4">Betaal €839,88 per jaar</p>
            <ul className="space-y-2">
              <li>✓ 20.000+ kanalen</li>
              <li>✓ 100.000+ VOD</li>
              <li>✓ 4 gelijktijdige streams</li>
              <li>✓ 24/7 VIP support</li>
              <li>✓ 30 dagen terugkijken</li>
              <li>✓ 500 uur opname-opslag</li>
              <li>✓ Premium kanalen inbegrepen</li>
            </ul>
          </div>
        </div>

        <h2 className="mt-12">Veelgestelde vragen</h2>
        <h3>Kan ik tussentijds opzeggen?</h3>
        <p>Ja, je kunt je abonnement op elk moment opzeggen. Je hebt dan nog toegang tot de dienst tot het einde van de betaalde periode.</p>

        <h3>Is er een opzegtermijn?</h3>
        <p>Nee, er geldt geen opzegtermijn. Je kunt je abonnement direct opzeggen via je account.</p>

        <h3>Kan ik upgraden of downgraden?</h3>
        <p>Ja, je kunt op elk moment upgraden naar een ander abonnement. Het verschil in prijs wordt verrekend met je volgende betaling.</p>

        <h3>Zijn er verborgen kosten?</h3>
        <p>Nee, de prijs die je ziet is de prijs die je betaalt. Er zijn geen verborgen kosten of bijkomende verplichtingen.</p>
      </div>
    </AdvancedSeoPageLayout>
  );
}
