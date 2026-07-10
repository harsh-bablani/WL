import { Shield, CheckCircle, Award, Star, Users, FileCheck, Clock, Heart, Zap } from 'lucide-react';

export default function TrustSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 px-6 py-3 rounded-full text-sm font-semibold mb-6">
            <Shield className="w-5 h-5" />
            Why Choose Us
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Your Trusted Partner for Accurate Diagnostics
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Only 2% labs in India are NABL accredited — we are one of them. Get accurate test results from certified laboratories with international quality standards.
          </p>
        </div>

        {/* Why Choose Us Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {[
            {
              icon: Shield,
              title: 'NABL Accredited',
              description: 'ISO 15189:2022 certified laboratory meeting international quality standards',
              color: 'from-teal-500 to-teal-600'
            },
            {
              icon: Clock,
              title: 'Fast Reporting',
              description: 'Get your test reports within 6 hours with our priority service',
              color: 'from-blue-500 to-blue-600'
            },
            {
              icon: Heart,
              title: 'Expert Care',
              description: 'Qualified pathologists and trained healthcare professionals',
              color: 'from-pink-500 to-pink-600'
            },
            {
              icon: Zap,
              title: 'Advanced Technology',
              description: 'State-of-the-art equipment for precise and accurate results',
              color: 'from-orange-500 to-orange-600'
            }
          ].map((feature, index) => (
            <div
              key={index}
              className="text-center group"
            >
              <div className={`w-20 h-20 bg-gradient-to-br ${feature.color} rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2`}>
                <feature.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-3xl p-12 border border-teal-100">
          <div className="grid md:grid-cols-4 gap-12">
            {[
              { icon: Shield, number: '2%', label: 'NABL Labs in India' },
              { icon: CheckCircle, number: '99.9%', label: 'Accuracy Rate' },
              { icon: Users, number: '50K+', label: 'Happy Customers' },
              { icon: Star, number: '4.8★', label: 'Customer Rating' }
            ].map((indicator, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md">
                  <indicator.icon className="w-8 h-8 text-teal-600" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{indicator.number}</div>
                <p className="text-gray-600 font-medium">{indicator.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
