import { Smartphone, BarChart, Shield, Users, ArrowRight, CheckCircle } from 'lucide-react';

const features = [
  {
    icon: Smartphone,
    title: 'Wellness App',
    description: 'Wellness Healthcare works anywhere and everywhere with our easy-to-use mobile application.',
    features: ['Health tracking', 'Personalized coaching', 'Progress reports', 'Appointment scheduling']
  },
  {
    icon: BarChart,
    title: 'Analytics Dashboard',
    description: 'Real-time insights and reporting for HR teams to track program success.',
    features: ['ROI tracking', 'Engagement metrics', 'Health outcomes', 'Custom reports']
  },
  {
    icon: Shield,
    title: 'Data Security',
    description: 'Enterprise-grade security and compliance with healthcare data protection standards.',
    features: ['HIPAA compliant', 'Encrypted data', 'Secure access', 'Regular audits']
  },
  {
    icon: Users,
    title: 'Integration Ready',
    description: 'Seamlessly integrate with your existing HR systems and benefits platforms.',
    features: ['HRIS integration', 'Benefits sync', 'Single sign-on', 'API access']
  }
];

export default function TechnologySection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Technology That Powers Wellness
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive platform combines cutting-edge technology with human-centered design 
            to deliver wellness programs that engage and inspire.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-teal-200"
            >
              <div className="w-16 h-16 bg-teal-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-teal-100 transition-colors">
                <feature.icon className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-teal-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">{feature.description}</p>
              <ul className="space-y-2">
                {feature.features.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle className="w-3.5 h-3.5 text-teal-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* App Showcase */}
        <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-3xl p-12 border border-teal-100">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Wellness Made Simple
              </h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                Our mobile app puts wellness in the palm of your hand. Track progress, 
                connect with coaches, and access personalized health insights - all from one 
                intuitive platform designed for today's workforce.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-teal-500" />
                  <span className="text-gray-700">Available on iOS and Android</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-teal-500" />
                  <span className="text-gray-700">Offline mode for accessibility</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-teal-500" />
                  <span className="text-gray-700">Multi-language support</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-teal-500" />
                  <span className="text-gray-700">Real-time sync across devices</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-600 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200">
                  <Smartphone className="w-5 h-5" />
                  Download App
                </button>
                <button className="flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-700 font-semibold px-6 py-3 rounded-xl border border-gray-300 transition-all duration-200 hover:border-teal-300">
                  <ArrowRight className="w-5 h-5" />
                  Learn More
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <div className="aspect-[9/16] bg-gradient-to-br from-teal-100 to-cyan-100 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <Smartphone className="w-16 h-16 text-teal-600 mx-auto mb-4" />
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Mobile App</h4>
                    <p className="text-gray-600 mb-4">Wellness in your pocket</p>
                    <div className="flex gap-2 justify-center">
                      <div className="w-2 h-2 bg-teal-500 rounded-full" />
                      <div className="w-2 h-2 bg-teal-300 rounded-full" />
                      <div className="w-2 h-2 bg-teal-300 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-3 border border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-900">4.8★ Rating</p>
                    <p className="text-xs text-gray-500">10K+ Reviews</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-3 border border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Users className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-900">50K+ Users</p>
                    <p className="text-xs text-gray-500">Active Daily</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
