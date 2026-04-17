import { Quote, Star, ArrowRight } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'HR Director, TechCorp Solutions',
    content: 'Thank you for being so very responsive and knowledgeable throughout this onboarding process. Looking forward to our continued working relationship.',
    company: 'Technology Company',
    results: '35% reduction in employee sick days'
  },
  {
    name: 'Michael Chen',
    role: 'Wellness Program Participant',
    content: 'Thanks to Wellness Healthcare, I have accomplished every one of my goals over the last 2 years. By setting small goals, I\'ve grown in my hobbies, exercise, time management, and stress reduction.',
    company: 'Healthcare Delivery System',
    results: 'Lost 25 lbs and improved blood pressure'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Benefits Manager, Manufacturing Corp',
    content: 'The data-driven approach and measurable outcomes have transformed how we view employee wellness. The ROI reporting has been invaluable for justifying our program investment.',
    company: 'Manufacturing Company',
    results: '4.4% reduction in medical claims'
  }
];

const caseStudies = [
  {
    title: 'Healthcare Delivery System Success',
    company: 'Regional Healthcare Network',
    outcome: '78% of participants showed improved health metrics',
    description: 'Implementation of comprehensive wellness program across 5,000+ employees',
    metrics: ['85% engagement rate', '4.2% claims reduction', '92% employee satisfaction']
  },
  {
    title: 'Tech Company Wellness Transformation',
    company: 'Fortune 500 Technology Firm',
    outcome: 'Productivity increase of 22%',
    description: 'Digital-first wellness solution with personalized coaching',
    metrics: ['78% program adoption', '35% reduction in burnout', '4.8★ employee rating']
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Testimonials Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              A Proven Partner
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from organizations and individuals who have transformed their health with Wellness Healthcare
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <Quote className="w-8 h-8 text-teal-500 mb-4" />
                <p className="text-gray-700 leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div className="mb-4">
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-sm text-teal-600 font-medium">{testimonial.company}</p>
                </div>
                <div className="pt-4 border-t border-gray-100">
                  <p className="text-sm font-semibold text-teal-600">
                    {testimonial.results}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Case Studies Section */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from organizations that partnered with Wellness Healthcare
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="bg-gradient-to-r from-teal-500 to-cyan-500 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{study.title}</h3>
                  <p className="text-white/90 font-medium">{study.company}</p>
                </div>
                
                <div className="p-6">
                  <div className="mb-6">
                    <div className="text-3xl font-bold text-teal-600 mb-2">
                      {study.outcome}
                    </div>
                    <p className="text-gray-600">{study.description}</p>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    {study.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-teal-500 rounded-full" />
                        <span className="text-gray-700">{metric}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button className="flex items-center gap-2 text-teal-600 font-semibold hover:text-teal-700 transition-colors">
                    <span>Read Case Study</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA for Testimonials */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Write Your Success Story?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join hundreds of organizations that have transformed their workplace wellness 
              with our data-driven, results-focused programs.
            </p>
            <button className="bg-teal-500 hover:bg-teal-600 text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
