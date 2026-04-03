import { createContext, useContext, useState, ReactNode } from "react";

type Lang = "pl" | "en";

const translations = {
  pl: {
    // Navbar
    navServices: "Usługi",
    navHow: "Jak pracuję",
    navAbout: "O mnie",
    navContact: "Kontakt",
    navCta: "Napisz do mnie",

    // Hero
    heroTitle1: "Technologia i ",
    heroHighlight: "bezpieczeństwo",
    heroTitle2: "dla Twojej firmy",
    heroSub: "Rozwiązania, które wspierają codzienną pracę i rozwój. Sieci, monitoring, narzędzia wewnętrzne i strony internetowe.",
    cardNet: "Sieci i Wi-Fi",
    cardNetDesc: "Stabilna sieć i niezawodne Wi-Fi dla Twojego biura.",
    cardMon: "Monitoring",
    cardMonDesc: "Inteligentny monitoring zwiększający bezpieczeństwo obiektu.",
    cardMicro: "Mikroprodukty",
    cardMicroDesc: "Proste narzędzia zamiast skomplikowanych arkuszy.",
    cardWeb: "Strony WWW",
    cardWebDesc: "Nowoczesne strony prezentujące Twoją ofertę.",

    // Problems
    probTitle1: "Pomagam tam, gdzie technologia",
    probHighlight: "zaczyna przeszkadzać",
    probSub: "Zamiast wspierać codzienną pracę — spowalnia, frustruje i generuje dodatkowe koszty.",
    prob1: "Sieć i Wi-Fi działają niestabilnie",
    prob1d: "Słaby zasięg, zrywanie połączeń, przypadkowa konfiguracja albo infrastruktura, która nie nadąża za potrzebami firmy.",
    prob1s: "Projektuję i wdrażam uporządkowane środowiska sieciowe — stabilne, bezpieczne i dopasowane do konkretnego miejsca pracy.",
    prob2: "Monitoring nie daje realnej kontroli",
    prob2d: "Kamery są źle rozmieszczone, podgląd jest niewygodny, a system nie zapewnia oczekiwanego poziomu bezpieczeństwa.",
    prob2s: "Projektuję monitoring tak, aby zwiększał bezpieczeństwo obiektu i zapewniał wygodny dostęp do obrazu oraz nagrań.",
    prob3: "Zbyt wiele rzeczy odbywa się ręcznie",
    prob3d: "Informacje są rozproszone, procesy nieuporządkowane, a codzienna praca zajmuje więcej czasu niż powinna.",
    prob3s: "Tworzę proste narzędzia — panele, formularze, harmonogramy i małe systemy, które porządkują pracę i ograniczają chaos.",
    prob4: "Strona nie komunikuje oferty wystarczająco jasno",
    prob4d: "Użytkownik odwiedza stronę, ale nie rozumie szybko, czym zajmuje się firma i jak wykonać kolejny krok.",
    prob4s: "Tworzę strony, które porządkują komunikację, wzmacniają wiarygodność i ułatwiają kontakt.",
    solutionLabel: "Rozwiązanie",

    // Services
    srvTitle: "Czym mogę",
    srvHighlight: "pomóc",
    srv1: "Sieci firmowe i Wi-Fi",
    srv1d: "Audyt, projekt, konfiguracja i optymalizacja sieci dla biur, lokali usługowych i mniejszych środowisk firmowych.",
    srv2: "Monitoring i bezpieczeństwo",
    srv2d: "Projektowanie i wdrażanie systemów monitoringu, które zwiększają kontrolę i poprawiają bezpieczeństwo.",
    srv3: "Narzędzia wewnętrzne",
    srv3d: "Proste systemy, formularze, panele i rozwiązania wspierające organizację codziennej pracy.",
    srv4: "Strony internetowe",
    srv4d: "Nowoczesne strony, które jasno prezentują ofertę i pomagają budować profesjonalny wizerunek.",
    srv5: "Rozwiązania dedykowane",
    srv5d: "Gdy gotowe narzędzia nie wystarczają — projektuję rozwiązanie odpowiadające konkretnym potrzebom.",
    srv6: "Wsparcie i rozwój",
    srv6d: "Aktualizacje, poprawki, rozbudowa i techniczne wsparcie po wdrożeniu.",

    // How I Work
    howTitle: "Jak",
    howHighlight: "pracuję",
    howSub: "Stawiam na rozwiązania użyteczne, stabilne i dopasowane do konkretnej sytuacji.",
    how1: "Zrozumienie potrzeb",
    how1d: "Najpierw analizuję problem, cele i warunki, w jakich rozwiązanie ma działać.",
    how2: "Właściwy zakres",
    how2d: "Nie proponuję więcej, niż potrzeba. Liczy się sens, użyteczność i możliwość rozwoju.",
    how3: "Stabilność i przejrzystość",
    how3d: "Rozwiązanie ma działać pewnie, być czytelne w obsłudze i wspierać pracę.",
    how4: "Wsparcie po wdrożeniu",
    how4d: "Po zakończeniu projektu możesz wrócić po dalsze zmiany lub wsparcie techniczne.",

    // Trust
    trustTitle: "Kilka słów",
    trustHighlight: "o mnie",
    trustP1: "Zajmuję się technologią dla firm - od sieci i monitoringu, przez wewnętrzne narzędzia, po strony internetowe. Moim celem jest dostarczanie rozwiązań, które rzeczywiście działają i wspierają codzienną pracę.",
    trustP2: "Stawiam na prostotę, użyteczność i stabilność. Nie proponuję więcej niż potrzeba - ale to, co dostarczam, ma działać pewnie i być zrozumiałe dla każdego, kto z tego korzysta.",
    trustP3: "Jeśli szukasz kogoś, kto podejdzie do Twojego problemu konkretnie i bez zbędnych komplikacji - zapraszam do kontaktu.",
    trustCta: "Skontaktuj się ze mną",

    // Contact
    contactTitle: "Porozmawiajmy o",
    contactHighlight: "Twoim projekcie",
    contactSub: "Napisz lub zadzwoń — chętnie omówię, jak mogę pomóc.",
    contactName: "Imię i nazwisko",
    contactEmail: "Email",
    contactPhone: "Telefon",
    contactMessage: "Wiadomość",
    contactNamePh: "Jan Kowalski",
    contactEmailPh: "jan@firma.pl",
    contactPhonePh: "+48 000 000 000",
    contactMessagePh: "Opisz krótko, czego potrzebujesz...",
    contactSend: "Wyślij wiadomość",
    contactOr: "lub skontaktuj się bezpośrednio",

    // Footer
    footerRights: "© {year} Net Solution. Wszelkie prawa zastrzeżone.",
    privacyPolicy: "Polityka prywatności",
    terms: "Regulamin",
  },

  en: {
    navServices: "Services",
    navHow: "How I Work",
    navAbout: "About Me",
    navContact: "Contact",
    navCta: "Get in Touch",
    heroTitle1: "Technology and ",
    heroHighlight: "security",
    heroTitle2: "for your business",
    heroSub: "Solutions that support daily work and growth. Networks, monitoring, internal tools, and websites.",
    cardNet: "Networks & Wi-Fi",
    cardNetDesc: "Stable network and reliable Wi-Fi for your office.",
    cardMon: "Monitoring",
    cardMonDesc: "Smart monitoring enhancing facility security.",
    cardMicro: "Micro-products",
    cardMicroDesc: "Simple tools instead of complex spreadsheets.",
    cardWeb: "Websites",
    cardWebDesc: "Modern websites presenting your offer.",
    probTitle1: "I help where technology",
    probHighlight: "starts getting in the way",
    probSub: "Instead of supporting daily work — it slows down, frustrates, and generates additional costs.",
    prob1: "Network and Wi-Fi are unstable",
    prob1d: "Weak coverage, dropped connections, random configuration, or infrastructure that can't keep up with business needs.",
    prob1s: "I design and implement organized network environments — stable, secure, and tailored to the specific workplace.",
    prob2: "Monitoring doesn't provide real control",
    prob2d: "Cameras are poorly placed, viewing is inconvenient, and the system doesn't provide the expected level of security.",
    prob2s: "I design monitoring to enhance facility security and provide convenient access to footage and recordings.",
    prob3: "Too many things are done manually",
    prob3d: "Information is scattered, processes are disorganized, and daily work takes more time than it should.",
    prob3s: "I create simple tools — panels, forms, schedules, and small systems that organize work and reduce chaos.",
    prob4: "Website doesn't communicate the offer clearly",
    prob4d: "A visitor comes to the site but doesn't quickly understand what the company does and how to take the next step.",
    prob4s: "I create websites that organize communication, strengthen credibility, and facilitate contact.",
    solutionLabel: "Solution",
    srvTitle: "How I can",
    srvHighlight: "help",
    srv1: "Business Networks & Wi-Fi",
    srv1d: "Audit, design, configuration, and optimization of networks for offices, service locations, and smaller business environments.",
    srv2: "Monitoring & Security",
    srv2d: "Design and implementation of monitoring systems that increase control and improve security.",
    srv3: "Internal Tools",
    srv3d: "Simple systems, forms, panels, and solutions supporting daily work organization.",
    srv4: "Business Websites",
    srv4d: "Modern websites that clearly present your offer and help build a professional image.",
    srv5: "Custom Solutions",
    srv5d: "When off-the-shelf tools aren't enough — I design solutions tailored to specific needs.",
    srv6: "Support & Development",
    srv6d: "Updates, fixes, expansion, and technical support after deployment.",
    howTitle: "How I",
    howHighlight: "work",
    howSub: "I focus on solutions that are useful, stable, and tailored to the specific situation.",
    how1: "Understanding needs",
    how1d: "First, I analyze the problem, goals, and conditions in which the solution will operate.",
    how2: "Right scope",
    how2d: "I don't propose more than needed. What matters is purpose, usability, and room for growth.",
    how3: "Stability & clarity",
    how3d: "The solution should work reliably, be clear to use, and support daily work.",
    how4: "Post-deployment support",
    how4d: "After the project is done, you can come back for further changes or technical support.",
    trustTitle: "A few words",
    trustHighlight: "about me",
    trustP1: "I work with technology for businesses - from networks and monitoring, through internal tools, to websites. My goal is to deliver solutions that actually work and support daily operations.",
    trustP2: "I value simplicity, usability, and stability. I don't propose more than needed - but what I deliver should work reliably and be understandable for everyone who uses it.",
    trustP3: "If you're looking for someone who will approach your problem concretely and without unnecessary complications - feel free to reach out.",
    trustCta: "Get in Touch",
    contactTitle: "Let's talk about",
    contactHighlight: "your project",
    contactSub: "Write or call — I'll be happy to discuss how I can help.",
    contactName: "Full name",
    contactEmail: "Email",
    contactPhone: "Phone",
    contactMessage: "Message",
    contactNamePh: "John Smith",
    contactEmailPh: "john@company.com",
    contactPhonePh: "+48 000 000 000",
    contactMessagePh: "Briefly describe what you need...",
    contactSend: "Send message",
    contactOr: "or contact directly",

    // Footer
    footerRights: "© {year} Net Solution. All rights reserved.",
    privacyPolicy: "Privacy Policy",
    terms: "Terms of Service",
  },
} as const;

type Translations = Record<string, string>;

interface LanguageContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "pl",
  setLang: () => {},
  t: translations.pl,
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>("pl");
  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);