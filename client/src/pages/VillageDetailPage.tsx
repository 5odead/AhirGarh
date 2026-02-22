import React, { useEffect } from 'react';
import { useParams, Link } from 'wouter';
import { motion } from 'framer-motion';
import { ArrowLeft, MapPin, Users, Send } from 'lucide-react';
import { villages } from '@/data/villages';

export default function VillageDetailPage() {
  const { id } = useParams<{ id: string }>();
  const village = villages.find(v => v.id.toString() === id);

  useEffect(() => { window.scrollTo(0, 0); }, [id]);

  if (!village) return <div className="text-center py-20"><h1 className="text-2xl">Not Found</h1><Link href="/villages"><span className="text-primary">Go Back</span></Link></div>;

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen bg-background pt-8 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Link href="/villages">
          <span className="inline-flex items-center text-muted-foreground hover:text-primary mb-6 cursor-pointer font-medium transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Directory
          </span>
        </Link>

        <div className="glass rounded-3xl overflow-hidden shadow-xl">
          <div className="h-64 sm:h-80 relative">
            <img src={village.image} alt={village.name} className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
               <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-2">{village.name}</h1>
               <div className="flex items-center text-white/90">
                 <MapPin className="w-5 h-5 mr-2 text-primary" />
                 <span className="text-lg">{village.district}, {village.state}</span>
               </div>
            </div>
          </div>

          <div className="p-8 md:p-12 flex flex-col md:flex-row gap-12">
            <div className="w-full md:w-1/3 space-y-6">
              <div className="glass p-5 rounded-2xl border border-border bg-muted/5">
                <h4 className="text-xs font-bold text-primary uppercase tracking-wider mb-1">Dominant Gotra</h4>
                <p className="text-xl font-display font-bold text-foreground">{village.dominantGotra}</p>
              </div>
              <div className="glass p-5 rounded-2xl border border-border bg-muted/5">
                <h4 className="text-xs font-bold text-primary uppercase tracking-wider mb-1">Est. Population</h4>
                <p className="text-xl font-display font-bold text-foreground">{village.population}</p>
              </div>
              {village.notablePeople.length > 0 && (
                <div className="glass p-5 rounded-2xl border border-border bg-muted/5">
                  <h4 className="text-xs font-bold text-primary uppercase tracking-wider mb-2 flex items-center"><Users className="w-4 h-4 mr-2"/> Notable People</h4>
                  <ul className="space-y-1">
                    {village.notablePeople.map(p => <li key={p} className="text-sm font-medium text-foreground">{p}</li>)}
                  </ul>
                </div>
              )}
            </div>

            <div className="w-full md:w-2/3">
              <h3 className="text-2xl font-display font-bold text-foreground mb-4">History & Significance</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-12">
                {village.history}
              </p>
              
              <div className="bg-primary/10 border border-primary/20 rounded-2xl p-6 text-center">
                <h4 className="font-bold text-foreground mb-2">Know more about {village.name}?</h4>
                <p className="text-sm text-muted-foreground mb-4">Help us document community history by adding information about local temples, traditions, or notable events.</p>
                <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
                  Submit via WhatsApp <Send className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </motion.div>
  );
}
