import React from 'react';
import type { Project } from '../data/projects';

interface ProjectDetailProps {
  project: Project;
  onClose: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onClose }) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'in-progress':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'planned':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="relative overflow-hidden">
          <div className="relative h-80 group">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Gradient overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent"></div>
          </div>
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 hover:bg-white dark:hover:bg-gray-800 p-2 rounded-full transition-all duration-200 backdrop-blur-sm hover:scale-110"
          >
            <svg className="w-6 h-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div className="absolute bottom-4 left-4 flex items-center gap-3">
            <span className={`px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm border ${getStatusColor(project.status)}`}>
              {project.status.replace('-', ' ')}
            </span>
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
              <span className="text-white text-sm font-medium capitalize">
                {project.category}
              </span>
            </div>
          </div>
        </div>

        <div className="p-8">
          {/* Title and Category */}
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              {project.title}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 capitalize">
              {project.category} Project
            </p>
          </div>

          {/* Project Details Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Left Column */}
            <div className="space-y-6">
              {/* Description */}
              <div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  About This Project
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Features */}
              <div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Key Features
                </h2>
                <ul className="space-y-2">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Project Timeline */}
              <div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Project Timeline
                </h2>
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Start Date:</span>
                    <span className="font-medium text-gray-900 dark:text-white">
                      {formatDate(project.startDate)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">End Date:</span>
                    <span className="font-medium text-gray-900 dark:text-white">
                      {formatDate(project.endDate)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Duration:</span>
                    <span className="font-medium text-gray-900 dark:text-white">
                      {project.duration}
                    </span>
                  </div>
                </div>
              </div>

              {/* Technologies */}
              <div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Technologies Used
                </h2>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Links */}
              {(project.githubUrl || project.liveUrl) && (
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    Project Links
                  </h2>
                  <div className="space-y-3">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-full bg-gray-900 dark:bg-gray-700 hover:bg-gray-800 dark:hover:bg-gray-600 text-white py-2 px-4 rounded-lg transition-colors duration-200"
                      >
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        View on GitHub
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-2 px-4 rounded-lg transition-all duration-200"
                      >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        View Live Project
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Close Button */}
          <div className="text-center">
            <button
              onClick={onClose}
              className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 px-6 py-2 rounded-lg transition-colors duration-200"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
