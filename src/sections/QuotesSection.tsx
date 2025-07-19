import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote, Share2, Copy } from 'lucide-react';

const quotes = [
  {
    id: 1,
    text: "The most profound discoveries emerge when we learn to dance at the intersection of art and science.",
    gradient: "from-indigo-500 to-purple-500",
    fontStyle: "font-serif italic",
  },
  {
    id: 2,
    text: "Creativity is not measured by how differently you think, but by how effectively you can transform those thoughts into reality.",
    gradient: "from-blue-500 to-cyan-500",
    fontStyle: "font-sans",
  },
  {
    id: 3,
    text: "True innovation happens when we stop trying to predict the future and instead focus on creating it.",
    gradient: "from-purple-500 to-pink-500",
    fontStyle: "font-mono",
  },
  {
    id: 4,
    text: "The universe rewards those who find beauty in the questions, not just those who seek certainty in the answers.",
    gradient: "from-green-500 to-blue-500",
    fontStyle: "font-serif",
  },
  {
    id: 5,
    text: "The most valuable skill in a world of abundance is the ability to curate meaning from chaos.",
    gradient: "from-orange-500 to-red-500",
    fontStyle: "font-sans font-light",
  },
];

const QuotesSection = () => {
  const [currentQuote, setCurrentQuote] = useState(0);
  const [copyMessage, setCopyMessage] = useState('');
  
  const nextQuote = () => {
    setCurrentQuote((prev) => (prev + 1) % quotes.length);
  };
  
  const prevQuote = () => {
    setCurrentQuote((prev) => (prev - 1 + quotes.length) % quotes.length);
  };
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(quotes[currentQuote].text);
    setCopyMessage('Copied!');
    setTimeout(() => setCopyMessage(''), 2000);
  };
  
  return (
    <section id="quotes" className="py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl opacity-50"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-6 animate-on-scroll">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400">
              My Quotes & Theories
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto animate-on-scroll">
            Personal insights and perspectives distilled into shareable wisdom.
          </p>
        </div>
        
        <div className="animate-on-scroll">
          <div className="relative">
            {/* Quote Card */}
            <div 
              className={`
                min-h-[250px] bg-gradient-to-br ${quotes[currentQuote].gradient} 
                rounded-2xl shadow-xl p-8 flex flex-col justify-center
              `}
            >
              <div className="text-white/20 mb-4">
                <Quote size={48} />
              </div>
              
              <blockquote className={`text-xl md:text-2xl lg:text-3xl text-white ${quotes[currentQuote].fontStyle} mb-6`}>
                {quotes[currentQuote].text}
              </blockquote>
              
              <div className="flex justify-end space-x-2">
                <button 
                  onClick={copyToClipboard}
                  className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors duration-300 relative"
                  aria-label="Copy to clipboard"
                >
                  <Copy size={16} />
                  {copyMessage && (
                    <span className="absolute -top-8 -left-2 text-xs bg-white text-gray-900 px-2 py-1 rounded">
                      {copyMessage}
                    </span>
                  )}
                </button>
                <button 
                  className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors duration-300"
                  aria-label="Share"
                >
                  <Share2 size={16} />
                </button>
              </div>
            </div>
            
            {/* Navigation Controls */}
            <div className="flex justify-center mt-8 space-x-4">
              <button 
                onClick={prevQuote}
                className="p-3 rounded-full bg-gray-800 text-gray-300 hover:bg-indigo-600/30 hover:text-white transition-colors duration-300"
                aria-label="Previous quote"
              >
                <ChevronLeft size={20} />
              </button>
              
              <div className="flex items-center space-x-2">
                {quotes.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentQuote(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${
                      index === currentQuote ? 'bg-indigo-500' : 'bg-gray-700 hover:bg-gray-600'
                    }`}
                    aria-label={`Go to quote ${index + 1}`}
                  />
                ))}
              </div>
              
              <button 
                onClick={nextQuote}
                className="p-3 rounded-full bg-gray-800 text-gray-300 hover:bg-indigo-600/30 hover:text-white transition-colors duration-300"
                aria-label="Next quote"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuotesSection;