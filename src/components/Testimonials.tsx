import { useState } from 'react';
import { Star, Quote, MapPin, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    location: 'Mansarovar, Jaipur',
    rating: 5,
    date: '2024-01-15',
    avatar: '👨‍💼',
    testimonial: 'Excellent service! The home collection was very convenient and the reports came within 6 hours. The staff was professional and the entire process was smooth. Highly recommend Wellness Healthcare!',
    category: 'Home Collection'
  },
  {
    id: 2,
    name: 'Priya Sharma',
    location: 'Vaishali Nagar, Jaipur',
    rating: 5,
    date: '2024-01-12',
    avatar: '👩‍⚕️',
    testimonial: 'I booked the Complete Package and it was worth every penny. The tests were comprehensive and the reports were very detailed. The doctor consultation included was very helpful. Thank you team!',
    category: 'Health Package'
  },
  {
    id: 3,
    name: 'Amit Singh',
    location: 'Malviya Nagar, Jaipur',
    rating: 4,
    date: '2024-01-10',
    avatar: '👨‍💻',
    testimonial: 'Very professional and affordable diagnostic services. The online booking system is user-friendly and the customer support is excellent. Got my CBC test results quickly and accurately.',
    category: 'Lab Testing'
  },
  {
    id: 4,
    name: 'Sunita Devi',
    location: 'Jagatpura, Jaipur',
    rating: 5,
    date: '2024-01-08',
    avatar: '👩‍🦳',
    testimonial: 'The staff was very caring during my mother\'s home collection. They explained everything clearly and were very gentle. The reports were accurate and delivered on time. Very satisfied with the service.',
    category: 'Home Collection'
  },
  {
    id: 5,
    name: 'Dr. Vikram Mehta',
    location: 'Raja Park, Jaipur',
    rating: 5,
    date: '2024-01-05',
    avatar: '👨‍⚕️',
    testimonial: 'As a doctor, I appreciate the accuracy and reliability of their test results. The NABL certification gives confidence in their quality. I regularly recommend Wellness Healthcare to my patients.',
    category: 'Professional'
  }
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Star className="w-4 h-4" />
            Customer Reviews
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real experiences from our satisfied customers across Jaipur
          </p>
        </div>

        {/* Main Testimonial Slider */}
        <div className="relative">
          {/* Testimonial Card */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            <div className="grid md:grid-cols-2 gap-8 items-center p-8 md:p-12">
              {/* Left Side - Content */}
              <div className="flex flex-col justify-center">
                {/* Quote Icon */}
                <Quote className="w-12 h-12 text-teal-200 mb-6" />

                {/* Testimonial Text */}
                <p className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 leading-relaxed">
                  "{current.testimonial}"
                </p>

                {/* Star Rating */}
                <div className="flex items-center gap-2 mb-6">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${i < current.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                  <span className="text-lg font-semibold text-gray-900 ml-2">{current.rating}.0</span>
                </div>

                {/* Customer Info */}
                <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
                  <div className="w-14 h-14 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-full flex items-center justify-center text-3xl">
                    {current.avatar}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900">{current.name}</h3>
                    <div className="flex items-center gap-1 text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{current.location}</span>
                    </div>
                  </div>
                </div>

                {/* Category & Date */}
                <div className="flex items-center gap-4 mt-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-50 text-teal-700 rounded-full text-sm font-semibold">
                    {current.category}
                  </div>
                  <div className="flex items-center gap-1 text-gray-500 text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>{current.date}</span>
                  </div>
                </div>

                {/* Verified Badge */}
                <div className="flex items-center gap-2 text-teal-600 font-semibold mt-4">
                  <div className="w-5 h-5 bg-teal-500 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  Verified Customer
                </div>
              </div>

              {/* Right Side - Image */}
              <div className="hidden md:block">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-cyan-400 rounded-2xl transform rotate-3 blur-sm opacity-75"></div>
                  <div className="relative w-full h-96 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl flex items-center justify-center border border-teal-200">
                    <div className="text-center">
                      <div className="text-8xl mb-4">{current.avatar}</div>
                      <p className="text-gray-600 font-semibold text-lg">{current.name}</p>
                      <p className="text-teal-600 font-semibold">{current.category}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between mt-10">
            <button
              onClick={goToPrevious}
              className="w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-all duration-200 border border-gray-200 hover:border-teal-300 hover:shadow-xl"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 text-teal-600" />
            </button>

            {/* Indicators */}
            <div className="flex items-center gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentIndex
                      ? 'w-10 h-3 bg-teal-500'
                      : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={goToNext}
              className="w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-all duration-200 border border-gray-200 hover:border-teal-300 hover:shadow-xl"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6 text-teal-600" />
            </button>
          </div>

          {/* Counter */}
          <div className="text-center mt-8">
            <p className="text-gray-600 font-semibold">
              Review <span className="text-teal-600 font-bold">{currentIndex + 1}</span> of <span className="text-teal-600 font-bold">{testimonials.length}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
