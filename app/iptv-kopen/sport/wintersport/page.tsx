import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "IPTV Wintersport Kijken | IPTV Kopen Nederland",
  description: "Skiën en schaatsen via IPTV: tips voor streams en de beste apparaten/apps.",
};

export default function Page() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">IPTV Wintersport</h1>
      <p className="text-muted-foreground mb-8 max-w-3xl">
        Volg wintersport-evenementen met stabiele IPTV-streams in hoge kwaliteit.
      </p>
      <div className="flex gap-3">
        <Button asChild><Link href="/#pricing">Bekijk pakketten</Link></Button>
        <Button asChild variant="outline"><Link href="/iptv-kopen">Terug naar IPTV Kopen</Link></Button>
      </div>
    </div>
  );
}
