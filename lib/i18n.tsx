'use client';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { dictionaries, Locale } from './dictionaries';

interface I18nContextType {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (key: string) => string;
  dir: 'ltr' | 'rtl';
}

const I18nContext = createContext<I18nContextType>({} as I18nContextType);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('en');

  useEffect(() => {
    const saved = localStorage.getItem('portfolio.lang') as Locale | null;
    if (saved === 'en' || saved === 'he') setLocaleState(saved);
  }, []);

  useEffect(() => {
    const dir = locale === 'he' ? 'rtl' : 'ltr';
    document.documentElement.lang = locale;
    document.documentElement.dir = dir;
    localStorage.setItem('portfolio.lang', locale);
  }, [locale]);

  const setLocale = (l: Locale) => setLocaleState(l);
  const t = (key: string): string => (dictionaries[locale] as Record<string, string>)[key] ?? key;
  const dir = locale === 'he' ? 'rtl' : 'ltr';

  return <I18nContext.Provider value={{ locale, setLocale, t, dir }}>{children}</I18nContext.Provider>;
}

export const useI18n = () => useContext(I18nContext);
