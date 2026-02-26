import React, { useEffect, useMemo } from 'react';
import { useParams, Link } from 'wouter';
import { motion } from 'framer-motion';
import { ArrowLeft, Check } from 'lucide-react';
import { personalities } from '@/data/personalities';

const getInitials = (name: string) => {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 0) return "";
  const first = parts[0][0];
  const last = parts.length > 1 ? parts[parts.length - 1][0] : "";
  return (first + last).toUpperCase();
};

export default function PersonalityDetailPage() {
  const { id } = useParams<{ id: string }>();
  const personality = personalities.find(p => p.id.toString() === id);

  useEffect(() => { window.scrollTo(0, 0); }, [id]);

  const related = useMemo(() => {
    if (!personality) return [];
    return personalities
      .filter(p => p.category === personality.category && p.id !== personality.id)
      .slice(0, 3);
  }, [personality]);

  if (!personality) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">Personality Not Found</h1>
        <Link href="/personalities">
          <button className="flex items-center text-primary hover:underline">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Personalities
          </button>
        </Link>
      </div>
    );
  }

  const infoRows = [
    { label: "Born", value: personality.born },
    { label: "Died", value: personality.died },
    { label: "Birth Place", value: personality.birthPlace },
    { label: "Known For", value: personality.knownFor },
    { label: "Category", value: personality.category, isBadge: true },
  ].filter(row => row.value !== "");

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen bg-background pt-8 pb-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/personalities">
          <button className="flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors font-medium">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Personalities
          </button>
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-5">
            {personality.photo ? (
              <img src={personality.photo} alt={personality.name} className="w-full aspect-[4/5] object-cover rounded-2xl shadow-xl border border-border" />
            ) : (
              <div className="w-full aspect-[4/5] bg-primary/5 rounded-2xl flex items-center justify-center border border-border shadow-xl">
                <div className="w-32 h-32 rounded-full bg-primary flex items-center justify-center text-white text-5xl font-bold">
                  {getInitials(personality.name)}
                </div>
              </div>
            )}
          </div>

          <div className="md:col-span-7 flex flex-col justify-center">
            <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-2">{personality.name}</h1>
            <p className="text-2xl text-primary font-hindi mb-8">{personality.nameHi}</p>
            
            <div className="glass rounded-2xl border border-border overflow-hidden">
              {infoRows.map((row, idx) => (
                <div key={row.label} className={`flex items-center p-4 ${idx !== infoRows.length - 1 ? 'border-b border-border' : ''}`}>
                  <span className="w-32 text-sm font-bold text-muted-foreground uppercase tracking-wider">{row.label}</span>
                  {row.isBadge ? (
                    <span className="px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full text-xs font-bold">
                      {row.value}
                    </span>
                  ) : (
                    <span className="text-foreground font-medium">{row.value}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8">
            <h2 className="text-3xl font-display font-bold text-foreground mb-6">Biography</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground leading-relaxed space-y-6">
              {personality.bio.split('\n\n').map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>

          {personality.achievements.length > 0 && (
            <div className="lg:col-span-4">
              <h2 className="text-2xl font-display font-bold text-foreground mb-6">Achievements</h2>
              <ul className="space-y-4">
                {personality.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start">
                    <div className="mt-1 mr-3 p-1 rounded-full bg-primary/10 text-primary">
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="text-foreground font-medium leading-snug">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {related.length > 0 && (
          <div className="mt-24 border-t border-border pt-16">
            <h2 className="text-3xl font-display font-bold text-foreground mb-8">More Personalities</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {related.map(p => (
                <Link key={p.id} href={`/personalities/${p.id}`}>
                  <div className="glass-card p-4 rounded-xl cursor-pointer hover:border-primary/40 transition-all group">
                    <div className="aspect-square rounded-lg overflow-hidden mb-4 bg-primary/5 flex items-center justify-center">
                      {p.photo ? (
                        <img src={p.photo} alt={p.name} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white text-xl font-bold">
                          {getInitials(p.name)}
                        </div>
                      )}
                    </div>
                    <h4 className="font-bold text-foreground group-hover:text-primary transition-colors">{p.name}</h4>
                    <p className="text-xs text-muted-foreground line-clamp-1">{p.knownFor}</p>
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