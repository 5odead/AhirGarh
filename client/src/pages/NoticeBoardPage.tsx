import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Calendar, User, ChevronDown, Mail } from 'lucide-react';
import { notices } from '@/data/notices';

export default function NoticeBoardPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [expandedId, setExpandedId] = useState<number | null>(null);
  
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const categories = ['All', ...Array.from(new Set(notices.map(n => n.category)))];
  const displayed = activeCategory === 'All' ? notices : notices.filter(n => n.category === activeCategory);

  const getCategoryColor = (cat: string) => {
    const colors: Record<string, string> = {
      'Announcements': 'bg-red-100 text-red-700 border-red-200 dark:bg-red-900/30 dark:text-red-400',
      'Wiki Updates': 'bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-400',
      'General': 'bg-gray-100 text-gray-700 border-gray-200 dark:bg-gray-800 dark:text-gray-300',
      'Regional News': 'bg-green-100 text-green-700 border-green-200 dark:bg-green-900/30 dark:text-green-400',
      'Youth': 'bg-purple-100 text-purple-700 border-purple-200 dark:bg-purple-900/30 dark:text-purple-400',
      'History & Research': 'bg-amber-100 text-amber-700 border-amber-200 dark:bg-amber-900/30 dark:text-amber-400',
      'Culture': 'bg-pink-100 text-pink-700 border-pink-200 dark:bg-pink-900/30 dark:text-pink-400',
      'NRI Corner': 'bg-indigo-100 text-indigo-700 border-indigo-200 dark:bg-indigo-900/30 dark:text-indigo-400',
    };
    return colors[cat] || colors['General'];
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen bg-background pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-8">
        
        {/* Left Sidebar */}
        <div className="w-full md:w-64 flex-shrink-0">
          <div className="sticky top-28 glass p-6 rounded-2xl shadow-sm">
            <h2 className="font-display font-bold text-2xl text-foreground mb-6 flex items-center">
              <MessageSquare className="w-5 h-5 mr-2 text-primary" /> Board
            </h2>
            <ul className="space-y-2">
              {categories.map(cat => (
                <li key={cat}>
                  <button 
                    onClick={() => setActiveCategory(cat)}
                    className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${activeCategory === cat ? 'bg-primary text-white shadow-md' : 'text-muted-foreground hover:bg-muted/60'}`}
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Main Feed */}
        <div className="flex-1 space-y-4">
          {displayed.map((notice) => (
            <motion.div layout key={notice.id} className="glass rounded-2xl overflow-hidden shadow-sm border border-border/60 hover:border-primary/30 transition-colors">
              <div 
                className="p-6 cursor-pointer flex flex-col md:flex-row gap-4 items-start"
                onClick={() => setExpandedId(expandedId === notice.id ? null : notice.id)}
              >
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full border ${getCategoryColor(notice.category)}`}>
                      {notice.category}
                    </span>
                    <span className="text-xs text-muted-foreground flex items-center"><Calendar className="w-3 h-3 mr-1"/> {notice.date}</span>
                    <span className="text-xs text-muted-foreground flex items-center"><User className="w-3 h-3 mr-1"/> {notice.author}</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-1">{notice.title}</h3>
                  {notice.titleHi && <h4 className="text-sm font-hindi text-muted-foreground mb-2">{notice.titleHi}</h4>}
                  <p className="text-sm text-muted-foreground line-clamp-2">{notice.excerpt}</p>
                </div>
                
                <div className="flex items-center self-end md:self-center ml-auto">
                  <div className="flex items-center text-muted-foreground bg-muted/20 px-3 py-1.5 rounded-lg text-sm mr-4">
                    <MessageSquare className="w-4 h-4 mr-1.5" /> {notice.replies}
                  </div>
                  <button className={`p-2 rounded-full transition-transform ${expandedId === notice.id ? 'rotate-180 bg-primary/10 text-primary' : 'bg-muted/20 text-muted-foreground'}`}>
                    <ChevronDown className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <AnimatePresence>
                {expandedId === notice.id && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }} 
                    animate={{ height: 'auto', opacity: 1 }} 
                    exit={{ height: 0, opacity: 0 }}
                    className="border-t border-border/50 bg-muted/5"
                  >
                    <div className="p-6 md:px-8">
                      <p className="text-foreground leading-relaxed whitespace-pre-wrap">{notice.content}</p>
                      
                      <div className="mt-6 pt-6 border-t border-border/50 flex justify-end">
                        <button 
                          onClick={(e) => { e.stopPropagation(); window.location.href = `mailto:ahirgarh@gmail.com?subject=Re: ${notice.title}`; }}
                          className="flex items-center px-5 py-2.5 bg-primary text-white rounded-xl text-sm font-medium hover:bg-primary/90 transition-colors shadow-sm"
                        >
                          <Mail className="w-4 h-4 mr-2" /> Reply to Editor
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
          {displayed.length === 0 && <div className="p-12 text-center text-muted-foreground glass rounded-2xl">No notices in this category.</div>}
        </div>
      </div>
    </motion.div>
  );
}
