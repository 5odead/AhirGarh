import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'wouter';
import { Search, Users, MapPin } from 'lucide-react';
import { personalities } from '@/data/personalities';
import Fuse from 'fuse.js';

const categories = ["All", "Politicians", "Military", "Sports", "Arts", "Spiritual", "Business"];

const getInitials = (name: string) => {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 0) return "";
  const first = parts[0][0];
  const last = parts.length > 1 ? parts[parts.length - 1][0] : "";
  return (first + last).toUpperCase();
};

export default function PersonalitiesPage() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const fuse = useMemo(() => new Fuse(personalities, {
    keys: ['name', 'knownFor', 'birthPlace', 'bio'],
    threshold: 0.3
  }), []);

  const filteredPersonalities = useMemo(() => {
    let results = search ? fuse.search(search).map(r => r.item) : personalities;
    if (!search && activeCategory !== 'All') {
      results = results.filter(p => p.category === activeCategory);
    }
    return results;
  }, [search, activeCategory, fuse]);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen bg-background pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">Personalities</h1>
          <p className="text-lg text-muted-foreground mb-6">Documenting notable Ahirs and Yadavs who shaped history</p>
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-bold">
            {personalities.length} Personalities Documented
          </div>
        </div>

        <div className="flex flex-col gap-8 mb-12">
          <div className="relative max-w-2xl mx-auto w-full">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <input 
              type="text" 
              placeholder="Search personalities..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-2xl bg-card border border-border focus:border-primary text-foreground outline-none shadow-sm transition-all text-lg"
            />
          </div>

          {!search && (
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2 rounded-full text-sm font-bold transition-all border ${
                    activeCategory === cat 
                      ? 'bg-primary text-white border-primary shadow-md' 
                      : 'bg-card text-muted-foreground border-border hover:border-primary/50 hover:text-foreground'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}

          {search && (
            <div className="text-center text-muted-foreground font-medium">
              {filteredPersonalities.length} results for "{search}"
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredPersonalities.map(p => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
              >
                <Link href={`/personalities/${p.id}`}>
                  <div className="glass-card h-full flex flex-col cursor-pointer overflow-hidden border border-border hover:border-primary/40 hover:shadow-[0_0_20px_rgba(var(--primary),0.15)] transition-all group">
                    {p.photo ? (
                      <div className="h-[200px] overflow-hidden">
                        <img src={p.photo} alt={p.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                      </div>
                    ) : (
                      <div className="h-[200px] bg-primary/5 flex items-center justify-center">
                        <div className="w-24 h-24 rounded-full bg-primary flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                          {getInitials(p.name)}
                        </div>
                      </div>
                    )}
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{p.name}</h3>
                        <span className="px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full text-[10px] font-bold uppercase tracking-wider">
                          {p.category}
                        </span>
                      </div>
                      <p className="text-sm text-primary font-hindi mb-3">{p.nameHi}</p>
                      {p.birthPlace && (
                        <p className="text-xs text-muted-foreground mb-3 flex items-center">
                          <MapPin className="w-3 h-3 mr-1 text-primary" /> {p.birthPlace}
                        </p>
                      )}
                      <p className="text-sm italic text-muted-foreground mt-auto">{p.knownFor}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredPersonalities.length === 0 && (
          <div className="text-center py-24 glass rounded-3xl">
            <Users className="w-16 h-16 text-muted-foreground/20 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-foreground">No personalities found</h3>
            <p className="text-muted-foreground">Try a different search or category.</p>
          </div>
        )}
      </div>
    </motion.div>
  );
}