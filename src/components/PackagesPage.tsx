import { CheckCircle, Star, Clock, Users, Package, TrendingUp, Phone, MessageCircle, ShoppingCart } from 'lucide-react';
import { useState } from 'react';

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

export default function PackagesPage() {
  const [cart, setCart] = useState<string[]>([]);

  const addToCart = (packageName: string) => {
    if (!cart.includes(packageName)) {
      setCart([...cart, packageName]);
    }
  };

  const removeFromCart = (packageName: string) => {
    setCart(cart.filter(item => item !== packageName));
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-teal-50 via-cyan-50 to-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-100/30 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Package className="w-4 h-4" />
              Health Packages
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Comprehensive Health Checkup Packages
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Choose from our carefully designed health packages for complete wellness assessment with NABL certified accuracy
            </p>
          </div>
        </div>
      </section>

      {/* Cart Summary */}
      {cart.length > 0 && (
        <div className="sticky top-20 z-40 bg-white border-b border-gray-200 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShoppingCart className="w-5 h-5 text-teal-600" />
                <span className="font-semibold text-gray-900">
                  {cart.length} package{cart.length > 1 ? 's' : ''} in cart
                </span>
              </div>
              <button className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-semibold px-6 py-2 rounded-xl transition-all duration-200">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Package Cards */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                  {cart.includes(pkg.name) ? (
                    <button
                      onClick={() => removeFromCart(pkg.name)}
                      className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-3 rounded-xl transition-all duration-300"
                    >
                      Remove from Cart
                    </button>
                  ) : (
                    <button
                      onClick={() => addToCart(pkg.name)}
                      className={`w-full bg-gradient-to-r ${pkg.color} hover:opacity-90 text-white font-semibold py-3 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg`}
                    >
                      Add to Cart
                    </button>
                  )}
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

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-teal-500 to-cyan-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need Custom Health Package?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Contact our healthcare experts to create a personalized diagnostic package based on your specific needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:9829078973"
              className="flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-teal-600 font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
            <a
              href="https://wa.me/919829078973"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
