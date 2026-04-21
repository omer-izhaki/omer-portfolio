'use client';
import React from 'react';
import { useI18n } from '@/lib/i18n';
import SectionHeading from './SectionHeading';

interface Role {
  titleKey: string;
  orgKey: string;
  periodKey: string;
  bullets: string[];
}

const roles: Role[] = [
  {
    titleKey: 'experience.role1.title',
    orgKey: 'experience.role1.org',
    periodKey: 'experience.role1.period',
    bullets: ['experience.role1.b1', 'experience.role1.b2'],
  },
  {
    titleKey: 'experience.role2.title',
    orgKey: 'experience.role2.org',
    periodKey: 'experience.role2.period',
    bullets: ['experience.role2.b1', 'experience.role2.b2'],
  },
  {
    titleKey: 'experience.role3.title',
    orgKey: 'experience.role3.org',
    periodKey: 'experience.role3.period',
    bullets: ['experience.role3.b1'],
  },
];

export default function Experience() {
  const { t } = useI18n();

  return (
    <section id="experience" className="py-24 md:py-32 px-6 md:px-12 bg-light-navy/30">
      <div className="max-w-3xl mx-auto">
        <SectionHeading number="02" title={t('experience.title')} />

        {/* Vertical timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute start-3 top-2 bottom-2 w-px bg-lightest-navy" />

          <div className="space-y-12">
            {roles.map((role, idx) => (
              <div key={idx} className="relative ps-10">
                {/* Timeline dot */}
                <div className="absolute start-0 top-2 w-6 h-6 rounded-full border-2 border-accent bg-navy flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                </div>

                {/* Content */}
                <div className="group">
                  {/* Title */}
                  <h3 className="text-lg md:text-xl font-semibold text-lightest-slate leading-snug">
                    {t(role.titleKey)}{' '}
                    <span className="text-accent">@ {t(role.orgKey)}</span>
                  </h3>

                  {/* Period */}
                  <p className="font-mono text-xs text-slate mt-1 mb-4">
                    {t(role.periodKey)}
                  </p>

                  {/* Bullets */}
                  <ul className="space-y-2">
                    {role.bullets.map((bulletKey) => (
                      <li
                        key={bulletKey}
                        className="flex items-start gap-3 text-slate text-sm md:text-base"
                      >
                        <span className="text-accent mt-1 shrink-0 font-mono text-xs">▹</span>
                        <span>{t(bulletKey)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
