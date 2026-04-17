import { Activity, Users, Target, Smartphone, ArrowRight, Heart, ShieldCheck, BarChart } from 'lucide-react';

const solutions = [
  {
    icon: Heart,
    title: 'Health Risk Assessment',
    description: 'Comprehensive health screenings and risk stratification to identify potential health issues before they become problems.',
    color: 'bg-red-50 text-red-500',
    features: ['Risk stratification', 'Health scoring', 'Preventive insights']
  },
  {
    icon: Users,
    title: 'Personal Health Coaching',
    description: 'One-on-one coaching with certified health professionals to guide employees on their wellness journey.',
    color: 'bg-teal-50 text-teal-500',
    features: ['Personalized plans', 'Regular check-ins', 'Goal tracking']
  },
  {
    icon: Activity,
    title: 'Biometric Screenings',
    description: 'On-site health screenings including blood pressure, cholesterol, glucose, and BMI measurements.',
    color: 'bg-blue-50 text-blue-500',
    features: ['On-site services', 'Immediate results', 'Group reporting']
  },
  {
    icon: Target,
    title: 'Targeted Communications',
    description: 'Personalized messaging and interventions based on individual health risks and goals.',
    color: 'bg-emerald-50 text-emerald-500',
    features: ['Custom messaging', 'Risk-based content', 'Automated outreach']
  }
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-teal-500 font-semibold text-sm uppercase tracking-wider">Our Solutions</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">
            Why Choose Wellness Healthcare For Your Workplace?
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            We strategize with your team to design a program that meets your organizational goals 
            and delivers measurable health outcomes.
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
