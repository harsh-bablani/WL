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

type Page = 'home' | 'about' | 'contact';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen">
      <ModernHeader />
      
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
      
      <ModernFooter />
      <FloatingElements />
    </div>
  );
}

export default App;
