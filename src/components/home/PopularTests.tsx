import { Star, ShoppingCart, Clock } from 'lucide-react';
import { useState } from 'react';

const tests = [
  {
    name: 'Complete Blood Count (CBC)',
    category: 'Haematology',
    price: 349,
    originalPrice: 599,
    rating: 4.8,
    reviews: 2341,
    reportTime: '6 hrs',
    params: '24 Parameters',
  },
  {
    name: 'Thyroid Profile (T3, T4, TSH)',
    category: 'Endocrinology',
    price: 499,
    originalPrice: 899,
    rating: 4.9,
    reviews: 1872,
    reportTime: '12 hrs',
    params: '3 Parameters',
  },
  {
    name: 'Diabetes HbA1c Panel',
    category: 'Diabetology',
    price: 649,
    originalPrice: 999,
    rating: 4.7,
    reviews: 3105,
    reportTime: '6 hrs',
    params: '5 Parameters',
  },
  {
    name: 'Lipid Profile',
    category: 'Cardiology',
    price: 429,
    originalPrice: 799,
    rating: 4.8,
    reviews: 1567,
    reportTime: '6 hrs',
    params: '8 Parameters',
  },
  {
    name: 'Liver Function Test (LFT)',
    category: 'Hepatology',
    price: 549,
    originalPrice: 899,
    rating: 4.6,
    reviews: 988,
    reportTime: '12 hrs',
    params: '12 Parameters',
  },
  {
    name: 'Vitamin D & B12 Panel',
    category: 'Nutrition',
    price: 799,
    originalPrice: 1299,
    rating: 4.9,
    reviews: 2203,
    reportTime: '24 hrs',
    params: '2 Parameters',
  },
];

export default function PopularTests() {
  const [addedItems, setAddedItems] = useState<string[]>([]);

  const handleAdd = (name: string) => {
    setAddedItems((prev) =>
      prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name]
    );
  };

  const discount = (orig: number, price: number) =>
    Math.round(((orig - price) / orig) * 100);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-teal-500 font-semibold text-sm uppercase tracking-wider">Most Booked</span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">Popular Diagnostic Tests</h2>
          </div>
          <button className="text-teal-600 font-semibold text-sm hover:underline underline-offset-4">
            View All Tests →
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tests.map((test) => (
            <div
              key={test.name}
              className="group bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="text-xs font-medium text-teal-600 bg-teal-50 px-2.5 py-1 rounded-full">
                    {test.category}
                  </span>
                </div>
                <div className="flex items-center gap-1 bg-amber-50 text-amber-600 text-xs font-semibold px-2.5 py-1 rounded-full">
                  <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                  {test.rating}
                </div>
              </div>

              <h3 className="text-base font-bold text-gray-900 mb-1 group-hover:text-teal-600 transition-colors">
                {test.name}
              </h3>
              <p className="text-xs text-gray-400 mb-1">{test.params}</p>

              <div className="flex items-center gap-2 text-xs text-gray-400 mb-4">
                <Clock className="w-3.5 h-3.5 text-teal-400" />
                <span>Reports in {test.reportTime}</span>
                <span className="text-gray-200">|</span>
                <span>{test.reviews.toLocaleString()} reviews</span>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-gray-900">₹{test.price}</span>
                    <span className="text-sm text-gray-400 line-through">₹{test.originalPrice}</span>
                  </div>
                  <span className="text-xs text-green-600 font-semibold">
                    {discount(test.originalPrice, test.price)}% off
                  </span>
                </div>
                <button
                  onClick={() => handleAdd(test.name)}
                  className={`flex items-center gap-2 text-sm font-semibold px-4 py-2.5 rounded-xl transition-all duration-200 ${
                    addedItems.includes(test.name)
                      ? 'bg-teal-500 text-white shadow-md shadow-teal-200'
                      : 'bg-teal-50 text-teal-600 hover:bg-teal-500 hover:text-white'
                  }`}
                >
                  <ShoppingCart className="w-4 h-4" />
                  {addedItems.includes(test.name) ? 'Added' : 'Add'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
