import { useLanguage } from "@/contexts/LanguageContext";

export const Footer = () => {
  const { t } = useLanguage();

  const links = [
    { label: t.navServices, href: "#uslugi" },
    { label: t.navHow, href: "#jak-pracuje" },
    { label: t.navAbout, href: "#o-mnie" },
    { label: t.navContact, href: "#kontakt" },
  ];

  return (
    <footer className="border-t border-border/50 py-8 px-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <img
            src={`${import.meta.env.BASE_URL}NetSolLogo.png`}
            alt="Net Solution logo"
            className="h-6 w-auto object-contain"
          />
          <span className="text-sm text-muted-foreground">
            {t.footerRights.replace("{year}", new Date().getFullYear().toString())}
          </span>
        </div>

        <div className="flex gap-6 flex-wrap justify-center">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}

          <a
            href="#"
            className="text-xs text-muted-foreground hover:text-primary transition-colors"
          >
            {t.privacyPolicy}
          </a>

          <a
            href="#"
            className="text-xs text-muted-foreground hover:text-primary transition-colors"
          >
            {t.terms}
          </a>
        </div>
      </div>
    </footer>
  );
};

