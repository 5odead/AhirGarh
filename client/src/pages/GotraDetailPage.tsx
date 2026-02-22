import React, { useEffect } from 'react';
import { useParams, Link } from 'wouter';
import { motion } from 'framer-motion';
import { ArrowLeft, Shield, MapPin, Users } from 'lucide-react';
import { gotras } from '@/data/gotras';
import { personalities } from '@/data/personalities';

export default function GotraDetailPage() {
  const { id } = useParams<{ id: string }>();
  const gotra = gotras.find(g => g.id.toString() === id);

  useEffect(() => { window.scrollTo(0, 0); }, [id]);

  if (!gotra) return <div className="text-center py-20"><h1 className="text-2xl">Gotra Not Found</h1><Link href="/gotras"><span className="text-primary hover:underline">Go Back</span></Link></div>;

  const peopleFromGotra = personalities.filter(p => p.gotra.toLowerCase() === gotra.name.toLowerCase() || p.gotra === 'Yadav'); // simplistic match for demo
  const relatedGotras = gotras.filter(g => g.vansh === gotra.vansh && g.id !== gotra.id).slice(0, 3);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen bg-background pt-12 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Link href="/gotras">
          <span className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 cursor-pointer transition-colors font-medium">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Directory
          </span>
        </Link>

        {/* Hero Card */}
        <div className="glass p-8 md:p-12 rounded-3xl shadow-xl relative overflow-hidden mb-12 border-t-4 border-t-primary">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Shield className="w-48 h-48 text-primary" />
          </div>
          
          <div className="relative z-10">
            <span className="px-4 py-1.5 bg-accent text-white text-sm font-bold rounded-full tracking-wider uppercase mb-6 inline-block">
              {gotra.vansh} Lineage
            </span>
            <h1 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-2">
              {gotra.name} <span className="text-primary font-hindi ml-2">{gotra.nameHi}</span>
            </h1>
            
            <div className="flex items-center text-muted-foreground mt-6 mb-8 bg-muted/10 p-4 rounded-xl w-max">
              <MapPin className="w-5 h-5 mr-3 text-primary" />
              <span className="font-medium">Primarily found in: {gotra.regions.join(", ")}</span>
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-xl leading-relaxed text-foreground/80">{gotra.description}</p>
            </div>
          </div>
        </div>

        {/* Notable People */}
        {peopleFromGotra.length > 0 && (
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <Users className="w-6 h-6 text-primary mr-3" />
              <h2 className="text-2xl font-display font-bold text-foreground">Associated Personalities</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {peopleFromGotra.slice(0,4).map(p => (
                <Link key={p.id} href={`/personalities/${p.id}`}>
                  <div className="glass-card p-4 rounded-2xl flex items-center cursor-pointer">
                    <img src={p.image} alt={p.name} className="w-16 h-16 rounded-full object-cover mr-4" />
                    <div>
                      <h4 className="font-bold text-foreground hover:text-primary transition-colors">{p.name}</h4>
                      <p className="text-xs text-muted-foreground">{p.category}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Related Gotras */}
        {relatedGotras.length > 0 && (
          <div>
            <h2 className="text-2xl font-display font-bold text-foreground mb-6">Other {gotra.vansh} Gotras</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {relatedGotras.map(g => (
                <Link key={g.id} href={`/gotras/${g.id}`}>
                  <div className="glass-card p-4 rounded-xl text-center cursor-pointer hover:bg-primary/5">
                    <h4 className="font-bold text-foreground">{g.name}</h4>
                    <span className="text-xs text-muted-foreground">{g.regions[0]}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

      </div>
    </motion.div>
  );
}
