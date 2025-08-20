import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { MetadataRoute } from 'next';

// Re-export the sitemap function from the root sitemap
export async function GET() {
  const sitemap = await import('../../sitemap').then(mod => mod.default);
  return NextResponse.json(sitemap());
}
