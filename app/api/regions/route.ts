import { NextResponse } from 'next/server';
import { fetchRegionsWithFallback } from '@/lib/storyblok-fetch-with-fallback';

export const dynamic = 'force-dynamic';
export const revalidate = 0; // Disable caching

export async function GET() {
  try {
    const regions = await fetchRegionsWithFallback();
    return NextResponse.json(regions);
  } catch (error) {
    console.error('Error in /api/regions:', error);
    return NextResponse.json([], { status: 500 });
  }
}
