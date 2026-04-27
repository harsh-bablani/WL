import { useState, useEffect } from 'react';
import { MessageCircle, Phone, Upload, X } from 'lucide-react';

export default function FloatingElements() {
  const [isMobileCTAOpen, setIsMobileCTAOpen] = useState(false);
  const [isWhatsAppOpen, setIsWhatsAppOpen] = useState(false);
  const [showMobileCTA, setShowMobileCTA] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowMobileCTA(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="relative">
          {/* WhatsApp Popup */}
          {isWhatsAppOpen && (
            <div className="absolute bottom-16 right-0 bg-white rounded-2xl shadow-2xl p-6 mb-4 w-80 border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-gray-900">Chat with us</h3>
                <button
                  onClick={() => setIsWhatsAppOpen(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="mb-4">
                <p className="text-gray-600 mb-2">
                  Need help? Chat with our healthcare experts on WhatsApp!
                </p>
                <div className="bg-green-50 rounded-lg p-3 mb-3">
                  <div className="flex items-center gap-2 text-green-700">
                    <MessageCircle className="w-5 h-5" />
                    <span className="font-medium">Typically replies within minutes</span>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <a
                  href="https://wa.me/919829078973"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-xl transition-all duration-300"
                >
                  <MessageCircle className="w-5 h-5" />
                  Start WhatsApp Chat
                </a>
                <button
                  onClick={() => setIsWhatsAppOpen(false)}
                  className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 rounded-xl transition-all duration-300"
                >
                  Maybe Later
                </button>
              </div>
            </div>
          )}

          {/* Main WhatsApp Button */}
          <button
            onClick={() => setIsWhatsAppOpen(!isWhatsAppOpen)}
            className="w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
          >
            <MessageCircle className="w-6 h-6" />
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse" />
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-ping" />
          </button>
        </div>
      </div>

      {/* Sticky Mobile CTA */}
      {showMobileCTA && (
        <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 shadow-lg md:hidden">
          <div className="max-w-7xl mx-auto px-4 py-3">
            {isMobileCTAOpen ? (
              <div className="space-y-3">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-gray-900">Quick Actions</h3>
                  <button
                    onClick={() => setIsMobileCTAOpen(false)}
                    className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                
                <div className="grid grid-cols-3 gap-3">
                  <a
                    href="tel:9829078973"
                    className="flex flex-col items-center gap-2 p-3 bg-blue-50 hover:bg-blue-100 rounded-xl transition-all duration-200"
                  >
                    <Phone className="w-5 h-5 text-blue-600" />
                    <span className="text-xs font-medium text-gray-700">Call</span>
                  </a>
                  
                  <a
                    href="https://wa.me/919829078973"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-2 p-3 bg-green-50 hover:bg-green-100 rounded-xl transition-all duration-200"
                  >
                    <MessageCircle className="w-5 h-5 text-green-600" />
                    <span className="text-xs font-medium text-gray-700">WhatsApp</span>
                  </a>
                  
                  <button
                    className="flex flex-col items-center gap-2 p-3 bg-teal-50 hover:bg-teal-100 rounded-xl transition-all duration-200"
                  >
                    <Upload className="w-5 h-5 text-teal-600" />
                    <span className="text-xs font-medium text-gray-700">Upload</span>
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">W</span>
                  </div>
                  <span className="text-sm font-medium text-gray-700">Need help?</span>
                </div>
                
                <button
                  onClick={() => setIsMobileCTAOpen(true)}
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-semibold rounded-lg transition-all duration-300"
                >
                  <span>Get Help</span>
                  <Phone className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Desktop Quick Actions (Hidden on Mobile) */}
      <div className="hidden lg:flex fixed bottom-6 left-6 z-40 flex-col gap-3">
        <button
          onClick={() => window.open('tel:9829078973')}
          className="w-12 h-12 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
          title="Call Now"
        >
          <Phone className="w-5 h-5" />
        </button>
        
        <button
          onClick={() => window.open('https://wa.me/919829078973', '_blank')}
          className="w-12 h-12 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
          title="WhatsApp"
        >
          <MessageCircle className="w-5 h-5" />
        </button>
        
        <button
          className="w-12 h-12 bg-teal-500 hover:bg-teal-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
          title="Upload Prescription"
        >
          <Upload className="w-5 h-5" />
        </button>
      </div>
    </>
  );
}
