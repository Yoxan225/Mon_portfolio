import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Clock, Calendar, ArrowRight } from 'lucide-react';
import { blogArticles } from '../data/portfolioData';

const Blog: React.FC = () => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

  const categoryColors: { [key: string]: string } = {
    Architecture: 'bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300',
    DevOps: 'bg-accent-100 dark:bg-accent-900/30 text-accent-700 dark:text-accent-300',
    'Machine Learning': 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300',
    Frontend: 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300',
  };

  return (
    <section id="blog" className="relative py-20 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-primary-500/5 to-transparent" />
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
            <BookOpen className="w-4 h-4" />
            Blog
          </motion.span>
          <h2 className="section-title mb-4">
            Mes articles
          </h2>
          <p className="section-subtitle">
            Partage de connaissances et retours d'expérience
          </p>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {blogArticles.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -3 }}
              className="group cursor-pointer"
            >
              <div className="glass-card overflow-hidden hover:border-primary-500/50 transition-colors">
                {/* Image Placeholder */}
                <div className="relative aspect-video bg-gradient-to-br from-primary-500/10 to-accent-500/10 overflow-hidden">
                  <img
                    src={article.image || `https://images.pexels.com/photo-${3861954897 + article.id}/pexels-photo-${3861954897 + article.id}.jpeg?auto=compress&cs=tinysrgb&w=600`}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  {/* Category Badge */}
                  <span className={`absolute top-4 left-4 badge ${categoryColors[article.category] || categoryColors.Architecture}`}>
                    {article.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Meta */}
                  <div className="flex items-center gap-4 text-xs text-dark-500 dark:text-dark-400 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {formatDate(article.date)}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {article.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {article.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-dark-600 dark:text-dark-400 mb-4 line-clamp-2">
                    {article.excerpt}
                  </p>

                  {/* Read More */}
                  <div className="flex items-center gap-2 text-primary-600 dark:text-primary-400 font-medium text-sm group-hover:gap-3 transition-all">
                    <span>Lire l'article</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="btn-secondary"
          >
            <span className="flex items-center gap-2">
              Voir tous les articles
              <ArrowRight className="w-4 h-4" />
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
