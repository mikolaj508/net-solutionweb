import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Sun, Moon, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { label: t.navServices, href: "#uslugi" },
    { label: t.navHow, href: "#jak-pracuje" },
    { label: t.navAbout, href: "#o-mnie" },
    { label: t.navContact, href: "#kontakt" },
  ];

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-strong py-3" : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
        <img
  src="/net-solutionweb/NetSolLogo.png"
  alt="Net Solution logo"
  className="h-8 w-auto object-contain"
 />
          <span className="font-display font-semibold text-lg text-foreground">
            Net Solution
          </span>
        </a>

        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 font-medium"
            >
              {link.label}
            </a>
          ))}

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="w-8 h-8 rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          {/* Language toggle */}
          <button
            onClick={() => setLang(lang === "pl" ? "en" : "pl")}
            className="flex items-center gap-1 text-xs font-medium text-muted-foreground hover:text-primary transition-colors px-2 py-1 rounded-lg"
          >
            <Globe size={14} />
            {lang === "pl" ? "EN" : "PL"}
          </button>

          <a
            href="#kontakt"
            className="px-5 py-2 rounded-xl bg-primary/10 border border-primary/30 text-primary text-sm font-medium hover:bg-primary/20 transition-all duration-300"
          >
            {t.navCta}
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-foreground"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden glass-strong mt-2 mx-4 rounded-2xl p-4 space-y-3"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block text-sm text-muted-foreground hover:text-primary transition-colors py-2"
            >
              {link.label}
            </a>
          ))}
          <div className="flex items-center gap-3 pt-2 border-t border-border/50">
            <button onClick={toggleTheme} className="text-muted-foreground hover:text-primary">
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <button
              onClick={() => setLang(lang === "pl" ? "en" : "pl")}
              className="text-xs font-medium text-muted-foreground hover:text-primary flex items-center gap-1"
            >
              <Globe size={14} />
              {lang === "pl" ? "EN" : "PL"}
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};
