import { Activity, Users, Target, Smartphone, ArrowRight, Heart, ShieldCheck, BarChart } from 'lucide-react';

const solutions = [
  {
    icon: Heart,
    title: 'Blood Tests',
    description: 'Comprehensive diagnostic tests including CBC, Lipid Profile, Thyroid, and more with accurate results.',
    color: 'bg-red-50 text-red-500',
    features: ['NABL certified', '6-hour reporting', 'Online results']
  },
  {
    icon: Users,
    title: 'Health Packages',
    description: 'Complete health screening packages for preventive care and regular health monitoring.',
    color: 'bg-teal-50 text-teal-500',
    features: ['Multiple tests', 'Discounted pricing', 'Expert consultation']
  },
  {
    icon: Activity,
    title: 'Home Collection',
    description: 'Book sample collection from home with trained phlebotomists and hygiene protocols.',
    color: 'bg-blue-50 text-blue-500',
    features: ['At-home service', 'Same day collection', 'Safety protocols']
  },
  {
    icon: Target,
    title: 'Corporate Wellness',
    description: 'Customized wellness programs for organizations with comprehensive health screening and reporting.',
    color: 'bg-emerald-50 text-emerald-500',
    features: ['Group discounts', 'On-site camps', 'Health analytics']
  }
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-teal-500 font-semibold text-sm uppercase tracking-wider">Our Solutions</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">
            Why Choose Wellness Healthcare For Your Health Needs?
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our comprehensive diagnostic services including blood tests, 
            health packages, home collection, and corporate wellness programs. 
            Get accurate results from NABL certified labs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {solutions.map(({ icon: Icon, title, description, color, features }, index) => (
            <div
              key={index}
              className="group bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-teal-200"
            >
              <div className={`w-16 h-16 rounded-2xl ${color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <Icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-teal-600 transition-colors">
                {title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">{description}</p>
              <ul className="space-y-2">
                {features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-700">
                    <div className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Why Choose Section */}
        <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-3xl p-12 border border-teal-100">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="text-center lg:text-left">
              <div className="w-12 h-12 bg-teal-500 rounded-xl flex items-center justify-center mb-4 mx-auto lg:mx-0">
                <ShieldCheck className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Private & Reliable</h4>
              <p className="text-gray-600">
                Family-owned organization providing a steadfast commitment to your workplace wellness.
              </p>
            </div>
            
            <div className="text-center lg:text-left">
              <div className="w-12 h-12 bg-teal-500 rounded-xl flex items-center justify-center mb-4 mx-auto lg:mx-0">
                <BarChart className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Data-Driven Results</h4>
              <p className="text-gray-600">
                Tech-supported programs with measurable outcomes and ROI reporting.
              </p>
            </div>
            
            <div className="text-center lg:text-left">
              <div className="w-12 h-12 bg-teal-500 rounded-xl flex items-center justify-center mb-4 mx-auto lg:mx-0">
                <Smartphone className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Flexible & Scalable</h4>
              <p className="text-gray-600">
                Programs that adapt to your organization's size and specific needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
