import { Activity, Heart, Brain, Bone, Eye, Home, TestTube, Stethoscope } from 'lucide-react';

const services = [
  {
    icon: TestTube,
    name: 'Lab Testing',
    description: 'Comprehensive diagnostic tests with NABL certified accuracy',
    features: ['Blood Tests', 'Urine Tests', 'Pathology', 'Microbiology'],
    color: 'from-teal-500 to-teal-600',
    popular: true
  },
  {
    icon: Heart,
    name: 'ECG',
    description: 'Electrocardiogram for heart health assessment',
    features: ['Resting ECG', 'Stress Test', 'Holter Monitoring', 'Event Recording'],
    color: 'from-red-500 to-red-600',
    popular: false
  },
  {
    icon: Activity,
    name: 'TMT',
    description: 'Treadmill Test for cardiac fitness evaluation',
    features: ['Exercise Stress Test', 'Heart Rate Monitoring', 'Blood Pressure Check', 'Risk Assessment'],
    color: 'from-orange-500 to-orange-600',
    popular: false
  },
  {
    icon: Brain,
    name: 'PFT',
    description: 'Pulmonary Function Tests for respiratory health',
    features: ['Spirometry', 'Lung Capacity', 'Airflow Measurement', 'Breathing Analysis'],
    color: 'from-blue-500 to-blue-600',
    popular: false
  },
  {
    icon: Bone,
    name: 'X-Ray',
    description: 'Digital radiography for bone and organ imaging',
    features: ['Digital X-Ray', 'Chest X-Ray', 'Bone X-Ray', 'Abdominal X-Ray'],
    color: 'from-purple-500 to-purple-600',
    popular: false
  },
  {
    icon: Home,
    name: 'Home Collection',
    description: 'Sample collection from the comfort of your home',
    features: ['At-Home Phlebotomy', 'Same Day Collection', 'Safety Protocols', 'Trained Staff'],
    color: 'from-green-500 to-green-600',
    popular: true
  }
];

export default function ServicesGrid() {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Stethoscope className="w-4 h-4" />
            Our Services
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Healthcare Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From basic lab tests to advanced diagnostics, we offer complete healthcare solutions
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-200 hover:border-teal-300"
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute top-4 right-4 z-10">
                  <div className="bg-teal-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    Popular
                  </div>
                </div>
              )}

              {/* Service Header */}
              <div className={`bg-gradient-to-r ${service.color} p-6 text-white`}>
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{service.name}</h3>
                <p className="text-white/90">{service.description}</p>
              </div>

              {/* Service Content */}
              <div className="p-6">
                <div className="space-y-3 mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Includes:</h4>
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-teal-500 rounded-full" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className={`w-full bg-gradient-to-r ${service.color} hover:opacity-90 text-white font-semibold py-3 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg`}>
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-2xl p-8 border border-teal-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need Custom Health Package?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Contact our healthcare experts to create a personalized diagnostic package based on your specific needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl">
                Create Custom Package
              </button>
              <button className="px-8 py-3 bg-white hover:bg-gray-50 text-gray-700 font-semibold rounded-xl transition-all duration-300 border border-gray-300 hover:border-gray-400">
                Talk to Expert
              </button>
            </div>
          </div>
        </div>

        {/* Service Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: '15+', label: 'Years Experience' },
            { number: '50K+', label: 'Tests Performed' },
            { number: '100%', label: 'Accuracy Rate' },
            { number: '24/7', label: 'Service Available' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-teal-600 mb-1">{stat.number}</div>
              <p className="text-sm text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
