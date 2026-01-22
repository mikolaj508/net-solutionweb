import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Heart, Puzzle, HeadphonesIcon } from 'lucide-react';

const TrustSection: React.FC = () => {
  const { t } = useLanguage();

  const reasons = [
    { icon: Heart, title: t('trust1.title'), desc: t('trust1.desc') },
    { icon: Puzzle, title: t('trust2.title'), desc: t('trust2.desc') },
    { icon: HeadphonesIcon, title: t('trust3.title'), desc: t('trust3.desc') },
  ];

  return (
    <section id="trust" className="py-24 relative">
      <div className="section-container relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-foreground">
            {t('trust.title')}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="neo-card card-hover rounded-2xl p-8 text-center"
            >
              <div className="w-16 h-16 mx-auto mb-6 neo-card rounded-2xl flex items-center justify-center">
                <reason.icon className="w-8 h-8 text-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                {reason.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {reason.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
