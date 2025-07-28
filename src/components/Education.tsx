import React from 'react'

const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16  mt-4">
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6 transition-colors duration-300">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
            My academic journey and continuous learning pursuits in technology and computer science.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"></div>

            {/* Education Items */}
            <div className="space-y-12">
              {/* Current - Santa Rosa Junior College */}
              <div className="relative flex items-start">
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 rounded-full border-4 border-white dark:border-gray-800 shadow-lg z-10"></div>
                
                {/* Content */}
                <div className="ml-16 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-blue-100 dark:border-blue-800">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                        Associate Degree in Computer Science
                      </h3>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-4">
                        <p className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                          Santa Rosa Junior College
                        </p>
                        <span className="hidden sm:block text-gray-400">•</span>
                        <p className="text-gray-600 dark:text-gray-300">
                          Santa Rosa, CA
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-800/50 dark:to-indigo-800/50 px-4 py-2 rounded-full shadow-md border border-blue-200 dark:border-blue-700">
                      <svg className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      </svg>
                      <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                      Aug 2021 – Present
                      </span>
                    </div>
                  </div>
                  
                  {/* Description */}
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2.5 mr-4"></div>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        Pursuing comprehensive studies in computer science with focus on software development, data structures, and web technologies.
                      </p>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2.5 mr-4"></div>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        Active participation in coding projects and collaborative development environments.
                      </p>
                    </div>
                  </div>

                  {/* Relevant Coursework */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-3 uppercase tracking-wider">Relevant Coursework:</h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        'Data Structures',
                        'Web Development',
                        'Database Design',
                        'Software Engineering',
                        'Computer Programming',
                        'System Analysis'
                      ].map((course, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-800/30 text-blue-700 dark:text-blue-300 text-xs rounded-full font-medium border border-blue-200 dark:border-blue-700"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Current Status Badge */}
                  <div className="flex items-center">
                    <div className="bg-gradient-to-r from-green-400 to-emerald-500 p-2 rounded-full mr-3">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-green-700 dark:text-green-300">
                      Currently Enrolled • In Progress
                    </span>
                  </div>
                </div>
              </div>

              {/* High School */}
              <div className="relative flex items-start">
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-600 dark:from-purple-400 dark:to-pink-400 rounded-full border-4 border-white dark:border-gray-800 shadow-lg z-10"></div>
                
                {/* Content */}
                <div className="ml-16 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-purple-100 dark:border-purple-800">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                        High School Diploma
                      </h3>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-4">
                        <p className="text-lg font-semibold text-purple-600 dark:text-purple-400">
                          Elsie Allen High School
                        </p>
                        <span className="hidden sm:block text-gray-400">•</span>
                        <p className="text-gray-600 dark:text-gray-300">
                          Santa Rosa, CA
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-800/50 dark:to-pink-800/50 px-4 py-2 rounded-full shadow-md border border-purple-200 dark:border-purple-700">
                      <svg className="w-5 h-5 text-purple-600 dark:text-purple-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                      <span className="text-sm font-medium text-purple-700 dark:text-purple-300">
                        Sep 2017 – Jun 2021
                      </span>
                    </div>
                  </div>
                  
                  {/* Description */}
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-2 h-2 bg-purple-500 rounded-full mt-2.5 mr-4"></div>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        Graduated with honors and strong foundation in mathematics and sciences.
                      </p>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-2 h-2 bg-purple-500 rounded-full mt-2.5 mr-4"></div>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        Participated in technology-focused extracurricular activities and academic clubs.
                      </p>
                    </div>
                  </div>

                  {/* Key Subjects */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-3 uppercase tracking-wider">Key Subjects:</h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        'Mathematics',
                        'Computer Science',
                        'Physics',
                        'Chemistry',
                        'English',
                        'Business'
                      ].map((subject, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-purple-100 dark:bg-purple-800/30 text-purple-700 dark:text-purple-300 text-xs rounded-full font-medium border border-purple-200 dark:border-purple-700"
                        >
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Graduation Badge */}
                  <div className="flex items-center">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-600 p-2 rounded-full mr-3">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-purple-700 dark:text-purple-300">
                      Graduated with Honors • Class of 2021
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Education Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6 shadow-lg border border-blue-100 dark:border-blue-800 transition-colors duration-300">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">3+</div>
            <div className="text-gray-700 dark:text-gray-300 text-sm">Years in College</div>
          </div>
          <div className="text-center bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-6 shadow-lg border border-purple-100 dark:border-purple-800 transition-colors duration-300">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">CS</div>
            <div className="text-gray-700 dark:text-gray-300 text-sm">Major Focus</div>
          </div>
          <div className="text-center bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6 shadow-lg border border-green-100 dark:border-green-800 transition-colors duration-300">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">2025</div>
            <div className="text-gray-700 dark:text-gray-300 text-sm">Expected Graduation</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
