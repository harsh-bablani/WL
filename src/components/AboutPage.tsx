import { ShieldCheck, Award, Users, Clock, ArrowRight, Heart, Target, Lightbulb, Phone, MessageCircle, MapPin } from 'lucide-react';
import { useState } from 'react';

type Page = 'home' | 'about' | 'contact' | 'packages';

interface AboutPageProps {
  onNavigate?: (page: Page) => void;
}

export default function AboutPage({ onNavigate }: AboutPageProps) {
  const [activeTab, setActiveTab] = useState('mission');

  const teamMembers = [
    {
      name: 'Dr. Rajesh Sharma',
      role: 'Medical Director',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
      description: '15+ years of experience in clinical pathology'
    },
    {
      name: 'Dr. Priya Verma',
      role: 'Lab Director',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
      description: 'Expert in molecular diagnostics and genetics'
    },
    {
      name: 'Dr. Amit Kumar',
      role: 'Head of Quality',
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
      description: 'NABL certified quality management specialist'
    },
    {
      name: 'Dr. Sunita Devi',
      role: 'Senior Pathologist',
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
      description: 'Specialist in hematology and immunology'
    }
  ];

  const whyChooseUs = [
    {
      icon: ShieldCheck,
      title: 'NABL Accredited',
      description: 'All our labs are NABL accredited ensuring highest quality standards and accuracy in every test.'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Highly qualified pathologists and technicians with decades of collective experience.'
    },
    {
      icon: Clock,
      title: 'Quick Results',
      description: 'Get your test reports within 6-24 hours with our streamlined processes and advanced technology.'
    },
    {
      icon: Heart,
      title: 'Patient-Centric',
      description: 'We prioritize your comfort and convenience with home collection and personalized care.'
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
              About Wellness Healthcare
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Leading the way in diagnostic excellence with cutting-edge technology, 
              compassionate care, and unwavering commitment to your health.
            </p>
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Pioneering Healthcare Excellence in Jaipur Since 2010
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Wellness Healthcare has been at the forefront of diagnostic services in Jaipur, 
                serving over 50,000 patients with precision and care. Our state-of-the-art 
                laboratories are equipped with the latest technology to ensure accurate and 
                timely results.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                We believe in making quality healthcare accessible to everyone. With our NABL 
                accredited lab at 51/5 Shipra Path, Mansarovar, we bring world-class diagnostic 
                services closer to your home across Jaipur.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => onNavigate && onNavigate('contact')}
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  <Phone className="w-4 h-4" />
                  Get in Touch
                </button>
                <button
                  onClick={() => onNavigate && onNavigate('packages')}
                  className="flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-700 font-semibold px-6 py-3 rounded-xl transition-all duration-200 border border-gray-300 hover:border-gray-400"
                >
                  View Packages
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                alt="Modern laboratory"
                className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Purpose</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Driving healthcare innovation through excellence, compassion, and commitment
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="w-16 h-16 bg-teal-50 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To provide accurate, affordable, and accessible diagnostic services that 
                empower individuals to take control of their health through early detection 
                and preventive care.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="w-16 h-16 bg-cyan-50 rounded-2xl flex items-center justify-center mb-6">
                <Lightbulb className="w-8 h-8 text-cyan-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the most trusted diagnostic partner, transforming healthcare delivery 
                through innovation, quality, and patient-centric services across the nation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Wellness Healthcare</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experience the difference with our commitment to excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="group bg-gray-50 rounded-2xl p-6 hover:bg-teal-50 transition-all duration-300 border border-gray-100 hover:border-teal-200"
              >
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 group-hover:bg-teal-100 transition-colors">
                  <item.icon className="w-6 h-6 text-teal-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Expert Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Led by renowned healthcare professionals dedicated to your well-being
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-teal-600 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-sm font-semibold text-teal-600 mb-2">{member.role}</p>
                  <p className="text-sm text-gray-600">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-gradient-to-r from-teal-500 to-cyan-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Experience Excellence in Healthcare?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Join thousands of satisfied patients who trust us with their health
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate && onNavigate('contact')}
              className="flex items-center justify-center gap-2 bg-white text-teal-600 font-semibold px-8 py-4 rounded-xl hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <Phone className="w-4 h-4" />
              Book Your Test Today
            </button>
            <a
              href="https://wa.me/919829078973"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
