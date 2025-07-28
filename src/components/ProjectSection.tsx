import React, { useState } from 'react';
import { projects } from '../data/projects';
import type { Project } from '../data/projects';
import ProjectCard from './ProjectCard';
import ProjectDetail from './ProjectDetail';

const ProjectSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<'all' | 'web' | 'mobile' | 'desktop' | 'fullstack'>('all');

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const handleViewDetails = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseDetails = () => {
    setSelectedProject(null);
  };

  const filterButtons = [
    { key: 'all', label: 'All Projects', count: projects.length },
    { key: 'web', label: 'Web Apps', count: projects.filter(p => p.category === 'web').length },
    { key: 'mobile', label: 'Mobile Apps', count: projects.filter(p => p.category === 'mobile').length },
    { key: 'desktop', label: 'Desktop', count: projects.filter(p => p.category === 'desktop').length },
    { key: 'fullstack', label: 'Full Stack', count: projects.filter(p => p.category === 'fullstack').length },
  ] as const;

  return (
    <section id="projects" className="py-24 bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16  mt-4">
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6 transition-colors duration-300">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed transition-colors duration-300">
            Explore my portfolio of innovative projects spanning web development, mobile applications, 
            and cutting-edge technologies. Each project represents a unique challenge and creative solution.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filterButtons.map((button) => (
            <button
              key={button.key}
              onClick={() => setFilter(button.key)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                filter === button.key
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 shadow-md hover:shadow-lg'
              }`}
            >
              {button.label} ({button.count})
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onViewDetails={handleViewDetails}
            />
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <div className="text-gray-400 dark:text-gray-500 mb-4">
              <svg className="w-24 h-24 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              No Projects Found
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              No projects match the selected filter. Try selecting a different category.
            </p>
          </div>
        )}

        {/* Project Statistics */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg transition-colors duration-300">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              {projects.length}
            </div>
            <div className="text-gray-600 dark:text-gray-300">Total Projects</div>
          </div>
          <div className="text-center bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg transition-colors duration-300">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
              {projects.filter(p => p.status === 'completed').length}
            </div>
            <div className="text-gray-600 dark:text-gray-300">Completed</div>
          </div>
          <div className="text-center bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg transition-colors duration-300">
            <div className="text-3xl font-bold text-yellow-600 dark:text-yellow-400 mb-2">
              {projects.filter(p => p.status === 'in-progress').length}
            </div>
            <div className="text-gray-600 dark:text-gray-300">In Progress</div>
          </div>
          <div className="text-center bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg transition-colors duration-300">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
              {[...new Set(projects.flatMap(p => p.technologies))].length}
            </div>
            <div className="text-gray-600 dark:text-gray-300">Technologies</div>
          </div>
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectDetail
          project={selectedProject}
          onClose={handleCloseDetails}
        />
      )}
    </section>
  );
};

export default ProjectSection;
