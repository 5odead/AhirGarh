import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ChevronDown, ArrowRight, BookOpen, Shield, Users, MapPin, History, MessageSquare, Heart } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { articles } from '@/data/articles';

// Reusable components inside HomePage for specific sections
function Hero() {
  const { lang, t } = useLanguage();

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Animated Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-secondary/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>
      
      {/* Grain Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <filter id="noiseFilter"><feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="3" stitchTiles="stitch"/></filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="glass p-8 md:p-12 rounded-3xl"
        >
          <h1 className="font-hindi text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-gradient tracking-tight leading-tight">
            {t.hero.headline}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t.hero.subHeadline}
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link href="/wiki">
              <span className="px-8 py-4 rounded-xl bg-primary text-white font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto cursor-pointer flex items-center justify-center">
                {t.hero.exploreWiki} <ArrowRight className="ml-2 w-5 h-5" />
              </span>
            </Link>
            <Link href="/gotras">
              <span className="px-8 py-4 rounded-xl border-2 border-primary text-primary hover:bg-primary/5 font-semibold transition-all duration-300 w-full sm:w-auto cursor-pointer">
                {t.hero.viewGotras}
              </span>
            </Link>
          </div>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }} 
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-muted-foreground"
      >
        <ChevronDown className="w-8 h-8 opacity-50" />
      </motion.div>
    </div>
  );
}

function StatsBar() {
  const { t } = useLanguage();
  const [inView, setInView] = useState(false);
  const stats = [
    { label: t.stats.articles, count: 500, icon: BookOpen },
    { label: t.stats.gotras, count: 30, icon: Shield },
    { label: t.stats.villages, count: 25, icon: MapPin },
    { label: t.stats.personalities, count: 15, icon: Users },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onViewportEnter={() => setInView(true)}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 -mt-16 relative z-20"
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="glass-card p-6 text-center">
            <stat.icon className="w-8 h-8 mx-auto text-primary mb-3 opacity-80" />
            <h3 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-1">
              {inView ? stat.count : 0}+
            </h3>
            <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">{stat.label}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function BentoGrid() {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-6 auto-rows-[200px]">
          
          {/* History - Large Card */}
          <Link href="/history">
            <motion.div whileHover={{ y: -4, scale: 0.99 }} className="md:col-span-2 md:row-span-2 relative rounded-3xl overflow-hidden cursor-pointer group shadow-lg h-full block">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1548013146-72479768bada?w=800')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <History className="w-8 h-8 text-accent mb-3" />
                <h3 className="text-3xl font-display font-bold text-white mb-2">Epic History</h3>
                <p className="text-neutral-300">Discover the kingdoms, wars, and legacy of the ancient Yaduvanshi rulers.</p>
              </div>
            </motion.div>
          </Link>

          {/* Gotras */}
          <Link href="/gotras">
            <motion.div whileHover={{ y: -4, scale: 0.99 }} className="md:col-span-2 md:row-span-1 bg-gradient-to-br from-primary to-accent rounded-3xl p-8 cursor-pointer relative overflow-hidden shadow-lg h-full flex flex-col justify-center">
              <Shield className="w-8 h-8 text-white/80 mb-3" />
              <h3 className="text-2xl font-display font-bold text-white mb-2">Gotras & Lineage</h3>
              <p className="text-white/90">Explore the 30+ documented gotras of the Ahir community.</p>
              {/* Decorative tags */}
              <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-20">
                <span className="bg-white px-3 py-1 rounded-full text-xs font-bold text-black">Kashyap</span>
                <span className="bg-white px-3 py-1 rounded-full text-xs font-bold text-black ml-4">Atri</span>
              </div>
            </motion.div>
          </Link>

          {/* Personalities */}
          <Link href="/personalities">
            <motion.div whileHover={{ y: -4, scale: 0.99 }} className="md:col-span-1 md:row-span-2 bg-gradient-to-br from-secondary to-neutral-900 rounded-3xl p-8 cursor-pointer relative overflow-hidden shadow-lg h-full flex flex-col justify-end">
              <Users className="w-8 h-8 text-white mb-3" />
              <h3 className="text-2xl font-display font-bold text-white mb-2">Legends</h3>
              <p className="text-neutral-300 text-sm">Famous personalities who shaped modern India.</p>
            </motion.div>
          </Link>

          {/* Culture */}
          <Link href="/culture">
            <motion.div whileHover={{ y: -4, scale: 0.99 }} className="glass-card p-6 h-full flex flex-col justify-center items-center text-center cursor-pointer">
              <Heart className="w-8 h-8 text-primary mb-3" />
              <h3 className="text-xl font-display font-bold text-foreground">Culture</h3>
            </motion.div>
          </Link>

          {/* Matrimonials */}
          <Link href="/matrimonials">
            <motion.div whileHover={{ y: -4, scale: 0.99 }} className="glass-card p-6 h-full flex flex-col justify-center items-center text-center cursor-pointer">
              <Users className="w-8 h-8 text-accent mb-3" />
              <h3 className="text-xl font-display font-bold text-foreground">Matrimonials</h3>
            </motion.div>
          </Link>

          {/* Notice Board */}
          <Link href="/notice-board">
            <motion.div whileHover={{ y: -4, scale: 0.99 }} className="glass-card p-6 h-full flex flex-col justify-center items-center text-center cursor-pointer md:col-span-2">
              <MessageSquare className="w-8 h-8 text-secondary mb-3" />
              <h3 className="text-xl font-display font-bold text-foreground">Community Notice Board</h3>
              <p className="text-sm text-muted-foreground mt-2">Announcements, events, and discussions</p>
            </motion.div>
          </Link>

        </div>
      </div>
    </section>
  );
}

