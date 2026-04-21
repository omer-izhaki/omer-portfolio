'use client';
import React from 'react';
import { useI18n } from '@/lib/i18n';

export default function LanguageToggle() {
  const { locale, setLocale } = useI18n();

  return (
    <div className="flex items-center rounded-full border border-lightest-navy overflow-hidden text-sm font-mono">
      <button
        onClick={() => setLocale('en')}
        className={`px-3 py-1 transition-colors duration-200 ${
          locale === 'en'
            ? 'bg-accent text-navy font-semibold'
            : 'text-slate hover:text-accent'
        }`}
        aria-label="Switch to English"
        aria-pressed={locale === 'en'}
      >
        EN
      </button>
      <button
        onClick={() => setLocale('he')}
        className={`px-3 py-1 transition-colors duration-200 ${
          locale === 'he'
            ? 'bg-accent text-navy font-semibold'
            : 'text-slate hover:text-accent'
        }`}
        aria-label="Switch to Hebrew"
        aria-pressed={locale === 'he'}
      >
        עב
      </button>
    </div>
  );
}
