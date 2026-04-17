import { ArrowRight, ShieldCheck, Clock, Star, TrendingUp, Users } from 'lucide-react';

type Page = 'home' | 'about' | 'contact';

interface HeroSectionProps {
  onNavigate: (page: Page) => void;
}

export default function HeroSection({ onNavigate }: HeroSectionProps) {
  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes fade-in {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes slide-up {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .animate-fade-in {
            animation: fade-in 0.8s ease-out;
          }
          
          .animate-slide-up {
            animation: slide-up 0.8s ease-out;
          }
        `
      }} />
      
      <section className="relative bg-gradient-to-br from-white via-teal-50/30 to-white pt-20 pb-16 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-teal-200/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-teal-100/10 rounded-full blur-2xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <span className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-100 to-cyan-100 text-teal-700 text-sm font-semibold px-6 py-3 rounded-full mb-8 shadow-lg backdrop-blur-sm border border-teal-200/50 animate-fade-in">
              <ShieldCheck className="w-5 h-5" />
              NABL Certified Labs
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-8 max-w-5xl mx-auto animate-slide-up">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 via-cyan-500 to-teal-600">Book Sample Collection</span> at Your Home
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-12 max-w-4xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Choose from a range of comprehensive tests and packages. Book home collection from the comfort of your home. 
              Get accurate test reports from NABL certified labs with Wellness Healthcare.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <button
                onClick={() => onNavigate('contact')}
                className="group relative flex items-center justify-center gap-3 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-semibold px-10 py-5 rounded-full transition-all duration-300 shadow-2xl hover:shadow-teal-200/50 transform hover:-translate-y-1 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-3">
                  See What Makes Us Different
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-teal-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
              <button
                onClick={() => onNavigate('about')}
                className="group relative flex items-center justify-center gap-3 bg-white hover:bg-gray-50 text-gray-700 font-semibold px-10 py-5 rounded-full border-2 border-gray-200 hover:border-teal-300 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Book a Demo
                  <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-gray-100/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </div>
          </div>

          {/* Enhanced Key Metrics Grid */}
          <div className="grid md:grid-cols-3 gap-10 mb-20">
            {[
              { value: '100+', title: 'NABL Certified Labs', desc: 'Trusted by leading doctors & hospitals across India', delay: '0.1s' },
              { value: '6 Hours', title: 'Fastest Reporting', desc: 'Get accurate test reports within 6 hours of sample collection', delay: '0.2s' },
              { value: '50K+', title: 'Happy Customers', desc: 'Serving thousands of satisfied customers with accurate diagnostics', delay: '0.3s' }
            ].map((metric, index) => (
              <div key={index} className="group relative">
                <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100 hover:shadow-2xl hover:border-teal-200 transition-all duration-500 transform hover:-translate-y-2 animate-slide-up" style={{ animationDelay: metric.delay }}>
                  <div className="text-6xl font-bold bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-500">
                    {metric.value}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors duration-300">
                    {metric.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {metric.desc}
                  </p>
                  <div className="absolute top-4 right-4 w-2 h-2 bg-teal-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced Trust Indicators */}
          <div className="bg-gradient-to-r from-gray-50 to-white rounded-3xl p-10 border border-gray-100/50 backdrop-blur-sm">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { icon: ShieldCheck, text: 'NABL Certified Labs' },
                { icon: Clock, text: 'Reports in 6 Hours' },
                { icon: Users, text: '50K+ Happy Customers' },
                { icon: Star, text: '4.8★ Rating' }
              ].map((item, index) => (
                <div key={index} className="group flex items-center gap-3 text-gray-600 hover:text-teal-600 transition-all duration-300 cursor-pointer">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-md group-hover:shadow-lg group-hover:bg-teal-50 flex items-center justify-center border border-gray-200 group-hover:border-teal-300 transition-all duration-300">
                    <item.icon className="w-6 h-6 text-teal-500 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <span className="font-medium group-hover:font-semibold">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
