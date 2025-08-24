import { NextResponse } from 'next/server';
import { MetadataRoute } from 'next';

// Function to convert sitemap entries to XML string
function generateSitemapXml(entries: Array<{ url: string; lastModified?: string | Date; changeFrequency?: string; priority?: number }>): string {
  const urlset = entries.map(entry => {
    const url = [
      '<url>',
      `<loc>${entry.url}</loc>`,
      entry.lastModified ? `<lastmod>${new Date(entry.lastModified).toISOString()}</lastmod>` : '',
      entry.changeFrequency ? `<changefreq>${entry.changeFrequency}</changefreq>` : '',
      entry.priority ? `<priority>${entry.priority}</priority>` : '',
      '</url>'
    ].filter(Boolean).join('');
    return url;
  }).join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urlset}
    </urlset>`;
}

// Import the sitemap function from the original file
import sitemapFunction from '../sitemap';

export async function GET() {
  try {
    const entries = sitemapFunction();
    const xml = generateSitemapXml(entries);
    
    return new NextResponse(xml, {
      status: 200,
      headers: {
        'Content-Type': 'application/xml; charset=utf-8',
        'x-content-type-options': 'nosniff',
        'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=3600'
      }
    });
  } catch (error) {
    console.error('Error generating sitemap:', error);
    return new NextResponse('Error generating sitemap', { status: 500 });
  }
}

export const dynamic = 'force-dynamic';
