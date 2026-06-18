import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Code2, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { personalInfo, navigation } from '../data/portfolioData';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: personalInfo.github, label: 'GitHub' },
    { icon: Linkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
    { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email' },
  ];

  return (
    <footer className="relative pt-20 pb-8 overflow-hidden">
      {/* Gradient Top Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent" />

      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-dark-100/50 dark:from-dark-900/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <motion.a
              href="#accueil"
              className="inline-flex items-center gap-2 mb-4"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center shadow-lg shadow-primary-500/20">
                <Code2 className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-lg text-dark-900 dark:text-white">
                Yoxan<span className="text-primary-500">.</span>dev
              </span>
            </motion.a>
            <p className="text-dark-500 dark:text-dark-400 text-sm leading-relaxed mb-4">
              Étudiant en Génie Logiciel passionné par l'IA, le développement Full Stack et le Cloud Computing.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-lg bg-dark-100 dark:bg-dark-800 flex items-center justify-center text-dark-600 dark:text-dark-400 hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="text-center md:text-left">
            <h3 className="font-semibold text-dark-900 dark:text-white mb-4">Navigation</h3>
            <ul className="space-y-2">
              {navigation.slice(0, 5).map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sm text-dark-500 dark:text-dark-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-dark-200/50 dark:border-dark-700/50">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-sm text-dark-500 dark:text-dark-400 flex items-center gap-1">
              © {currentYear} {personalInfo.name.split(' ').slice(0, 2).join(' ')}.
              Fait avec <Heart className="w-4 h-4 text-red-500 inline animate-pulse" /> en Côte d'Ivoire
            </p>

            {/* Tech Stack */}
            <div className="flex items-center gap-4 text-xs text-dark-400 dark:text-dark-500">
              <span className="flex items-center gap-1">
                Built with
                <span className="font-medium text-dark-600 dark:text-dark-300">React</span>
                <span className="text-dark-300 dark:text-dark-600">&</span>
                <span className="font-medium text-dark-600 dark:text-dark-300">Tailwind</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
