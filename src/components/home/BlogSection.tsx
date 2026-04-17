import { Calendar, Clock, ArrowRight } from 'lucide-react';

const posts = [
  {
    image: 'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Preventive Health',
    title: 'Why Annual Full Body Checkups Are Essential for Every Adult',
    excerpt: 'Discover how routine health screenings can detect silent conditions early and help you maintain peak wellness throughout life.',
    date: 'March 28, 2026',
    readTime: '5 min read',
  },
  {
    image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Nutrition & Wellness',
    title: 'Understanding Vitamin D Deficiency: Symptoms, Risks & Solutions',
    excerpt: 'Over 70% of Indians are Vitamin D deficient. Learn what this means for your health and how a simple blood test can reveal the truth.',
    date: 'April 5, 2026',
    readTime: '4 min read',
  },
  {
    image: 'https://images.pexels.com/photos/8376268/pexels-photo-8376268.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Diabetes Care',
    title: 'HbA1c vs Fasting Blood Sugar: Which Test Matters More?',
    excerpt: 'Both tests measure blood glucose, but they tell different stories. We break down what each test reveals and when to use them.',
    date: 'April 11, 2026',
    readTime: '6 min read',
  },
];

export default function BlogSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-teal-500 font-semibold text-sm uppercase tracking-wider">Health Insights</span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">Latest from Our Blog</h2>
          </div>
          <button className="text-teal-600 font-semibold text-sm hover:underline underline-offset-4">
            View More Articles →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {posts.map((post) => (
            <article
              key={post.title}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 cursor-pointer"
            >
              <div className="relative overflow-hidden h-52">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 bg-teal-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {post.category}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readTime}
                  </span>
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-1 text-teal-500 text-sm font-semibold">
                  <span>Read Article</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
