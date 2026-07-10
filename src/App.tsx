import { useState } from 'react';
import ModernHeader from './components/ModernHeader';
import ModernHero from './components/ModernHero';
import HealthPackages from './components/HealthPackages';
import PopularTests from './components/PopularTests';
import ServicesGrid from './components/ServicesGrid';
import TrustSection from './components/TrustSection';
import Testimonials from './components/Testimonials';
import BlogHealthTips from './components/BlogHealthTips';
import ModernFooter from './components/ModernFooter';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import PackagesPage from './components/PackagesPage';
import CartPage from './components/CartPage';
import { CartProvider } from './contexts/CartContext';

type Page = 'home' | 'about' | 'contact' | 'packages' | 'cart';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [highlightedTestName, setHighlightedTestName] = useState<string | null>(null);

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const handleSelectTest = (testName: string) => {
    setHighlightedTestName(testName);
    setCurrentPage('home');
    window.scrollTo(0, 0);
  };

  return (
    <CartProvider>
      <div className="min-h-screen">
        <ModernHeader onNavigate={handleNavigate} currentPage={currentPage} onSelectTest={handleSelectTest} />
        
        {currentPage === 'home' && (
          <main>
            <ModernHero onNavigate={handleNavigate} />
            <TrustSection />
            <HealthPackages />
            <PopularTests highlightedTestName={highlightedTestName} />
            <ServicesGrid onNavigate={handleNavigate} />
            <Testimonials />
            <BlogHealthTips />
          </main>
        )}
        
        {currentPage === 'about' && <AboutPage onNavigate={handleNavigate} />}
        {currentPage === 'contact' && <ContactPage />}
        {currentPage === 'packages' && <PackagesPage />}
        {currentPage === 'cart' && <CartPage />}
        
        <ModernFooter onNavigate={handleNavigate} />
      </div>
    </CartProvider>
  );
}

export default App;
