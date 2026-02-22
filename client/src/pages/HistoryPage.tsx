import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { timeline } from '@/data/timeline';
import { articles } from '@/data/articles';

export default function HistoryPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  
  const historyArticles = articles.filter(a => a.category === "History");

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen bg-background pb-24">
      
      <div className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/70 z-10" />
        <img src="https://images.unsplash.com/photo-1548013146-72479768bada?w=1920" alt="History" className="absolute inset-0 w-full h-full object-cover" />
        <div className="relative z-20 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-4">Epic History</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto font-hindi">यादव वंश का गौरवशाली इतिहास</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        
        <div className="relative border-l-2 border-primary/30 ml-4 md:ml-[50%] md:-translate-x-[1px] space-y-12 pb-20">
          {timeline.map((event, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div 
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`relative flex items-center justify-between md:justify-normal w-full ${isEven ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-[-9px] md:left-[0px] md:-ml-[7px] w-3.5 h-3.5 rounded-full bg-primary ring-4 ring-background z-10" />
                
                {/* Card */}
                <div className={`ml-8 md:ml-0 md:w-[45%] glass-card p-6 rounded-2xl ${isEven ? 'md:mr-auto' : 'md:ml-auto'}`}>
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full mb-3">{event.year} • {event.era}</span>
                  <h3 className="text-2xl font-display font-bold text-foreground mb-1">{event.title}</h3>
                  <h4 className="text-sm font-hindi text-muted-foreground mb-4">{event.titleHi}</h4>
                  {event.image && (
                    <img src={event.image} alt={event.title} className="w-full h-32 object-cover rounded-xl mb-4 opacity-90 hover:opacity-100 transition-opacity" />
                  )}
                  <p className="text-muted-foreground text-sm leading-relaxed">{event.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Featured History Articles */}
        <div className="mt-24">
          <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center">Deep Dive Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {historyArticles.map(article => (
              <Link key={article.id} href={`/wiki/${article.slug}`}>
                <div className="glass-card flex flex-col sm:flex-row h-full overflow-hidden cursor-pointer group">
                  <img src={article.image} className="w-full sm:w-1/3 h-48 sm:h-auto object-cover" alt="" />
                  <div className="p-6 flex flex-col justify-center">
                    <h3 className="text-xl font-display font-bold text-foreground group-hover:text-primary transition-colors mb-2">{article.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">{article.excerpt}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </motion.div>
  );
}
