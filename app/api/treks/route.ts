import { NextResponse } from 'next/server';
import { fetchTreksWithFallback } from '@/lib/storyblok-fetch-with-fallback';

export async function GET() {
  try {
    const treks = await fetchTreksWithFallback();
    return NextResponse.json(treks);
  } catch (error) {
    console.error('Error in /api/treks:', error);
    return NextResponse.json([], { status: 500 });
  }
}
