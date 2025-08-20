import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.iptvkopen.nl';

  // Static routes
  const staticRoutes = [
    '', // Home
    '/beste-nederlandse-iptv-aanbieders',
    '/iptv-kopen-gids',
    '/goedkope-iptv-nederland',
    '/handleiding',
    '/iptv-abonnement',
    '/iptv-kopen',
    '/iptv-ervaringen',
    '/iptv-handleiding',
    '/hulp-bij-iptv-installatie',
    '/informatie/wat-is-iptv',
    '/informatie/iptv-kopen',
    '/informatie/iptv-abonnement',
    '/informatie/iptv-in-het-buitenland',
    '/informatie/is-iptv-legaal',
    '/beste-iptv-aanbieder',
    '/beste-iptv-voor-sport',
    '/goedkope-iptv',
    '/goedkope-iptv-nederland',
    '/goedkoopste-iptv-abonnement',
    '/anoniem-iptv-kijken',
    '/betrouwbare-iptv',
    '/hoe-iptv-aanbieder-kiezen',
    '/hoe-iptv-abonnement-verlengen',
    '/hoe-iptv-beeldkwaliteit-verbeteren',
    '/hoe-iptv-opzeggen',
    '/hoe-werkt-iptv',
    '/iptv-met-belgische-zenders',
    '/iptv-met-enigma2',
    '/iptv-met-epg-gids',
    '/iptv-met-espn',
    '/dutch-iptv/24-uurs-proefperiode',
    '/dutch-iptv/abonnement-kopen',
    '/goed-iptv/beste-aanbieder',
    '/goed-iptv/ervaringen',
  ];

  // City pages
  const cities = [
    'almere', 'amersfoort', 'amsterdam', 'arnhem', 'breda', 'den-haag',
    'eindhoven', 'enschede', 'groningen', 'haarlem', 'nijmegen',
    'rotterdam', 'tilburg', 'utrecht', 'zaanstad'
  ];

  // Generate city pages
  const cityPages = cities.map(city => ({
    url: `${baseUrl}/iptv-in-${city}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // Generate static routes with metadata
  const routes = staticRoutes.map(route => ({
    url: `${baseUrl}${route === '' ? '' : route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8, // Homepage has highest priority
  }));

  return [...routes, ...cityPages];
}

export async function GET() {
  const sitemap = await sitemap();
  
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${sitemap.map((page) => `
        <url>
          <loc>${page.url}</loc>
          <lastmod>${page.lastModified.toISOString()}</lastmod>
          <changefreq>${page.changeFrequency}</changefreq>
          <priority>${page.priority}</priority>
        </url>
      `).join('')}
    </urlset>`;

  return new Response(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
      'xml-version': '1.0',
      'encoding': 'UTF-8'
    },
  });
}
