import { ArrowRight, Phone, Calendar } from 'lucide-react';

type Page = 'home' | 'about' | 'contact';

interface CTASectionProps {
  onNavigate: (page: Page) => void;
}

export default function CTASection({ onNavigate }: CTASectionProps) {

  const handleBookDemo = () => {
    onNavigate('contact');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-teal-500 via-teal-600 to-cyan-600 relative overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-10" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white opacity-10 rounded-full blur-2xl" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Workplace Wellness?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join hundreds of organizations that have achieved measurable health outcomes 
            and ROI with our data-driven wellness programs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button
              onClick={handleBookDemo}
              className="bg-white text-teal-600 font-semibold px-8 py-4 rounded-full hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Book a Demo
              <ArrowRight className="w-4 h-4" />
            </button>
            
            <a
              href="tel:+918001234567"
              className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 border border-white/30"
            >
              <Phone className="w-4 h-4" />
              1.800.425.4657
            </a>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>Flexible scheduling</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>Expert consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <ArrowRight className="w-4 h-4" />
              <span>Proven results</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
