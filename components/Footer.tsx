'use client';

import React from 'react';
import { useI18n } from '@/lib/i18n';
import { GithubIcon, LinkedInIcon } from './icons';

// Small inline heart SVG — no icon library needed
function HeartIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className="inline-block w-4 h-4 text-accent"
    >
      <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
    </svg>
  );
}

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className="py-8 px-6 text-center border-t border-lightest-navy/20">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-4">
        {/* Social icon row */}
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/omer-izhaki"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-slate hover:text-accent transition-colors duration-200"
          >
            <GithubIcon size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/omer-itzhaki-0a587a269/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-slate hover:text-accent transition-colors duration-200"
          >
            <LinkedInIcon size={20} />
          </a>
        </div>

        {/* Built-by line */}
        <p className="font-mono text-xs text-slate">
          {t('footer.built')} <HeartIcon />
        </p>
      </div>
    </footer>
  );
}
