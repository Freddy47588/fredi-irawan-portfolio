import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { translations } from '../locales';
import type { Locale, Translation } from '../types';

const STORAGE_KEY = 'portfolio-language';
interface LanguageContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Translation;
}
const LanguageContext = createContext<LanguageContextValue | null>(null);

const getInitialLocale = (): Locale => {
  try {
    return localStorage.getItem(STORAGE_KEY) === 'id' ? 'id' : 'en';
  } catch {
    return 'en';
  }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(getInitialLocale);
  const setLocale = (nextLocale: Locale) => {
    setLocaleState(nextLocale);
    try {
      localStorage.setItem(STORAGE_KEY, nextLocale);
    } catch {
      /* Storage may be unavailable. */
    }
  };
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);
  const value = useMemo(() => ({ locale, setLocale, t: translations[locale] }), [locale]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

// This small context intentionally keeps its provider and consumer hook together.
// eslint-disable-next-line react-refresh/only-export-components
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
}
