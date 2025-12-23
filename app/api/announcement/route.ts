import { NextResponse } from 'next/server';
import StoryblokClient from 'storyblok-js-client';

// Initialize Storyblok client
const Storyblok = new StoryblokClient({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN || '',
});

export interface AnnouncementData {
  image: string | null;
  alt?: string;
}

export async function GET() {
  try {
    // Fetch the announcement story from Storyblok
    const response = await Storyblok.get('cdn/stories/announcement', {
      version: 'published', // Use 'published' to only show published content
    });

    const story = response.data.story;
    
    // Check if story exists and has content
    if (!story || !story.content) {
      return NextResponse.json({ image: null });
    }

    const content = story.content;
    
    // Check if the announcement has an image
    const hasImage = content.image && content.image.filename;
    
    if (!hasImage) {
      return NextResponse.json({ image: null });
    }

    // Return the announcement data
    return NextResponse.json({
      image: content.image.filename,
      alt: content.image.alt || 'Special Announcement',
    });

  } catch (error) {
    console.error('Error fetching announcement:', error);
    // Return null image if there's an error (announcement won't show)
    return NextResponse.json({ image: null });
  }
}

// Enable revalidation every 60 seconds
export const revalidate = 60;