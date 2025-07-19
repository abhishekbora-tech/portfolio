import React from 'react';
import { Github, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-400 border-t border-gray-800 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400 mb-2">
              PORTFOLIO
            </h3>
            <p className="text-sm">Exploring the universe one pixel at a time</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="hover:text-indigo-400 transition-colors duration-300">
              <Github size={20} />
            </a>
            <a href="#" className="hover:text-indigo-400 transition-colors duration-300">
              <Twitter size={20} />
            </a>
            <a href="#" className="hover:text-indigo-400 transition-colors duration-300">
              <Linkedin size={20} />
            </a>
            <a href="#" className="hover:text-indigo-400 transition-colors duration-300">
              <Instagram size={20} />
            </a>
          </div>
          
          <div className="text-xs text-gray-500">
            <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;