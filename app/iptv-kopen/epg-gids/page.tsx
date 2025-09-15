import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "IPTV EPG Gids | IPTV Kopen Nederland",
  description: "EPG (programmagids) instellen voor IPTV: bronnen toevoegen, tijdzone fixen en tips voor overzichtelijke gidsen.",
};

export default function Page() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">IPTV EPG Gids</h1>
      <p className="text-muted-foreground mb-8 max-w-3xl">
        Een goede EPG maakt IPTV veel gebruiksvriendelijker. Zo stel je EPG-bronnen in en corrigeer je tijdzones.
      </p>

      <section className="grid md:grid-cols-2 gap-6 mb-12">
        <div className="bg-card border border-border rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-2">EPG instellen</h2>
          <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
            <li>Voeg de XMLTV/EPG-URL toe in je app</li>
            <li>Selecteer juiste tijdzone (CEST/CET)</li>
            <li>Update EPG handmatig na wijzigingen</li>
          </ul>
        </div>
        <div className="bg-card border border-border rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-2">Veelgestelde vragen</h2>
          <p className="text-muted-foreground">Zie je geen gids? Controleer EPG-bron, tijdzone en vernieuwing van data.</p>
        </div>
      </section>

      <div className="flex gap-3">
        <Button asChild><Link href="/#pricing">Bekijk pakketten</Link></Button>
        <Button asChild variant="outline"><Link href="/iptv-kopen">Terug naar IPTV Kopen</Link></Button>
      </div>
    </div>
  );
}
