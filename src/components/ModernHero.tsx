import { Phone, MessageCircle } from 'lucide-react';

interface ModernHeroProps {
  onNavigate?: (page: 'home' | 'about' | 'contact' | 'packages' | 'cart') => void;
}

export default function ModernHero({ onNavigate }: ModernHeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/Hero.mp4" type="video/mp4" />
        </video>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-teal-900/80 via-teal-800/70 to-cyan-900/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Tagline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-8 leading-tight">
            Your Trusted Partner for
            <br />
            <span className="text-teal-300">Accurate Diagnostic Services</span>
          </h1>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => onNavigate && onNavigate('contact')}
              className="flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-teal-400 to-teal-500 hover:from-teal-500 hover:to-teal-600 text-white font-bold text-lg rounded-2xl transition-all duration-300 shadow-2xl hover:shadow-teal-500/50 transform hover:scale-105"
            >
              <Phone className="w-6 h-6" />
              Book Test Now
            </button>
            
            <a
              href="https://wa.me/919829078973"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-bold text-lg rounded-2xl transition-all duration-300 shadow-2xl hover:shadow-green-500/50 transform hover:scale-105"
            >
              <MessageCircle className="w-6 h-6" />
              WhatsApp Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
