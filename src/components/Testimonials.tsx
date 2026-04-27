import { Star, Quote, MapPin, Calendar } from 'lucide-react';

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
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
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

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-teal-300 overflow-hidden"
            >
              {/* Testimonial Header */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-full flex items-center justify-center text-2xl">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 group-hover:text-teal-600 transition-colors">
                        {testimonial.name}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <MapPin className="w-3 h-3" />
                        <span>{testimonial.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                        />
                      ))}
                    </div>
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <Calendar className="w-3 h-3" />
                      <span>{testimonial.date}</span>
                    </div>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="inline-flex items-center gap-1 px-3 py-1 bg-teal-50 text-teal-700 rounded-full text-xs font-medium">
                  {testimonial.category}
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="p-6">
                <Quote className="w-8 h-8 text-teal-200 mb-4" />
                <p className="text-gray-700 leading-relaxed mb-4">
                  {testimonial.testimonial}
                </p>
                
                {/* Verified Badge */}
                <div className="flex items-center gap-2 text-sm text-teal-600">
                  <div className="w-4 h-4 bg-teal-500 rounded-full flex items-center justify-center">
                    <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="font-medium">Verified Customer</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Overall Rating */}
        <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-2xl p-8 border border-teal-200">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Customer Satisfaction
              </h3>
              <div className="flex items-center gap-4 mb-4">
                <div className="text-5xl font-bold text-teal-600">4.8</div>
                <div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600">Based on 2,847 reviews</p>
                </div>
              </div>
              
              {/* Rating Breakdown */}
              <div className="space-y-2">
                {[5, 4, 3, 2, 1].map((rating) => (
                  <div key={rating} className="flex items-center gap-3">
                    <span className="text-sm text-gray-600 w-3">{rating}</span>
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-yellow-400 h-2 rounded-full"
                        style={{ 
                          width: rating === 5 ? '75%' : rating === 4 ? '15%' : rating === 3 ? '7%' : rating === 2 ? '2%' : '1%'
                        }}
                      />
                    </div>
                    <span className="text-sm text-gray-600 w-10 text-right">
                      {rating === 5 ? '75%' : rating === 4 ? '15%' : rating === 3 ? '7%' : rating === 2 ? '2%' : '1%'}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="text-center">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { number: '10K+', label: 'Happy Customers' },
                  { number: '15+', label: 'Years Experience' },
                  { number: '98%', label: 'Satisfaction Rate' },
                  { number: '24/7', label: 'Support Available' }
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-teal-600 mb-1">{stat.number}</div>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Have feedback? We'd love to hear from you!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl">
              Write a Review
            </button>
            <button className="px-8 py-3 bg-white hover:bg-gray-50 text-gray-700 font-semibold rounded-xl transition-all duration-300 border border-gray-300 hover:border-gray-400">
              Read More Reviews
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
