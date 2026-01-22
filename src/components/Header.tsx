import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#audience', label: t('nav.audience') },
    { href: '#services', label: t('nav.services') },
    { href: '#process', label: t('nav.process') },
    { href: '#contact', label: t('nav.contact') },
  ];

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-2' : 'py-4'
      }`}
    >
      <div className="section-container">
        <nav className={`glass-nav rounded-2xl px-6 py-3 flex items-center justify-between transition-all duration-300 ${
          isScrolled ? 'shadow-lg' : ''
        }`}>
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <div className="w-10 h-10 neo-card flex items-center justify-center">
              <span className="text-foreground font-display font-bold text-lg">N</span>
            </div>
            <span className="font-display font-semibold text-lg text-foreground">Net-Solution</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Right side: Language + Mobile menu */}
          <div className="flex items-center gap-4">
            {/* Language switcher */}
            <div className="flex items-center gap-1 neo-card-inset p-1">
              <button
                onClick={() => setLanguage('pl')}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                  language === 'pl'
                    ? 'neo-button text-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                PL
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                  language === 'en'
                    ? 'neo-button text-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                EN
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-foreground neo-button"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-2 overflow-hidden"
            >
              <div className="neo-card p-4 space-y-2">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={handleNavClick}
                    className="block py-3 px-4 text-foreground font-medium hover:bg-secondary/50 rounded-xl transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
