import { Metadata } from 'next';
import { AdvancedSeoPageLayout } from '@/components/advanced-seo-page-layout';

export const metadata: Metadata = {
  title: 'Wat is IPTV? | Uitgebreide Uitleg over IPTV Diensten',
  description: 'Ontdek wat IPTV is, hoe het werkt en waarom steeds meer mensen kiezen voor IPTV als hun primaire televisiedienst. Lees meer over de voordelen van IPTV.',
};

export default function WatIsIptv() {
  return (
    <AdvancedSeoPageLayout
      title="Wat is IPTV?"
      description="Alles wat u moet weten over IPTV"
    >
      <div className="prose prose-lg max-w-none">
        <h2>Wat is IPTV precies?</h2>
        <p>IPTV (Internet Protocol Television) is een methode om televisie-uitzendingen te ontvangen via internet in plaats van via traditionele methoden zoals kabel, satelliet of ether. In plaats van programma's te ontvangen via een kabel of schotel, worden de beelden via uw internetverbinding gestreamd.</p>
        
        <h2>Hoe werkt IPTV?</h2>
        <p>IPTV werkt door televisiesignalen te comprimeren en te verzenden via internetprotocol (IP). Dit gebeurt meestal via een speciale set-top box of een app op uw smart-tv, computer, tablet of smartphone. De content wordt op aanvraag gestreamd, wat betekent dat u kunt kijken wat u wilt, wanneer u maar wilt.</p>
        
        <h2>Verschillende soorten IPTV</h2>
        <ul>
          <li><strong>Live TV:</strong> Traditionele live televisie-uitzendingen via internet</li>
          <li><strong>Time-Shifted TV:</strong> Kijk uitgesteld naar programma's (tot 72 uur terug)</li>
          <li><strong>Video on Demand (VOD):</strong> Kies uit een uitgebreide bibliotheek met films en series</li>
          <li><strong>TV on Demand:</strong> Kijk afleveringen van series wanneer het u uitkomt</li>
        </ul>
        
        <h2>Voordelen van IPTV</h2>
        <ul>
          <li>Kijk op elk apparaat (smart-tv, telefoon, tablet, computer)</li>
          <li>Geen dure abonnementen of installatiekosten</li>
          <li>Geen schotel of kabelaansluiting nodig</li>
          <li>Pauzeren, terug- en doorspoelen van live tv</li>
          <li>Toegang tot duizenden internationale zenders</li>
          <li>Betaal alleen voor wat u wilt kijken</li>
        </ul>
        
        <h2>Heeft u een speciale ontvanger nodig?</h2>
        <p>Voor de meeste IPTV-diensten heeft u een compatibel apparaat nodig, zoals een smart-tv, computer, smartphone, tablet of een speciale IPTV-box. Sommige aanbieders bieden ook eigen apps aan die u kunt installeren op verschillende apparaten.</p>
        
        <h2>Is IPTV legaal?</h2>
        <p>Ja, IPTV op zich is volledig legaal. Het is simpelweg een andere manier om televisie te ontvangen. Het is echter belangrijk om te onthouden dat het illegaal is om auteursrechtelijk beschermde inhoud te bekijken zonder de juiste licentie. Zorg er altijd voor dat u een betrouwbare en legale IPTV-aanbieder kiest.</p>
        
        <h2>Waarom kiezen voor StreamPro IPTV?</h2>
        <p>Bij StreamPro IPTV bieden we een betrouwbare, hoogwaardige IPTV-ervaring met:</p>
        <ul>
          <li>Meer dan 20.000 kanalen wereldwijd</li>
          <li>Uitgebreide collectie VOD-content</li>
          <li>4K-ondersteuning voor optimale beeldkwaliteit</li>
          <li>24/7 klantenondersteuning</li>
          <li>Gebruiksvriendelijke interface</li>
          <li>Geen langlopende contracten</li>
        </ul>
      </div>
    </AdvancedSeoPageLayout>
  );
}
