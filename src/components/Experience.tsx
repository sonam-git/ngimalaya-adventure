import React from 'react'

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16  mt-4">
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6 transition-colors duration-300">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
            Professional experience in web development and creating impactful digital solutions.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"></div>

            {/* Experience Items */}
            <div className="space-y-12">
              {/* Web Developer - Himalayan Sherpa Club */}
              <div className="relative flex items-start">
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-green-500 to-emerald-600 dark:from-green-400 dark:to-emerald-400 rounded-full border-4 border-white dark:border-gray-800 shadow-lg z-10"></div>
                
                {/* Content */}
                <div className="ml-16 bg-white dark:bg-gray-700 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-600">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                        Web Developer
                      </h3>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-4">
                        <p className="text-lg font-semibold text-green-600 dark:text-green-400">
                          Himalayan Sherpa Club
                        </p>
                        <span className="hidden sm:block text-gray-400">•</span>
                        <p className="text-gray-600 dark:text-gray-300">
                          Sonoma, CA
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 px-4 py-2 rounded-full shadow-md border border-green-100 dark:border-green-800">
                      <svg className="w-5 h-5 text-green-600 dark:text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a1 1 0 011-1h6a1 1 0 011 1v4m-6 0h6m-6 0a1 1 0 00-1 1v10a1 1 0 001 1h6a1 1 0 001-1V8a1 1 0 00-1-1" />
                      </svg>
                      <span className="text-sm font-medium text-green-700 dark:text-green-300">
                        Mar 2025 – May 2025
                      </span>
                    </div>
                  </div>
                  
                  {/* Achievements */}
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2.5 mr-4"></div>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        Created a responsive nonprofit website with WordPress, driving a <span className="font-semibold text-green-600 dark:text-green-400">50% increase in traffic</span> and <span className="font-semibold text-green-600 dark:text-green-400">35% growth in event participation</span>.
                      </p>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2.5 mr-4"></div>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        Implemented analytics tracking and social media integration, increasing user engagement by <span className="font-semibold text-green-600 dark:text-green-400">15% month-over-month</span>.
                      </p>
                    </div>
                  </div>

                  {/* Technologies Used */}
                  <div className="mt-6">
                    <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-3 uppercase tracking-wider">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {['WordPress', 'PHP', 'Responsive Design', 'Analytics', 'Social Media Integration'].map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs rounded-full font-medium border border-green-100 dark:border-green-800"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Impact Metrics */}
                  <div className="mt-6 grid grid-cols-2 gap-3">
                    <div className="text-center bg-green-50 dark:bg-green-900/20 rounded-lg p-3 border border-green-100 dark:border-green-800">
                      <div className="text-xl font-bold text-green-600 dark:text-green-400">50%</div>
                      <div className="text-xs text-green-700 dark:text-green-300">Traffic Increase</div>
                    </div>
                    <div className="text-center bg-green-50 dark:bg-green-900/20 rounded-lg p-3 border border-green-100 dark:border-green-800">
                      <div className="text-xl font-bold text-green-600 dark:text-green-400">35%</div>
                      <div className="text-xs text-green-700 dark:text-green-300">Event Growth</div>
                    </div>
                    <div className="text-center bg-green-50 dark:bg-green-900/20 rounded-lg p-3 border border-green-100 dark:border-green-800">
                      <div className="text-xl font-bold text-green-600 dark:text-green-400">15%</div>
                      <div className="text-xs text-green-700 dark:text-green-300">Engagement</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Web Developer Intern - Burbank Housing */}
              <div className="relative flex items-start">
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 rounded-full border-4 border-white dark:border-gray-800 shadow-lg z-10"></div>
                
                {/* Content */}
                <div className="ml-16 bg-white dark:bg-gray-700 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-600">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                        Web Developer Intern
                      </h3>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-4">
                        <p className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                          Burbank Housing
                        </p>
                        <span className="hidden sm:block text-gray-400">•</span>
                        <p className="text-gray-600 dark:text-gray-300">
                          Santa Rosa, CA
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 px-4 py-2 rounded-full shadow-md border border-blue-100 dark:border-blue-800">
                      <svg className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a1 1 0 011-1h6a1 1 0 011 1v4m-6 0h6m-6 0a1 1 0 00-1 1v10a1 1 0 001 1h6a1 1 0 001-1V8a1 1 0 00-1-1" />
                      </svg>
                      <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                        Jan 2022 – Jul 2022
                      </span>
                    </div>
                  </div>
                  
                  {/* Achievements */}
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2.5 mr-4"></div>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        Revamped Burbank Housing's website using WordPress CMS and PHP in an <span className="font-semibold text-blue-600 dark:text-blue-400">Agile Scrum environment</span>.
                      </p>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2.5 mr-4"></div>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        Reduced average page load time by <span className="font-semibold text-blue-600 dark:text-blue-400">2.3 seconds</span> and improved Lighthouse accessibility score from <span className="font-semibold text-blue-600 dark:text-blue-400">68 to 89</span>.
                      </p>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2.5 mr-4"></div>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        Managed cross-departmental feedback and delivered project <span className="font-semibold text-blue-600 dark:text-blue-400">2 weeks ahead of schedule</span>, lowering support tickets by <span className="font-semibold text-blue-600 dark:text-blue-400">25%</span>.
                      </p>
                    </div>
                  </div>

                  {/* Technologies Used */}
                  <div className="mt-6">
                    <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-3 uppercase tracking-wider">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {['WordPress', 'PHP', 'CMS', 'Agile Scrum', 'Performance Optimization', 'Accessibility'].map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-full font-medium border border-blue-100 dark:border-blue-800"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Impact Metrics */}
                  <div className="mt-6 grid grid-cols-2 gap-3">
                    <div className="text-center bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3 border border-blue-100 dark:border-blue-800">
                      <div className="text-lg font-bold text-blue-600 dark:text-blue-400">2.3s</div>
                      <div className="text-xs text-blue-700 dark:text-blue-300">Load Time ↓</div>
                    </div>
                    <div className="text-center bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3 border border-blue-100 dark:border-blue-800">
                      <div className="text-lg font-bold text-blue-600 dark:text-blue-400">89</div>
                      <div className="text-xs text-blue-700 dark:text-blue-300">Accessibility</div>
                    </div>
                    <div className="text-center bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3 border border-blue-100 dark:border-blue-800">
                      <div className="text-lg font-bold text-blue-600 dark:text-blue-400">2wk</div>
                      <div className="text-xs text-blue-700 dark:text-blue-300">Ahead</div>
                    </div>
                    <div className="text-center bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3 border border-blue-100 dark:border-blue-800">
                      <div className="text-lg font-bold text-blue-600 dark:text-blue-400">25%</div>
                      <div className="text-xs text-blue-700 dark:text-blue-300">Tickets ↓</div>
                    </div>
                  </div>

                  {/* Internship Badge */}
                  <div className="mt-6 flex items-center">
                    <div className="bg-gradient-to-r from-orange-400 to-yellow-500 p-2 rounded-full mr-3">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5z M2 17l10 5 10-5 M2 12l10 5 10-5"/>
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Internship Program • Performance Excellence
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Experience Summary Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-600 transition-colors duration-300">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">2+</div>
            <div className="text-gray-700 dark:text-gray-300 text-sm">Years Experience</div>
          </div>
          <div className="text-center bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-600 transition-colors duration-300">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">50%</div>
            <div className="text-gray-700 dark:text-gray-300 text-sm">Max Traffic Growth</div>
          </div>
          <div className="text-center bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-600 transition-colors duration-300">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">2.3s</div>
            <div className="text-gray-700 dark:text-gray-300 text-sm">Load Time Reduced</div>
          </div>
          <div className="text-center bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-600 transition-colors duration-300">
            <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">25%</div>
            <div className="text-gray-700 dark:text-gray-300 text-sm">Support Tickets ↓</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
