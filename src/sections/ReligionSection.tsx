import React from 'react';
import { Brain, Eye, Lightbulb } from 'lucide-react';

const ReligionSection = () => {
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
            {/* Philosophical Exploration Visual */}
            <div className="relative h-[200px] md:h-[300px] mb-12 flex items-center justify-center">
              <div className="relative">
                {/* Central human silhouette with glowing brain */}
                <div className="relative">
                  <div className="w-24 h-32 md:w-32 md:h-40 mx-auto relative">
                    <svg viewBox="0 0 100 150" className="w-full h-full text-indigo-400 fill-current">
                      <path d="M50 20 C60 20 65 30 65 40 C65 50 60 55 50 55 C40 55 35 50 35 40 C35 30 40 20 50 20 Z M50 55 L50 120 M35 75 L50 85 L65 75 M50 120 L35 150 M50 120 L65 150" 
                            stroke="currentColor" 
                            strokeWidth="3" 
                            fill="none" 
                            strokeLinecap="round" 
                            strokeLinejoin="round"/>
                    </svg>
                    
                    {/* Glowing brain/universe in head */}
                    <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center">
                      <div className="relative">
                        <Brain size={24} className="text-indigo-300 animate-pulse" />
                        <div className="absolute inset-0 bg-indigo-400/30 rounded-full blur-md animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating symbols representing curiosity and exploration */}
                <div className="absolute -top-4 -left-8 animate-bounce" style={{ animationDelay: '0.5s' }}>
                  <Eye size={16} className="text-purple-400" />
                </div>
                <div className="absolute -top-4 -right-8 animate-bounce" style={{ animationDelay: '1s' }}>
                  <span className="text-purple-400 text-xl">?</span>
                </div>
                <div className="absolute -bottom-4 left-0 animate-bounce" style={{ animationDelay: '1.5s' }}>
                  <Lightbulb size={16} className="text-yellow-400" />
                </div>
                <div className="absolute -bottom-4 right-0 animate-bounce" style={{ animationDelay: '2s' }}>
                  <span className="text-blue-400 text-lg">∞</span>
                </div>
              </div>
            </div>
            
            {/* Content */}
            <div className="max-w-3xl mx-auto">
              <div className="prose prose-invert max-w-none">
                <p className="mb-6 text-lg leading-relaxed text-center">
                  I believe in questioning, not concluding. While I don't follow any religion, 
                  I also accept that we may never fully know the truth about existence.
                </p>
                
                <div className="space-y-6 text-gray-300">
                  <p className="leading-relaxed">
                    I choose reason over rituals, science over blind faith, and kindness over commandments. 
                    This perspective isn't about rejecting the possibility of something greater—it's about 
                    embracing intellectual honesty in the face of the unknown.
                  </p>
                  
                  <p className="leading-relaxed">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReligionSection;