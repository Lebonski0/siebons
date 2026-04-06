import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Droplets } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/src/lib/utils';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    // Initial check
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Diensten', href: '#diensten' },
    { name: 'Badkamerrenovatie', href: '#badkamer' },
    { name: 'Over Ons', href: '#over-ons' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled
          ? 'bg-white/90 backdrop-blur-md py-3 shadow-lg border-b border-gray-100'
          : 'bg-transparent py-6'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 group">
          <div className={cn(
            "p-2 rounded-xl transition-colors duration-300",
            isScrolled ? "bg-blue-600 text-white" : "bg-white/10 backdrop-blur-md text-white"
          )}>
            <Droplets className="w-6 h-6" />
          </div>
          <span className={cn(
            "text-xl font-bold tracking-tight transition-colors duration-300",
            isScrolled ? "text-gray-900" : "text-white"
          )}>
            AquaFlow <span className="text-blue-500">Loodgieter</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors duration-300 hover:text-blue-500",
                isScrolled ? "text-gray-600" : "text-white/80 hover:text-white"
              )}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA & Phone */}
        <div className="flex items-center gap-4">
          <a
            href="tel:+32470000000"
            className={cn(
              "flex items-center gap-2 px-4 py-2 rounded-full font-semibold transition-all duration-300",
              isScrolled
                ? "bg-blue-50 text-blue-600 hover:bg-blue-100"
                : "bg-white/10 backdrop-blur-md text-white hover:bg-white/20"
            )}
          >
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">0470 00 00 00</span>
          </a>
          
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn(
              "md:hidden p-2 rounded-lg transition-colors",
              isScrolled ? "text-gray-900 hover:bg-gray-100" : "text-white hover:bg-white/10"
            )}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-2xl md:hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-lg font-medium text-gray-900 hover:text-blue-600"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="tel:+32470000000"
                className="flex items-center justify-center gap-2 w-full py-4 bg-blue-600 text-white rounded-xl font-bold"
              >
                <Phone className="w-5 h-5" />
                Bel Nu: 0470 00 00 00
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
