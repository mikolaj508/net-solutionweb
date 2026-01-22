import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Target, Award } from 'lucide-react';

const HeroSection: React.FC = () => {
  const { t } = useLanguage();

  const benefits = [
    { icon: Sparkles, text: t('hero.benefit1') },
    { icon: Target, text: t('hero.benefit2') },
    { icon: Award, text: t('hero.benefit3') },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-12">
      {/* Floating neomorphism elements */}
      <motion.div
        className="absolute top-32 right-[15%] w-20 h-20 neo-card rounded-2xl float hidden lg:block"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.6, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-8 h-8 rounded-lg bg-muted" />
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-40 left-[10%] w-16 h-16 neo-card rounded-xl float-delayed hidden lg:block"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.6, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-6 h-6 rounded-full bg-muted" />
        </div>
      </motion.div>

      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-foreground"
          >
            {t('hero.title')}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            {t('hero.subtitle')}
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-12"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 neo-button text-foreground font-semibold hover:scale-105 transition-transform"
            >
              {t('hero.cta')}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4 sm:gap-6"
          >
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="neo-card px-5 py-3 rounded-xl flex items-center gap-3 card-hover"
              >
                <benefit.icon className="w-5 h-5 text-foreground/70" />
                <span className="text-sm font-medium text-foreground">{benefit.text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full neo-card-inset flex items-start justify-center p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-3 bg-muted-foreground/50 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
