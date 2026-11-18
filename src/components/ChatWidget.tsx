import React, { useState, useRef, useEffect } from 'react';
import {
  MessageSquare,
  X,
  Home,
  Send,
  ArrowRight,
  RotateCcw,
} from 'lucide-react';
import {
  CHAT_QUICK_TOPICS,
  generatePetikChatReply,
} from '../utils/chatAssistant';
import heroCorporateImg from '../assets/images/hero_corporate_architecture_1794501667645.jpg';

interface ChatMessage {
  id: string;
  sender: 'user' | 'desk';
  text: string;
  suggestedSector?: string;
  actionLabel?: string;
}

interface ChatWidgetProps {
  onOpenEnquiry: (prefilledSector?: string) => void;
}

type WidgetTab = 'home' | 'chat';

const INITIAL_MESSAGE: ChatMessage = {
  id: 'welcome-msg',
  sender: 'desk',
  text: 'Welcome to Petik Limited. Ask us about our Construction & Project Management, Real Estate Advisory, Renewable Energy, Downstream Logistics, or Amarisa Court Shortlets.',
};

export const ChatWidget: React.FC<ChatWidgetProps> = ({ onOpenEnquiry }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<WidgetTab>('home');
  const [messages, setMessages] = useState<ChatMessage[]>([INITIAL_MESSAGE]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && activeTab === 'chat') {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 120);
      return () => clearTimeout(timer);
    }
  }, [isOpen, activeTab, messages.length]);

  const sendMessage = (rawText: string) => {
    const trimmed = rawText.trim();
    if (!trimmed) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: trimmed,
    };

    const reply = generatePetikChatReply(trimmed);
    const deskMsg: ChatMessage = {
      id: `desk-${Date.now() + 1}`,
      sender: 'desk',
      text: reply.text,
      suggestedSector: reply.suggestedSector,
      actionLabel: reply.actionLabel,
    };

    setMessages((prev) => [...prev, userMsg, deskMsg]);
    setInputValue('');
    setActiveTab('chat');
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(inputValue);
  };

  const handleResetChat = () => {
    setMessages([INITIAL_MESSAGE]);
    setInputValue('');
  };

  const handleHandoffToEnquiry = (sector?: string) => {
    setIsOpen(false);
    onOpenEnquiry(sector);
  };

  return (
    <div className="relative inline-flex flex-col items-end">
      {/* Expanded Chat Widget Panel */}
      {isOpen && (
        <div
          role="dialog"
          aria-label="Petik Limited Chat Widget"
          className="absolute bottom-full right-0 mb-3 z-50 w-[calc(100vw-2rem)] max-w-[340px] sm:max-w-none sm:w-[360px] h-[min(365px,calc(100dvh-11rem))] sm:h-[min(470px,calc(100dvh-11rem))] rounded-2xl bg-white shadow-2xl border border-[#EDEFF1] overflow-hidden flex flex-col"
        >
          {activeTab === 'home' ? (
            /* HOME TAB */
            <div className="flex-1 min-h-0 overflow-y-auto bg-[#F8F8F5]">
              {/* Dark Branded Header Banner */}
              <div className="relative bg-[#102B46] text-white px-4 py-2.5 pb-6 sm:px-5 sm:pt-3.5 sm:pb-8 overflow-hidden">
                <img
                  src={heroCorporateImg}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 w-full h-full object-cover opacity-25"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#102B46]/90 via-[#102B46]/85 to-[#102B46]" />

                <div className="relative z-10">
                  {/* Top Bar: Petik Emblem + Close */}
                  <div className="flex items-center justify-between mb-2 sm:mb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#a17d2c] flex items-center justify-center font-display font-extrabold text-white text-xs sm:text-sm shadow-sm">
                        P
                      </div>
                      <div>
                        <span className="font-display font-bold text-xs tracking-wider text-white block leading-tight">
                          PETIK
                        </span>
                        <span className="text-[10px] sm:text-[11px] text-slate-300 block leading-tight">
                          Client Desk
                        </span>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => setIsOpen(false)}
                      aria-label="Minimize chat widget"
                      className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Greeting */}
                  <h2 className="font-display text-lg sm:text-xl font-extrabold text-[#d4ad56] tracking-tight mb-0.5 sm:mb-1">
                    Hi there 👋
                  </h2>
                  <p className="text-[11px] sm:text-xs text-slate-200 leading-snug max-w-[270px]">
                    Welcome to Petik Limited. Ask us anything about our projects and services.
                  </p>
                </div>
              </div>

              {/* Overlapping Action Card + Quick Topics */}
              <div className="px-3 -mt-4 pb-1.5 sm:px-3.5 sm:-mt-5 sm:pb-2.5 space-y-1.5 sm:space-y-2 relative z-10">
                <button
                  type="button"
                  onClick={() => setActiveTab('chat')}
                  className="w-full bg-white hover:bg-slate-50 rounded-xl p-2.5 sm:p-3 shadow-md border border-[#EDEFF1] flex items-center justify-between text-left transition-all group"
                >
                  <div>
                    <span className="font-display font-bold text-xs sm:text-sm text-[#102B46] block">
                      Chat with us
                    </span>
                    <span className="text-[10px] sm:text-[11px] text-slate-500">
                      Get immediate answers from our client desk
                    </span>
                  </div>
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#F8F8F5] group-hover:bg-[#a17d2c]/15 flex items-center justify-center shrink-0 transition-colors">
                    <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#a17d2c]" />
                  </div>
                </button>

                {/* Quick Division Topics */}
                <div className="bg-white rounded-xl p-2 sm:p-2.5 border border-[#EDEFF1] shadow-sm space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block px-0.5 sm:px-1">
                    Popular Enquiries
                  </span>
                  <div className="flex flex-wrap gap-1.5 sm:block sm:space-y-1">
                    {CHAT_QUICK_TOPICS.slice(0, 3).map((topic) => (
                      <button
                        key={topic.id}
                        type="button"
                        onClick={() => sendMessage(topic.prompt)}
                        className="px-2.5 py-1 sm:py-1.5 sm:w-full text-left rounded-lg bg-[#F8F8F5] hover:bg-[#EDEFF1] text-[11px] sm:text-xs font-medium text-[#102B46] inline-flex sm:flex items-center justify-between gap-1.5 sm:gap-2 transition-colors group"
                      >
                        <span>{topic.label}</span>
                        <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#a17d2c] transition-transform group-hover:translate-x-0.5 shrink-0" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* CHAT TAB */
            <div className="flex-1 min-h-0 flex flex-col">
              {/* Compact Chat Header */}
              <div className="bg-[#102B46] text-white px-3.5 py-2.5 sm:px-4 sm:py-3 flex items-center justify-between border-b border-white/10 shrink-0">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#a17d2c] flex items-center justify-center font-display font-bold text-white text-xs sm:text-sm">
                    P
                  </div>
                  <div>
                    <h2 className="font-display font-bold text-xs sm:text-sm text-white leading-tight">
                      Petik Client Desk
                    </h2>
                    <p className="text-[10px] sm:text-[11px] text-slate-300 leading-tight">
                      Mon–Fri · 8:00 AM – 5:00 PM (WAT)
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={handleResetChat}
                    title="Reset conversation"
                    aria-label="Reset conversation"
                    className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    aria-label="Close chat widget"
                    className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Conversation Thread */}
              <div className="flex-1 min-h-0 overflow-y-auto p-3 sm:p-3.5 space-y-2.5 bg-[#F8F8F5]">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex flex-col ${
                      msg.sender === 'user' ? 'items-end' : 'items-start'
                    }`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-3 py-2 sm:px-3.5 sm:py-2.5 text-xs sm:text-[13px] leading-relaxed shadow-xs ${
                        msg.sender === 'user'
                          ? 'bg-[#102B46] text-white rounded-br-sm'
                          : 'bg-white text-[#252B32] border border-[#EDEFF1] rounded-bl-sm'
                      }`}
                    >
                      <p>{msg.text}</p>
                      {msg.actionLabel && (
                        <button
                          type="button"
                          onClick={() => handleHandoffToEnquiry(msg.suggestedSector)}
                          className="mt-2 inline-flex items-center gap-1.5 text-left text-[11px] font-semibold uppercase tracking-wider text-[#a17d2c] hover:text-[#8f6e24] transition-colors"
                        >
                          <span>{msg.actionLabel}</span>
                          <ArrowRight className="w-3 h-3 shrink-0" />
                        </button>
                      )}
                    </div>
                  </div>
                ))}

                {/* Quick Topic Chips on First Turn */}
                {messages.length === 1 && (
                  <div className="pt-1 flex flex-wrap gap-1.5">
                    {CHAT_QUICK_TOPICS.map((topic) => (
                      <button
                        key={topic.id}
                        type="button"
                        onClick={() => sendMessage(topic.prompt)}
                        className="px-2.5 py-1 rounded-lg bg-white hover:bg-[#102B46] hover:text-white border border-[#EDEFF1] text-[11px] font-medium text-[#102B46] transition-colors shadow-xs"
                      >
                        {topic.label}
                      </button>
                    ))}
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Composer Input */}
              <form
                onSubmit={handleFormSubmit}
                className="p-2 sm:p-2.5 bg-white border-t border-[#EDEFF1] flex items-center gap-2 shrink-0"
              >
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Write a message..."
                  aria-label="Write a chat message"
                  className="flex-1 px-3 py-1.5 sm:py-2 rounded-lg bg-[#F8F8F5] border border-[#EDEFF1] text-xs sm:text-sm text-[#252B32] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#102B46]"
                />
                <button
                  type="submit"
                  aria-label="Send message"
                  disabled={!inputValue.trim()}
                  className="p-2 rounded-lg bg-[#102B46] hover:bg-[#163B59] disabled:opacity-40 text-[#a17d2c] transition-colors shrink-0"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          )}

          {/* Bottom Tab Navigation (Home / Chat) */}
          <div className="bg-white border-t border-[#EDEFF1] grid grid-cols-2 shrink-0">
            <button
              type="button"
              onClick={() => setActiveTab('home')}
              className={`py-1.5 sm:py-2 flex flex-col items-center justify-center gap-0.5 text-[11px] font-semibold transition-colors ${
                activeTab === 'home'
                  ? 'text-[#a17d2c]'
                  : 'text-slate-500 hover:text-[#102B46]'
              }`}
            >
              <Home className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>Home</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('chat')}
              className={`py-1.5 sm:py-2 flex flex-col items-center justify-center gap-0.5 text-[11px] font-semibold transition-colors ${
                activeTab === 'chat'
                  ? 'text-[#a17d2c]'
                  : 'text-slate-500 hover:text-[#102B46]'
              }`}
            >
              <MessageSquare className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>Chat</span>
            </button>
          </div>

          {/* Subtle Corporate Attribution */}
          <div className="bg-[#F8F8F5] border-t border-[#EDEFF1] py-1 px-4 text-center shrink-0">
            <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-400">
              Petik Limited Client Desk
            </span>
          </div>
        </div>
      )}

      {/* "Chat with us 👋" Label + Launcher Button */}
      <div className="flex items-center gap-2 sm:gap-2.5">
        {!isOpen && (
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="bg-white hover:bg-slate-50 text-[#102B46] px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl shadow-lg border border-[#EDEFF1] text-xs sm:text-sm font-medium flex items-center gap-1.5 transition-all duration-200 hover:shadow-xl"
          >
            <span>Chat with us</span>
            <span aria-hidden="true">👋</span>
          </button>
        )}

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Close chat widget' : 'Open chat with us'}
          className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#102B46] hover:bg-[#163B59] text-[#d4ad56] shadow-xl border border-white/15 flex items-center justify-center transition-transform duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#a17d2c]"
        >
          {isOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
          )}
        </button>
      </div>
    </div>
  );
};
