import { ArrowRight, Phone, Calendar } from 'lucide-react';

type Page = 'home' | 'about' | 'contact';

interface CTASectionProps {
  onNavigate: (page: Page) => void;
}

export default function CTASection({ onNavigate }: CTASectionProps) {

  const handleBookNow = () => {
    onNavigate('contact');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-teal-500 via-teal-600 to-cyan-600 relative overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-10" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white opacity-10 rounded-full blur-2xl" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Take Charge of Your Health Today
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Book your diagnostic tests now and get accurate results from NABL accredited labs. 
            Your journey to better health starts here.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button
              onClick={handleBookNow}
              className="flex items-center justify-center gap-2 bg-white text-teal-600 font-semibold px-8 py-4 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
            >
              Book Now
              <ArrowRight className="w-4 h-4" />
            </button>
            
            <a
              href="tel:+918001234567"
              className="flex items-center justify-center gap-2 bg-white/20 backdrop-blur-sm text-white font-semibold px-8 py-4 rounded-full border border-white/30 transition-all duration-200 hover:bg-white/30"
            >
              <Phone className="w-4 h-4" />
              Call +91 800 123 4567
            </a>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>Same-day appointments</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>24/7 support</span>
            </div>
            <div className="flex items-center gap-2">
              <ArrowRight className="w-4 h-4" />
              <span>Reports in 6 hours</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
