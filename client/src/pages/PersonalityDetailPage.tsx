import React, { useEffect } from 'react';
import { useParams, Link } from 'wouter';
import { motion } from 'framer-motion';
import { ArrowLeft, Award, MapPin, Calendar, Users } from 'lucide-react';
import { personalities } from '@/data/personalities';

export default function PersonalityDetailPage() {
  const { id } = useParams<{ id: string }>();
  const person = personalities.find(p => p.id.toString() === id);

  useEffect(() => { window.scrollTo(0, 0); }, [id]);

  if (!person) return <div className="text-center py-20"><h1 className="text-2xl">Not Found</h1><Link href="/personalities"><span className="text-primary hover:underline">Go Back</span></Link></div>;

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen bg-background pt-8 pb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Link href="/personalities">
          <span className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 cursor-pointer font-medium transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Directory
          </span>
        </Link>

        <div className="glass rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
          {/* Left Column: Image & Stats */}
          <div className="w-full md:w-1/3 bg-muted/10 p-8 border-r border-border flex flex-col items-center text-center">
            <img src={person.image} alt={person.name} className="w-48 h-48 object-cover rounded-full shadow-lg border-4 border-background mb-6" />
            <h2 className="text-3xl font-display font-bold text-foreground mb-1">{person.name}</h2>
            <h3 className="text-xl font-hindi text-muted-foreground mb-6">{person.nameHi}</h3>
            
            <div className="w-full space-y-4 text-left mt-4">
              <div className="flex items-center p-3 bg-background rounded-xl shadow-sm border border-border/50">
                <Award className="w-5 h-5 text-primary mr-3" />
                <div><p className="text-xs text-muted-foreground">Category</p><p className="font-semibold text-sm">{person.category}</p></div>
              </div>
              <div className="flex items-center p-3 bg-background rounded-xl shadow-sm border border-border/50">
                <MapPin className="w-5 h-5 text-primary mr-3" />
                <div><p className="text-xs text-muted-foreground">Origin State</p><p className="font-semibold text-sm">{person.state}</p></div>
              </div>
              <div className="flex items-center p-3 bg-background rounded-xl shadow-sm border border-border/50">
                <Users className="w-5 h-5 text-primary mr-3" />
                <div><p className="text-xs text-muted-foreground">Gotra</p><p className="font-semibold text-sm">{person.gotra}</p></div>
              </div>
              <div className="flex items-center p-3 bg-background rounded-xl shadow-sm border border-border/50">
                <Calendar className="w-5 h-5 text-primary mr-3" />
                <div><p className="text-xs text-muted-foreground">Lifespan</p><p className="font-semibold text-sm">{person.born} - {person.died || 'Present'}</p></div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio */}
          <div className="w-full md:w-2/3 p-8 md:p-12 flex flex-col justify-center">
            <div className="mb-8">
              <h3 className="text-primary font-bold tracking-wider text-sm uppercase mb-2">Key Achievement</h3>
              <p className="text-xl md:text-2xl font-display font-semibold text-foreground leading-snug">
                "{person.achievement}"
              </p>
            </div>
            
            <div className="h-px bg-border w-full mb-8"></div>
            
            <h3 className="text-2xl font-display font-bold text-foreground mb-4">Biography</h3>
            <div className="prose prose-lg dark:prose-invert">
              <p className="text-muted-foreground leading-relaxed">{person.bio}</p>
            </div>
          </div>
        </div>

      </div>
    </motion.div>
  );
}
