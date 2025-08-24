import { MetadataRoute } from 'next'

// This file is no longer used as the main sitemap endpoint
// The sitemap is now served from /api/sitemap;

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://dutchiptv.de';
  const currentDate = new Date();

  // Home and main category pages (highest priority)
  const highPriorityRoutes = [
    '', // Home
    '/beste-nederlandse-iptv-aanbieders',
    '/beste-iptv-aanbieder',
    '/beste-iptv-voor-sport',
    '/iptv-kopen',
    '/iptv-abonnement',
    '/goedkope-iptv',
    '/goedkope-iptv-nederland',
    '/goedkoopste-iptv-abonnement',
    '/betrouwbare-iptv',
    '/iptv-ervaringen',
    '/iptv-aanbieders',
    '/iptv-kopen-gids',
    '/iptv-vergelijken',
    '/iptv-provider-vergelijken',
    '/voordelen-van-iptv',
    '/wat-is-iptv',
    '/is-iptv-legaal',
  ];

  // Informational and guide pages
  const mediumPriorityRoutes = [
    '/hoe-werkt-iptv',
    '/iptv-handleiding',
    '/hulp-bij-iptv-installatie',
    '/iptv-installeren',
    '/informatie/wat-is-iptv',
    '/informatie/iptv-kopen',
    '/informatie/iptv-abonnement',
    '/informatie/iptv-in-het-buitenland',
    '/informatie/is-iptv-legaal',
    '/hoe-iptv-aanbieder-kiezen',
    '/hoe-iptv-abonnement-verlengen',
    '/hoe-iptv-beeldkwaliteit-verbeteren',
    '/hoe-iptv-opzeggen',
    '/iptv-proefperiode',
    '/iptv-reviews',
    '/iptv-storing-oplossen',
    '/iptv-versus-schotel',
    '/wat-is-de-beste-iptv-box',
    '/wat-is-een-m3u-link',
    '/nederlandse-iptv-in-buitenland',
    '/stabiele-iptv',
  ];

  // Feature and service pages
  const featureRoutes = [
    '/anoniem-iptv-kijken',
    '/iptv-met-belgische-zenders',
    '/iptv-met-enigma2',
    '/iptv-met-epg-gids',
    '/iptv-met-espn',
    '/iptv-betalen-met-ideal',
    '/iptv-met-films',
    '/iptv-met-marokkaanse-zenders',
    '/iptv-met-opnemen',
    '/iptv-met-series',
    '/iptv-met-terugkijken',
    '/iptv-met-turkse-zenders',
    '/iptv-met-viaplay',
    '/iptv-met-vlc-player',
    '/iptv-met-vpn-gebruiken',
    '/iptv-met-ziggo-sport',
    '/iptv-zenderlijst',
    '/iptv-zonder-schotel',
  ];

  // Device-specific pages
  const deviceRoutes = [
    '/iptv-op-android',
    '/iptv-op-apple-tv',
    '/iptv-op-chromecast',
    '/iptv-op-firestick',
    '/iptv-op-formuler',
    '/iptv-op-laptop',
    '/iptv-op-mag-box',
    '/iptv-op-meerdere-apparaten',
    '/iptv-op-pc',
    '/iptv-op-smart-tv',
    '/iptv-op-smartphone',
    '/iptv-op-tablet',
    '/iptv-via-gse-app',
    '/iptv-via-kodi',
  ];

  // Use case specific pages
  const useCaseRoutes = [
    '/iptv-voor-buitenland',
    '/iptv-voor-eredivisie',
    '/iptv-voor-formule-1',
    '/iptv-voor-horeca',
    '/iptv-voor-op-vakantie',
    '/iptv-voor-ouderen',
    '/iptv-voor-zakelijk-gebruik',
  ];

  // Dutch IPTV specific pages
  const dutchIptvRoutes = [
    '/dutch-iptv/24-uurs-proefperiode',
    '/dutch-iptv/abonnement-kopen',
    '/goed-iptv/beste-aanbieder',
    '/goed-iptv/ervaringen',
  ];

  // Legal pages
  const legalRoutes = [
    '/privacy-policy',
    '/refund-policy',
    '/terms-of-service',
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
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // Generate routes with appropriate priorities
  const generateRoutes = (routes: string[], priority: number) => 
    routes
      .filter(route => route) // Remove any empty routes
      .map(route => ({
        url: `${baseUrl}${route === '' ? '' : route}`,
        lastModified: currentDate,
        changeFrequency: 'weekly' as const,
        priority,
      }));

  // Combine all routes
  return [
    ...generateRoutes(highPriorityRoutes, 1.0),
    ...generateRoutes(mediumPriorityRoutes, 0.8),
    ...generateRoutes(featureRoutes, 0.7),
    ...generateRoutes(deviceRoutes, 0.7),
    ...generateRoutes(useCaseRoutes, 0.7),
    ...generateRoutes(dutchIptvRoutes, 0.7),
    ...generateRoutes(legalRoutes, 0.3),
    ...cityPages
  ];
}
