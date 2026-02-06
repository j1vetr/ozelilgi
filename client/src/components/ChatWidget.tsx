import { useState, useRef, useEffect, useCallback } from "react";
import { X, Send, Bot, User, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
const chatbotLogo = "/images/pre-logo-sm.png";

interface Message {
  role: "user" | "assistant";
  content: string;
}

function getSessionId(): string {
  const key = "chatbot_session_id";
  let id = sessionStorage.getItem(key);
  if (!id) {
    id = crypto.randomUUID();
    sessionStorage.setItem(key, id);
  }
  return id;
}

const WELCOME_MESSAGE: Message = {
  role: "assistant",
  content:
    "Merhaba! Ben İlgi Asistan. Okulumuz hakkında merak ettiğiniz her şeyi sorabilirsiniz.",
};

const quickQuestions = [
  "Kayıt nasıl yapılır?",
  "Hangi sınıflar var?",
  "Kampüs imkanları neler?",
  "Ücretler hakkında bilgi",
];

const BORDER_GRADIENT = "conic-gradient(from 0deg, #3B82F6, #F97316, #EAB308, #10B981, #3B82F6)";

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([WELCOME_MESSAGE]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const sessionId = useRef(getSessionId());

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpen && !hasInteracted) setShowTooltip(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, [isOpen, hasInteracted]);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
    setHasInteracted(true);
    setShowTooltip(false);
  };

  const handleSendQuestion = async (text: string) => {
    const userMsg: Message = { role: "user", content: text };
    setMessages((prev) => [...prev, userMsg]);
    setIsLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text, sessionId: sessionId.current }),
      });
      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.success ? data.reply : "Bir hata oluştu, lütfen tekrar deneyin." },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Bağlantı hatası. Lütfen tekrar deneyin veya bizi arayın: 0216 642 8 642" },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const sendMessage = async () => {
    const trimmed = input.trim();
    if (!trimmed || isLoading) return;
    setInput("");
    await handleSendQuestion(trimmed);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      <style>{`
        @keyframes chat-border-spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes chat-pulse-ring {
          0% { transform: scale(1); opacity: 0.4; }
          100% { transform: scale(1.6); opacity: 0; }
        }
      `}</style>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            data-testid="chat-panel"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 350, damping: 30 }}
            className="fixed bottom-24 right-4 z-[9999] w-[380px] max-w-[calc(100vw-2rem)] bg-white rounded-2xl flex flex-col overflow-hidden"
            style={{
              height: "min(540px, calc(100vh - 140px))",
              boxShadow: "0 12px 48px -8px rgba(0,0,0,0.18), 0 4px 16px -4px rgba(0,0,0,0.1)",
            }}
          >
            <div className="relative overflow-hidden shrink-0">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1a365d] via-[#1e40af] to-[#3b82f6]" />
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.2) 0%, transparent 40%)" }} />
              <div className="relative px-4 py-4 flex items-center gap-3">
                <div className="relative w-11 h-11 rounded-full bg-white flex items-center justify-center shrink-0 shadow-md">
                  <img src={chatbotLogo} alt="İlgi Asistan" className="w-8 h-8 object-contain" />
                  <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-green-400 rounded-full border-2 border-[#1e40af]" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <p className="text-white font-bold text-[15px] leading-tight">İlgi Asistan</p>
                    <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
                  </div>
                  <p className="text-blue-200 text-xs mt-0.5">Boğaziçi İlgi Koleji Çekmeköy</p>
                </div>
                <button
                  data-testid="button-close-chat"
                  onClick={handleToggle}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                  aria-label="Sohbeti kapat"
                >
                  <X className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3" style={{ background: "linear-gradient(180deg, #f0f4ff 0%, #f8fafc 100%)" }}>
              <AnimatePresence initial={false}>
                {messages.map((msg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25, delay: i === messages.length - 1 ? 0.05 : 0 }}
                    className={`flex gap-2 ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    {msg.role === "assistant" && (
                      <div className="w-7 h-7 rounded-full bg-white border border-gray-200 flex items-center justify-center shrink-0 mt-0.5 shadow-sm overflow-hidden">
                        <img src={chatbotLogo} alt="" className="w-5 h-5 object-contain" />
                      </div>
                    )}
                    <div
                      data-testid={`chat-message-${msg.role}-${i}`}
                      className={`max-w-[80%] px-3.5 py-2.5 text-[13.5px] leading-relaxed whitespace-pre-wrap ${
                        msg.role === "user"
                          ? "bg-gradient-to-br from-[#1e40af] to-[#2563eb] text-white rounded-2xl rounded-br-md shadow-md"
                          : "bg-white text-gray-700 rounded-2xl rounded-bl-md shadow-sm border border-gray-100"
                      }`}
                    >
                      {msg.content}
                    </div>
                    {msg.role === "user" && (
                      <div className="w-7 h-7 rounded-full bg-gray-200 flex items-center justify-center shrink-0 mt-0.5">
                        <User className="w-3.5 h-3.5 text-gray-500" />
                      </div>
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>

              {isLoading && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex gap-2 justify-start"
                >
                  <div className="w-7 h-7 rounded-full bg-white border border-gray-200 flex items-center justify-center shrink-0 shadow-sm overflow-hidden">
                    <img src={chatbotLogo} alt="" className="w-5 h-5 object-contain" />
                  </div>
                  <div className="bg-white border border-gray-100 rounded-2xl rounded-bl-md px-4 py-3 shadow-sm">
                    <div className="flex gap-1.5 items-center">
                      <motion.span
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                        className="w-2 h-2 bg-blue-400 rounded-full"
                      />
                      <motion.span
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0.15 }}
                        className="w-2 h-2 bg-orange-400 rounded-full"
                      />
                      <motion.span
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0.3 }}
                        className="w-2 h-2 bg-green-400 rounded-full"
                      />
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {messages.length === 1 && !isLoading && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="px-4 py-2.5 flex flex-wrap gap-1.5 border-t border-blue-50 bg-white shrink-0"
              >
                {quickQuestions.map((q, i) => (
                  <motion.button
                    key={q}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + i * 0.08 }}
                    data-testid={`quick-question-${i}`}
                    onClick={() => handleSendQuestion(q)}
                    disabled={isLoading}
                    className="text-xs px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 hover:bg-blue-100 transition-all duration-200 border border-blue-100 hover:border-blue-200 hover:shadow-sm"
                  >
                    {q}
                  </motion.button>
                ))}
              </motion.div>
            )}

            <div className="px-3 py-2.5 border-t border-gray-100 bg-white shrink-0">
              <div className="flex items-center gap-2">
                <input
                  ref={inputRef}
                  data-testid="input-chat-message"
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Mesajınızı yazın..."
                  disabled={isLoading}
                  className="flex-1 px-3.5 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent disabled:opacity-50 placeholder:text-gray-400 transition-shadow"
                />
                <motion.button
                  data-testid="button-send-chat"
                  onClick={sendMessage}
                  disabled={!input.trim() || isLoading}
                  whileTap={{ scale: 0.92 }}
                  className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1e40af] to-[#3b82f6] text-white flex items-center justify-center hover:shadow-lg transition-all disabled:opacity-40 disabled:cursor-not-allowed shrink-0"
                  aria-label="Mesaj gönder"
                >
                  <Send className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showTooltip && !isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 10, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="fixed bottom-[88px] right-4 z-[9998] bg-white rounded-xl shadow-xl px-4 py-3 max-w-[220px] border border-gray-100"
          >
            <div className="absolute -bottom-2 right-7 w-4 h-4 bg-white border-r border-b border-gray-100 rotate-45" />
            <p className="text-sm text-gray-700 font-medium leading-snug">
              Merhaba! Size yardımcı olabilirim.
            </p>
            <p className="text-xs text-gray-400 mt-1">İlgi Asistan</p>
            <button
              onClick={() => setShowTooltip(false)}
              className="absolute top-1 right-1 w-5 h-5 rounded-full text-gray-300 hover:text-gray-500 flex items-center justify-center text-xs"
              aria-label="Kapat"
            >
              <X className="w-3 h-3" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="fixed bottom-4 right-4 z-[9999]">
        {!isOpen && !hasInteracted && (
          <>
            <span
              className="absolute inset-0 rounded-full"
              style={{
                background: BORDER_GRADIENT,
                animation: "chat-pulse-ring 2.5s ease-out infinite",
              }}
            />
            <span
              className="absolute inset-0 rounded-full"
              style={{
                background: BORDER_GRADIENT,
                animation: "chat-pulse-ring 2.5s ease-out infinite 0.8s",
              }}
            />
          </>
        )}

        <motion.button
          data-testid="button-open-chat"
          onClick={handleToggle}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="relative w-[64px] h-[64px] rounded-full flex items-center justify-center"
          style={{ background: "transparent" }}
          aria-label={isOpen ? "Sohbeti kapat" : "Sohbeti aç"}
        >
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: BORDER_GRADIENT,
              animation: "chat-border-spin 3s linear infinite",
            }}
          />
          <div className="absolute inset-[3px] rounded-full bg-white" />

          <div className="relative z-10 flex items-center justify-center">
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6 text-gray-600" />
                </motion.div>
              ) : (
                <motion.div
                  key="logo"
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.5, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <img
                    src={chatbotLogo}
                    alt="İlgi Asistan"
                    className="w-9 h-9 object-contain"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {!isOpen && !hasInteracted && (
            <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-green-400 rounded-full border-[2.5px] border-white shadow-sm z-20" />
          )}
        </motion.button>
      </div>
    </>
  );
}
