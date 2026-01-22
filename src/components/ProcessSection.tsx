import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { MessageCircle, Search, PenTool, TestTube, Rocket } from 'lucide-react';

const ProcessSection: React.FC = () => {
  const { t } = useLanguage();

  const steps = [
    { icon: MessageCircle, title: t('process1.title'), desc: t('process1.desc'), step: '01' },
    { icon: Search, title: t('process2.title'), desc: t('process2.desc'), step: '02' },
    { icon: PenTool, title: t('process3.title'), desc: t('process3.desc'), step: '03' },
    { icon: TestTube, title: t('process4.title'), desc: t('process4.desc'), step: '04' },
    { icon: Rocket, title: t('process5.title'), desc: t('process5.desc'), step: '05' },
  ];

  return (
    <section id="process" className="py-24 relative overflow-hidden">
      {/* Background line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border/50 to-transparent hidden lg:block" />
      
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-foreground">
            {t('process.title')}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t('process.subtitle')}
          </p>
        </motion.div>

        <div className="relative">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`flex items-center gap-8 mb-8 last:mb-0 ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}
            >
              <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                <div className={`neo-card rounded-2xl p-6 inline-block ${
                  index % 2 === 0 ? 'lg:ml-auto' : 'lg:mr-auto'
                }`}>
                  <div className={`flex items-center gap-4 mb-3 ${
                    index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                  }`}>
                    <span className="font-display text-3xl font-bold text-muted-foreground/30">
                      {step.step}
                    </span>
                    <h3 className="font-display text-xl font-semibold text-foreground">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
                    {step.desc}
                  </p>
                </div>
              </div>

              {/* Center icon */}
              <div className="hidden lg:flex flex-shrink-0 w-14 h-14 neo-card rounded-full items-center justify-center z-10">
                <step.icon className="w-6 h-6 text-foreground" />
              </div>

              <div className="flex-1 hidden lg:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
