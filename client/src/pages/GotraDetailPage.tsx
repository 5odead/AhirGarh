import React, { useEffect } from 'react';
import { useParams, Link } from 'wouter';
import { motion } from 'framer-motion';
import { ArrowLeft, Shield, MapPin, Map } from 'lucide-react';
import { gotras } from '@/data/gotras';
import { villages } from '@/data/villages';

export default function GotraDetailPage() {
  const { id } = useParams<{ id: string }>();
  const gotra = gotras.find(g => g.id.toString() === id);

  useEffect(() => { window.scrollTo(0, 0); }, [id]);

  if (!gotra) return <div className="text-center py-20"><h1 className="text-2xl">Gotra Not Found</h1><Link href="/gotras"><span className="text-primary hover:underline">Go Back</span></Link></div>;

  const relatedGotras = gotras.filter(g => g.id !== gotra.id).slice(0, 3);
  const associatedVillages = (gotra as any).villages || [];

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
            <h1 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-2">
              {gotra.name} <span className="text-primary font-hindi ml-2">{gotra.nameHi}</span>
            </h1>
            
            <div className="flex items-center text-muted-foreground mt-6 mb-8 bg-muted/10 p-4 rounded-xl w-max">
              <MapPin className="w-5 h-5 mr-3 text-primary" />
              <span className="font-medium">Primarily found in: {gotra.regions.join(", ")}</span>
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
              <p className="text-xl leading-relaxed text-foreground/80">{gotra.description}</p>
            </div>

            {/* Villages Section */}
            {associatedVillages.length > 0 && (
              <div className="mt-12">
                <h3 className="text-2xl font-display font-bold text-foreground mb-6 flex items-center">
                  <Map className="w-6 h-6 mr-3 text-primary" /> Notable Villages
                </h3>
                <div className="flex flex-wrap gap-2">
                  {associatedVillages.map((vName: string) => {
                    const village = villages.find(v => v.name.toLowerCase() === vName.toLowerCase());
                    return village ? (
                      <Link key={village.id} href={`/villages/${village.id}`}>
                        <span className="px-4 py-2 bg-primary/5 border border-primary/10 text-foreground font-bold rounded-full hover:bg-primary hover:text-white transition-all cursor-pointer">
                          {vName}
                        </span>
                      </Link>
                    ) : (
                      <span key={vName} className="px-4 py-2 bg-muted/50 border border-border text-muted-foreground font-medium rounded-full italic">
                        {vName}
                      </span>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Gotras */}
        {relatedGotras.length > 0 && (
          <div>
            <h2 className="text-2xl font-display font-bold text-foreground mb-6">Other Gotras</h2>
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
