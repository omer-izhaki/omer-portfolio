'use client';
import React from 'react';
import { useI18n } from '@/lib/i18n';
import SectionHeading from './SectionHeading';

const techStack = [
  'Python',
  'Java',
  'TypeScript',
  'C/C++',
  'React Native',
  'PyTorch',
  'Pandas',
  'NumPy',
  'AWS',
  'Google Cloud',
  'Linux/Bash',
  'MySQL',
  'Git',
  'LSTM',
  'Alpaca API',
  'Telegram Bot API',
];

export default function About() {
  const { t } = useI18n();

  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-3xl mx-auto">
        <SectionHeading number="01" title={t('about.title')} />

        <div className="space-y-5 text-slate leading-relaxed text-base md:text-lg mb-10">
          <p>{t('about.p1')}</p>
          <p>{t('about.p2')}</p>
        </div>

        {/* Tech stack */}
        <div>
          <p className="font-mono text-sm text-accent mb-4">{t('about.stackTitle')}</p>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="font-mono text-xs text-accent bg-lightest-navy px-3 py-1.5 rounded border border-accent/20 hover:border-accent/60 transition-colors duration-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
