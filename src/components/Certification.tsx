import React from 'react';

const Certification: React.FC = () => {
  const certifications = [
    {
      title: 'Web and Mobile Front-End Development Certificate',
      institution: 'Santa Rosa Junior College',
      icon: '🎓',
      color: 'from-blue-400 to-blue-600',
      bgColor: 'from-blue-50 to-blue-100',
      darkBgColor: 'from-blue-900/30 to-blue-800/30',
      description: 'Comprehensive certification covering modern web and mobile front-end development technologies and best practices.'
    },
    {
      title: 'Web Team Certificate of Recognition',
      institution: 'Santa Rosa Junior College',
      icon: '🏆',
      color: 'from-purple-400 to-purple-600',
      bgColor: 'from-purple-50 to-purple-100',
      darkBgColor: 'from-purple-900/30 to-purple-800/30',
      description: 'Recognition for outstanding contribution and performance as part of the web development team.'
    }
  ];

  return (
    <section id="certifications" className="py-24 bg-gradient-to-br from-slate-50 to-blue-50 dark:bg-gradient-to-br dark:from-gray-900 dark:to-black transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16  mt-4">
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6 transition-colors duration-300">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
            Professional certifications and recognitions that validate my expertise in web development.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {certifications.map((certification, index) => (
            <div
              key={certification.title}
              className={`group relative bg-gradient-to-br ${certification.bgColor} dark:bg-gradient-to-br dark:${certification.darkBgColor} rounded-2xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-gray-200 dark:border-gray-700 animate-fade-in-up`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Gradient Border Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${certification.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              {/* Certification Header */}
              <div className="relative mb-6">
                <div className="flex items-start mb-4">
                  <div className={`w-16 h-16 bg-gradient-to-br ${certification.color} rounded-xl flex items-center justify-center text-white text-2xl shadow-lg mr-6 group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                    {certification.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 transition-colors duration-300 leading-tight">
                      {certification.title}
                    </h3>
                    <p className="text-lg text-slate-700 dark:text-gray-300 font-medium transition-colors duration-300">
                      {certification.institution}
                    </p>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="relative">
                <p className="text-slate-600 dark:text-gray-400 leading-relaxed mb-6 transition-colors duration-300">
                  {certification.description}
                </p>
              </div>

              {/* Certificate Badge */}
              <div className="relative flex items-center justify-between pt-6 border-t border-slate-200 dark:border-gray-600">
                <div className="flex items-center">
                  <div className={`w-3 h-3 bg-gradient-to-r ${certification.color} rounded-full mr-3 animate-pulse`}></div>
                  <span className="text-sm text-slate-500 dark:text-gray-400 font-medium">
                    Certified
                  </span>
                </div>
                <div className="text-sm text-slate-500 dark:text-gray-400">
                  ✓ Verified
                </div>
              </div>

              {/* Floating Animation Elements */}
              <div className="absolute top-4 right-4 w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 animate-ping group-hover:opacity-40"></div>
              <div className="absolute bottom-6 left-6 w-2 h-2 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full opacity-30 animate-bounce animation-delay-1000 group-hover:opacity-60"></div>
            </div>
          ))}
        </div>

        {/* Certifications Summary */}
        <div className="mt-16 bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 shadow-lg transition-colors duration-300">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Professional Development
            </h3>
            <p className="text-slate-600 dark:text-gray-300 max-w-2xl mx-auto">
              Committed to continuous learning and professional growth in web development and technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 rounded-xl p-6 shadow-md border border-blue-100 dark:border-blue-800 transition-colors duration-300">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">2</div>
              <div className="text-sm text-slate-700 dark:text-gray-300">Professional Certifications</div>
            </div>
            <div className="text-center bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/30 rounded-xl p-6 shadow-md border border-purple-100 dark:border-purple-800 transition-colors duration-300">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">1</div>
              <div className="text-sm text-slate-700 dark:text-gray-300">Recognition Award</div>
            </div>
            <div className="text-center bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-800/30 rounded-xl p-6 shadow-md border border-green-100 dark:border-green-800 transition-colors duration-300">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">100%</div>
              <div className="text-sm text-slate-700 dark:text-gray-300">Commitment to Learning</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-500 dark:to-purple-500 rounded-2xl p-8 text-white shadow-2xl">
            <h3 className="text-2xl font-bold mb-4">Let's Build Something Great Together</h3>
            <p className="text-blue-100 dark:text-purple-100 mb-6 max-w-2xl mx-auto">
              With certified expertise and a passion for excellence, I'm ready to bring your vision to life.
            </p>
            <button className="bg-white text-blue-500 font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition-all duration-300 hover:shadow-lg hover:scale-105">
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certification;
