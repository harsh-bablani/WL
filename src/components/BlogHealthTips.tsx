import { Calendar, Clock, User, ArrowRight, Heart, Brain, Activity, Shield } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'Understanding Your Blood Test Results',
    excerpt: 'Learn how to read and understand your complete blood count (CBC) test results and what they mean for your health.',
    category: 'Health Education',
    author: 'Dr. Anjali Sharma',
    date: '2024-01-15',
    readTime: '5 min',
    image: '🩸',
    featured: true
  },
  {
    id: 2,
    title: '10 Essential Health Tests for Adults Over 30',
    excerpt: 'Discover the most important diagnostic tests everyone should get regularly after turning 30 for preventive healthcare.',
    category: 'Preventive Care',
    author: 'Dr. Rajesh Kumar',
    date: '2024-01-12',
    readTime: '7 min',
    image: '🔬'
  },
  {
    id: 3,
    title: 'Diabetes Management: Understanding HbA1c',
    excerpt: 'Everything you need to know about HbA1c test and how it helps in managing diabetes effectively.',
    category: 'Diabetes',
    author: 'Dr. Priya Verma',
    date: '2024-01-10',
    readTime: '6 min',
    image: '🩺'
  },
  {
    id: 4,
    title: 'Heart Health: Importance of Lipid Profile',
    excerpt: 'How regular lipid profile tests can help monitor your cardiovascular health and prevent heart diseases.',
    category: 'Cardiac Health',
    author: 'Dr. Vikram Singh',
    date: '2024-01-08',
    readTime: '8 min',
    image: '❤️'
  }
];

const healthTips = [
  {
    icon: Heart,
    title: 'Stay Hydrated',
    description: 'Drink at least 8 glasses of water daily for optimal body function and test accuracy.',
    color: 'from-red-500 to-red-600'
  },
  {
    icon: Brain,
    title: 'Fast Before Tests',
    description: 'Follow fasting guidelines (8-12 hours) for accurate blood sugar and lipid tests.',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: Activity,
    title: 'Regular Exercise',
    description: '30 minutes of daily exercise improves overall health and test results.',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: Shield,
    title: 'Preventive Care',
    description: 'Get annual health checkups to detect issues early and maintain good health.',
    color: 'from-blue-500 to-blue-600'
  }
];

export default function BlogHealthTips() {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Heart className="w-4 h-4" />
            Health Tips & Blog
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Expert Health Advice & Tips
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay informed with the latest health insights from our medical experts
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Blog Posts */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Latest Blog Posts</h3>
              
              {/* Featured Post */}
              {blogPosts.filter(post => post.featured).map(post => (
                <div key={post.id} className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-2xl p-6 mb-6 border border-teal-200">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl mb-2">{post.image}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="inline-flex items-center gap-1 px-2 py-1 bg-teal-100 text-teal-700 text-xs font-semibold rounded-full">
                          Featured
                        </span>
                        <span className="text-xs text-gray-600">{post.category}</span>
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2 hover:text-teal-600 transition-colors cursor-pointer">
                        {post.title}
                      </h4>
                      <p className="text-gray-600 mb-4">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <div className="flex items-center gap-1">
                            <User className="w-4 h-4" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{post.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>{post.readTime} read</span>
                          </div>
                        </div>
                        <button className="flex items-center gap-2 text-teal-600 hover:text-teal-700 font-medium text-sm">
                          Read More
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Regular Posts */}
              <div className="space-y-6">
                {blogPosts.filter(post => !post.featured).map(post => (
                  <div key={post.id} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-teal-300">
                    <div className="flex items-start gap-4">
                      <div className="text-3xl mb-2">{post.image}</div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs text-gray-600">{post.category}</span>
                        </div>
                        <h4 className="text-lg font-bold text-gray-900 mb-2 hover:text-teal-600 transition-colors cursor-pointer">
                          {post.title}
                        </h4>
                        <p className="text-gray-600 text-sm mb-3">{post.excerpt}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3 text-xs text-gray-600">
                            <div className="flex items-center gap-1">
                              <User className="w-3 h-3" />
                              <span>{post.author}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              <span>{post.date}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              <span>{post.readTime}</span>
                            </div>
                          </div>
                          <button className="flex items-center gap-2 text-teal-600 hover:text-teal-700 font-medium text-sm">
                            Read More
                            <ArrowRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* View All Button */}
            <div className="text-center">
              <button className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl">
                <span>View All Articles</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Health Tips */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Health Tips</h3>
            <div className="space-y-4">
              {healthTips.map((tip, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-teal-300 cursor-pointer group"
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${tip.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <tip.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">
                        {tip.title}
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {tip.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Newsletter Signup */}
            <div className="mt-8 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-2xl p-6 border border-teal-200">
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                Get Health Tips in Your Inbox
              </h4>
              <p className="text-gray-600 text-sm mb-4">
                Subscribe to our newsletter for weekly health tips and medical insights
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all duration-200"
                />
                <button className="w-full bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-semibold py-2 rounded-lg transition-all duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
