import React, { useState } from 'react';
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

  const navLinks = [
    { name: t.nav.home, path: '/' },
    { name: t.nav.wiki, path: '/wiki' },
    { name: t.nav.gotras, path: '/gotras' },
    { name: t.nav.personalities, path: '/personalities' },
    { name: t.nav.villages, path: '/villages' },
    { name: t.nav.history, path: '/history' },
    { name: t.nav.culture, path: '/culture' },
    { name: t.nav.matrimonials, path: '/matrimonials' },
    { name: t.nav.noticeBoard, path: '/notice-board' },
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
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl flex flex-col"
          >
            <div className="flex justify-between items-center p-6 border-b border-border">
              <span className="font-display text-2xl font-bold text-gradient">Ahirgarh</span>
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-foreground">
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="flex-grow overflow-y-auto px-6 py-8">
              <motion.div 
                variants={{
                  container: { transition: { staggerChildren: 0.05 } }
                }}
                initial="initial" animate="animate" className="flex flex-col space-y-4"
              >
                {navLinks.map((link) => (
                  <motion.div key={link.path} variants={{ initial: { opacity: 0, x: -20 }, animate: { opacity: 1, x: 0 }}}>
                    <Link href={link.path}>
                      <div onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-medium text-foreground py-2 border-b border-border/50">
                        {link.name}
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
              
              <div className="mt-8 flex space-x-4">
                <button onClick={toggleLanguage} className="px-4 py-2 text-sm font-semibold bg-primary text-white rounded-full">
                   Toggle Language ({lang === 'en' ? 'Hindi' : 'English'})
                </button>
                <button onClick={toggleTheme} className="p-2 bg-black/10 dark:bg-white/10 rounded-full text-foreground">
                  {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
