import { motion } from "framer-motion";
import { Search, Target, ShieldCheck, Headphones } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const HowIWorkSection = () => {
  const { t } = useLanguage();

  const steps = [
    { icon: <Search size={20} />, title: t.how1, desc: t.how1d },
    { icon: <Target size={20} />, title: t.how2, desc: t.how2d },
    { icon: <ShieldCheck size={20} />, title: t.how3, desc: t.how3d },
    { icon: <Headphones size={20} />, title: t.how4, desc: t.how4d },
  ];

  return (
    <section id="jak-pracuje" className="section-padding relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            {t.howTitle} <span className="text-gradient">{t.howHighlight}</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">{t.howSub}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card text-center relative"
            >
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-px bg-border" />
              )}
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
                {step.icon}
              </div>
              <span className="text-xs font-mono text-muted-foreground mb-2 block">0{i + 1}</span>
              <h3 className="font-display font-semibold text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};