function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}>
      {children}
    </motion.div>
  );
}

export default function HomePage() {
  const { t } = useLanguage();
  const featuredArticle = React.useMemo(() => {
    const featured = articles.filter(a => a.featured);
    return featured[Math.floor(Math.random() * featured.length)];
  }, []);
  
  const latestArticles = articles.slice(0, 3);

  // Scroll to top on mount
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <PageWrapper>
      {/* Ticker */}
      <div className="bg-primary text-primary-foreground text-xs py-2 overflow-hidden whitespace-nowrap">
        <motion.div 
          animate={{ x: ["100%", "-100%"] }} 
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          className="inline-block"
        >
          <span className="font-semibold">LATEST UPDATE:</span> Ahirgarh Annual Sammelan 2024 to be held in Mathura. Register now via Notice Board. • New Article: Emperor Hemu added to Wiki • Document your gotra today!
        </motion.div>
      </div>

      <Hero />
      <StatsBar />
      <BentoGrid />

      {/* Featured Article */}
      <section className="py-16 bg-muted/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-8">
            <h2 className="text-3xl font-display font-bold text-foreground">{t.sections.featuredArticle}</h2>
            <div className="h-px bg-border flex-1 ml-6"></div>
          </div>
          
          <div className="glass-card overflow-hidden flex flex-col md:flex-row">
            <div className="md:w-1/2 h-64 md:h-auto relative">
              <img src={featuredArticle.image} alt={featuredArticle.title} className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/50 md:hidden" />
            </div>
            <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <span className="text-primary font-bold tracking-wider text-sm uppercase mb-3">{featuredArticle.category}</span>
              <h3 className="text-3xl font-display font-bold text-foreground mb-4">{featuredArticle.title}</h3>
              <p className="text-muted-foreground mb-6 text-lg">{featuredArticle.excerpt}</p>
              <Link href={`/wiki/${featuredArticle.slug}`}>
                <span className="inline-flex items-center text-primary font-semibold hover:text-accent transition-colors cursor-pointer">
                  {t.sections.readMore} <ArrowRight className="w-4 h-4 ml-2" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-display font-bold text-foreground">{t.sections.latestArticles}</h2>
            <Link href="/wiki">
              <span className="text-primary font-medium hover:text-accent cursor-pointer">{t.sections.viewAll}</span>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestArticles.map((article) => (
              <Link key={article.id} href={`/wiki/${article.slug}`}>
                <motion.div whileHover={{ y: -5 }} className="glass-card rounded-2xl overflow-hidden cursor-pointer h-full flex flex-col">
                  <div className="h-48 relative">
                    <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
                    <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-primary">
                      {article.category}
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-display font-bold text-foreground mb-3 line-clamp-2">{article.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3 flex-1">{article.excerpt}</p>
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/50">
                      <span className="text-xs text-muted-foreground font-medium">{article.readTime} read</span>
                      <span className="text-xs text-muted-foreground">{article.date}</span>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
