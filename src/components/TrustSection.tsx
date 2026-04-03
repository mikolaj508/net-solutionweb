import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
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
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              {t.trustTitle} <span className="text-gradient">{t.trustHighlight}</span>
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-4">
              {t.trustP1}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {t.trustP2}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {t.trustP3}
            </p>

            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary/10 border border-primary/30 text-primary font-medium hover:bg-primary/20 transition-all duration-300 group"
            >
              {t.trustCta}
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};