import { useState, useEffect } from 'react';
import { Search, Phone, MessageCircle, Upload, Menu, X, ChevronDown } from 'lucide-react';

export default function ModernHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
              <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-xl border border-gray-200">
                <img 
                  src="/logo.png" 
                  alt="Wellness Healthcare Logo" 
                  className="w-full h-full object-contain rounded-xl"
                />
              </div>
            </div>

            {/* Desktop Search Bar */}
            <div className="hidden lg:flex flex-1 max-w-xl mx-8">
              <div className="relative w-full">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search tests & packages..."
                  className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-full focus:outline-none focus:border-teal-500 focus:bg-white transition-all duration-200"
                  onFocus={() => setIsSearchOpen(true)}
                  onBlur={() => setIsSearchOpen(false)}
                />
                {isSearchOpen && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                    <div className="p-4">
                      <p className="text-sm text-gray-600 mb-3">Popular Searches</p>
                      <div className="space-y-2">
                        {['CBC Test', 'Blood Sugar', 'Lipid Profile', 'Health Packages'].map((item, index) => (
                          <button
                            key={index}
                            className="w-full text-left px-4 py-2 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                          >
                            <span className="text-gray-700">{item}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Desktop Navigation & CTAs */}
            <div className="hidden lg:flex items-center space-x-6">
              <nav className="flex items-center space-x-8">
                {['Home', 'Tests', 'Packages', 'About', 'Contact'].map((item, index) => (
                  <a
                    key={index}
                    href="#"
                    className="text-gray-700 hover:text-teal-600 font-medium transition-colors duration-200"
                  >
                    {item}
                  </a>
                ))}
              </nav>
              
              <div className="flex items-center space-x-3">
                <button className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-all duration-200">
                  <Phone className="w-4 h-4" />
                  <span className="hidden sm:inline">Call Now</span>
                </button>
                
                <button className="flex items-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-all duration-200">
                  <MessageCircle className="w-4 h-4" />
                  <span className="hidden sm:inline">WhatsApp</span>
                </button>
                
                <button className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white rounded-lg transition-all duration-200 shadow-md hover:shadow-lg">
                  <Upload className="w-4 h-4" />
                  <span>Upload Prescription</span>
                </button>
              </div>
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
                placeholder="Search tests & packages..."
                className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-full focus:outline-none focus:border-teal-500 focus:bg-white transition-all duration-200"
              />
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="bg-white border-t border-gray-100">
            <nav className="px-4 py-4 space-y-2">
              {['Home', 'Tests', 'Packages', 'About', 'Contact'].map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="block px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                >
                  {item}
                </a>
              ))}
            </nav>
            
            <div className="px-4 py-4 border-t border-gray-100 space-y-3">
              <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gray-50 hover:bg-gray-100 text-gray-700 rounded-lg transition-all duration-200">
                <Phone className="w-4 h-4" />
                Call Now
              </button>
              
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
