import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowDown, Sparkles, Zap, Brain, Code } from 'lucide-react';
import { personalInfo, stats } from '../data/portfolioData';
import ProfilePhoto from './ProfilePhoto';

const Hero: React.FC = () => {
  const [typedText, setTypedText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const words = ['Full Stack', 'Intelligence Artificielle', 'Cloud Computing', 'Génie Logiciel'];

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    let charIndex = 0;
    let isDeleting = false;

    const typeEffect = setInterval(() => {
      if (!isDeleting) {
        if (charIndex <= currentWord.length) {
          setTypedText(currentWord.substring(0, charIndex));
          charIndex++;
        } else {
          setTimeout(() => {
            isDeleting = true;
          }, 1000);
        }
      } else {
        if (charIndex >= 0) {
          setTypedText(currentWord.substring(0, charIndex));
          charIndex--;
        }
        if (charIndex < 0) {
          isDeleting = false;
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, 100);

    return () => clearInterval(typeEffect);
  }, [currentWordIndex]);

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = `/assets/cv/${personalInfo.cvName}`;
    link.download = personalInfo.cvName;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToProjects = () => {
    const element = document.getElementById('projets');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary-500/10 via-transparent to-transparent" />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
          style={{
            backgroundImage: `linear-gradient(rgba(99, 102, 241, 0.5) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(99, 102, 241, 0.5) 1px, transparent 1px)`,
            backgroundSize: '100px 100px',
          }}
        />

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-primary-500/30"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: Math.random() * 0.5 + 0.5,
            }}
            animate={{
              y: [null, Math.random() * -200],
              opacity: [0.3, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium mb-6"
            >
              <Sparkles className="w-4 h-4" />
              <span>Disponible pour opportunités</span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-dark-900 dark:text-white mb-4 leading-tight"
            >
              {personalInfo.name.split(' ').slice(0, 2).join(' ')}
              <br />
              <span className="gradient-text-animated">
                {personalInfo.name.split(' ').slice(2).join(' ')}
              </span>
            </motion.h1>

            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl sm:text-2xl text-dark-600 dark:text-dark-300 mb-2"
            >
              {personalInfo.title}
            </motion.div>

            {/* Typing Effect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex items-center justify-center lg:justify-start gap-2 text-lg sm:text-xl text-dark-500 dark:text-dark-400 mb-6"
            >
              <span className="w-6 h-6 rounded-lg bg-accent-500/20 flex items-center justify-center">
                <Zap className="w-3.5 h-3.5 text-accent-500" />
              </span>
              <span>Spécialisé en</span>
              <span className="font-semibold text-primary-600 dark:text-primary-400">
                {typedText}
                <span className="animate-pulse">|</span>
              </span>
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-base sm:text-lg text-dark-500 dark:text-dark-400 mb-8 max-w-xl mx-auto lg:mx-0"
            >
              {personalInfo.tagline}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12"
            >
              <button onClick={scrollToProjects} className="btn-primary w-full sm:w-auto">
                <span className="flex items-center gap-2">
                  Découvrir mes projets
                  <ArrowDown className="w-4 h-4" />
                </span>
              </button>
              <button onClick={downloadCV} className="btn-secondary w-full sm:w-auto">
                <Download className="w-5 h-5 mr-2" />
                Télécharger mon CV
              </button>
              <button onClick={scrollToContact} className="btn-ghost w-full sm:w-auto">
                Me contacter
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                  className="glass-card p-4 text-center group hover:shadow-primary-500/20 transition-all"
                >
                  <div className="text-2xl sm:text-3xl font-bold gradient-text mb-1">
                    {stat.value}{stat.suffix}
                  </div>
                  <div className="text-xs sm:text-sm text-dark-500 dark:text-dark-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Photo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center order-1 lg:order-2"
          >
            <ProfilePhoto />
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-dark-400 dark:text-dark-500">Défiler</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-dark-300 dark:border-dark-600 flex items-start justify-center p-1"
          >
            <motion.div className="w-1.5 h-2.5 rounded-full bg-primary-500" />
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Icons */}
      <motion.div
        animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 left-10 hidden xl:block"
      >
        <div className="w-16 h-16 rounded-2xl glass-card flex items-center justify-center shadow-lg">
          <Brain className="w-8 h-8 text-primary-500" />
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute top-1/3 right-10 hidden xl:block"
      >
        <div className="w-16 h-16 rounded-2xl glass-card flex items-center justify-center shadow-lg">
          <Code className="w-8 h-8 text-accent-500" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
