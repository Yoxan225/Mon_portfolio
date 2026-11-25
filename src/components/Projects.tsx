import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FolderGit2, ExternalLink, Github, ChevronLeft, ChevronRight, X, ZoomIn, ImageIcon } from 'lucide-react';
import { projects } from '../data/portfolioData';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fullScreenImage, setFullScreenImage] = useState<string | null>(null);
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set());

  const handleImageError = useCallback((src: string) => {
    setImageErrors(prev => new Set(prev).add(src));
  }, []);

  const getImageSrc = (project: typeof projects[0], index: number = 0): string => {
    const imagePath = project.images[index];
    if (imagePath && !imageErrors.has(imagePath)) {
      return imagePath;
    }
    return project.placeholder;
  };

  const badgeColors: { [key: string]: string } = {
    primary: 'bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300',
    accent: 'bg-accent-100 dark:bg-accent-900/30 text-accent-700 dark:text-accent-300',
    success: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300',
    warning: 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300',
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

  const openProject = (project: typeof projects[0]) => {
    setCurrentImageIndex(0);
    setSelectedProject(project);
  };

  const closeProject = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) =>
        prev < selectedProject.images.length - 1 ? prev + 1 : 0
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) =>
        prev > 0 ? prev - 1 : selectedProject.images.length - 1
      );
    }
  };

  const openFullScreen = (src: string) => {
    setFullScreenImage(src);
  };

  const closeFullScreen = () => {
    setFullScreenImage(null);
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
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group relative"
            >
              <div className="card-hover overflow-hidden">
                {/* Project Image */}
                <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-primary-500/10 to-accent-500/10">
                  <img
                    src={getImageSrc(project, 0)}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    onError={() => handleImageError(project.images[0])}
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-dark-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Actions overlay */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => openProject(project)}
                      className="w-12 h-12 rounded-xl bg-white/90 dark:bg-dark-800/90 backdrop-blur-md text-dark-900 dark:text-white flex items-center justify-center shadow-lg hover:bg-white dark:hover:bg-dark-700 transition-colors"
                    >
                      <ZoomIn className="w-5 h-5" />
                    </motion.button>
                  </div>

                  {/* Image count badge */}
                  {project.images.length > 1 && (
                    <div className="absolute top-4 right-4 badge bg-dark-900/70 text-white backdrop-blur-sm">
                      <ImageIcon className="w-3 h-3 mr-1" />
                      {project.images.length} images
                    </div>
                  )}

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
                  <div className="flex flex-wrap items-center gap-3">
                    {!project.github && !project.demo && !project.links?.length && (
                      <span className="text-sm text-dark-500 dark:text-dark-400 italic">
                        {project.note || 'Code source privé'}
                      </span>
                    )}
                    {project.links?.map((link) => (
                      <motion.a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-dark-900 dark:bg-white text-white dark:text-dark-900 text-xs font-medium hover:bg-dark-800 dark:hover:bg-dark-100 transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        {link.label}
                      </motion.a>
                    ))}
                    {project.github && (
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
                    )}
                    {project.demo && (
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
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex justify-center bg-black/80 backdrop-blur-sm p-4 sm:p-8 overflow-y-auto"
            onClick={closeProject}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: 'spring', bounce: 0.3 }}
              className="relative w-full max-w-5xl h-fit bg-white dark:bg-dark-900 rounded-2xl shadow-2xl overflow-hidden my-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={closeProject}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/90 dark:bg-dark-800/90 backdrop-blur-md flex items-center justify-center text-dark-900 dark:text-white hover:bg-white dark:hover:bg-dark-700 transition-colors shadow-lg"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Image Gallery */}
              <div className="relative">
                {/* Main Image */}
                <div className="relative aspect-video bg-dark-100 dark:bg-dark-950 pt-14 pb-3 px-3 sm:px-16">
                  <img
                    src={getImageSrc(selectedProject, currentImageIndex)}
                    alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                    className="w-full h-full object-contain rounded-lg cursor-zoom-in"
                    onClick={() => openFullScreen(getImageSrc(selectedProject, currentImageIndex))}
                    onError={() => handleImageError(selectedProject.images[currentImageIndex])}
                  />

                  {/* Click to zoom hint */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-full bg-black/50 text-white text-xs backdrop-blur-sm opacity-0 hover:opacity-100 transition-opacity cursor-pointer"
                    onClick={() => openFullScreen(getImageSrc(selectedProject, currentImageIndex))}
                  >
                    <ZoomIn className="w-3 h-3 inline mr-1" />
                    Cliquez pour zoomer
                  </div>

                  {/* Carousel Controls */}
                  {selectedProject.images.length > 1 && (
                    <>
                      <button
                        onClick={(e) => { e.stopPropagation(); prevImage(); }}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 dark:bg-dark-800/90 backdrop-blur-md flex items-center justify-center text-dark-900 dark:text-white shadow-lg hover:scale-110 transition-transform"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        onClick={(e) => { e.stopPropagation(); nextImage(); }}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 dark:bg-dark-800/90 backdrop-blur-md flex items-center justify-center text-dark-900 dark:text-white shadow-lg hover:scale-110 transition-transform"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>

                      {/* Image counter */}
                      <div className="absolute top-4 right-16 z-10 px-3 py-1 rounded-full bg-black/60 text-white text-sm backdrop-blur-sm">
                        {currentImageIndex + 1} / {selectedProject.images.length}
                      </div>
                    </>
                  )}

                  {/* Badge */}
                  <div className={`absolute top-4 left-4 z-10 badge ${badgeColors[selectedProject.badgeColor]}`}>
                    {selectedProject.badge}
                  </div>
                </div>

                {/* Thumbnails */}
                {selectedProject.images.length > 1 && (
                  <div className="flex gap-2 p-4 bg-dark-50 dark:bg-dark-800/50 overflow-x-auto">
                    {selectedProject.images.map((img, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`relative flex-shrink-0 w-20 h-14 rounded-lg overflow-hidden transition-all ${
                          index === currentImageIndex
                            ? 'ring-2 ring-primary-500 ring-offset-2 dark:ring-offset-dark-900'
                            : 'opacity-60 hover:opacity-100'
                        }`}
                      >
                        <img
                          src={!imageErrors.has(img) ? img : selectedProject.placeholder}
                          alt={`Miniature ${index + 1}`}
                          className="w-full h-full object-cover object-top"
                          onError={() => handleImageError(img)}
                        />
                      </button>
                    ))}
                  </div>
                )}
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
                <div className="flex flex-wrap items-center gap-4">
                  {!selectedProject.github && !selectedProject.demo && !selectedProject.links?.length && (
                    <span className="text-sm text-dark-500 dark:text-dark-400 italic">
                      {selectedProject.note || 'Code source privé'}
                    </span>
                  )}
                  {selectedProject.links?.map((link) => (
                    <motion.a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center gap-2 px-5 py-3 rounded-xl bg-dark-900 dark:bg-white text-white dark:text-dark-900 text-sm font-medium hover:bg-dark-800 dark:hover:bg-dark-100 transition-colors"
                    >
                      <Github className="w-5 h-5" />
                      {link.label}
                    </motion.a>
                  ))}
                  {selectedProject.github && (
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
                  )}
                  {selectedProject.demo && (
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
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Full Screen Image Overlay */}
      <AnimatePresence>
        {fullScreenImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4"
            onClick={closeFullScreen}
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={closeFullScreen}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <X className="w-6 h-6" />
            </motion.button>
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', bounce: 0.2 }}
              src={fullScreenImage}
              alt="Plein écran"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
