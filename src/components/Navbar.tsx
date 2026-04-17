import { useState, useEffect } from 'react';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';

type Page = 'home' | 'about' | 'contact';

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const navLinks = [
  { label: 'Home', page: 'home' as Page },
  { label: 'About Us', page: 'about' as Page },
  { label: 'Our Solutions', page: 'home' as Page },
  { label: 'Who We Serve', page: 'home' as Page },
  { label: 'Resources', page: 'home' as Page },
  { label: 'Contact', page: 'contact' as Page },
];

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-3' : 'bg-white/95 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2 focus:outline-none"
          >
            <img
              src="/Screenshot_2026-04-11_034944.png"
              alt="Wellness Healthcare Logo"
              className="h-10 w-auto object-contain"
            />
          </button>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => onNavigate(link.page)}
                className={`text-sm font-medium transition-colors duration-200 hover:text-teal-600 ${
                  currentPage === link.page && link.page !== 'home'
                    ? 'text-teal-600'
                    : currentPage === link.page
                    ? 'text-teal-600'
                    : 'text-gray-700'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+918001234567"
              className="flex items-center gap-2 text-sm text-gray-600 hover:text-teal-600 transition-colors"
            >
              <Phone className="w-4 h-4 text-teal-500" />
              <span className="font-medium">+91 800 123 4567</span>
            </a>
            <button
              onClick={() => onNavigate('contact')}
              className="bg-teal-500 hover:bg-teal-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 shadow-sm hover:shadow-md active:scale-95"
            >
              Book a Test
            </button>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-100">
            <nav className="flex flex-col gap-1 mt-4">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => {
                    onNavigate(link.page);
                    setMobileOpen(false);
                  }}
                  className={`text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    currentPage === link.page
                      ? 'bg-teal-50 text-teal-600'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => {
                  onNavigate('contact');
                  setMobileOpen(false);
                }}
                className="mt-3 bg-teal-500 text-white text-sm font-semibold px-5 py-3 rounded-full transition-all"
              >
                Book a Test
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
