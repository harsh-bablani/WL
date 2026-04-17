import { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/home/HeroSection';
import DataOutcomes from './components/home/DataOutcomesFixed';
import ServicesSection from './components/home/ServicesSection';
import CTASection from './components/home/CTASection';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';

type Page = 'home' | 'about' | 'contact';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen">
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
      
      {currentPage === 'home' && (
        <main>
          <HeroSection onNavigate={handleNavigate} />
          <DataOutcomes />
          <ServicesSection />
          <CTASection onNavigate={handleNavigate} />
        </main>
      )}
      
      {currentPage === 'about' && <AboutPage onNavigate={handleNavigate} />}
      {currentPage === 'contact' && <ContactPage />}
      
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
