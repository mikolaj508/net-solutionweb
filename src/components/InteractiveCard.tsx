import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface InteractiveCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  activeScene: React.ReactNode;
  inactiveScene: React.ReactNode;
}

export const InteractiveCard = ({
  title,
  description,
  icon,
  activeScene,
  inactiveScene,
}: InteractiveCardProps) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <motion.div
      className="glass-card cursor-pointer group relative overflow-hidden"
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      onClick={() => setIsActive((p) => !p)}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative h-48 mb-4 rounded-xl overflow-hidden bg-secondary/50">
        <AnimatePresence mode="wait">
          {isActive ? (
            <motion.div
              key="active"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              {activeScene}
            </motion.div>
          ) : (
            <motion.div
              key="inactive"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0"
            >
              {inactiveScene}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="flex items-center gap-3 mb-2">
        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
          {icon}
        </div>
        <h3 className="font-display font-semibold text-foreground">{title}</h3>
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
    </motion.div>
  );
};
