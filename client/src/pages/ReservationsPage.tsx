import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ChevronRight, Clock } from 'lucide-react';

const reservationContent = {
  title: "OBC & Reservations",
  titleHi: "ओबीसी और आरक्षण",
  subtitle: "A complete guide to reservation rights for the Yadav and Ahir community",
  lastUpdated: "February 2026",
  sections: [
    {
      id: "what-is-obc",
      heading: "What is OBC?",
      content: `Other Backward Classes (OBC) is a classification used by the Government of India to identify communities that are socially and educationally disadvantaged. The OBC category was established following the recommendations of the Mandal Commission in 1980 and implemented in 1990. The central government maintains a Central OBC List while each state maintains its own State OBC List. Being on the central list gives reservations in central government jobs and central universities.`
    },
    {
      id: "yadav-status",
      heading: "Are Yadavs and Ahirs OBC?",
      content: `Yes. The Yadav community, also known as Ahir, is listed as OBC in the Central OBC List maintained by the National Commission for Backward Classes (NCBC). This means Yadavs are eligible for 27% OBC reservation in central government jobs, central universities, IITs, IIMs, NITs and all central institutions across India. Additionally Yadavs are listed in the state OBC lists of Uttar Pradesh, Bihar, Haryana, Rajasthan, Madhya Pradesh, Maharashtra, Gujarat, Delhi and most other states.`
    },
    {
      id: "percentages",
      heading: "Reservation Percentages",
      content: `In central government jobs and central educational institutions, OBC reservation is 27% of total seats and posts. This applies to all central government departments, PSUs, IITs, IIMs, NITs, AIIMS, central universities and all institutions funded by the central government.\n\nState-wise OBC reservation percentages:\n\nUttar Pradesh — 27%\nBihar — varies by sub-category (EBC + BC combined)\nHaryana — 27%\nRajasthan — 21%\nMadhya Pradesh — 14%\nMaharashtra — 19% (plus additional SEBC variations)`
    },
    {
      id: "creamy-layer",
      heading: "What is Creamy Layer?",
      content: `Creamy Layer refers to the relatively advanced and well-off members within OBC communities who are excluded from OBC reservation benefits. If your family income exceeds the prescribed limit you fall under Creamy Layer and cannot avail OBC reservation.\n\nThe current Creamy Layer income limit is Rs 8 lakh per annum (verify latest figure from official sources before applying). This limit considers income from salary and agriculture — not income from property.\n\nChildren of persons holding constitutional posts, Class I officers, and certain other high-ranking officials are also excluded.`
    },
    {
      id: "certificate",
      heading: "How to Get Your OBC Certificate",
      content: `Documents Required:\n— Aadhaar Card\n— Ration Card or domicile proof\n— Income Certificate of parents\n— Caste proof such as father or grandfather documents\n— Passport size photos\n— School leaving certificate\n\nWhere to Apply: Visit your local Tehsil office or SDM (Sub Divisional Magistrate) office. In most states you can also apply online through your state's e-district portal.\n\nCentral vs State Certificate: For central government jobs you need a central format certificate (NCBC format), whereas for state jobs your state-specific format is required.`
    },
    {
      id: "mandal",
      heading: "The Mandal Commission",
      content: `The Mandal Commission, officially the Second Backward Classes Commission, was established in 1979 under the chairmanship of B.P. Mandal. It submitted its report in 1980 recommending 27% reservation for OBC communities in central government jobs and educational institutions.\n\nThe recommendations were implemented in 1990 by Prime Minister V.P. Singh, triggering massive protests across India but fundamentally transforming the social and political landscape.\n\nFor the Yadav community, this was a landmark moment that recognized their social disadvantage and opened doors to higher education and government leadership.`
    },
    {
      id: "important-note",
      heading: "Important Note",
      content: `Reservation policies change over time. The information on this page is for general guidance only. Always verify current rules from official government sources — ncbc.nic.in for central OBC list and your state government's official website for state-specific rules. For certificate applications always consult your local Tehsil office.`
    }
  ],
  disclaimer: "This page is for informational purposes only. Ahirgarh does not provide legal advice. Always verify information from official government sources before making decisions."
};

export default function ReservationsPage() {
  const [activeSection, setActiveSection] = useState(reservationContent.sections[0].id);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5, rootMargin: "-10% 0px -40% 0px" }
    );

    reservationContent.sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen bg-background pb-24">
      <motion.div className="fixed top-0 left-0 right-0 h-1.5 bg-primary z-[60] origin-left" style={{ scaleX }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* TOC Sidebar */}
          <aside className="hidden lg:block w-64 shrink-0">
            <div className="sticky top-24 space-y-1">
              <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-4 px-4">Contents</h4>
              {reservationContent.sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    activeSection === section.id 
                      ? 'bg-primary/10 text-primary shadow-sm' 
                      : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                  }`}
                >
                  {section.heading}
                </button>
              ))}
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1 max-w-3xl">
            <div className="mb-12">
              <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
                {reservationContent.title} <span className="text-primary font-hindi ml-2">{reservationContent.titleHi}</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-4 leading-relaxed">{reservationContent.subtitle}</p>
              <div className="flex items-center text-xs text-muted-foreground bg-muted/50 w-max px-3 py-1.5 rounded-full border border-border">
                <Clock className="w-3.5 h-3.5 mr-2" />
                Last Updated: {reservationContent.lastUpdated}
              </div>
            </div>

            {/* Mobile TOC */}
            <div className="lg:hidden mb-12 p-4 bg-muted/30 rounded-2xl border border-border">
              <h4 className="text-sm font-bold mb-3 flex items-center"><ChevronRight className="w-4 h-4 mr-1" /> Quick Navigation</h4>
              <select 
                value={activeSection}
                onChange={(e) => scrollToSection(e.target.value)}
                className="w-full bg-background border border-border rounded-xl px-4 py-2.5 outline-none focus:border-primary text-sm font-medium"
              >
                {reservationContent.sections.map(s => <option key={s.id} value={s.id}>{s.heading}</option>)}
              </select>
            </div>

            <div className="space-y-16">
              {reservationContent.sections.map((section) => (
                <section key={section.id} id={section.id} className="scroll-mt-32 group">
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-6 flex items-center group-hover:text-primary transition-colors">
                    {section.heading}
                  </h2>
                  <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground leading-relaxed whitespace-pre-wrap">
                    {section.content}
                  </div>
                  <div className="mt-12 h-px bg-border/50" />
                </section>
              ))}
            </div>

            <div className="mt-20 p-8 rounded-3xl bg-muted/30 border border-border italic text-sm text-muted-foreground leading-relaxed shadow-inner">
              <p>{reservationContent.disclaimer}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}