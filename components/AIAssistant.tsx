'use client';
import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Loader2, Sparkles } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

interface AIAssistantProps {
  isOpen?: boolean;
  onToggle?: (open: boolean) => void;
}

const AIAssistant: React.FC<AIAssistantProps> = ({ isOpen: externalIsOpen, onToggle }) => {
  const { isDarkMode } = useTheme();
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  
  // Use external control if provided, otherwise use internal state
  const isOpen = externalIsOpen !== undefined ? externalIsOpen : internalIsOpen;
  const setIsOpen = (open: boolean) => {
    if (onToggle) {
      onToggle(open);
    } else {
      setInternalIsOpen(open);
    }
  };
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "Namaste! 🙏 I'm your Ngimalaya Adventure AI assistant. I can help you find the perfect trek, answer questions about Nepal, or assist with planning your adventure. How can I help you today?",
      timestamp: new Date(),
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Prevent body scroll on mobile when chat is open
  useEffect(() => {
    if (isOpen) {
      // Only apply on mobile screens
      if (window.innerWidth < 768) {
        document.body.classList.add('modal-open');
      }
    } else {
      document.body.classList.remove('modal-open');
    }

    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      role: 'user',
      content: input.trim(),
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/ai-chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [...messages, userMessage],
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const data = await response.json();

      const assistantMessage: Message = {
        role: 'assistant',
        content: data.message,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error:', error);
      const errorMessage: Message = {
        role: 'assistant',
        content: "I apologize, but I'm having trouble connecting right now. Please try again or contact us directly at +977 980-3499156 or ngiman81@gmail.com.",
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const quickQuestions = [
    "What treks are best for beginners?",
    "When is the best time to trek in Nepal?",
    "How do I prepare for high altitude?",
    "What's included in your packages?",
  ];

  const handleQuickQuestion = (question: string) => {
    setInput(question);
    inputRef.current?.focus();
  };

  return (
    <>
      {/* Floating Chat Button - Hidden on mobile, shown on desktop */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="hidden md:flex fixed bottom-6 right-6 z-50 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white rounded-full p-4 shadow-2xl transition-all duration-300 transform hover:scale-110 items-center gap-2 group"
          aria-label="Open AI Assistant"
        >
          <Sparkles className="w-6 h-6 animate-pulse" />
          <MessageCircle className="w-6 h-6" />
          <span className="hidden group-hover:inline-block text-sm font-semibold whitespace-nowrap pr-2">
            Ask AI Assistant
          </span>
        </button>
      )}

      {/* Full Screen Overlay for Mobile */}
      {isOpen && (
        <>
          {/* Backdrop - only visible on mobile */}
          <div 
            className="fixed inset-0 bg-black/50 z-[100] md:hidden backdrop-fade-in"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
          
          {/* Chat Window - Full screen on mobile, floating on desktop */}
          <div className={`ai-chat-mobile-modal fixed inset-0 md:inset-auto md:bottom-6 md:right-6 z-[101] w-full md:w-[380px] md:h-[600px] md:max-h-[calc(100vh-2rem)] md:rounded-2xl shadow-2xl flex flex-col transition-transform duration-300 ease-out overflow-hidden ${
            isDarkMode ? 'bg-gray-800 border-0 md:border md:border-gray-700' : 'bg-white border-0 md:border md:border-gray-200'
          }`}>
          {/* Header */}
          <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white p-3 md:p-4 md:rounded-t-2xl flex items-center justify-between flex-shrink-0 min-w-0">
            <div className="flex items-center gap-2 md:gap-3 min-w-0 flex-1">
              <Sparkles className="w-4 h-4 md:w-5 md:h-5 animate-pulse flex-shrink-0" />
              <div className="min-w-0 flex-1">
                <h3 className="font-bold text-base md:text-lg truncate">AI Trek Assistant</h3>
                <p className="text-xs text-green-100">Powered by Google Gemini</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/20 rounded-full p-1.5 md:p-2 transition-colors flex-shrink-0 ml-2"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className={`flex-1 overflow-y-auto overflow-x-hidden p-3 md:p-4 space-y-4 ${
            isDarkMode ? 'bg-gray-900' : 'bg-gray-50'
          }`}>
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                    message.role === 'user'
                      ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white'
                      : isDarkMode
                      ? 'bg-gray-800 text-gray-100'
                      : 'bg-white text-gray-900 shadow-sm'
                  }`}
                >
                  <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
                  <p className={`text-xs mt-1 ${
                    message.role === 'user' ? 'text-green-100' : isDarkMode ? 'text-gray-500' : 'text-gray-400'
                  }`}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className={`rounded-2xl px-4 py-3 ${
                  isDarkMode ? 'bg-gray-800' : 'bg-white shadow-sm'
                }`}>
                  <Loader2 className="w-5 h-5 animate-spin text-blue-500" />
                </div>
              </div>
            )}

            {/* Quick Questions (show when chat is empty) */}
            {messages.length === 1 && !isLoading && (
              <div className="space-y-2 pt-4">
                <p className={`text-xs font-semibold ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Quick questions:
                </p>
                {quickQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickQuestion(question)}
                    className={`w-full text-left text-xs px-3 py-2 rounded-lg transition-colors ${
                      isDarkMode
                        ? 'bg-gray-800 hover:bg-gray-700 text-gray-300'
                        : 'bg-white hover:bg-gray-100 text-gray-700 shadow-sm'
                    }`}
                  >
                    {question}
                  </button>
                ))}
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className={`p-3 md:p-4 border-t flex-shrink-0 ${
            isDarkMode ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-white'
          } md:rounded-b-2xl`}>
            <div className="flex gap-2 w-full min-w-0">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me anything about trekking..."
                disabled={isLoading}
                className={`flex-1 min-w-0 px-3 md:px-4 py-2 rounded-full border transition-colors text-sm md:text-base ${
                  isDarkMode
                    ? 'bg-gray-900 border-gray-700 text-white placeholder-gray-500 focus:border-blue-500'
                    : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-400 focus:border-blue-500'
                } focus:outline-none focus:ring-2 focus:ring-blue-500/20 disabled:opacity-50`}
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 disabled:from-gray-400 disabled:to-gray-500 text-white rounded-full p-2 md:p-2.5 transition-all duration-200 disabled:cursor-not-allowed flex-shrink-0"
                aria-label="Send message"
              >
                <Send className="w-4 h-4 md:w-5 md:h-5" />
              </button>
            </div>
            <p className={`text-xs mt-2 text-center ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>
              Powered by AI • May occasionally make mistakes
            </p>
          </form>
        </div>
        </>
      )}
    </>
  );
};

export default AIAssistant;
