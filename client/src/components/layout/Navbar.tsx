import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Search, Sun, Moon, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import { useLanguage } from '@/context/LanguageContext';
import { useSearch } from '@/context/SearchContext';

export default function Navbar() {
  const [location] = useLocation();
  const { theme, toggleTheme } = useTheme();
  const { lang, toggleLanguage, t } = useLanguage();
  const { openSearch } = useSearch();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: t.nav.home, path: '/' },
    { name: t.nav.wiki, path: '/wiki' },
    { name: t.nav.personalities, path: '/personalities' },
    { name: t.nav.villages, path: '/villages' },
    { name: t.nav.gotras, path: '/gotras' },
    { name: t.nav.history, path: '/history' },
    { name: t.nav.culture, path: '/culture' },
    { name: t.nav.reservations, path: '/reservations' },
    { name: t.nav.about, path: '/about' },
  ];

  return (
    <nav className="sticky top-0 z-50 glass shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          <div className="flex-shrink-0 flex items-center gap-2">
            <Link href="/">
              <div className="flex items-center cursor-pointer">
                {/* Simple Peacock SVG */}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-8 h-8 text-primary mr-2" strokeWidth="2">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"/>
                  <circle cx="12" cy="12" r="2" fill="currentColor"/>
                </svg>
                <span className="font-display text-2xl font-bold">
                  <span className="text-gradient">Ahirgarh</span>
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => {
              const isActive = location === link.path || (link.path !== '/' && location.startsWith(link.path));
              return (
                <Link key={link.path} href={link.path}>
                  <div className={`text-sm font-medium transition-colors cursor-pointer hover:text-primary ${isActive ? 'text-primary border-b-2 border-primary' : 'text-muted-foreground'}`}>
                    {link.name}
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Right Controls */}
          <div className="hidden lg:flex items-center space-x-4">
            <button onClick={openSearch} className="p-2 text-muted-foreground hover:text-primary transition-colors bg-black/5 dark:bg-white/5 rounded-full">
              <Search className="w-5 h-5" />
            </button>
            <button onClick={toggleLanguage} className="px-3 py-1.5 text-xs font-semibold bg-black/5 dark:bg-white/5 rounded-full text-foreground hover:bg-black/10 dark:hover:bg-white/10 transition-colors">
              {lang === 'en' ? 'EN | हिं' : 'हिं | EN'}
            </button>
            <button onClick={toggleTheme} className="p-2 text-muted-foreground hover:text-primary transition-colors bg-black/5 dark:bg-white/5 rounded-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={theme}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
                </motion.div>
              </AnimatePresence>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center space-x-4">
            <button onClick={openSearch} className="p-2 text-muted-foreground hover:text-primary">
              <Search className="w-5 h-5" />
            </button>
            <button onClick={() => setIsMobileMenuOpen(true)} className="p-2 text-foreground">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[9999] bg-[#0D0A07] flex flex-col"
          >
            {/* Top Bar */}
            <div className="flex justify-between items-center h-20 px-4 sm:px-6">
              <div className="flex items-center gap-2">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-8 h-8 text-primary" strokeWidth="2">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"/>
                  <circle cx="12" cy="12" r="2" fill="currentColor"/>
                </svg>
                <span className="font-display text-2xl font-bold text-white">Ahirgarh</span>
              </div>
              <button 
                onClick={() => setIsMobileMenuOpen(false)} 
                className="p-2 text-white hover:text-primary transition-colors"
              >
                <X className="w-8 h-8" />
              </button>
            </div>
            
            {/* Nav Links */}
            <nav className="flex-1 flex flex-col items-center justify-center gap-2 w-full px-6">
              {navLinks.map((link) => {
                const isActive = location === link.path || (link.path !== '/' && location.startsWith(link.path));
                return (
                  <Link key={link.path} href={link.path}>
                    <div 
                      onClick={() => setIsMobileMenuOpen(false)} 
                      className={`w-full text-center py-3.5 text-[22px] font-bold transition-colors cursor-pointer ${
                        isActive ? 'text-primary' : 'text-white hover:text-primary'
                      }`}
                    >
                      {link.name}
                    </div>
                  </Link>
                );
              })}
              
              <div className="mt-6 flex items-center gap-6">
                <button onClick={toggleLanguage} className="text-white hover:text-primary transition-colors font-bold">
                  {lang === 'en' ? 'हिन्दी' : 'English'}
                </button>
                <button onClick={toggleTheme} className="p-2 bg-white/10 rounded-full text-white hover:text-primary transition-colors">
                  {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
                </button>
              </div>
            </nav>

            {/* Bottom */}
            <div className="pb-8 text-center">
              <span className="text-xs text-muted-foreground/50 font-medium">ahirgarh.vercel.app</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
