import React from 'react';

const TechnicalSkill: React.FC = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: ['JavaScript', 'TypeScript', 'HTML', 'CSS', 'PHP', 'Python'],
      icon: '💻',
      color: 'from-blue-400 to-blue-600',
      bgColor: 'from-blue-100 to-blue-200',
      darkBgColor: 'from-blue-900/30 to-blue-800/30'
    },
    {
      title: 'Frameworks | Libraries',
      skills: ['React', 'Redux', 'Node.js', 'Express.js', 'Next.js', 'Handlebars', 'jQuery'],
      icon: '⚛️',
      color: 'from-green-400 to-green-600',
      bgColor: 'from-green-100 to-green-200',
      darkBgColor: 'from-green-900/30 to-green-800/30'
    },
    {
      title: 'Databases',
      skills: ['MongoDB', 'MySQL'],
      icon: '🗄️',
      color: 'from-purple-400 to-purple-600',
      bgColor: 'from-purple-100 to-purple-200',
      darkBgColor: 'from-purple-900/30 to-purple-800/30'
    },
    {
      title: 'APIs',
      skills: ['RESTful APIs', 'GraphQL'],
      icon: '🔗',
      color: 'from-orange-400 to-orange-600',
      bgColor: 'from-orange-100 to-orange-200',
      darkBgColor: 'from-orange-900/30 to-orange-800/30'
    },
    {
      title: 'Tools',
      skills: ['GitHub', 'GitLab', 'VS Code', 'Figma', 'Postman', 'Heroku', 'AWS', 'Vercel'],
      icon: '🛠️',
      color: 'from-indigo-400 to-indigo-600',
      bgColor: 'from-indigo-100 to-indigo-200',
      darkBgColor: 'from-indigo-900/30 to-indigo-800/30'
    },
    {
      title: 'Soft Skills',
      skills: ['Agile Methodologies', 'Problem Solving', 'Communication', 'Team Collaboration'],
      icon: '🤝',
      color: 'from-pink-400 to-pink-600',
      bgColor: 'from-pink-100 to-pink-200',
      darkBgColor: 'from-pink-900/30 to-pink-800/30'
    }
  ];

  return (
    <section id="technical-skills" className="py-24 bg-gradient-to-br from-slate-800 to-slate-900 dark:bg-gradient-to-br dark:from-gray-900 dark:to-black relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16  mt-4">
          <h2 className="text-5xl md:text-6xl font-bold text-white dark:text-white mb-6 transition-colors duration-300">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 dark:from-blue-400 dark:to-purple-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
            Technologies, tools, and methodologies I use to build modern web applications and solve complex problems.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className={`group relative bg-gradient-to-br ${category.bgColor} dark:bg-gradient-to-br dark:${category.darkBgColor} rounded-2xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-gray-200 dark:border-gray-700 animate-fade-in-up`}
              style={{ animationDelay: `${categoryIndex * 150}ms` }}
            >
              {/* Gradient Border Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              {/* Category Header */}
              <div className="relative mb-6">
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center text-white text-xl shadow-lg mr-4 group-hover:scale-110 transition-transform duration-300`}>
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white dark:text-white transition-colors duration-300">
                    {category.title}
                  </h3>
                </div>
              </div>

              {/* Skills List */}
              <div className="relative space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill}
                    className={`group/skill flex items-center p-3 bg-slate-700/50 dark:bg-gray-800/50 rounded-lg border border-slate-600/50 dark:border-gray-600/50 hover:bg-slate-600 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-md animate-fade-in-right`}
                    style={{ animationDelay: `${categoryIndex * 150 + skillIndex * 50}ms` }}
                  >
                    {/* Skill Indicator */}
                    <div className={`w-3 h-3 bg-gradient-to-r ${category.color} rounded-full mr-4 group-hover/skill:scale-125 transition-transform duration-300`}></div>
                    
                    {/* Skill Name */}
                    <span className="text-gray-200 dark:text-gray-300 font-medium group-hover/skill:text-white dark:group-hover/skill:text-white transition-colors duration-300">
                      {skill}
                    </span>

                    {/* Proficiency Indicator */}
                    <div className="ml-auto flex space-x-1">
                      {[...Array(Math.floor(Math.random() * 2) + 4)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-2 h-2 bg-gradient-to-r ${category.color} rounded-full opacity-60 group-hover/skill:opacity-100 transition-opacity duration-300`}
                          style={{ animationDelay: `${i * 100}ms` }}
                        ></div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Category Stats */}
              <div className="relative mt-6 pt-6 border-t border-slate-600/50 dark:border-gray-600/50">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-400 dark:text-gray-400">
                    {category.skills.length} Skills
                  </span>
                  <div className="flex items-center">
                    <div className={`w-2 h-2 bg-gradient-to-r ${category.color} rounded-full mr-2 animate-pulse`}></div>
                    <span className="text-gray-400 dark:text-gray-400">
                      {category.title === 'Languages' ? 'Core' : 
                       category.title === 'Frameworks | Libraries' ? 'Advanced' :
                       category.title === 'Databases' ? 'Proficient' :
                       category.title === 'APIs' ? 'Experienced' :
                       category.title === 'Tools' ? 'Expert' : 'Strong'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Animation Elements */}
              <div className="absolute top-4 right-4 w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 animate-ping group-hover:opacity-40"></div>
              <div className="absolute bottom-6 left-6 w-2 h-2 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full opacity-30 animate-bounce animation-delay-1000 group-hover:opacity-60"></div>
            </div>
          ))}
        </div>

        {/* Skills Summary */}
        <div className="mt-16 bg-gradient-to-r from-slate-700 to-slate-800 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 border border-slate-600 dark:border-gray-600 transition-colors duration-300">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white dark:text-white mb-4">
              Skills Overview
            </h3>
            <p className="text-gray-300 dark:text-gray-300 max-w-2xl mx-auto">
              A comprehensive toolkit for full-stack development, from frontend interfaces to backend systems and everything in between.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center bg-slate-800 dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-slate-600 dark:border-gray-600 transition-colors duration-300">
              <div className="text-3xl font-bold text-blue-400 dark:text-blue-400 mb-2">6</div>
              <div className="text-sm text-gray-300 dark:text-gray-400">Programming Languages</div>
            </div>
            <div className="text-center bg-slate-800 dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-slate-600 dark:border-gray-600 transition-colors duration-300">
              <div className="text-3xl font-bold text-green-400 dark:text-green-400 mb-2">7</div>
              <div className="text-sm text-gray-300 dark:text-gray-400">Frameworks & Libraries</div>
            </div>
            <div className="text-center bg-slate-800 dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-slate-600 dark:border-gray-600 transition-colors duration-300">
              <div className="text-3xl font-bold text-purple-400 dark:text-purple-400 mb-2">8</div>
              <div className="text-sm text-gray-300 dark:text-gray-400">Development Tools</div>
            </div>
            <div className="text-center bg-slate-800 dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-slate-600 dark:border-gray-600 transition-colors duration-300">
              <div className="text-3xl font-bold text-pink-400 dark:text-pink-400 mb-2">4</div>
              <div className="text-sm text-gray-300 dark:text-gray-400">Soft Skills</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-500 dark:to-purple-500 rounded-2xl p-8 text-white shadow-2xl">
            <h3 className="text-2xl font-bold mb-4">Ready to Build Something Amazing?</h3>
            <p className="text-blue-100 dark:text-purple-100 mb-6 max-w-2xl mx-auto">
              Let's collaborate and bring your ideas to life using these technologies and more.
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

export default TechnicalSkill;
