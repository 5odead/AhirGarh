import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Mail, ChevronDown } from 'lucide-react';

export default function AboutPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  
  const faqs = [
    { q: "What is Ahirgarh?", a: "Ahirgarh is a community-driven digital encyclopedia and portal dedicated to preserving and sharing the history, culture, and achievements of the Ahir/Yadav community worldwide." },
    { q: "How can I contribute an article?", a: "You can submit historically accurate, well-researched articles by emailing us or sending a WhatsApp message. Our editorial team reviews all submissions before publishing." },
    { q: "Is Ahirgarh affiliated with any political party?", a: "No. Ahirgarh is strictly a cultural, historical, and community heritage platform. We are politically neutral and independent." },
    { q: "How do I list a matrimonial profile?", a: "Send your details via WhatsApp to our official number. We do not store or display direct contact numbers on the site for privacy reasons." },
    { q: "Who built this platform?", a: "Ahirgarh was built by a group of community volunteers and tech professionals who wanted to create a modern digital home for our heritage." }
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="glass p-8 rounded-3xl text-center">
            <h3 className="text-2xl font-bold mb-4">Join via WhatsApp</h3>
            <p className="text-muted-foreground mb-6">Get weekly updates, submit articles, or list matrimonial profiles directly through our secure WhatsApp channel.</p>
            <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 bg-[#25D366] text-white font-bold rounded-xl hover:bg-[#1DA851] transition-colors shadow-lg">
              <MessageCircle className="w-5 h-5 mr-2" /> Message Us
            </a>
          </div>
          <div className="glass p-8 rounded-3xl text-center">
            <h3 className="text-2xl font-bold mb-4">Email the Editors</h3>
            <p className="text-muted-foreground mb-6">For detailed historical submissions, corrections to wiki articles, or partnership inquiries.</p>
            <a href="mailto:contact@ahirgarh.com" className="inline-flex items-center px-6 py-3 bg-secondary text-white font-bold rounded-xl hover:bg-secondary/90 transition-colors shadow-lg">
              <Mail className="w-5 h-5 mr-2" /> Email Us
            </a>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center">The Editorial Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[1, 2, 3].map(i => (
              <div key={i} className="glass-card p-6 rounded-2xl flex flex-col items-center text-center">
                <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=Editor${i}`} className="w-20 h-20 bg-muted/20 rounded-full mb-4 border-2 border-border" alt="Editor" />
                <h4 className="font-bold text-lg text-foreground">Community Editor {i}</h4>
                <p className="text-sm text-muted-foreground">History & Research</p>
              </div>
            ))}
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
