import { Package, Upload, MessageCircle, ArrowRight, Sparkles } from 'lucide-react';

export default function QuickActions() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Quick Actions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get started with our most popular services - choose what works best for you
          </p>
        </div>

        {/* Action Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Create Your Own Package */}
          <div className="group relative bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-teal-200 hover:border-teal-300 cursor-pointer">
            {/* Floating Badge */}
            <div className="absolute -top-3 -right-3 bg-teal-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
              Popular
            </div>
            
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Package className="w-8 h-8 text-white" />
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">
                  Create Your Own Package
                </h3>
                <p className="text-gray-600 mb-4">
                  Customize your health package with tests you need at affordable prices
                </p>
              </div>
              
              <button className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-md hover:shadow-lg">
                <span>Create Package</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>

          {/* Upload Prescription */}
          <div className="group relative bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-green-200 hover:border-green-300 cursor-pointer">
            {/* Floating Badge */}
            <div className="absolute -top-3 -right-3 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
              Recommended
            </div>
            
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Upload className="w-8 h-8 text-white" />
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                  Upload Prescription
                </h3>
                <p className="text-gray-600 mb-4">
                  Upload your doctor's prescription and we'll handle the rest
                </p>
              </div>
              
              <button className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-md hover:shadow-lg">
                <span>Upload Now</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>

          {/* WhatsApp for Help */}
          <div className="group relative bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-blue-200 hover:border-blue-300 cursor-pointer">
            {/* Floating Badge */}
            <div className="absolute -top-3 -right-3 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
              24/7 Support
            </div>
            
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  WhatsApp for Help
                </h3>
                <p className="text-gray-600 mb-4">
                  Get instant assistance from our healthcare experts
                </p>
              </div>
              
              <button className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-md hover:shadow-lg">
                <span>Chat Now</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-50 to-cyan-50 px-6 py-3 rounded-full border border-teal-200">
            <Sparkles className="w-5 h-5 text-teal-600" />
            <span className="text-gray-700 font-medium">
              Need help? Call us at <span className="font-bold text-teal-600">9829078973</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
