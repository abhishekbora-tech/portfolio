import React, { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  return (
    <section 
      id="hero" 
      ref={sectionRef}
      className="min-h-screen flex flex-col justify-center items-center relative py-20 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none" id="particles-container"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="mb-6 relative group">
            <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full overflow-hidden ring-2 ring-indigo-500/50 ring-offset-4 ring-offset-gray-950 shadow-lg shadow-indigo-500/20 transition-all duration-300 group-hover:ring-4">
              <img 
                src="https://ik.imagekit.io/abhishekbora/Minimalist%20Before%20After%20Salon%20&%20Makeup%20Instagram%20Post%20(Instagram%20Post%20(45)).png?updatedAt=1747550847234"
                alt="Abhishek Bora" 
                className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
              />
            </div>
            <div className="absolute -inset-1 bg-indigo-500/20 rounded-full blur-xl opacity-70 animate-pulse"></div>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-4 animate-reveal text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-indigo-200">
            <span className="animate-typing-cursor">Abhishek Bora</span>
          </h1>
          
          <p className="text-xl md:text-2xl font-light tracking-wide text-indigo-300 mb-8 animate-fade-in">
            <span className="opacity-80">Developer • Designer • Thinker</span>
          </p>
          
          <p className="max-w-2xl text-gray-400 mb-10 animate-fade-in delay-300 leading-relaxed">
            Exploring the intersection of technology and creativity to build meaningful solutions.
            Driven by curiosity and a passion for innovation.
          </p>
          
          <div className="animate-fade-in delay-500">
            <a 
              href="#skills" 
              className="px-8 py-3 rounded-full bg-indigo-600/20 border border-indigo-500/50 text-indigo-300 hover:bg-indigo-600/30 transition-all duration-300 shadow-lg shadow-indigo-600/10 backdrop-blur-sm group"
            >
              Discover My World
              <span className="ml-2 inline-block transition-transform group-hover:translate-y-1">
                <ChevronDown size={16} />
              </span>
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce opacity-70">
        <ChevronDown size={24} className="text-indigo-400" />
      </div>
    </section>
  );
};

export default HeroSection;