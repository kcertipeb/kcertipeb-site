import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from 'react';

export type Language = 'fr' | 'nl';

interface LanguageContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
  isFrench: boolean;
  isDutch: boolean;
}

const STORAGE_KEY = 'site_language';

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

const getInitialLanguage = (): Language => {
  if (typeof window === 'undefined') {
    return 'fr';
  }

  const storedLanguage = window.localStorage.getItem(STORAGE_KEY);
  if (storedLanguage === 'fr' || storedLanguage === 'nl') {
    return storedLanguage;
  }

  return window.navigator.language.toLowerCase().startsWith('nl') ? 'nl' : 'fr';
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, language);
    document.documentElement.lang = language === 'nl' ? 'nl-BE' : 'fr-BE';
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      isFrench: language === 'fr',
      isDutch: language === 'nl',
    }),
    [language],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }

  return context;
}
