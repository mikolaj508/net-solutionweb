import { motion } from "framer-motion";
import { ArrowRight, User } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const TrustSection = () => {
  const { t } = useLanguage();

  
  return (
    <section id="o-mnie" className="section-padding relative">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-strong rounded-3xl p-8 md:p-12"
        >
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
            {/* Photo placeholder */}
            <div className="shrink-0">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border border-border/50 flex items-center justify-center overflow-hidden">
                <User size={48} className="text-muted-foreground" />
              </div>
            </div>

            <div className="text-center md:text-left flex-1">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 mx-auto md:mx-0">
                <span className="text-primary-foreground font-display font-bold text-base">NS</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                {t.trustTitle} <span className="text-gradient">{t.trustHighlight}</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">{t.trustP1}</p>
              <p className="text-muted-foreground leading-relaxed mb-4">{t.trustP2}</p>
              <p className="text-muted-foreground leading-relaxed mb-6">{t.trustP3}</p>

              <a
                href="#kontakt"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary/10 border border-primary/30 text-primary font-medium hover:bg-primary/20 transition-all duration-300 group"
              >
                {t.trustCta}
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};


