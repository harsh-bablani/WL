import { CheckCircle, Star, Clock, Users, Package, TrendingUp } from 'lucide-react';

const healthPackages = [
  {
    name: 'Basic Package',
    testCount: 50,
    price: 999,
    originalPrice: 1499,
    discount: 33,
    badge: 'Best Value',
    color: 'from-blue-500 to-blue-600',
    inclusions: [
      'Complete Blood Count (CBC)',
      'Blood Sugar Fasting',
      'Lipid Profile',
      'Liver Function Test (LFT)',
      'Kidney Function Test (KFT)',
      'Thyroid Profile (T3, T4, TSH)',
      'Vitamin D',
      'Vitamin B12',
      'Hemoglobin',
      'ESR'
    ],
    features: [
      'NABL Certified Lab',
      'Reports in 6 Hours',
      'Home Collection Available',
      'Doctor Consultation'
    ],
    popular: true
  },
  {
    name: 'Complete Package',
    testCount: 72,
    price: 2499,
    originalPrice: 3499,
    discount: 29,
    badge: 'Most Popular',
    color: 'from-teal-500 to-teal-600',
    inclusions: [
      'All Basic Package Tests',
      'HbA1c (Glycosylated Hemoglobin)',
      'Urine Complete Analysis',
      'CRP (C-Reactive Protein)',
      'RA Factor',
      'ASO Titer',
      'Uric Acid',
      'Calcium',
      'Phosphorus',
      'Alkaline Phosphatase',
      'Total Protein',
      'Albumin',
      'Globulin',
      'A/G Ratio'
    ],
    features: [
      'Priority Reporting',
      'Free Home Collection',
      'Nutritionist Consultation',
      'Health Risk Assessment'
    ],
    popular: true
  },
  {
    name: 'Big Package',
    testCount: 76,
    price: 4999,
    originalPrice: 6999,
    discount: 29,
    badge: 'Premium',
    color: 'from-purple-500 to-purple-600',
    inclusions: [
      'All Complete Package Tests',
      'Cardiac Risk Markers',
      'Cancer Markers (Basic)',
      'Hormone Panel',
      'Allergy Screening',
      'Vitamin Panel (A, E, K)',
      'Mineral Panel',
      'Iron Studies',
      'Folic Acid',
      'Homocysteine',
      'Lipoprotein (a)',
      'Apolipoprotein A1 & B'
    ],
    features: [
      'Executive Health Check',
      'Same Day Reports',
      'Specialist Consultation',
      'Annual Health Tracking'
    ],
    popular: false
  }
];

export default function HealthPackagesSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Package className="w-4 h-4" />
            Health Packages
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Health Checkup Packages
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose from our carefully designed health packages for complete wellness assessment
          </p>
        </div>

        {/* Package Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {healthPackages.map((pkg, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden ${
                pkg.popular ? 'ring-2 ring-teal-500' : ''
              }`}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute -top-3 -right-3 z-10">
                  <div className={`bg-gradient-to-r ${pkg.color} text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg`}>
                    {pkg.badge}
                  </div>
                </div>
              )}

              {/* Package Header */}
              <div className={`bg-gradient-to-r ${pkg.color} p-6 text-white`}>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold">{pkg.name}</h3>
                    <p className="text-white/90">{pkg.testCount} Tests Included</p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold">₹{pkg.price}</div>
                    {pkg.originalPrice && (
                      <div className="text-sm text-white/70 line-through">₹{pkg.originalPrice}</div>
                    )}
                  </div>
                </div>
                
                {/* Discount Badge */}
                {pkg.discount && (
                  <div className="inline-flex items-center gap-1 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                    <TrendingUp className="w-4 h-4" />
                    <span>Save {pkg.discount}%</span>
                  </div>
                )}
              </div>

              {/* Package Content */}
              <div className="p-6">
                {/* Key Inclusions */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Inclusions:</h4>
                  <div className="space-y-2 max-h-40 overflow-y-auto">
                    {pkg.inclusions.slice(0, 5).map((test, testIndex) => (
                      <div key={testIndex} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span>{test}</span>
                      </div>
                    ))}
                    {pkg.inclusions.length > 5 && (
                      <div className="text-sm text-teal-600 font-medium">
                        +{pkg.inclusions.length - 5} more tests
                      </div>
                    )}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Features:</h4>
                  <div className="space-y-2">
                    {pkg.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Book Button */}
                <button className={`w-full bg-gradient-to-r ${pkg.color} hover:opacity-90 text-white font-semibold py-3 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg`}>
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { icon: Users, number: '10,000+', label: 'Happy Customers' },
            { icon: Star, number: '4.8★', label: 'Average Rating' },
            { icon: Clock, number: '6 Hours', label: 'Fast Reporting' },
            { icon: CheckCircle, number: '100%', label: 'NABL Certified' }
          ].map((stat, index) => (
            <div key={index} className="text-center p-4 bg-white rounded-xl shadow-md">
              <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mx-auto mb-2">
                <stat.icon className="w-6 h-6 text-teal-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">{stat.number}</div>
              <p className="text-sm text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
