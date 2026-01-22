import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Globe, Zap, FileText, Layers, Code2, RefreshCw } from 'lucide-react';

const ServicesSection: React.FC = () => {
  const { t } = useLanguage();

  const services = [
    { icon: Globe, title: t('service1.title'), desc: t('service1.desc') },
    { icon: Zap, title: t('service2.title'), desc: t('service2.desc') },
    { icon: FileText, title: t('service3.title'), desc: t('service3.desc') },
    { icon: Layers, title: t('service4.title'), desc: t('service4.desc') },
    { icon: Code2, title: t('service5.title'), desc: t('service5.desc') },
    { icon: RefreshCw, title: t('service6.title'), desc: t('service6.desc') },
  ];

  return (
    <section id="services" className="py-24 relative">
      <div className="section-container relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-foreground">
            {t('services.title')}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group neo-card card-hover rounded-2xl p-6 relative overflow-hidden"
            >
              <div className="relative">
                <div className="w-12 h-12 mb-5 neo-card-inset rounded-xl flex items-center justify-center">
                  <service.icon className="w-6 h-6 text-foreground/70" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
