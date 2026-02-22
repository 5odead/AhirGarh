import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { Search, MapPin, Map } from 'lucide-react';
import { villages } from '@/data/villages';
import Fuse from 'fuse.js';

export default function VillagesPage() {
  const [search, setSearch] = useState('');
  const [stateFilter, setStateFilter] = useState('All');
  
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const states = ['All', ...Array.from(new Set(villages.map(v => v.state)))].sort();

  const fuse = new Fuse(villages, { keys: ['name', 'district', 'state', 'dominantGotra'] });
  let displayed = search ? fuse.search(search).map(r => r.item) : villages;
  if (stateFilter !== 'All') displayed = displayed.filter(v => v.state === stateFilter);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen bg-background pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <Map className="w-16 h-16 text-primary mx-auto mb-4 opacity-80" />
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">Ahir Villages & Heartlands</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Explore the historic settlements and modern heartlands of the community.</p>
        </div>

        <div className="glass p-4 rounded-2xl mb-12 flex flex-col md:flex-row gap-4 shadow-sm">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <input 
              type="text" 
              placeholder="Search by village, district, state..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-background border border-border focus:border-primary text-foreground"
            />
          </div>
          <select 
            value={stateFilter}
            onChange={(e) => setStateFilter(e.target.value)}
            className="px-4 py-3 rounded-xl bg-background border border-border text-foreground md:w-64 outline-none focus:border-primary"
          >
            {states.map(s => <option key={s} value={s}>{s === 'All' ? 'All States' : s}</option>)}
          </select>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {displayed.map((village) => (
            <motion.div layout key={village.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <Link href={`/villages/${village.id}`}>
                <div className="glass-card rounded-2xl overflow-hidden h-full cursor-pointer group flex flex-col">
                  <div className="h-48 relative overflow-hidden">
                    <img src={village.image} alt={village.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute top-3 left-3 bg-background/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-foreground flex items-center">
                      <MapPin className="w-3 h-3 text-primary mr-1" /> {village.state}
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-2xl font-display font-bold text-foreground mb-1 group-hover:text-primary transition-colors">{village.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4 font-medium">{village.district} District</p>
                    <div className="mt-auto pt-4 border-t border-border flex justify-between items-center text-sm">
                      <span className="bg-primary/10 text-primary px-2 py-1 rounded font-semibold">{village.dominantGotra}</span>
                      <span className="text-muted-foreground">{village.population}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
          {displayed.length === 0 && <div className="col-span-full py-12 text-center text-muted-foreground">No villages found.</div>}
        </motion.div>

      </div>
    </motion.div>
  );
}
