import { NextResponse } from 'next/server';
import { fetchSafarisWithFallback } from '@/lib/storyblok-fetch-with-fallback';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const safaris = await fetchSafarisWithFallback();
    return NextResponse.json(safaris);
  } catch (error) {
    console.error('Error in /api/safaris:', error);
    return NextResponse.json([], { status: 500 });
  }
}
