import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AnimatePresence } from "framer-motion";

// Contexts
import { ThemeProvider } from "@/context/ThemeContext";
import { LanguageProvider } from "@/context/LanguageContext";
import { SearchProvider } from "@/context/SearchContext";

// Layout
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SearchModal from "@/components/layout/SearchModal";
import BackToTop from "@/components/ui/BackToTop";

// Pages
import HomePage from "@/pages/HomePage";
import WikiPage from "@/pages/WikiPage";
import ArticlePage from "@/pages/ArticlePage";
import GotrasPage from "@/pages/GotrasPage";
import GotraDetailPage from "@/pages/GotraDetailPage";
import PersonalitiesPage from "@/pages/PersonalitiesPage";
import PersonalityDetailPage from "@/pages/PersonalityDetailPage";
import VillagesPage from "@/pages/VillagesPage";
import VillageDetailPage from "@/pages/VillageDetailPage";
import HistoryPage from "@/pages/HistoryPage";
import CulturePage from "@/pages/CulturePage";
import NoticeBoardPage from "@/pages/NoticeBoardPage";
import AboutPage from "@/pages/AboutPage";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <AnimatePresence mode="wait">
      <Switch>
        <Route path="/" component={HomePage}/>
        <Route path="/wiki" component={WikiPage}/>
        <Route path="/wiki/:slug" component={ArticlePage}/>
        <Route path="/gotras" component={GotrasPage}/>
        <Route path="/gotras/:id" component={GotraDetailPage}/>
        <Route path="/personalities" component={PersonalitiesPage}/>
        <Route path="/personalities/:id" component={PersonalityDetailPage}/>
        <Route path="/villages" component={VillagesPage}/>
        <Route path="/villages/:id" component={VillageDetailPage}/>
        <Route path="/history" component={HistoryPage}/>
        <Route path="/culture" component={CulturePage}/>
        <Route path="/notice-board" component={NoticeBoardPage}/>
        <Route path="/about" component={AboutPage}/>
        <Route component={NotFound} />
      </Switch>
    </AnimatePresence>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <LanguageProvider>
          <SearchProvider>
            <TooltipProvider>
              <div className="min-h-screen flex flex-col selection:bg-primary/30 selection:text-primary relative">
                <Navbar />
                <SearchModal />
                <main className="flex-grow">
                  <Router />
                </main>
                <Footer />
                <BackToTop />
              </div>
              <Toaster />
            </TooltipProvider>
          </SearchProvider>
        </LanguageProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
