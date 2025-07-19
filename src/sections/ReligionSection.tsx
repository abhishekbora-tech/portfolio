import React, { useState } from 'react';
import { 
  Cross, 
  CircleDashed, 
  Infinity, 
  Star, 
  Moon, 
  Sun, 
  Asterisk,
  Brain,
  Eye
} from 'lucide-react';

const ReligionSection = () => {
  const [expanded, setExpanded] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  
  const toggleExpand = () => {
    setExpanded(!expanded);
    if (!expanded) {
      setTimeout(() => setShowDetails(true), 1500);
    } else {
      setShowDetails(false);
    }
  };
  
  return (
    <section id="religion" className="py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-gray-950 opacity-50"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-6 animate-on-scroll">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400">
              Religion & Me
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto animate-on-scroll">
            My personal journey of spiritual exploration and philosophical understanding.
          </p>
        </div>
        
        <div className="animate-on-scroll">
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 md:p-8">
            {/* Evolution Animation */}
            <div className="relative h-[300px] md:h-[400px] mb-12 cursor-pointer flex items-center justify-center" onClick={toggleExpand}>
              <div className="relative">
                {/* Religious symbols that fade out */}
                <div className={`absolute inset-0 transition-all duration-1500 ${expanded ? 'opacity-0 scale-75' : 'opacity-70 scale-100'}`}>
                  <div className="flex items-center justify-center space-x-4 text-gray-500">
                    <Cross size={24} />
                    <CircleDashed size={24} />
                    <Infinity size={24} />
                    <Star size={24} />
                    <Moon size={24} />
                    <Sun size={24} />
                    <Asterisk size={24} />
                  </div>
                </div>
                
                {/* Human silhouette with brain/universe */}
                <div className={`transition-all duration-1500 ${expanded ? 'opacity-100 scale-110' : 'opacity-0 scale-75'}`}>
                  <div className="relative">
                    {/* Human silhouette */}
                    <div className="w-32 h-48 mx-auto relative">
                      <svg viewBox="0 0 100 150" className="w-full h-full text-indigo-400 fill-current">
                        <path d="M50 20 C60 20 65 30 65 40 C65 50 60 55 50 55 C40 55 35 50 35 40 C35 30 40 20 50 20 Z M50 55 L50 120 M35 75 L50 85 L65 75 M50 120 L35 150 M50 120 L65 150" 
                              stroke="currentColor" 
                              strokeWidth="3" 
                              fill="none" 
                              strokeLinecap="round" 
                              strokeLinejoin="round"/>
                      </svg>
                      
                      {/* Glowing brain/universe in head */}
                      <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-8 h-8 flex items-center justify-center">
                        <div className="relative">
                          <Brain size={20} className="text-indigo-300 animate-pulse" />
                          <div className="absolute inset-0 bg-indigo-400/30 rounded-full blur-md animate-pulse"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Question mark and eye symbols */}
                <div className={`absolute -top-8 -left-8 transition-all duration-1500 ${expanded ? 'opacity-100' : 'opacity-0'}`}>
                  <Eye size={16} className="text-purple-400 animate-bounce" style={{ animationDelay: '0.5s' }} />
                </div>
                <div className={`absolute -top-8 -right-8 transition-all duration-1500 ${expanded ? 'opacity-100' : 'opacity-0'}`}>
                  <span className="text-purple-400 text-xl animate-bounce" style={{ animationDelay: '1s' }}>?</span>
                </div>
              </div>
              
              {!expanded && (
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-center text-gray-400 pointer-events-none">
                  <p className="text-sm">Click to explore my journey</p>
                </div>
              )}
            </div>
            
            {/* Agnostic Atheist Content */}
            {showDetails && (
              <div className="animate-fade-up">
                <h3 className="text-2xl font-bold tracking-tight mb-6 text-center">
                  Why I Am an Agnostic Atheist
                </h3>
                <div className="prose prose-invert max-w-none">
                  <p className="mb-4 text-lg leading-relaxed">
                    I believe in questioning, not concluding. While I don't follow any religion, 
                    I also accept that we may never fully know the truth about existence.
                  </p>
                  <p className="mb-4 leading-relaxed">
                    I choose reason over rituals, science over blind faith, and kindness over commandments. 
                    This perspective isn't about rejecting the possibility of something greater—it's about 
                    embracing intellectual honesty in the face of the unknown.
                  </p>
                  <p className="mb-4 leading-relaxed">
                    Being an agnostic atheist gives me the space to wonder freely, live honestly, 
                    and think critically. It allows me to find meaning in human connection, 
                    scientific discovery, and the simple beauty of existence without requiring 
                    supernatural explanations.
                  </p>
                  <p className="leading-relaxed">
                    This worldview has taught me humility—to admit when I don't know something, 
                    to remain open to new evidence, and to find profound meaning in our shared 
                    humanity and the remarkable universe we inhabit.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReligionSection;