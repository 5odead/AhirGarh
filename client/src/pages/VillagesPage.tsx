import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'wouter';
import { Search, Map, List, Grid as GridIcon, Shield } from 'lucide-react';
import { villages } from '@/data/villages';
import Fuse from 'fuse.js';

export default function VillagesPage() {
  const [search, setSearch] = useState('');
  const [stateFilter, setStateFilter] = useState('All');
  const [viewMode, setViewMode] = useState<'list' | 'grid'>(() => {
    return (localStorage.getItem('villageViewMode') as 'list' | 'grid') || 'list';
  });

  useEffect(() => {
    localStorage.setItem('villageViewMode', viewMode);
  }, [viewMode]);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const states = useMemo(() => ['All', ...Array.from(new Set(villages.map(v => v.state)))].sort(), []);

  const fuse = useMemo(() => new Fuse(villages, { 
    keys: ['name', 'district', 'state'],
    threshold: 0.3
  }), []);
  
  const filteredVillages = useMemo(() => {
    let results = search ? fuse.search(search).map(r => r.item) : villages;
    if (stateFilter !== 'All') results = results.filter(v => v.state === stateFilter);
    return results.sort((a, b) => a.name.localeCompare(b.name));
  }, [search, stateFilter, fuse]);

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  
  const groupedVillages = useMemo(() => {
    const groups: Record<string, typeof villages> = {};
    filteredVillages.forEach(v => {
      const firstLetter = v.name[0].toUpperCase();
      if (!groups[firstLetter]) groups[firstLetter] = [];
      groups[firstLetter].push(v);
    });
    return groups;
  }, [filteredVillages]);

  const availableLetters = useMemo(() => 
    new Set(Object.keys(groupedVillages)), 
    [groupedVillages]
  );

  const scrollToSection = (letter: string) => {
    const element = document.getElementById(`section-${letter}`);
    if (element) {
      const offset = 120;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const CompactRow = ({ village, index }: { village: typeof villages[0], index: number }) => (
    <Link href={`/villages/${village.id}`}>
      <div 
        className={`flex items-center justify-between px-4 py-3 cursor-pointer transition-all border-l-4 border-transparent hover:border-primary hover:bg-primary/5 ${index % 2 === 0 ? 'bg-muted/5' : 'bg-transparent'}`}
        style={{ height: '48px' }}
      >
        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 overflow-hidden">
          <span className="font-bold text-foreground truncate">{village.name}</span>
          <span className="text-xs text-muted-foreground truncate">{village.district}</span>
        </div>
        <div className="shrink-0">
          <span className="text-[10px] px-2 py-0.5 bg-primary/10 border border-primary/20 rounded-full text-primary uppercase font-bold tracking-tighter">
            {village.state}
          </span>
        </div>
      </div>
    </Link>
  );

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen bg-background pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">Villages</h1>
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-bold">
            Documenting {villages.length} Villages across {states.length - 1} States
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mb-8 p-6 glass rounded-2xl border border-primary/20 bg-primary/5">
          <h3 className="text-lg font-display font-bold text-foreground mb-3 flex items-center">
            <span className="mr-2">📋</span> A Note on Village Names
          </h3>
          <div className="text-sm text-muted-foreground leading-relaxed space-y-3">
            <p>
              Village names may vary in spelling across sources and regions. If you cannot find your village, try searching by district name or nearby village. 
              This database is actively growing. To add a village, <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="text-primary font-bold hover:underline">contact us on WhatsApp</a>.
            </p>
          </div>
        </div>

        {/* Controls */}
        <div className="glass p-6 rounded-3xl mb-4 shadow-md flex flex-col gap-4 sticky top-20 z-40 bg-background/80 backdrop-blur-md">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <input 
                type="text" 
                placeholder="Search by village, district, state..." 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-background border border-border focus:border-primary text-foreground outline-none transition-all"
              />
            </div>

            <div className="flex gap-2 items-center">
              <select 
                value={stateFilter}
                onChange={(e) => setStateFilter(e.target.value)}
                className="px-4 py-2 rounded-xl bg-background border border-border text-foreground text-sm outline-none focus:border-primary h-full"
              >
                {states.map(s => <option key={s} value={s}>{s === 'All' ? 'All States' : s}</option>)}
              </select>

              <div className="flex bg-muted rounded-xl p-1 border border-border h-full">
                <button 
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-all ${viewMode === 'list' ? 'bg-background text-primary shadow-sm' : 'text-muted-foreground hover:text-foreground'}`}
                >
                  <List className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-all ${viewMode === 'grid' ? 'bg-background text-primary shadow-sm' : 'text-muted-foreground hover:text-foreground'}`}
                >
                  <GridIcon className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {!search && (
            <div className="flex flex-wrap justify-center gap-1 border-t border-border pt-4 overflow-x-auto no-scrollbar">
              {alphabet.map(letter => {
                const hasVillages = availableLetters.has(letter);
                return (
                  <button
                    key={letter}
                    disabled={!hasVillages}
                    onClick={() => scrollToSection(letter)}
                    className={`w-7 h-7 flex shrink-0 items-center justify-center rounded text-xs font-bold transition-all
                      ${hasVillages 
                        ? 'text-foreground hover:bg-primary hover:text-white cursor-pointer' 
                        : 'text-muted-foreground/30 cursor-not-allowed'}`}
                  >
                    {letter}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="mt-8">
          {search && (
            <div className="mb-6 px-2 text-sm text-muted-foreground font-medium">
              {filteredVillages.length} results found for "{search}"
            </div>
          )}

          <AnimatePresence mode="popLayout">
            {search || stateFilter !== 'All' ? (
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                exit={{ opacity: 0 }}
                className={viewMode === 'grid' ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" : "glass rounded-2xl overflow-hidden border border-border shadow-sm"}
              >
                {filteredVillages.map((v, idx) => (
                  viewMode === 'grid' ? (
                    <GridCard key={v.id} village={v} />
                  ) : (
                    <CompactRow key={v.id} village={v} index={idx} />
                  )
                ))}
              </motion.div>
            ) : (
              <div className="space-y-12">
                {alphabet.map(letter => {
                  const letterVillages = groupedVillages[letter];
                  if (!letterVillages) return null;

                  return (
                    <section key={letter} id={`section-${letter}`} className="scroll-mt-64">
                      <div className="flex items-center gap-4 mb-6">
                        <h2 className="text-4xl font-display font-bold text-primary">{letter}</h2>
                        <div className="h-px bg-primary/20 flex-1"></div>
                      </div>

                      <div className={viewMode === 'grid' ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" : "glass rounded-2xl overflow-hidden border border-border shadow-sm"}>
                        {letterVillages.map((v, idx) => (
                          viewMode === 'grid' ? (
                            <GridCard key={v.id} village={v} />
                          ) : (
                            <CompactRow key={v.id} village={v} index={idx} />
                          )
                        ))}
                      </div>
                    </section>
                  );
                })}
              </div>
            )}
          </AnimatePresence>
          
          {filteredVillages.length === 0 && (
            <div className="text-center py-24 glass rounded-3xl">
              <Map className="w-16 h-16 text-muted-foreground/20 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground">No villages found</h3>
              <p className="text-muted-foreground">Try adjusting your search or state filter.</p>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function GridCard({ village }: { village: typeof villages[0] }) {
  return (
    <motion.div layout initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
      <Link href={`/villages/${village.id}`}>
        <div className="glass-card p-6 h-full flex flex-col cursor-pointer relative overflow-hidden group">
          <div className="absolute -bottom-6 -right-6 opacity-5 group-hover:opacity-10 transition-opacity">
            <Map className="w-32 h-32 text-primary" />
          </div>
          
          <div className="flex justify-between items-start mb-4 relative z-10">
            <div>
              <h3 className="text-2xl font-display font-bold text-foreground group-hover:text-primary transition-colors">{village.name}</h3>
              <p className="text-sm text-muted-foreground font-medium">{village.district}, {village.state}</p>
            </div>
          </div>
          
          <p className="text-sm text-muted-foreground mb-6 flex-1 relative z-10 line-clamp-3">{village.history}</p>
        </div>
      </Link>
    </motion.div>
  );
}