import React from 'react'

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-gray-50 dark:bg-gray-900 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 mt-4">
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6 transition-colors duration-300">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mx-auto mb-8"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <p className="text-xl text-slate-700 dark:text-gray-300 leading-relaxed transition-colors duration-300">
              I'm a passionate developer with experience in modern web technologies. 
              I love building applications that solve real-world problems and provide 
              exceptional user experiences.
            </p>
            <p className="text-lg text-slate-600 dark:text-gray-400 leading-relaxed">
              With a keen eye for design and a deep understanding of code, I bridge 
              the gap between beautiful interfaces and robust functionality.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">50+</div>
                <div className="text-sm text-slate-600 dark:text-gray-400 uppercase tracking-wide">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">3+</div>
                <div className="text-sm text-slate-600 dark:text-gray-400 uppercase tracking-wide">Years</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">100%</div>
                <div className="text-sm text-slate-600 dark:text-gray-400 uppercase tracking-wide">Passion</div>
              </div>
            </div>
          </div>
          
          {/* Profile image with gradient border */}
          <div className="relative">
            <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-400 via-purple-500 to-indigo-600 rounded-full p-2">
              <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-gray-800">
                <img 
                  src="/profile.jpg" 
                  alt="Profile picture" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
            {/* Floating elements */}
            <div className="absolute top-4 right-4 w-4 h-4 bg-yellow-400 rounded-full animate-ping"></div>
            <div className="absolute bottom-8 left-8 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <div className="absolute top-1/2 left-4 w-2 h-2 bg-pink-400 rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
