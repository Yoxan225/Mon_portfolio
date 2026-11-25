import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, X, Send, User, Code, FolderGit2, Briefcase, Mail } from 'lucide-react';
import { aiResponses } from '../data/portfolioData';

interface Message {
  id: number;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
}

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      type: 'bot',
      content: aiResponses.greeting,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const quickActions = [
    { label: 'Compétences', icon: Code, query: 'Quelles sont tes compétences ?' },
    { label: 'Projets', icon: FolderGit2, query: 'Parle-moi de tes projets' },
    { label: 'Expérience', icon: Briefcase, query: 'Quel est ton parcours ?' },
    { label: 'Contact', icon: Mail, query: 'Comment te contacter ?' },
  ];

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

  const getAIResponse = (query: string): string => {
    const lowerQuery = query.toLowerCase();

    if (lowerQuery.includes('compétence') || lowerQuery.includes('technologie') || lowerQuery.includes('stack') || lowerQuery.includes('skill')) {
      return aiResponses.skills;
    }
    if (lowerQuery.includes('projet') || lowerQuery.includes('réaliser')) {
      return aiResponses.projects;
    }
    if (lowerQuery.includes('parcours') || lowerQuery.includes('expérience') || lowerQuery.includes('étud') || lowerQuery.includes('formation')) {
      return aiResponses.education;
    }
    if (lowerQuery.includes('contact') || lowerQuery.includes('email') || lowerQuery.includes('téléphone') || lowerQuery.includes('joindre')) {
      return aiResponses.contact;
    }

    return aiResponses.default;
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      type: 'user',
      content: inputValue,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI response delay
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        type: 'bot',
        content: getAIResponse(inputValue),
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const handleQuickAction = (query: string) => {
    setInputValue(query);
    setTimeout(() => {
      const userMessage: Message = {
        id: messages.length + 1,
        type: 'user',
        content: query,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, userMessage]);
      setInputValue('');
      setIsTyping(true);

      setTimeout(() => {
        const botResponse: Message = {
          id: messages.length + 2,
          type: 'bot',
          content: getAIResponse(query),
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botResponse]);
        setIsTyping(false);
      }, 1000);
    }, 100);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: 'spring' }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 text-white shadow-lg shadow-primary-500/30 flex items-center justify-center transition-all duration-300 ${isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
      >
        <Bot className="w-6 h-6" />
        <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-green-500 border-2 border-white dark:border-dark-900 animate-pulse" />
      </motion.button>

      {/* Chat Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed bottom-6 right-6 z-50 w-[360px] sm:w-[400px] max-h-[600px] bg-white dark:bg-dark-900 rounded-2xl shadow-2xl shadow-dark-900/20 dark:shadow-black/50 border border-dark-200/50 dark:border-dark-700/50 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold">Yoxan AI</h3>
                  <p className="text-xs text-white/80">Toujours prêt à aider</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-lg bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-3 ${message.type === 'user' ? 'justify-end' : ''}`}
                >
                  {message.type === 'bot' && (
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center flex-shrink-0">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm ${
                      message.type === 'user'
                        ? 'bg-primary-500 text-white'
                        : 'bg-dark-100 dark:bg-dark-800 text-dark-800 dark:text-dark-200'
                    }`}
                  >
                    <div className="whitespace-pre-wrap">{message.content}</div>
                  </div>
                  {message.type === 'user' && (
                    <div className="w-8 h-8 rounded-full bg-dark-200 dark:bg-dark-700 flex items-center justify-center flex-shrink-0">
                      <User className="w-4 h-4 text-dark-600 dark:text-dark-300" />
                    </div>
                  )}
                </motion.div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex gap-3"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-dark-100 dark:bg-dark-800 px-4 py-2.5 rounded-2xl">
                    <div className="flex gap-1">
                      {[0, 1, 2].map((i) => (
                        <motion.div
                          key={i}
                          animate={{ y: [0, -5, 0] }}
                          transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.1 }}
                          className="w-2 h-2 rounded-full bg-dark-400 dark:bg-dark-500"
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Actions */}
            {messages.length <= 1 && (
              <div className="px-4 py-3 border-t border-dark-200/50 dark:border-dark-700/50">
                <p className="text-xs text-dark-500 dark:text-dark-400 mb-2">Demandez-moi :</p>
                <div className="flex flex-wrap gap-2">
                  {quickActions.map((action) => (
                    <button
                      key={action.label}
                      onClick={() => handleQuickAction(action.query)}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-dark-100 dark:bg-dark-800 text-xs font-medium text-dark-700 dark:text-dark-300 hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                      <action.icon className="w-3 h-3" />
                      {action.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 border-t border-dark-200/50 dark:border-dark-700/50">
              <div className="flex items-center gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder="Posez une question..."
                  className="flex-1 px-4 py-2.5 rounded-xl bg-dark-100 dark:bg-dark-800 text-dark-900 dark:text-white text-sm placeholder-dark-500 dark:placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-primary-500/50 transition-all"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim()}
                  className="w-10 h-10 rounded-xl bg-primary-500 text-white flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary-600 transition-colors"
                >
                  <Send className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIAssistant;
