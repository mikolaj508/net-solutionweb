import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'pl' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  pl: {
    // Hero
    'hero.title': 'Strony internetowe, które wspierają rozwój Twojego biznesu',
    'hero.subtitle': 'Strona, która porządkuje ofertę i wzmacnia profesjonalny wizerunek marki.',
    'hero.cta': 'Porozmawiajmy o Twojej stronie',
    'hero.benefit1': 'Jasny przekaz',
    'hero.benefit2': 'Profesjonalny wizerunek',
    'hero.benefit3': 'Realny cel',
    
    // Target audience
    'audience.title': 'Dla kogo jest ta usługa',
    'audience.subtitle': 'Jeśli rozpoznajesz się w którymś z tych opisów — ta oferta jest dla Ciebie',
    'audience.small': 'Małe firmy',
    'audience.small.desc': 'Potrzebujesz profesjonalnej obecności online, która buduje zaufanie klientów',
    'audience.startups': 'Startupy',
    'audience.startups.desc': 'Szukasz strony, która jasno komunikuje innowacyjną ofertę',
    'audience.personal': 'Marki osobiste',
    'audience.personal.desc': 'Chcesz wyróżnić się i zbudować rozpoznawalny wizerunek eksperta',
    'audience.freelancers': 'Freelancerzy',
    'audience.freelancers.desc': 'Potrzebujesz wizytówki, która przyciąga idealnych klientów',
    
    // Problems
    'problems.title': 'Rozpoznajesz te problemy?',
    'problems.subtitle': 'Każdy z nich można rozwiązać — i właśnie tym się zajmuję',
    'problem1.title': 'Strona nie tłumaczy oferty w pierwszych sekundach',
    'problem1.desc': 'Użytkownik wchodzi i nie wie: co robisz, dla kogo i jaki jest następny krok. W praktyce wiele osób opuszcza stronę bardzo szybko.',
    'solution1': 'Porządkuję strukturę i przekaz: jasny nagłówek, hierarchia informacji, konkretne sekcje i czytelne CTA — tak, żeby oferta była zrozumiała od razu.',
    'problem2.title': 'Za dużo elementów, za mało decyzji',
    'problem2.desc': 'Przeładowane strony rozpraszają i utrudniają wykonanie akcji — rośnie chaos, spada konwersja.',
    'solution2': 'Stawiam na prostotę i logikę: tylko potrzebne sekcje, czytelne argumenty i jasna ścieżka „czytam → rozumiem → kontaktuję się".',
    'problem3.title': 'Brak zaufania przez pierwsze wrażenie',
    'problem3.desc': 'Pierwsza ocena strony dzieje się błyskawicznie — i mocno wpływa na to, czy ktoś uzna firmę za wiarygodną.',
    'solution3': 'Projektuję nowoczesny, spójny wygląd i układ treści, które budują profesjonalny wizerunek marki od pierwszego kontaktu.',
    
    // Advantages
    'advantages.title': 'Twoja przewaga',
    'advantages.subtitle': 'Nie konkuruję ceną — konkuruję wartością',
    'advantage1.title': 'Strategiczne projektowanie pod cel biznesowy',
    'advantage1.desc': 'Nie tylko ładny wygląd, ale analiza potrzeb i celów, by strona realnie wspierała sprzedaż i kontakt.',
    'advantage1.quote': 'Każdy projekt zaczyna się od analizy celu i potrzeb biznesowych. Zanim powstanie design, ustalamy do kogo strona ma trafić, co ma komunikować i jaki efekt ma przynieść.',
    'advantage2.title': 'Komunikacja skoncentrowana na użytkowniku',
    'advantage2.desc': 'Strony, które jasno i szybko pokazują co klient zyskuje — minimalizuje to frustrację i zwiększa konwersje.',
    'advantage3.title': 'Kompleksowe wsparcie',
    'advantage3.desc': 'Nie tylko tworzenie strony, ale opieka, aktualizacje i szybkie poprawki po wdrożeniu.',
    'advantage4.title': 'Elastyczność technologiczna',
    'advantage4.desc': 'Nie zamykam klienta w jednym systemie — dobieram narzędzie dokładnie do potrzeb.',
    
    // Services
    'services.title': 'Zakres usług',
    'services.subtitle': 'Każde rozwiązanie dobieram indywidualnie — w zależności od potrzeb i etapu rozwoju firmy',
    'service1.title': 'Strony wizytówki',
    'service1.desc': 'Dla firm i marek osobistych, które chcą jasno zaprezentować ofertę i budować zaufanie.',
    'service2.title': 'Landing pages',
    'service2.desc': 'Dla jednego konkretnego celu: kontakt, zapis, oferta.',
    'service3.title': 'Projekt struktury i treści',
    'service3.desc': 'Uporządkowanie oferty, rekomendacja sekcji i kluczowe komunikaty.',
    'service4.title': 'WordPress',
    'service4.desc': 'Nie „WordPress wszystko", tylko WordPress tam, gdzie ma sens.',
    'service5.title': 'Projekty custom',
    'service5.desc': 'Gdy WordPress to za dużo lub za mało — indywidualne rozwiązania.',
    'service6.title': 'Utrzymanie i rozwój',
    'service6.desc': 'Stała opieka po wdrożeniu: aktualizacje, poprawki, szybka reakcja.',
    
    // Process
    'process.title': 'Jak wygląda współpraca',
    'process.subtitle': 'Prosty proces, który prowadzi do konkretnych rezultatów',
    'process1.title': 'Darmowa konsultacja',
    'process1.desc': 'Zaczynamy od rozmowy, nie od wyceny. Poznaję Twój pomysł, ofertę i cele.',
    'process2.title': 'Analiza i koncepcja',
    'process2.desc': 'Ustalamy co strona ma realnie zrobić dla Twojego biznesu. Definiujemy cel, odbiorców i technologię.',
    'process3.title': 'Projekt i wdrożenie',
    'process3.desc': 'Projekt struktury, spójny design dopasowany do marki, wdrożenie techniczne i wersja mobilna.',
    'process4.title': 'Testy i uwagi',
    'process4.desc': 'Uwzględniamy Twoje uwagi, sprawdzamy czytelność i testujemy działanie strony.',
    'process5.title': 'Publikacja i wsparcie',
    'process5.desc': 'Publikacja strony, wdrożenie w obsługę i możliwość dalszej opieki. Nie zostajesz z projektem sam.',
    
    // Trust
    'trust.title': 'Dlaczego warto mi zaufać',
    'trust1.title': 'Projektuję strony, bo lubię je budować',
    'trust1.desc': 'Lubię cały proces — od pierwszego pomysłu, przez układanie struktur, po moment, w którym wszystko zaczyna działać jako całość.',
    'trust2.title': 'Rozwiązanie dopasowane do Ciebie',
    'trust2.desc': 'Dobieram technologię i zakres do realnych potrzeb projektu — WordPress lub rozwiązanie custom, zależnie od celu.',
    'trust3.title': 'Wsparcie po wdrożeniu',
    'trust3.desc': 'Nie znikam po oddaniu strony. Jeśli potrzebujesz zmian lub dalszego rozwoju — jestem do dyspozycji.',
    
    // CTA
    'cta.title': 'Porozmawiajmy o Twojej stronie',
    'cta.desc': 'Jeśli masz pomysł na stronę lub chcesz uporządkować obecną — napisz. Zaczniemy od darmowej, niezobowiązującej konsultacji i wrócę do Ciebie z wyceną w ciągu 24h.',
    'cta.button': 'Wyślij wiadomość',
    
    // Contact form
    'contact.name': 'Imię i nazwisko',
    'contact.name.placeholder': 'Jan Kowalski',
    'contact.email': 'Adres email',
    'contact.email.placeholder': 'jan@example.com',
    'contact.message': 'Wiadomość',
    'contact.message.placeholder': 'Opisz swój projekt lub zadaj pytanie...',
    'contact.success': 'Wiadomość wysłana!',
    'contact.success.desc': 'Dziękuję za kontakt. Odezwę się w ciągu 24 godzin.',
    
    // Navigation
    'nav.audience': 'Dla kogo',
    'nav.services': 'Usługi',
    'nav.process': 'Proces',
    'nav.contact': 'Kontakt',
    
    // Footer
    'footer.rights': 'Wszelkie prawa zastrzeżone',
  },
  en: {
    // Hero
    'hero.title': 'Websites that support your business growth',
    'hero.subtitle': 'A website that organizes your offer and strengthens your professional brand image.',
    'hero.cta': "Let's talk about your website",
    'hero.benefit1': 'Clear message',
    'hero.benefit2': 'Professional image',
    'hero.benefit3': 'Real goals',
    
    // Target audience
    'audience.title': 'Who is this service for',
    'audience.subtitle': 'If you recognize yourself in any of these descriptions — this offer is for you',
    'audience.small': 'Small businesses',
    'audience.small.desc': 'You need a professional online presence that builds customer trust',
    'audience.startups': 'Startups',
    'audience.startups.desc': 'You\'re looking for a website that clearly communicates your innovative offer',
    'audience.personal': 'Personal brands',
    'audience.personal.desc': 'You want to stand out and build a recognizable expert image',
    'audience.freelancers': 'Freelancers',
    'audience.freelancers.desc': 'You need a portfolio that attracts ideal clients',
    
    // Problems
    'problems.title': 'Do you recognize these problems?',
    'problems.subtitle': 'Each of them can be solved — and that\'s exactly what I do',
    'problem1.title': 'Website doesn\'t explain the offer in the first seconds',
    'problem1.desc': 'The user enters and doesn\'t know: what you do, for whom, and what\'s the next step. Many people leave the site very quickly.',
    'solution1': 'I organize structure and message: clear headline, information hierarchy, specific sections and readable CTAs — so the offer is understandable immediately.',
    'problem2.title': 'Too many elements, too few decisions',
    'problem2.desc': 'Overloaded pages distract and make it difficult to take action — chaos grows, conversion drops.',
    'solution2': 'I focus on simplicity and logic: only necessary sections, clear arguments and a clear path "read → understand → contact".',
    'problem3.title': 'Lack of trust through first impression',
    'problem3.desc': 'The first assessment of a website happens instantly — and strongly affects whether someone considers the company credible.',
    'solution3': 'I design a modern, consistent look and content layout that builds a professional brand image from first contact.',
    
    // Advantages
    'advantages.title': 'Your advantage',
    'advantages.subtitle': 'I don\'t compete on price — I compete on value',
    'advantage1.title': 'Strategic design for business goals',
    'advantage1.desc': 'Not just a nice look, but analysis of needs and goals so the website truly supports sales and contact.',
    'advantage1.quote': 'Every project starts with an analysis of goals and business needs. Before the design is created, we establish who the site should reach, what it should communicate, and what effect it should bring.',
    'advantage2.title': 'User-centered communication',
    'advantage2.desc': 'Websites that clearly and quickly show what the client gains — this minimizes frustration and increases conversions.',
    'advantage3.title': 'Comprehensive support',
    'advantage3.desc': 'Not just website creation, but care, updates and quick fixes after implementation.',
    'advantage4.title': 'Technological flexibility',
    'advantage4.desc': 'I don\'t lock the client into one system — I choose the tool exactly for their needs.',
    
    // Services
    'services.title': 'Scope of services',
    'services.subtitle': 'I tailor each solution individually — depending on needs and stage of company development',
    'service1.title': 'Business card websites',
    'service1.desc': 'For companies and personal brands that want to clearly present their offer and build trust.',
    'service2.title': 'Landing pages',
    'service2.desc': 'For one specific goal: contact, signup, offer.',
    'service3.title': 'Structure and content design',
    'service3.desc': 'Organizing the offer, section recommendations and key messages.',
    'service4.title': 'WordPress',
    'service4.desc': 'Not "WordPress everything", just WordPress where it makes sense.',
    'service5.title': 'Custom projects',
    'service5.desc': 'When WordPress is too much or too little — individual solutions.',
    'service6.title': 'Maintenance and development',
    'service6.desc': 'Ongoing support after implementation: updates, fixes, quick response.',
    
    // Process
    'process.title': 'How collaboration works',
    'process.subtitle': 'A simple process that leads to concrete results',
    'process1.title': 'Free consultation',
    'process1.desc': 'We start with a conversation, not a quote. I learn about your idea, offer and goals.',
    'process2.title': 'Analysis and concept',
    'process2.desc': 'We determine what the website should really do for your business. We define the goal, audience and technology.',
    'process3.title': 'Design and implementation',
    'process3.desc': 'Structure design, consistent design matched to the brand, technical implementation and mobile version.',
    'process4.title': 'Tests and feedback',
    'process4.desc': 'We take your feedback into account, check readability and test the website.',
    'process5.title': 'Publication and support',
    'process5.desc': 'Website publication, implementation training and possibility of further care. You\'re not left alone with the project.',
    
    // Trust
    'trust.title': 'Why trust me',
    'trust1.title': 'I design websites because I love building them',
    'trust1.desc': 'I love the whole process — from the first idea, through arranging structures, to the moment when everything starts working as a whole.',
    'trust2.title': 'Solution tailored to you',
    'trust2.desc': 'I match technology and scope to the real needs of the project — WordPress or custom solution, depending on the goal.',
    'trust3.title': 'Support after implementation',
    'trust3.desc': 'I don\'t disappear after handing over the site. If you need changes or further development — I\'m at your disposal.',
    
    // CTA
    'cta.title': "Let's talk about your website",
    'cta.desc': 'If you have an idea for a website or want to organize your current one — write to me. We\'ll start with a free, no-obligation consultation and I\'ll get back to you with a quote within 24h.',
    'cta.button': 'Send message',
    
    // Contact form
    'contact.name': 'Full name',
    'contact.name.placeholder': 'John Doe',
    'contact.email': 'Email address',
    'contact.email.placeholder': 'john@example.com',
    'contact.message': 'Message',
    'contact.message.placeholder': 'Describe your project or ask a question...',
    'contact.success': 'Message sent!',
    'contact.success.desc': 'Thank you for reaching out. I\'ll get back to you within 24 hours.',
    
    // Navigation
    'nav.audience': 'For whom',
    'nav.services': 'Services',
    'nav.process': 'Process',
    'nav.contact': 'Contact',
    
    // Footer
    'footer.rights': 'All rights reserved',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('pl');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
