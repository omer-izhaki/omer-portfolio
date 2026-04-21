'use client';
import React from 'react';
import Image from 'next/image';
import { useI18n } from '@/lib/i18n';
import { LocationIcon, ArrowRightIcon } from './icons';

export default function Hero() {
  const { t } = useI18n();

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-20 pb-16 px-6 md:px-12"
    >
      <div className="max-w-5xl mx-auto w-full">
        <div className="flex flex-col-reverse md:flex-row items-center md:items-start gap-12 md:gap-16">
          {/* Text content */}
          <div className="flex-1 flex flex-col gap-5 text-center md:text-start">
            {/* Greeting */}
            <p className="font-mono text-accent text-sm md:text-base animate-fade-in">
              {t('hero.greeting')}
            </p>

            {/* Name */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-lightest-slate leading-tight animate-slide-up">
              {t('hero.name')}.
            </h1>

            {/* Tagline */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-accent leading-snug animate-slide-up">
              {t('hero.tagline')}
            </h2>

            {/* Open-to-work badge */}
            <div className="flex justify-center md:justify-start">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/30 text-accent text-sm font-mono">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                {t('hero.openToWork')}
              </span>
            </div>

            {/* Open-to-work detail + edu line */}
            <div className="text-slate leading-relaxed max-w-xl mx-auto md:mx-0 space-y-2 text-sm md:text-base">
              <p>{t('hero.openToWorkDetail')}</p>
              <p className="text-light-slate">{t('hero.eduLine')}</p>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start mt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-navy font-semibold rounded-md hover:bg-accent/90 transition-colors duration-200 text-sm md:text-base"
              >
                {t('hero.cta.contact')}
                <ArrowRightIcon size={16} />
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 border border-accent text-accent font-semibold rounded-md hover:bg-accent/10 transition-colors duration-200 text-sm md:text-base"
              >
                {t('hero.cta.projects')}
              </a>
            </div>

            {/* Location */}
            <p className="flex items-center gap-2 justify-center md:justify-start text-slate text-sm mt-1 font-mono">
              <LocationIcon size={14} className="text-accent" />
              {t('hero.location')}
            </p>
          </div>

          {/* Photo */}
          <div className="shrink-0 flex justify-center md:justify-end">
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72">
              {/* Accent border offset box */}
              <div className="absolute inset-0 rounded-full border-2 border-accent translate-x-3 translate-y-3 opacity-60" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-accent bg-light-navy">
                <Image
                  src="/omer.jpg"
                  alt={t('hero.photoAlt')}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
