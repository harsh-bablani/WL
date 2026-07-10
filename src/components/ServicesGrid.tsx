import { useState, useRef } from 'react';
import { Activity, Heart, Brain, Bone, Home, TestTube, Stethoscope } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { popularTests } from './PopularTests';

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

interface ServicesGridProps {
  onNavigate?: (page: 'home' | 'about' | 'contact' | 'packages' | 'cart') => void;
}

export default function ServicesGrid({ onNavigate }: ServicesGridProps) {
  const { addToCart } = useCart();
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);
  const [isCustomOpen, setIsCustomOpen] = useState(false);
  const [customTests, setCustomTests] = useState<string[]>([]);
  const [customNote, setCustomNote] = useState('');
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const scrollSlider = (direction: 'left' | 'right') => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollBy({
      left: direction === 'left' ? -320 : 320,
      behavior: 'smooth'
    });
  };

  const handleCustomToggle = (testName: string) => {
    setCustomTests((prev) =>
      prev.includes(testName) ? prev.filter((t) => t !== testName) : [...prev, testName]
    );
  };

  const submitCustomPackage = () => {
    if (customTests.length === 0) {
      return;
    }

    addToCart({
      id: `custom-package-${Date.now()}`,
      name: `Custom Package (${customTests.length} tests)`,
      testCount: customTests.length,
      price: customTests.length * 299,
      originalPrice: customTests.length * 499,
      discount: 20,
      color: 'from-teal-500 to-teal-600',
      note: `Selected tests: ${customTests.join(', ')}${customNote ? `; Note: ${customNote}` : ''}`
    });
    setIsCustomOpen(false);
    setCustomTests([]);
    setCustomNote('');
    onNavigate?.('cart');
  };

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

        {/* Services Slider */}
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

          {/* Service Cards */}
          <div ref={sliderRef} className="flex gap-4 overflow-x-auto pb-4 lg:pb-0 scrollbar-hide">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex-none w-56 group relative bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 hover:border-teal-300"
              >
                {/* Popular Badge */}
                {service.popular && (
                  <div className="absolute top-3 right-3 z-10">
                    <div className="bg-teal-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                      Popular
                    </div>
                  </div>
                )}

                {/* Service Header - Compact */}
                <div className={`bg-gradient-to-r ${service.color} p-4 text-white h-32 flex flex-col justify-between`}>
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">{service.name}</h3>
                  </div>
                </div>

                {/* Service Action - Compact */}
                <div className="p-4">
                  <button 
                    type="button"
                    className="w-full bg-teal-50 text-teal-700 hover:bg-teal-100 font-semibold py-2 rounded-lg transition-all duration-300 border border-teal-100 text-sm"
                    onClick={() => {
                      setSelectedService(service);
                      setIsDetailsOpen(true);
                    }}
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Custom Package Button */}
        <div className="mt-12 text-center">
          <button
            type="button"
            onClick={() => setIsCustomOpen(true)}
            className="px-8 py-3 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Create Custom Package
          </button>
        </div>
      </div>

      {/* Service Details Modal */}
      {isDetailsOpen && selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
          <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
            <div className="flex items-start justify-between px-6 py-4 border-b border-gray-200">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">{selectedService.name}</h3>
              </div>
              <button
                type="button"
                onClick={() => setIsDetailsOpen(false)}
                className="text-gray-500 hover:text-gray-900 text-2xl leading-none"
              >
                ×
              </button>
            </div>
            <div className="px-6 py-6 space-y-6">
              <div>
                <p className="text-gray-700 text-lg">{selectedService.description}</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3 text-lg">What's Included:</h4>
                <div className="space-y-2">
                  {selectedService.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-teal-500 rounded-full" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-end gap-4 pt-4 border-t">
                <button
                  type="button"
                  onClick={() => setIsDetailsOpen(false)}
                  className="px-6 py-2.5 rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                >
                  Close
                </button>
                <button
                  type="button"
                  onClick={() => {
                    addToCart({
                      id: selectedService.name.toLowerCase().replace(/\s+/g, '-'),
                      name: selectedService.name,
                      testCount: selectedService.features.length,
                      price: 999,
                      originalPrice: 1499,
                      discount: 33,
                      color: selectedService.color
                    });
                    setIsDetailsOpen(false);
                  }}
                  className="px-6 py-2.5 rounded-lg bg-teal-600 text-white font-semibold hover:bg-teal-700 transition-colors duration-200"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Custom Package Modal */}
      {isCustomOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
          <div className="w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
            <div className="flex items-start justify-between px-6 py-4 border-b border-gray-200">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Create Custom Package</h3>
                <p className="text-sm text-gray-500">Select tests from our popular list</p>
              </div>
              <button
                type="button"
                onClick={() => setIsCustomOpen(false)}
                className="text-gray-500 hover:text-gray-900 text-2xl leading-none"
              >
                ×
              </button>
            </div>
            <div className="px-6 py-6 space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                {popularTests.map((test) => (
                  <label key={test.name} className="flex items-center gap-3 p-4 rounded-2xl border border-gray-200 hover:border-teal-300 transition-colors duration-200 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={customTests.includes(test.name)}
                      onChange={() => handleCustomToggle(test.name)}
                      className="h-4 w-4 text-teal-600 border-gray-300 rounded"
                    />
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900 text-sm">{test.name}</div>
                      <div className="text-xs text-gray-500">{test.category} • ₹{test.price}</div>
                    </div>
                  </label>
                ))}
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Add a note (optional)</label>
                <textarea
                  value={customNote}
                  onChange={(event) => setCustomNote(event.target.value)}
                  rows={3}
                  className="w-full border border-gray-200 rounded-lg p-4 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-200"
                  placeholder="Tell us if you need any specific tests or conditions covered"
                />
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-end gap-4 pt-4 border-t">
                <button
                  type="button"
                  onClick={() => setIsCustomOpen(false)}
                  className="px-6 py-2.5 rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors duration-200 text-sm"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={submitCustomPackage}
                  disabled={customTests.length === 0}
                  className="px-6 py-2.5 rounded-lg bg-teal-600 text-white font-semibold hover:bg-teal-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
