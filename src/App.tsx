import { useState } from 'react';
import ModernHeader from './components/ModernHeader';
import ModernHero from './components/ModernHero';
import QuickActions from './components/QuickActions';
import HealthPackages from './components/HealthPackages';
import PopularTests from './components/PopularTests';
import ServicesGrid from './components/ServicesGrid';
import TrustSection from './components/TrustSection';
import Testimonials from './components/Testimonials';
import BlogHealthTips from './components/BlogHealthTips';
import ModernFooter from './components/ModernFooter';
import FloatingElements from './components/FloatingElements';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import PackagesPage from './components/PackagesPage';

type Page = 'home' | 'about' | 'contact' | 'packages';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen">
      <ModernHeader onNavigate={handleNavigate} currentPage={currentPage} />
      
      {currentPage === 'home' && (
        <main>
          <ModernHero />
          <QuickActions />
          <HealthPackages />
          <PopularTests />
          <ServicesGrid />
          <TrustSection />
          <Testimonials />
          <BlogHealthTips />
        </main>
      )}
      
      {currentPage === 'about' && <AboutPage onNavigate={handleNavigate} />}
      {currentPage === 'contact' && <ContactPage />}
      {currentPage === 'packages' && <PackagesPage />}
      
      <ModernFooter onNavigate={handleNavigate} />
      <FloatingElements />
    </div>
  );
}

export default App;
