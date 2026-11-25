import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Building2, Calendar, Code2, Users, Wrench, Lightbulb, CheckCircle2, GraduationCap } from 'lucide-react';
import { experiences } from '../data/portfolioData';

const sectionIcons: { [key: string]: React.ElementType } = {
  code: Code2,
  users: Users,
  wrench: Wrench,
};

const highlightStyles = [
  {
    icon: Lightbulb,
    iconColor: 'text-amber-600 dark:text-amber-400',
    box: 'bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/10 dark:to-orange-900/10 border-amber-200/70 dark:border-amber-700/30',
  },
  {
    icon: GraduationCap,
    iconColor: 'text-primary-600 dark:text-primary-400',
    box: 'bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-900/10 dark:to-accent-900/10 border-primary-200/70 dark:border-primary-700/30',
  },
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="relative py-20 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium mb-4">
            <Briefcase className="w-4 h-4" />
            Expérience
          </span>
          <h2 className="section-title mb-4">Expérience professionnelle</h2>
          <p className="section-subtitle">
            Ce que j'ai concrètement réalisé en milieu professionnel
          </p>
        </motion.div>

        <div className="space-y-10">
          {experiences.map((exp) => (
            <motion.article
              key={exp.role + exp.period}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-6 sm:p-8"
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6 pb-6 border-b border-dark-200/60 dark:border-dark-700/60">
                <div className="w-14 h-14 flex-shrink-0 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center shadow-lg shadow-primary-500/20">
                  <Building2 className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-dark-900 dark:text-white">
                      {exp.role}
                    </h3>
                    <span className="badge bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300">
                      {exp.type}
                    </span>
                  </div>
                  <p className="font-semibold text-primary-600 dark:text-primary-400">
                    {exp.organization}
                  </p>
                  <p className="text-sm text-dark-500 dark:text-dark-400 mt-1">
                    {exp.organizationFull}
                  </p>
                </div>
                <div className="flex flex-col sm:items-end gap-1 text-sm sm:whitespace-nowrap">
                  <span className="flex items-center gap-2 font-medium text-dark-600 dark:text-dark-300">
                    <Calendar className="w-4 h-4" />
                    {exp.period}
                  </span>
                  <span className="text-dark-500 dark:text-dark-400">{exp.duration}</span>
                </div>
              </div>

              {/* Highlights */}
              {exp.highlights.map((highlight, i) => {
                const style = highlightStyles[i % highlightStyles.length];
                const HighlightIcon = style.icon;
                return (
              <div key={highlight.title} className={`mt-6 p-5 sm:p-6 rounded-xl border ${style.box}`}>
                <div className="flex items-start gap-2 mb-3">
                  <HighlightIcon className={`w-5 h-5 mt-0.5 flex-shrink-0 ${style.iconColor}`} />
                  <h4 className="font-semibold text-dark-900 dark:text-white">
                    {highlight.title}
                  </h4>
                </div>
                <p className="text-dark-700 dark:text-dark-300 leading-relaxed">
                  {highlight.story}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {highlight.results.map((result) => (
                    <span
                      key={result}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/80 dark:bg-dark-800/60 text-sm font-medium text-green-700 dark:text-green-400 border border-green-200/70 dark:border-green-800/40"
                    >
                      <CheckCircle2 className="w-4 h-4" />
                      {result}
                    </span>
                  ))}
                </div>
              </div>
                );
              })}

              {/* Missions */}
              <div className="mt-8 grid md:grid-cols-3 gap-6">
                {exp.sections.map((section) => {
                  const Icon = sectionIcons[section.icon] || Code2;
                  return (
                    <div key={section.title}>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-9 h-9 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
                          <Icon className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                        </div>
                        <h4 className="font-semibold text-dark-900 dark:text-white">
                          {section.title}
                        </h4>
                      </div>
                      <ul className="space-y-3">
                        {section.items.map((item) => (
                          <li key={item} className="flex gap-2.5 text-sm text-dark-600 dark:text-dark-300 leading-relaxed">
                            <span className="mt-2 w-1.5 h-1.5 flex-shrink-0 rounded-full bg-primary-500" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>

              {/* Technologies */}
              <div className="mt-8 pt-6 border-t border-dark-200/60 dark:border-dark-700/60 flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-dark-100 dark:bg-dark-700 text-dark-600 dark:text-dark-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
