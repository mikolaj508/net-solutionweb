import { motion } from "framer-motion";
import { Wifi, Shield, Boxes, Globe } from "lucide-react";
import { InteractiveCard } from "./InteractiveCard";
import {
  BuildingSolid,
  BuildingNetworkXray,
  BuildingMonitoringXray,
} from "./scenes/BuildingOffice";
import { MicrotoolsScene, WebsiteScene } from "./scenes/InteractiveScenes";
import { useLanguage } from "@/contexts/LanguageContext";

export const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex flex-col justify-center section-padding pt-32">
      <div className="absolute top-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float-slow" />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight">
            <span className="text-foreground">{t.heroTitle1}</span>
            <span className="text-gradient">{t.heroHighlight}</span>
            <br />
            <span className="text-foreground">{t.heroTitle2}</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            {t.heroSub}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          <InteractiveCard
            title={t.cardNet}
            description={t.cardNetDesc}
            icon={<Wifi size={18} />}
            inactiveScene={<BuildingSolid />}
            activeScene={<BuildingNetworkXray />}
          />
          <InteractiveCard
            title={t.cardMon}
            description={t.cardMonDesc}
            icon={<Shield size={18} />}
            inactiveScene={<BuildingSolid />}
            activeScene={<BuildingMonitoringXray />}
          />
          <InteractiveCard
            title={t.cardMicro}
            description={t.cardMicroDesc}
            icon={<Boxes size={18} />}
            inactiveScene={<MicrotoolsScene active={false} />}
            activeScene={<MicrotoolsScene active={true} />}
          />
          <InteractiveCard
            title={t.cardWeb}
            description={t.cardWebDesc}
            icon={<Globe size={18} />}
            inactiveScene={<WebsiteScene active={false} />}
            activeScene={<WebsiteScene active={true} />}
          />
        </motion.div>
      </div>
    </section>
  );
};


