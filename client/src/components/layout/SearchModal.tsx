import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, FileText, User, MapPin, Shield } from 'lucide-react';
import { useLocation } from 'wouter';
import Fuse from 'fuse.js';
import { useSearch } from '@/context/SearchContext';

import { articles } from '@/data/articles';
import { gotras } from '@/data/gotras';
import { personalities } from '@/data/personalities';
import { villages } from '@/data/villages';

export default function SearchModal() {
  const { isSearchOpen, closeSearch } = useSearch();
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const [, setLocation] = useLocation();

  // Prepare unified dataset for Fuse.js
  const combinedData = [
    ...articles.map(a => ({ type: 'Article', id: a.slug, title: a.title, desc: a.excerpt, url: `/wiki/${a.slug}`, icon: FileText })),
    ...gotras.map(g => ({ type: 'Gotra', id: g.id.toString(), title: g.name, desc: g.description, url: `/gotras/${g.id}`, icon: Shield })),
    ...personalities.map(p => ({ type: 'Personality', id: p.id.toString(), title: p.name, desc: p.bio, url: `/personalities/${p.id}`, icon: User })),
    ...villages.map(v => ({ type: 'Village', id: v.id.toString(), title: v.name, desc: `${v.district}, ${v.state}`, url: `/villages/${v.id}`, icon: MapPin }))
  ];

  const fuse = new Fuse(combinedData, {
    keys: ['title', 'desc', 'type'],
    threshold: 0.3,
  });

  const results = query ? fuse.search(query).slice(0, 8).map(r => r.item) : [];

  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      setQuery('');
    }
  }, [isSearchOpen]);

  const handleResultClick = (url: string) => {
    closeSearch();
    setLocation(url);
  };

  return (
    <AnimatePresence>
      {isSearchOpen && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-20 px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeSearch}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="w-full max-w-2xl bg-card rounded-2xl shadow-2xl border border-border overflow-hidden relative z-10"
          >
            <div className="p-4 border-b border-border flex items-center">
              <Search className="w-5 h-5 text-muted-foreground mr-3" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search Ahirgarh... articles, gotras, personalities"
                className="flex-1 bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground text-lg"
              />
              <button onClick={closeSearch} className="p-1 rounded-md hover:bg-muted text-muted-foreground">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="max-h-[60vh] overflow-y-auto p-2">
              {query && results.length === 0 ? (
                <div className="p-8 text-center text-muted-foreground">
                  <p>No results found for "{query}"</p>
                  <p className="text-sm mt-2">Try searching for 'Krishna', 'Kashyap', or 'Rewari'</p>
                </div>
              ) : results.length > 0 ? (
                <ul className="space-y-1">
                  {results.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <li key={`${item.type}-${item.id}-${idx}`}>
                        <button
                          onClick={() => handleResultClick(item.url)}
                          className="w-full text-left px-4 py-3 rounded-xl hover:bg-muted flex items-start group transition-colors"
                        >
                          <div className="mt-1 p-2 rounded-lg bg-background group-hover:bg-card border border-border text-primary mr-4">
                            <Icon className="w-4 h-4" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center">
                              <span className="text-foreground font-medium truncate mr-2">{item.title}</span>
                              <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                                {item.type}
                              </span>
                            </div>
                            <p className="text-sm text-muted-foreground truncate mt-1">{item.desc}</p>
                          </div>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              ) : (
                <div className="p-8 text-center text-muted-foreground opacity-50">
                  <Search className="w-12 h-12 mx-auto mb-4" />
                  <p>Start typing to explore the fort...</p>
                </div>
              )}
            </div>
            
            <div className="p-3 border-t border-border bg-muted/30 text-xs text-muted-foreground flex justify-between">
              <span>Press <kbd className="px-1.5 py-0.5 rounded bg-background border border-border font-sans">esc</kbd> to close</span>
              <span>Powered by Ahirgarh Data</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
