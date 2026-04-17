export default function TrustedCompanies() {
  const companies = [
    { name: 'Apollo Hospitals', logo: '🏥' },
    { name: 'Fortis Healthcare', logo: '⚕️' },
    { name: 'Max Healthcare', logo: '🏨' },
    { name: 'Medanta', logo: '🩺' },
    { name: 'Columbia Asia', logo: '🏥' },
    { name: 'Manipal Hospitals', logo: '🏛️' },
    { name: 'Narayana Health', logo: '💊' },
    { name: 'Wockhardt', logo: '🧪' },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-teal-500 font-semibold text-sm uppercase tracking-wider">Partners</span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-gray-900">
            Trusted by Leading Healthcare Organizations
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            We proudly partner with top hospitals and healthcare providers to deliver 
            comprehensive diagnostic services
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex animate-scroll">
            {/* First set of logos */}
            <div className="flex space-x-12 px-4">
              {companies.map((company, index) => (
                <div
                  key={`first-${index}`}
                  className="flex flex-col items-center justify-center min-w-[120px] group"
                >
                  <div className="w-16 h-16 bg-gray-50 rounded-xl flex items-center justify-center mb-3 group-hover:bg-teal-50 transition-colors duration-300 border border-gray-100 group-hover:border-teal-200">
                    <span className="text-2xl">{company.logo}</span>
                  </div>
                  <span className="text-xs font-medium text-gray-600 group-hover:text-teal-600 transition-colors">
                    {company.name}
                  </span>
                </div>
              ))}
            </div>
            
            {/* Duplicate set for seamless scrolling */}
            <div className="flex space-x-12 px-4">
              {companies.map((company, index) => (
                <div
                  key={`second-${index}`}
                  className="flex flex-col items-center justify-center min-w-[120px] group"
                >
                  <div className="w-16 h-16 bg-gray-50 rounded-xl flex items-center justify-center mb-3 group-hover:bg-teal-50 transition-colors duration-300 border border-gray-100 group-hover:border-teal-200">
                    <span className="text-2xl">{company.logo}</span>
                  </div>
                  <span className="text-xs font-medium text-gray-600 group-hover:text-teal-600 transition-colors">
                    {company.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          
          .animate-scroll {
            animation: scroll 20s linear infinite;
          }
          
          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `
      }} />
    </section>
  );
}
