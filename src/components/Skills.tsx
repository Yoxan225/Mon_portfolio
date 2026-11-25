import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Zap, Globe, Code2, Brain, Cloud, Database, ChevronDown } from 'lucide-react';
import { skillsCategories, technologyCount } from '../data/portfolioData';

const Skills: React.FC = () => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(skillsCategories[0].category);

  const categoryIcons: { [key: string]: React.ElementType } = {
    'Développement Web': Globe,
    'Développement Logiciel': Code2,
    'Intelligence Artificielle': Brain,
    'Cloud & DevOps': Cloud,
    'Bases de Données': Database,
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="competences" className="relative py-20 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary-500/10 via-transparent to-transparent" />
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium mb-4"
          >
            <Zap className="w-4 h-4" />
            Compétences
          </motion.span>
          <h2 className="section-title mb-4">
            Technologies maîtrisées
          </h2>
          <p className="section-subtitle">
            Un aperçu de mon stack technique et de mes domaines d'expertise
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-4"
        >
          {skillsCategories.map((category) => {
            const CategoryIcon = categoryIcons[category.category] || Code2;
            const isExpanded = expandedCategory === category.category;

            return (
              <motion.div
                key={category.category}
                variants={itemVariants}
                className="glass-card overflow-hidden"
              >
                {/* Category Header */}
                <button
                  onClick={() => setExpandedCategory(isExpanded ? null : category.category)}
                  className="w-full px-6 py-5 flex items-center justify-between hover:bg-dark-100/50 dark:hover:bg-dark-700/30 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center shadow-lg shadow-primary-500/20">
                      <CategoryIcon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-lg font-semibold text-dark-900 dark:text-white">
                        {category.category}
                      </h3>
                      <p className="text-sm text-dark-500 dark:text-dark-400">
                        {category.skills.length} technologies
                      </p>
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-8 h-8 rounded-lg bg-dark-100 dark:bg-dark-700 flex items-center justify-center"
                  >
                    <ChevronDown className="w-5 h-5 text-dark-500 dark:text-dark-400" />
                  </motion.div>
                </button>

                {/* Skills Content */}
                <motion.div
                  initial={false}
                  animate={{
                    height: isExpanded ? 'auto' : 0,
                    opacity: isExpanded ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 pt-2">
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                      {category.skills.map((skill, index) => {
                        const SkillIcon = skill.icon;
                        return (
                          <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ y: -4 }}
                            className="relative group p-4 rounded-xl bg-white dark:bg-dark-800/50 border border-dark-200/50 dark:border-dark-700/50 hover:border-primary-500/50 transition-colors duration-300"
                          >
                            {/* Glow Effect */}
                            <div
                              className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                              style={{
                                background: `linear-gradient(135deg, ${skill.color}14, transparent)`,
                              }}
                            />

                            <div className="relative flex flex-col items-center gap-3 text-center">
                              <div
                                className="w-14 h-14 rounded-xl flex items-center justify-center"
                                style={{ backgroundColor: `${skill.color}1f` }}
                              >
                                <SkillIcon
                                  className="w-7 h-7"
                                  style={{ color: skill.color }}
                                />
                              </div>
                              <span className="text-sm font-medium text-dark-800 dark:text-dark-200">
                                {skill.name}
                              </span>
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Skill Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-dark-500 dark:text-dark-400 text-sm">
            <span className="font-semibold text-primary-600 dark:text-primary-400">
              {technologyCount}
            </span>{' '}
            technologies couvrant le développement web, logiciel, IA, cloud et bases de données.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
