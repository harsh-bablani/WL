import { useEffect, useRef } from 'react';
import { ShoppingCart, Star, TrendingUp, TestTube } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

export const popularTests = [
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

interface PopularTestsSectionProps {
  highlightedTestName?: string | null;
}

export default function PopularTestsSection({ highlightedTestName }: PopularTestsSectionProps) {
  const { addToCart } = useCart();
  const sliderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!highlightedTestName) {
      return;
    }

    const matchingCard = Array.from(document.querySelectorAll<HTMLElement>('[data-test-name]')).find(
      (card) => card.dataset.testName === highlightedTestName
    );

    if (matchingCard) {
      matchingCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [highlightedTestName]);

  const scrollSlider = (direction: 'left' | 'right') => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollBy({
      left: direction === 'left' ? -320 : 320,
      behavior: 'smooth'
    });
  };

  const handleAddToCart = (test: typeof popularTests[0]) => {
    addToCart({
      id: test.name.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      name: test.name,
      testCount: test.parameters,
      price: test.price,
      originalPrice: test.originalPrice,
      discount: test.discount,
      color: 'from-teal-500 to-teal-600'
    });
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <TestTube className="w-4 h-4" />
            Popular Tests
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Most Booked Diagnostic Tests
          </h2>
        </div>

        {/* Scrollable Cards Container */}
        <div className="relative">
          {/* Scroll Indicators */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
            <button
              type="button"
              onClick={() => scrollSlider('left')}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-200"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          </div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
            <button
              type="button"
              onClick={() => scrollSlider('right')}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-200"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Test Cards */}
          <div ref={sliderRef} className="flex gap-5 overflow-x-auto pb-4 lg:pb-0 scrollbar-hide px-1">
            {popularTests.map((test, index) => (
              <div
                key={index}
                data-test-name={test.name}
                className={`flex-none w-72 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border overflow-hidden group scroll-mt-28 relative ${
                  highlightedTestName === test.name
                    ? 'border-teal-500 ring-2 ring-teal-200 shadow-2xl'
                    : 'border-gray-200 hover:border-teal-300'
                }`}
              >
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
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-1">
                      <TestTube className="w-4 h-4" />
                      <span>{test.parameters} parameters</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => handleAddToCart(test)}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-semibold rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
                    >
                      <ShoppingCart className="w-4 h-4" />
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
