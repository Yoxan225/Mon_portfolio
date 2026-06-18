import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Code, Rocket, Brain, Target, Calendar } from 'lucide-react';
import { timeline } from '../data/portfolioData';

const TimelineSection: React.FC = () => {
  const iconMap: { [key: string]: React.ElementType } = {
    graduation: GraduationCap,
    code: Code,
    rocket: Rocket,
    brain: Brain,
    target: Target,
  };

  const colorClasses: { [key: string]: { bg: string; text: string; border: string } } = {
    primary: {
      bg: 'bg-primary-100 dark:bg-primary-900/30',
      text: 'text-primary-600 dark:text-primary-400',
      border: 'border-primary-500',
    },
    accent: {
      bg: 'bg-accent-100 dark:bg-accent-900/30',
      text: 'text-accent-600 dark:text-accent-400',
      border: 'border-accent-500',
    },
    success: {
      bg: 'bg-green-100 dark:bg-green-900/30',
      text: 'text-green-600 dark:text-green-400',
      border: 'border-green-500',
    },
    warning: {
      bg: 'bg-amber-100 dark:bg-amber-900/30',
      text: 'text-amber-600 dark:text-amber-400',
      border: 'border-amber-500',
    },
  };

  return (
    <section id="parcours" className="relative py-20 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium mb-4"
          >
            <Calendar className="w-4 h-4" />
            Parcours
          </motion.span>
          <h2 className="section-title mb-4">
            Mon évolution
          </h2>
          <p className="section-subtitle">
            De l'étudiant passionné au futur ingénieur logiciel
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-accent-500 to-primary-500 transform -translate-x-1/2" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {timeline.map((item, index) => {
              const Icon = iconMap[item.icon] || GraduationCap;
              const colors = colorClasses[item.color] || colorClasses.primary;
              const isEven = index % 2 === 0;
              const isLast = index === timeline.length - 1;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex items-center ${
                    isEven ? 'sm:flex-row' : 'sm:flex-row-reverse'
                  }`}
                >
                  {/* Content */}
                  <div className={`flex-1 ml-12 sm:ml-0 ${isEven ? 'sm:pr-12 sm:text-right' : 'sm:pl-12'}`}>
                    <motion.div
                      whileHover={{ scale: 1.02, y: -2 }}
                      className={`glass-card p-6 ${item.isObjective ? 'border-2 border-primary-500/50' : ''}`}
                    >
                      {/* Year Badge */}
                      <div
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full ${colors.bg} ${colors.text} text-sm font-medium mb-3`}
                      >
                        {item.isObjective && <Target className="w-3.5 h-3.5" />}
                        {item.year}
                      </div>

                      <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-dark-600 dark:text-dark-400">
                        {item.description}
                      </p>

                      {item.isObjective && (
                        <div className="mt-4 flex items-center gap-2 justify-start sm:justify-end">
                          <motion.div
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="w-3 h-3 rounded-full bg-primary-500"
                          />
                          <span className="text-sm font-medium text-primary-600 dark:text-primary-400">
                            Objectif en cours
                          </span>
                        </div>
                      )}
                    </motion.div>
                  </div>

                  {/* Center Icon */}
                  <div className="absolute left-4 sm:left-1/2 transform -translate-x-1/2 z-10">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl ${
                        item.isObjective
                          ? 'bg-gradient-to-br from-primary-500 to-accent-500 shadow-lg shadow-primary-500/30'
                          : colors.bg
                      } flex items-center justify-center border-4 border-white dark:border-dark-900`}
                    >
                      <Icon
                        className={`w-5 h-5 sm:w-6 sm:h-6 ${
                          item.isObjective ? 'text-white' : colors.text
                        }`}
                      />
                    </motion.div>
                  </div>

                  {/* Spacer for odd items */}
                  <div className="hidden sm:block flex-1" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
