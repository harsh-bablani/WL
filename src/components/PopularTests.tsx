import { ShoppingCart, Plus, Clock, Star, Users, TrendingUp, TestTube } from 'lucide-react';

const popularTests = [
  {
    name: 'Complete Blood Count (CBC)',
    category: 'Hematology',
    price: 299,
    originalPrice: 499,
    discount: 40,
    rating: 4.8,
    reviews: 1254,
    reportTime: '4 hours',
    description: 'Complete blood count including RBC, WBC, platelets, hemoglobin and more',
    parameters: 24,
    popular: true
  },
  {
    name: 'Blood Sugar (Fasting)',
    category: 'Diabetes',
    price: 199,
    originalPrice: 349,
    discount: 43,
    rating: 4.9,
    reviews: 892,
    reportTime: '2 hours',
    description: 'Fasting blood glucose test for diabetes screening and monitoring',
    parameters: 1,
    popular: true
  },
  {
    name: 'HbA1c (Glycosylated Hemoglobin)',
    category: 'Diabetes',
    price: 499,
    originalPrice: 799,
    discount: 38,
    rating: 4.7,
    reviews: 678,
    reportTime: '6 hours',
    description: '3-month average blood sugar level for diabetes management',
    parameters: 1,
    popular: false
  },
  {
    name: 'Lipid Profile',
    category: 'Cardiac',
    price: 399,
    originalPrice: 699,
    discount: 43,
    rating: 4.8,
    reviews: 1456,
    reportTime: '4 hours',
    description: 'Complete cholesterol panel including HDL, LDL, triglycerides',
    parameters: 8,
    popular: true
  },
  {
    name: 'Liver Function Test (LFT)',
    category: 'Hepatology',
    price: 499,
    originalPrice: 899,
    discount: 44,
    rating: 4.6,
    reviews: 543,
    reportTime: '6 hours',
    description: 'Comprehensive liver health assessment with enzymes and proteins',
    parameters: 12,
    popular: false
  },
  {
    name: 'Kidney Function Test (KFT)',
    category: 'Nephrology',
    price: 499,
    originalPrice: 899,
    discount: 44,
    rating: 4.7,
    reviews: 612,
    reportTime: '6 hours',
    description: 'Complete kidney function assessment including creatinine, urea',
    parameters: 10,
    popular: false
  },
  {
    name: 'Thyroid Profile (T3, T4, TSH)',
    category: 'Endocrinology',
    price: 599,
    originalPrice: 999,
    discount: 40,
    rating: 4.8,
    reviews: 789,
    reportTime: '6 hours',
    description: 'Complete thyroid function test for hypothyroidism and hyperthyroidism',
    parameters: 3,
    popular: false
  },
  {
    name: 'Vitamin D',
    category: 'Nutrition',
    price: 799,
    originalPrice: 1299,
    discount: 38,
    rating: 4.9,
    reviews: 923,
    reportTime: '24 hours',
    description: '25-OH Vitamin D test for bone health and immunity assessment',
    parameters: 1,
    popular: true
  }
];

export default function PopularTestsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <TestTube className="w-4 h-4" />
            Popular Tests
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Most Booked Diagnostic Tests
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose from our most frequently booked tests with fast reporting and accurate results
          </p>
        </div>

        {/* Scrollable Cards Container */}
        <div className="relative">
          {/* Scroll Indicators */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
            <button className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-200">
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          </div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
            <button className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-200">
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Test Cards */}
          <div className="flex gap-6 overflow-x-auto pb-4 lg:pb-0 scrollbar-hide">
            {popularTests.map((test, index) => (
              <div
                key={index}
                className="flex-none w-80 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-teal-300 overflow-hidden group"
              >
                {/* Discount Badge */}
                {test.discount && (
                  <div className="absolute top-3 right-3 z-10">
                    <div className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                      {test.discount}% OFF
                    </div>
                  </div>
                )}

                {/* Popular Badge */}
                {test.popular && (
                  <div className="absolute top-3 left-3 z-10">
                    <div className="bg-teal-500 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" />
                      Popular
                    </div>
                  </div>
                )}

                {/* Test Content */}
                <div className="p-6">
                  {/* Category */}
                  <div className="mb-3">
                    <span className="text-xs font-semibold text-teal-600 uppercase tracking-wider">
                      {test.category}
                    </span>
                  </div>

                  {/* Test Name */}
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors duration-200">
                    {test.name}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                    {test.description}
                  </p>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${i < Math.floor(test.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">
                      {test.rating} ({test.reviews} reviews)
                    </span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-2xl font-bold text-teal-600">
                      ₹{test.price}
                    </div>
                    {test.originalPrice && (
                      <div className="text-sm text-gray-400 line-through">
                        ₹{test.originalPrice}
                      </div>
                    )}
                  </div>

                  {/* Test Info */}
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{test.reportTime}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <TestTube className="w-4 h-4" />
                      <span>{test.parameters} parameters</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-semibold rounded-lg transition-all duration-200 shadow-md hover:shadow-lg">
                      <ShoppingCart className="w-4 h-4" />
                      Book Now
                    </button>
                    <button className="flex items-center justify-center px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-all duration-200">
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-8">
          <button className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl">
            <span>View All Tests</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>

        {/* Bottom Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: '200+', label: 'Tests Available' },
            { number: '6 Hours', label: 'Fast Reporting' },
            { number: '50K+', label: 'Tests Per Month' },
            { number: '100%', label: 'Accuracy Guaranteed' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-teal-600 mb-1">{stat.number}</div>
              <p className="text-sm text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Note: Custom scrollbar styles can be added via CSS or Tailwind utilities */}
    </section>
  );
}
