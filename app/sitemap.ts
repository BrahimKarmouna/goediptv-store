import { MetadataRoute } from 'next'

// Helper function to format date in YYYY-MM-DD format
const formatDate = (date: Date): string => {
  return date.toISOString().split('T')[0];
};

// Import Node.js modules at the top
import * as fs from 'fs';
import * as path from 'path';

// Validate if a URL exists in the app directory
const routeExists = (routePath: string): boolean => {
  if (!routePath) return false;
  
  try {
    // Remove leading slash if present
    const cleanPath = routePath.startsWith('/') ? routePath.slice(1) : routePath;
    
    // Check for page.tsx or page.js in the route directory
    const possibleFiles = [
      path.join(process.cwd(), 'app', cleanPath, 'page.tsx'),
      path.join(process.cwd(), 'app', cleanPath, 'page.js'),
      path.join(process.cwd(), 'app', cleanPath, 'index.tsx'),
      path.join(process.cwd(), 'app', cleanPath, 'index.js'),
    ];
    
    return possibleFiles.some(filePath => fs.existsSync(filePath));
  } catch (error) {
    console.error(`Error checking route ${routePath}:`, error);
    return false;
  }
};

export default function sitemap(): MetadataRoute.Sitemap {
  try {
    const baseUrl = 'https://www.goediptv.store';
    const currentDate = new Date();
    const formattedDate = formatDate(currentDate);

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
      '/voordelen-van-iptv',
      '/wat-is-iptv',
      '/is-iptv-legaal',
    ].filter(route => route === '' || routeExists(route));

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
    ].filter(route => routeExists(route));

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
    ].filter(route => routeExists(route));

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
      // Nested device routes under /iptv-kopen
      '/iptv-kopen/android',
      '/iptv-kopen/apple-tv',
      '/iptv-kopen/epg-gids',
      '/iptv-kopen/smart-tv',
      '/iptv-kopen/sport/alle-sporten',
    ].filter(route => routeExists(route));

    // Use case specific pages
    const useCaseRoutes = [
      '/iptv-voor-buitenland',
      '/iptv-voor-eredivisie',
      '/iptv-voor-formule-1',
      '/iptv-voor-horeca',
      '/iptv-voor-op-vakantie',
      '/iptv-voor-ouderen',
      '/iptv-voor-zakelijk-gebruik',
    ].filter(route => routeExists(route));

    // Dutch IPTV specific pages
    const dutchIptvRoutes = [
      '/dutch-iptv/24-uurs-proefperiode',
      '/dutch-iptv/abonnement-kopen',
      '/goed-iptv/beste-aanbieder',
      '/goed-iptv/ervaringen',
    ].filter(route => routeExists(route));

    // Legal pages
    const legalRoutes = [
      '/privacy-policy',
      '/refund-policy',
      '/terms-of-service',
    ].filter(route => routeExists(route));

    // City pages
    const cities = [
      'almere', 'amersfoort', 'amsterdam', 'arnhem', 'breda', 'den-haag',
      'eindhoven', 'enschede', 'groningen', 'haarlem', 'nijmegen',
      'rotterdam', 'tilburg', 'utrecht', 'zaanstad'
    ].filter(city => routeExists(`/iptv-in-${city}`));

    // Generate city pages
    const cityPages = cities.map(city => ({
      url: `${baseUrl}/iptv-in-${city}`,
      lastModified: formattedDate,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    }));

    // Generate routes with appropriate priorities and handle nested routes
    const generateRoutes = (routes: string[], priority: number) => {
      const processedRoutes = new Set<string>();
      const result: Array<{
        url: string;
        lastModified: string;
        changeFrequency: 'daily' | 'weekly' | 'monthly' | 'yearly' | 'always' | 'hourly' | 'never';
        priority: number;
      }> = [];
      
      const processRoute = (route: string, routePriority: number) => {
        if (!route || processedRoutes.has(route)) return;
        
        try {
          // Ensure the route starts with a slash
          const cleanRoute = route.startsWith('/') ? route : `/${route}`;
          // Remove any trailing slashes
          const normalizedRoute = cleanRoute.replace(/\/+$/, '');
          
          // Skip invalid URLs
          if (!normalizedRoute || normalizedRoute === '/') {
            return;
          }
          
          // Check if this route exists
          if (routeExists(normalizedRoute)) {
            processedRoutes.add(normalizedRoute);
            result.push({
              url: `${baseUrl}${normalizedRoute}`,
              lastModified: formattedDate,
              changeFrequency: 'weekly' as const,
              priority: routePriority,
            });
          }
        } catch (error) {
          console.error(`Error processing route ${route}:`, error);
        }
      };
      
      // Process all routes
      routes.forEach(route => processRoute(route, priority));
      
      return result;
    };

    // Combine all routes
    const allRoutes = [
      // Always include the homepage
      {
        url: baseUrl,
        lastModified: formattedDate,
        changeFrequency: 'daily' as const,
        priority: 1.0,
      },
      ...generateRoutes(highPriorityRoutes.filter(r => r !== ''), 1.0),
      ...generateRoutes(mediumPriorityRoutes, 0.8),
      ...generateRoutes(featureRoutes, 0.7),
      ...generateRoutes(deviceRoutes, 0.7),
      ...generateRoutes(useCaseRoutes, 0.7),
      ...generateRoutes(dutchIptvRoutes, 0.7),
      ...generateRoutes(legalRoutes, 0.3),
      ...cityPages
    ];

    // Remove any potential duplicates and invalid entries
    const uniqueRoutes = Array.from(
      new Map(
        allRoutes
          .filter(route => route && route.url && route.url.startsWith(baseUrl))
          .map(route => [route.url, route])
      ).values()
    );

    console.log(`Generated sitemap with ${uniqueRoutes.length} valid URLs`);
    
    return uniqueRoutes;
  } catch (error) {
    console.error('Error generating sitemap:', error);
    // Return a minimal sitemap with just the homepage if there's an error
    return [{
      url: 'https://www.goediptv.store',
      lastModified: new Date().toISOString().split('T')[0],
      changeFrequency: 'daily',
      priority: 1,
    }];
  }
}
