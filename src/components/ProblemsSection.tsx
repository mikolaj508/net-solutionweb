import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { AlertCircle, CheckCircle2 } from 'lucide-react';

const ProblemsSection: React.FC = () => {
  const { t } = useLanguage();

  const problems = [
    {
      problem: t('problem1.title'),
      problemDesc: t('problem1.desc'),
      solution: t('solution1'),
    },
    {
      problem: t('problem2.title'),
      problemDesc: t('problem2.desc'),
      solution: t('solution2'),
    },
    {
      problem: t('problem3.title'),
      problemDesc: t('problem3.desc'),
      solution: t('solution3'),
    },
  ];

  return (
    <section id="problems" className="py-24 relative">
      <div className="section-container relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-foreground">
            {t('problems.title')}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t('problems.subtitle')}
          </p>
        </motion.div>

        <div className="space-y-8">
          {problems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="neo-card rounded-2xl p-6 sm:p-8"
            >
              <div className="grid md:grid-cols-2 gap-6">
                {/* Problem */}
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 neo-card-inset rounded-xl flex items-center justify-center flex-shrink-0">
                      <AlertCircle className="w-5 h-5 text-destructive/70" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                        {item.problem}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {item.problemDesc}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Solution */}
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 neo-card rounded-xl flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-foreground/70" />
                    </div>
                    <div>
                      <h4 className="font-display text-sm font-medium text-foreground/70 mb-2">
                        {t('language') === 'en' ? 'Solution' : 'Rozwiązanie'}
                      </h4>
                      <p className="text-foreground text-sm leading-relaxed">
                        {item.solution}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
