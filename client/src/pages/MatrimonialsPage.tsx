import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart, Search, Filter, MessageCircle } from 'lucide-react';
import { matrimonials } from '@/data/matrimonials';

export default function MatrimonialsPage() {
  const [genderFilter, setGenderFilter] = useState('All');
  const [stateFilter, setStateFilter] = useState('All');
  
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const states = ['All', ...Array.from(new Set(matrimonials.map(m => m.state)))].sort();

  let displayed = matrimonials;
  if (genderFilter !== 'All') displayed = displayed.filter(m => m.gender === genderFilter.toLowerCase());
  if (stateFilter !== 'All') displayed = displayed.filter(m => m.state === stateFilter);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen bg-background pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner */}
        <div className="bg-gradient-to-r from-secondary to-primary text-white rounded-3xl p-8 md:p-12 mb-12 shadow-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between">
          <div className="absolute -right-10 -top-10 opacity-10">
            <Heart className="w-64 h-64" fill="currentColor" />
          </div>
          <div className="relative z-10 md:w-2/3 mb-6 md:mb-0 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-display font-bold mb-4">Community Matrimonials</h1>
            <p className="text-white/80 text-lg">A safe, community-driven notice board to help families connect. We do not store contact details publicly.</p>
          </div>
          <div className="relative z-10">
            <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-white text-secondary font-bold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all block text-center">
              List Your Profile
            </a>
          </div>
        </div>

        {/* Filters */}
        <div className="glass p-4 rounded-2xl mb-12 flex flex-col sm:flex-row gap-4 shadow-sm">
          <div className="flex items-center px-4 py-2 border-r border-border">
            <Filter className="w-5 h-5 text-muted-foreground mr-2" />
            <span className="font-medium text-foreground">Filters:</span>
          </div>
          <select 
            value={genderFilter} onChange={(e) => setGenderFilter(e.target.value)}
            className="flex-1 px-4 py-3 rounded-xl bg-background border border-border outline-none focus:border-primary text-foreground"
          >
            <option value="All">All Genders</option>
            <option value="Groom">Grooms (Boys)</option>
            <option value="Bride">Brides (Girls)</option>
          </select>
          <select 
            value={stateFilter} onChange={(e) => setStateFilter(e.target.value)}
            className="flex-1 px-4 py-3 rounded-xl bg-background border border-border outline-none focus:border-primary text-foreground"
          >
            {states.map(s => <option key={s} value={s}>{s === 'All' ? 'All States' : s}</option>)}
          </select>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {displayed.map((profile) => (
            <motion.div key={profile.id} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="glass-card rounded-2xl overflow-hidden flex flex-col">
              <div className="p-6 flex flex-col items-center text-center border-b border-border bg-muted/5 relative">
                <span className={`absolute top-4 right-4 text-xs font-bold px-2 py-1 rounded-md ${profile.gender === 'groom' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30' : 'bg-pink-100 text-pink-700 dark:bg-pink-900/30'}`}>
                  {profile.gender.toUpperCase()}
                </span>
                <img src={profile.avatar} alt="Avatar" className="w-24 h-24 rounded-full bg-background border-4 border-background shadow-md mb-4" />
                <h3 className="text-xl font-bold text-foreground">{profile.name}</h3>
                <p className="text-primary font-medium text-sm">{profile.age} yrs • {profile.gotra} Gotra</p>
              </div>
              <div className="p-6 flex-1 text-sm space-y-3 text-muted-foreground">
                <div className="flex justify-between border-b border-border/50 pb-2"><span>Location</span><span className="font-medium text-foreground text-right">{profile.city}, {profile.state}</span></div>
                <div className="flex justify-between border-b border-border/50 pb-2"><span>Education</span><span className="font-medium text-foreground text-right">{profile.education}</span></div>
                <div className="flex justify-between pb-2"><span>Profession</span><span className="font-medium text-foreground text-right">{profile.profession}</span></div>
              </div>
              <div className="p-4 bg-muted/10">
                <a href={`https://wa.me/919999999999?text=Hi, I am interested in profile ID: ${profile.id} (${profile.name}) on Ahirgarh.`} target="_blank" rel="noopener noreferrer" className="w-full py-3 bg-green-500 hover:bg-green-600 text-white rounded-xl font-medium flex justify-center items-center transition-colors shadow-md">
                  <MessageCircle className="w-5 h-5 mr-2" /> Connect via WhatsApp
                </a>
              </div>
            </motion.div>
          ))}
          {displayed.length === 0 && <div className="col-span-full py-12 text-center text-muted-foreground">No profiles match the filters.</div>}
        </div>

      </div>
    </motion.div>
  );
}
