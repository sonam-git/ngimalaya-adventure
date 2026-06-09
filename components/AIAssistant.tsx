'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
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
  const [mounted, setMounted] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const isOpen = externalIsOpen !== undefined ? externalIsOpen : internalIsOpen;
  const setIsOpen = useCallback((open: boolean) => {
    if (onToggle) {
      onToggle(open);
    } else {
      setInternalIsOpen(open);
    }
  }, [onToggle]);

  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "Namaste! I'm your Ngimalaya Adventure AI assistant. I can help you find the right trek, answer Nepal travel questions, and assist with trip planning. How can I help you today?",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setMounted(true);
    const handleResize = () => {
      const width = window.innerWidth;
      setIsDesktop(width >= 768);
      setIsMobile(width < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current && isDesktop) {
      inputRef.current.focus();
    }
  }, [isOpen, isDesktop]);

  useEffect(() => {
    if (!mounted) return;

    if (isOpen && isMobile) {
      document.body.classList.add('modal-open');
      document.documentElement.classList.add('modal-open');

      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.maxWidth = '100vw';
      document.body.style.overflowX = 'hidden';

      return () => {
        document.body.classList.remove('modal-open');
        document.documentElement.classList.remove('modal-open');
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.maxWidth = '';
        document.body.style.overflowX = '';
        window.scrollTo(0, scrollY);
      };
    }
  }, [isOpen, isMobile, mounted]);

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
      console.error('AI chat error:', error);
      const errorMessage: Message = {
        role: 'assistant',
        content: 'I am having trouble connecting right now. Please try again or contact us directly at +977 980-3499156 or ngiman81@gmail.com.',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const quickQuestions = [
    'What treks are best for beginners?',
    'When is the best time to trek in Nepal?',
    'How do I prepare for high altitude?',
    "What is included in your packages?",
  ];

  const handleQuickQuestion = (question: string) => {
    setInput(question);
    inputRef.current?.focus();
  };

  if (!mounted) return null;

  return (
    <>
      {!isOpen && isDesktop && (
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 group bg-gradient-to-br from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white rounded-full p-4 shadow-2xl transition-all duration-300 transform hover:scale-110"
          aria-label="Open AI Assistant"
          style={{
            position: 'fixed',
            bottom: '16px',
            right: '16px',
            zIndex: 999999,
          }}
        >
          <Sparkles className="w-6 h-6 animate-pulse" />
          <MessageCircle className="w-6 h-6" />
          <span className="hidden lg:group-hover:inline-block text-sm font-semibold whitespace-nowrap pr-2">
            Ngimalaya AI Assistant
          </span>
        </button>
      )}

      {isOpen && (
        <div
          className={`fixed inset-x-4 bottom-4 mx-auto max-w-[420px] h-[calc(100vh-120px)] max-h-[620px] z-[999999] rounded-2xl shadow-2xl flex flex-col overflow-hidden ${
            isDarkMode ? 'bg-gray-900' : 'bg-white'
          } ${isMobile ? 'bottom-[82px] h-[calc(100vh-150px)]' : ''}`}
          style={
            isMobile
              ? {
                  maxWidth: 'calc(100vw - 2rem)',
                  width: 'calc(100vw - 2rem)',
                  left: '1rem',
                  right: '1rem',
                  marginLeft: '0',
                  marginRight: '0',
                }
              : undefined
          }
        >
          <div className="bg-gradient-to-r from-green-400 via-teal-400 to-blue-500 text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Sparkles className="w-6 h-6 animate-pulse" />
              <div>
                <h3 className={`font-bold text-base ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>
                  Ngimalaya AI Assistant
                </h3>
                <p className={`text-xs ${isDarkMode ? 'text-gray-100' : 'text-gray-500'}`}>
                  Powered by Google Gemini
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/20 rounded-full p-1.5 transition-all duration-300"
              aria-label="Close chat"
            >
              <X className={`w-5 h-5 ${isDarkMode ? 'text-white' : 'text-gray-800'}`} />
            </button>
          </div>

          <div
            className={`flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b ${
              isDarkMode ? 'from-gray-800 to-gray-900' : 'from-gray-50 to-white'
            }`}
          >
            {messages.map((message, index) => (
              <div key={index} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 ${
                    message.role === 'user'
                      ? isDarkMode
                        ? 'bg-gradient-to-r from-blue-500 to-teal-500 text-white shadow-lg'
                        : 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg'
                      : isDarkMode
                      ? 'bg-gray-700 text-gray-100 shadow-md border border-gray-600'
                      : 'bg-white text-gray-900 shadow-md border border-gray-200'
                  }`}
                >
                  <p
                    className={`text-sm leading-relaxed whitespace-pre-wrap ${
                      message.role === 'user' ? 'text-white' : isDarkMode ? 'text-gray-100' : 'text-gray-900'
                    }`}
                  >
                    {message.content}
                  </p>
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className={`rounded-2xl px-4 py-3 shadow-md border ${isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-200'}`}>
                  <div className="flex items-center gap-2">
                    <Loader2 className={`w-5 h-5 animate-spin ${isDarkMode ? 'text-teal-500' : 'text-green-500'}`} />
                    <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Thinking...</span>
                  </div>
                </div>
              </div>
            )}

            {messages.length === 1 && !isLoading && (
              <div className="space-y-2 pt-4">
                <p className={`text-xs font-semibold uppercase tracking-wide ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Quick questions:
                </p>
                {quickQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickQuestion(question)}
                    className={`w-full text-left text-xs px-4 py-2.5 rounded-xl transition-all shadow-md border ${
                      isDarkMode
                        ? 'bg-gray-700 hover:bg-gray-600 text-white border-gray-600 hover:border-teal-400'
                        : 'bg-white hover:bg-gray-50 text-gray-700 border-gray-200 hover:border-green-400'
                    }`}
                  >
                    {question}
                  </button>
                ))}
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSubmit} className={`p-4 border-t ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
            <div className="flex gap-2 items-center w-full">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about treks, Nepal, or planning..."
                disabled={isLoading}
                className={`flex-1 min-w-0 px-4 py-3 rounded-full border-2 transition-all focus:outline-none focus:ring-2 disabled:opacity-50 ${
                  isDarkMode
                    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-teal-500 focus:ring-teal-500/20'
                    : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-green-400 focus:ring-green-500/20'
                }`}
                style={isMobile ? { fontSize: '16px' } : undefined}
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className={`rounded-full p-3 transition-all duration-200 disabled:cursor-not-allowed shadow-lg ${
                  isDarkMode
                    ? 'bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 disabled:from-gray-600 disabled:to-gray-700'
                    : 'bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 disabled:from-gray-400 disabled:to-gray-500'
                } text-white`}
                aria-label="Send message"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default AIAssistant;
