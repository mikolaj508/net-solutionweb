import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Target, Users, Wrench, Settings2 } from 'lucide-react';

const AdvantagesSection: React.FC = () => {
  const { t } = useLanguage();

  const advantages = [
    { 
      icon: Target, 
      title: t('advantage1.title'), 
      desc: t('advantage1.desc'),
      quote: t('advantage1.quote'),
      featured: true,
    },
    { 
      icon: Users, 
      title: t('advantage2.title'), 
      desc: t('advantage2.desc'),
    },
    { 
      icon: Wrench, 
      title: t('advantage3.title'), 
      desc: t('advantage3.desc'),
    },
    { 
      icon: Settings2, 
      title: t('advantage4.title'), 
      desc: t('advantage4.desc'),
    },
  ];

  return (
    <section id="advantages" className="py-24 relative overflow-hidden">
      <div className="section-container relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-foreground">
            {t('advantages.title')}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t('advantages.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {advantages.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="neo-card card-hover rounded-2xl p-6 flex flex-col h-full"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 neo-card-inset rounded-xl flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-foreground/70" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
              {item.quote && (
                <blockquote className="neo-card-inset rounded-xl p-4 border-l-4 border-foreground/30 mt-4">
                  <p className="text-foreground/80 text-sm italic leading-relaxed">
                    "{item.quote}"
                  </p>
                </blockquote>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
