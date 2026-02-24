import React, { useEffect, useMemo } from 'react';
import { useParams, Link } from 'wouter';
import { motion } from 'framer-motion';
import { ArrowLeft, MapPin, Users, Send } from 'lucide-react';
import { villages } from '@/data/villages';
import { gotras } from '@/data/gotras';

export default function VillageDetailPage() {
  const { id } = useParams<{ id: string }>();
  const village = villages.find(v => v.id.toString() === id);

  useEffect(() => { window.scrollTo(0, 0); }, [id]);

  const relatedGotras = useMemo(() => {
    if (!village) return [];
    // simplistic logic for demo: some gotras have a villages[] array property added below
    // since current gotras.ts doesn't have villages[], we assume they might later
    return gotras.filter(g => (g as any).villages?.includes(village.name));
  }, [village]);

  if (!village) return <div className="text-center py-20"><h1 className="text-2xl">Not Found</h1><Link href="/villages"><span className="text-primary">Go Back</span></Link></div>;

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen bg-background pt-8 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Link href="/villages">
          <span className="inline-flex items-center text-muted-foreground hover:text-primary mb-6 cursor-pointer font-medium transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Villages
          </span>
        </Link>

        <div className="glass rounded-3xl overflow-hidden shadow-xl border border-border">
          <div className="p-8 md:p-12">
            <div className="mb-8">
              <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-3">{village.name}</h1>
              <div className="flex items-center text-muted-foreground">
                <MapPin className="w-5 h-5 mr-2 text-primary" />
                <span className="text-xl font-medium">{village.district}, {village.state}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="md:col-span-2">
                <h3 className="text-2xl font-display font-bold text-foreground mb-4">History & Significance</h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  {village.history}
                </p>

                <div className="mb-12">
                  <h3 className="text-2xl font-display font-bold text-foreground mb-6">Gotras found here</h3>
                  {relatedGotras.length > 0 ? (
                    <div className="flex flex-wrap gap-2">
                      {relatedGotras.map(g => (
                        <Link key={g.id} href={`/gotras/${g.id}`}>
                          <span className="px-4 py-2 bg-primary/10 border border-primary/20 text-primary rounded-full font-bold hover:bg-primary hover:text-white transition-all cursor-pointer">
                            {g.name}
                          </span>
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <div className="p-6 rounded-2xl bg-muted/30 border border-dashed border-border text-center">
                      <p className="text-muted-foreground mb-4 font-medium">No gotra data linked yet. Help us expand →</p>
                      <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-primary font-bold hover:underline">
                        Submit info on WhatsApp <Send className="w-4 h-4 ml-1" />
                      </a>
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-8">
                {village.notablePeople.length > 0 && (
                  <div className="glass p-6 rounded-2xl border border-border">
                    <h4 className="text-xs font-bold text-primary uppercase tracking-wider mb-4 flex items-center">
                      <Users className="w-4 h-4 mr-2"/> Notable People
                    </h4>
                    <ul className="space-y-3">
                      {village.notablePeople.map(p => (
                        <li key={p} className="text-base font-bold text-foreground flex items-start">
                          <span className="mr-2 text-primary">•</span> {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6">
                  <h4 className="font-bold text-foreground mb-2">Know more?</h4>
                  <p className="text-sm text-muted-foreground mb-4">Add local info, temples, or traditions.</p>
                  <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="w-full inline-flex items-center justify-center px-4 py-2 bg-primary text-white text-sm font-bold rounded-xl hover:bg-primary/90 transition-all">
                    WhatsApp <Send className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </motion.div>
  );
}