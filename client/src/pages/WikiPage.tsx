import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { articles } from '@/data/articles';
import { Search, ChevronRight } from 'lucide-react';
import Fuse from 'fuse.js';

export default function WikiPage() {
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');
  
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const categories = ['All', ...Array.from(new Set(articles.map(a => a.category)))];

  const fuse = new Fuse(articles, { keys: ['title', 'excerpt', 'category'], threshold: 0.3 });
  
  let displayedArticles = search 
    ? fuse.search(search).map(r => r.item)
    : articles;
    
  if (filter !== 'All') {
    displayedArticles = displayedArticles.filter(a => a.category === filter);
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen bg-background pt-8 pb-20">
      
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 to-accent/10 border-y border-border py-12 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">Ahirgarh Wiki</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">The definitive encyclopedia of Ahir history, culture, and heritage.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-8">
        
        {/* Left Sidebar */}
        <div className="w-full md:w-64 flex-shrink-0">
          <div className="sticky top-28 glass p-6 rounded-2xl">
            <h3 className="font-bold text-lg mb-4 text-foreground">Categories</h3>
            <ul className="space-y-2">
              {categories.map(cat => (
                <li key={cat}>
                  <button 
                    onClick={() => setFilter(cat)}
                    className={`w-full text-left px-4 py-2 rounded-lg text-sm transition-colors ${filter === cat ? 'bg-primary text-white font-medium shadow-md' : 'text-muted-foreground hover:bg-muted/50'}`}
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <div className="relative mb-8">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <input 
              type="text" 
              placeholder="Search wiki articles..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-xl bg-card border-2 border-border focus:border-primary focus:ring-0 transition-colors text-foreground"
            />
          </div>

          <motion.div layout className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {displayedArticles.map(article => (
              <motion.div layout key={article.id} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
                <Link href={`/wiki/${article.slug}`}>
                  <div className="glass-card overflow-hidden h-full flex flex-col cursor-pointer group">
                    <div className="h-48 overflow-hidden relative">
                      <img src={article.image} alt={article.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                      <div className="absolute top-4 left-4 bg-background/90 px-3 py-1 rounded-full text-xs font-bold text-primary backdrop-blur-sm">
                        {article.category}
                      </div>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-xl font-display font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{article.title}</h3>
                      <p className="text-muted-foreground text-sm flex-1 mb-4">{article.excerpt}</p>
                      <div className="flex justify-between items-center text-xs font-semibold text-muted-foreground uppercase tracking-wider border-t border-border pt-4">
                        <span>{article.readTime} Read</span>
                        <span className="flex items-center text-primary group-hover:translate-x-1 transition-transform">Read <ChevronRight className="w-4 h-4 ml-1" /></span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
            
            {displayedArticles.length === 0 && (
              <div className="col-span-full py-12 text-center text-muted-foreground glass rounded-2xl">
                <p>No articles found matching your criteria.</p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
