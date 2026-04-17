import { TrendingDown, Users, Target, Award } from 'lucide-react';

export default function DataOutcomes() {
  const outcomes = [
    {
      icon: TrendingDown,
      title: 'Fewer Member Claims',
      description: 'A healthier workplace starts with healthier employees',
      metric: '4.4%',
      detail: 'Reduction in medical claims after implementing our wellness program'
    },
    {
      icon: Users,
      title: 'Improved Productivity',
      description: 'As corporate wellness increases, so does morale',
      metric: '85%',
      detail: 'Of employees report increased productivity and engagement'
    },
    {
      icon: Target,
      title: 'Health Risk Reduction',
      description: 'Early detection and preventive care make the difference',
      metric: '78%',
      detail: 'Of high-risk individuals decreased their risk level'
    },
    {
      icon: Award,
      title: 'Program Success',
      description: 'Measurable results that matter to your bottom line',
      metric: '92%',
      detail: 'Of companies report positive ROI within first year'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Data Tells a Story
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our wellness programs deliver measurable outcomes that impact your organization's 
            health, productivity, and bottom line.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {outcomes.map((outcome, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-teal-200 group"
            >
              <div className="w-16 h-16 bg-teal-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-teal-100 transition-colors">
                <outcome.icon className="w-8 h-8 text-teal-600" />
              </div>
              
              <div className="text-4xl font-bold text-teal-600 mb-2">{outcome.metric}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{outcome.title}</h3>
              <p className="text-gray-600 mb-4">{outcome.description}</p>
              <p className="text-sm text-gray-500 leading-relaxed">{outcome.detail}</p>
            </div>
          ))}
        </div>

        {/* Data-Driven Approach */}
        <div className="bg-white rounded-2xl p-12 shadow-lg border border-gray-100">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Turning Data into Action
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                With our comprehensive health assessment platform at the core, Wellness Healthcare 
                helps HR teams and brokers transform metrics into measurable outcomes. From engagement 
                and health insights to ROI reporting, our Account Managers provide the tools and 
                guidance you need to plan smarter, show results, and drive meaningful change.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-teal-500 rounded-full" />
                  <span className="text-gray-700">Risk stratification reporting</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-teal-500 rounded-full" />
                  <span className="text-gray-700">Engagement tracking & analytics</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-teal-500 rounded-full" />
                  <span className="text-gray-700">ROI calculation & reporting</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-teal-500 rounded-full" />
                  <span className="text-gray-700">Health outcome measurements</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-8">
              <h4 className="text-xl font-bold text-gray-900 mb-6">Know Your Numbers</h4>
              <div className="space-y-4">
                <div className="bg-white rounded-xl p-4 border border-teal-100">
                  <div className="text-2xl font-bold text-teal-600 mb-1">10,000+</div>
                  <p className="text-sm text-gray-600">Health assessments completed monthly</p>
                </div>
                <div className="bg-white rounded-xl p-4 border border-teal-100">
                  <div className="text-2xl font-bold text-teal-600 mb-1">95%</div>
                  <p className="text-sm text-gray-600">Accuracy in risk prediction</p>
                </div>
                <div className="bg-white rounded-xl p-4 border border-teal-100">
                  <div className="text-2xl font-bold text-teal-600 mb-1">24/7</div>
                  <p className="text-sm text-gray-600">Health data access and support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
