import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, Download, FileText } from 'lucide-react';
import { certifications } from '../data/portfolioData';

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="relative py-20 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-0 w-full h-64 bg-gradient-to-r from-accent-500/5 via-primary-500/10 to-accent-500/5 transform -translate-y-1/2" />
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 text-sm font-medium mb-4"
          >
            <Award className="w-4 h-4" />
            Certifications
          </motion.span>
          <h2 className="section-title mb-4">
            Mes certifications
          </h2>
          <p className="section-subtitle">
            Formations et certifications validées
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -3 }}
              className="group"
            >
              <div className="glass-card p-6 flex items-start gap-4 hover:border-primary-500/50 transition-colors">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-amber-500/20 group-hover:scale-110 transition-transform">
                  <Award className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-dark-900 dark:text-white mb-1 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-dark-500 dark:text-dark-400 mb-2">
                    {cert.issuer}
                  </p>
                  <div className="flex items-center gap-3 text-xs text-dark-400 dark:text-dark-500">
                    <span>{cert.date}</span>
                    <span className="w-1 h-1 rounded-full bg-dark-300 dark:bg-dark-600" />
                    <span className="font-mono">ID: {cert.credential}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-lg bg-dark-100 dark:bg-dark-700 flex items-center justify-center text-dark-600 dark:text-dark-300 hover:bg-dark-200 dark:hover:bg-dark-600 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Add Certification CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <p className="text-sm text-dark-500 dark:text-dark-400">
            D'autres certifications en cours de validation...
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
