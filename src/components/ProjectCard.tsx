
import { useState } from 'react';
import { ExternalLink, Github, Calendar, Users, Award, X, ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    longDescription?: string;
    tech: string[];
    metrics: string[];
    category: string;
    status: string;
    year: string;
    image: string;
    features?: string[];
    challenges?: string[];
    results?: string[];
  };
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Enhanced Project Card */}
      <div 
        className="group relative bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl overflow-hidden hover:border-indigo-400/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/10"
        style={{ animationDelay: `${index * 0.1}s` }}
      >
        {/* Image with Overlay */}
        <div className="relative h-56 overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
          
          {/* Status Badge */}
          <div className="absolute top-4 left-4 flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-green-400 text-sm font-medium bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full border border-green-400/30">
              {project.status}
            </span>
          </div>
          
          {/* Year Badge */}
          <div className="absolute top-4 right-4 flex items-center gap-2 text-white text-sm bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20">
            <Calendar className="w-4 h-4" />
            <span>{project.year}</span>
          </div>

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-white/20 backdrop-blur-md border border-white/30 text-white px-6 py-3 rounded-xl font-medium hover:bg-white/30 transition-all duration-300 flex items-center gap-2"
            >
              View Details
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <div className="text-sm text-indigo-400 font-medium">
            {project.category}
          </div>

          <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors duration-300">
            {project.title}
          </h3>

          <p className="text-slate-300 leading-relaxed text-sm">
            {project.description}
          </p>

          {/* Metrics */}
          <div className="flex flex-wrap gap-2">
            {project.metrics.map((metric, metricIndex) => (
              <span
                key={metricIndex}
                className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 border border-green-500/30 text-green-300 px-3 py-1 rounded-lg text-xs font-medium"
              >
                {metric}
              </span>
            ))}
          </div>
          
          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {project.tech.slice(0, 4).map((tech, techIndex) => (
              <span
                key={techIndex}
                className="bg-slate-800/50 border border-slate-600/30 text-slate-300 px-3 py-1 rounded-lg text-xs"
              >
                {tech}
              </span>
            ))}
            {project.tech.length > 4 && (
              <span className="text-slate-400 text-xs px-2 py-1">
                +{project.tech.length - 4} more
              </span>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-2">
            <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl text-sm font-medium hover:scale-105 transition-transform duration-300">
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </button>
            <button className="flex items-center justify-center gap-2 px-4 py-2 bg-slate-800/50 border border-slate-600/30 rounded-xl text-sm font-medium hover:scale-105 transition-transform duration-300">
              <Github className="w-4 h-4" />
              Code
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-4xl max-h-[90vh] bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl border border-slate-700 overflow-hidden">
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="overflow-y-auto max-h-[90vh]">
              {/* Modal Header */}
              <div className="relative h-64">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
                <div className="absolute bottom-6 left-6 right-16">
                  <div className="text-indigo-400 text-sm font-medium mb-2">{project.category}</div>
                  <h2 className="text-3xl font-bold text-white mb-2">{project.title}</h2>
                  <div className="flex items-center gap-4 text-slate-300">
                    <span className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {project.year}
                    </span>
                    <span className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      {project.status}
                    </span>
                  </div>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-8 space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Project Overview</h3>
                  <p className="text-slate-300 leading-relaxed">
                    {project.longDescription || project.description}
                  </p>
                </div>

                {project.features && (
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Key Features</h3>
                    <ul className="space-y-2">
                      {project.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3 text-slate-300">
                          <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, index) => (
                        <span
                          key={index}
                          className="bg-slate-800/50 border border-slate-600/30 text-slate-300 px-3 py-2 rounded-lg text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Key Metrics</h3>
                    <div className="space-y-2">
                      {project.metrics.map((metric, index) => (
                        <div
                          key={index}
                          className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 border border-green-500/30 text-green-300 px-4 py-2 rounded-lg text-sm font-medium"
                        >
                          {metric}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-4">
                  <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl font-medium hover:scale-105 transition-transform">
                    <ExternalLink className="w-5 h-5" />
                    View Live Project
                  </button>
                  <button className="flex items-center gap-2 px-6 py-3 bg-slate-800/50 border border-slate-600/30 rounded-xl font-medium hover:scale-105 transition-transform">
                    <Github className="w-5 h-5" />
                    View Source Code
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;
