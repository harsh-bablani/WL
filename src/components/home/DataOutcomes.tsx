import { TrendingDown, Users, Target, Award } from 'lucide-react';

export default function DataOutcomes() {
  const outcomes = [
    {
      icon: TrendingDown,
      title: 'Fewer Member Claims',
      description: 'A healthier workplace starts with healthier employees',
      metric: '4.4%',
      detail: 'Reduction in medical claims one company saw just one year after implementing their Wellness Healthcare Program'
    },
    {
      icon: Users,
      title: 'Improved Productivity',
      description: 'As corporate wellness increases, so does morale',
      metric: '78%',
      detail: 'Of individuals lost weight after following their Wellness Healthcare Program for one year, and 64.5% of those who were overweight showed improvement'
    },
    {
      icon: Target,
      title: 'Health Risk Reduction',
      description: 'Early detection and preventive care make the difference',
      metric: '85%',
      detail: 'Of high-risk individuals decreased their risk level after participating in their Wellness Healthcare Program'
    },
    {
      icon: Award,
      title: 'Lower Admin Burden',
      description: 'Everyone wins when wellness is holistic',
      metric: '95%',
      detail: 'Of administrators report reduced workload through our streamlined platform'
    }
  ];

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes slide-up {
            from {
              opacity: 0;
              transform: translateY(40px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes float {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-20px);
            }
          }
          
          @keyframes pulse-slow {
            0%, 100% {
              opacity: 0.3;
            }
            50% {
              opacity: 0.6;
            }
          }
          
          .animate-slide-up {
            animation: slide-up 0.8s ease-out;
          }
          
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
          
          .animate-pulse-slow {
            animation: pulse-slow 4s ease-in-out infinite;
          }
        `
      }} />
      
      <section className="py-20 bg-gradient-to-br from-gray-50 via-teal-50/30 to-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-20 w-64 h-64 bg-teal-100/10 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-100/10 rounded-full blur-3xl animate-float" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <span className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-100 to-cyan-100 text-teal-700 text-sm font-semibold px-6 py-3 rounded-full mb-8 shadow-lg backdrop-blur-sm border border-teal-200/50 animate-slide-up">
              <TrendingDown className="w-5 h-5" />
              Data Tells a Story
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-8 max-w-5xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Turn <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 via-cyan-500 to-teal-600">Wellness Data into Action</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-12 max-w-4xl mx-auto animate-slide-up" style={{ animationDelay: '0.4s' }}>
              With Know Your Number at core, Wellness Healthcare helps brokers and HR teams 
              transform metrics into measurable outcomes. From engagement and health insights to ROI reporting, 
              our Account Managers provide the tools and guidance you need to plan smarter, show results, 
              and drive meaningful change.
            </p>
          </div>

          {/* Enhanced Outcome Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-20">
            {outcomes.map((outcome, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl hover:border-teal-200 transition-all duration-500 transform hover:-translate-y-3 overflow-hidden animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Card background decoration */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Icon with enhanced styling */}
                <div className="relative z-10 mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-500 relative">
                    <div className="absolute inset-0 bg-white/80 rounded-2xl group-hover:opacity-0 transition-opacity duration-500" />
                    <outcome.icon className="relative z-10 w-10 h-10 text-teal-600 group-hover:text-teal-700 transition-colors duration-500" />
                  </div>
                </div>
                
                {/* Metric with enhanced styling */}
                <div className="relative z-10 mb-4">
                  <div className="text-5xl font-bold bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-500">
                    {outcome.metric}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors duration-500">
                    {outcome.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4 group-hover:text-gray-700 transition-colors duration-500">
                    {outcome.description}
                  </p>
                  <p className="text-sm text-gray-500 leading-relaxed group-hover:text-gray-600 transition-colors duration-500">
                    {outcome.detail}
                  </p>
                </div>

                {/* Floating indicator */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-teal-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-full h-full bg-white rounded-full animate-pulse-slow" />
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced Data-Driven Approach Section */}
          <div className="bg-gradient-to-br from-white via-teal-50 to-cyan-50 rounded-3xl p-12 shadow-2xl border border-teal-100/50 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-teal-200/20 rounded-full blur-2xl animate-pulse-slow" />
            
            <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-gray-900 mb-6 animate-slide-up" style={{ animationDelay: '0.6s' }}>
                  How It Works
                </h3>
                <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                  Our comprehensive platform provides the foundation for data-driven wellness 
                  programs that deliver measurable results and ROI.
                </p>
                <div className="space-y-4">
                  {[
                    { icon: TrendingDown, text: 'Risk stratification reporting' },
                    { icon: Users, text: 'Engagement tracking & analytics' },
                    { icon: Target, text: 'ROI calculation & reporting' },
                    { icon: Award, text: 'Health outcome measurements' }
                  ].map((item, index) => (
                    <div key={index} className="group flex items-center gap-4 p-4 bg-white rounded-xl shadow-md group-hover:shadow-lg group-hover:bg-teal-50 transition-all duration-300 cursor-pointer">
                      <div className="w-12 h-12 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <item.icon className="w-6 h-6 text-teal-600" />
                      </div>
                      <span className="text-gray-700 group-hover:text-teal-600 transition-colors duration-300 font-medium">
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <h4 className="text-2xl font-bold text-gray-900 mb-6">Know Your Numbers</h4>
                  <div className="grid grid-cols-3 gap-6">
                    {[
                      { number: '10,000+', label: 'Monthly Assessments', icon: '📊' },
                      { number: '95%', label: 'Risk Prediction', icon: '🎯' },
                      { number: '24/7', label: 'Data Access', icon: '📱' }
                    ].map((stat, index) => (
                      <div key={index} className="group text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200 group-hover:border-teal-300 group-hover:shadow-lg transition-all duration-300">
                        <div className="text-3xl font-bold text-teal-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                          {stat.number}
                        </div>
                        <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                          {stat.label}
                        </p>
                        <div className="text-2xl mb-2 group-hover:scale-125 transition-transform duration-300">
                          {stat.icon}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Floating decoration */}
                <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-teal-500 rounded-full opacity-20 animate-pulse-slow" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
