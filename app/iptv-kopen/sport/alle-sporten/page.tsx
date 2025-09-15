import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Alle IPTV Sporten | IPTV Kopen Nederland",
  description: "Overzicht: voetbal, Formule 1, wielrennen, tennis, wintersport en basketbal via IPTV. Apps, devices en tips.",
};

export default function Page() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">Alle IPTV Sporten</h1>
      <p className="text-muted-foreground mb-8 max-w-3xl">
        Ontdek de beste IPTV-instellingen en apps voor alle populaire sporten. Start vandaag met kijken via een pakket dat bij je past.
      </p>
      <div className="flex gap-3">
        <Button asChild><Link href="/#pricing">Bekijk pakketten</Link></Button>
        <Button asChild variant="outline"><Link href="/iptv-kopen">Terug naar IPTV Kopen</Link></Button>
      </div>
    </div>
  );
}
