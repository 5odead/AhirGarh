import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Music, CalendarDays, Heart, X } from 'lucide-react';

export default function CulturePage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const sections = [
    { id: 1, title: "Rasiya Folk Music", icon: Music, text: "A traditional folk music genre of the Braj region performed predominantly by Ahir communities, celebrating the love of Radha and Krishna through soulful melodies.", img: "https://images.unsplash.com/photo-1583531352515-8884af319dc1?w=800" },
    { id: 2, title: "Janmashtami Celebrations", icon: CalendarDays, text: "The most sacred festival for the community, celebrating the birth of Lord Krishna with fasting, all-night prayers, and dramatic performances of the Krishna Leela.", img: "https://images.unsplash.com/photo-1609154807254-d5d4f5ce3f82?w=800" },
    { id: 3, title: "Pastoral Heritage", icon: Heart, text: "The deep connection with cattle, especially cows, remains central to the identity. Dairy farming and cattle care are traditional occupations that many families maintain.", img: "https://images.unsplash.com/photo-1542718610-a1e3ff5dae7a?w=800" }
  ];

  const gallery = [
    "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800",
    "https://images.unsplash.com/photo-1583531352515-8884af319dc1?w=800",
    "https://images.unsplash.com/photo-1609154807254-d5d4f5ce3f82?w=800",
    "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=800",
    "https://images.unsplash.com/photo-1548013146-72479768bada?w=800",
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800"
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen bg-background pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">Culture & Traditions</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Discover the vibrant music, festivals, and way of life that define the Ahir community.</p>
        </div>

        <div className="space-y-12 lg:space-y-24 mb-24">
          {sections.map((sec, i) => (
            <motion.div 
              key={sec.id} 
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className={`flex flex-col lg:flex-row items-center gap-12 ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="w-full lg:w-1/2">
                <div className="glass-card rounded-3xl overflow-hidden shadow-xl">
                  <img src={sec.img} alt={sec.title} className="w-full h-80 object-cover" />
                </div>
              </div>
              <div className="w-full lg:w-1/2 px-4">
                <sec.icon className="w-12 h-12 text-primary mb-6" />
                <h2 className="text-3xl font-display font-bold text-foreground mb-4">{sec.title}</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">{sec.text}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Gallery */}
        <div className="mt-24">
          <h2 className="text-3xl font-display font-bold text-foreground text-center mb-12">Visual Gallery</h2>
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {gallery.map((img, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ scale: 1.03 }}
                className="overflow-hidden rounded-2xl cursor-zoom-in break-inside-avoid shadow-md"
                onClick={() => setSelectedImage(img)}
              >
                <img src={img} className="w-full h-auto" alt="Culture gallery" />
              </motion.div>
            ))}
          </div>
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <button className="absolute top-6 right-6 text-white hover:text-primary transition-colors p-2 bg-black/50 rounded-full">
              <X className="w-8 h-8" />
            </button>
            <motion.img 
              initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }}
              src={selectedImage} 
              alt="Enlarged" 
              className="max-w-full max-h-[90vh] rounded-xl shadow-2xl" 
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
