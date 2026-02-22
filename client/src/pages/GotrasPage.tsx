import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { Search, Shield } from 'lucide-react';
import { gotras } from '@/data/gotras';
import Fuse from 'fuse.js';

export default function GotrasPage() {
  const [search, setSearch] = useState('');
  const [activeVansh, setActiveVansh] = useState('All');
  const [activeRegion, setActiveRegion] = useState('All');

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const regions = ['All', 'UP', 'Bihar', 'Haryana', 'Rajasthan', 'Maharashtra', 'MP'];

  const fuse = new Fuse(gotras, { keys: ['name', 'nameHi', 'description', 'regions'] });
  
  let results = search ? fuse.search(search).map(r => r.item) : gotras;
  if (activeRegion !== 'All') results = results.filter(g => g.regions.includes(activeRegion));

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen bg-background pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">Ahir Gotras Directory</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Explore the diverse lineages and ancestral clans of the Ahir community.</p>
        </div>

        {/* Filters */}
        <div className="glass p-6 rounded-3xl mb-12 shadow-md flex flex-col gap-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <input 
              type="text" 
              placeholder="Search by gotra name, region, or history..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-xl bg-background border border-border focus:border-primary text-foreground"
            />
          </div>

          <div className="flex flex-col lg:flex-row gap-6 justify-end">
            {/* Region Select */}
            <select 
              value={activeRegion}
              onChange={(e) => setActiveRegion(e.target.value)}
              className="px-4 py-2 rounded-xl bg-background border border-border text-foreground text-sm outline-none focus:border-primary"
            >
              {regions.map(r => <option key={r} value={r}>{r === 'All' ? 'All Regions' : r}</option>)}
            </select>
          </div>
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {results.map((gotra) => (
            <motion.div layout key={gotra.id} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
              <Link href={`/gotras/${gotra.id}`}>
                <div className="glass-card p-6 h-full flex flex-col cursor-pointer relative overflow-hidden group">
                  {/* Decorative Watermark */}
                  <div className="absolute -bottom-6 -right-6 opacity-5 group-hover:opacity-10 transition-opacity">
                     <Shield className="w-32 h-32 text-primary" />
                  </div>
                  
                  <div className="flex justify-between items-start mb-4 relative z-10">
                    <div>
                      <h3 className="text-2xl font-display font-bold text-foreground group-hover:text-primary transition-colors">{gotra.name}</h3>
                      <h4 className="text-xl font-hindi text-muted-foreground">{gotra.nameHi}</h4>
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-6 flex-1 relative z-10">{gotra.description}</p>
                  
                  <div className="flex flex-wrap gap-2 relative z-10">
                    {gotra.regions.map(r => (
                      <span key={r} className="text-xs px-2 py-1 bg-background border border-border rounded text-muted-foreground">{r}</span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
          
          {results.length === 0 && (
            <div className="col-span-full text-center py-12 text-muted-foreground">
              No gotras found.
            </div>
          )}
        </motion.div>

      </div>
    </motion.div>
  );
}
