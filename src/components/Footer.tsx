import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin, Heart } from 'lucide-react';

type Page = 'home' | 'about' | 'contact';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="lg:col-span-1">
            <img
              src="/Screenshot_2026-04-11_034944.png"
              alt="Wellness Healthcare"
              className="h-10 w-auto object-contain mb-4 brightness-0 invert"
            />
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Empowering individuals and families to lead healthier lives through accessible, accurate, and compassionate diagnostic services.
            </p>
            <div className="flex items-center gap-3">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-teal-500 transition-colors duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', page: 'home' as Page },
                { label: 'About Us', page: 'about' as Page },
                { label: 'Services', page: 'home' as Page },
                { label: 'Contact', page: 'contact' as Page },
              ].map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => onNavigate(item.page)}
                    className="text-sm text-gray-400 hover:text-teal-400 transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Our Services</h4>
            <ul className="space-y-3">
              {[
                'Blood Tests',
                'Full Body Checkup',
                'Home Collection',
                'Preventive Health',
                'Thyroid Profile',
                'Diabetes Panel',
              ].map((item) => (
                <li key={item}>
                  <span className="text-sm text-gray-400 hover:text-teal-400 transition-colors cursor-pointer">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-teal-400 mt-0.5 shrink-0" />
                <span className="text-sm text-gray-400">
                  12, Wellness Plaza, Bandra West,<br />Mumbai, Maharashtra 400050
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                <a href="tel:+918001234567" className="text-sm text-gray-400 hover:text-teal-400 transition-colors">
                  +91 800 123 4567
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-teal-400 shrink-0" />
                <a href="mailto:care@wellnesshealthcare.in" className="text-sm text-gray-400 hover:text-teal-400 transition-colors">
                  care@wellnesshealthcare.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Wellness Healthcare. All rights reserved.
          </p>
          <p className="text-xs text-gray-500 flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-red-400 fill-red-400" /> for healthier lives
          </p>
        </div>
      </div>
    </footer>
  );
}
