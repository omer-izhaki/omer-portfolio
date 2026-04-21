'use client';
import React from 'react';
import { useI18n } from '@/lib/i18n';
import SectionHeading from './SectionHeading';
import { EmailIcon, LinkedInIcon, GithubIcon, PhoneIcon } from './icons';

const contactLinks = [
  {
    labelKey: 'contact.email',
    href: 'mailto:omer200338@gmail.com',
    display: 'omer200338@gmail.com',
    Icon: EmailIcon,
  },
  {
    labelKey: 'contact.linkedin',
    href: 'https://www.linkedin.com/in/omer-itzhaki-0a587a269/',
    display: 'linkedin.com/in/omer-itzhaki',
    Icon: LinkedInIcon,
  },
  {
    labelKey: 'contact.github',
    href: 'https://github.com/omer-izhaki',
    display: 'github.com/omer-izhaki',
    Icon: GithubIcon,
  },
  {
    labelKey: 'contact.phone',
    href: 'tel:+972528559227',
    display: '052-855-9227',
    Icon: PhoneIcon,
  },
];

export default function Contact() {
  const { t } = useI18n();

  return (
    <section id="contact" className="py-24 md:py-32 px-6 md:px-12 bg-light-navy/30">
      <div className="max-w-3xl mx-auto">
        <SectionHeading number="04" title={t('contact.title')} />

        <p className="text-slate text-base md:text-lg leading-relaxed mb-12 max-w-xl">
          {t('contact.tagline')}
        </p>

        {/* 2x2 grid of contact buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {contactLinks.map(({ labelKey, href, display, Icon }) => (
            <a
              key={labelKey}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="group flex items-center gap-4 p-4 bg-light-navy rounded-lg border border-lightest-navy hover:border-accent/50 hover:bg-lightest-navy/40 transition-all duration-200"
            >
              <div className="shrink-0 w-10 h-10 rounded-full bg-navy flex items-center justify-center border border-lightest-navy group-hover:border-accent/40 transition-colors">
                <Icon size={18} className="text-accent" />
              </div>
              <div className="min-w-0">
                <p className="font-mono text-xs text-slate/70 mb-0.5">{t(labelKey)}</p>
                <p className="text-lightest-slate text-sm font-medium truncate group-hover:text-accent transition-colors">
                  {display}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
