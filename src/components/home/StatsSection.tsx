import { TrendingUp, Users, Award, HeartPulse } from 'lucide-react';

const stats = [
  {
    icon: TrendingUp,
    value: '85%',
    label: 'Improved Health Indicators',
    desc: 'Patients reported measurable improvements after regular checkups',
    color: 'bg-teal-50 text-teal-600',
  },
  {
    icon: Users,
    value: '78%',
    label: 'Wellness Engagement',
    desc: 'Higher engagement in preventive health programs year over year',
    color: 'bg-cyan-50 text-cyan-600',
  },
  {
    icon: Award,
    value: '4.4%',
    label: 'Claim Reduction',
    desc: 'Reduction in insurance claims through early health detection',
    color: 'bg-emerald-50 text-emerald-600',
  },
  {
    icon: HeartPulse,
    value: '50K+',
    label: 'Patients Served',
    desc: 'Trusted by families across Maharashtra for accurate diagnostics',
    color: 'bg-green-50 text-green-600',
  },
];

export default function StatsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-teal-500 font-semibold text-sm uppercase tracking-wider">Our Impact</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">
            Numbers That Define Our Commitment
          </h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            Real outcomes backed by data — we measure our success by the health improvements of those we serve.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map(({ icon: Icon, value, label, desc, color }) => (
            <div
              key={label}
              className="group bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <Icon className="w-6 h-6" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-1">{value}</div>
              <div className="text-sm font-semibold text-gray-800 mb-2">{label}</div>
              <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
