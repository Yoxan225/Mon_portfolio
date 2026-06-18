import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { TrendingUp, Code, Cpu, Heart } from 'lucide-react';

interface CounterProps {
  target: number;
  suffix?: string;
  duration?: number;
}

const AnimatedCounter: React.FC<CounterProps> = ({ target, suffix = '', duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * target));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, target, duration]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
};

const Statistics: React.FC = () => {
  const stats = [
    {
      value: 15,
      suffix: '+',
      label: 'Projets réalisés',
      description: 'Académiques & personnels',
      icon: Code,
      color: 'primary',
    },
    {
      value: 20,
      suffix: 'K+',
      label: 'Lignes de code',
      description: 'Production & expérimentation',
      icon: TrendingUp,
      color: 'accent',
    },
    {
      value: 10,
      suffix: '+',
      label: 'Technologies',
      description: 'Maîtrisées',
      icon: Cpu,
      color: 'success',
    },
    {
      value: 100,
      suffix: '%',
      label: 'Passion',
      description: 'Pour le code',
      icon: Heart,
      color: 'warning',
    },
  ];

  const colorClasses: { [key: string]: { gradient: string; iconBg: string; glow: string } } = {
    primary: {
      gradient: 'from-primary-500 to-primary-600',
      iconBg: 'bg-primary-100 dark:bg-primary-900/30',
      glow: 'shadow-primary-500/20',
    },
    accent: {
      gradient: 'from-accent-500 to-accent-600',
      iconBg: 'bg-accent-100 dark:bg-accent-900/30',
      glow: 'shadow-accent-500/20',
    },
    success: {
      gradient: 'from-green-500 to-green-600',
      iconBg: 'bg-green-100 dark:bg-green-900/30',
      glow: 'shadow-green-500/20',
    },
    warning: {
      gradient: 'from-amber-500 to-amber-600',
      iconBg: 'bg-amber-100 dark:bg-amber-900/30',
      glow: 'shadow-amber-500/20',
    },
  };

  return (
    <section className="relative py-20 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-primary-500/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => {
            const colors = colorClasses[stat.color];
            const Icon = stat.icon;

            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="relative group"
              >
                <div className="glass-card p-6 sm:p-8 text-center overflow-hidden">
                  {/* Glow background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                  {/* Icon */}
                  <motion.div
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-16 h-16 mx-auto mb-4 rounded-2xl ${colors.iconBg} flex items-center justify-center`}
                  >
                    <Icon className={`w-8 h-8 bg-gradient-to-br ${colors.gradient} bg-clip-text text-transparent`} style={{ color: undefined }} />
                    <div className={`absolute w-16 h-16 rounded-2xl ${colors.gradient} opacity-20 blur-sm`} />
                  </motion.div>

                  {/* Counter */}
                  <div className="text-4xl sm:text-5xl font-bold text-dark-900 dark:text-white mb-2">
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  </div>

                  {/* Label */}
                  <h3 className="text-lg font-semibold text-dark-800 dark:text-dark-200 mb-1">
                    {stat.label}
                  </h3>
                  <p className="text-sm text-dark-500 dark:text-dark-400">
                    {stat.description}
                  </p>

                  {/* Decorative corner accent */}
                  <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${colors.gradient} rounded-full opacity-10 blur-3xl group-hover:opacity-20 transition-opacity`} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
