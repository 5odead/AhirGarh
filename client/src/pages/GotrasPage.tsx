import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'wouter';
import { Search, Shield, List, Grid as GridIcon } from 'lucide-react';
import { gotras } from '@/data/gotras';
import Fuse from 'fuse.js';

export default function GotrasPage() {
  const [search, setSearch] = useState('');
  const [activeRegion, setActiveRegion] = useState('All');
  const [viewMode, setViewMode] = useState<'list' | 'grid'>(() => {
    return (localStorage.getItem('gotraViewMode') as 'list' | 'grid') || 'list';
  });

  useEffect(() => {
    localStorage.setItem('gotraViewMode', viewMode);
  }, [viewMode]);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const regions = ['All', 'UP', 'Bihar', 'Haryana', 'Rajasthan', 'Maharashtra', 'MP'];

  const fuse = useMemo(() => new Fuse(gotras, { 
    keys: ['name', 'nameHi', 'description', 'regions'],
    threshold: 0.3
  }), []);
  
  const filteredGotras = useMemo(() => {
    let results = search ? fuse.search(search).map(r => r.item) : gotras;
    if (activeRegion !== 'All') results = results.filter(g => g.regions.includes(activeRegion));
    return results.sort((a, b) => a.name.localeCompare(b.name));
  }, [search, activeRegion, fuse]);

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  
  const groupedGotras = useMemo(() => {
    const groups: Record<string, typeof gotras> = {};
    filteredGotras.forEach(gotra => {
      const firstLetter = gotra.name[0].toUpperCase();
      if (!groups[firstLetter]) groups[firstLetter] = [];
      groups[firstLetter].push(gotra);
    });
    return groups;
  }, [filteredGotras]);

  const availableLetters = useMemo(() => 
    new Set(Object.keys(groupedGotras)), 
    [groupedGotras]
  );

  const scrollToSection = (letter: string) => {
    const element = document.getElementById(`section-${letter}`);
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const CompactRow = ({ gotra, index }: { gotra: typeof gotras[0], index: number }) => (
    <Link href={`/gotras/${gotra.id}`}>
      <div 
        className={`flex items-center justify-between px-4 py-3 cursor-pointer transition-all border-l-4 border-transparent hover:border-primary hover:bg-primary/5 ${index % 2 === 0 ? 'bg-muted/5' : 'bg-transparent'}`}
        style={{ height: '44px' }}
      >
        <div className="flex items-center gap-3 overflow-hidden">
          <span className="font-bold text-foreground truncate">{gotra.name}</span>
          <span className="text-sm text-muted-foreground font-hindi truncate hidden sm:inline">{gotra.nameHi}</span>
        </div>
        <div className="flex gap-1 ml-2 shrink-0">
          {gotra.regions.slice(0, 3).map(r => (
            <span key={r} className="text-[10px] px-2 py-0.5 bg-primary/10 border border-primary/20 rounded-full text-primary uppercase font-bold tracking-tighter">
              {r}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen bg-background pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">Ahir Gotras Directory</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">Explore the diverse lineages and ancestral clans of the Ahir community.</p>
          
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-bold">
            Documenting {gotras.length} Gotras
          </div>
        </div>

        {/* Filters & Search */}
        <div className="glass p-6 rounded-3xl mb-4 shadow-md flex flex-col gap-4 sticky top-20 z-40 bg-background/80 backdrop-blur-md">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <input 
                type="text" 
                placeholder="Search by gotra name, region, or history..." 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-background border border-border focus:border-primary text-foreground outline-none transition-all"
              />
            </div>

            <div className="flex gap-2 items-center">
              <select 
                value={activeRegion}
                onChange={(e) => setActiveRegion(e.target.value)}
                className="px-4 py-2 rounded-xl bg-background border border-border text-foreground text-sm outline-none focus:border-primary h-full"
              >
                {regions.map(r => <option key={r} value={r}>{r === 'All' ? 'All Regions' : r}</option>)}
              </select>

              <div className="flex bg-muted rounded-xl p-1 border border-border h-full">
                <button 
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-all ${viewMode === 'list' ? 'bg-background text-primary shadow-sm' : 'text-muted-foreground hover:text-foreground'}`}
                  title="List View"
                >
                  <List className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-all ${viewMode === 'grid' ? 'bg-background text-primary shadow-sm' : 'text-muted-foreground hover:text-foreground'}`}
                  title="Grid View"
                >
                  <GridIcon className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Alphabet Bar */}
          {!search && (
            <div className="flex flex-wrap justify-center gap-1 border-t border-border pt-4">
              {alphabet.map(letter => {
                const hasGotras = availableLetters.has(letter);
                return (
                  <button
                    key={letter}
                    disabled={!hasGotras}
                    onClick={() => scrollToSection(letter)}
                    className={`w-7 h-7 flex items-center justify-center rounded text-xs font-bold transition-all
                      ${hasGotras 
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
              {filteredGotras.length} results found for "{search}"
            </div>
          )}

          <AnimatePresence mode="popLayout">
            {search ? (
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                exit={{ opacity: 0 }}
                className={viewMode === 'grid' ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" : "glass rounded-2xl overflow-hidden border border-border shadow-sm"}
              >
                {filteredGotras.map((gotra, idx) => (
                  viewMode === 'grid' ? (
                    <GridCard key={gotra.id} gotra={gotra} />
                  ) : (
                    <CompactRow key={gotra.id} gotra={gotra} index={idx} />
                  )
                ))}
              </motion.div>
            ) : (
              <div className="space-y-12">
                {alphabet.map(letter => {
                  const letterGotras = groupedGotras[letter];
                  if (!letterGotras) return null;

                  return (
                    <section key={letter} id={`section-${letter}`} className="scroll-mt-60">
                      <div className="flex items-center gap-4 mb-6">
                        <h2 className="text-4xl font-display font-bold text-primary">{letter}</h2>
                        <div className="h-px bg-primary/20 flex-1"></div>
                      </div>

                      <div className={viewMode === 'grid' ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" : "glass rounded-2xl overflow-hidden border border-border shadow-sm"}>
                        {letterGotras.map((gotra, idx) => (
                          viewMode === 'grid' ? (
                            <GridCard key={gotra.id} gotra={gotra} />
                          ) : (
                            <CompactRow key={gotra.id} gotra={gotra} index={idx} />
                          )
                        ))}
                      </div>
                    </section>
                  );
                })}
              </div>
            )}
          </AnimatePresence>
          
          {/* Disclaimer */}
          <div className="mt-16 p-8 glass rounded-3xl border border-primary/20 bg-primary/5">
            <h3 className="text-xl font-display font-bold text-foreground mb-4 flex items-center">
              <span className="mr-2">📋</span> A Note on Gotra Names
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Gotra names across India vary significantly in spelling and pronunciation by region. The same gotra may be written as 
                <span className="text-foreground font-semibold"> "Dagar"</span> in Haryana, 
                <span className="text-foreground font-semibold"> "Daagar"</span> in Rajasthan, or 
                <span className="text-foreground font-semibold"> "Dagur"</span> in UP — they are the same lineage.
              </p>
              <p>
                If you cannot find your gotra, look for similar sounding names — it may be listed under a different regional spelling. 
                This database is actively growing and your gotra will be added soon.
              </p>
              <p className="pt-2 border-t border-border/50">
                If you'd like to add or correct a gotra, <Link href="/about"><span className="text-primary font-bold hover:underline cursor-pointer">contact us</span></Link>.
              </p>
            </div>
          </div>
          
          {filteredGotras.length === 0 && (
            <div className="text-center py-24 glass rounded-3xl">
              <Shield className="w-16 h-16 text-muted-foreground/20 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground">No gotras found</h3>
              <p className="text-muted-foreground">Try adjusting your search or region filter.</p>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function GridCard({ gotra }: { gotra: typeof gotras[0] }) {
  return (
    <motion.div layout initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
      <Link href={`/gotras/${gotra.id}`}>
        <div className="glass-card p-6 h-full flex flex-col cursor-pointer relative overflow-hidden group">
          <div className="absolute -bottom-6 -right-6 opacity-5 group-hover:opacity-10 transition-opacity">
            <Shield className="w-32 h-32 text-primary" />
          </div>
          
          <div className="flex justify-between items-start mb-4 relative z-10">
            <div>
              <h3 className="text-2xl font-display font-bold text-foreground group-hover:text-primary transition-colors">{gotra.name}</h3>
              <h4 className="text-xl font-hindi text-muted-foreground">{gotra.nameHi}</h4>
            </div>
          </div>
          
          <p className="text-sm text-muted-foreground mb-6 flex-1 relative z-10 line-clamp-3">{gotra.description}</p>
          
          <div className="flex flex-wrap gap-2 relative z-10">
            {gotra.regions.map(r => (
              <span key={r} className="text-xs px-2 py-1 bg-background border border-border rounded text-muted-foreground">{r}</span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
