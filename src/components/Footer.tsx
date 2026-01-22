import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border/30">
      <div className="section-container">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 neo-card flex items-center justify-center">
              <span className="text-foreground font-display font-bold text-sm">N</span>
            </div>
            <span className="font-display font-semibold text-foreground">Net-Solution</span>
          </div>

          <p className="text-muted-foreground text-sm">
            © {currentYear} Net-Solution. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;