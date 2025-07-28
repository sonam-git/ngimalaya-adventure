import React from 'react'
import ProjectSection from './ProjectSection'
import TechnicalSkill from './TechnicalSkill'
import Contact from './Contact'
import Certification from './Certification'
import Footer from './Footer'
import About from './About'
import Experience from './Experience'
import Education from './Education'
import Resume from './Resume'
import heroImage from '../assets/images/hero.png'

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section with developer background */}
      <section id="home" className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          {/* Hero Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105"
            style={{
              backgroundImage: `url(${heroImage})`,
            }}
          ></div>
          
          {/* Layered Overlays for depth */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-800/70 to-slate-900/85 dark:from-black/85 dark:via-gray-900/75 dark:to-black/95"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
          
          {/* Animated background patterns */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/20 via-transparent to-purple-500/20 animate-pulse"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)] animate-pulse animation-delay-2000"></div>
          </div>
          
          {/* Developer-themed animated elements */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Floating Code Snippets */}
            <div className="absolute top-20 left-10 opacity-20 dark:opacity-30 hidden md:block">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-3 font-mono text-xs text-green-400 animate-float border border-green-400/20">
                <div>const developer = {'{'}</div>
                <div>&nbsp;&nbsp;name: "Sonam",</div>
                <div>&nbsp;&nbsp;skills: ["React", "Node.js"]</div>
                <div>{'};'}</div>
              </div>
            </div>
            
            <div className="absolute top-32 right-16 opacity-20 dark:opacity-30 animation-delay-2000 hidden lg:block">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-3 font-mono text-xs text-blue-400 animate-float border border-blue-400/20">
                <div>&lt;Component&gt;</div>
                <div>&nbsp;&nbsp;&lt;h1&gt;Hello World&lt;/h1&gt;</div>
                <div>&lt;/Component&gt;</div>
              </div>
            </div>
            
            <div className="absolute bottom-32 left-20 opacity-20 dark:opacity-30 animation-delay-4000 hidden md:block">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-3 font-mono text-xs text-purple-400 animate-float border border-purple-400/20">
                <div>function buildFuture() {'{'}</div>
                <div>&nbsp;&nbsp;return innovation;</div>
                <div>{'}'}</div>
              </div>
            </div>

            {/* Additional code snippets for larger screens */}
            <div className="absolute top-64 left-1/4 opacity-15 dark:opacity-25 animation-delay-1000 hidden xl:block">
              <div className="bg-gray-800/40 backdrop-blur-sm rounded-lg p-2 font-mono text-xs text-cyan-400 animate-float border border-cyan-400/20">
                <div>npm install creativity</div>
              </div>
            </div>

            <div className="absolute bottom-48 right-1/4 opacity-15 dark:opacity-25 animation-delay-3000 hidden xl:block">
              <div className="bg-gray-800/40 backdrop-blur-sm rounded-lg p-2 font-mono text-xs text-yellow-400 animate-float border border-yellow-400/20">
                <div>git commit -m "magic"</div>
              </div>
            </div>

            {/* Geometric Developer Elements */}
            <div className="absolute top-16 right-32 w-16 h-16 border-2 border-blue-400/30 rotate-45 animate-spin-slow hidden md:block"></div>
            <div className="absolute bottom-24 right-12 w-12 h-12 border-2 border-purple-400/30 rounded-full animate-pulse"></div>
            <div className="absolute top-40 left-1/3 w-8 h-8 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rotate-12 animate-bounce hidden lg:block"></div>
            <div className="absolute top-72 right-20 w-6 h-6 border border-indigo-400/40 rounded animate-spin-slow animation-delay-2000 hidden lg:block"></div>
            <div className="absolute bottom-40 left-1/2 w-4 h-4 bg-gradient-to-r from-pink-400/30 to-rose-500/30 rounded-full animate-pulse animation-delay-4000"></div>
            
            {/* Binary Pattern */}
            <div className="absolute inset-0 opacity-8 dark:opacity-15">
              <div className="absolute top-8 left-8 font-mono text-xs text-green-400 animate-pulse hidden md:block">
                01001000 01100101 01101100 01101100 01101111
              </div>
              <div className="absolute bottom-8 right-8 font-mono text-xs text-blue-400 animate-pulse animation-delay-2000 hidden md:block">
                01010111 01101111 01110010 01101100 01100100
              </div>
              <div className="absolute top-1/2 left-4 font-mono text-xs text-purple-400 animate-pulse animation-delay-4000 rotate-90 hidden lg:block">
                01000011 01001111 01000100 01000101
              </div>
            </div>

            {/* Enhanced Terminal Window */}
            <div className="absolute bottom-16 left-16 opacity-30 dark:opacity-40 hidden lg:block">
              <div className="bg-gray-900/70 backdrop-blur-sm rounded-lg border border-gray-700/50 w-72 shadow-2xl">
                <div className="bg-gray-800/70 px-4 py-2 rounded-t-lg flex items-center">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse animation-delay-2000"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse animation-delay-4000"></div>
                  </div>
                  <div className="ml-4 text-xs text-gray-400 font-mono">~/portfolio</div>
                </div>
                <div className="p-4 font-mono text-xs space-y-1">
                  <div className="text-green-400 animate-typing">$ npm run develop</div>
                  <div className="text-gray-400 animate-pulse animation-delay-2000">✓ Building amazing things...</div>
                  <div className="text-blue-400 animate-pulse animation-delay-4000">✓ Innovation loaded</div>
                  <div className="w-2 h-4 bg-green-400 animate-pulse animation-delay-4000 inline-block"></div>
                </div>
              </div>
            </div>

            {/* Particle-like dots */}
            <div className="absolute inset-0">
              <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-blue-400 rounded-full animate-pulse opacity-60"></div>
              <div className="absolute top-3/4 left-3/4 w-1 h-1 bg-purple-400 rounded-full animate-pulse animation-delay-2000 opacity-60"></div>
              <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-cyan-400 rounded-full animate-pulse animation-delay-4000 opacity-60"></div>
              <div className="absolute bottom-1/4 left-1/2 w-1 h-1 bg-pink-400 rounded-full animate-pulse animation-delay-1000 opacity-60"></div>
            </div>
          </div>
        </div>
        
        {/* Hero content */}
        <div className="relative text-center max-w-6xl mx-auto z-10 px-4">
          <div className="animate-fade-in-up">
            {/* Main heading with enhanced styling */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-white mb-6 leading-tight transition-colors duration-300">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 dark:from-blue-300 dark:via-purple-300 dark:to-indigo-300 bg-clip-text text-transparent animate-gradient">
                Sonam J Sherpa
              </span>
            </h1>
            
            {/* Subtitle with typewriter effect */}
                        <h3 className="text-lg sm:text-xl md:text-2xl text-blue-300 dark:text-blue-200 mb-6 font-semibold transition-colors duration-300">
                Full Stack Developer | Software Engineer
              </h3>
            
            {/* Professional Introduction */}
            <div className="mb-12 max-w-5xl mx-auto">
            

              <p className="text-base sm:text-lg md:text-xl text-gray-300 dark:text-gray-200 leading-relaxed transition-colors duration-300">
                As a dynamic Full Stack Developer, I possess experience with the latest web
                technologies, various JavaScript frameworks, and databases. I have expertise in
                every phase of the complete Agile software development lifecycle. Highly
                collaborative and experienced working in a fast-paced environment, I am eager
                to leverage my expertise in Software Engineering to build and deliver
                innovative projects that solve complex customer problems.
              </p>
            </div>
            
            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              <button 
                onClick={() => {
                  const projectsSection = document.getElementById('projects');
                  if (projectsSection) {
                    projectsSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="group relative px-8 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 hover:scale-105 overflow-hidden w-full sm:w-auto cursor-pointer"
              >
                <span className="relative z-10">View My Work</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-20 animate-pulse"></div>
              </button>
              
              <button 
                onClick={() => {
                  // Email obfuscation - decode at runtime
                  const user = 'sherpa.sjs';
                  const domain = 'gmail.com';
                  const subject = encodeURIComponent('Hello Sonam - Let\'s Connect');
                  const body = encodeURIComponent('Hi Sonam,\n\nI came across your portfolio and would love to connect with you.\n\nBest regards,');
                  window.location.href = `mailto:${user}@${domain}?subject=${subject}&body=${body}`;
                }}
                className="group px-8 sm:px-10 py-3 sm:py-4 border-2 border-gray-300 text-gray-200 font-semibold rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 backdrop-blur-sm bg-white/10 w-full sm:w-auto text-center cursor-pointer"
              >
                Get In Touch
                <span className="inline-block ml-2 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
              </button>
            </div>
          </div>
        </div>
        
        {/* Enhanced Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
          <div className="flex flex-col items-center text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer">
            <div className="text-xs font-medium mb-2 tracking-wider">SCROLL</div>
            <div className="w-6 h-10 border-2 border-gray-300 hover:border-white rounded-full flex justify-center transition-colors duration-300">
              <div className="w-1 h-3 bg-gray-300 rounded-full mt-2 animate-pulse"></div>
            </div>
            <div className="mt-2">
              <svg className="w-4 h-4 animate-bounce animation-delay-2000" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <About />

      {/* Certifications Section */}
      <Certification />

      {/* Technical Skills Section */}
      <TechnicalSkill />

      {/* Experience Section */}
      <Experience />

      {/* Education Section */}
      <Education />

      {/* Projects Section */}
      <ProjectSection />

      {/* Contact Section */}
      <Contact />

      {/* Resume Section */}
      <Resume />

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Home
