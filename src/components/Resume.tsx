import React, { useState } from 'react'
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer'
import ResumePDF from './ResumePDF'

const Resume: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)
  return (
    <section id="resume" className="py-24 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16  mt-4">
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6 transition-colors duration-300">
            Resume
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
            Download my complete resume to learn more about my experience, skills, and achievements in web development.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Resume Preview Card */}
          <div className="bg-white dark:bg-gray-700 rounded-2xl shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-600 transition-colors duration-300">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 p-8 text-white">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="text-center md:text-left mb-6 md:mb-0">
                  <h3 className="text-3xl font-bold mb-2">Sonam J Sherpa</h3>
                  <p className="text-blue-100 text-lg">Full Stack Web Developer</p>
                  <p className="text-blue-200 text-sm mt-1">Crafting digital solutions with modern technologies</p>
                </div>
                <div className="flex-shrink-0">
                  <div className="w-32 h-40 bg-white/20 rounded-lg border-2 border-white/30 flex items-center justify-center backdrop-blur-sm">
                    <svg className="w-16 h-20 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Preview */}
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Left Column */}
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3 text-lg">Professional Summary</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      Passionate Full Stack Web Developer with 2+ years of experience in creating responsive, 
                      user-friendly websites and applications. Specialized in modern web technologies including 
                      React, TypeScript, and WordPress development.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3 text-lg">Core Skills</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600 dark:text-gray-300">React | Redux | TypeScript</span>
                        <span className="text-blue-600 dark:text-blue-400 font-medium">Advanced</span>
                      </div>
                        <div className="flex justify-between text-sm">
                        <span className="text-gray-600 dark:text-gray-300">HTML | CSS | JavaScript</span>
                        <span className="text-blue-600 dark:text-blue-400 font-medium">Advanced</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600 dark:text-gray-300">WordPress</span>
                        <span className="text-green-600 dark:text-green-400 font-medium">Expert</span>
                      </div>
                        <div className="flex justify-between text-sm">
                        <span className="text-gray-600 dark:text-gray-300">Python</span>
                        <span className="text-blue-600 dark:text-blue-400 font-medium">Advanced</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600 dark:text-gray-300">UI/UX Design</span>
                        <span className="text-purple-600 dark:text-purple-400 font-medium">Proficient</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3 text-lg">Contact Information</h4>
                    <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                      <div className="flex items-center">
                        <svg className="w-4 h-4 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        sherpa.sjs@gmail.com
                      </div>
                      <div className="flex items-center">
                        <svg className="w-4 h-4 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        Sonoma, CA
                      </div>
                      <div className="flex items-center">
                        <svg className="w-4 h-4 mr-3 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                        </svg>
                        linkedin.com/in/sonamjsherpa
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3 text-lg">Recent Experience</h4>
                    <div className="space-y-4">
                      <div className="border-l-3 border-green-500 pl-4">
                        <h5 className="font-medium text-gray-900 dark:text-white">Web Developer</h5>
                        <p className="text-green-600 dark:text-green-400 text-sm">Himalayan Sherpa Club</p>
                        <p className="text-gray-500 dark:text-gray-400 text-xs">Mar 2025 – May 2025</p>
                      </div>
                      <div className="border-l-3 border-blue-500 pl-4">
                        <h5 className="font-medium text-gray-900 dark:text-white">Web Developer Intern</h5>
                        <p className="text-blue-600 dark:text-blue-400 text-sm">Burbank Housing</p>
                        <p className="text-gray-500 dark:text-gray-400 text-xs">Jan 2022 – Jul 2022</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3 text-lg">Education</h4>
                    <div className="border-l-3 border-purple-500 pl-4 mb-2">
                      <h5 className="font-medium text-gray-900 dark:text-white">Associate Degree in Computer Science</h5>
                      <p className="text-purple-600 dark:text-purple-400 text-sm">Santa Rosa Junior College</p>
                      <p className="text-gray-500 dark:text-gray-400 text-xs"> 2020 – 2022</p>
                    </div>
                    <hr />
                    <div className="border-l-3 border-purple-500 pl-4">
                      <h5 className="font-medium text-gray-900 dark:text-white">Bootcamp Full Flex Web Developer</h5>
                      <p className="text-purple-600 dark:text-purple-400 text-sm">UC Berkeley Extension, Berkeley</p>
                      <p className="text-gray-500 dark:text-gray-400 text-xs">Jan 2023 – July 2023</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3 text-lg">Key Achievements</h4>
                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>Increased website traffic by 50% through responsive design improvements</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>Reduced page load times by 2.3 seconds using optimization techniques</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>Improved accessibility scores from 68 to 89 following best practices</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Download Section */}
            <div className="bg-gray-50 dark:bg-gray-800 p-8 border-t border-gray-100 dark:border-gray-600 transition-colors duration-300">
              <div className="text-center">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Ready to Learn More?
                </h4>
                <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                  Download my complete resume for detailed information about my projects, technical skills, 
                  certifications, and professional experience in web development.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <PDFDownloadLink
                    document={<ResumePDF />}
                    fileName="Sonam_J_Sherpa_Resume.pdf"
                    className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center"
                  >
                    {({ loading }) =>
                      loading ? (
                        <>
                          <svg className="w-5 h-5 mr-3 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                          </svg>
                          Generating PDF...
                        </>
                      ) : (
                        <>
                          <svg className="w-5 h-5 mr-3 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                          Download Resume (PDF)
                        </>
                      )
                    }
                  </PDFDownloadLink>
                  
                  <button
                    onClick={openModal}
                    className="group bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 font-semibold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center border border-gray-200 dark:border-gray-600"
                  >
                    <svg className="w-5 h-5 mr-3 group-hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    View Online
                  </button>
                </div>

                <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Updated July 2025
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    ATS-Friendly Format
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    Professional Format
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="text-center bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-600 transition-colors duration-300">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h5 className="font-semibold text-gray-900 dark:text-white mb-2">Verified Skills</h5>
              <p className="text-gray-600 dark:text-gray-300 text-sm">All technical skills verified through practical projects and professional experience.</p>
            </div>
            
            <div className="text-center bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-600 transition-colors duration-300">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h5 className="font-semibold text-gray-900 dark:text-white mb-2">Quick Response</h5>
              <p className="text-gray-600 dark:text-gray-300 text-sm">I typically respond to new opportunities within 24 hours.</p>
            </div>
            
            <div className="text-center bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-600 transition-colors duration-300">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                </svg>
              </div>
              <h5 className="font-semibold text-gray-900 dark:text-white mb-2">Portfolio Available</h5>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Explore my complete portfolio with live project demos and case studies.</p>
            </div>
          </div>
        </div>

        {/* PDF Viewer Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75">
            <div className="relative bg-white dark:bg-gray-800 rounded-lg shadow-2xl w-full max-w-5xl h-full max-h-[90vh] flex flex-col">
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-600">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Resume Preview
                </h3>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              {/* PDF Viewer Container */}
              <div className="flex-1 overflow-hidden">
                <PDFViewer 
                  width="100%" 
                  height="100%" 
                  className="border-none"
                  showToolbar={true}
                >
                  <ResumePDF />
                </PDFViewer>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Resume
