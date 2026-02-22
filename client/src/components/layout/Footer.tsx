import React from 'react';
import { Link } from 'wouter';
import { Youtube, Facebook, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-neutral-900 text-neutral-300 py-16 mt-20 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Decorative Lotus / Design element */}
        <div className="flex justify-center mb-12 opacity-50">
           <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
              <path d="M12 22c-4.97 0-9-4.03-9-9 0-3.31 1.88-6.22 4.67-7.79L12 2l4.33 3.21C19.12 6.78 21 9.69 21 13c0 4.97-4.03 9-9 9z"/>
              <path d="M12 22c-2.76 0-5-4.03-5-9 0-2.21 1.05-4.14 2.62-5.19L12 6l2.38 1.81C15.95 8.86 17 10.79 17 13c0 4.97-2.24 9-5 9z"/>
           </svg>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="font-display text-2xl font-bold text-white mb-4">Ahirgarh</h3>
            <p className="text-sm text-neutral-400 mb-6">{t.footer.tagline}</p>
            <p className="text-primary font-hindi font-medium">जय यादव 🙏</p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Explore</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/wiki"><span className="hover:text-primary cursor-pointer transition-colors">{t.nav.wiki}</span></Link></li>
              <li><Link href="/history"><span className="hover:text-primary cursor-pointer transition-colors">{t.nav.history}</span></Link></li>
              <li><Link href="/gotras"><span className="hover:text-primary cursor-pointer transition-colors">{t.nav.gotras}</span></Link></li>
              <li><Link href="/culture"><span className="hover:text-primary cursor-pointer transition-colors">{t.nav.culture}</span></Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Community</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/personalities"><span className="hover:text-primary cursor-pointer transition-colors">{t.nav.personalities}</span></Link></li>
              <li><Link href="/villages"><span className="hover:text-primary cursor-pointer transition-colors">{t.nav.villages}</span></Link></li>
              <li><Link href="/notice-board"><span className="hover:text-primary cursor-pointer transition-colors">{t.nav.noticeBoard}</span></Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Connect</h4>
            <ul className="space-y-3 text-sm mb-6">
              <li><Link href="/about"><span className="hover:text-primary cursor-pointer transition-colors">{t.nav.about}</span></Link></li>
              <li><a href="mailto:contact@ahirgarh.com" className="hover:text-primary transition-colors">Contact Us</a></li>
            </ul>
            <div className="flex space-x-4">
              <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="p-2 bg-neutral-800 rounded-full hover:bg-green-600 hover:text-white transition-all">
                <MessageCircle className="w-5 h-5" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-neutral-800 rounded-full hover:bg-red-600 hover:text-white transition-all">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-neutral-800 rounded-full hover:bg-blue-600 hover:text-white transition-all">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-neutral-800 text-center text-sm text-neutral-500">
          <p>© {new Date().getFullYear()} Ahirgarh. {t.footer.rights}</p>
          <p className="mt-2 text-neutral-600">{t.footer.builtWith}</p>
        </div>
      </div>
    </footer>
  );
}
