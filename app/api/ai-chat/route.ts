import { NextRequest, NextResponse } from 'next/server';

interface Message {
  role: string;
  content: string;
}

export async function POST(request: NextRequest) {
  try {
    const { messages } = await request.json();

    const apiKey = process.env.GOOGLE_GEMINI_API_KEY;

    if (!apiKey) {
      return NextResponse.json({
        message: "The AI assistant is not configured yet. Please contact us directly at +977 980-3499156 or ngiman81@gmail.com for assistance."
      });
    }

    const systemContext = `You are an AI assistant for Ngimalaya Adventure, a premier trekking company in Nepal run by experienced guide Ngima Sherpa. 

KEY INFORMATION:
- Contact: +977 980-3499156, ngiman81@gmail.com
- Specializes in: Trekking, Peak Expeditions, Safari tours in Nepal
- Popular treks: Everest Base Camp, Annapurna Circuit, Langtang Valley, Manaslu Circuit
- Peak expeditions: Island Peak, Mera Peak, Lobuche East
- Safari: Chitwan National Park, Bardia National Park
- Best trekking seasons: Spring (March-May) and Autumn (September-November)
- All packages include: Professional guides, permits, accommodation, meals during trek
- Minimum group size: 1 person (solo trekkers welcome)
- Custom trek planning available

YOUR ROLE:
- Help visitors find suitable treks based on their fitness level, time, and interests
- Answer questions about Nepal trekking, altitude, preparation, gear
- Provide information about costs, what's included, best times to visit
- Be friendly, knowledgeable, and encouraging
- If unsure about specific pricing or availability, suggest contacting directly
- Always prioritize safety and proper acclimatization advice
- Keep responses concise (2-3 paragraphs max)

TONE: Friendly, knowledgeable, encouraging. Use some Nepali words like "Namaste" occasionally.`;

    const lastUserMessage = messages[messages.length - 1].content;

    const conversationHistory = messages
      .slice(-6, -1)
      .map((msg: Message) => `${msg.role === 'user' ? 'User' : 'Assistant'}: ${msg.content}`)
      .join('\n');

    const fullPrompt = conversationHistory
      ? `${systemContext}\n\nPrevious conversation:\n${conversationHistory}\n\nUser: ${lastUserMessage}\n\nAssistant:`
      : `${systemContext}\n\nUser: ${lastUserMessage}\n\nAssistant:`;

    // Call Google Gemini API with correct model and retry logic
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;

    let response: Response | undefined;
    const retries = 2;
    
    for (let i = 0; i <= retries; i++) {
      response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: fullPrompt
            }]
          }],
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 500,
            topP: 0.95,
            topK: 40,
          },
        }),
      });

      if (response.ok) {
        break; // Success, exit retry loop
      }

      // If overloaded (503) and we have retries left, wait and try again
      if (response.status === 503 && i < retries) {
        await new Promise(resolve => setTimeout(resolve, 1000 * (i + 1))); // Exponential backoff
        continue;
      }

      // If other error or out of retries, handle error
      if (!response.ok) {
        const errorData = await response.json();
        console.error('Gemini API error:', errorData);
        
        if (response.status === 503) {
          return NextResponse.json({
            message: "The AI is currently experiencing high traffic. Please try again in a moment, or contact us directly at +977 980-3499156 or ngiman81@gmail.com."
          });
        }
        
        return NextResponse.json({
          message: "I'm having trouble connecting right now. Please contact us directly at +977 980-3499156 or ngiman81@gmail.com."
        });
      }
    }

    if (!response) {
      return NextResponse.json({
        message: "Unable to connect to AI service. Please try again or contact us at +977 980-3499156."
      });
    }

    const data = await response.json();
    const aiResponse = data.candidates?.[0]?.content?.parts?.[0]?.text || 
      "I'm sorry, I couldn't generate a response. Please contact us directly for assistance.";

    return NextResponse.json({
      message: aiResponse.trim()
    });

  } catch (error) {
    console.error('Error in AI chat:', error);
    return NextResponse.json({
      message: "An error occurred. Please contact us at +977 980-3499156 or ngiman81@gmail.com for assistance."
    });
  }
}
