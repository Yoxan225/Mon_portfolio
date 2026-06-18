import React from 'react';
import { motion } from 'framer-motion';
import { User, Code, Brain, Cloud, Database, GitBranch, GraduationCap, Briefcase, Heart } from 'lucide-react';
import { aboutData } from '../data/portfolioData';

const About: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const iconMap: { [key: string]: React.ElementType } = {
    'Développement Full Stack': Code,
    'Intelligence Artificielle': Brain,
    'Big Data': Brain,
    'Génie Logiciel': GitBranch,
    'Cloud Computing': Cloud,
    'DevOps': Database,
  };

  const timelineItems = [
    { year: '2023', title: 'Début en Programmation', icon: GraduationCap, description: 'Premiers pas en développement' },
    { year: '2024', title: 'Projets Web', icon: Code, description: 'Création de sites web modernes' },
    { year: '2025', title: 'Spécialisation IA', icon: Brain, description: 'Machine Learning ' },
    { year: '2026', title: 'Full Stack & Cloud', icon: Cloud, description: 'Architecture microservices & Big Data' },
  ];

  return (
    <section id="apropos" className="relative py-20 sm:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-primary-500/5 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-accent-500/5 via-transparent to-transparent" />
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
            <User className="w-4 h-4" />
            À propos de moi
          </motion.span>
          <h2 className="section-title mb-4">
            Qui suis-je<span className="text-primary-500">?</span>
          </h2>
          <p className="section-subtitle">
            Découvrez mon parcours et ma passion pour la technologie
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Column - Description */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div variants={itemVariants} className="glass-card p-6 sm:p-8">
              <p className="text-lg text-dark-600 dark:text-dark-300 leading-relaxed">
                {aboutData.description}
              </p>
            </motion.div>

            {/* Key Numbers */}
            <motion.div variants={itemVariants} className="grid grid-cols-3 gap-4">
              {[
                { value: '3+', label: 'Années d\'études', icon: GraduationCap },
                { value: '15+', label: 'Projets', icon: Briefcase },
                { value: '100%', label: 'Passion', icon: Heart },
              ].map((item) => (
                <div key={item.label} className="card-hover p-4 text-center">
                  <item.icon className="w-6 h-6 text-primary-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-dark-900 dark:text-white">{item.value}</div>
                  <div className="text-xs text-dark-500 dark:text-dark-400">{item.label}</div>
                </div>
              ))}
            </motion.div>

            {/* Personal Timeline */}
            <motion.div variants={itemVariants} className="glass-card p-6">
              <h3 className="text-lg font-semibold text-dark-900 dark:text-white mb-4">Mon parcours</h3>
              <div className="space-y-4">
                {timelineItems.map((item, index) => (
                  <div key={index} className="flex items-start gap-4 group">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                        <item.icon className="w-5 h-5" />
                      </div>
                      {index < timelineItems.length - 1 && (
                        <div className="w-0.5 h-12 bg-gradient-to-b from-primary-500/50 to-transparent mt-2" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="text-xs text-primary-600 dark:text-primary-400 font-medium">{item.year}</div>
                      <div className="font-semibold text-dark-900 dark:text-white">{item.title}</div>
                      <div className="text-sm text-dark-500 dark:text-dark-400">{item.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Interests */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold text-dark-900 dark:text-white mb-6">Domaines d'intérêt</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {aboutData.interests.map((item, index) => {
                const Icon = iconMap[item.title] || Code;
                return (
                  <motion.div
                    key={item.title}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, y: -2 }}
                    className="card-hover p-5 group cursor-pointer"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500/10 to-accent-500/10 dark:from-primary-500/20 dark:to-accent-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6 text-primary-500" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-dark-900 dark:text-white mb-1">{item.title}</h4>
                        <p className="text-sm text-dark-500 dark:text-dark-400">{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
