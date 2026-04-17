import { Quote, Star, Users, Calendar } from 'lucide-react';

const testimonials = [
  {
    name: 'Ms. Sonam Srivastava',
    location: 'Delhi',
    rating: 5,
    date: '2024-01-15',
    avatar: '👩',
    testimonial: 'In my area, your Lab is Awesome & Staff behavior is very nice and helpful. The home collection service was prompt and the reports were delivered on time. Highly recommend Wellness Healthcare!',
    category: 'Home Collection'
  },
  {
    name: 'Mr. Vikas Sapkal',
    location: 'Mumbai',
    rating: 5,
    date: '2024-01-10',
    avatar: '👨‍⚕️',
    testimonial: 'Great Experience, Best Quality Product and Best Results. The comprehensive health package gave me complete insights about my health status. The online booking system is very user-friendly.',
    category: 'Health Package'
  },
  {
    name: 'Ms. Akriti Verma',
    location: 'Pune',
    rating: 5,
    date: '2024-01-08',
    avatar: '👩',
    testimonial: 'Well everything is fine and I don\'t think you need to change anything. The test results were accurate and the customer support was excellent. Will definitely use your services again.',
    category: 'Customer Service'
  },
  {
    name: 'Mr. Abishek Tappo',
    location: 'Noida',
    rating: 5,
    date: '2024-01-05',
    avatar: '👨‍💼',
    testimonial: 'Service is good, affordable pricing and timely report, overall experience was very good. The corporate wellness program for our company has been beneficial for employee health.',
    category: 'Corporate Wellness'
  },
  {
    name: 'Dr. Rajesh Kumar',
    location: 'Bangalore',
    rating: 5,
    date: '2024-01-12',
    avatar: '👨‍⚕️',
    testimonial: 'As a healthcare provider, I\'m impressed with the quality and accuracy of your lab services. The NABL certification gives confidence to our patients about the results.',
    category: 'Healthcare Provider'
  },
  {
    name: 'Mrs. Priya Sharma',
    location: 'Kolkata',
    rating: 5,
    date: '2024-01-20',
    avatar: '👩',
    testimonial: 'The mobile app for tracking test results is very convenient. I could track my sample and get real-time updates. The digital reports are easy to understand.',
    category: 'Mobile App'
  },
  {
    name: 'Mr. Amit Patel',
    location: 'Hyderabad',
    rating: 5,
    date: '2024-01-18',
    avatar: '👨‍💼',
    testimonial: 'The franchise opportunity with Wellness Healthcare has been excellent. The support team provides great training and the business model is sustainable.',
    category: 'Franchise Partner'
  }
];

const categories = [
  { name: 'All', icon: '⭐', color: 'bg-gray-100 text-gray-700' },
  { name: 'Home Collection', icon: '🏠', color: 'bg-blue-100 text-blue-700' },
  { name: 'Health Package', icon: '📦', color: 'bg-green-100 text-green-700' },
  { name: 'Customer Service', icon: '💬', color: 'bg-purple-100 text-purple-700' },
  { name: 'Corporate', icon: '🏢', color: 'bg-orange-100 text-orange-700' },
  { name: 'Healthcare Provider', icon: '👨‍⚕️', color: 'bg-red-100 text-red-700' },
  { name: 'Mobile App', icon: '📱', color: 'bg-indigo-100 text-indigo-700' }
];

export default function CustomerTestimonials() {
  return (
    <section className="py-20 bg-gradient-to-br from-white via-teal-50/30 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-teal-100/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-100/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-100 to-cyan-100 text-teal-700 text-sm font-semibold px-6 py-3 rounded-full mb-8 shadow-lg backdrop-blur-sm border border-teal-200/50">
            <Quote className="w-5 h-5" />
            What Our Customers Say
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-6 max-w-5xl mx-auto">
            Real Stories from <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 via-cyan-500 to-teal-600">Happy Customers</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-12 max-w-4xl mx-auto">
            Discover why thousands of customers trust Wellness Healthcare for their diagnostic and wellness needs. 
            Read authentic experiences from real customers across India.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                index === 0 
                  ? 'bg-teal-500 text-white shadow-lg' 
                  : `${category.color} hover:shadow-md`
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl hover:border-teal-200 transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
            >
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Avatar and Rating */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-full flex items-center justify-center text-2xl shadow-md group-hover:scale-110 transition-transform duration-500">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">
                      {testimonial.name}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                      <MapPin className="w-4 h-4" />
                      <span>{testimonial.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="text-sm text-gray-500 mb-2">
                    <Calendar className="w-4 h-4 inline mr-2" />
                    {testimonial.date}
                  </div>
                  <span className="inline-flex items-center gap-2 px-3 py-1 bg-teal-100 text-teal-700 text-xs font-semibold rounded-full">
                    {testimonial.category}
                  </span>
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="relative z-10">
                <Quote className="w-8 h-8 text-teal-200/50 mb-4" />
                <p className="text-gray-700 leading-relaxed mb-6 text-lg italic group-hover:text-gray-900 transition-colors">
                  "{testimonial.testimonial}"
                </p>
                
                {/* Verified Badge */}
                <div className="flex items-center gap-2 text-sm text-teal-600">
                  <div className="w-4 h-4 bg-teal-500 rounded-full flex items-center justify-center">
                    <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 1.414l-8.485 8.486a1 1 0 00-.001.001.499L9.5 12.5l-5.293-5.293a1 1 0 01-1.414 1.414L8.586 9.414a1 1 0 01.707-.293l5.293 5.293a1 1 0 011.414-1.414L15.293 7.586a1 1 0 01-.293-.707L8.586 5.293a1 1 0 01-.707.293z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="font-medium">Verified Customer</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-3xl p-12 border border-teal-100">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-teal-600 mb-2">50,000+</div>
              <p className="text-gray-700 font-medium">Happy Customers</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-teal-600 mb-2">4.8★</div>
              <p className="text-gray-700 font-medium">Average Rating</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-teal-600 mb-2">95%</div>
              <p className="text-gray-700 font-medium">Customer Satisfaction</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Share Your Experience
          </h3>
          <p className="text-gray-600 leading-relaxed mb-8 max-w-2xl mx-auto">
            Have you used Wellness Healthcare services? We'd love to hear about your experience 
            and help others make informed healthcare decisions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-teal-500 hover:bg-teal-600 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl">
              <Users className="w-5 h-5" />
              Write a Review
            </button>
            <button className="bg-white hover:bg-gray-50 text-gray-700 font-semibold px-8 py-4 rounded-full border-2 border-gray-300 hover:border-teal-300 transition-all duration-300 shadow-lg hover:shadow-xl">
              <Quote className="w-5 h-5" />
              Read More Stories
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
