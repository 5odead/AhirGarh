import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'wouter';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ArrowLeft, Clock, Calendar, Share2 } from 'lucide-react';
import { articles } from '@/data/articles';

export default function ArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const article = articles.find(a => a.slug === slug);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-background">
        <h1 className="text-4xl font-display font-bold mb-4">Article Not Found</h1>
        <Link href="/wiki"><span className="text-primary hover:underline">← Back to Wiki</span></Link>
      </div>
    );
  }

  const related = articles.filter(a => a.category === article.category && a.id !== article.id).slice(0, 3);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen bg-background pb-20">
      {/* Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-primary z-[60] origin-left" style={{ scaleX }} />

      {/* Hero Header */}
      <div className="relative h-[50vh] min-h-[400px] w-full">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <img src={article.image} alt={article.title} className="absolute inset-0 w-full h-full object-cover" />
        
        <div className="absolute inset-0 z-20 flex flex-col justify-end max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <Link href="/wiki">
            <span className="inline-flex items-center text-white/80 hover:text-white mb-6 text-sm font-medium cursor-pointer">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Wiki
            </span>
          </Link>
          <span className="bg-primary/90 text-white text-xs font-bold px-3 py-1 rounded-full w-max mb-4 uppercase tracking-wider">{article.category}</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4 leading-tight">
            {article.title}
          </h1>
          <h2 className="text-2xl font-hindi text-white/80 mb-6">{article.titleHi}</h2>
          
          <div className="flex items-center space-x-6 text-white/70 text-sm font-medium">
            <span className="flex items-center"><Clock className="w-4 h-4 mr-2" /> {article.readTime} read</span>
            <span className="flex items-center"><Calendar className="w-4 h-4 mr-2" /> {article.date}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="glass p-8 md:p-12 rounded-3xl -mt-24 relative z-30 shadow-xl">
          {/* Drop cap for first letter */}
          <div className="prose prose-lg dark:prose-invert max-w-none 
            prose-p:leading-relaxed prose-p:text-muted-foreground prose-p:font-sans
            first-letter:text-6xl first-letter:font-display first-letter:font-bold first-letter:text-primary first-letter:float-left first-letter:mr-3 first-letter:mt-1
          ">
            {article.content.split('\n\n').map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-border flex justify-between items-center">
             <div className="font-medium text-foreground">Share this article:</div>
             <button className="p-3 bg-muted/20 hover:bg-primary/10 hover:text-primary rounded-full transition-colors" aria-label="Share">
               <Share2 className="w-5 h-5" />
             </button>
          </div>
        </div>
      </div>

      {/* Related */}
      {related.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
          <h3 className="text-2xl font-display font-bold mb-8 text-foreground">Related Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {related.map(rel => (
              <Link key={rel.id} href={`/wiki/${rel.slug}`}>
                <div className="glass-card p-4 rounded-2xl cursor-pointer flex items-center space-x-4 h-full">
                  <img src={rel.image} alt={rel.title} className="w-20 h-20 rounded-xl object-cover" />
                  <div>
                    <h4 className="font-bold text-foreground line-clamp-2 hover:text-primary transition-colors">{rel.title}</h4>
                    <span className="text-xs text-muted-foreground mt-1 block">{rel.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
}
