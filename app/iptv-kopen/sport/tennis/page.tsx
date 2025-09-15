import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "IPTV Tennis Kijken | IPTV Kopen Nederland",
  description: "Grand Slams en ATP/WTA via IPTV. Tips voor stabiele weergave en aanbevolen apparaten.",
};

export default function Page() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">IPTV Tennis</h1>
      <p className="text-muted-foreground mb-8 max-w-3xl">
        Kijk tennis in HD/4K met de juiste app en netwerksetup. Zo haal je het maximale uit je IPTV-ervaring.
      </p>
      <div className="flex gap-3">
        <Button asChild><Link href="/#pricing">Bekijk pakketten</Link></Button>
        <Button asChild variant="outline"><Link href="/iptv-kopen">Terug naar IPTV Kopen</Link></Button>
      </div>
    </div>
  );
}
