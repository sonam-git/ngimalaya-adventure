# AI Assistant Setup Guide

## 🤖 Google Gemini AI Assistant

Your website now has a beautiful AI-powered chat assistant that can help visitors with trek recommendations, answer questions, and provide information 24/7!

## 📋 Setup Steps

### 1. Get Your Free Google Gemini API Key

1. Go to [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Sign in with your Google account (Gmail)
3. Click **"Get API Key"** or **"Create API Key"**
4. Click **"Create API key in new project"**
5. Copy your API key (starts with `AIza...`)

**Note:** No credit card required! The free tier includes 1,500 requests per day.

### 2. Add API Key to Your Project

1. Create a file named `.env.local` in your project root (if it doesn't exist)
2. Add this line to the file:

```
GOOGLE_GEMINI_API_KEY=YOUR_API_KEY_HERE
```

Replace `YOUR_API_KEY_HERE` with the API key you copied.

### 3. Restart Your Development Server

```bash
# Stop your current server (Ctrl+C)
# Then restart:
npm run dev
```

## ✨ Features

### What the AI Assistant Can Do:

- **Trek Recommendations**: Suggests treks based on user preferences, fitness level, and available time
- **Answer Questions**: Provides information about Nepal, trekking seasons, altitude, gear, permits
- **Trip Planning**: Helps visitors plan their entire Nepal adventure
- **24/7 Availability**: Always ready to assist, even when you're offline
- **Multi-lingual Capable**: Can understand and respond in multiple languages
- **Context-Aware**: Remembers the conversation context

### Smart Features:

- ✅ Floating chat button (bottom right)
- ✅ Beautiful gradient design (green to blue)
- ✅ Dark mode support
- ✅ Quick question buttons
- ✅ Typing indicators
- ✅ Message timestamps
- ✅ Mobile responsive
- ✅ Smooth animations

## 🎨 Customization

### Want to change the AI's personality?

Edit the system context in `/app/api/ai-chat/route.ts` (lines 22-43)

### Want to change the colors?

Edit `/components/AIAssistant.tsx` - look for `from-green-500 to-blue-500`

### Want to change the position?

Edit the `fixed bottom-6 right-6` classes in `/components/AIAssistant.tsx`

## 💰 Pricing

### Free Tier (Current):
- ✅ 1,500 requests per day
- ✅ 15 requests per minute
- ✅ **Forever free** - not a trial!

### If You Ever Exceed Free Tier:
- 💵 ~$0.0001 per conversation
- 💵 Even 10,000 conversations = ~$1
- You'll be notified before any charges

## 🔒 Security

Your API key is:
- ✅ Stored securely in `.env.local`
- ✅ Never exposed to the browser
- ✅ Only used on the server
- ✅ Not committed to GitHub (`.env.local` is in `.gitignore`)

## 📊 Monitoring Usage

To check your usage:
1. Go to [Google AI Studio](https://aistudio.google.com/)
2. Click on your project
3. View usage statistics

## 🐛 Troubleshooting

### AI Not Responding?

1. Check that `.env.local` exists and has your API key
2. Restart your development server
3. Check browser console for errors
4. Verify API key is valid at [Google AI Studio](https://aistudio.google.com/)

### Getting API Errors?

- Make sure API key starts with `AIza`
- Check you haven't exceeded free tier limits (1,500/day)
- Wait a few minutes and try again

### Chat Button Not Showing?

- Clear browser cache
- Make sure JavaScript is enabled
- Check browser console for errors

## 🚀 Going Live

When deploying to production (Vercel, Netlify, etc.):

1. Add the environment variable in your hosting platform's dashboard:
   - Variable name: `GOOGLE_GEMINI_API_KEY`
   - Value: Your API key

### For Vercel:
1. Go to your project dashboard
2. Settings → Environment Variables
3. Add `GOOGLE_GEMINI_API_KEY`
4. Redeploy

### For Netlify:
1. Site settings → Environment variables
2. Add `GOOGLE_GEMINI_API_KEY`
3. Redeploy

## 📧 Support

If you need help:
- Check the troubleshooting section above
- Contact Google AI support for API issues
- Modify the AI's responses in `/app/api/ai-chat/route.ts`

## 🎉 You're All Set!

Your AI assistant is ready to help your visitors plan amazing treks in Nepal!

**Next steps:**
1. Get your API key from Google AI Studio
2. Add it to `.env.local`
3. Restart your server
4. Test the chat!

Namaste! 🙏
