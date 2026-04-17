import { ArrowRight, ShieldCheck, Clock, Star, TrendingUp, Users } from 'lucide-react';

type Page = 'home' | 'about' | 'contact';

interface HeroSectionProps {
  onNavigate: (page: Page) => void;
}

export default function HeroSection({ onNavigate }: HeroSectionProps) {
  return (
    <section className="relative bg-white pt-20 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 text-sm font-semibold px-4 py-2 rounded-full mb-6">
            <ShieldCheck className="w-4 h-4" />
            NABL Accredited Healthcare Solutions
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6 max-w-4xl mx-auto">
            Wellness Healthcare:{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-500">
              Your Partner in Corporate Health
            </span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-10 max-w-3xl mx-auto">
            Transform your workplace with comprehensive diagnostic and wellness solutions. 
            We deliver measurable health outcomes with data-driven programs that work.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={() => onNavigate('contact')}
              className="flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-600 text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Book a Demo
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => onNavigate('about')}
              className="flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-700 font-semibold px-8 py-4 rounded-full border border-gray-300 transition-all duration-200 hover:border-teal-300"
            >
              Our Solutions
            </button>
          </div>
        </div>

        {/* Key Metrics Grid - WellworksForYou Style */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="text-5xl font-bold text-teal-600 mb-2">85%</div>
            <p className="text-lg font-semibold text-gray-900 mb-1">
              Improved Health Indicators
            </p>
            <p className="text-gray-600">
              High-risk individuals decreased their risk level after participating in our wellness program
            </p>
          </div>
          
          <div className="text-center">
            <div className="text-5xl font-bold text-teal-600 mb-2">78%</div>
            <p className="text-lg font-semibold text-gray-900 mb-1">
              Weight Loss Success
            </p>
            <p className="text-gray-600">
              Individuals lost weight after following our wellness program for one year
            </p>
          </div>
          
          <div className="text-center">
            <div className="text-5xl font-bold text-teal-600 mb-2">4.4%</div>
            <p className="text-lg font-semibold text-gray-900 mb-1">
              Claims Reduction
            </p>
            <p className="text-gray-600">
              Reduction in medical claims one company saw after implementing our wellness program
            </p>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-teal-500" />
            <span className="font-medium">NABL Certified Labs</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-teal-500" />
            <span className="font-medium">Reports in 6 Hours</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-teal-500" />
            <span className="font-medium">50K+ Corporate Members</span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-teal-500" />
            <span className="font-medium">4.8★ Satisfaction Rating</span>
          </div>
        </div>
      </div>
    </section>
  );
}
