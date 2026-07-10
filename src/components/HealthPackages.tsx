import { CheckCircle, Star, Clock, Users, Package, TrendingUp, X, Phone, ShoppingCart } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '../contexts/CartContext';
import AnimatedCounter from './AnimatedCounter';

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
  const [selectedPackage, setSelectedPackage] = useState<typeof healthPackages[0] | null>(null);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    if (selectedPackage) {
      addToCart({
        id: selectedPackage.name.toLowerCase().replace(' ', '-'),
        name: selectedPackage.name,
        testCount: selectedPackage.testCount,
        price: selectedPackage.price,
        originalPrice: selectedPackage.originalPrice,
        discount: selectedPackage.discount,
        color: selectedPackage.color
      });
      setSelectedPackage(null);
    }
  };

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
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {healthPackages.map((pkg, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >

              {/* Package Header */}
              <div className={`bg-gradient-to-r ${pkg.color} p-4 text-white`}>
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <h3 className="text-xl font-bold">{pkg.name}</h3>
                    <p className="text-white/90 text-sm">{pkg.testCount} Tests</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold">₹{pkg.price}</div>
                    {pkg.originalPrice && (
                      <div className="text-xs text-white/70 line-through">₹{pkg.originalPrice}</div>
                    )}
                  </div>
                </div>
              </div>

              {/* Package Content - Simplified */}
              <div className="p-4">
                <button
                  onClick={() => setSelectedPackage(pkg)}
                  className={`w-full bg-gradient-to-r ${pkg.color} hover:opacity-90 text-white font-semibold py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg`}
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Package Detail Modal */}
      {selectedPackage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className={`bg-gradient-to-r ${selectedPackage.color} p-6 text-white`}>
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-3xl font-bold mb-2">{selectedPackage.name}</h3>
                  <p className="text-white/90">{selectedPackage.testCount} Tests Included</p>
                </div>
                <button
                  onClick={() => setSelectedPackage(null)}
                  className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="flex items-center gap-4 mt-4">
                <div className="text-4xl font-bold">₹{selectedPackage.price}</div>
                {selectedPackage.originalPrice && (
                  <div className="text-xl text-white/70 line-through">₹{selectedPackage.originalPrice}</div>
                )}
                {selectedPackage.discount && (
                  <div className="inline-flex items-center gap-1 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                    <TrendingUp className="w-4 h-4" />
                    <span>Save {selectedPackage.discount}%</span>
                  </div>
                )}
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {/* Key Inclusions */}
              <div className="mb-6">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Key Inclusions:</h4>
                <div className="space-y-3">
                  {selectedPackage.inclusions.map((test, testIndex) => (
                    <div key={testIndex} className="flex items-center gap-3 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span>{test}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Features:</h4>
                <div className="space-y-3">
                  {selectedPackage.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3 text-gray-700">
                      <div className="w-2 h-2 bg-teal-500 rounded-full" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <button
                  onClick={handleAddToCart}
                  className={`flex-1 flex items-center justify-center gap-3 bg-gradient-to-r ${selectedPackage.color} hover:opacity-90 text-white font-bold text-lg py-5 px-6 rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl`}
                >
                  <ShoppingCart className="w-7 h-7" />
                  Add to Cart
                </button>
                <button
                  onClick={() => setSelectedPackage(null)}
                  className="flex-1 flex items-center justify-center gap-3 bg-white hover:bg-gray-50 text-gray-700 font-bold text-lg py-5 px-6 rounded-xl transition-all duration-300 border-2 border-gray-300 hover:border-gray-400"
                >
                  <Phone className="w-7 h-7" />
                  Call Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
