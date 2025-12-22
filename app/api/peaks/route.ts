import { NextResponse } from 'next/server';
import { fetchPeaksWithFallback } from '@/lib/storyblok-fetch-with-fallback';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const peaks = await fetchPeaksWithFallback();
    return NextResponse.json(peaks);
  } catch (error) {
    console.error('Error in /api/peaks:', error);
    return NextResponse.json([], { status: 500 });
  }
}
