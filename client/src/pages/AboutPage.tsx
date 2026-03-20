import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Instagram, ChevronDown } from 'lucide-react';

export default function AboutPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  
  const faqs = [
    { q: "What is Ahirgarh?", a: "Ahirgarh is a community-driven digital encyclopedia and portal dedicated to preserving and sharing the history, culture, and achievements of the Ahir/Yadav community worldwide." },
    { q: "How can I contribute an article?", a: "You can submit historically accurate, well-researched articles by reaching out to us on Instagram. Our editorial team reviews all submissions before publishing." },
    { q: "Is Ahirgarh affiliated with any political party?", a: "No. Ahirgarh is strictly a cultural, historical, and community heritage platform. We are politically neutral and independent." },
    { q: "Who built this platform?", a: "Ahirgarh was created by an individual who prefers to remain anonymous — someone with a deep connection to this heritage and a belief that the work should speak for itself." }
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen bg-background pt-12 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">About Ahirgarh</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Ahirgarh translates to "The Fort of the Ahirs." In an era where history is easily forgotten, we built this digital fort to preserve our roots, celebrate our heroes, and connect our global community.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 mb-16">
          <div className="glass p-8 rounded-3xl text-center">
            <h3 className="text-2xl font-bold mb-4">Connect With Us</h3>
            <p className="text-muted-foreground mb-6">For historical submissions, gotra information, corrections, or any community contributions — reach out to us directly on Instagram.</p>
            <a
              href="https://www.instagram.com/the_ahirgarh"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-primary/10 text-primary border border-primary/30 font-bold rounded-xl hover:bg-primary hover:text-white transition-all shadow-lg hover:shadow-primary/25"
            >
              <Instagram className="w-5 h-5 mr-2" /> @the_ahirgarh
            </a>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group glass rounded-2xl [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-lg text-foreground">
                  {faq.q}
                  <span className="transition group-open:rotate-180 text-primary">
                    <ChevronDown className="w-5 h-5" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-muted-foreground leading-relaxed border-t border-border/50 pt-4 mt-2">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>

      </div>
    </motion.div>
  );
}
