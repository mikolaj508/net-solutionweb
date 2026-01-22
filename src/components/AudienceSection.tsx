import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Building2, Rocket, User, Briefcase } from 'lucide-react';

const AudienceSection: React.FC = () => {
  const { t } = useLanguage();

  const audiences = [
    { icon: Building2, title: t('audience.small'), desc: t('audience.small.desc') },
    { icon: Rocket, title: t('audience.startups'), desc: t('audience.startups.desc') },
    { icon: User, title: t('audience.personal'), desc: t('audience.personal.desc') },
    { icon: Briefcase, title: t('audience.freelancers'), desc: t('audience.freelancers.desc') },
  ];

  return (
    <section id="audience" className="py-24 relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-foreground">
            {t('audience.title')}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t('audience.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="neo-card card-hover rounded-2xl p-6 text-center"
            >
              <div className="w-14 h-14 mx-auto mb-5 neo-card-inset rounded-xl flex items-center justify-center">
                <item.icon className="w-7 h-7 text-foreground/70" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3 text-foreground">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;
