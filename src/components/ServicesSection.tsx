import { motion } from "framer-motion";
import { Wifi, Shield, Boxes, Globe, Puzzle, Wrench } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const ServicesSection = () => {
  const { t } = useLanguage();

  const services = [
    { icon: <Wifi size={22} />, title: t.srv1, desc: t.srv1d },
    { icon: <Shield size={22} />, title: t.srv2, desc: t.srv2d },
    { icon: <Boxes size={22} />, title: t.srv3, desc: t.srv3d },
    { icon: <Globe size={22} />, title: t.srv4, desc: t.srv4d },
    { icon: <Puzzle size={22} />, title: t.srv5, desc: t.srv5d },
    { icon: <Wrench size={22} />, title: t.srv6, desc: t.srv6d },
  ];

  return (
    <section id="uslugi" className="section-padding relative">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}

          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            {t.srvTitle} <span className="text-gradient">{t.srvHighlight}</span>
          </h2>
          
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass-card group"
            >
              <div className="w-11 h-11 rounded-xl bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center text-primary mb-4 transition-colors duration-300">
                {s.icon}
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


