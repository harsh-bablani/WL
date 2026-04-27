import { Shield, Clock, Home, DollarSign, CheckCircle, ArrowRight, Phone, MessageCircle, Upload } from 'lucide-react';

export default function ModernHero() {
  return (
    <section className="relative bg-gradient-to-br from-teal-50 via-white to-cyan-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-teal-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-semibold animate-pulse">
              <Shield className="w-4 h-4" />
              NABL Accredited Lab in Jaipur
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                Book Lab Tests at Home with
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-teal-600"> NABL Accredited Lab</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                Fast Reports | Affordable Prices | Home Collection Available
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { icon: Shield, text: 'NABL Accredited', color: 'text-teal-600' },
                { icon: Home, text: 'Home Collection', color: 'text-blue-600' },
                { icon: Clock, text: 'Fast Reporting', color: 'text-green-600' },
                { icon: DollarSign, text: 'Affordable Prices', color: 'text-purple-600' }
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center text-center p-3 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                  <item.icon className={`w-6 h-6 mb-2 ${item.color}`} />
                  <span className="text-xs sm:text-sm font-medium text-gray-700">{item.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                <span>Book Test Now</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              
              <button className="group flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                <Upload className="w-5 h-5" />
                <span>Upload Prescription</span>
              </button>
              
              <button className="flex items-center justify-center gap-3 px-8 py-4 bg-white hover:bg-gray-50 text-gray-700 font-semibold rounded-xl transition-all duration-300 shadow-md hover:shadow-lg border border-gray-200">
                <MessageCircle className="w-5 h-5 text-green-500" />
                <span>WhatsApp Now</span>
              </button>
            </div>

            {/* Contact Info */}
            <div className="flex items-center gap-6 text-gray-600">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-teal-600" />
                <span className="text-sm">9829078973</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-green-500" />
                <span className="text-sm">9214499993</span>
              </div>
            </div>
          </div>

          {/* Right Content - Doctor/Lab Professional Image */}
          <div className="relative">
            <div className="relative z-10">
              <div className="aspect-square lg:aspect-[4/3] bg-gradient-to-br from-teal-100 to-cyan-100 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Medical Professional"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Floating Trust Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 z-20">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <p className="font-bold text-gray-900">Trusted by 10,000+</p>
                  <p className="text-sm text-gray-600">Happy Customers</p>
                </div>
              </div>
            </div>

            {/* Floating Stats Card */}
            <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-4 z-20">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="font-bold text-gray-900">6 Hours</p>
                  <p className="text-sm text-gray-600">Fast Reporting</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Trust Bar */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Only 2% labs in India are NABL accredited — we are one of them.
              </h3>
              <p className="text-gray-600">
                Get accurate test results from certified laboratories
              </p>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-10 h-10 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full border-2 border-white flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                ))}
              </div>
              <div className="text-right">
                <p className="font-bold text-gray-900">NABL Certified</p>
                <p className="text-sm text-gray-600">ISO 15189:2022</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
