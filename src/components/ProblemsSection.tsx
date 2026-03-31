import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { WifiOff, EyeOff, FileSpreadsheet, MousePointerClick } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const ProblemsSection = () => {
  const { t } = useLanguage();

  const problems = [
    { icon: <WifiOff size={22} />, problem: t.prob1, detail: t.prob1d, solution: t.prob1s },
    { icon: <EyeOff size={22} />, problem: t.prob2, detail: t.prob2d, solution: t.prob2s },
    { icon: <FileSpreadsheet size={22} />, problem: t.prob3, detail: t.prob3d, solution: t.prob3s },
    { icon: <MousePointerClick size={22} />, problem: t.prob4, detail: t.prob4d, solution: t.prob4s },
  ];

  return (
    <section id="problemy" className="section-padding relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/3 rounded-full blur-3xl" />
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            {t.probTitle1}<br />
            <span className="text-gradient">{t.probHighlight}</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">{t.probSub}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {problems.map((item, i) => (
            <ProblemCard key={i} item={item} index={i} solutionLabel={t.solutionLabel} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProblemCard = ({ item, index, solutionLabel }: { item: { icon: React.ReactNode; problem: string; detail: string; solution: string }; index: number; solutionLabel: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="glass-card"
    >
      <div className="w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center text-destructive mb-4">
        {item.icon}
      </div>
      <h3 className="font-display font-semibold text-foreground mb-2">{item.problem}</h3>
      <p className="text-sm text-muted-foreground mb-4">{item.detail}</p>
      <div className="border-t border-border/50 pt-4">
        <span className="text-xs font-medium text-primary uppercase tracking-wider">{solutionLabel}</span>
        <p className="text-sm text-secondary-foreground mt-1">{item.solution}</p>
      </div>
    </motion.div>
  );
};


