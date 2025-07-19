import React, { useEffect, useRef } from 'react';
import { Heart, Ambulance as Balance, Compass, Lightbulb, Brain } from 'lucide-react';

const IdeologySection = () => {
  const textRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-typewriter');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (textRef.current) {
      observer.observe(textRef.current);
    }
    
    return () => {
      if (textRef.current) observer.unobserve(textRef.current);
    };
  }, []);
  
  return (
    <section id="ideology" className="py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-indigo-600/5 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-purple-600/5 rounded-full blur-3xl opacity-50"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-6 animate-on-scroll">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400">
              My Ideology About Life
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto animate-on-scroll">
            The principles and philosophies that guide my journey through existence.
          </p>
        </div>
        
        <div className="animate-on-scroll" ref={textRef}>
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              <div className="md:col-span-3 order-2 md:order-1">
                <div className="prose prose-invert max-w-none">
                  <p className="leading-relaxed mb-6 text-xl font-light">
                    I believe that life is an extraordinary tapestry of experiences, woven together by our choices, connections, and curiosity.
                  </p>
                  
                  <div className="space-y-6 text-gray-300">
                    <p>
                      At the core of my philosophy is the understanding that meaning isn't something we discover, but rather something we create. We are the authors of our own stories, and each day presents a blank page for us to fill with intention and purpose.
                    </p>
                    
                    <p>
                      I embrace a balance between logic and intuition, between planning and spontaneity. The most beautiful moments often emerge from the unplanned spaces between our carefully constructed goals.
                    </p>
                    
                    <p>
                      Human connections form the greatest source of meaning in our lives. I value authentic relationships built on mutual respect, genuine curiosity, and compassionate understanding.
                    </p>
                    
                    <p>
                      Growth requires discomfort. I believe in constantly pushing beyond the boundaries of comfort, as this is where our most significant transformations occur. Every challenge presents an opportunity to evolve.
                    </p>
                    
                    <p>
                      Finally, I believe in the power of mindful presence. True joy comes not from constantly pursuing happiness, but from being fully present in each moment, appreciating the beauty that surrounds us, even amidst life's inevitable difficulties.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="md:col-span-2 order-1 md:order-2">
                <div className="grid grid-cols-1 gap-6">
                  <div className="bg-indigo-900/20 backdrop-blur-sm border border-indigo-500/30 rounded-xl p-6 flex items-start">
                    <div className="shrink-0 p-3 bg-indigo-600/20 rounded-lg text-indigo-300 mr-4">
                      <Balance size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-indigo-200 mb-2">Balance</h3>
                      <p className="text-sm text-gray-400">Harmonizing opposing forces to create a purposeful life.</p>
                    </div>
                  </div>
                  
                  <div className="bg-purple-900/20 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6 flex items-start">
                    <div className="shrink-0 p-3 bg-purple-600/20 rounded-lg text-purple-300 mr-4">
                      <Heart size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-purple-200 mb-2">Compassion</h3>
                      <p className="text-sm text-gray-400">Extending kindness to others and ourselves for collective growth.</p>
                    </div>
                  </div>
                  
                  <div className="bg-blue-900/20 backdrop-blur-sm border border-blue-500/30 rounded-xl p-6 flex items-start">
                    <div className="shrink-0 p-3 bg-blue-600/20 rounded-lg text-blue-300 mr-4">
                      <Compass size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-blue-200 mb-2">Exploration</h3>
                      <p className="text-sm text-gray-400">Embracing curiosity and wonder in all aspects of life.</p>
                    </div>
                  </div>
                  
                  <div className="bg-pink-900/20 backdrop-blur-sm border border-pink-500/30 rounded-xl p-6 flex items-start">
                    <div className="shrink-0 p-3 bg-pink-600/20 rounded-lg text-pink-300 mr-4">
                      <Brain size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-pink-200 mb-2">Growth Mindset</h3>
                      <p className="text-sm text-gray-400">Viewing challenges as opportunities to evolve and expand.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IdeologySection;