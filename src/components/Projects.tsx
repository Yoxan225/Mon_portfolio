import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FolderGit2, ExternalLink, Github, ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';
import { projects } from '../data/portfolioData';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const badgeColors: { [key: string]: string } = {
    primary: 'bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300',
    accent: 'bg-accent-100 dark:bg-accent-900/30 text-accent-700 dark:text-accent-300',
    success: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300',
    warning: 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300',
  };

  // Placeholder images for projects
  const projectPlaceholders: { [key: string]: string } = {
    techinnova: 'https://images.pexels.com/photo-3182776213/pexels-photo-3182776213.jpeg?auto=compress&cs=tinysrgb&w=800',
    detectwaste: 'https://images.pexels.com/photo-3861969630/pexels-photo-3861969630.jpeg?auto=compress&cs=tinysrgb&w=800',
    nexmart: 'https://images.pexels.com/photo-2305313210/pexels-photo-2305313210.jpeg?auto=compress&cs=tinysrgb&w=800',
    rentyourcar: 'https://images.pexels.com/photo-3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=800',
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="projets" className="relative py-20 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-primary-500/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-accent-500/5 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-100 dark:bg-accent-900/30 text-accent-700 dark:text-accent-300 text-sm font-medium mb-4"
          >
            <FolderGit2 className="w-4 h-4" />
            Portfolio
          </motion.span>
          <h2 className="section-title mb-4">
            Mes projets
          </h2>
          <p className="section-subtitle">
            Découvrez mes réalisations et projets académiques
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              layoutId={`project-${project.id}`}
              className="group relative"
            >
              <div className="card-hover overflow-hidden">
                {/* Project Image */}
                <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-primary-500/10 to-accent-500/10">
                  <img
                    src={project.images[0] || `/assets/images/projects/${project.id}/main.jpg`}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = projectPlaceholders[project.id];
                    }}
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-dark-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Actions overlay */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedProject(project)}
                      className="w-12 h-12 rounded-xl bg-white/90 dark:bg-dark-800/90 backdrop-blur-md text-dark-900 dark:text-white flex items-center justify-center shadow-lg hover:bg-white dark:hover:bg-dark-700 transition-colors"
                    >
                      <ZoomIn className="w-5 h-5" />
                    </motion.button>
                  </div>

                  {/* Badge */}
                  <div className={`absolute top-4 left-4 badge ${badgeColors[project.badgeColor]}`}>
                    {project.badge}
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-dark-500 dark:text-dark-400 mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-dark-100 dark:bg-dark-700 text-dark-600 dark:text-dark-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-3 py-1 text-xs font-medium rounded-full bg-dark-100 dark:bg-dark-700 text-dark-500 dark:text-dark-400">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-3">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-dark-900 dark:bg-white text-white dark:text-dark-900 text-sm font-medium hover:bg-dark-800 dark:hover:bg-dark-100 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg border border-dark-200 dark:border-dark-700 text-dark-700 dark:text-dark-300 text-sm font-medium hover:border-primary-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Démo
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 overflow-y-auto"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              layoutId={`project-${selectedProject.id}`}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', bounce: 0.3 }}
              className="relative w-full max-w-4xl bg-white dark:bg-dark-900 rounded-2xl shadow-2xl overflow-hidden my-8"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/90 dark:bg-dark-800/90 backdrop-blur-md flex items-center justify-center text-dark-900 dark:text-white hover:bg-white dark:hover:bg-dark-700 transition-colors shadow-lg"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Image Carousel */}
              <div className="relative aspect-video bg-gradient-to-br from-primary-500/10 to-accent-500/10">
                <img
                  src={selectedProject.images[currentImageIndex] || projectPlaceholders[selectedProject.id]}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />

                {/* Carousel Controls */}
                {selectedProject.images.length > 1 && (
                  <>
                    <button
                      onClick={() => setCurrentImageIndex(Math.max(0, currentImageIndex - 1))}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 dark:bg-dark-800/90 backdrop-blur-md flex items-center justify-center text-dark-900 dark:text-white shadow-lg hover:scale-110 transition-transform"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => setCurrentImageIndex(Math.min(selectedProject.images.length - 1, currentImageIndex +1))}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 dark:bg-dark-800/90 backdrop-blur-md flex items-center justify-center text-dark-900 dark:text-white shadow-lg hover:scale-110 transition-transform"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}

                {/* Badge */}
                <div className={`absolute top-4 left-4 badge ${badgeColors[selectedProject.badgeColor]}`}>
                  {selectedProject.badge}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8">
                <h3 className="text-2xl sm:text-3xl font-bold text-dark-900 dark:text-white mb-2">
                  {selectedProject.title}
                </h3>
                <p className="text-dark-500 dark:text-dark-400 mb-4">
                  {selectedProject.subtitle}
                </p>

                <p className="text-dark-600 dark:text-dark-300 mb-6 leading-relaxed">
                  {selectedProject.longDescription || selectedProject.description}
                </p>

                {/* Features */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-dark-900 dark:text-white mb-3">
                    Fonctionnalités
                  </h4>
                  <ul className="grid sm:grid-cols-2 gap-2">
                    {selectedProject.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-dark-600 dark:text-dark-300"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-dark-900 dark:text-white mb-3">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 rounded-lg bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4">
                  <motion.a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-2 px-6 py-3 rounded-xl bg-dark-900 dark:bg-white text-white dark:text-dark-900 font-medium hover:bg-dark-800 dark:hover:bg-dark-100 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    Voir le code
                  </motion.a>
                  <motion.a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-2 px-6 py-3 rounded-xl bg-primary-500 hover:bg-primary-600 text-white font-medium transition-colors shadow-lg shadow-primary-500/25"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Voir la démo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
