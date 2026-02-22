import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { personalities } from '@/data/personalities';

export default function PersonalitiesPage() {
  const [filter, setFilter] = useState('All');
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const categories = ['All', ...Array.from(new Set(personalities.map(p => p.category)))];
  const displayed = filter === 'All' ? personalities : personalities.filter(p => p.category === filter);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen bg-background pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">Legends of the Community</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">From ancient emperors to modern Olympians, discover the people who shaped history.</p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${filter === cat ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'bg-muted/20 text-muted-foreground hover:bg-muted/40'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {displayed.map((person) => (
            <motion.div layout key={person.id} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
              <Link href={`/personalities/${person.id}`}>
                <div className="glass-card overflow-hidden h-full cursor-pointer group">
                  <div className="relative h-64 overflow-hidden">
                    <img src={person.image} alt={person.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="text-xs font-bold text-primary bg-white/90 px-2 py-1 rounded mb-2 inline-block shadow-sm">
                        {person.category}
                      </span>
                      <h3 className="text-xl font-display font-bold text-white leading-tight">{person.name}</h3>
                      <p className="text-white/80 text-sm font-hindi">{person.nameHi}</p>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{person.bio}</p>
                    <div className="flex justify-end items-center text-xs text-muted-foreground border-t border-border/50 pt-3">
                      <span>{person.state}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </motion.div>
  );
}
