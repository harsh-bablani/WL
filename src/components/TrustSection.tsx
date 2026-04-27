import { Shield, CheckCircle, Award, Star, Users, FileCheck } from 'lucide-react';

export default function TrustSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-teal-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Shield className="w-4 h-4" />
            Trust & Certification
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Only 2% labs in India are NABL accredited — we are one of them
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get accurate test results from certified laboratories with international quality standards
          </p>
        </div>

        {/* NABL Accreditation Badge */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-12 border border-teal-200">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">NABL Accredited</h3>
                  <p className="text-gray-600">ISO 15189:2022 Certified Laboratory</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">International Quality Standards</h4>
                    <p className="text-gray-600">Meeting global laboratory quality management requirements</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Accurate Results Guaranteed</h4>
                    <p className="text-gray-600">99.9% accuracy rate with validated testing methods</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Regular Quality Control</h4>
                    <p className="text-gray-600">Daily calibration and quality assurance protocols</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-teal-100 to-cyan-100 rounded-2xl flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-teal-600 mb-2">NABL</div>
                      <div className="text-xs text-gray-600">Accredited</div>
                    </div>
                  </div>
                  <p className="text-gray-700 font-medium">Certificate No: NABL-2745</p>
                  <p className="text-gray-600 text-sm">Valid until: 2026</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {[
            {
              icon: FileCheck,
              title: 'ISO 15189:2022',
              description: 'Medical Laboratory Quality Management System',
              color: 'from-blue-500 to-blue-600'
            },
            {
              icon: Award,
              title: 'CAP Accredited',
              description: 'College of American Pathologists Certification',
              color: 'from-purple-500 to-purple-600'
            },
            {
              icon: Star,
              title: 'Quality Excellence',
              description: 'National Quality Assurance Standards',
              color: 'from-orange-500 to-orange-600'
            }
          ].map((cert, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-teal-300"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${cert.color} rounded-2xl flex items-center justify-center mb-4`}>
                <cert.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{cert.title}</h3>
              <p className="text-gray-600">{cert.description}</p>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Shield, number: '2%', label: 'NABL Labs in India' },
              { icon: CheckCircle, number: '99.9%', label: 'Accuracy Rate' },
              { icon: Users, number: '50K+', label: 'Happy Customers' },
              { icon: Star, number: '4.8★', label: 'Customer Rating' }
            ].map((indicator, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <indicator.icon className="w-8 h-8 text-teal-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{indicator.number}</div>
                <p className="text-sm text-gray-600">{indicator.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Trust Message */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-6 py-3 rounded-full shadow-lg">
            <Shield className="w-5 h-5" />
            <span className="font-semibold">Your Health, Our Responsibility</span>
          </div>
        </div>
      </div>
    </section>
  );
}
