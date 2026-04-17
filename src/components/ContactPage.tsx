import { MapPin, Phone, Mail, Clock, Send, User, MessageSquare } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Our Main Lab',
      details: [
        '123 Healthcare Avenue,',
        'Medical District,',
        'Mumbai, Maharashtra 400001'
      ]
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: [
        '+91 800 123 4567',
        '+91 22 2345 6789',
        'Available 24/7'
      ]
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: [
        'info@wellnesshealthcare.com',
        'support@wellnesshealthcare.com',
        'Response within 2 hours'
      ]
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: [
        'Mon - Sat: 6:00 AM - 10:00 PM',
        'Sunday: 7:00 AM - 8:00 PM',
        'Emergency: 24/7 Available'
      ]
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-teal-50 via-cyan-50 to-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-100/30 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Have questions about our services? Need to book a test? 
              Our team is here to help you with all your healthcare needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you within 2 hours.
              </p>

              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-6 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                      <Send className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-green-900">Message Sent Successfully!</h3>
                      <p className="text-sm text-green-700">We'll get back to you soon.</p>
                    </div>
                  </div>
                </div>
              ) : null}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all resize-none"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-600 text-white font-semibold px-6 py-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
              <p className="text-gray-600 mb-8">
                Reach out to us through any of the following channels.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-teal-200 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-teal-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {info.title}
                        </h3>
                        <div className="space-y-1">
                          {info.details.map((detail, detailIndex) => (
                            <p key={detailIndex} className="text-sm text-gray-600">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
            <div className="h-96 bg-gradient-to-br from-teal-100 to-cyan-100 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-teal-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Find Us Here</h3>
                <p className="text-gray-600 mb-4">
                  123 Healthcare Avenue, Medical District, Mumbai 400001
                </p>
                <button className="bg-teal-500 hover:bg-teal-600 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200">
                  Get Directions
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 bg-gradient-to-r from-teal-500 to-cyan-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Need Immediate Assistance?
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <a
              href="tel:+918001234567"
              className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-semibold px-6 py-4 rounded-xl transition-all duration-200 border border-white/30"
            >
              <Phone className="w-5 h-5 inline mr-2" />
              Call Now: +91 800 123 4567
            </a>
            <button className="bg-white text-teal-600 font-semibold px-6 py-4 rounded-xl hover:bg-gray-50 transition-all duration-200">
              Book Home Collection
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
