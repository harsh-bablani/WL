import { useState, useEffect } from 'react';
import { Search, MessageCircle, Upload, Menu, X } from 'lucide-react';
import { popularTests } from './PopularTests';

type Page = 'home' | 'about' | 'contact' | 'packages' | 'cart';

interface ModernHeaderProps {
  onNavigate?: (page: Page) => void;
  currentPage?: Page;
  onSelectTest?: (testName: string) => void;
}

const packageItems = [
  { label: 'Basic Package', type: 'Package' as const },
  { label: 'Complete Package', type: 'Package' as const },
  { label: 'Big Package', type: 'Package' as const }
];

const searchItems = [
  ...popularTests.map((test) => ({ label: test.name, type: 'Test' as const })),
  ...packageItems
];

export default function ModernHeader({ onNavigate, currentPage, onSelectTest }: ModernHeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const visibleResults = searchQuery.trim()
    ? searchItems.filter((item) => item.label.toLowerCase().includes(searchQuery.toLowerCase()))
    : searchItems.slice(0, 8);

  const handleResultSelect = (item: { label: string; type: 'Test' | 'Package' }) => {
    setSearchQuery(item.label);
    setIsSearchOpen(false);

    if (item.type === 'Test') {
      onSelectTest?.(item.label);
      onNavigate?.('home');
    } else {
      onNavigate?.('packages');
    }
  };

  return (
    <>
      {/* Main Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white shadow-md'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <div className="flex items-center">
              <button
                type="button"
                onClick={() => onNavigate && onNavigate('home')}
                className="w-28 h-28 bg-transparent flex items-center justify-center cursor-pointer"
              >
                <img 
                  src="/logo.png" 
                  alt="Wellness Healthcare Logo" 
                  className="w-full h-full object-contain"
                />
              </button>
            </div>

            {/* Desktop Search Bar */}
            <div className="hidden lg:flex flex-1 max-w-xl mx-8">
              <div className="relative w-full">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  placeholder="Search tests & packages..."
                  className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-full focus:outline-none focus:border-teal-500 focus:bg-white transition-all duration-200"
                  onChange={(event) => {
                    setSearchQuery(event.target.value);
                    setIsSearchOpen(true);
                  }}
                  onFocus={() => setIsSearchOpen(true)}
                  onBlur={() => setTimeout(() => setIsSearchOpen(false), 150)}
                />
                {isSearchOpen && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden z-50">
                    <div className="p-4 max-h-96 overflow-y-auto">
                      <p className="text-sm text-gray-600 mb-3 font-semibold">Suggested tests & packages</p>
                      {visibleResults.length > 0 ? (
                        <div className="space-y-2">
                          {visibleResults.map((item, index) => (
                            <button
                              key={`${item.label}-${index}`}
                              type="button"
                              onMouseDown={(event) => event.preventDefault()}
                              onClick={() => handleResultSelect(item)}
                              className="w-full flex items-center justify-between px-4 py-2 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                            >
                              <span className="text-gray-700">{item.label}</span>
                              <span className="text-xs font-semibold text-teal-600">{item.type}</span>
                            </button>
                          ))}
                        </div>
                      ) : (
                        <p className="text-sm text-gray-500">No matching tests found.</p>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6">
              <nav className="flex items-center space-x-8">
                {[
                  { name: 'Home', page: 'home' as Page },
                  { name: 'Cart', page: 'cart' as Page },
                  { name: 'About', page: 'about' as Page },
                  { name: 'Contact', page: 'contact' as Page }
                ].map((item, index) => (
                  <button
                    key={index}
                    onClick={() => onNavigate && onNavigate(item.page)}
                    className={`text-gray-700 hover:text-teal-600 font-medium transition-colors duration-200 ${
                      currentPage === item.page ? 'text-teal-600' : ''
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
              </nav>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Search */}
          <div className="lg:hidden pb-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                placeholder="Search tests & packages..."
                className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-full focus:outline-none focus:border-teal-500 focus:bg-white transition-all duration-200"
                onChange={(event) => {
                  setSearchQuery(event.target.value);
                  setIsSearchOpen(true);
                }}
                onFocus={() => setIsSearchOpen(true)}
                onBlur={() => setTimeout(() => setIsSearchOpen(false), 150)}
              />
              {isSearchOpen && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden z-50">
                  <div className="p-4 max-h-96 overflow-y-auto">
                    <p className="text-sm text-gray-600 mb-3 font-semibold">Suggested tests & packages</p>
                    {visibleResults.length > 0 ? (
                      <div className="space-y-2">
                        {visibleResults.map((item, index) => (
                          <button
                            key={`${item.label}-${index}`}
                            type="button"
                            onMouseDown={(event) => event.preventDefault()}
                            onClick={() => handleResultSelect(item)}
                            className="w-full flex items-center justify-between px-4 py-2 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                          >
                            <span className="text-gray-700">{item.label}</span>
                            <span className="text-xs font-semibold text-teal-600">{item.type}</span>
                          </button>
                        ))}
                      </div>
                    ) : (
                      <p className="text-sm text-gray-500">No matching tests found.</p>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="bg-white border-t border-gray-100">
            <nav className="px-4 py-4 space-y-2">
              {[
                { name: 'Home', page: 'home' as Page },
                { name: 'Cart', page: 'cart' as Page },
                { name: 'About', page: 'about' as Page },
                { name: 'Contact', page: 'contact' as Page }
              ].map((item, index) => (
                <button
                  key={index}
                  onClick={() => {
                    onNavigate && onNavigate(item.page);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors duration-200 ${
                    currentPage === item.page ? 'text-teal-600' : ''
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </nav>
            
            <div className="px-4 py-4 border-t border-gray-100 space-y-3">
              <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-all duration-200">
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </button>
              
              <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white rounded-lg transition-all duration-200 shadow-md">
                <Upload className="w-4 h-4" />
                Upload Prescription
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Spacer for fixed header */}
      <div className="h-16 lg:h-20" />
    </>
  );
}
