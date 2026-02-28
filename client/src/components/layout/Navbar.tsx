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
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 text-foreground">
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
            style={{
              backgroundColor: '#0D0A07',
              position: 'fixed',
              top: '80px', // Matches navbar height (h-20)
              left: 0,
              width: '100%',
              height: 'calc(100vh - 80px)',
              zIndex: 9999,
              overflowY: 'auto',
              borderTop: '1px solid #E8500A'
            }}
          >
            <nav style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
              {navLinks.map((link) => {
                const isActive = location === link.path || (link.path !== '/' && location.startsWith(link.path));
                return (
                  <Link key={link.path} href={link.path}>
                    <div 
                      onClick={() => setIsMobileMenuOpen(false)} 
                      style={{
                        display: 'block',
                        padding: '20px 24px',
                        fontSize: '20px',
                        fontWeight: 'bold',
                        color: isActive ? '#E8500A' : 'white',
                        borderBottom: '1px solid rgba(255,255,255,0.05)',
                        cursor: 'pointer',
                        transition: 'color 0.2s'
                      }}
                    >
                      {link.name}
                    </div>
                  </Link>
                );
              })}
              
              <div style={{ padding: '24px', display: 'flex', alignItems: 'center', gap: '24px' }}>
                <button 
                  onClick={toggleLanguage} 
                  style={{ color: 'white', fontWeight: 'bold', fontSize: '16px' }}
                >
                  {lang === 'en' ? 'हिन्दी' : 'English'}
                </button>
                <button 
                  onClick={toggleTheme} 
                  style={{ 
                    padding: '8px', 
                    backgroundColor: 'rgba(255,255,255,0.1)', 
                    borderRadius: '9999px', 
                    color: 'white' 
                  }}
                >
                  {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
                </button>
              </div>

              <div style={{ padding: '0 24px 32px', color: 'rgba(255,255,255,0.3)', fontSize: '12px' }}>
                ahirgarh.vercel.app
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
