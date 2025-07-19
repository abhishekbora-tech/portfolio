import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const menuItems = [
    { label: 'Who Am I', href: '#hero' },
    { label: 'Skills', href: '#skills' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Travel', href: '#travel' },
    { label: 'Family', href: '#family' },
    { label: 'Ideology', href: '#ideology' },
    { label: 'Quotes', href: '#quotes' },
    { label: 'Religion', href: '#religion' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-gray-900/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <a href="#" className="text-xl font-bold tracking-tighter">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400">
              PORTFOLIO
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm tracking-wide hover:text-indigo-400 transition-colors duration-300"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-100 hover:text-indigo-400 transition-colors duration-300"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`fixed inset-0 bg-gray-950/95 backdrop-blur-lg z-40 transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="h-full flex flex-col items-center justify-center space-y-8 p-4">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-xl font-medium hover:text-indigo-400 transition-colors duration-300"
              onClick={toggleMenu}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;